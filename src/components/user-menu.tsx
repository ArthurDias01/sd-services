"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

function Avatar({ name, image }: { name: string; image?: string | null }) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={name}
        referrerPolicy="no-referrer"
        className="size-7 rounded-full object-cover"
      />
    );
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="flex size-7 items-center justify-center rounded-full bg-[var(--p-toffee)] text-[10px] font-bold text-[var(--p-white)]">
      {initials}
    </span>
  );
}

export default function UserMenu({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!session) {
    return (
      <a
        href="/login"
        className={cn(
          "inline-flex h-9 items-center justify-center border border-[var(--p-tan)] bg-[var(--p-white)] px-4 text-xs font-semibold text-[var(--p-deep-walnut)] outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2",
        )}
      >
        Sign In
      </a>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-tan)] focus-visible:ring-offset-2",
          !compact &&
            "rounded-full border border-[var(--p-tan)]/60 bg-[var(--p-white)] px-2 py-1 hover:border-[var(--p-toffee)]",
        )}
        aria-label="User menu"
      >
        <Avatar name={session.user.name} image={session.user.image} />
        {!compact && (
          <span className="max-w-[120px] truncate text-xs font-medium text-[var(--p-dark-walnut)]">
            {session.user.name}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px] bg-card">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-xs text-muted-foreground">
            {session.user.email}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-xs"
            onClick={() => router.push("/cms/projects")}
          >
            Content Studio
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            className="text-xs"
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => router.push("/"),
                },
              });
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
