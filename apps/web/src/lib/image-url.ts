/**
 * Use the same-origin image proxy only for R2 URLs to avoid CORS.
 * Same-origin, relative, and other URLs (e.g. Google avatars) are returned unchanged.
 */
const R2_PUBLIC_RE = /^https:\/\/[a-zA-Z0-9.-]+\.r2\.dev(\/|$)/;

export function proxyImageUrlIfNeeded(url: string): string {
  if (!url || url.startsWith("/")) return url;
  if (R2_PUBLIC_RE.test(url)) {
    return `/api/image?url=${encodeURIComponent(url)}`;
  }
  return url;
}
