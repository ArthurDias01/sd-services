import { createAuthClient } from "better-auth/react";

/**
 * Always use same-origin for auth (no external server).
 * Explicit baseURL in the browser ensures the client never uses a cached or env-based old server URL.
 */
export const authClient = createAuthClient({
  ...(typeof window !== "undefined" && { baseURL: window.location.origin }),
});
