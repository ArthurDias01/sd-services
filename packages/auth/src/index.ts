import { db } from "@sd-services/db";
import * as schema from "@sd-services/db/schema/auth";
import { env } from "@sd-services/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

const trustedOrigins = env.CORS_ORIGIN.split(",").map((s) => s.trim());

export const auth = betterAuth({
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
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
  plugins: [],
});
