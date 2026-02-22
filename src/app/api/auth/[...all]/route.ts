import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

async function withRequestFix(
  request: Request,
  handler: (req: Request) => Promise<Response>,
): Promise<Response> {
  try {
    const headersList = await headers();
    const url = request.url;
    const method = request.method;
    const modifiedRequest =
      method === "GET" || method === "HEAD"
        ? new Request(url, { method, headers: new Headers(headersList) })
        : new Request(url, {
            method,
            headers: new Headers(headersList),
            body: request.body,
            duplex: "half",
          } as RequestInit);
    return await handler(modifiedRequest);
  } catch (error) {
    console.error("[Better Auth]", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const auth = getAuth();
  const { GET: handler } = toNextJsHandler(auth);
  return withRequestFix(request, handler);
}

export async function POST(request: Request) {
  const auth = getAuth();
  const { POST: handler } = toNextJsHandler(auth);
  return withRequestFix(request, handler);
}
