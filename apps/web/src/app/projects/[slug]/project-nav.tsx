import Link from "next/link";

type ProjectNavProps = {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

export function ProjectNav({ prev, next }: ProjectNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      className="flex flex-col gap-4 border-t border-[var(--p-tan)] pt-8 sm:flex-row sm:justify-between"
      aria-label="Project navigation"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--p-toffee)] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2"
          >
            <span aria-hidden>←</span>
            <span className="truncate">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
      <div className="min-w-0 flex-1 text-right">
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--p-toffee)] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2 sm:justify-end"
          >
            <span className="truncate">{next.title}</span>
            <span aria-hidden>→</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
