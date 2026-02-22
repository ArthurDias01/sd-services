"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { client } from "@/utils/orpc";

import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogViewport,
} from "@/components/ui/alert-dialog";

import { ProjectForm } from "../../project-form";

const btnOutline =
  "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2";
const btnDanger =
  "inline-flex h-9 items-center justify-center border-2 border-red-700 bg-red-700 px-5 text-xs font-semibold text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2";

function mapProjectToForm(project: {
  slug: string;
  title: string;
  description: string;
  featuredImageUrl: string | null;
  published: boolean;
  images: { url: string; sortOrder: number }[];
}) {
  const imageUrls = [...(project.images ?? [])]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((i) => i.url);
  return {
    slug: project.slug,
    title: project.title,
    description: project.description,
    featuredImageUrl: project.featuredImageUrl ?? "",
    published: project.published,
    imageUrls,
  };
}

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data: project, isPending } = useQuery({
    queryKey: ["project", id],
    queryFn: () => client.project.getById({ id }),
    enabled: !!id,
  });

  const deleteMutation = useMutation({
    mutationFn: () => client.project.delete({ id }),
    onSuccess: () => {
      toast.success("Project deleted");
      router.push("/cms/projects");
    },
    onError: (e: Error) => toast.error(e.message ?? "Failed to delete"),
  });

  const [deleteOpen, setDeleteOpen] = useState(false);
  function confirmDelete() {
    setDeleteOpen(false);
    deleteMutation.mutate();
  }

  if (isPending || !project) {
    return (
      <div className="max-w-2xl space-y-6">
        <div className="h-7 w-40 rounded bg-[var(--p-warm-white)]" />
        <div className="h-64 w-full rounded bg-[var(--p-warm-white)]" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-balance text-[var(--p-deep-walnut)]">
            Edit project
          </h1>
          <div className="mt-2 h-px w-10 bg-[var(--p-tan)]" aria-hidden />
        </div>
        <div className="flex shrink-0 gap-2">
          <Link
            href={`/projects/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            View on site
          </Link>
          <button
            type="button"
            className={btnDanger}
            onClick={() => setDeleteOpen(true)}
            aria-label="Delete project"
          >
            Delete
          </button>
        </div>
      </div>

      <ProjectForm
        mode="edit"
        id={id}
        initialData={mapProjectToForm(project)}
      />

      <AlertDialogRoot open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogViewport>
            <AlertDialogPopup>
              <AlertDialogTitle>Delete project?</AlertDialogTitle>
              <AlertDialogDescription>
                This cannot be undone. The project and its images will be removed.
              </AlertDialogDescription>
              <div className="flex justify-end gap-2">
                <AlertDialogClose variant="outline">Cancel</AlertDialogClose>
                <button type="button" className={btnDanger} onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </AlertDialogPopup>
          </AlertDialogViewport>
        </AlertDialogPortal>
      </AlertDialogRoot>
    </div>
  );
}
