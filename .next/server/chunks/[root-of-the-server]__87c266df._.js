module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x("next/dist/compiled/@opentelemetry/api", () =>
      require("next/dist/compiled/@opentelemetry/api"),
    );
  },
  93695,
  (e, t, r) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  18622,
  (e, t, r) => {
    t.exports = e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
      require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  56704,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/work-async-storage.external.js", () =>
      require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  32319,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
      require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  24725,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/after-task-async-storage.external.js", () =>
      require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  14747,
  (e, t, r) => {
    t.exports = e.x("path", () => require("path"));
  },
  42315,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(18622);
  },
  47540,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(42315).vendored["react-rsc"].React;
  },
  19481,
  (e, t, r) => {
    "use strict";
    var a = Object.defineProperty,
      n = Object.getOwnPropertyDescriptor,
      s = Object.getOwnPropertyNames,
      i = Object.prototype.hasOwnProperty,
      o = {},
      l = {
        RequestCookies: () => f,
        ResponseCookies: () => g,
        parseCookie: () => p,
        parseSetCookie: () => c,
        stringifyCookie: () => d,
      };
    for (var u in l) a(o, u, { get: l[u], enumerable: !0 });
    function d(e) {
      var t;
      let r = [
          "path" in e && e.path && `Path=${e.path}`,
          "expires" in e &&
            (e.expires || 0 === e.expires) &&
            `Expires=${("number" == typeof e.expires ? new Date(e.expires) : e.expires).toUTCString()}`,
          "maxAge" in e && "number" == typeof e.maxAge && `Max-Age=${e.maxAge}`,
          "domain" in e && e.domain && `Domain=${e.domain}`,
          "secure" in e && e.secure && "Secure",
          "httpOnly" in e && e.httpOnly && "HttpOnly",
          "sameSite" in e && e.sameSite && `SameSite=${e.sameSite}`,
          "partitioned" in e && e.partitioned && "Partitioned",
          "priority" in e && e.priority && `Priority=${e.priority}`,
        ].filter(Boolean),
        a = `${e.name}=${encodeURIComponent(null != (t = e.value) ? t : "")}`;
      return 0 === r.length ? a : `${a}; ${r.join("; ")}`;
    }
    function p(e) {
      let t = new Map();
      for (let r of e.split(/; */)) {
        if (!r) continue;
        let e = r.indexOf("=");
        if (-1 === e) {
          t.set(r, "true");
          continue;
        }
        let [a, n] = [r.slice(0, e), r.slice(e + 1)];
        try {
          t.set(a, decodeURIComponent(null != n ? n : "true"));
        } catch {}
      }
      return t;
    }
    function c(e) {
      if (!e) return;
      let [[t, r], ...a] = p(e),
        {
          domain: n,
          expires: s,
          httponly: i,
          maxage: o,
          path: l,
          samesite: u,
          secure: d,
          partitioned: c,
          priority: f,
        } = Object.fromEntries(a.map(([e, t]) => [e.toLowerCase().replace(/-/g, ""), t]));
      {
        var g,
          x,
          v = {
            name: t,
            value: decodeURIComponent(r),
            domain: n,
            ...(s && { expires: new Date(s) }),
            ...(i && { httpOnly: !0 }),
            ...("string" == typeof o && { maxAge: Number(o) }),
            path: l,
            ...(u && { sameSite: h.includes((g = (g = u).toLowerCase())) ? g : void 0 }),
            ...(d && { secure: !0 }),
            ...(f && { priority: m.includes((x = (x = f).toLowerCase())) ? x : void 0 }),
            ...(c && { partitioned: !0 }),
          };
        let e = {};
        for (let t in v) v[t] && (e[t] = v[t]);
        return e;
      }
    }
    t.exports = ((e, t, r, o) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let r of s(t))
          i.call(e, r) ||
            void 0 === r ||
            a(e, r, { get: () => t[r], enumerable: !(o = n(t, r)) || o.enumerable });
      return e;
    })(a({}, "__esModule", { value: !0 }), o);
    var h = ["strict", "lax", "none"],
      m = ["low", "medium", "high"],
      f = class {
        constructor(e) {
          ((this._parsed = new Map()), (this._headers = e));
          const t = e.get("cookie");
          if (t) for (const [e, r] of p(t)) this._parsed.set(e, { name: e, value: r });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e) {
          let t = "string" == typeof e[0] ? e[0] : e[0].name;
          return this._parsed.get(t);
        }
        getAll(...e) {
          var t;
          let r = Array.from(this._parsed);
          if (!e.length) return r.map(([e, t]) => t);
          let a = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
          return r.filter(([e]) => e === a).map(([e, t]) => t);
        }
        has(e) {
          return this._parsed.has(e);
        }
        set(...e) {
          let [t, r] = 1 === e.length ? [e[0].name, e[0].value] : e,
            a = this._parsed;
          return (
            a.set(t, { name: t, value: r }),
            this._headers.set(
              "cookie",
              Array.from(a)
                .map(([e, t]) => d(t))
                .join("; "),
            ),
            this
          );
        }
        delete(e) {
          let t = this._parsed,
            r = Array.isArray(e) ? e.map((e) => t.delete(e)) : t.delete(e);
          return (
            this._headers.set(
              "cookie",
              Array.from(t)
                .map(([e, t]) => d(t))
                .join("; "),
            ),
            r
          );
        }
        clear() {
          return (this.delete(Array.from(this._parsed.keys())), this);
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()]
            .map((e) => `${e.name}=${encodeURIComponent(e.value)}`)
            .join("; ");
        }
      },
      g = class {
        constructor(e) {
          var t, r, a;
          ((this._parsed = new Map()), (this._headers = e));
          const n =
            null !=
            (a =
              null != (r = null == (t = e.getSetCookie) ? void 0 : t.call(e))
                ? r
                : e.get("set-cookie"))
              ? a
              : [];
          for (const e of Array.isArray(n)
            ? n
            : (function (e) {
                if (!e) return [];
                var t,
                  r,
                  a,
                  n,
                  s,
                  i = [],
                  o = 0;
                function l() {
                  for (; o < e.length && /\s/.test(e.charAt(o)); ) o += 1;
                  return o < e.length;
                }
                for (; o < e.length; ) {
                  for (t = o, s = !1; l(); )
                    if ("," === (r = e.charAt(o))) {
                      for (
                        a = o, o += 1, l(), n = o;
                        o < e.length && "=" !== (r = e.charAt(o)) && ";" !== r && "," !== r;
                      )
                        o += 1;
                      o < e.length && "=" === e.charAt(o)
                        ? ((s = !0), (o = n), i.push(e.substring(t, a)), (t = o))
                        : (o = a + 1);
                    } else o += 1;
                  (!s || o >= e.length) && i.push(e.substring(t, e.length));
                }
                return i;
              })(n)) {
            const t = c(e);
            t && this._parsed.set(t.name, t);
          }
        }
        get(...e) {
          let t = "string" == typeof e[0] ? e[0] : e[0].name;
          return this._parsed.get(t);
        }
        getAll(...e) {
          var t;
          let r = Array.from(this._parsed.values());
          if (!e.length) return r;
          let a = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
          return r.filter((e) => e.name === a);
        }
        has(e) {
          return this._parsed.has(e);
        }
        set(...e) {
          let [t, r, a] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e,
            n = this._parsed;
          return (
            n.set(
              t,
              (function (e = { name: "", value: "" }) {
                return (
                  "number" == typeof e.expires && (e.expires = new Date(e.expires)),
                  e.maxAge && (e.expires = new Date(Date.now() + 1e3 * e.maxAge)),
                  (null === e.path || void 0 === e.path) && (e.path = "/"),
                  e
                );
              })({ name: t, value: r, ...a }),
            ),
            (function (e, t) {
              for (let [, r] of (t.delete("set-cookie"), e)) {
                let e = d(r);
                t.append("set-cookie", e);
              }
            })(n, this._headers),
            this
          );
        }
        delete(...e) {
          let [t, r] = "string" == typeof e[0] ? [e[0]] : [e[0].name, e[0]];
          return this.set({ ...r, name: t, value: "", expires: new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(d).join("; ");
        }
      };
  },
  67691,
  (e) => {
    "use strict";
    var t = e.i(47909),
      r = e.i(74017),
      a = e.i(96250),
      n = e.i(59756),
      s = e.i(61916),
      i = e.i(74677),
      o = e.i(69741),
      l = e.i(16795),
      u = e.i(87718),
      d = e.i(95169),
      p = e.i(47587),
      c = e.i(66012),
      h = e.i(70101),
      m = e.i(26937),
      f = e.i(10372),
      g = e.i(93695);
    e.i(52474);
    var x = e.i(220),
      v = e.i(27577),
      y = e.i(49599),
      _ = e.i(93458),
      R = e.i(89171);
    async function w(e, t) {
      try {
        let r = await (0, _.headers)(),
          a = e.url,
          n = e.method,
          s =
            "GET" === n || "HEAD" === n
              ? new Request(a, { method: n, headers: new Headers(r) })
              : new Request(a, {
                  method: n,
                  headers: new Headers(r),
                  body: e.body,
                  duplex: "half",
                });
        return await t(s);
      } catch (e) {
        return (
          console.error("[Better Auth]", e),
          R.NextResponse.json({ error: "Authentication failed" }, { status: 500 })
        );
      }
    }
    async function b(e) {
      let t = (0, v.getAuth)(),
        { GET: r } = (0, y.toNextJsHandler)(t);
      return w(e, r);
    }
    async function A(e) {
      let t = (0, v.getAuth)(),
        { POST: r } = (0, y.toNextJsHandler)(t);
      return w(e, r);
    }
    e.s(["GET", () => b, "POST", () => A], 67110);
    var C = e.i(67110);
    let E = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/auth/[...all]/route",
          pathname: "/api/auth/[...all]",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/auth/[...all]/route.ts",
        nextConfigOutput: "",
        userland: C,
      }),
      { workAsyncStorage: k, workUnitAsyncStorage: O, serverHooks: j } = E;
    function S() {
      return (0, a.patchFetch)({ workAsyncStorage: k, workUnitAsyncStorage: O });
    }
    async function P(e, t, a) {
      E.isDev && (0, n.addRequestMeta)(e, "devRequestTimingInternalsEnd", process.hrtime.bigint());
      let v = "/api/auth/[...all]/route";
      v = v.replace(/\/index$/, "") || "/";
      let y = await E.prepare(e, t, { srcPage: v, multiZoneDraftMode: !1 });
      if (!y)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: _,
          params: R,
          nextConfig: w,
          parsedUrl: b,
          isDraftMode: A,
          prerenderManifest: C,
          routerServerContext: k,
          isOnDemandRevalidate: O,
          revalidateOnlyGenerated: j,
          resolvedPathname: S,
          clientReferenceManifest: P,
          serverActionsManifest: N,
        } = y,
        T = (0, o.normalizeAppPath)(v),
        q = !!(C.dynamicRoutes[T] || C.routes[S]),
        H = async () => (
          (null == k ? void 0 : k.render404)
            ? await k.render404(e, t, b, !1)
            : t.end("This page could not be found"),
          null
        );
      if (q && !A) {
        let e = !!C.routes[S],
          t = C.dynamicRoutes[T];
        if (t && !1 === t.fallback && !e) {
          if (w.experimental.adapterPath) return await H();
          throw new g.NoFallbackError();
        }
      }
      let $ = null;
      !q || E.isDev || A || ($ = "/index" === ($ = S) ? "/" : $);
      let D = !0 === E.isDev || !q,
        U = q && !D;
      N &&
        P &&
        (0, i.setManifestsSingleton)({
          page: v,
          clientReferenceManifest: P,
          serverActionsManifest: N,
        });
      let I = e.method || "GET",
        M = (0, s.getTracer)(),
        F = M.getActiveScopeSpan(),
        K = {
          params: R,
          prerenderManifest: C,
          renderOpts: {
            experimental: { authInterrupts: !!w.experimental.authInterrupts },
            cacheComponents: !!w.cacheComponents,
            supportsDynamicResponse: D,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles: w.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a, n) => E.onRequestError(e, t, a, n, k),
          },
          sharedContext: { buildId: _ },
        },
        L = new l.NodeNextRequest(e),
        B = new l.NodeNextResponse(t),
        G = u.NextRequestAdapter.fromNodeNextRequest(L, (0, u.signalFromNodeResponse)(t));
      try {
        let i = async (e) =>
            E.handle(G, K).finally(() => {
              if (!e) return;
              e.setAttributes({ "http.status_code": t.statusCode, "next.rsc": !1 });
              let r = M.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== d.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route");
              if (a) {
                let t = `${I} ${a}`;
                (e.setAttributes({ "next.route": a, "http.route": a, "next.span_name": t }),
                  e.updateName(t));
              } else e.updateName(`${I} ${v}`);
            }),
          o = !!(0, n.getRequestMeta)(e, "minimalMode"),
          l = async (n) => {
            var s, l;
            let u = async ({ previousCacheEntry: r }) => {
                try {
                  if (!o && O && j && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let s = await i(n);
                  e.fetchMetrics = K.renderOpts.fetchMetrics;
                  let l = K.renderOpts.pendingWaitUntil;
                  l && a.waitUntil && (a.waitUntil(l), (l = void 0));
                  let u = K.renderOpts.collectedTags;
                  if (!q)
                    return (
                      await (0, c.sendResponse)(L, B, s, K.renderOpts.pendingWaitUntil), null
                    );
                  {
                    let e = await s.blob(),
                      t = (0, h.toNodeOutgoingHttpHeaders)(s.headers);
                    (u && (t[f.NEXT_CACHE_TAGS_HEADER] = u),
                      !t["content-type"] && e.type && (t["content-type"] = e.type));
                    let r =
                        void 0 !== K.renderOpts.collectedRevalidate &&
                        !(K.renderOpts.collectedRevalidate >= f.INFINITE_CACHE) &&
                        K.renderOpts.collectedRevalidate,
                      a =
                        void 0 === K.renderOpts.collectedExpire ||
                        K.renderOpts.collectedExpire >= f.INFINITE_CACHE
                          ? void 0
                          : K.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: x.CachedRouteKind.APP_ROUTE,
                        status: s.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: a },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == r ? void 0 : r.isStale) &&
                      (await E.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: v,
                          routeType: "route",
                          revalidateReason: (0, p.getRevalidateReason)({
                            isStaticGeneration: U,
                            isOnDemandRevalidate: O,
                          }),
                        },
                        !1,
                        k,
                      )),
                    t
                  );
                }
              },
              d = await E.handleResponse({
                req: e,
                nextConfig: w,
                cacheKey: $,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: C,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: O,
                revalidateOnlyGenerated: j,
                responseGenerator: u,
                waitUntil: a.waitUntil,
                isMinimalMode: o,
              });
            if (!q) return null;
            if (
              (null == d || null == (s = d.value) ? void 0 : s.kind) !== x.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == d || null == (l = d.value) ? void 0 : l.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (o ||
              t.setHeader(
                "x-nextjs-cache",
                O ? "REVALIDATED" : d.isMiss ? "MISS" : d.isStale ? "STALE" : "HIT",
              ),
              A &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let g = (0, h.fromNodeOutgoingHttpHeaders)(d.value.headers);
            return (
              (o && q) || g.delete(f.NEXT_CACHE_TAGS_HEADER),
              !d.cacheControl ||
                t.getHeader("Cache-Control") ||
                g.get("Cache-Control") ||
                g.set("Cache-Control", (0, m.getCacheControlHeader)(d.cacheControl)),
              await (0, c.sendResponse)(
                L,
                B,
                new Response(d.value.body, { headers: g, status: d.value.status || 200 }),
              ),
              null
            );
          };
        F
          ? await l(F)
          : await M.withPropagatedContext(e.headers, () =>
              M.trace(
                d.BaseServerSpan.handleRequest,
                {
                  spanName: `${I} ${v}`,
                  kind: s.SpanKind.SERVER,
                  attributes: { "http.method": I, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof g.NoFallbackError ||
            (await E.onRequestError(
              e,
              t,
              {
                routerKind: "App Router",
                routePath: T,
                routeType: "route",
                revalidateReason: (0, p.getRevalidateReason)({
                  isStaticGeneration: U,
                  isOnDemandRevalidate: O,
                }),
              },
              !1,
              k,
            )),
          q)
        )
          throw t;
        return (await (0, c.sendResponse)(L, B, new Response(null, { status: 500 })), null);
      }
    }
    e.s(
      [
        "handler",
        () => P,
        "patchFetch",
        () => S,
        "routeModule",
        () => E,
        "serverHooks",
        () => j,
        "workAsyncStorage",
        () => k,
        "workUnitAsyncStorage",
        () => O,
      ],
      67691,
    );
  },
  76372,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "server/chunks/node_modules_better-auth_dist_adapters_memory-adapter_index_mjs_61d56fbe._.js",
        ].map((t) => e.l(t)),
      ).then(() => t(68840)),
    );
  },
  46120,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "server/chunks/node_modules_better-auth_dist_adapters_kysely-adapter_index_mjs_e4618ae6._.js",
        ].map((t) => e.l(t)),
      ).then(() => t(69580)),
    );
  },
  96605,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "server/chunks/a9bf9_better-auth_dist_adapters_kysely-adapter_bun-sqlite-dialect_mjs_81919b3b._.js",
        ].map((t) => e.l(t)),
      ).then(() => t(58634)),
    );
  },
  61487,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "server/chunks/a9bf9_better-auth_dist_adapters_kysely-adapter_node-sqlite-dialect_mjs_4d47c97e._.js",
        ].map((t) => e.l(t)),
      ).then(() => t(2770)),
    );
  },
  6878,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(93458)));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__87c266df._.js.map
