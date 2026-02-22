import Link from "next/link";

import { client } from "@/utils/orpc";

import { cn } from "@/lib/utils";

export default async function ProjectsPage() {
  let projects: Awaited<ReturnType<typeof client.project.list>> = [];
  try {
    projects = await client.project.list();
  } catch {
    // API unreachable (e.g. NEXT_PUBLIC_SERVER_URL not set in production)
  }

  return (
    <div className="min-h-dvh bg-[var(--p-white)] text-[var(--p-dark-walnut)]">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="h-px w-12 shrink-0 bg-[var(--p-toffee)]" aria-hidden />
          <h1 className="text-3xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-4xl">
            Projects
          </h1>
        </div>

        {projects.length === 0 ? (
          <p className="text-pretty text-[var(--p-coffee-bean)]">
            No projects to show yet.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className={cn(
                  "group block border border-[var(--p-tan)] bg-[var(--p-cream)]",
                  "outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2",
                )}
              >
                {p.featuredImageUrl ? (
                  <div className="aspect-4/3 overflow-hidden border-b border-[var(--p-tan)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.featuredImageUrl}
                      alt=""
                      className="size-full object-cover opacity-95 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-4/3 border-b border-[var(--p-tan)] bg-[var(--p-warm-white)]"
                    aria-hidden
                  />
                )}
                <div className="p-5">
                  <h2 className="font-semibold text-balance text-[var(--p-deep-walnut)] group-hover:underline">
                    {p.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 border-t border-[var(--p-tan)] pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--p-toffee)] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2"
          >
            <span className="h-px w-4 bg-[var(--p-toffee)]" aria-hidden />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
