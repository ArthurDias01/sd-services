import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[var(--p-cream)] px-6">
      <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]">
        404
      </span>
      <h1 className="text-2xl font-bold text-balance text-[var(--p-deep-walnut)]">
        Page not found
      </h1>
      <div className="mx-auto mt-4 h-px w-12 bg-[var(--p-tan)]" aria-hidden />
      <p className="mt-4 text-center text-sm text-pretty text-[var(--p-coffee-bean)]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-6 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </div>
  );
}
