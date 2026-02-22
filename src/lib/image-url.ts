/**
 * Use the same-origin image proxy only for R2 URLs to avoid CORS.
 * Same-origin, relative, and other URLs (e.g. Google avatars) are returned unchanged.
 * Invalid URLs are returned as-is so the browser can fail gracefully instead of throwing.
 */
const R2_PUBLIC_RE = /^https:\/\/[a-zA-Z0-9.-]+\.r2\.dev(\/|$)/;

function isConstructableUrl(url: string): boolean {
  if (url.startsWith("/")) return true;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function proxyImageUrlIfNeeded(url: string): string {
  if (!url || url.startsWith("/")) return url;
  if (!isConstructableUrl(url)) return url;
  if (R2_PUBLIC_RE.test(url)) {
    return `/api/image?url=${encodeURIComponent(url)}`;
  }
  return url;
}
