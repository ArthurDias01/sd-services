import { NextResponse } from "next/server";

const R2_HOST_RE = /^https:\/\/[a-zA-Z0-9.-]+\.r2\.dev(\/|$)/;
const RELATIVE_RE = /^\/(?!\/)/;

function isAllowedImageUrl(url: string): boolean {
  try {
    if (RELATIVE_RE.test(url)) return true;
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    if (u.hostname === "localhost" || u.hostname.endsWith(".vercel.app"))
      return true;
    if (R2_HOST_RE.test(url)) return true;
    const r2Public = process.env.R2_PUBLIC_URL;
    if (r2Public) {
      const base = new URL(r2Public);
      if (u.origin === base.origin) return true;
    }
    return false;
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url || !isAllowedImageUrl(url)) {
    return NextResponse.json({ error: "Invalid or disallowed URL" }, { status: 400 });
  }

  const resolved = url.startsWith("/")
    ? new URL(url, request.url).toString()
    : url;

  try {
    const res = await fetch(resolved, {
      headers: { Accept: "image/*" },
      cache: "force-cache",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream image failed" },
        { status: res.status },
      );
    }
    const contentType = res.headers.get("Content-Type") ?? "image/jpeg";
    const body = res.body;
    if (!body) {
      return NextResponse.json(
        { error: "No image body" },
        { status: 502 },
      );
    }
    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    console.error("[api/image]", err);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 502 },
    );
  }
}
