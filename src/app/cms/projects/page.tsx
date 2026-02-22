"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { client } from "@/utils/orpc";

import { cn } from "@/lib/utils";

export default function CmsProjectsPage() {
  const { data: projects, isPending } = useQuery({
    queryKey: ["projects", "admin"],
    queryFn: () => client.project.listAdmin(),
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-balance text-[var(--p-deep-walnut)]">Projects</h1>
          <div className="mt-2 h-px w-10 bg-[var(--p-tan)]" aria-hidden />
        </div>
        <Link
          href="/cms/projects/new"
          className="inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-5 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2"
        >
          New project
        </Link>
      </div>

      {isPending ? (
        <div className="grid gap-px bg-[var(--p-tan)]/30 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3 bg-[var(--p-white)] p-5">
              <div className="h-4 w-28 rounded bg-[var(--p-warm-white)]" />
              <div className="h-3 w-20 rounded bg-[var(--p-warm-white)]" />
            </div>
          ))}
        </div>
      ) : projects?.length === 0 ? (
        <div className="border border-[var(--p-tan)] bg-[var(--p-white)] px-6 py-12 text-center">
          <p className="text-sm text-pretty text-[var(--p-coffee-bean)]">No projects yet.</p>
          <Link
            href="/cms/projects/new"
            className="mt-4 inline-flex h-9 items-center justify-center border-2 border-[var(--p-toffee)] bg-transparent px-5 text-xs font-semibold text-[var(--p-toffee)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2"
          >
            Create your first project
          </Link>
        </div>
      ) : (
        <div className="grid gap-px bg-[var(--p-tan)]/30 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((p) => (
            <Link
              key={p.id}
              href={`/cms/projects/${p.id}/edit`}
              className={cn(
                "group flex flex-col justify-between bg-[var(--p-white)] p-5",
                "outline-none transition-colors hover:bg-[var(--p-warm-white)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--p-deep-walnut)]",
              )}
            >
              <div>
                <h2 className="text-sm font-semibold text-balance text-[var(--p-deep-walnut)] group-hover:underline">
                  {p.title}
                </h2>
                <code className="mt-1 block text-xs text-[var(--p-toffee)]">/{p.slug}</code>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-wider",
                    p.published ? "text-[var(--p-toffee)]" : "text-[var(--p-coffee-bean)]/60",
                  )}
                >
                  {p.published ? "Published" : "Draft"}
                </span>
                <span className="text-xs font-medium text-[var(--p-coffee-bean)] opacity-0 transition-opacity group-hover:opacity-100">
                  Edit
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
