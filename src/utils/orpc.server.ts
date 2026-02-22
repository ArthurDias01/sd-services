import "server-only";

import { createRouterClient } from "@orpc/server";
import { headers } from "next/headers";

import { createContext } from "@/lib/api/context";
import { appRouter } from "@/lib/api/routers";

import type { AppRouterClient } from "@/lib/api/routers";

declare global {
  // eslint-disable-next-line no-var
  var $orpcClient: AppRouterClient | undefined;
}

/**
 * Server-side ORPC client. Calls procedures directly (no HTTP), so SSR does
 * not depend on NEXT_PUBLIC_APP_URL or VERCEL_URL. Use this for all server
 * data fetching so adding/changing the app URL env var cannot break production.
 */
globalThis.$orpcClient = createRouterClient(appRouter, {
  context: async () => {
    const h = await headers();
    const req = new Request("https://localhost", {
      headers: new Headers(Object.fromEntries(h.entries())),
    });
    return createContext({ request: req });
  },
});
