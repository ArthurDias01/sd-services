import { cors } from "@elysiajs/cors";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { createContext } from "@sd-services/api/context";
import { appRouter } from "@sd-services/api/routers/index";
import { auth } from "@sd-services/auth";
import { env } from "@sd-services/env/server";
import { Elysia } from "elysia";

const rpcHandler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});
const apiHandler = new OpenAPIHandler(appRouter, {
  plugins: [
    new OpenAPIReferencePlugin({
      schemaConverters: [new ZodToJsonSchemaConverter()],
    }),
  ],
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

const allowedOrigins = env.CORS_ORIGIN.split(",").map((s) => s.trim());

const app = new Elysia()
  .use(
    cors({
      // Return true when request origin is in allowlist so plugin sets Access-Control-Allow-Origin correctly
      origin: (req) => {
        const origin = req.headers.get("origin");
        return origin != null && allowedOrigins.includes(origin);
      },
      methods: ["GET", "POST", "OPTIONS", "HEAD"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept"],
      credentials: true,
    }),
  )
  .all("/api/auth/*", async (context) => {
    const { request, status } = context;
    // Handle preflight so browser gets CORS headers
    if (request.method === "OPTIONS") {
      const origin = request.headers.get("origin");
      const headers = new Headers();
      if (origin && allowedOrigins.includes(origin)) {
        headers.set("Access-Control-Allow-Origin", origin);
        headers.set("Access-Control-Allow-Credentials", "true");
        headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
      }
      return new Response(null, { status: 204, headers });
    }
    if (["POST", "GET"].includes(request.method)) {
      const res = await auth.handler(request);
      const origin = request.headers.get("origin");
      // Always add CORS headers when origin is allowed (including on error responses)
      if (res && origin && allowedOrigins.includes(origin)) {
        const next = new Response(res.body, { status: res.status, statusText: res.statusText, headers: res.headers });
        next.headers.set("Access-Control-Allow-Origin", origin);
        next.headers.set("Access-Control-Allow-Credentials", "true");
        next.headers.set("Vary", next.headers.get("Vary") ? `Origin, ${next.headers.get("Vary")}` : "Origin");
        return next;
      }
      return res;
    }
    return status(405);
  })
  .all(
    "/rpc*",
    async (context) => {
      const { response } = await rpcHandler.handle(context.request, {
        prefix: "/rpc",
        context: await createContext({ context }),
      });
      return response ?? new Response("Not Found", { status: 404 });
    },
    {
      parse: "none",
    },
  )
  .all(
    "/api-reference*",
    async (context) => {
      const { response } = await apiHandler.handle(context.request, {
        prefix: "/api-reference",
        context: await createContext({ context }),
      });
      return response ?? new Response("Not Found", { status: 404 });
    },
    {
      parse: "none",
    },
  )
  .get("/", () => "OK");

// Vercel runs the app as a serverless handler (no .listen).
// For local dev, use: bun run dev (runs src/dev.ts which calls app.listen).
export default app;
