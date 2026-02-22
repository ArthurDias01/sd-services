import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema/auth";
import { getBaseUrl, getServerEnv } from "@/lib/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

let _auth: ReturnType<typeof betterAuth> | null = null;

/** Real auth instance (used by API route so handler is created with valid env, not stub). */
export function getAuth() {
  if (!_auth) {
    const env = getServerEnv();
    const baseURL = getBaseUrl();
    _auth = betterAuth({
      baseURL,
      trustedOrigins: async (request) => {
        const list = [baseURL];
        if (env.VERCEL_URL) {
          list.push(`https://${env.VERCEL_URL}`);
        }
        const origin = request?.headers?.get?.("origin");
        if (origin && !list.includes(origin)) {
          list.push(origin);
        }
        return list;
      },
      database: drizzleAdapter(db, {
        provider: "pg",
        schema,
      }),
      emailAndPassword: {
        enabled: false,
      },
      socialProviders: {
        google: {
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
        },
      },
      advanced: {
        defaultCookieAttributes: {
          sameSite: "lax",
          secure: env.NODE_ENV === "production",
          httpOnly: true,
        },
      },
      plugins: [nextCookies()],
    });
  }
  return _auth;
}

export const auth = new Proxy({} as ReturnType<typeof betterAuth>, {
  get(_, prop) {
    return getAuth()[prop as keyof ReturnType<typeof betterAuth>];
  },
});
