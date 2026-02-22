import { auth } from "@/lib/auth";
import { getServerEnv } from "@/lib/env/server";

export type CreateContextOptions = {
  request: Request;
};

function isAllowedAdmin(email: string): boolean {
  const env = getServerEnv();
  const allowed = env.CMS_ALLOWED_EMAILS;
  if (!allowed) return true;
  const emails = String(allowed)
    .split(",")
    .map((e) => e.trim().toLowerCase());
  return emails.includes(email.toLowerCase());
}

export async function createContext({ request }: CreateContextOptions) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  const isAdmin = !!session?.user?.email && isAllowedAdmin(session.user.email);
  return {
    session,
    isAdmin,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
