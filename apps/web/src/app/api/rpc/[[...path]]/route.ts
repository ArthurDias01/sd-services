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
  const context = await createContext({ request });
  const { response } = await rpcHandler.handle(request, {
    prefix: "/api/rpc",
    context,
  });
  return response ?? new Response("Not Found", { status: 404 });
}

export async function POST(request: Request) {
  const context = await createContext({ request });
  const { response } = await rpcHandler.handle(request, {
    prefix: "/api/rpc",
    context,
  });
  return response ?? new Response("Not Found", { status: 404 });
}
