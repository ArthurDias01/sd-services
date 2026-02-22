import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import UserMenu from "@/components/user-menu";

function isAllowedAdmin(email: string): boolean {
  const allowed = process.env.CMS_ALLOWED_EMAILS;
  if (!allowed) return true;
  const emails = allowed.split(",").map((e) => e.trim().toLowerCase());
  return emails.includes(email.toLowerCase());
}

const navItems = [
  { href: "/cms/projects", label: "Projects" },
  { href: "/cms/projects/new", label: "+ New project" },
  { href: "/cms/settings", label: "Site settings" },
] as const;

export default async function CmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session: { user?: { email?: string | null } } | null = null;
  try {
    const result = await authClient.getSession({
      fetchOptions: {
        headers: await headers(),
        throw: false,
      },
    });
    session =
      result && typeof result === "object" && "data" in result
        ? (result as { data: { user?: { email?: string | null } } | null }).data
        : null;
  } catch {
    // API unreachable (e.g. NEXT_PUBLIC_SERVER_URL not set in production)
    session = null;
  }

  if (!session?.user) {
    redirect("/login");
  }

  if (!isAllowedAdmin(session.user.email ?? "")) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--p-cream)]">
      <nav className="border-b border-[var(--p-tan)]/40 bg-[var(--p-deep-walnut)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
          {/* Brand + nav links */}
          <div className="flex items-center gap-8">
            <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-[var(--p-tan)]">
              Content Studio
            </span>
            <div className="flex items-center gap-6">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-medium text-[var(--p-white)]/80 outline-none transition-colors hover:text-[var(--p-white)] focus-visible:ring-2 focus-visible:ring-[var(--p-tan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--p-deep-walnut)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side — view site + user avatar */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[var(--p-white)]/60 outline-none transition-colors hover:text-[var(--p-white)] focus-visible:ring-2 focus-visible:ring-[var(--p-tan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--p-deep-walnut)]"
            >
              ← View site
            </a>
            <UserMenu compact />
          </div>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        {children}
      </main>
    </div>
  );
}
