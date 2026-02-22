import type { AppRouterClient } from "@/lib/api/routers";

import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

function getRpcUrl(): string {
  // ORPC client uses new URL(baseUrl) when encoding requests; relative URLs throw.
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/rpc`;
  }
  // Server (SSR): Prefer VERCEL_URL so production self-requests always hit the deployment.
  // Empty NEXT_PUBLIC_APP_URL would otherwise break server-side fetches (projects, settings, hero).
  const vercelBase = process.env.VERCEL_URL?.trim()
    ? `https://${process.env.VERCEL_URL.trim()}`
    : null;
  const appUrlBase = process.env.NEXT_PUBLIC_APP_URL?.trim() || null;
  let base = vercelBase ?? appUrlBase ?? "http://localhost:3001";
  base = base.replace(/\/$/, ""); // avoid double slash when env has trailing slash
  return `${base}/api/rpc`;
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      toast.error(`Error: ${error.message}`, {
        action: {
          label: "retry",
          onClick: () => {
            if (query != null && typeof query.invalidate === "function") {
              query.invalidate();
            }
          },
        },
      });
    },
  }),
});

export const link = new RPCLink({
  url: getRpcUrl(),
  fetch(url, options) {
    return fetch(url, {
      ...options,
      credentials: "include",
    });
  },
  headers: async () => {
    if (typeof window !== "undefined") {
      return {};
    }

    const { headers } = await import("next/headers");
    return Object.fromEntries(await headers());
  },
});

export const client: AppRouterClient = createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
