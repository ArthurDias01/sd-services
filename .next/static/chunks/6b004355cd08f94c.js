(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  23426,
  (e) => {
    "use strict";
    let t = /^https:\/\/[a-zA-Z0-9.-]+\.r2\.dev(\/|$)/;
    function r(e) {
      return !e ||
        e.startsWith("/") ||
        !(function (e) {
          if (e.startsWith("/")) return !0;
          try {
            return (new URL(e), !0);
          } catch {
            return !1;
          }
        })(e)
        ? e
        : t.test(e)
          ? `/api/image?url=${encodeURIComponent(e)}`
          : e;
    }
    e.s(["proxyImageUrlIfNeeded", () => r]);
  },
  66027,
  (e) => {
    "use strict";
    let t;
    var r = e.i(75555),
      s = e.i(40143),
      i = e.i(86491),
      a = e.i(15823),
      n = e.i(93803),
      o = e.i(19273),
      l = e.i(80166),
      c = class extends a.Subscribable {
        constructor(e, t) {
          (super(),
            (this.options = t),
            (this.#e = e),
            (this.#t = null),
            (this.#r = (0, n.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(t));
        }
        #e;
        #s = void 0;
        #i = void 0;
        #a = void 0;
        #n;
        #o;
        #r;
        #t;
        #l;
        #c;
        #u;
        #h;
        #d;
        #p;
        #f = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#s.addObserver(this),
            u(this.#s, this.options) ? this.#m() : this.updateResult(),
            this.#b());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return h(this.#s, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return h(this.#s, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          ((this.listeners = new Set()), this.#y(), this.#v(), this.#s.removeObserver(this));
        }
        setOptions(e) {
          let t = this.options,
            r = this.#s;
          if (
            ((this.options = this.#e.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled &&
              "function" != typeof this.options.enabled &&
              "boolean" != typeof (0, o.resolveEnabled)(this.options.enabled, this.#s))
          )
            throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
          (this.#g(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, o.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && d(this.#s, r, this.options, t) && this.#m(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, o.resolveEnabled)(t.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#x());
          let i = this.#R();
          s &&
            (this.#s !== r ||
              (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, o.resolveEnabled)(t.enabled, this.#s) ||
              i !== this.#p) &&
            this.#S(i);
        }
        getOptimisticResult(e) {
          var t, r;
          let s = this.#e.getQueryCache().build(this.#e, e),
            i = this.createResult(s, e);
          return (
            (t = this),
            (r = i),
            (0, o.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#a = i), (this.#o = this.options), (this.#n = this.#s.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#a;
        }
        trackResult(e, t) {
          return new Proxy(e, {
            get: (e, r) => (
              this.trackProp(r),
              t?.(r),
              "promise" === r &&
                (this.trackProp("data"),
                this.options.experimental_prefetchInRender ||
                  "pending" !== this.#r.status ||
                  this.#r.reject(
                    Error("experimental_prefetchInRender feature flag is not enabled"),
                  )),
              Reflect.get(e, r)
            ),
          });
        }
        trackProp(e) {
          this.#f.add(e);
        }
        getCurrentQuery() {
          return this.#s;
        }
        refetch({ ...e } = {}) {
          return this.fetch({ ...e });
        }
        fetchOptimistic(e) {
          let t = this.#e.defaultQueryOptions(e),
            r = this.#e.getQueryCache().build(this.#e, t);
          return r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          return this.#m({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#a),
          );
        }
        #m(e) {
          this.#g();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(o.noop)), t);
        }
        #x() {
          this.#y();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#a.isStale || !(0, o.isValidTimeout)(e)) return;
          let t = (0, o.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#h = l.timeoutManager.setTimeout(() => {
            this.#a.isStale || this.updateResult();
          }, t + 1);
        }
        #R() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #S(e) {
          (this.#v(),
            (this.#p = e),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = l.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#m();
              }, this.#p)));
        }
        #b() {
          (this.#x(), this.#S(this.#R()));
        }
        #y() {
          this.#h && (l.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #v() {
          this.#d && (l.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            a = this.options,
            l = this.#a,
            c = this.#n,
            h = this.#o,
            f = e !== s ? e.state : this.#i,
            { state: m } = e,
            b = { ...m },
            y = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && u(e, t),
              o = r && d(e, s, t, a);
            ((n || o) && (b = { ...b, ...(0, i.fetchState)(m.data, e.options) }),
              "isRestoring" === t._optimisticResults && (b.fetchStatus = "idle"));
          }
          let { error: v, errorUpdatedAt: g, status: x } = b;
          r = b.data;
          let R = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === x) {
            let e;
            (l?.isPlaceholderData && t.placeholderData === h?.placeholderData
              ? ((e = l.data), (R = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#u?.state.data, this.#u)
                    : t.placeholderData),
              void 0 !== e && ((x = "success"), (r = (0, o.replaceData)(l?.data, e, t)), (y = !0)));
          }
          if (t.select && void 0 !== r && !R)
            if (l && r === c?.data && t.select === this.#l) r = this.#c;
            else
              try {
                ((this.#l = t.select),
                  (r = t.select(r)),
                  (r = (0, o.replaceData)(l?.data, r, t)),
                  (this.#c = r),
                  (this.#t = null));
              } catch (e) {
                this.#t = e;
              }
          this.#t && ((v = this.#t), (r = this.#c), (g = Date.now()), (x = "error"));
          let S = "fetching" === b.fetchStatus,
            w = "pending" === x,
            j = "error" === x,
            C = w && S,
            O = void 0 !== r,
            Q = {
              status: x,
              fetchStatus: b.fetchStatus,
              isPending: w,
              isSuccess: "success" === x,
              isError: j,
              isInitialLoading: C,
              isLoading: C,
              data: r,
              dataUpdatedAt: b.dataUpdatedAt,
              error: v,
              errorUpdatedAt: g,
              failureCount: b.fetchFailureCount,
              failureReason: b.fetchFailureReason,
              errorUpdateCount: b.errorUpdateCount,
              isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
              isFetchedAfterMount:
                b.dataUpdateCount > f.dataUpdateCount || b.errorUpdateCount > f.errorUpdateCount,
              isFetching: S,
              isRefetching: S && !w,
              isLoadingError: j && !O,
              isPaused: "paused" === b.fetchStatus,
              isPlaceholderData: y,
              isRefetchError: j && O,
              isStale: p(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveEnabled)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== Q.data,
              r = "error" === Q.status && !t,
              i = (e) => {
                r ? e.reject(Q.error) : t && e.resolve(Q.data);
              },
              a = () => {
                i((this.#r = Q.promise = (0, n.pendingThenable)()));
              },
              o = this.#r;
            switch (o.status) {
              case "pending":
                e.queryHash === s.queryHash && i(o);
                break;
              case "fulfilled":
                (r || Q.data !== o.value) && a();
                break;
              case "rejected":
                (r && Q.error === o.reason) || a();
            }
          }
          return Q;
        }
        updateResult() {
          let e = this.#a,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#n = this.#s.state),
            (this.#o = this.options),
            void 0 !== this.#n.data && (this.#u = this.#s),
            (0, o.shallowEqualObjects)(t, e))
          )
            return;
          this.#a = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let s = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#a).some((t) => this.#a[t] !== e[t] && s.has(t))
            );
          };
          this.#w({ listeners: r() });
        }
        #g() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#s) return;
          let t = this.#s;
          ((this.#s = e),
            (this.#i = e.state),
            this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#b());
        }
        #w(e) {
          s.notifyManager.batch(() => {
            (e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#a);
              }),
              this.#e.getQueryCache().notify({ query: this.#s, type: "observerResultsUpdated" }));
          });
        }
      };
    function u(e, t) {
      return (
        (!1 !== (0, o.resolveEnabled)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
        (void 0 !== e.state.data && h(e, t, t.refetchOnMount))
      );
    }
    function h(e, t, r) {
      if (
        !1 !== (0, o.resolveEnabled)(t.enabled, e) &&
        "static" !== (0, o.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && p(e, t));
      }
      return !1;
    }
    function d(e, t, r, s) {
      return (
        (e !== t || !1 === (0, o.resolveEnabled)(s.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        p(e, r)
      );
    }
    function p(e, t) {
      return (
        !1 !== (0, o.resolveEnabled)(t.enabled, e) &&
        e.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.i(47167);
    var f = e.i(71645),
      m = e.i(12598);
    e.i(43476);
    var b = f.createContext(
        ((t = !1),
        {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        }),
      ),
      y = f.createContext(!1);
    y.Provider;
    var v = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function g(e, t) {
      return (function (e, t, r) {
        let i,
          a = f.useContext(y),
          n = f.useContext(b),
          l = (0, m.useQueryClient)(r),
          c = l.defaultQueryOptions(e);
        l.getDefaultOptions().queries?._experimental_beforeQuery?.(c);
        let u = l.getQueryCache().get(c.queryHash);
        if (((c._optimisticResults = a ? "isRestoring" : "optimistic"), c.suspense)) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = c.staleTime;
          ((c.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof c.gcTime && (c.gcTime = Math.max(c.gcTime, 1e3)));
        }
        ((i =
          u?.state.error && "function" == typeof c.throwOnError
            ? (0, o.shouldThrowError)(c.throwOnError, [u.state.error, u])
            : c.throwOnError),
          (c.suspense || c.experimental_prefetchInRender || i) &&
            !n.isReset() &&
            (c.retryOnMount = !1),
          f.useEffect(() => {
            n.clearReset();
          }, [n]));
        let h = !l.getQueryCache().get(c.queryHash),
          [d] = f.useState(() => new t(l, c)),
          p = d.getOptimisticResult(c),
          g = !a && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = g ? d.subscribe(s.notifyManager.batchCalls(e)) : o.noop;
                return (d.updateResult(), t);
              },
              [d, g],
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult(),
          ),
          f.useEffect(() => {
            d.setOptions(c);
          }, [c, d]),
          c?.suspense && p.isPending)
        )
          throw v(c, d, n);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) || (0, o.shouldThrowError)(r, [e.error, s])))({
            result: p,
            errorResetBoundary: n,
            throwOnError: c.throwOnError,
            query: u,
            suspense: c.suspense,
          })
        )
          throw p.error;
        if (
          (l.getDefaultOptions().queries?._experimental_afterQuery?.(c, p),
          c.experimental_prefetchInRender && !o.isServer && p.isLoading && p.isFetching && !a)
        ) {
          let e = h ? v(c, d, n) : u?.promise;
          e?.catch(o.noop).finally(() => {
            d.updateResult();
          });
        }
        return c.notifyOnChangeProps ? p : d.trackResult(p);
      })(e, c, t);
    }
    e.s(["useQuery", () => g], 66027);
  },
  54616,
  46063,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(14272),
      s = e.i(40143),
      i = e.i(15823),
      a = e.i(19273),
      n = class extends i.Subscribable {
        #e;
        #a = void 0;
        #j;
        #C;
        constructor(e, t) {
          (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#O());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
        }
        setOptions(e) {
          let t = this.options;
          ((this.options = this.#e.defaultMutationOptions(e)),
            (0, a.shallowEqualObjects)(this.options, t) ||
              this.#e
                .getMutationCache()
                .notify({ type: "observerOptionsUpdated", mutation: this.#j, observer: this }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, a.hashKey)(t.mutationKey) !== (0, a.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#j?.state.status === "pending" && this.#j.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#j?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#O(), this.#w(e));
        }
        getCurrentResult() {
          return this.#a;
        }
        reset() {
          (this.#j?.removeObserver(this), (this.#j = void 0), this.#O(), this.#w());
        }
        mutate(e, t) {
          return (
            (this.#C = t),
            this.#j?.removeObserver(this),
            (this.#j = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#j.addObserver(this),
            this.#j.execute(e)
          );
        }
        #O() {
          let e = this.#j?.state ?? (0, r.getDefaultState)();
          this.#a = {
            ...e,
            isPending: "pending" === e.status,
            isSuccess: "success" === e.status,
            isError: "error" === e.status,
            isIdle: "idle" === e.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #w(e) {
          s.notifyManager.batch(() => {
            if (this.#C && this.hasListeners()) {
              let t = this.#a.variables,
                r = this.#a.context,
                s = {
                  client: this.#e,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (e?.type === "success") {
                try {
                  this.#C.onSuccess?.(e.data, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#C.onSettled?.(e.data, null, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              } else if (e?.type === "error") {
                try {
                  this.#C.onError?.(e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#C.onSettled?.(void 0, e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              }
            }
            this.listeners.forEach((e) => {
              e(this.#a);
            });
          });
        }
      },
      o = e.i(12598);
    function l(e, r) {
      let i = (0, o.useQueryClient)(r),
        [l] = t.useState(() => new n(i, e));
      t.useEffect(() => {
        l.setOptions(e);
      }, [l, e]);
      let c = t.useSyncExternalStore(
          t.useCallback((e) => l.subscribe(s.notifyManager.batchCalls(e)), [l]),
          () => l.getCurrentResult(),
          () => l.getCurrentResult(),
        ),
        u = t.useCallback(
          (e, t) => {
            l.mutate(e, t).catch(a.noop);
          },
          [l],
        );
      if (c.error && (0, a.shouldThrowError)(l.options.throwOnError, [c.error])) throw c.error;
      return { ...c, mutate: u, mutateAsync: c.mutate };
    }
    e.s(["useMutation", () => l], 54616);
    var c = e.i(43476),
      u = e.i(46696),
      h = e.i(23426),
      d = e.i(75157);
    async function p(e) {
      let t = new FormData();
      for (let r of e) t.append("files", r);
      let r = await fetch(`${window.location.origin}/api/upload`, {
        method: "POST",
        body: t,
        credentials: "include",
      });
      if (!r.ok) throw Error((await r.json().catch(() => ({}))).error ?? "Upload failed");
      let s = await r.json();
      return s.urls ?? (s.url ? [s.url] : []);
    }
    function f({ value: e, onChange: r, multiple: s = !0, className: i, disabled: a = !1 }) {
      let n = (0, t.useRef)(null),
        [o, l] = (0, t.useState)(!1),
        [f, m] = (0, t.useState)(!1),
        [b, y] = (0, t.useState)(0),
        v = (0, t.useCallback)(
          async (t) => {
            let i = Array.from(t).filter((e) => e.type.startsWith("image/"));
            if (0 !== i.length) {
              if (!s && i.length > 1) return void u.toast.error("Only one image allowed here.");
              (m(!0), y(i.length));
              try {
                let t = await p(i);
                r(s ? [...e, ...t] : t);
              } catch (e) {
                u.toast.error(e instanceof Error ? e.message : "Upload failed");
              } finally {
                (m(!1), y(0), n.current && (n.current.value = ""));
              }
            }
          },
          [s, r, e],
        ),
        g = (0, t.useCallback)(
          (e) => {
            (e.preventDefault(), l(!1), a || f || v(e.dataTransfer.files));
          },
          [a, v, f],
        ),
        x = s || 0 === e.length;
      return (0, c.jsxs)("div", {
        className: (0, d.cn)("space-y-3", i),
        children: [
          e.length > 0 &&
            (0, c.jsxs)("div", {
              className: "grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5",
              children: [
                e.map((t) =>
                  (0, c.jsxs)(
                    "div",
                    {
                      className:
                        "group relative aspect-square overflow-hidden border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                      children: [
                        (0, c.jsx)("img", {
                          src: (0, h.proxyImageUrlIfNeeded)(t),
                          alt: "",
                          className: "size-full object-cover",
                        }),
                        (0, c.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            r(e.filter((e) => e !== t));
                          },
                          disabled: a || f,
                          "aria-label": "Remove image",
                          className:
                            "absolute right-1 top-1 flex size-5 items-center justify-center bg-black/70 text-white opacity-0 outline-none transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-white",
                          children: (0, c.jsx)("svg", {
                            width: "10",
                            height: "10",
                            viewBox: "0 0 10 10",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, c.jsx)("path", {
                              d: "M1 1l8 8M9 1L1 9",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                            }),
                          }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
                f &&
                  Array.from({ length: b }).map((e, t) =>
                    (0, c.jsx)(
                      "div",
                      {
                        className:
                          "aspect-square border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                        "aria-hidden": !0,
                        children: (0, c.jsx)("div", {
                          className: "size-full animate-pulse bg-[var(--p-tan)]/30",
                        }),
                      },
                      `uploading-${t}`,
                    ),
                  ),
              ],
            }),
          x &&
            (0, c.jsxs)("div", {
              role: "button",
              tabIndex: a ? -1 : 0,
              "aria-label": "Upload images — click or drag and drop",
              "aria-disabled": a || f,
              onDragOver: (e) => {
                (e.preventDefault(), l(!0));
              },
              onDragLeave: () => l(!1),
              onDrop: g,
              onClick: () => !a && !f && n.current?.click(),
              onKeyDown: (e) => {
                ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), a || f || n.current?.click());
              },
              className: (0, d.cn)(
                "flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed py-10 text-center outline-none transition-colors",
                o
                  ? "border-[var(--p-toffee)] bg-[var(--p-tan)]/10"
                  : "border-[var(--p-tan)] bg-[var(--p-white)] hover:border-[var(--p-toffee)] hover:bg-[var(--p-tan)]/5",
                (a || f) && "cursor-not-allowed opacity-50",
              ),
              children: [
                (0, c.jsxs)("svg", {
                  width: "28",
                  height: "28",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "text-[var(--p-toffee)]",
                  "aria-hidden": !0,
                  children: [
                    (0, c.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                    (0, c.jsx)("polyline", { points: "17 8 12 3 7 8" }),
                    (0, c.jsx)("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  children: [
                    (0, c.jsx)("p", {
                      className: "text-xs font-semibold text-[var(--p-deep-walnut)]",
                      children: f
                        ? `Uploading ${b} file${b > 1 ? "s" : ""}…`
                        : "Click to upload or drag & drop",
                    }),
                    (0, c.jsx)("p", {
                      className: "mt-0.5 text-[11px] text-[var(--p-coffee-bean)]/60",
                      children: s ? "PNG, JPG, WEBP — multiple allowed" : "PNG, JPG, WEBP",
                    }),
                  ],
                }),
              ],
            }),
          !s &&
            e.length > 0 &&
            (0, c.jsx)("button", {
              type: "button",
              disabled: a || f,
              onClick: () => n.current?.click(),
              className:
                "inline-flex h-8 items-center gap-1.5 border border-[var(--p-tan)] bg-transparent px-3 text-xs font-medium text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)] disabled:opacity-50",
              children: f ? "Uploading…" : "Replace image",
            }),
          (0, c.jsx)("input", {
            ref: n,
            type: "file",
            accept: "image/*",
            multiple: s,
            className: "hidden",
            "aria-hidden": !0,
            onChange: (e) => {
              e.target.files && v(e.target.files);
            },
          }),
        ],
      });
    }
    e.s(["ImageUploader", () => f], 46063);
  },
  34847,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      s = e.i(71645),
      i = e.i(54616),
      a = e.i(66027),
      n = e.i(46696),
      o = e.i(46063),
      l = e.i(23426),
      c = e.i(75157),
      u = e.i(26121);
    let h = "hero_image_url",
      d = "contact_email",
      p = "contact_phone",
      f = "block text-xs font-semibold uppercase tracking-wider text-[var(--p-deep-walnut)]",
      m =
        "flex h-9 w-full border border-[var(--p-tan)] bg-[var(--p-white)] px-3 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)]",
      b =
        "inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-5 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2 disabled:opacity-50";
    function y() {
      let e,
        n,
        y,
        I,
        E,
        k,
        _,
        T,
        N,
        M,
        U,
        P,
        F,
        q,
        D,
        K,
        L,
        W,
        A,
        B,
        z,
        H,
        $,
        G,
        J,
        V,
        Z,
        X,
        Y,
        ee,
        et,
        er,
        es,
        ei,
        ea,
        en = (0, r.c)(77);
      en[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = { queryKey: ["setting", h], queryFn: Q }), (en[0] = e))
        : (e = en[0]);
      let eo = (0, a.useQuery)(e);
      en[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { queryKey: ["setting", d], queryFn: O }), (en[1] = n))
        : (n = en[1]);
      let el = (0, a.useQuery)(n);
      en[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { queryKey: ["setting", p], queryFn: C }), (en[2] = y))
        : (y = en[2]);
      let ec = (0, a.useQuery)(y);
      en[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { queryKey: ["projects-admin"], queryFn: j }), (en[3] = I))
        : (I = en[3]);
      let eu = (0, a.useQuery)(I),
        [eh, ed] = (0, s.useState)(null),
        ep = eh ?? eo.data ?? "",
        [ef, em] = (0, s.useState)(null),
        eb = ef ?? el.data ?? "",
        [ey, ev] = (0, s.useState)(null),
        eg = ey ?? ec.data ?? "";
      en[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { mutationFn: w, onSuccess: S, onError: R }), (en[4] = E))
        : (E = en[4]);
      let ex = (0, i.useMutation)(E);
      en[5] !== eb || en[6] !== eg
        ? ((k = {
            mutationFn: async () => {
              await Promise.all([
                u.client.setting.upsert({ key: d, value: eb }),
                u.client.setting.upsert({ key: p, value: eg }),
              ]);
            },
            onSuccess: x,
            onError: g,
          }),
          (en[5] = eb),
          (en[6] = eg),
          (en[7] = k))
        : (k = en[7]);
      let eR = (0, i.useMutation)(k);
      en[8] !== ep || en[9] !== ex
        ? ((_ = function () {
            ex.mutate(ep);
          }),
          (en[8] = ep),
          (en[9] = ex),
          (en[10] = _))
        : (_ = en[10]);
      let eS = _;
      en[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            ed("");
          }),
          (en[11] = T))
        : (T = en[11]);
      let ew = T;
      if (en[12] !== ep || en[13] !== eu.data) {
        let e,
          r,
          s,
          i,
          a = (eu.data ?? []).filter(v);
        ((P = "max-w-2xl space-y-8"),
          en[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h1", {
                    className: "text-2xl font-bold text-balance text-[var(--p-deep-walnut)]",
                    children: "Site settings",
                  }),
                  (0, t.jsx)("div", {
                    className: "mt-2 h-px w-10 bg-[var(--p-tan)]",
                    "aria-hidden": !0,
                  }),
                  (0, t.jsx)("p", {
                    className: "mt-3 text-sm text-pretty text-[var(--p-coffee-bean)]",
                    children: "Configure the landing page hero image and other site-wide settings.",
                  }),
                ],
              })),
              (en[21] = F))
            : (F = en[21]),
          (q = "space-y-5 border border-[var(--p-tan)] bg-[var(--p-white)] p-6"),
          en[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = (0, t.jsx)("legend", {
                className:
                  "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
                children: "Hero image",
              })),
              (en[22] = D))
            : (D = en[22]),
          en[23] !== ep ? ((e = ep ? [ep] : []), (en[23] = ep), (en[24] = e)) : (e = en[24]),
          en[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (e) => ed(e[0] ?? "")), (en[25] = r))
            : (r = en[25]),
          en[26] !== e
            ? ((N = (0, t.jsx)(o.ImageUploader, { multiple: !1, value: e, onChange: r })),
              (en[26] = e),
              (en[27] = N))
            : (N = en[27]),
          en[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, t.jsx)("label", {
                htmlFor: "hero-url",
                className: f,
                children: "Or paste URL",
              })),
              (en[28] = s))
            : (s = en[28]),
          en[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (e) => ed(e.target.value)), (en[29] = i))
            : (i = en[29]),
          en[30] !== ep
            ? ((M = (0, t.jsxs)("div", {
                className: "space-y-1.5",
                children: [
                  s,
                  (0, t.jsx)("input", {
                    id: "hero-url",
                    className: m,
                    value: ep,
                    onChange: i,
                    placeholder: "https://...",
                  }),
                ],
              })),
              (en[30] = ep),
              (en[31] = M))
            : (M = en[31]),
          (U =
            a.length > 0 &&
            (0, t.jsxs)("div", {
              className: "space-y-2",
              children: [
                (0, t.jsx)("label", { className: f, children: "Or select from a project" }),
                (0, t.jsx)("div", {
                  className: "grid grid-cols-3 gap-2 sm:grid-cols-4",
                  children: a.map((e) =>
                    (0, t.jsxs)(
                      "button",
                      {
                        type: "button",
                        onClick: () => ed(e.featuredImageUrl),
                        className: (0, c.cn)(
                          "group relative aspect-video overflow-hidden border border-[var(--p-tan)] outline-none transition-all",
                          ep === e.featuredImageUrl
                            ? "ring-2 ring-[var(--p-deep-walnut)] ring-offset-2"
                            : "hover:ring-1 hover:ring-[var(--p-toffee)]",
                        ),
                        children: [
                          (0, t.jsx)("img", {
                            src: (0, l.proxyImageUrlIfNeeded)(e.featuredImageUrl),
                            alt: e.title,
                            className: "size-full object-cover",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "absolute inset-x-0 bottom-0 bg-[var(--p-deep-walnut)]/80 px-1.5 py-0.5 text-[10px] text-[var(--p-white)] truncate",
                            children: e.title,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            })),
          (en[12] = ep),
          (en[13] = eu.data),
          (en[14] = N),
          (en[15] = M),
          (en[16] = U),
          (en[17] = P),
          (en[18] = F),
          (en[19] = q),
          (en[20] = D));
      } else
        ((N = en[14]),
          (M = en[15]),
          (U = en[16]),
          (P = en[17]),
          (F = en[18]),
          (q = en[19]),
          (D = en[20]));
      let ej = ex.isPending ? "Saving…" : "Save";
      (en[32] !== eS || en[33] !== ex.isPending || en[34] !== ej
        ? ((K = (0, t.jsx)("button", {
            type: "button",
            className: b,
            onClick: eS,
            disabled: ex.isPending,
            children: ej,
          })),
          (en[32] = eS),
          (en[33] = ex.isPending),
          (en[34] = ej),
          (en[35] = K))
        : (K = en[35]),
        en[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, t.jsx)("button", {
              type: "button",
              className:
                "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2",
              onClick: ew,
              children: "Clear",
            })),
            (en[36] = L))
          : (L = en[36]),
        en[37] !== K
          ? ((W = (0, t.jsxs)("div", { className: "flex gap-3 pt-1", children: [K, L] })),
            (en[37] = K),
            (en[38] = W))
          : (W = en[38]),
        en[39] !== N || en[40] !== M || en[41] !== U || en[42] !== W || en[43] !== q || en[44] !== D
          ? ((A = (0, t.jsxs)("fieldset", { className: q, children: [D, N, M, U, W] })),
            (en[39] = N),
            (en[40] = M),
            (en[41] = U),
            (en[42] = W),
            (en[43] = q),
            (en[44] = D),
            (en[45] = A))
          : (A = en[45]),
        en[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, t.jsx)("legend", {
              className:
                "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
              children: "Contact details",
            })),
            (z = (0, t.jsx)("p", {
              className: "text-xs text-pretty text-[var(--p-coffee-bean)]/70",
              children:
                "Shown in the landing page contact section. These replace the placeholder values visible to visitors.",
            })),
            (en[46] = B),
            (en[47] = z))
          : ((B = en[46]), (z = en[47])),
        en[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, t.jsx)("label", {
              htmlFor: "contact-email",
              className: f,
              children: "Contact email",
            })),
            (en[48] = H))
          : (H = en[48]),
        en[49] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (e) => em(e.target.value)), (en[49] = $))
          : ($ = en[49]),
        en[50] !== eb
          ? ((G = (0, t.jsx)("input", {
              id: "contact-email",
              type: "email",
              className: m,
              value: eb,
              onChange: $,
              placeholder: "hello@yourcompany.com",
            })),
            (en[50] = eb),
            (en[51] = G))
          : (G = en[51]),
        en[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, t.jsx)("p", {
              className: "text-xs text-[var(--p-coffee-bean)]/50",
              children: "Used as the mailto: address for the “Request a quote” button.",
            })),
            (en[52] = J))
          : (J = en[52]),
        en[53] !== G
          ? ((V = (0, t.jsxs)("div", { className: "space-y-1.5", children: [H, G, J] })),
            (en[53] = G),
            (en[54] = V))
          : (V = en[54]),
        en[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, t.jsx)("label", {
              htmlFor: "contact-phone",
              className: f,
              children: "Phone number",
            })),
            (en[55] = Z))
          : (Z = en[55]),
        en[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (e) => ev(e.target.value)), (en[56] = X))
          : (X = en[56]),
        en[57] !== eg
          ? ((Y = (0, t.jsx)("input", {
              id: "contact-phone",
              type: "tel",
              className: m,
              value: eg,
              onChange: X,
              placeholder: "+1 (000) 000-0000",
            })),
            (en[57] = eg),
            (en[58] = Y))
          : (Y = en[58]),
        en[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = (0, t.jsxs)("p", {
              className: "text-xs text-[var(--p-coffee-bean)]/50",
              children: [
                "Displayed as a clickable tel: link. Use E.164 format for the href, e.g.",
                " ",
                (0, t.jsx)("code", { className: "font-mono", children: "+17045550199" }),
                ".",
              ],
            })),
            (en[59] = ee))
          : (ee = en[59]),
        en[60] !== Y
          ? ((et = (0, t.jsxs)("div", { className: "space-y-1.5", children: [Z, Y, ee] })),
            (en[60] = Y),
            (en[61] = et))
          : (et = en[61]),
        en[62] !== eR ? ((er = () => eR.mutate()), (en[62] = eR), (en[63] = er)) : (er = en[63]));
      let eC = eR.isPending ? "Saving…" : "Save";
      return (
        en[64] !== eR.isPending || en[65] !== er || en[66] !== eC
          ? ((es = (0, t.jsx)("div", {
              className: "flex gap-3 pt-1",
              children: (0, t.jsx)("button", {
                type: "button",
                className: b,
                onClick: er,
                disabled: eR.isPending,
                children: eC,
              }),
            })),
            (en[64] = eR.isPending),
            (en[65] = er),
            (en[66] = eC),
            (en[67] = es))
          : (es = en[67]),
        en[68] !== V || en[69] !== et || en[70] !== es
          ? ((ei = (0, t.jsxs)("fieldset", {
              className: "space-y-5 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
              children: [B, z, V, et, es],
            })),
            (en[68] = V),
            (en[69] = et),
            (en[70] = es),
            (en[71] = ei))
          : (ei = en[71]),
        en[72] !== P || en[73] !== F || en[74] !== A || en[75] !== ei
          ? ((ea = (0, t.jsxs)("div", { className: P, children: [F, A, ei] })),
            (en[72] = P),
            (en[73] = F),
            (en[74] = A),
            (en[75] = ei),
            (en[76] = ea))
          : (ea = en[76]),
        ea
      );
    }
    function v(e) {
      return "string" == typeof e.featuredImageUrl && "" !== e.featuredImageUrl;
    }
    function g(e) {
      return n.toast.error(e.message ?? "Failed to save");
    }
    function x() {
      (n.toast.success("Contact details updated"),
        u.queryClient.invalidateQueries({ queryKey: ["setting", d] }),
        u.queryClient.invalidateQueries({ queryKey: ["setting", p] }));
    }
    function R(e) {
      return n.toast.error(e.message ?? "Failed to save");
    }
    function S() {
      (n.toast.success("Hero image updated"),
        u.queryClient.invalidateQueries({ queryKey: ["setting", h] }));
    }
    function w(e) {
      return u.client.setting.upsert({ key: h, value: e });
    }
    function j() {
      return u.client.project.listAdmin();
    }
    function C() {
      return u.client.setting.get({ key: p });
    }
    function O() {
      return u.client.setting.get({ key: d });
    }
    function Q() {
      return u.client.setting.get({ key: h });
    }
    e.s(["default", () => y]);
  },
]);
