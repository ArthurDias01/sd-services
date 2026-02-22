import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
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

const serverSchema = {
  clientPrefix: "PUBLIC_" as const,
  client: {},
  server: {
    DATABASE_URL: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(32),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    CMS_ALLOWED_EMAILS: z.string().optional(),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    R2_ACCOUNT_ID: z.string().optional(),
    R2_ACCESS_KEY_ID: z.string().optional(),
    R2_SECRET_ACCESS_KEY: z.string().optional(),
    R2_BUCKET_NAME: z.string().optional(),
    R2_PUBLIC_URL: z.string().optional(),
    VERCEL_URL: z.string().optional(),
    BETTER_AUTH_URL: z
      .string()
      .optional()
      .refine((v) => !v || isValidUrl(v), "BETTER_AUTH_URL must be a valid URL"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
};

export type ServerEnv = {
  DATABASE_URL: string;
  BETTER_AUTH_SECRET: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  CMS_ALLOWED_EMAILS?: string;
  NODE_ENV: "development" | "production" | "test";
  R2_ACCOUNT_ID?: string;
  R2_ACCESS_KEY_ID?: string;
  R2_SECRET_ACCESS_KEY?: string;
  R2_BUCKET_NAME?: string;
  R2_PUBLIC_URL?: string;
  VERCEL_URL?: string;
  BETTER_AUTH_URL?: string;
};

let _env: ServerEnv | null = null;

/** Stub used when env vars are missing (e.g. during `next build`). Do not use at runtime. */
function getBuildStub(): ServerEnv {
  return {
    DATABASE_URL: "",
    BETTER_AUTH_SECRET: "",
    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",
    CMS_ALLOWED_EMAILS: undefined,
    NODE_ENV: "development",
    R2_ACCOUNT_ID: undefined,
    R2_ACCESS_KEY_ID: undefined,
    R2_SECRET_ACCESS_KEY: undefined,
    R2_BUCKET_NAME: undefined,
    R2_PUBLIC_URL: undefined,
    VERCEL_URL: undefined,
    BETTER_AUTH_URL: undefined,
  } as ServerEnv;
}

/** Server env (validated on first use when DATABASE_URL is set; stub during build). */
export function getServerEnv(): ServerEnv {
  if (_env) return _env;
  if (typeof process.env.DATABASE_URL === "undefined") {
    return getBuildStub();
  }
  _env = createEnv(serverSchema) as unknown as ServerEnv;
  return _env;
}

/** Base URL of this app (for Better Auth and server-side oRPC). Same-origin when auth/API live in this app. */
export function getBaseUrl(): string {
  const e = getServerEnv();
  if (e.BETTER_AUTH_URL) return e.BETTER_AUTH_URL;
  if (e.VERCEL_URL) return `https://${e.VERCEL_URL}`;
  return "http://localhost:3001";
}
