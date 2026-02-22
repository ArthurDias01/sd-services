"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { client } from "@/utils/orpc";
import { ImageUploader } from "@/components/image-uploader";
import { cn } from "@/lib/utils";

type ProjectFormValues = {
  slug: string;
  title: string;
  description: string;
  featuredImageUrl: string;
  published: boolean;
  imageUrls: string[];
};

type FormErrors = Partial<Record<keyof ProjectFormValues, string>>;

const defaultValues: ProjectFormValues = {
  slug: "",
  title: "",
  description: "",
  featuredImageUrl: "",
  published: false,
  imageUrls: [],
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function validateField(
  name: keyof ProjectFormValues,
  value: ProjectFormValues[keyof ProjectFormValues],
  existingSlugs: string[] = [],
): string | undefined {
  if (name === "slug") {
    const v = value as string;
    if (!v.trim()) return "Slug is required";
    if (!SLUG_RE.test(v))
      return "Slug must be lowercase letters, numbers, and hyphens only";
    if (existingSlugs.includes(v.trim().toLowerCase()))
      return "This slug is already used by another project.";
  }
  if (name === "title") {
    const v = value as string;
    if (!v.trim()) return "Title is required";
  }
  return undefined;
}

function validateAll(
  values: ProjectFormValues,
  existingSlugs: string[] = [],
): FormErrors {
  const errors: FormErrors = {};
  const fields: (keyof ProjectFormValues)[] = ["slug", "title"];
  for (const f of fields) {
    const err = validateField(f, values[f], existingSlugs);
    if (err) errors[f] = err;
  }
  return errors;
}

const labelClass =
  "block text-xs font-semibold uppercase tracking-wider text-[var(--p-deep-walnut)]";

function inputClass(hasError?: boolean) {
  return cn(
    "flex h-9 w-full border bg-[var(--p-white)] px-3 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1",
    hasError
      ? "border-red-500 focus-visible:ring-red-400"
      : "border-[var(--p-tan)] focus-visible:ring-[var(--p-toffee)]",
  );
}

const btnPrimary =
  "inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-5 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2 disabled:opacity-50";
const btnOutline =
  "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

export function ProjectForm({
  mode,
  id,
  initialData,
}: {
  mode: "create" | "edit";
  id?: string;
  initialData?: ProjectFormValues | null;
}) {
  const router = useRouter();
  const [values, setValues] = useState<ProjectFormValues>(
    initialData ?? defaultValues,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const slugManuallyEdited = useRef(!!initialData?.slug);
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const { data: projects } = useQuery({
    queryKey: ["projects", "admin"],
    queryFn: () => client.project.listAdmin(),
  });
  const existingSlugs =
    mode === "create"
      ? (projects?.map((p) => p.slug) ?? [])
      : (projects?.filter((p) => p.id !== id).map((p) => p.slug) ?? []);

  const createMutation = useMutation({
    mutationFn: (input: Parameters<typeof client.project.create>[0]) =>
      client.project.create(input),
    onSuccess: () => {
      toast.success("Project created");
      router.push("/cms/projects");
    },
    onError: (e: Error) => toast.error(e.message ?? "Failed to create"),
  });

  const updateMutation = useMutation({
    mutationFn: (input: Parameters<typeof client.project.update>[0]) =>
      client.project.update(input),
    onSuccess: () => {
      toast.success("Project updated");
      router.push("/cms/projects");
    },
    onError: (e: Error) => toast.error(e.message ?? "Failed to update"),
  });

  const isPending = createMutation.isPending || updateMutation.isPending;

  const handleBlur = useCallback(
    (name: keyof ProjectFormValues) => {
      const err = validateField(name, values[name], existingSlugs);
      setErrors((prev) => ({ ...prev, [name]: err }));
    },
    [values, existingSlugs],
  );

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    setValues((v) => ({
      ...v,
      title,
      slug: slugManuallyEdited.current ? v.slug : toSlug(title),
    }));
    if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
    if (!slugManuallyEdited.current && errors.slug) {
      setErrors((prev) => ({ ...prev, slug: undefined }));
    }
  }

  function handleSlugChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    const normalised = toSlug(raw) || raw.replace(/[^a-z0-9-]/gi, "").toLowerCase();
    slugManuallyEdited.current = true;
    setValues((v) => ({ ...v, slug: normalised }));
    if (errors.slug) setErrors((prev) => ({ ...prev, slug: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateAll(values, existingSlugs);
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // Focus first invalid field
      requestAnimationFrame(() => {
        firstErrorRef.current?.focus();
      });
      return;
    }

    const payload = {
      slug: values.slug,
      title: values.title.trim(),
      description: values.description,
      featuredImageUrl: values.featuredImageUrl.trim() || null,
      published: values.published,
      imageUrls: values.imageUrls.filter(Boolean),
    };
    if (mode === "create") {
      createMutation.mutate(payload);
    } else if (id) {
      updateMutation.mutate({ id, ...payload });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6" noValidate>
      {/* Details */}
      <fieldset className="space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]">
          Details
        </legend>

        {/* Title — first so auto-slug works */}
        <div className="space-y-1.5">
          <label htmlFor="title" className={labelClass}>
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            ref={(el) => {
              if (errors.title && !errors.slug) firstErrorRef.current = el;
            }}
            className={inputClass(!!errors.title)}
            value={values.title}
            onChange={handleTitleChange}
            onBlur={() => handleBlur("title")}
            placeholder="Sharon Lane Kitchen"
          />
          <FieldError message={errors.title} />
        </div>

        {/* Slug */}
        <div className="space-y-1.5">
          <label htmlFor="slug" className={labelClass}>
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="slug"
            ref={(el) => {
              if (errors.slug) firstErrorRef.current = el;
            }}
            className={inputClass(!!errors.slug)}
            value={values.slug}
            onChange={handleSlugChange}
            onBlur={() => handleBlur("slug")}
            placeholder="sharon-lane-kitchen"
          />
          <p className="text-xs text-pretty text-[var(--p-coffee-bean)]/60">
            Auto-generated from title. Lowercase, numbers, hyphens only — used in{" "}
            <code className="font-mono">/projects/[slug]</code>.
          </p>
          <FieldError message={errors.slug} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="description" className={labelClass}>
            Description (Markdown)
          </label>
          <textarea
            id="description"
            className="flex min-h-40 w-full border border-[var(--p-tan)] bg-[var(--p-white)] px-3 py-2 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)]"
            value={values.description}
            onChange={(e) =>
              setValues((v) => ({ ...v, description: e.target.value }))
            }
          />
        </div>
      </fieldset>

      {/* Featured image */}
      <fieldset className="space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]">
          Featured image
        </legend>
        <p className="text-xs text-[var(--p-coffee-bean)]/60">
          The main image shown on the project card and hero. Upload one or paste a URL.
        </p>
        <ImageUploader
          multiple={false}
          value={values.featuredImageUrl ? [values.featuredImageUrl] : []}
          onChange={(urls) => {
            setValues((v) => ({ ...v, featuredImageUrl: urls[0] ?? "" }));
            setErrors((prev) => ({ ...prev, featuredImageUrl: undefined }));
          }}
          disabled={isPending}
        />
        <div className="space-y-1">
          <label htmlFor="featured-url" className={labelClass}>
            Or paste URL
          </label>
          <input
            id="featured-url"
            ref={(el) => {
              if (errors.featuredImageUrl && !errors.slug && !errors.title)
                firstErrorRef.current = el;
            }}
            className={inputClass(!!errors.featuredImageUrl)}
            value={values.featuredImageUrl}
            onChange={(e) => {
              setValues((v) => ({ ...v, featuredImageUrl: e.target.value }));
              if (errors.featuredImageUrl)
                setErrors((prev) => ({ ...prev, featuredImageUrl: undefined }));
            }}
            onBlur={() => handleBlur("featuredImageUrl")}
            placeholder="https://..."
          />
          <FieldError message={errors.featuredImageUrl} />
        </div>
      </fieldset>

      {/* Gallery */}
      <fieldset className="space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]">
          Gallery images
        </legend>
        <p className="text-xs text-[var(--p-coffee-bean)]/60">
          Shown in the carousel on the project page. Select multiple files at once or drag &amp; drop.
        </p>
        <ImageUploader
          multiple
          value={values.imageUrls}
          onChange={(urls) => setValues((v) => ({ ...v, imageUrls: urls }))}
          disabled={isPending}
        />
      </fieldset>

      {/* Publishing */}
      <fieldset className="space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]">
          Publishing
        </legend>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={values.published}
            onChange={(e) =>
              setValues((v) => ({ ...v, published: e.target.checked }))
            }
            className="size-4 accent-[var(--p-deep-walnut)]"
          />
          <span className="text-sm text-[var(--p-dark-walnut)]">
            Published — visible on the public site
          </span>
        </label>
      </fieldset>

      {/* Submit */}
      <div className="flex gap-3">
        <button type="submit" className={btnPrimary} disabled={isPending}>
          {mode === "create" ? "Create project" : "Save changes"}
        </button>
        <button
          type="button"
          className={btnOutline}
          onClick={() => router.push("/cms/projects")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
