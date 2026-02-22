import type { AppRouterClient } from "@/lib/api/routers";

import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

declare global {
  // Set by src/utils/orpc.server.ts when running on the server (SSR).
  // eslint-disable-next-line no-var
  var $orpcClient: AppRouterClient | undefined;
}

/**
 * RPC base URL for the HTTP client. Only used in the browser or when the
 * server-side direct client (orpc.server) is not loaded.
 * Prefer VERCEL_URL on Vercel so self-requests hit the deployment; strip
 * trailing slashes to avoid double slashes (e.g. ...//api/rpc).
 */
function getRpcUrl(): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/rpc`;
  }
  const vercelBase = process.env.VERCEL_URL?.trim()
    ? `https://${process.env.VERCEL_URL.trim()}`
    : null;
  const appUrlBase = process.env.NEXT_PUBLIC_APP_URL?.trim() || null;
  let base = vercelBase ?? appUrlBase ?? "http://localhost:3001";
  base = base.replace(/\/$/, "");
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

/**
 * Use server-side direct client when available (no HTTP, no env URL needed);
 * otherwise use HTTP client (browser or fallback).
 */
export const client: AppRouterClient = globalThis.$orpcClient ?? createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
