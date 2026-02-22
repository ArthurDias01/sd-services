import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/** Validates URL without throwing (Zod's .url() uses new URL() and can throw). */
function isValidUrl(s: string): boolean {
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}

export const env = createEnv({
  client: {
    /** Optional: used only when the app makes HTTP RPC calls (e.g. browser or fallback). SSR uses a direct server client and does not depend on this. No trailing slash. */
    NEXT_PUBLIC_APP_URL: z
      .string()
      .optional()
      .refine((v) => !v || isValidUrl(v), "NEXT_PUBLIC_APP_URL must be a valid URL"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  emptyStringAsUndefined: true,
});
