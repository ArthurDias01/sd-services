"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { client, queryClient } from "@/utils/orpc";
import { ImageUploader } from "@/components/image-uploader";

import { cn } from "@/lib/utils";

const HERO_IMAGE_KEY = "hero_image_url";
const CONTACT_EMAIL_KEY = "contact_email";
const CONTACT_PHONE_KEY = "contact_phone";

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-[var(--p-deep-walnut)]";
const inputClass =
  "flex h-9 w-full border border-[var(--p-tan)] bg-[var(--p-white)] px-3 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)]";
const btnPrimary =
  "inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-5 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2 disabled:opacity-50";
const btnOutline =
  "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2";

export default function SettingsPage() {
  const heroQuery = useQuery({
    queryKey: ["setting", HERO_IMAGE_KEY],
    queryFn: () => client.setting.get({ key: HERO_IMAGE_KEY }),
  });

  const emailQuery = useQuery({
    queryKey: ["setting", CONTACT_EMAIL_KEY],
    queryFn: () => client.setting.get({ key: CONTACT_EMAIL_KEY }),
  });

  const phoneQuery = useQuery({
    queryKey: ["setting", CONTACT_PHONE_KEY],
    queryFn: () => client.setting.get({ key: CONTACT_PHONE_KEY }),
  });

  const projectsQuery = useQuery({
    queryKey: ["projects-admin"],
    queryFn: () => client.project.listAdmin(),
  });

  const [localUrl, setLocalUrl] = useState<string | null>(null);
  const currentUrl = localUrl ?? heroQuery.data ?? "";

  const [localEmail, setLocalEmail] = useState<string | null>(null);
  const currentEmail = localEmail ?? emailQuery.data ?? "";

  const [localPhone, setLocalPhone] = useState<string | null>(null);
  const currentPhone = localPhone ?? phoneQuery.data ?? "";

  const saveMutation = useMutation({
    mutationFn: (value: string) =>
      client.setting.upsert({ key: HERO_IMAGE_KEY, value }),
    onSuccess: () => {
      toast.success("Hero image updated");
      queryClient.invalidateQueries({ queryKey: ["setting", HERO_IMAGE_KEY] });
    },
    onError: (e: Error) => toast.error(e.message ?? "Failed to save"),
  });

  const saveContactMutation = useMutation({
    mutationFn: async () => {
      await Promise.all([
        client.setting.upsert({ key: CONTACT_EMAIL_KEY, value: currentEmail }),
        client.setting.upsert({ key: CONTACT_PHONE_KEY, value: currentPhone }),
      ]);
    },
    onSuccess: () => {
      toast.success("Contact details updated");
      queryClient.invalidateQueries({ queryKey: ["setting", CONTACT_EMAIL_KEY] });
      queryClient.invalidateQueries({ queryKey: ["setting", CONTACT_PHONE_KEY] });
    },
    onError: (e: Error) => toast.error(e.message ?? "Failed to save"),
  });

  function handleSave() {
    saveMutation.mutate(currentUrl);
  }

  function handleClear() {
    setLocalUrl("");
  }

  const projects = projectsQuery.data ?? [];
  const projectsWithImages = projects.filter(
    (p): p is typeof p & { featuredImageUrl: string } =>
      typeof (p as { featuredImageUrl?: string }).featuredImageUrl === "string" &&
      (p as { featuredImageUrl?: string }).featuredImageUrl !== "",
  );

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-balance text-[var(--p-deep-walnut)]">
          Site settings
        </h1>
        <div className="mt-2 h-px w-10 bg-[var(--p-tan)]" aria-hidden />
        <p className="mt-3 text-sm text-pretty text-[var(--p-coffee-bean)]">
          Configure the landing page hero image and other site-wide settings.
        </p>
      </div>

      <fieldset className="space-y-5 border border-[var(--p-tan)] bg-[var(--p-white)] p-6">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]">
          Hero image
        </legend>

        <ImageUploader
          multiple={false}
          value={currentUrl ? [currentUrl] : []}
          onChange={(urls) => setLocalUrl(urls[0] ?? "")}
        />

        <div className="space-y-1.5">
          <label htmlFor="hero-url" className={labelClass}>Or paste URL</label>
          <input
            id="hero-url"
            className={inputClass}
            value={currentUrl}
            onChange={(e) => setLocalUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>

        {projectsWithImages.length > 0 && (
          <div className="space-y-2">
            <label className={labelClass}>Or select from a project</label>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {projectsWithImages.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setLocalUrl(p.featuredImageUrl)}
                  className={cn(
                    "group relative aspect-video overflow-hidden border border-[var(--p-tan)] outline-none transition-all",
                    currentUrl === p.featuredImageUrl
                      ? "ring-2 ring-[var(--p-deep-walnut)] ring-offset-2"
                      : "hover:ring-1 hover:ring-[var(--p-toffee)]",
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.featuredImageUrl}
                    alt={p.title}
                    className="size-full object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-[var(--p-deep-walnut)]/80 px-1.5 py-0.5 text-[10px] text-[var(--p-white)] truncate">
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            className={btnPrimary}
            onClick={handleSave}
            disabled={saveMutation.isPending}
          >
            {saveMutation.isPending ? "Saving…" : "Save"}
          </button>
          <button type="button" className={btnOutline} onClick={handleClear}>
            Clear
          </button>
        </div>
      </fieldset>

      {/* ── Contact details ── */}
      <fieldset className="space-y-5 border border-[var(--p-tan)] bg-[var(--p-white)] p-6">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]">
          Contact details
        </legend>
        <p className="text-xs text-pretty text-[var(--p-coffee-bean)]/70">
          Shown in the landing page contact section. These replace the
          placeholder values visible to visitors.
        </p>

        <div className="space-y-1.5">
          <label htmlFor="contact-email" className={labelClass}>
            Contact email
          </label>
          <input
            id="contact-email"
            type="email"
            className={inputClass}
            value={currentEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
            placeholder="hello@yourcompany.com"
          />
          <p className="text-xs text-[var(--p-coffee-bean)]/50">
            Used as the mailto: address for the &ldquo;Request a quote&rdquo; button.
          </p>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={inputClass}
            value={currentPhone}
            onChange={(e) => setLocalPhone(e.target.value)}
            placeholder="+1 (000) 000-0000"
          />
          <p className="text-xs text-[var(--p-coffee-bean)]/50">
            Displayed as a clickable tel: link. Use E.164 format for the href,
            e.g.{" "}
            <code className="font-mono">+17045550199</code>.
          </p>
        </div>

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            className={btnPrimary}
            onClick={() => saveContactMutation.mutate()}
            disabled={saveContactMutation.isPending}
          >
            {saveContactMutation.isPending ? "Saving…" : "Save"}
          </button>
        </div>
      </fieldset>
    </div>
  );
}
