/**
 * Use the same-origin image proxy for external URLs (e.g. R2) to avoid CORS.
 * Same-origin and relative URLs are returned unchanged.
 */
const R2_OR_EXTERNAL_RE = /^https:\/\/([a-zA-Z0-9.-]+\.r2\.dev|(?!localhost)[a-zA-Z0-9.-]+)/;

export function proxyImageUrlIfNeeded(url: string): string {
  if (!url || url.startsWith("/")) return url;
  if (R2_OR_EXTERNAL_RE.test(url)) {
    return `/api/image?url=${encodeURIComponent(url)}`;
  }
  return url;
}
