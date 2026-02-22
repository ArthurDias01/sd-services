import type { Context as ElysiaContext } from "elysia";

import { auth } from "@sd-services/auth";
import { env } from "@sd-services/env/server";

export type CreateContextOptions = {
  context: ElysiaContext;
};

function isAllowedAdmin(email: string): boolean {
  const allowed = env.CMS_ALLOWED_EMAILS;
  if (!allowed) return true;
  const emails = allowed.split(",").map((e) => e.trim().toLowerCase());
  return emails.includes(email.toLowerCase());
}

export async function createContext({ context }: CreateContextOptions) {
  const session = await auth.api.getSession({
    headers: context.request.headers,
  });
  const isAdmin =
    !!session?.user?.email && isAllowedAdmin(session.user.email);
  return {
    session,
    isAdmin,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
