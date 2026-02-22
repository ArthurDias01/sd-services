module.exports = [
  11508,
  (a) => {
    "use strict";
    var b = a.i(72131),
      c = a.i(87924),
      d = b.createContext(void 0),
      e = (a) => {
        let c = b.useContext(d);
        if (a) return a;
        if (!c) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return c;
      },
      f = ({ client: a, children: e }) => (
        b.useEffect(
          () => (
            a.mount(),
            () => {
              a.unmount();
            }
          ),
          [a],
        ),
        (0, c.jsx)(d.Provider, { value: a, children: e })
      );
    a.s(["QueryClientProvider", () => f, "useQueryClient", () => e]);
  },
  4854,
  90775,
  478,
  (a) => {
    "use strict";
    function b(a) {
      return a[0] ?? {};
    }
    function c(a) {
      return Array.isArray(a) ? a : null == a ? [] : [a];
    }
    let d = "orpc";
    class e extends Error {
      constructor(...a) {
        (super(...a), (this.name = "AbortError"));
      }
    }
    function f(a) {
      let b;
      return () => {
        if (b) return b.result;
        let c = a();
        return ((b = { result: c }), c);
      };
    }
    function g() {
      return globalThis["__@orpc/shared@1.13.5/otel/config__"];
    }
    function h(a, b = {}, c) {
      let d = g()?.tracer;
      return d?.startSpan(a, b, c);
    }
    function i(a, b, c = {}) {
      if (!a) return;
      let d = (function (a) {
        if (a instanceof Error) {
          let b = { message: a.message, name: a.name, stack: a.stack };
          return (
            "code" in a &&
              ("string" == typeof a.code || "number" == typeof a.code) &&
              (b.code = a.code),
            b
          );
        }
        return { message: String(a) };
      })(b);
      (a.recordException(d),
        (c.signal?.aborted && c.signal.reason === b) ||
          a.setStatus({ code: 2, message: d.message }));
    }
    async function j({ name: a, context: b, ...c }, d) {
      let e = g()?.tracer;
      if (!e) return d();
      let f = async (a) => {
        try {
          return await d(a);
        } catch (b) {
          throw (i(a, b, c), b);
        } finally {
          a.end();
        }
      };
      return b ? e.startActiveSpan(a, c, b, f) : e.startActiveSpan(a, c, f);
    }
    async function k(a, b) {
      let c = g();
      if (!a || !c) return b();
      let d = c.trace.setSpan(c.context.active(), a);
      return c.context.with(d, b);
    }
    class l {
      openIds = new Set();
      queues = new Map();
      waiters = new Map();
      get length() {
        return this.openIds.size;
      }
      get waiterIds() {
        return Array.from(this.waiters.keys());
      }
      hasBufferedItems(a) {
        return !!this.queues.get(a)?.length;
      }
      open(a) {
        this.openIds.add(a);
      }
      isOpen(a) {
        return this.openIds.has(a);
      }
      push(a, b) {
        this.assertOpen(a);
        let c = this.waiters.get(a);
        if (c?.length) (c.shift()[0](b), 0 === c.length && this.waiters.delete(a));
        else {
          let c = this.queues.get(a);
          c ? c.push(b) : this.queues.set(a, [b]);
        }
      }
      async pull(a) {
        this.assertOpen(a);
        let b = this.queues.get(a);
        if (b?.length) {
          let c = b.shift();
          return (0 === b.length && this.queues.delete(a), c);
        }
        return new Promise((b, c) => {
          let d = this.waiters.get(a),
            e = [b, c];
          d ? d.push(e) : this.waiters.set(a, [e]);
        });
      }
      close({ id: a, reason: b } = {}) {
        if (void 0 === a) {
          (this.waiters.forEach((a, c) => {
            let d =
              b ??
              new e(`[AsyncIdQueue] Queue[${c}] was closed or aborted while waiting for pulling.`);
            a.forEach(([, a]) => a(d));
          }),
            this.waiters.clear(),
            this.openIds.clear(),
            this.queues.clear());
          return;
        }
        let c =
          b ?? new e(`[AsyncIdQueue] Queue[${a}] was closed or aborted while waiting for pulling.`);
        (this.waiters.get(a)?.forEach(([, a]) => a(c)),
          this.waiters.delete(a),
          this.openIds.delete(a),
          this.queues.delete(a));
      }
      assertOpen(a) {
        if (!this.isOpen(a))
          throw Error(
            `[AsyncIdQueue] Cannot access queue[${a}] because it is not open or aborted.`,
          );
      }
    }
    function m(a) {
      return (
        !!a &&
        "object" == typeof a &&
        "next" in a &&
        "function" == typeof a.next &&
        Symbol.asyncIterator in a &&
        "function" == typeof a[Symbol.asyncIterator]
      );
    }
    let n = Symbol.for("asyncDispose"),
      o = Symbol.asyncDispose ?? n;
    class p {
      #a = !1;
      #b = !1;
      #c;
      #d;
      constructor(a, b) {
        ((this.#c = b),
          (this.#d = (function (a) {
            let b = Promise.resolve();
            return (...c) => (b = b.catch(() => {}).then(() => a(...c)));
          })(async () => {
            if (this.#a) return { done: !0, value: void 0 };
            try {
              let b = await a();
              return (b.done && (this.#a = !0), b);
            } catch (a) {
              throw ((this.#a = !0), a);
            } finally {
              this.#a && !this.#b && ((this.#b = !0), await this.#c("next"));
            }
          })));
      }
      next() {
        return this.#d();
      }
      async return(a) {
        return (
          (this.#a = !0),
          this.#b || ((this.#b = !0), await this.#c("return")),
          { done: !0, value: a }
        );
      }
      async throw(a) {
        throw ((this.#a = !0), this.#b || ((this.#b = !0), await this.#c("throw")), a);
      }
      async [o]() {
        ((this.#a = !0), this.#b || ((this.#b = !0), await this.#c("dispose")));
      }
      [Symbol.asyncIterator]() {
        return this;
      }
    }
    function q(a, b) {
      let c = new l(),
        d = Array.from({ length: b }, (a, b) => b.toString()),
        e = !1,
        g = f(async () => {
          try {
            for (;;) {
              let b = await a.next();
              if (
                (d.forEach((a) => {
                  c.isOpen(a) && c.push(a, { next: b });
                }),
                b.done)
              )
                break;
            }
          } catch (a) {
            d.forEach((b) => {
              c.isOpen(b) && c.push(b, { error: a });
            });
          } finally {
            e = !0;
          }
        });
      return d.map(
        (b) => (
          c.open(b),
          new p(
            async () => {
              g();
              let a = await c.pull(b);
              if (a.next) return a.next;
              throw a.error;
            },
            async (d) => {
              (c.close({ id: b }),
                "next" === d || c.length || e || ((e = !0), await a?.return?.()));
            },
          )
        ),
      );
    }
    function r({ name: a, ...b }, c) {
      let d;
      return new p(
        async () => {
          d ??= h(a);
          try {
            let a = await k(d, () => c.next());
            return (d?.addEvent(a.done ? "completed" : "yielded"), a);
          } catch (a) {
            throw (i(d, a, b), a);
          }
        },
        async (a) => {
          try {
            "next" !== a && (await k(d, () => c.return?.()));
          } catch (a) {
            throw (i(d, a, b), a);
          } finally {
            d?.end();
          }
        },
      );
    }
    function s(a, b, c) {
      let d = (b, e) => {
        let f = a[e];
        return f ? f({ ...b, next: (a = b) => d(a, e + 1) }) : c(b);
      };
      return d(b, 0);
    }
    function t(a) {
      if (a) return JSON.parse(a);
    }
    function u(a) {
      return JSON.stringify(a);
    }
    function v(a) {
      return x(a) ? Object.getPrototypeOf(a)?.constructor : null;
    }
    function w(a) {
      if (!a || "object" != typeof a) return !1;
      let b = Object.getPrototypeOf(a);
      return b === Object.prototype || !b || !b.constructor;
    }
    function x(a) {
      return !!a && ("object" == typeof a || "function" == typeof a);
    }
    function y(a, b) {
      let c = a;
      for (let a of b) {
        if (!x(c)) return;
        c = c[a];
      }
      return c;
    }
    function z(a, ...b) {
      return "function" == typeof a ? a(...b) : a;
    }
    function A(a) {
      return new Proxy(a, {
        get(a, b, c) {
          let d = Reflect.get(a, b, c);
          return "then" !== b || "function" != typeof d
            ? d
            : new Proxy(d, {
                apply(b, c, d) {
                  if (
                    2 !== d.length ||
                    d.some((a) => {
                      var b;
                      return !("function" == typeof (b = a) && B.test(b.toString()));
                    })
                  )
                    return Reflect.apply(b, c, d);
                  let e = !0;
                  d[0].call(
                    c,
                    A(
                      new Proxy(a, {
                        get: (a, b, c) => {
                          if (e && "then" === b) {
                            e = !1;
                            return;
                          }
                          return Reflect.get(a, b, c);
                        },
                      }),
                    ),
                  );
                },
              });
        },
      });
    }
    let B = /^\s*function\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/;
    function C(a) {
      try {
        return decodeURIComponent(a);
      } catch {
        return a;
      }
    }
    a.s(
      [
        "AbortError",
        () => e,
        "AsyncIteratorClass",
        () => p,
        "ORPC_NAME",
        () => d,
        "asyncIteratorWithSpan",
        () => r,
        "get",
        () => y,
        "getConstructor",
        () => v,
        "getGlobalOtelConfig",
        () => g,
        "intercept",
        () => s,
        "isAsyncIteratorObject",
        () => m,
        "isObject",
        () => w,
        "isTypescriptObject",
        () => x,
        "once",
        () => f,
        "parseEmptyableJSON",
        () => t,
        "preventNativeAwait",
        () => A,
        "replicateAsyncIterator",
        () => q,
        "resolveMaybeOptionalOptions",
        () => b,
        "runInSpanContext",
        () => k,
        "runWithSpan",
        () => j,
        "setSpanError",
        () => i,
        "startSpan",
        () => h,
        "stringifyJSON",
        () => u,
        "toArray",
        () => c,
        "tryDecodeURIComponent",
        () => C,
        "value",
        () => z,
      ],
      90775,
    );
    let D = {
        BAD_REQUEST: { status: 400, message: "Bad Request" },
        UNAUTHORIZED: { status: 401, message: "Unauthorized" },
        FORBIDDEN: { status: 403, message: "Forbidden" },
        NOT_FOUND: { status: 404, message: "Not Found" },
        METHOD_NOT_SUPPORTED: { status: 405, message: "Method Not Supported" },
        NOT_ACCEPTABLE: { status: 406, message: "Not Acceptable" },
        TIMEOUT: { status: 408, message: "Request Timeout" },
        CONFLICT: { status: 409, message: "Conflict" },
        PRECONDITION_FAILED: { status: 412, message: "Precondition Failed" },
        PAYLOAD_TOO_LARGE: { status: 413, message: "Payload Too Large" },
        UNSUPPORTED_MEDIA_TYPE: { status: 415, message: "Unsupported Media Type" },
        UNPROCESSABLE_CONTENT: { status: 422, message: "Unprocessable Content" },
        TOO_MANY_REQUESTS: { status: 429, message: "Too Many Requests" },
        CLIENT_CLOSED_REQUEST: { status: 499, message: "Client Closed Request" },
        INTERNAL_SERVER_ERROR: { status: 500, message: "Internal Server Error" },
        NOT_IMPLEMENTED: { status: 501, message: "Not Implemented" },
        BAD_GATEWAY: { status: 502, message: "Bad Gateway" },
        SERVICE_UNAVAILABLE: { status: 503, message: "Service Unavailable" },
        GATEWAY_TIMEOUT: { status: 504, message: "Gateway Timeout" },
      },
      E = Symbol.for("__@orpc/client@1.13.5/error/ORPC_ERROR_CONSTRUCTORS__");
    globalThis[E] ??= new WeakSet();
    let F = globalThis[E];
    class G extends Error {
      defined;
      code;
      status;
      data;
      constructor(a, ...c) {
        const d = b(c);
        if (void 0 !== d.status && !H(d.status))
          throw Error("[ORPCError] Invalid error status code.");
        (super(
          (function (a, b) {
            return b || D[a]?.message || a;
          })(a, d.message),
          d,
        ),
          (this.code = a),
          (this.status = (function (a, b) {
            return b ?? D[a]?.status ?? 500;
          })(a, d.status)),
          (this.defined = d.defined ?? !1),
          (this.data = d.data));
      }
      toJSON() {
        return {
          defined: this.defined,
          code: this.code,
          status: this.status,
          message: this.message,
          data: this.data,
        };
      }
      static [Symbol.hasInstance](a) {
        if (F.has(this)) {
          let b = v(a);
          if (b && F.has(b)) return !0;
        }
        return super[Symbol.hasInstance](a);
      }
    }
    function H(a) {
      return a < 200 || a >= 400;
    }
    function I(a) {
      if (!w(a)) return !1;
      let b = ["defined", "code", "status", "message", "data"];
      return (
        !Object.keys(a).some((a) => !b.includes(a)) &&
        "defined" in a &&
        "boolean" == typeof a.defined &&
        "code" in a &&
        "string" == typeof a.code &&
        "status" in a &&
        "number" == typeof a.status &&
        H(a.status) &&
        "message" in a &&
        "string" == typeof a.message
      );
    }
    function J(a, b = {}) {
      return new G(a.code, { ...b, ...a });
    }
    F.add(G);
    class K extends TypeError {}
    class L extends TypeError {}
    class M extends Error {
      data;
      constructor(a) {
        (super(a?.message ?? "An error event was received", a), (this.data = a?.data));
      }
    }
    class N {
      constructor(a = {}) {
        this.options = a;
      }
      incomplete = "";
      feed(a) {
        this.incomplete += a;
        let b = this.incomplete.lastIndexOf("\n\n");
        if (-1 === b) return;
        let c = this.incomplete.slice(0, b).split(/\n\n/);
        for (let a of ((this.incomplete = this.incomplete.slice(b + 2)), c)) {
          let b = (function (a) {
            let b = a.replace(/\n+$/, "").split(/\n/),
              c = { data: void 0, event: void 0, id: void 0, retry: void 0, comments: [] };
            for (let a of b) {
              let b = a.indexOf(":"),
                d = -1 === b ? a : a.slice(0, b),
                e = -1 === b ? "" : a.slice(b + 1).replace(/^\s/, "");
              if (0 === b) c.comments.push(e);
              else if ("data" === d)
                ((c.data ??= ""),
                  (c.data += `${e}
`));
              else if ("event" === d) c.event = e;
              else if ("id" === d) c.id = e;
              else if ("retry" === d) {
                let a = Number.parseInt(e);
                Number.isInteger(a) && a >= 0 && a.toString() === e && (c.retry = a);
              }
            }
            return ((c.data = c.data?.replace(/\n$/, "")), c);
          })(`${a}

`);
          this.options.onEvent && this.options.onEvent(b);
        }
      }
      end() {
        if (this.incomplete) throw new L("Event Iterator ended before complete");
      }
    }
    class O extends TransformStream {
      constructor() {
        let a;
        super({
          start(b) {
            a = new N({
              onEvent: (a) => {
                b.enqueue(a);
              },
            });
          },
          transform(b) {
            a.feed(b);
          },
          flush() {
            a.end();
          },
        });
      }
    }
    function P(a) {
      if (a.includes("\n")) throw new K("Event's id must not contain a newline character");
    }
    function Q(a) {
      if (!Number.isInteger(a) || a < 0) throw new K("Event's retry must be a integer and >= 0");
    }
    function R(a) {
      if (a.includes("\n")) throw new K("Event's comment must not contain a newline character");
    }
    function S(a) {
      let b = "";
      if (
        ((b += (function (a) {
          let b = "";
          for (let c of a ?? [])
            (R(c),
              (b += `: ${c}
`));
          return b;
        })(a.comments)),
        void 0 !== a.event)
      ) {
        if (a.event.includes("\n"))
          throw new K("Event's event must not contain a newline character");
        b += `event: ${a.event}
`;
      }
      return (
        void 0 !== a.retry &&
          (Q(a.retry),
          (b += `retry: ${a.retry}
`)),
        void 0 !== a.id &&
          (P(a.id),
          (b += `id: ${a.id}
`)),
        (b += (function (a) {
          let b = a?.split(/\n/) ?? [],
            c = "";
          for (let a of b)
            c += `data: ${a}
`;
          return c;
        })(a.data)),
        (b += "\n")
      );
    }
    let T = Symbol("ORPC_EVENT_SOURCE_META");
    function U(a, b) {
      if (void 0 === b.id && void 0 === b.retry && !b.comments?.length) return a;
      if ((void 0 !== b.id && P(b.id), void 0 !== b.retry && Q(b.retry), void 0 !== b.comments))
        for (let a of b.comments) R(a);
      return new Proxy(a, { get: (a, c, d) => (c === T ? b : Reflect.get(a, c, d)) });
    }
    function V(a) {
      return x(a) ? Reflect.get(a, T) : void 0;
    }
    function W(a, b) {
      let c = async (a) => {
        let c = await b.error(a);
        if (c !== a) {
          let b = V(a);
          b && x(c) && (c = U(c, b));
        }
        return c;
      };
      return new p(
        async () => {
          let { done: d, value: e } = await (async () => {
              try {
                return await a.next();
              } catch (a) {
                throw await c(a);
              }
            })(),
            f = await b.value(e, d);
          if (f !== e) {
            let a = V(e);
            a && x(f) && (f = U(f, a));
          }
          return { done: d, value: f };
        },
        async () => {
          try {
            await a.return?.();
          } catch (a) {
            throw await c(a);
          }
        },
      );
    }
    function X(a, b = {}) {
      return (
        a.forEach((a, c) => {
          Array.isArray(b[c]) ? b[c].push(a) : void 0 !== b[c] ? (b[c] = [b[c], a]) : (b[c] = a);
        }),
        b
      );
    }
    a.s(
      [
        "createORPCClient",
        () =>
          function a(b, c = {}) {
            let d = c.path ?? [];
            return A(
              new Proxy(
                async (...[a, c = {}]) => await b.call(d, a, { ...c, context: c.context ?? {} }),
                {
                  get: (e, f) =>
                    "string" != typeof f ? Reflect.get(e, f) : a(b, { ...c, path: [...d, f] }),
                },
              ),
            );
          },
      ],
      4854,
    );
    class Y {
      plugins;
      constructor(a = []) {
        this.plugins = [...a].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      }
      init(a) {
        for (let b of this.plugins) b.init?.(a);
      }
    }
    class Z {
      constructor(a, b, d = {}) {
        ((this.codec = a),
          (this.sender = b),
          new Y(d.plugins).init(d),
          (this.interceptors = c(d.interceptors)),
          (this.clientInterceptors = c(d.clientInterceptors)));
      }
      interceptors;
      clientInterceptors;
      call(a, b, c) {
        return j(
          { name: `${d}.${a.join("/")}`, signal: c.signal },
          (e) => (
            e?.setAttribute("rpc.system", d),
            e?.setAttribute("rpc.method", a.join(".")),
            m(b) && (b = r({ name: "consume_event_iterator_input", signal: c.signal }, b)),
            s(
              this.interceptors,
              { ...c, path: a, input: b },
              async ({ path: a, input: b, ...c }) => {
                let d,
                  f = g(),
                  h = f?.trace.getActiveSpan() ?? e;
                h && f && (d = f?.trace.setSpan(f.context.active(), h));
                let i = await j({ name: "encode_request", context: d }, () =>
                    this.codec.encode(a, b, c),
                  ),
                  k = await s(
                    this.clientInterceptors,
                    { ...c, input: b, path: a, request: i },
                    ({ input: a, path: b, request: c, ...e }) =>
                      j({ name: "send_request", signal: e.signal, context: d }, () =>
                        this.sender.call(c, e, b, a),
                      ),
                  ),
                  l = await j({ name: "decode_response", context: d }, () =>
                    this.codec.decode(k, c, a, b),
                  );
                return m(l) ? r({ name: "consume_event_iterator_output", signal: c.signal }, l) : l;
              },
            )
          ),
        );
      }
    }
    class $ {
      customSerializers;
      constructor(a = {}) {
        if (
          ((this.customSerializers = a.customJsonSerializers ?? []),
          this.customSerializers.length !== new Set(this.customSerializers.map((a) => a.type)).size)
        )
          throw Error("Custom serializer type must be unique.");
      }
      serialize(a, b = [], c = [], d = [], e = []) {
        for (let f of this.customSerializers)
          if (f.condition(a)) {
            let g = this.serialize(f.serialize(a), b, c, d, e);
            return (c.push([f.type, ...b]), g);
          }
        if (a instanceof Blob) return (d.push(b), e.push(a), [a, c, d, e]);
        if ("bigint" == typeof a) return (c.push([0, ...b]), [a.toString(), c, d, e]);
        if (a instanceof Date)
          return (c.push([1, ...b]), Number.isNaN(a.getTime()))
            ? [null, c, d, e]
            : [a.toISOString(), c, d, e];
        if (Number.isNaN(a)) return (c.push([2, ...b]), [null, c, d, e]);
        if (a instanceof URL) return (c.push([4, ...b]), [a.toString(), c, d, e]);
        if (a instanceof RegExp) return (c.push([5, ...b]), [a.toString(), c, d, e]);
        if (a instanceof Set) {
          let f = this.serialize(Array.from(a), b, c, d, e);
          return (c.push([6, ...b]), f);
        }
        if (a instanceof Map) {
          let f = this.serialize(Array.from(a.entries()), b, c, d, e);
          return (c.push([7, ...b]), f);
        }
        if (Array.isArray(a))
          return [
            a.map((a, f) =>
              void 0 === a ? (c.push([3, ...b, f]), a) : this.serialize(a, [...b, f], c, d, e)[0],
            ),
            c,
            d,
            e,
          ];
        if (w(a)) {
          let f = {};
          for (let g in a)
            ("toJSON" !== g || "function" != typeof a[g]) &&
              (f[g] = this.serialize(a[g], [...b, g], c, d, e)[0]);
          return [f, c, d, e];
        }
        return [a, c, d, e];
      }
      deserialize(a, b, c, d) {
        let e = { data: a };
        for (let a of (c &&
          d &&
          c.forEach((a, b) => {
            let c = e,
              f = "data";
            (a.forEach((a) => {
              ((c = c[f]), (f = a));
            }),
              (c[f] = d(b)));
          }),
        b)) {
          let b = a[0],
            c = e,
            d = "data";
          for (let b = 1; b < a.length; b++) ((c = c[d]), (d = a[b]));
          for (let a of this.customSerializers)
            if (a.type === b) {
              c[d] = a.deserialize(c[d]);
              break;
            }
          switch (b) {
            case 0:
              c[d] = BigInt(c[d]);
              break;
            case 1:
              c[d] = new Date(c[d] ?? "Invalid Date");
              break;
            case 2:
              c[d] = NaN;
              break;
            case 3:
              c[d] = void 0;
              break;
            case 4:
              c[d] = new URL(c[d]);
              break;
            case 5: {
              let [, a, b] = c[d].match(/^\/(.*)\/([a-z]*)$/);
              c[d] = new RegExp(a, b);
              break;
            }
            case 6:
              c[d] = new Set(c[d]);
              break;
            case 7:
              c[d] = new Map(c[d]);
          }
        }
        return e.data;
      }
    }
    class _ {
      constructor(a, b) {
        ((this.serializer = a),
          (this.baseUrl = b.url),
          (this.maxUrlLength = b.maxUrlLength ?? 2083),
          (this.fallbackMethod = b.fallbackMethod ?? "POST"),
          (this.expectedMethod = b.method ?? this.fallbackMethod),
          (this.headers = b.headers ?? {}));
      }
      baseUrl;
      maxUrlLength;
      fallbackMethod;
      expectedMethod;
      headers;
      async encode(a, b, d) {
        var e;
        let f = "function" == typeof (e = await z(this.headers, d, a, b)).forEach ? X(e) : e;
        void 0 !== d.lastEventId &&
          (f = (function (a, b) {
            let d = { ...a };
            for (let a in b)
              Array.isArray(b[a])
                ? (d[a] = [...c(d[a]), ...b[a]])
                : void 0 !== b[a] &&
                  (Array.isArray(d[a])
                    ? (d[a] = [...d[a], b[a]])
                    : void 0 !== d[a]
                      ? (d[a] = [d[a], b[a]])
                      : (d[a] = b[a]));
            return d;
          })(f, { "last-event-id": d.lastEventId }));
        let g = await z(this.expectedMethod, d, a, b),
          h = new URL(await z(this.baseUrl, d, a, b));
        h.pathname = `${h.pathname.replace(/\/$/, "")}/${a.map(encodeURIComponent).join("/")}`;
        let i = this.serializer.serialize(b);
        if ("GET" === g && !(i instanceof FormData) && !m(i)) {
          let c = await z(this.maxUrlLength, d, a, b),
            e = new URL(h);
          if ((e.searchParams.append("data", u(i)), e.toString().length <= c))
            return { body: void 0, method: g, headers: f, url: e, signal: d.signal };
        }
        return {
          url: h,
          method: "GET" === g ? this.fallbackMethod : g,
          headers: f,
          body: i,
          signal: d.signal,
        };
      }
      async decode(a) {
        let b = !H(a.status),
          c = await (async () => {
            let b = !1;
            try {
              let c = await a.body();
              return ((b = !0), this.serializer.deserialize(c));
            } catch (a) {
              if (!b)
                throw Error(
                  "Cannot parse response body, please check the response body and content-type.",
                  { cause: a },
                );
              throw Error("Invalid RPC response format.", { cause: a });
            }
          })();
        if (!b) {
          var d;
          if (I(c)) throw J(c);
          throw new G(
            ((d = a.status),
            Object.entries(D).find(([, a]) => a.status === d)?.[0] ??
              "MALFORMED_ORPC_ERROR_RESPONSE"),
            { status: a.status, data: { ...a, body: c } },
          );
        }
        return c;
      }
    }
    class aa {
      constructor(a) {
        this.jsonSerializer = a;
      }
      serialize(a) {
        return m(a)
          ? W(a, {
              value: async (a) => this.#e(a, !1),
              error: async (a) =>
                new M({
                  data: this.#e(
                    (a instanceof G
                      ? a
                      : new G("INTERNAL_SERVER_ERROR", {
                          message: "Internal server error",
                          cause: a,
                        })
                    ).toJSON(),
                    !1,
                  ),
                  cause: a,
                }),
            })
          : this.#e(a, !0);
      }
      #e(a, b) {
        let [c, d, e, f] = this.jsonSerializer.serialize(a),
          g = 0 === d.length ? void 0 : d;
        if (!b || 0 === f.length) return { json: c, meta: g };
        let h = new FormData();
        return (
          h.set("data", u({ json: c, meta: g, maps: e })),
          f.forEach((a, b) => {
            h.set(b.toString(), a);
          }),
          h
        );
      }
      deserialize(a) {
        return m(a)
          ? W(a, {
              value: async (a) => this.#f(a),
              error: async (a) => {
                if (!(a instanceof M)) return a;
                let b = this.#f(a.data);
                return I(b) ? J(b, { cause: a }) : new M({ data: b, cause: a });
              },
            })
          : this.#f(a);
      }
      #f(a) {
        if (void 0 === a) return;
        if (!(a instanceof FormData)) return this.jsonSerializer.deserialize(a.json, a.meta ?? []);
        let b = JSON.parse(a.get("data"));
        return this.jsonSerializer.deserialize(b.json, b.meta ?? [], b.maps, (b) =>
          a.get(b.toString()),
        );
      }
    }
    class ab extends Z {
      constructor(a, b) {
        super(new _(new aa(new $(b)), b), a, b);
      }
    }
    class ac extends Y {
      initRuntimeAdapter(a) {
        for (let b of this.plugins) b.initRuntimeAdapter?.(a);
      }
    }
    class ad {
      fetch;
      toFetchRequestOptions;
      adapterInterceptors;
      constructor(a) {
        (new ac(a.plugins).initRuntimeAdapter(a),
          (this.fetch = a.fetch ?? globalThis.fetch.bind(globalThis)),
          (this.toFetchRequestOptions = a),
          (this.adapterInterceptors = c(a.adapterInterceptors)));
      }
      async call(a, b, c, d) {
        let g = (function (a, b = {}) {
          let c = (function (a, b = new Headers()) {
              for (let [c, d] of Object.entries(a))
                if (Array.isArray(d)) for (let a of d) b.append(c, a);
                else void 0 !== d && b.append(c, d);
              return b;
            })(a.headers),
            d = (function (a, b, c = {}) {
              let d = b.get("content-disposition");
              if ((b.delete("content-type"), b.delete("content-disposition"), void 0 !== a)) {
                if (a instanceof Blob) {
                  var e;
                  let c, f;
                  return (
                    b.set("content-type", a.type),
                    b.set("content-length", a.size.toString()),
                    b.set(
                      "content-disposition",
                      d ??
                        ((c = (e = a instanceof File ? a.name : "blob").replace(/"/g, '\\"')),
                        (f = encodeURIComponent(e)
                          .replace(
                            /['()*]/g,
                            (a) => `%${a.charCodeAt(0).toString(16).toUpperCase()}`,
                          )
                          .replace(/%(7C|60|5E)/g, (a, b) =>
                            String.fromCharCode(Number.parseInt(b, 16)),
                          )),
                        `inline; filename="${c}"; filename*=utf-8''${f}`),
                    ),
                    a
                  );
                }
                return a instanceof FormData || a instanceof URLSearchParams
                  ? a
                  : m(a)
                    ? (b.set("content-type", "text/event-stream"),
                      (function (a, b = {}) {
                        let c,
                          d,
                          e = b.eventIteratorKeepAliveEnabled ?? !0,
                          f = b.eventIteratorKeepAliveInterval ?? 5e3,
                          g = b.eventIteratorKeepAliveComment ?? "",
                          j = b.eventIteratorInitialCommentEnabled ?? !0,
                          l = b.eventIteratorInitialComment ?? "",
                          m = !1;
                        return new ReadableStream({
                          start(a) {
                            ((d = h("stream_event_iterator")),
                              j && a.enqueue(S({ comments: [l] })));
                          },
                          async pull(b) {
                            try {
                              e &&
                                (c = setInterval(() => {
                                  (b.enqueue(S({ comments: [g] })), d?.addEvent("keepalive"));
                                }, f));
                              let h = await k(d, () => a.next());
                              if ((clearInterval(c), m)) return;
                              let i = V(h.value);
                              if (!h.done || void 0 !== h.value || void 0 !== i) {
                                let a = h.done ? "done" : "message";
                                (b.enqueue(S({ ...i, event: a, data: u(h.value) })),
                                  d?.addEvent(a));
                              }
                              h.done && (b.close(), d?.end());
                            } catch (a) {
                              if ((clearInterval(c), m)) return;
                              (a instanceof M
                                ? (b.enqueue(S({ ...V(a), event: "error", data: u(a.data) })),
                                  d?.addEvent("error"),
                                  b.close())
                                : (i(d, a), b.error(a)),
                                d?.end());
                            }
                          },
                          async cancel() {
                            try {
                              ((m = !0),
                                clearInterval(c),
                                d?.addEvent("cancelled"),
                                await k(d, () => a.return?.()));
                            } catch (a) {
                              throw (i(d, a), a);
                            } finally {
                              d?.end();
                            }
                          },
                        }).pipeThrough(new TextEncoderStream());
                      })(a, c))
                    : (b.set("content-type", "application/json"), u(a));
              }
            })(a.body, c, b);
          return new Request(a.url, { signal: a.signal, method: a.method, headers: c, body: d });
        })(a, this.toFetchRequestOptions);
        return (function (a, b = {}) {
          return {
            body: f(() =>
              (function (a, b = {}) {
                return j({ name: "parse_standard_body", signal: b.signal }, async () => {
                  let c = a.headers.get("content-disposition");
                  if ("string" == typeof c) {
                    let b =
                        (function (a) {
                          let b = a.match(/filename\*=(UTF-8'')?([^;]*)/i);
                          if (b && "string" == typeof b[2]) return C(b[2]);
                          let c = a.match(/filename="((?:\\"|[^"])*)"/i);
                          if (c && "string" == typeof c[1]) return c[1].replace(/\\"/g, '"');
                        })(c) ?? "blob",
                      d = await a.blob();
                    return new File([d], b, { type: d.type });
                  }
                  let d = a.headers.get("content-type");
                  if (!d || d.startsWith("application/json")) return t(await a.text());
                  if (d.startsWith("multipart/form-data")) return await a.formData();
                  if (d.startsWith("application/x-www-form-urlencoded"))
                    return new URLSearchParams(await a.text());
                  if (d.startsWith("text/event-stream"))
                    return (function (a, b = {}) {
                      let c,
                        d = a?.pipeThrough(new TextDecoderStream()).pipeThrough(new O()),
                        f = d?.getReader(),
                        g = !1;
                      return new p(
                        async () => {
                          c ??= h("consume_event_iterator_stream");
                          try {
                            for (;;) {
                              if (void 0 === f) return { done: !0, value: void 0 };
                              let { done: a, value: b } = await k(c, () => f.read());
                              if (a) {
                                if (g) throw new e("Stream was cancelled");
                                return { done: !0, value: void 0 };
                              }
                              switch (b.event) {
                                case "message": {
                                  let a = t(b.data);
                                  return (
                                    x(a) && (a = U(a, b)),
                                    c?.addEvent("message"),
                                    { done: !1, value: a }
                                  );
                                }
                                case "error": {
                                  let a = new M({ data: t(b.data) });
                                  throw ((a = U(a, b)), c?.addEvent("error"), a);
                                }
                                case "done": {
                                  let a = t(b.data);
                                  return (
                                    x(a) && (a = U(a, b)),
                                    c?.addEvent("done"),
                                    { done: !0, value: a }
                                  );
                                }
                                default:
                                  c?.addEvent("maybe_keepalive");
                              }
                            }
                          } catch (a) {
                            throw (a instanceof M || i(c, a, b), a);
                          }
                        },
                        async (a) => {
                          try {
                            ("next" !== a && ((g = !0), c?.addEvent("cancelled")),
                              await k(c, () => f?.cancel()));
                          } catch (a) {
                            throw (i(c, a, b), a);
                          } finally {
                            c?.end();
                          }
                        },
                      );
                    })(a.body, b);
                  if (d.startsWith("text/plain")) return await a.text();
                  let f = await a.blob();
                  return new File([f], "blob", { type: f.type });
                });
              })(a, b),
            ),
            status: a.status,
            get headers() {
              let b = X(a.headers);
              return (Object.defineProperty(this, "headers", { value: b, writable: !0 }), b);
            },
            set headers(value) {
              Object.defineProperty(this, "headers", { value, writable: !0 });
            },
          };
        })(
          await s(
            this.adapterInterceptors,
            { ...b, request: g, path: c, input: d, init: { redirect: "manual" } },
            ({ request: a, path: b, input: c, init: d, ...e }) => this.fetch(a, d, e, b, c),
          ),
          { signal: g.signal },
        );
      }
    }
    class ae extends ab {
      constructor(a) {
        super(new ad(a), a);
      }
    }
    a.s(["RPCLink", () => ae], 478);
  },
  8361,
  (a) => {
    "use strict";
    var b = {
        setTimeout: (a, b) => setTimeout(a, b),
        clearTimeout: (a) => clearTimeout(a),
        setInterval: (a, b) => setInterval(a, b),
        clearInterval: (a) => clearInterval(a),
      },
      c = new (class {
        #g = b;
        #h = !1;
        setTimeoutProvider(a) {
          this.#g = a;
        }
        setTimeout(a, b) {
          return this.#g.setTimeout(a, b);
        }
        clearTimeout(a) {
          this.#g.clearTimeout(a);
        }
        setInterval(a, b) {
          return this.#g.setInterval(a, b);
        }
        clearInterval(a) {
          this.#g.clearInterval(a);
        }
      })();
    function d(a) {
      setTimeout(a, 0);
    }
    a.s(["systemSetTimeoutZero", () => d, "timeoutManager", () => c]);
  },
  42871,
  (a) => {
    "use strict";
    var b = a.i(8361);
    function c() {}
    function d(a, b) {
      return "function" == typeof a ? a(b) : a;
    }
    function e(a) {
      return "number" == typeof a && a >= 0 && a !== 1 / 0;
    }
    function f(a, b) {
      return Math.max(a + (b || 0) - Date.now(), 0);
    }
    function g(a, b) {
      return "function" == typeof a ? a(b) : a;
    }
    function h(a, b) {
      return "function" == typeof a ? a(b) : a;
    }
    function i(a, b) {
      let { type: c = "all", exact: d, fetchStatus: e, predicate: f, queryKey: g, stale: h } = a;
      if (g) {
        if (d) {
          if (b.queryHash !== k(g, b.options)) return !1;
        } else if (!m(b.queryKey, g)) return !1;
      }
      if ("all" !== c) {
        let a = b.isActive();
        if (("active" === c && !a) || ("inactive" === c && a)) return !1;
      }
      return (
        ("boolean" != typeof h || b.isStale() === h) &&
        (!e || e === b.state.fetchStatus) &&
        (!f || !!f(b))
      );
    }
    function j(a, b) {
      let { exact: c, status: d, predicate: e, mutationKey: f } = a;
      if (f) {
        if (!b.options.mutationKey) return !1;
        if (c) {
          if (l(b.options.mutationKey) !== l(f)) return !1;
        } else if (!m(b.options.mutationKey, f)) return !1;
      }
      return (!d || b.state.status === d) && (!e || !!e(b));
    }
    function k(a, b) {
      return (b?.queryKeyHashFn || l)(a);
    }
    function l(a) {
      return JSON.stringify(a, (a, b) =>
        q(b)
          ? Object.keys(b)
              .sort()
              .reduce((a, c) => ((a[c] = b[c]), a), {})
          : b,
      );
    }
    function m(a, b) {
      return (
        a === b ||
        (typeof a == typeof b &&
          !!a &&
          !!b &&
          "object" == typeof a &&
          "object" == typeof b &&
          Object.keys(b).every((c) => m(a[c], b[c])))
      );
    }
    var n = Object.prototype.hasOwnProperty;
    function o(a, b) {
      if (!b || Object.keys(a).length !== Object.keys(b).length) return !1;
      for (let c in a) if (a[c] !== b[c]) return !1;
      return !0;
    }
    function p(a) {
      return Array.isArray(a) && a.length === Object.keys(a).length;
    }
    function q(a) {
      if (!r(a)) return !1;
      let b = a.constructor;
      if (void 0 === b) return !0;
      let c = b.prototype;
      return (
        !!r(c) &&
        !!c.hasOwnProperty("isPrototypeOf") &&
        Object.getPrototypeOf(a) === Object.prototype
      );
    }
    function r(a) {
      return "[object Object]" === Object.prototype.toString.call(a);
    }
    function s(a) {
      return new Promise((c) => {
        b.timeoutManager.setTimeout(c, a);
      });
    }
    function t(a, b, c) {
      return "function" == typeof c.structuralSharing
        ? c.structuralSharing(a, b)
        : !1 !== c.structuralSharing
          ? (function a(b, c, d = 0) {
              if (b === c) return b;
              if (d > 500) return c;
              let e = p(b) && p(c);
              if (!e && !(q(b) && q(c))) return c;
              let f = (e ? b : Object.keys(b)).length,
                g = e ? c : Object.keys(c),
                h = g.length,
                i = e ? Array(h) : {},
                j = 0;
              for (let k = 0; k < h; k++) {
                let h = e ? k : g[k],
                  l = b[h],
                  m = c[h];
                if (l === m) {
                  ((i[h] = l), (e ? k < f : n.call(b, h)) && j++);
                  continue;
                }
                if (null === l || null === m || "object" != typeof l || "object" != typeof m) {
                  i[h] = m;
                  continue;
                }
                let o = a(l, m, d + 1);
                ((i[h] = o), o === l && j++);
              }
              return f === h && j === f ? b : i;
            })(a, b)
          : b;
    }
    function u(a, b, c = 0) {
      let d = [...a, b];
      return c && d.length > c ? d.slice(1) : d;
    }
    function v(a, b, c = 0) {
      let d = [b, ...a];
      return c && d.length > c ? d.slice(0, -1) : d;
    }
    var w = Symbol();
    function x(a, b) {
      return !a.queryFn && b?.initialPromise
        ? () => b.initialPromise
        : a.queryFn && a.queryFn !== w
          ? a.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${a.queryHash}'`));
    }
    function y(a, b) {
      return "function" == typeof a ? a(...b) : !!a;
    }
    function z(a, b, c) {
      let d,
        e = !1;
      return (
        Object.defineProperty(a, "signal", {
          enumerable: !0,
          get: () => (
            (d ??= b()),
            e || ((e = !0), d.aborted ? c() : d.addEventListener("abort", c, { once: !0 })),
            d
          ),
        }),
        a
      );
    }
    a.s([
      "addConsumeAwareSignal",
      () => z,
      "addToEnd",
      () => u,
      "addToStart",
      () => v,
      "ensureQueryFn",
      () => x,
      "functionalUpdate",
      () => d,
      "hashKey",
      () => l,
      "hashQueryKeyByOptions",
      () => k,
      "isServer",
      () => !0,
      "isValidTimeout",
      () => e,
      "matchMutation",
      () => j,
      "matchQuery",
      () => i,
      "noop",
      () => c,
      "partialMatchKey",
      () => m,
      "replaceData",
      () => t,
      "resolveEnabled",
      () => h,
      "resolveStaleTime",
      () => g,
      "shallowEqualObjects",
      () => o,
      "shouldThrowError",
      () => y,
      "skipToken",
      () => w,
      "sleep",
      () => s,
      "timeUntilStale",
      () => f,
    ]);
  },
  14910,
  (a) => {
    "use strict";
    var b = a.i(90775),
      c = a.i(42871);
    function d(a, b = {}) {
      return [
        a,
        {
          ...(void 0 !== b.input ? { input: b.input } : {}),
          ...(void 0 !== b.type ? { type: b.type } : {}),
          ...(void 0 !== b.fnOptions ? { fnOptions: b.fnOptions } : {}),
        },
      ];
    }
    function e(a, b) {
      return a.length <= b ? a : a.slice(a.length - b);
    }
    let f = Symbol("ORPC_OPERATION_CONTEXT");
    a.s([
      "createTanstackQueryUtils",
      () =>
        function a(g, h = {}) {
          var i;
          let j,
            k = (0, b.toArray)(h.path),
            l = { key: (a) => d(k, a) },
            m =
              ((i = { path: k, experimental_defaults: h.experimental_defaults }),
              (j = {
                call: g,
                queryKey: (...[a = {}]) =>
                  (a = { ...i.experimental_defaults?.queryKey, ...a }).queryKey ??
                  d(i.path, { type: "query", input: a.input }),
                queryOptions(...[a = {}]) {
                  a = { ...i.experimental_defaults?.queryOptions, ...a };
                  let b = j.queryKey(a);
                  return {
                    queryFn: ({ signal: d }) => {
                      if (a.input === c.skipToken)
                        throw Error("queryFn should not be called with skipToken used as input");
                      return g(a.input, {
                        signal: d,
                        context: { [f]: { key: b, type: "query" }, ...a.context },
                      });
                    },
                    ...(a.input === c.skipToken ? { enabled: !1 } : {}),
                    ...a,
                    queryKey: b,
                  };
                },
                experimental_streamedKey: (...[a = {}]) =>
                  (a = { ...i.experimental_defaults?.experimental_streamedKey, ...a }).queryKey ??
                  d(i.path, { type: "streamed", input: a.input, fnOptions: a.queryFnOptions }),
                experimental_streamedOptions(...[a = {}]) {
                  a = { ...i.experimental_defaults?.experimental_streamedOptions, ...a };
                  let d = j.experimental_streamedKey(a);
                  return {
                    queryFn: (function (
                      a,
                      { refetchMode: b = "reset", maxChunks: c = 1 / 0 } = {},
                    ) {
                      return async (d) => {
                        let f = d.client.getQueryCache().find({ queryKey: d.queryKey, exact: !0 }),
                          g = !!f && void 0 !== f.state.data;
                        g &&
                          ("reset" === b
                            ? f.setState({
                                status: "pending",
                                data: void 0,
                                error: null,
                                fetchStatus: "fetching",
                              })
                            : d.client.setQueryData(d.queryKey, (a = []) => e(a, c)));
                        let h = [],
                          i = await a(d),
                          j = !g || "replace" !== b;
                        for await (let a of (d.client.setQueryData(d.queryKey, (a = []) => e(a, c)),
                        i)) {
                          if (d.signal.aborted) throw d.signal.reason;
                          (h.push(a),
                            (h = e(h, c)),
                            j && d.client.setQueryData(d.queryKey, (b = []) => e([...b, a], c)));
                        }
                        j || d.client.setQueryData(d.queryKey, h);
                        let k = d.client.getQueryData(d.queryKey);
                        return k ? e(k, c) : h;
                      };
                    })(async ({ signal: e }) => {
                      if (a.input === c.skipToken)
                        throw Error("queryFn should not be called with skipToken used as input");
                      let h = await g(a.input, {
                        signal: e,
                        context: { [f]: { key: d, type: "streamed" }, ...a.context },
                      });
                      if (!(0, b.isAsyncIteratorObject)(h))
                        throw Error("streamedQuery requires an event iterator output");
                      return h;
                    }, a.queryFnOptions),
                    ...(a.input === c.skipToken ? { enabled: !1 } : {}),
                    ...a,
                    queryKey: d,
                  };
                },
                experimental_liveKey: (...[a = {}]) =>
                  (a = { ...i.experimental_defaults?.experimental_liveKey, ...a }).queryKey ??
                  d(i.path, { type: "live", input: a.input }),
                experimental_liveOptions(...[a = {}]) {
                  var d;
                  a = { ...i.experimental_defaults?.experimental_liveOptions, ...a };
                  let e = j.experimental_liveKey(a);
                  return {
                    queryFn:
                      ((d = async ({ signal: d }) => {
                        if (a.input === c.skipToken)
                          throw Error("queryFn should not be called with skipToken used as input");
                        let h = await g(a.input, {
                          signal: d,
                          context: { [f]: { key: e, type: "live" }, ...a.context },
                        });
                        if (!(0, b.isAsyncIteratorObject)(h))
                          throw Error("liveQuery requires an event iterator output");
                        return h;
                      }),
                      async (a) => {
                        let c;
                        for await (let b of await d(a)) {
                          if (a.signal.aborted) throw a.signal.reason;
                          ((c = { chunk: b }), a.client.setQueryData(a.queryKey, b));
                        }
                        if (!c)
                          throw Error(
                            `Live query for ${(0, b.stringifyJSON)(a.queryKey)} did not yield any data. Ensure the query function returns an AsyncIterable with at least one chunk.`,
                          );
                        return c.chunk;
                      }),
                    ...(a.input === c.skipToken ? { enabled: !1 } : {}),
                    ...a,
                    queryKey: e,
                  };
                },
                infiniteKey: (a) =>
                  (a = { ...i.experimental_defaults?.infiniteKey, ...a }).queryKey ??
                  d(i.path, {
                    type: "infinite",
                    input: a.input === c.skipToken ? c.skipToken : a.input(a.initialPageParam),
                  }),
                infiniteOptions(a) {
                  a = { ...i.experimental_defaults?.infiniteOptions, ...a };
                  let b = j.infiniteKey(a);
                  return {
                    queryFn: ({ pageParam: d, signal: e }) => {
                      if (a.input === c.skipToken)
                        throw Error("queryFn should not be called with skipToken used as input");
                      return g(a.input(d), {
                        signal: e,
                        context: { [f]: { key: b, type: "infinite" }, ...a.context },
                      });
                    },
                    ...(a.input === c.skipToken ? { enabled: !1 } : {}),
                    ...a,
                    queryKey: b,
                  };
                },
                mutationKey: (...[a = {}]) =>
                  (a = { ...i.experimental_defaults?.mutationKey, ...a }).mutationKey ??
                  d(i.path, { type: "mutation" }),
                mutationOptions(...[a = {}]) {
                  a = { ...i.experimental_defaults?.mutationOptions, ...a };
                  let b = j.mutationKey(a);
                  return {
                    mutationFn: (c) =>
                      g(c, { context: { [f]: { key: b, type: "mutation" }, ...a.context } }),
                    ...a,
                    mutationKey: b,
                  };
                },
              }));
          return new Proxy(
            { ...l, ...m },
            {
              get(c, d) {
                let e = Reflect.get(c, d);
                if ("string" != typeof d) return e;
                let f = a(g[d], {
                  ...h,
                  path: [...k, d],
                  experimental_defaults: (0, b.get)(h.experimental_defaults, [d]),
                });
                return "function" != typeof e
                  ? f
                  : new Proxy(e, { get: (a, b) => Reflect.get(f, b) });
              },
            },
          );
        },
    ]);
  },
  18544,
  (a) => {
    "use strict";
    let b, c, d, e, f, g;
    var h = a.i(8361).systemSetTimeoutZero,
      i =
        ((b = []),
        (c = 0),
        (d = (a) => {
          a();
        }),
        (e = (a) => {
          a();
        }),
        (f = h),
        {
          batch: (a) => {
            let g;
            c++;
            try {
              g = a();
            } finally {
              let a;
              --c ||
                ((a = b),
                (b = []),
                a.length &&
                  f(() => {
                    e(() => {
                      a.forEach((a) => {
                        d(a);
                      });
                    });
                  }));
            }
            return g;
          },
          batchCalls:
            (a) =>
            (...b) => {
              g(() => {
                a(...b);
              });
            },
          schedule: (g = (a) => {
            c
              ? b.push(a)
              : f(() => {
                  d(a);
                });
          }),
          setNotifyFunction: (a) => {
            d = a;
          },
          setBatchNotifyFunction: (a) => {
            e = a;
          },
          setScheduler: (a) => {
            f = a;
          },
        });
    a.s(["notifyManager", () => i]);
  },
  33791,
  (a) => {
    "use strict";
    var b = class {
      constructor() {
        ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
      }
      subscribe(a) {
        return (
          this.listeners.add(a),
          this.onSubscribe(),
          () => {
            (this.listeners.delete(a), this.onUnsubscribe());
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    };
    a.s(["Subscribable", () => b]);
  },
  99745,
  (a) => {
    "use strict";
    var b = a.i(33791),
      c = a.i(42871),
      d = new (class extends b.Subscribable {
        #i;
        #c;
        #j;
        constructor() {
          (super(),
            (this.#j = (a) => {
              if (!c.isServer && window.addEventListener) {
                let b = () => a();
                return (
                  window.addEventListener("visibilitychange", b, !1),
                  () => {
                    window.removeEventListener("visibilitychange", b);
                  }
                );
              }
            }));
        }
        onSubscribe() {
          this.#c || this.setEventListener(this.#j);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#c?.(), (this.#c = void 0));
        }
        setEventListener(a) {
          ((this.#j = a),
            this.#c?.(),
            (this.#c = a((a) => {
              "boolean" == typeof a ? this.setFocused(a) : this.onFocus();
            })));
        }
        setFocused(a) {
          this.#i !== a && ((this.#i = a), this.onFocus());
        }
        onFocus() {
          let a = this.isFocused();
          this.listeners.forEach((b) => {
            b(a);
          });
        }
        isFocused() {
          return "boolean" == typeof this.#i
            ? this.#i
            : globalThis.document?.visibilityState !== "hidden";
        }
      })();
    a.s(["focusManager", () => d]);
  },
  21778,
  12552,
  79715,
  (a) => {
    "use strict";
    var b = a.i(99745),
      c = a.i(33791),
      d = a.i(42871),
      e = new (class extends c.Subscribable {
        #k = !0;
        #c;
        #j;
        constructor() {
          (super(),
            (this.#j = (a) => {
              if (!d.isServer && window.addEventListener) {
                let b = () => a(!0),
                  c = () => a(!1);
                return (
                  window.addEventListener("online", b, !1),
                  window.addEventListener("offline", c, !1),
                  () => {
                    (window.removeEventListener("online", b),
                      window.removeEventListener("offline", c));
                  }
                );
              }
            }));
        }
        onSubscribe() {
          this.#c || this.setEventListener(this.#j);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#c?.(), (this.#c = void 0));
        }
        setEventListener(a) {
          ((this.#j = a), this.#c?.(), (this.#c = a(this.setOnline.bind(this))));
        }
        setOnline(a) {
          this.#k !== a &&
            ((this.#k = a),
            this.listeners.forEach((b) => {
              b(a);
            }));
        }
        isOnline() {
          return this.#k;
        }
      })();
    function f() {
      let a,
        b,
        c = new Promise((c, d) => {
          ((a = c), (b = d));
        });
      function d(a) {
        (Object.assign(c, a), delete c.resolve, delete c.reject);
      }
      return (
        (c.status = "pending"),
        c.catch(() => {}),
        (c.resolve = (b) => {
          (d({ status: "fulfilled", value: b }), a(b));
        }),
        (c.reject = (a) => {
          (d({ status: "rejected", reason: a }), b(a));
        }),
        c
      );
    }
    function g(a) {
      return Math.min(1e3 * 2 ** a, 3e4);
    }
    function h(a) {
      return (a ?? "online") !== "online" || e.isOnline();
    }
    (a.s(["onlineManager", () => e], 12552), a.s(["pendingThenable", () => f], 79715));
    var i = class extends Error {
      constructor(a) {
        (super("CancelledError"), (this.revert = a?.revert), (this.silent = a?.silent));
      }
    };
    function j(a) {
      let c,
        j = !1,
        k = 0,
        l = f(),
        m = () =>
          b.focusManager.isFocused() && ("always" === a.networkMode || e.isOnline()) && a.canRun(),
        n = () => h(a.networkMode) && a.canRun(),
        o = (a) => {
          "pending" === l.status && (c?.(), l.resolve(a));
        },
        p = (a) => {
          "pending" === l.status && (c?.(), l.reject(a));
        },
        q = () =>
          new Promise((b) => {
            ((c = (a) => {
              ("pending" !== l.status || m()) && b(a);
            }),
              a.onPause?.());
          }).then(() => {
            ((c = void 0), "pending" === l.status && a.onContinue?.());
          }),
        r = () => {
          let b;
          if ("pending" !== l.status) return;
          let c = 0 === k ? a.initialPromise : void 0;
          try {
            b = c ?? a.fn();
          } catch (a) {
            b = Promise.reject(a);
          }
          Promise.resolve(b)
            .then(o)
            .catch((b) => {
              if ("pending" !== l.status) return;
              let c = a.retry ?? 3 * !d.isServer,
                e = a.retryDelay ?? g,
                f = "function" == typeof e ? e(k, b) : e,
                h =
                  !0 === c ||
                  ("number" == typeof c && k < c) ||
                  ("function" == typeof c && c(k, b));
              j || !h
                ? p(b)
                : (k++,
                  a.onFail?.(k, b),
                  (0, d.sleep)(f)
                    .then(() => (m() ? void 0 : q()))
                    .then(() => {
                      j ? p(b) : r();
                    }));
            });
        };
      return {
        promise: l,
        status: () => l.status,
        cancel: (b) => {
          if ("pending" === l.status) {
            let c = new i(b);
            (p(c), a.onCancel?.(c));
          }
        },
        continue: () => (c?.(), l),
        cancelRetry: () => {
          j = !0;
        },
        continueRetry: () => {
          j = !1;
        },
        canStart: n,
        start: () => (n() ? r() : q().then(r), l),
      };
    }
    a.s(["CancelledError", () => i, "canFetch", () => h, "createRetryer", () => j], 21778);
  },
  85659,
  (a) => {
    "use strict";
    var b = a.i(8361),
      c = a.i(42871),
      d = class {
        #l;
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          (this.clearGcTimeout(),
            (0, c.isValidTimeout)(this.gcTime) &&
              (this.#l = b.timeoutManager.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)));
        }
        updateGcTime(a) {
          this.gcTime = Math.max(this.gcTime || 0, a ?? (c.isServer ? 1 / 0 : 3e5));
        }
        clearGcTimeout() {
          this.#l && (b.timeoutManager.clearTimeout(this.#l), (this.#l = void 0));
        }
      };
    a.s(["Removable", () => d]);
  },
  76644,
  (a) => {
    "use strict";
    var b = a.i(42871),
      c = a.i(18544),
      d = a.i(21778),
      e = a.i(85659),
      f = class extends e.Removable {
        #m;
        #n;
        #o;
        #p;
        #q;
        #r;
        #s;
        constructor(a) {
          (super(),
            (this.#s = !1),
            (this.#r = a.defaultOptions),
            this.setOptions(a.options),
            (this.observers = []),
            (this.#p = a.client),
            (this.#o = this.#p.getQueryCache()),
            (this.queryKey = a.queryKey),
            (this.queryHash = a.queryHash),
            (this.#m = i(this.options)),
            (this.state = a.state ?? this.#m),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          return this.#q?.promise;
        }
        setOptions(a) {
          if (
            ((this.options = { ...this.#r, ...a }),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let a = i(this.options);
            void 0 !== a.data && (this.setState(h(a.data, a.dataUpdatedAt)), (this.#m = a));
          }
        }
        optionalRemove() {
          this.observers.length || "idle" !== this.state.fetchStatus || this.#o.remove(this);
        }
        setData(a, c) {
          let d = (0, b.replaceData)(this.state.data, a, this.options);
          return (
            this.#t({ data: d, type: "success", dataUpdatedAt: c?.updatedAt, manual: c?.manual }), d
          );
        }
        setState(a, b) {
          this.#t({ type: "setState", state: a, setStateOptions: b });
        }
        cancel(a) {
          let c = this.#q?.promise;
          return (this.#q?.cancel(a), c ? c.then(b.noop).catch(b.noop) : Promise.resolve());
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: !0 }));
        }
        reset() {
          (this.destroy(), this.setState(this.#m));
        }
        isActive() {
          return this.observers.some((a) => !1 !== (0, b.resolveEnabled)(a.options.enabled, this));
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === b.skipToken ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (a) => "static" === (0, b.resolveStaleTime)(a.options.staleTime, this),
            )
          );
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((a) => a.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(a = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== a &&
              (!!this.state.isInvalidated || !(0, b.timeUntilStale)(this.state.dataUpdatedAt, a)))
          );
        }
        onFocus() {
          let a = this.observers.find((a) => a.shouldFetchOnWindowFocus());
          (a?.refetch({ cancelRefetch: !1 }), this.#q?.continue());
        }
        onOnline() {
          let a = this.observers.find((a) => a.shouldFetchOnReconnect());
          (a?.refetch({ cancelRefetch: !1 }), this.#q?.continue());
        }
        addObserver(a) {
          this.observers.includes(a) ||
            (this.observers.push(a),
            this.clearGcTimeout(),
            this.#o.notify({ type: "observerAdded", query: this, observer: a }));
        }
        removeObserver(a) {
          this.observers.includes(a) &&
            ((this.observers = this.observers.filter((b) => b !== a)),
            this.observers.length ||
              (this.#q && (this.#s ? this.#q.cancel({ revert: !0 }) : this.#q.cancelRetry()),
              this.scheduleGc()),
            this.#o.notify({ type: "observerRemoved", query: this, observer: a }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.#t({ type: "invalidate" });
        }
        async fetch(a, c) {
          let e;
          if ("idle" !== this.state.fetchStatus && this.#q?.status() !== "rejected") {
            if (void 0 !== this.state.data && c?.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.#q) return (this.#q.continueRetry(), this.#q.promise);
          }
          if ((a && this.setOptions(a), !this.options.queryFn)) {
            let a = this.observers.find((a) => a.options.queryFn);
            a && this.setOptions(a.options);
          }
          let f = new AbortController(),
            g = (a) => {
              Object.defineProperty(a, "signal", {
                enumerable: !0,
                get: () => ((this.#s = !0), f.signal),
              });
            },
            h = () => {
              let a,
                d = (0, b.ensureQueryFn)(this.options, c),
                e = (g((a = { client: this.#p, queryKey: this.queryKey, meta: this.meta })), a);
              return ((this.#s = !1), this.options.persister)
                ? this.options.persister(d, e, this)
                : d(e);
            },
            i =
              (g(
                (e = {
                  fetchOptions: c,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#p,
                  state: this.state,
                  fetchFn: h,
                }),
              ),
              e);
          (this.options.behavior?.onFetch(i, this),
            (this.#n = this.state),
            ("idle" === this.state.fetchStatus || this.state.fetchMeta !== i.fetchOptions?.meta) &&
              this.#t({ type: "fetch", meta: i.fetchOptions?.meta }),
            (this.#q = (0, d.createRetryer)({
              initialPromise: c?.initialPromise,
              fn: i.fetchFn,
              onCancel: (a) => {
                (a instanceof d.CancelledError &&
                  a.revert &&
                  this.setState({ ...this.#n, fetchStatus: "idle" }),
                  f.abort());
              },
              onFail: (a, b) => {
                this.#t({ type: "failed", failureCount: a, error: b });
              },
              onPause: () => {
                this.#t({ type: "pause" });
              },
              onContinue: () => {
                this.#t({ type: "continue" });
              },
              retry: i.options.retry,
              retryDelay: i.options.retryDelay,
              networkMode: i.options.networkMode,
              canRun: () => !0,
            })));
          try {
            let a = await this.#q.start();
            if (void 0 === a) throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(a),
              this.#o.config.onSuccess?.(a, this),
              this.#o.config.onSettled?.(a, this.state.error, this),
              a
            );
          } catch (a) {
            if (a instanceof d.CancelledError) {
              if (a.silent) return this.#q.promise;
              else if (a.revert) {
                if (void 0 === this.state.data) throw a;
                return this.state.data;
              }
            }
            throw (
              this.#t({ type: "error", error: a }),
              this.#o.config.onError?.(a, this),
              this.#o.config.onSettled?.(this.state.data, a, this),
              a
            );
          } finally {
            this.scheduleGc();
          }
        }
        #t(a) {
          let b = (b) => {
            switch (a.type) {
              case "failed":
                return { ...b, fetchFailureCount: a.failureCount, fetchFailureReason: a.error };
              case "pause":
                return { ...b, fetchStatus: "paused" };
              case "continue":
                return { ...b, fetchStatus: "fetching" };
              case "fetch":
                return { ...b, ...g(b.data, this.options), fetchMeta: a.meta ?? null };
              case "success":
                let c = {
                  ...b,
                  ...h(a.data, a.dataUpdatedAt),
                  dataUpdateCount: b.dataUpdateCount + 1,
                  ...(!a.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
                return ((this.#n = a.manual ? c : void 0), c);
              case "error":
                let d = a.error;
                return {
                  ...b,
                  error: d,
                  errorUpdateCount: b.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: b.fetchFailureCount + 1,
                  fetchFailureReason: d,
                  fetchStatus: "idle",
                  status: "error",
                  isInvalidated: !0,
                };
              case "invalidate":
                return { ...b, isInvalidated: !0 };
              case "setState":
                return { ...b, ...a.state };
            }
          };
          ((this.state = b(this.state)),
            c.notifyManager.batch(() => {
              (this.observers.forEach((a) => {
                a.onQueryUpdate();
              }),
                this.#o.notify({ query: this, type: "updated", action: a }));
            }));
        }
      };
    function g(a, b) {
      return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, d.canFetch)(b.networkMode) ? "fetching" : "paused",
        ...(void 0 === a && { error: null, status: "pending" }),
      };
    }
    function h(a, b) {
      return {
        data: a,
        dataUpdatedAt: b ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success",
      };
    }
    function i(a) {
      let b = "function" == typeof a.initialData ? a.initialData() : a.initialData,
        c = void 0 !== b,
        d = c
          ? "function" == typeof a.initialDataUpdatedAt
            ? a.initialDataUpdatedAt()
            : a.initialDataUpdatedAt
          : 0;
      return {
        data: b,
        dataUpdateCount: 0,
        dataUpdatedAt: c ? (d ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: c ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    a.s(["Query", () => f, "fetchState", () => g]);
  },
  19179,
  (a) => {
    "use strict";
    var b = a.i(42871),
      c = a.i(76644),
      d = a.i(18544),
      e = a.i(33791),
      f = class extends e.Subscribable {
        constructor(a = {}) {
          (super(), (this.config = a), (this.#u = new Map()));
        }
        #u;
        build(a, d, e) {
          let f = d.queryKey,
            g = d.queryHash ?? (0, b.hashQueryKeyByOptions)(f, d),
            h = this.get(g);
          return (
            h ||
              ((h = new c.Query({
                client: a,
                queryKey: f,
                queryHash: g,
                options: a.defaultQueryOptions(d),
                state: e,
                defaultOptions: a.getQueryDefaults(f),
              })),
              this.add(h)),
            h
          );
        }
        add(a) {
          this.#u.has(a.queryHash) ||
            (this.#u.set(a.queryHash, a), this.notify({ type: "added", query: a }));
        }
        remove(a) {
          let b = this.#u.get(a.queryHash);
          b &&
            (a.destroy(),
            b === a && this.#u.delete(a.queryHash),
            this.notify({ type: "removed", query: a }));
        }
        clear() {
          d.notifyManager.batch(() => {
            this.getAll().forEach((a) => {
              this.remove(a);
            });
          });
        }
        get(a) {
          return this.#u.get(a);
        }
        getAll() {
          return [...this.#u.values()];
        }
        find(a) {
          let c = { exact: !0, ...a };
          return this.getAll().find((a) => (0, b.matchQuery)(c, a));
        }
        findAll(a = {}) {
          let c = this.getAll();
          return Object.keys(a).length > 0 ? c.filter((c) => (0, b.matchQuery)(a, c)) : c;
        }
        notify(a) {
          d.notifyManager.batch(() => {
            this.listeners.forEach((b) => {
              b(a);
            });
          });
        }
        onFocus() {
          d.notifyManager.batch(() => {
            this.getAll().forEach((a) => {
              a.onFocus();
            });
          });
        }
        onOnline() {
          d.notifyManager.batch(() => {
            this.getAll().forEach((a) => {
              a.onOnline();
            });
          });
        }
      };
    a.s(["QueryCache", () => f]);
  },
  12794,
  (a) => {
    "use strict";
    var b = a.i(18544),
      c = a.i(85659),
      d = a.i(21778),
      e = class extends c.Removable {
        #p;
        #v;
        #w;
        #q;
        constructor(a) {
          (super(),
            (this.#p = a.client),
            (this.mutationId = a.mutationId),
            (this.#w = a.mutationCache),
            (this.#v = []),
            (this.state = a.state || f()),
            this.setOptions(a.options),
            this.scheduleGc());
        }
        setOptions(a) {
          ((this.options = a), this.updateGcTime(this.options.gcTime));
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(a) {
          this.#v.includes(a) ||
            (this.#v.push(a),
            this.clearGcTimeout(),
            this.#w.notify({ type: "observerAdded", mutation: this, observer: a }));
        }
        removeObserver(a) {
          ((this.#v = this.#v.filter((b) => b !== a)),
            this.scheduleGc(),
            this.#w.notify({ type: "observerRemoved", mutation: this, observer: a }));
        }
        optionalRemove() {
          this.#v.length ||
            ("pending" === this.state.status ? this.scheduleGc() : this.#w.remove(this));
        }
        continue() {
          return this.#q?.continue() ?? this.execute(this.state.variables);
        }
        async execute(a) {
          let b = () => {
              this.#t({ type: "continue" });
            },
            c = { client: this.#p, meta: this.options.meta, mutationKey: this.options.mutationKey };
          this.#q = (0, d.createRetryer)({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(a, c)
                : Promise.reject(Error("No mutationFn found")),
            onFail: (a, b) => {
              this.#t({ type: "failed", failureCount: a, error: b });
            },
            onPause: () => {
              this.#t({ type: "pause" });
            },
            onContinue: b,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#w.canRun(this),
          });
          let e = "pending" === this.state.status,
            f = !this.#q.canStart();
          try {
            if (e) b();
            else {
              (this.#t({ type: "pending", variables: a, isPaused: f }),
                this.#w.config.onMutate && (await this.#w.config.onMutate(a, this, c)));
              let b = await this.options.onMutate?.(a, c);
              b !== this.state.context &&
                this.#t({ type: "pending", context: b, variables: a, isPaused: f });
            }
            let d = await this.#q.start();
            return (
              await this.#w.config.onSuccess?.(d, a, this.state.context, this, c),
              await this.options.onSuccess?.(d, a, this.state.context, c),
              await this.#w.config.onSettled?.(
                d,
                null,
                this.state.variables,
                this.state.context,
                this,
                c,
              ),
              await this.options.onSettled?.(d, null, a, this.state.context, c),
              this.#t({ type: "success", data: d }),
              d
            );
          } catch (b) {
            try {
              await this.#w.config.onError?.(b, a, this.state.context, this, c);
            } catch (a) {
              Promise.reject(a);
            }
            try {
              await this.options.onError?.(b, a, this.state.context, c);
            } catch (a) {
              Promise.reject(a);
            }
            try {
              await this.#w.config.onSettled?.(
                void 0,
                b,
                this.state.variables,
                this.state.context,
                this,
                c,
              );
            } catch (a) {
              Promise.reject(a);
            }
            try {
              await this.options.onSettled?.(void 0, b, a, this.state.context, c);
            } catch (a) {
              Promise.reject(a);
            }
            throw (this.#t({ type: "error", error: b }), b);
          } finally {
            this.#w.runNext(this);
          }
        }
        #t(a) {
          ((this.state = ((b) => {
            switch (a.type) {
              case "failed":
                return { ...b, failureCount: a.failureCount, failureReason: a.error };
              case "pause":
                return { ...b, isPaused: !0 };
              case "continue":
                return { ...b, isPaused: !1 };
              case "pending":
                return {
                  ...b,
                  context: a.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: a.isPaused,
                  status: "pending",
                  variables: a.variables,
                  submittedAt: Date.now(),
                };
              case "success":
                return {
                  ...b,
                  data: a.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...b,
                  data: void 0,
                  error: a.error,
                  failureCount: b.failureCount + 1,
                  failureReason: a.error,
                  isPaused: !1,
                  status: "error",
                };
            }
          })(this.state)),
            b.notifyManager.batch(() => {
              (this.#v.forEach((b) => {
                b.onMutationUpdate(a);
              }),
                this.#w.notify({ mutation: this, type: "updated", action: a }));
            }));
        }
      };
    function f() {
      return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
      };
    }
    a.s(["Mutation", () => e, "getDefaultState", () => f]);
  },
  16570,
  (a) => {
    "use strict";
    let b;
    var c = a.i(4854),
      d = a.i(478),
      e = a.i(14910),
      f = a.i(19179),
      g = a.i(42871),
      h = a.i(18544),
      i = a.i(12794),
      j = a.i(33791),
      k = class extends j.Subscribable {
        constructor(a = {}) {
          (super(), (this.config = a), (this.#x = new Set()), (this.#y = new Map()), (this.#z = 0));
        }
        #x;
        #y;
        #z;
        build(a, b, c) {
          let d = new i.Mutation({
            client: a,
            mutationCache: this,
            mutationId: ++this.#z,
            options: a.defaultMutationOptions(b),
            state: c,
          });
          return (this.add(d), d);
        }
        add(a) {
          this.#x.add(a);
          let b = l(a);
          if ("string" == typeof b) {
            let c = this.#y.get(b);
            c ? c.push(a) : this.#y.set(b, [a]);
          }
          this.notify({ type: "added", mutation: a });
        }
        remove(a) {
          if (this.#x.delete(a)) {
            let b = l(a);
            if ("string" == typeof b) {
              let c = this.#y.get(b);
              if (c)
                if (c.length > 1) {
                  let b = c.indexOf(a);
                  -1 !== b && c.splice(b, 1);
                } else c[0] === a && this.#y.delete(b);
            }
          }
          this.notify({ type: "removed", mutation: a });
        }
        canRun(a) {
          let b = l(a);
          if ("string" != typeof b) return !0;
          {
            let c = this.#y.get(b),
              d = c?.find((a) => "pending" === a.state.status);
            return !d || d === a;
          }
        }
        runNext(a) {
          let b = l(a);
          if ("string" != typeof b) return Promise.resolve();
          {
            let c = this.#y.get(b)?.find((b) => b !== a && b.state.isPaused);
            return c?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          h.notifyManager.batch(() => {
            (this.#x.forEach((a) => {
              this.notify({ type: "removed", mutation: a });
            }),
              this.#x.clear(),
              this.#y.clear());
          });
        }
        getAll() {
          return Array.from(this.#x);
        }
        find(a) {
          let b = { exact: !0, ...a };
          return this.getAll().find((a) => (0, g.matchMutation)(b, a));
        }
        findAll(a = {}) {
          return this.getAll().filter((b) => (0, g.matchMutation)(a, b));
        }
        notify(a) {
          h.notifyManager.batch(() => {
            this.listeners.forEach((b) => {
              b(a);
            });
          });
        }
        resumePausedMutations() {
          let a = this.getAll().filter((a) => a.state.isPaused);
          return h.notifyManager.batch(() => Promise.all(a.map((a) => a.continue().catch(g.noop))));
        }
      };
    function l(a) {
      return a.options.scope?.id;
    }
    var m = a.i(99745),
      n = a.i(12552);
    function o(a) {
      return {
        onFetch: (b, c) => {
          let d = b.options,
            e = b.fetchOptions?.meta?.fetchMore?.direction,
            f = b.state.data?.pages || [],
            h = b.state.data?.pageParams || [],
            i = { pages: [], pageParams: [] },
            j = 0,
            k = async () => {
              let c = !1,
                k = (0, g.ensureQueryFn)(b.options, b.fetchOptions),
                l = async (a, d, e) => {
                  let f;
                  if (c) return Promise.reject();
                  if (null == d && a.pages.length) return Promise.resolve(a);
                  let h =
                      ((f = {
                        client: b.client,
                        queryKey: b.queryKey,
                        pageParam: d,
                        direction: e ? "backward" : "forward",
                        meta: b.options.meta,
                      }),
                      (0, g.addConsumeAwareSignal)(
                        f,
                        () => b.signal,
                        () => (c = !0),
                      ),
                      f),
                    i = await k(h),
                    { maxPages: j } = b.options,
                    l = e ? g.addToStart : g.addToEnd;
                  return { pages: l(a.pages, i, j), pageParams: l(a.pageParams, d, j) };
                };
              if (e && f.length) {
                let a = "backward" === e,
                  b = { pages: f, pageParams: h },
                  c = (
                    a
                      ? function (a, { pages: b, pageParams: c }) {
                          return b.length > 0 ? a.getPreviousPageParam?.(b[0], b, c[0], c) : void 0;
                        }
                      : p
                  )(d, b);
                i = await l(b, c, a);
              } else {
                let b = a ?? f.length;
                do {
                  let a = 0 === j ? (h[0] ?? d.initialPageParam) : p(d, i);
                  if (j > 0 && null == a) break;
                  ((i = await l(i, a)), j++);
                } while (j < b);
              }
              return i;
            };
          b.options.persister
            ? (b.fetchFn = () =>
                b.options.persister?.(
                  k,
                  {
                    client: b.client,
                    queryKey: b.queryKey,
                    meta: b.options.meta,
                    signal: b.signal,
                  },
                  c,
                ))
            : (b.fetchFn = k);
        },
      };
    }
    function p(a, { pages: b, pageParams: c }) {
      let d = b.length - 1;
      return b.length > 0 ? a.getNextPageParam(b[d], b, c[d], c) : void 0;
    }
    var q = class {
        #A;
        #w;
        #r;
        #B;
        #C;
        #D;
        #E;
        #F;
        constructor(a = {}) {
          ((this.#A = a.queryCache || new f.QueryCache()),
            (this.#w = a.mutationCache || new k()),
            (this.#r = a.defaultOptions || {}),
            (this.#B = new Map()),
            (this.#C = new Map()),
            (this.#D = 0));
        }
        mount() {
          (this.#D++,
            1 === this.#D &&
              ((this.#E = m.focusManager.subscribe(async (a) => {
                a && (await this.resumePausedMutations(), this.#A.onFocus());
              })),
              (this.#F = n.onlineManager.subscribe(async (a) => {
                a && (await this.resumePausedMutations(), this.#A.onOnline());
              }))));
        }
        unmount() {
          (this.#D--,
            0 === this.#D && (this.#E?.(), (this.#E = void 0), this.#F?.(), (this.#F = void 0)));
        }
        isFetching(a) {
          return this.#A.findAll({ ...a, fetchStatus: "fetching" }).length;
        }
        isMutating(a) {
          return this.#w.findAll({ ...a, status: "pending" }).length;
        }
        getQueryData(a) {
          let b = this.defaultQueryOptions({ queryKey: a });
          return this.#A.get(b.queryHash)?.state.data;
        }
        ensureQueryData(a) {
          let b = this.defaultQueryOptions(a),
            c = this.#A.build(this, b),
            d = c.state.data;
          return void 0 === d
            ? this.fetchQuery(a)
            : (a.revalidateIfStale &&
                c.isStaleByTime((0, g.resolveStaleTime)(b.staleTime, c)) &&
                this.prefetchQuery(b),
              Promise.resolve(d));
        }
        getQueriesData(a) {
          return this.#A.findAll(a).map(({ queryKey: a, state: b }) => [a, b.data]);
        }
        setQueryData(a, b, c) {
          let d = this.defaultQueryOptions({ queryKey: a }),
            e = this.#A.get(d.queryHash),
            f = e?.state.data,
            h = (0, g.functionalUpdate)(b, f);
          if (void 0 !== h) return this.#A.build(this, d).setData(h, { ...c, manual: !0 });
        }
        setQueriesData(a, b, c) {
          return h.notifyManager.batch(() =>
            this.#A.findAll(a).map(({ queryKey: a }) => [a, this.setQueryData(a, b, c)]),
          );
        }
        getQueryState(a) {
          let b = this.defaultQueryOptions({ queryKey: a });
          return this.#A.get(b.queryHash)?.state;
        }
        removeQueries(a) {
          let b = this.#A;
          h.notifyManager.batch(() => {
            b.findAll(a).forEach((a) => {
              b.remove(a);
            });
          });
        }
        resetQueries(a, b) {
          let c = this.#A;
          return h.notifyManager.batch(
            () => (
              c.findAll(a).forEach((a) => {
                a.reset();
              }),
              this.refetchQueries({ type: "active", ...a }, b)
            ),
          );
        }
        cancelQueries(a, b = {}) {
          let c = { revert: !0, ...b };
          return Promise.all(
            h.notifyManager.batch(() => this.#A.findAll(a).map((a) => a.cancel(c))),
          )
            .then(g.noop)
            .catch(g.noop);
        }
        invalidateQueries(a, b = {}) {
          return h.notifyManager.batch(() =>
            (this.#A.findAll(a).forEach((a) => {
              a.invalidate();
            }),
            a?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries({ ...a, type: a?.refetchType ?? a?.type ?? "active" }, b),
          );
        }
        refetchQueries(a, b = {}) {
          let c = { ...b, cancelRefetch: b.cancelRefetch ?? !0 };
          return Promise.all(
            h.notifyManager.batch(() =>
              this.#A
                .findAll(a)
                .filter((a) => !a.isDisabled() && !a.isStatic())
                .map((a) => {
                  let b = a.fetch(void 0, c);
                  return (
                    c.throwOnError || (b = b.catch(g.noop)),
                    "paused" === a.state.fetchStatus ? Promise.resolve() : b
                  );
                }),
            ),
          ).then(g.noop);
        }
        fetchQuery(a) {
          let b = this.defaultQueryOptions(a);
          void 0 === b.retry && (b.retry = !1);
          let c = this.#A.build(this, b);
          return c.isStaleByTime((0, g.resolveStaleTime)(b.staleTime, c))
            ? c.fetch(b)
            : Promise.resolve(c.state.data);
        }
        prefetchQuery(a) {
          return this.fetchQuery(a).then(g.noop).catch(g.noop);
        }
        fetchInfiniteQuery(a) {
          return ((a.behavior = o(a.pages)), this.fetchQuery(a));
        }
        prefetchInfiniteQuery(a) {
          return this.fetchInfiniteQuery(a).then(g.noop).catch(g.noop);
        }
        ensureInfiniteQueryData(a) {
          return ((a.behavior = o(a.pages)), this.ensureQueryData(a));
        }
        resumePausedMutations() {
          return n.onlineManager.isOnline() ? this.#w.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#A;
        }
        getMutationCache() {
          return this.#w;
        }
        getDefaultOptions() {
          return this.#r;
        }
        setDefaultOptions(a) {
          this.#r = a;
        }
        setQueryDefaults(a, b) {
          this.#B.set((0, g.hashKey)(a), { queryKey: a, defaultOptions: b });
        }
        getQueryDefaults(a) {
          let b = [...this.#B.values()],
            c = {};
          return (
            b.forEach((b) => {
              (0, g.partialMatchKey)(a, b.queryKey) && Object.assign(c, b.defaultOptions);
            }),
            c
          );
        }
        setMutationDefaults(a, b) {
          this.#C.set((0, g.hashKey)(a), { mutationKey: a, defaultOptions: b });
        }
        getMutationDefaults(a) {
          let b = [...this.#C.values()],
            c = {};
          return (
            b.forEach((b) => {
              (0, g.partialMatchKey)(a, b.mutationKey) && Object.assign(c, b.defaultOptions);
            }),
            c
          );
        }
        defaultQueryOptions(a) {
          if (a._defaulted) return a;
          let b = {
            ...this.#r.queries,
            ...this.getQueryDefaults(a.queryKey),
            ...a,
            _defaulted: !0,
          };
          return (
            b.queryHash || (b.queryHash = (0, g.hashQueryKeyByOptions)(b.queryKey, b)),
            void 0 === b.refetchOnReconnect && (b.refetchOnReconnect = "always" !== b.networkMode),
            void 0 === b.throwOnError && (b.throwOnError = !!b.suspense),
            !b.networkMode && b.persister && (b.networkMode = "offlineFirst"),
            b.queryFn === g.skipToken && (b.enabled = !1),
            b
          );
        }
        defaultMutationOptions(a) {
          return a?._defaulted
            ? a
            : {
                ...this.#r.mutations,
                ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
                ...a,
                _defaulted: !0,
              };
        }
        clear() {
          (this.#A.clear(), this.#w.clear());
        }
      },
      r = a.i(23292);
    let s = new q({
        queryCache: new f.QueryCache({
          onError: (a, b) => {
            r.toast.error(`Error: ${a.message}`, {
              action: {
                label: "retry",
                onClick: () => {
                  null != b && "function" == typeof b.invalidate && b.invalidate();
                },
              },
            });
          },
        }),
      }),
      t = new d.RPCLink({
        url:
          ((b =
            process.env.NEXT_PUBLIC_APP_URL ??
            (process.env.VERCEL_URL
              ? `https://${process.env.VERCEL_URL}`
              : "http://localhost:3001")),
          `${b}/api/rpc`),
        fetch: (a, b) => fetch(a, { ...b, credentials: "include" }),
        headers: async () => {
          let { headers: b } = await a.A(98103);
          return Object.fromEntries(await b());
        },
      }),
      u = (0, c.createORPCClient)(t);
    ((0, e.createTanstackQueryUtils)(u), a.s(["client", 0, u, "queryClient", 0, s], 16570));
  },
];

//# sourceMappingURL=_66c373ba._.js.map
