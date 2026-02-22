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

function corsHeaders(origin: string | null): Headers {
  const h = new Headers();
  if (origin && allowedOrigins.includes(origin)) {
    h.set("Access-Control-Allow-Origin", origin);
    h.set("Access-Control-Allow-Credentials", "true");
    h.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
    h.set("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
  }
  return h;
}

function withCors(res: Response, origin: string | null): Response {
  if (!origin || !allowedOrigins.includes(origin)) return res;
  const next = new Response(res.body, { status: res.status, statusText: res.statusText, headers: res.headers });
  next.headers.set("Access-Control-Allow-Origin", origin);
  next.headers.set("Access-Control-Allow-Credentials", "true");
  const vary = next.headers.get("Vary");
  next.headers.set("Vary", vary ? `Origin, ${vary}` : "Origin");
  return next;
}

const app = new Elysia()
  .use(
    cors({
      origin: (req) => {
        const origin = req.headers.get("origin");
        return origin != null && allowedOrigins.includes(origin);
      },
      methods: ["GET", "POST", "OPTIONS", "HEAD"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept"],
      credentials: true,
    }),
  )
  // Global: answer OPTIONS (preflight) for any path so CORS always succeeds
  .options("*", ({ request }) => {
    const origin = request.headers.get("origin");
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  })
  .all("/api/auth/*", async (context) => {
    const { request, status } = context;
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) });
    }
    if (["POST", "GET"].includes(request.method)) {
      const res = await auth.handler(request);
      return res ? withCors(res, request.headers.get("origin")) : status(405);
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
  .get("/", () => "OK")
  .onAfterHandle({ as: "global" }, ({ response, request }) => {
    const origin = request.headers.get("origin");
    if (response instanceof Response && origin && allowedOrigins.includes(origin)) {
      const r = new Response(response.body, { status: response.status, statusText: response.statusText, headers: response.headers });
      r.headers.set("Access-Control-Allow-Origin", origin);
      r.headers.set("Access-Control-Allow-Credentials", "true");
      const vary = r.headers.get("Vary");
      r.headers.set("Vary", vary ? `Origin, ${vary}` : "Origin");
      return r;
    }
    return response;
  })
  .onError({ as: "global" }, ({ error, request, code }) => {
    const origin = request.headers.get("origin");
    const body = code === "NOT_FOUND" ? "Not Found" : "Internal Server Error";
    const status = code === "NOT_FOUND" ? 404 : 500;
    const res = new Response(body, { status, headers: corsHeaders(origin) });
    if (origin && allowedOrigins.includes(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
      res.headers.set("Access-Control-Allow-Credentials", "true");
    }
    console.error(error);
    return res;
  });

// Vercel runs the app as a serverless handler (no .listen).
// For local dev, use: bun run dev (runs src/dev.ts which calls app.listen).
export default app;
