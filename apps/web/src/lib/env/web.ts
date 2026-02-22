import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    /** Optional: used only for server-side oRPC base URL (e.g. fetch from RSC). Leave unset for same-origin. */
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  emptyStringAsUndefined: true,
});
