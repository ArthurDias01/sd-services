"use client";

import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";

import { proxyImageUrlIfNeeded } from "@/lib/image-url";
import { cn } from "@/lib/utils";

export type UploadedImage = { url: string; previewUrl: string };

interface ImageUploaderProps {
  /** Current list of already-uploaded image URLs */
  value: string[];
  onChange: (urls: string[]) => void;
  /** Allow multiple images (default true) */
  multiple?: boolean;
  className?: string;
  disabled?: boolean;
}

async function uploadFiles(files: File[]): Promise<string[]> {
  const formData = new FormData();
  for (const file of files) {
    formData.append("files", file);
  }
  const res = await fetch(
    typeof window !== "undefined"
      ? `${window.location.origin}/api/upload`
      : "/api/upload",
    { method: "POST", body: formData, credentials: "include" },
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? "Upload failed");
  }
  const data = (await res.json()) as { urls?: string[]; url?: string };
  return data.urls ?? (data.url ? [data.url] : []);
}

export function ImageUploader({
  value,
  onChange,
  multiple = true,
  className,
  disabled = false,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingCount, setUploadingCount] = useState(0);

  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const list = Array.from(files).filter((f) => f.type.startsWith("image/"));
      if (list.length === 0) return;
      if (!multiple && list.length > 1) {
        toast.error("Only one image allowed here.");
        return;
      }
      setUploading(true);
      setUploadingCount(list.length);
      try {
        const urls = await uploadFiles(list);
        onChange(multiple ? [...value, ...urls] : urls);
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Upload failed");
      } finally {
        setUploading(false);
        setUploadingCount(0);
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [multiple, onChange, value],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      if (disabled || uploading) return;
      handleFiles(e.dataTransfer.files);
    },
    [disabled, handleFiles, uploading],
  );

  const handleRemove = (url: string) => {
    onChange(value.filter((u) => u !== url));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const showDropZone = multiple || value.length === 0;

  return (
    <div className={cn("space-y-3", className)}>
      {/* Thumbnails */}
      {value.length > 0 && (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
          {value.map((url) => (
            <div
              key={url}
              className="group relative aspect-square overflow-hidden border border-[var(--p-tan)] bg-[var(--p-warm-white)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proxyImageUrlIfNeeded(url)}
                alt=""
                className="size-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemove(url)}
                disabled={disabled || uploading}
                aria-label="Remove image"
                className="absolute right-1 top-1 flex size-5 items-center justify-center bg-black/70 text-white opacity-0 outline-none transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-white"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}

          {/* In-progress placeholders */}
          {uploading &&
            Array.from({ length: uploadingCount }).map((_, i) => (
              <div
                key={`uploading-${i}`}
                className="aspect-square border border-[var(--p-tan)] bg-[var(--p-warm-white)]"
                aria-hidden
              >
                <div className="size-full animate-pulse bg-[var(--p-tan)]/30" />
              </div>
            ))}
        </div>
      )}

      {/* Drop zone */}
      {showDropZone && (
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Upload images — click or drag and drop"
          aria-disabled={disabled || uploading}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => !disabled && !uploading && inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!disabled && !uploading) inputRef.current?.click();
            }
          }}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed py-10 text-center outline-none transition-colors",
            dragging
              ? "border-[var(--p-toffee)] bg-[var(--p-tan)]/10"
              : "border-[var(--p-tan)] bg-[var(--p-white)] hover:border-[var(--p-toffee)] hover:bg-[var(--p-tan)]/5",
            (disabled || uploading) && "cursor-not-allowed opacity-50",
          )}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--p-toffee)]"
            aria-hidden
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <div>
            <p className="text-xs font-semibold text-[var(--p-deep-walnut)]">
              {uploading
                ? `Uploading ${uploadingCount} file${uploadingCount > 1 ? "s" : ""}…`
                : "Click to upload or drag & drop"}
            </p>
            <p className="mt-0.5 text-[11px] text-[var(--p-coffee-bean)]/60">
              {multiple ? "PNG, JPG, WEBP — multiple allowed" : "PNG, JPG, WEBP"}
            </p>
          </div>
        </div>
      )}

      {/* When not multiple and already has image, show replace button */}
      {!multiple && value.length > 0 && (
        <button
          type="button"
          disabled={disabled || uploading}
          onClick={() => inputRef.current?.click()}
          className="inline-flex h-8 items-center gap-1.5 border border-[var(--p-tan)] bg-transparent px-3 text-xs font-medium text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)] disabled:opacity-50"
        >
          {uploading ? "Uploading…" : "Replace image"}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        aria-hidden
        onChange={handleChange}
      />
    </div>
  );
}
