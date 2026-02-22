export default function ProjectLoading() {
  return (
    <div className="min-h-dvh bg-[var(--p-white)]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 aspect-4/3 w-full bg-[var(--p-warm-white)]" />
        <div className="mb-4 h-px w-12 bg-[var(--p-tan)]" />
        <div className="mb-2 h-8 w-3/4 rounded bg-[var(--p-warm-white)]" />
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full rounded bg-[var(--p-warm-white)]" />
          <div className="h-4 w-full rounded bg-[var(--p-warm-white)]" />
          <div className="h-4 w-5/6 rounded bg-[var(--p-warm-white)]" />
        </div>
      </div>
    </div>
  );
}
