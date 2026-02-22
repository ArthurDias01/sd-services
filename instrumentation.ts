/**
 * Load server-side ORPC client so SSR uses direct procedure calls instead of
 * HTTP self-requests. Must run before any code that uses the ORPC client.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./src/utils/orpc.server");
  }
}
