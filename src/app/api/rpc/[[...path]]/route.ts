import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";

import { createContext } from "@/lib/api/context";
import { appRouter } from "@/lib/api/routers";

const rpcHandler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export async function GET(request: Request) {
  try {
    const context = await createContext({ request });
    const { response } = await rpcHandler.handle(request, {
      prefix: "/api/rpc",
      context,
    });
    return response ?? new Response("Not Found", { status: 404 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[api/rpc] GET error:", err);
    return Response.json({ error: { code: "INTERNAL_SERVER_ERROR", message } }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const context = await createContext({ request });
    const { response } = await rpcHandler.handle(request, {
      prefix: "/api/rpc",
      context,
    });
    return response ?? new Response("Not Found", { status: 404 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[api/rpc] POST error:", err);
    return Response.json({ error: { code: "INTERNAL_SERVER_ERROR", message } }, { status: 500 });
  }
}
