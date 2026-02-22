import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { authClient } from "@/lib/auth-client";
import { uploadFile } from "@/lib/r2";

async function getAdminSession() {
  const result = await authClient.getSession({
    fetchOptions: { headers: await headers(), throw: false },
  });

  type SessionData = { user?: { email?: string | null } } | null;
  const session: SessionData =
    result && typeof result === "object" && "data" in result
      ? (result as { data: SessionData }).data
      : null;

  if (!session?.user) return null;

  const allowed = process.env.CMS_ALLOWED_EMAILS;
  if (allowed) {
    const emails = allowed.split(",").map((e) => e.trim().toLowerCase());
    if (!emails.includes(session.user.email?.toLowerCase() ?? "")) return null;
  }

  return session;
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // Accept either a single "file" or multiple "files[]"
  const rawFiles = formData.getAll("files");
  const single = formData.get("file");
  const allFiles: File[] = [
    ...(rawFiles.filter((f) => f instanceof File) as File[]),
    ...(single instanceof File ? [single] : []),
  ];

  if (allFiles.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }

  try {
    const results = await Promise.all(
      allFiles.map((file) => uploadFile(file, "uploads")),
    );
    // Single file → { url } for backwards compat; multiple → { urls }
    if (allFiles.length === 1) {
      return NextResponse.json({ url: results[0]!.url, urls: [results[0]!.url] });
    }
    return NextResponse.json({ urls: results.map((r) => r.url) });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
