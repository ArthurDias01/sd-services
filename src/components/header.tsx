"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import UserMenu from "./user-menu";

export default function Header() {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();

  const isCms = pathname?.startsWith("/cms");
  if (isCms) return null;

  const isLanding = pathname === "/";

  const links: { to: string; label: string }[] = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <header className="border-b border-[var(--p-tan)]/40 bg-[var(--p-white)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <nav className="flex items-center gap-8" aria-label="Main">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              href={to as "/" | "/projects"}
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-[var(--p-coffee-bean)] outline-none hover:text-[var(--p-toffee)] focus-visible:ring-2 focus-visible:ring-[var(--p-coffee-bean)] focus-visible:ring-offset-2",
                pathname === to && "text-[var(--p-toffee)]",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        {!isLanding && session?.user && (
          <UserMenu />
        )}
      </div>
    </header>
  );
}
