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
      n = e.i(86491),
      i = e.i(15823),
      a = e.i(93803),
      o = e.i(19273),
      l = e.i(80166),
      u = class extends i.Subscribable {
        constructor(e, t) {
          (super(),
            (this.options = t),
            (this.#e = e),
            (this.#t = null),
            (this.#r = (0, a.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(t));
        }
        #e;
        #s = void 0;
        #n = void 0;
        #i = void 0;
        #a;
        #o;
        #r;
        #t;
        #l;
        #u;
        #c;
        #d;
        #p;
        #h;
        #f = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#s.addObserver(this),
            c(this.#s, this.options) ? this.#m() : this.updateResult(),
            this.#g());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return d(this.#s, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return d(this.#s, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          ((this.listeners = new Set()), this.#b(), this.#v(), this.#s.removeObserver(this));
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
          (this.#x(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, o.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#s, observer: this }));
          let s = this.hasListeners();
          (s && p(this.#s, r, this.options, t) && this.#m(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                  (0, o.resolveEnabled)(t.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#y());
          let n = this.#S();
          s &&
            (this.#s !== r ||
              (0, o.resolveEnabled)(this.options.enabled, this.#s) !==
                (0, o.resolveEnabled)(t.enabled, this.#s) ||
              n !== this.#h) &&
            this.#R(n);
        }
        getOptimisticResult(e) {
          var t, r;
          let s = this.#e.getQueryCache().build(this.#e, e),
            n = this.createResult(s, e);
          return (
            (t = this),
            (r = n),
            (0, o.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#i = n), (this.#o = this.options), (this.#a = this.#s.state)),
            n
          );
        }
        getCurrentResult() {
          return this.#i;
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
            () => (this.updateResult(), this.#i),
          );
        }
        #m(e) {
          this.#x();
          let t = this.#s.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(o.noop)), t);
        }
        #y() {
          this.#b();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (o.isServer || this.#i.isStale || !(0, o.isValidTimeout)(e)) return;
          let t = (0, o.timeUntilStale)(this.#i.dataUpdatedAt, e);
          this.#d = l.timeoutManager.setTimeout(() => {
            this.#i.isStale || this.updateResult();
          }, t + 1);
        }
        #S() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #R(e) {
          (this.#v(),
            (this.#h = e),
            !o.isServer &&
              !1 !== (0, o.resolveEnabled)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#h) &&
              0 !== this.#h &&
              (this.#p = l.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#m();
              }, this.#h)));
        }
        #g() {
          (this.#y(), this.#R(this.#S()));
        }
        #b() {
          this.#d && (l.timeoutManager.clearTimeout(this.#d), (this.#d = void 0));
        }
        #v() {
          this.#p && (l.timeoutManager.clearInterval(this.#p), (this.#p = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            i = this.options,
            l = this.#i,
            u = this.#a,
            d = this.#o,
            f = e !== s ? e.state : this.#n,
            { state: m } = e,
            g = { ...m },
            b = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && c(e, t),
              o = r && p(e, s, t, i);
            ((a || o) && (g = { ...g, ...(0, n.fetchState)(m.data, e.options) }),
              "isRestoring" === t._optimisticResults && (g.fetchStatus = "idle"));
          }
          let { error: v, errorUpdatedAt: x, status: y } = g;
          r = g.data;
          let S = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === y) {
            let e;
            (l?.isPlaceholderData && t.placeholderData === d?.placeholderData
              ? ((e = l.data), (S = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
              void 0 !== e && ((y = "success"), (r = (0, o.replaceData)(l?.data, e, t)), (b = !0)));
          }
          if (t.select && void 0 !== r && !S)
            if (l && r === u?.data && t.select === this.#l) r = this.#u;
            else
              try {
                ((this.#l = t.select),
                  (r = t.select(r)),
                  (r = (0, o.replaceData)(l?.data, r, t)),
                  (this.#u = r),
                  (this.#t = null));
              } catch (e) {
                this.#t = e;
              }
          this.#t && ((v = this.#t), (r = this.#u), (x = Date.now()), (y = "error"));
          let R = "fetching" === g.fetchStatus,
            j = "pending" === y,
            C = "error" === y,
            w = j && R,
            O = void 0 !== r,
            I = {
              status: y,
              fetchStatus: g.fetchStatus,
              isPending: j,
              isSuccess: "success" === y,
              isError: C,
              isInitialLoading: w,
              isLoading: w,
              data: r,
              dataUpdatedAt: g.dataUpdatedAt,
              error: v,
              errorUpdatedAt: x,
              failureCount: g.fetchFailureCount,
              failureReason: g.fetchFailureReason,
              errorUpdateCount: g.errorUpdateCount,
              isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
              isFetchedAfterMount:
                g.dataUpdateCount > f.dataUpdateCount || g.errorUpdateCount > f.errorUpdateCount,
              isFetching: R,
              isRefetching: R && !j,
              isLoadingError: C && !O,
              isPaused: "paused" === g.fetchStatus,
              isPlaceholderData: b,
              isRefetchError: C && O,
              isStale: h(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveEnabled)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== I.data,
              r = "error" === I.status && !t,
              n = (e) => {
                r ? e.reject(I.error) : t && e.resolve(I.data);
              },
              i = () => {
                n((this.#r = I.promise = (0, a.pendingThenable)()));
              },
              o = this.#r;
            switch (o.status) {
              case "pending":
                e.queryHash === s.queryHash && n(o);
                break;
              case "fulfilled":
                (r || I.data !== o.value) && i();
                break;
              case "rejected":
                (r && I.error === o.reason) || i();
            }
          }
          return I;
        }
        updateResult() {
          let e = this.#i,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#a = this.#s.state),
            (this.#o = this.options),
            void 0 !== this.#a.data && (this.#c = this.#s),
            (0, o.shallowEqualObjects)(t, e))
          )
            return;
          this.#i = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let s = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#i).some((t) => this.#i[t] !== e[t] && s.has(t))
            );
          };
          this.#j({ listeners: r() });
        }
        #x() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#s) return;
          let t = this.#s;
          ((this.#s = e),
            (this.#n = e.state),
            this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#g());
        }
        #j(e) {
          s.notifyManager.batch(() => {
            (e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#i);
              }),
              this.#e.getQueryCache().notify({ query: this.#s, type: "observerResultsUpdated" }));
          });
        }
      };
    function c(e, t) {
      return (
        (!1 !== (0, o.resolveEnabled)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
        (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
      );
    }
    function d(e, t, r) {
      if (
        !1 !== (0, o.resolveEnabled)(t.enabled, e) &&
        "static" !== (0, o.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && h(e, t));
      }
      return !1;
    }
    function p(e, t, r, s) {
      return (
        (e !== t || !1 === (0, o.resolveEnabled)(s.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        h(e, r)
      );
    }
    function h(e, t) {
      return (
        !1 !== (0, o.resolveEnabled)(t.enabled, e) &&
        e.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.i(47167);
    var f = e.i(71645),
      m = e.i(12598);
    e.i(43476);
    var g = f.createContext(
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
      b = f.createContext(!1);
    b.Provider;
    var v = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function x(e, t) {
      return (function (e, t, r) {
        let n,
          i = f.useContext(b),
          a = f.useContext(g),
          l = (0, m.useQueryClient)(r),
          u = l.defaultQueryOptions(e);
        l.getDefaultOptions().queries?._experimental_beforeQuery?.(u);
        let c = l.getQueryCache().get(u.queryHash);
        if (((u._optimisticResults = i ? "isRestoring" : "optimistic"), u.suspense)) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = u.staleTime;
          ((u.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof u.gcTime && (u.gcTime = Math.max(u.gcTime, 1e3)));
        }
        ((n =
          c?.state.error && "function" == typeof u.throwOnError
            ? (0, o.shouldThrowError)(u.throwOnError, [c.state.error, c])
            : u.throwOnError),
          (u.suspense || u.experimental_prefetchInRender || n) &&
            !a.isReset() &&
            (u.retryOnMount = !1),
          f.useEffect(() => {
            a.clearReset();
          }, [a]));
        let d = !l.getQueryCache().get(u.queryHash),
          [p] = f.useState(() => new t(l, u)),
          h = p.getOptimisticResult(u),
          x = !i && !1 !== e.subscribed;
        if (
          (f.useSyncExternalStore(
            f.useCallback(
              (e) => {
                let t = x ? p.subscribe(s.notifyManager.batchCalls(e)) : o.noop;
                return (p.updateResult(), t);
              },
              [p, x],
            ),
            () => p.getCurrentResult(),
            () => p.getCurrentResult(),
          ),
          f.useEffect(() => {
            p.setOptions(u);
          }, [u, p]),
          u?.suspense && h.isPending)
        )
          throw v(u, p, a);
        if (
          (({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: n }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((n && void 0 === e.data) || (0, o.shouldThrowError)(r, [e.error, s])))({
            result: h,
            errorResetBoundary: a,
            throwOnError: u.throwOnError,
            query: c,
            suspense: u.suspense,
          })
        )
          throw h.error;
        if (
          (l.getDefaultOptions().queries?._experimental_afterQuery?.(u, h),
          u.experimental_prefetchInRender && !o.isServer && h.isLoading && h.isFetching && !i)
        ) {
          let e = d ? v(u, p, a) : c?.promise;
          e?.catch(o.noop).finally(() => {
            p.updateResult();
          });
        }
        return u.notifyOnChangeProps ? h : p.trackResult(h);
      })(e, u, t);
    }
    e.s(["useQuery", () => x], 66027);
  },
  54616,
  46063,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(14272),
      s = e.i(40143),
      n = e.i(15823),
      i = e.i(19273),
      a = class extends n.Subscribable {
        #e;
        #i = void 0;
        #C;
        #w;
        constructor(e, t) {
          (super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#O());
        }
        bindMethods() {
          ((this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this)));
        }
        setOptions(e) {
          let t = this.options;
          ((this.options = this.#e.defaultMutationOptions(e)),
            (0, i.shallowEqualObjects)(this.options, t) ||
              this.#e
                .getMutationCache()
                .notify({ type: "observerOptionsUpdated", mutation: this.#C, observer: this }),
            t?.mutationKey &&
            this.options.mutationKey &&
            (0, i.hashKey)(t.mutationKey) !== (0, i.hashKey)(this.options.mutationKey)
              ? this.reset()
              : this.#C?.state.status === "pending" && this.#C.setOptions(this.options));
        }
        onUnsubscribe() {
          this.hasListeners() || this.#C?.removeObserver(this);
        }
        onMutationUpdate(e) {
          (this.#O(), this.#j(e));
        }
        getCurrentResult() {
          return this.#i;
        }
        reset() {
          (this.#C?.removeObserver(this), (this.#C = void 0), this.#O(), this.#j());
        }
        mutate(e, t) {
          return (
            (this.#w = t),
            this.#C?.removeObserver(this),
            (this.#C = this.#e.getMutationCache().build(this.#e, this.options)),
            this.#C.addObserver(this),
            this.#C.execute(e)
          );
        }
        #O() {
          let e = this.#C?.state ?? (0, r.getDefaultState)();
          this.#i = {
            ...e,
            isPending: "pending" === e.status,
            isSuccess: "success" === e.status,
            isError: "error" === e.status,
            isIdle: "idle" === e.status,
            mutate: this.mutate,
            reset: this.reset,
          };
        }
        #j(e) {
          s.notifyManager.batch(() => {
            if (this.#w && this.hasListeners()) {
              let t = this.#i.variables,
                r = this.#i.context,
                s = {
                  client: this.#e,
                  meta: this.options.meta,
                  mutationKey: this.options.mutationKey,
                };
              if (e?.type === "success") {
                try {
                  this.#w.onSuccess?.(e.data, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#w.onSettled?.(e.data, null, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              } else if (e?.type === "error") {
                try {
                  this.#w.onError?.(e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
                try {
                  this.#w.onSettled?.(void 0, e.error, t, r, s);
                } catch (e) {
                  Promise.reject(e);
                }
              }
            }
            this.listeners.forEach((e) => {
              e(this.#i);
            });
          });
        }
      },
      o = e.i(12598);
    function l(e, r) {
      let n = (0, o.useQueryClient)(r),
        [l] = t.useState(() => new a(n, e));
      t.useEffect(() => {
        l.setOptions(e);
      }, [l, e]);
      let u = t.useSyncExternalStore(
          t.useCallback((e) => l.subscribe(s.notifyManager.batchCalls(e)), [l]),
          () => l.getCurrentResult(),
          () => l.getCurrentResult(),
        ),
        c = t.useCallback(
          (e, t) => {
            l.mutate(e, t).catch(i.noop);
          },
          [l],
        );
      if (u.error && (0, i.shouldThrowError)(l.options.throwOnError, [u.error])) throw u.error;
      return { ...u, mutate: c, mutateAsync: u.mutate };
    }
    e.s(["useMutation", () => l], 54616);
    var u = e.i(43476),
      c = e.i(46696),
      d = e.i(23426),
      p = e.i(75157);
    async function h(e) {
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
    function f({ value: e, onChange: r, multiple: s = !0, className: n, disabled: i = !1 }) {
      let a = (0, t.useRef)(null),
        [o, l] = (0, t.useState)(!1),
        [f, m] = (0, t.useState)(!1),
        [g, b] = (0, t.useState)(0),
        v = (0, t.useCallback)(
          async (t) => {
            let n = Array.from(t).filter((e) => e.type.startsWith("image/"));
            if (0 !== n.length) {
              if (!s && n.length > 1) return void c.toast.error("Only one image allowed here.");
              (m(!0), b(n.length));
              try {
                let t = await h(n);
                r(s ? [...e, ...t] : t);
              } catch (e) {
                c.toast.error(e instanceof Error ? e.message : "Upload failed");
              } finally {
                (m(!1), b(0), a.current && (a.current.value = ""));
              }
            }
          },
          [s, r, e],
        ),
        x = (0, t.useCallback)(
          (e) => {
            (e.preventDefault(), l(!1), i || f || v(e.dataTransfer.files));
          },
          [i, v, f],
        ),
        y = s || 0 === e.length;
      return (0, u.jsxs)("div", {
        className: (0, p.cn)("space-y-3", n),
        children: [
          e.length > 0 &&
            (0, u.jsxs)("div", {
              className: "grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5",
              children: [
                e.map((t) =>
                  (0, u.jsxs)(
                    "div",
                    {
                      className:
                        "group relative aspect-square overflow-hidden border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                      children: [
                        (0, u.jsx)("img", {
                          src: (0, d.proxyImageUrlIfNeeded)(t),
                          alt: "",
                          className: "size-full object-cover",
                        }),
                        (0, u.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            r(e.filter((e) => e !== t));
                          },
                          disabled: i || f,
                          "aria-label": "Remove image",
                          className:
                            "absolute right-1 top-1 flex size-5 items-center justify-center bg-black/70 text-white opacity-0 outline-none transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-white",
                          children: (0, u.jsx)("svg", {
                            width: "10",
                            height: "10",
                            viewBox: "0 0 10 10",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, u.jsx)("path", {
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
                  Array.from({ length: g }).map((e, t) =>
                    (0, u.jsx)(
                      "div",
                      {
                        className:
                          "aspect-square border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                        "aria-hidden": !0,
                        children: (0, u.jsx)("div", {
                          className: "size-full animate-pulse bg-[var(--p-tan)]/30",
                        }),
                      },
                      `uploading-${t}`,
                    ),
                  ),
              ],
            }),
          y &&
            (0, u.jsxs)("div", {
              role: "button",
              tabIndex: i ? -1 : 0,
              "aria-label": "Upload images — click or drag and drop",
              "aria-disabled": i || f,
              onDragOver: (e) => {
                (e.preventDefault(), l(!0));
              },
              onDragLeave: () => l(!1),
              onDrop: x,
              onClick: () => !i && !f && a.current?.click(),
              onKeyDown: (e) => {
                ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), i || f || a.current?.click());
              },
              className: (0, p.cn)(
                "flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed py-10 text-center outline-none transition-colors",
                o
                  ? "border-[var(--p-toffee)] bg-[var(--p-tan)]/10"
                  : "border-[var(--p-tan)] bg-[var(--p-white)] hover:border-[var(--p-toffee)] hover:bg-[var(--p-tan)]/5",
                (i || f) && "cursor-not-allowed opacity-50",
              ),
              children: [
                (0, u.jsxs)("svg", {
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
                    (0, u.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                    (0, u.jsx)("polyline", { points: "17 8 12 3 7 8" }),
                    (0, u.jsx)("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
                  ],
                }),
                (0, u.jsxs)("div", {
                  children: [
                    (0, u.jsx)("p", {
                      className: "text-xs font-semibold text-[var(--p-deep-walnut)]",
                      children: f
                        ? `Uploading ${g} file${g > 1 ? "s" : ""}…`
                        : "Click to upload or drag & drop",
                    }),
                    (0, u.jsx)("p", {
                      className: "mt-0.5 text-[11px] text-[var(--p-coffee-bean)]/60",
                      children: s ? "PNG, JPG, WEBP — multiple allowed" : "PNG, JPG, WEBP",
                    }),
                  ],
                }),
              ],
            }),
          !s &&
            e.length > 0 &&
            (0, u.jsx)("button", {
              type: "button",
              disabled: i || f,
              onClick: () => a.current?.click(),
              className:
                "inline-flex h-8 items-center gap-1.5 border border-[var(--p-tan)] bg-transparent px-3 text-xs font-medium text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)] disabled:opacity-50",
              children: f ? "Uploading…" : "Replace image",
            }),
          (0, u.jsx)("input", {
            ref: a,
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
  63886,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      s = e.i(71645),
      n = e.i(18566),
      i = e.i(54616),
      a = e.i(66027),
      o = e.i(46696),
      l = e.i(26121),
      u = e.i(46063),
      c = e.i(75157);
    let d = {
        slug: "",
        title: "",
        description: "",
        featuredImageUrl: "",
        published: !1,
        imageUrls: [],
      },
      p = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    function h(e) {
      return e
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/[\s-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    function f(e, t, r = []) {
      if ("slug" === e) {
        if (!t.trim()) return "Slug is required";
        if (!p.test(t)) return "Slug must be lowercase letters, numbers, and hyphens only";
        if (r.includes(t.trim().toLowerCase()))
          return "This slug is already used by another project.";
      }
      if ("title" === e && !t.trim()) return "Title is required";
    }
    let m = "block text-xs font-semibold uppercase tracking-wider text-[var(--p-deep-walnut)]";
    function g(e) {
      return (0, c.cn)(
        "flex h-9 w-full border bg-[var(--p-white)] px-3 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1",
        e
          ? "border-red-500 focus-visible:ring-red-400"
          : "border-[var(--p-tan)] focus-visible:ring-[var(--p-toffee)]",
      );
    }
    function b(e) {
      let s,
        n = (0, r.c)(2),
        { message: i } = e;
      return i
        ? (n[0] !== i
            ? ((s = (0, t.jsx)("p", {
                role: "alert",
                className: "mt-1 text-xs font-medium text-red-600",
                children: i,
              })),
              (n[0] = i),
              (n[1] = s))
            : (s = n[1]),
          s)
        : null;
    }
    function v(e) {
      let l,
        c,
        p,
        v,
        N,
        T,
        U,
        P,
        _,
        M,
        Q,
        F,
        A,
        z,
        B,
        L,
        q,
        K,
        W,
        V,
        $,
        H,
        G,
        J,
        Y,
        Z,
        X,
        ee,
        et,
        er,
        es,
        en,
        ei,
        ea,
        eo,
        el,
        eu,
        ec,
        ed,
        ep,
        eh,
        ef,
        em,
        eg,
        eb,
        ev,
        ex,
        ey,
        eS,
        eR,
        ej,
        eC,
        ew,
        eO,
        eI,
        eE,
        ek = (0, r.c)(133),
        { mode: eD, id: eN, initialData: eT } = e,
        eU = (0, n.useRouter)(),
        [eP, e_] = (0, s.useState)(eT ?? d);
      ek[0] === Symbol.for("react.memo_cache_sentinel") ? ((l = {}), (ek[0] = l)) : (l = ek[0]);
      let [eM, eQ] = (0, s.useState)(l),
        eF = (0, s.useRef)(!!eT?.slug),
        eA = (0, s.useRef)(null);
      ek[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { queryKey: ["projects", "admin"], queryFn: D }), (ek[1] = c))
        : (c = ek[1]);
      let { data: ez } = (0, a.useQuery)(c);
      ek[2] !== eN || ek[3] !== eD || ek[4] !== ez
        ? ((p =
            "create" === eD ? (ez?.map(k) ?? []) : (ez?.filter((e) => e.id !== eN).map(E) ?? [])),
          (ek[2] = eN),
          (ek[3] = eD),
          (ek[4] = ez),
          (ek[5] = p))
        : (p = ek[5]);
      let eB = p;
      ek[6] !== eU
        ? ((v = {
            mutationFn: I,
            onSuccess: () => {
              (o.toast.success("Project created"), eU.push("/cms/projects"));
            },
            onError: O,
          }),
          (ek[6] = eU),
          (ek[7] = v))
        : (v = ek[7]);
      let eL = (0, i.useMutation)(v);
      ek[8] !== eU
        ? ((N = {
            mutationFn: w,
            onSuccess: () => {
              (o.toast.success("Project updated"), eU.push("/cms/projects"));
            },
            onError: C,
          }),
          (ek[8] = eU),
          (ek[9] = N))
        : (N = ek[9]);
      let eq = (0, i.useMutation)(N),
        eK = eL.isPending || eq.isPending;
      ek[10] !== eB || ek[11] !== eP
        ? ((T = (e) => {
            let t = f(e, eP[e], eB);
            eQ((r) => ({ ...r, [e]: t }));
          }),
          (ek[10] = eB),
          (ek[11] = eP),
          (ek[12] = T))
        : (T = ek[12]);
      let eW = T;
      ek[13] !== eM.slug || ek[14] !== eM.title
        ? ((U = function (e) {
            let t = e.target.value;
            (e_((e) => ({ ...e, title: t, slug: eF.current ? e.slug : h(t) })),
              eM.title && eQ(j),
              !eF.current && eM.slug && eQ(R));
          }),
          (ek[13] = eM.slug),
          (ek[14] = eM.title),
          (ek[15] = U))
        : (U = ek[15]);
      let eV = U;
      ek[16] !== eM.slug
        ? ((P = function (e) {
            let t = e.target.value,
              r = h(t) || t.replace(/[^a-z0-9-]/gi, "").toLowerCase();
            ((eF.current = !0), e_((e) => ({ ...e, slug: r })), eM.slug && eQ(S));
          }),
          (ek[16] = eM.slug),
          (ek[17] = P))
        : (P = ek[17]);
      let e$ = P;
      ek[18] !== eL ||
      ek[19] !== eB ||
      ek[20] !== eN ||
      ek[21] !== eD ||
      ek[22] !== eq ||
      ek[23] !== eP
        ? ((_ = function (e) {
            e.preventDefault();
            let t = (function (e, t = []) {
              let r = {};
              for (let s of ["slug", "title"]) {
                let n = f(s, e[s], t);
                n && (r[s] = n);
              }
              return r;
            })(eP, eB);
            if ((eQ(t), Object.keys(t).length > 0))
              return void requestAnimationFrame(() => {
                eA.current?.focus();
              });
            let r = {
              slug: eP.slug,
              title: eP.title.trim(),
              description: eP.description,
              featuredImageUrl: eP.featuredImageUrl.trim() || null,
              published: eP.published,
              imageUrls: eP.imageUrls.filter(Boolean),
            };
            "create" === eD ? eL.mutate(r) : eN && eq.mutate({ id: eN, ...r });
          }),
          (ek[18] = eL),
          (ek[19] = eB),
          (ek[20] = eN),
          (ek[21] = eD),
          (ek[22] = eq),
          (ek[23] = eP),
          (ek[24] = _))
        : (_ = ek[24]);
      let eH = _;
      (ek[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, t.jsx)("legend", {
            className: "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
            children: "Details",
          })),
          (ek[25] = M))
        : (M = ek[25]),
        ek[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, t.jsxs)("label", {
              htmlFor: "title",
              className: m,
              children: [
                "Title ",
                (0, t.jsx)("span", { className: "text-red-500", children: "*" }),
              ],
            })),
            (ek[26] = Q))
          : (Q = ek[26]),
        ek[27] !== eM.slug || ek[28] !== eM.title
          ? ((F = (e) => {
              eM.title && !eM.slug && (eA.current = e);
            }),
            (ek[27] = eM.slug),
            (ek[28] = eM.title),
            (ek[29] = F))
          : (F = ek[29]));
      let eG = !!eM.title;
      (ek[30] !== eG ? ((A = g(eG)), (ek[30] = eG), (ek[31] = A)) : (A = ek[31]),
        ek[32] !== eW ? ((z = () => eW("title")), (ek[32] = eW), (ek[33] = z)) : (z = ek[33]),
        ek[34] !== eV || ek[35] !== F || ek[36] !== A || ek[37] !== z || ek[38] !== eP.title
          ? ((B = (0, t.jsx)("input", {
              id: "title",
              ref: F,
              className: A,
              value: eP.title,
              onChange: eV,
              onBlur: z,
              placeholder: "Sharon Lane Kitchen",
            })),
            (ek[34] = eV),
            (ek[35] = F),
            (ek[36] = A),
            (ek[37] = z),
            (ek[38] = eP.title),
            (ek[39] = B))
          : (B = ek[39]),
        ek[40] !== eM.title
          ? ((L = (0, t.jsx)(b, { message: eM.title })), (ek[40] = eM.title), (ek[41] = L))
          : (L = ek[41]),
        ek[42] !== B || ek[43] !== L
          ? ((q = (0, t.jsxs)("div", { className: "space-y-1.5", children: [Q, B, L] })),
            (ek[42] = B),
            (ek[43] = L),
            (ek[44] = q))
          : (q = ek[44]),
        ek[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, t.jsxs)("label", {
              htmlFor: "slug",
              className: m,
              children: ["Slug ", (0, t.jsx)("span", { className: "text-red-500", children: "*" })],
            })),
            (ek[45] = K))
          : (K = ek[45]),
        ek[46] !== eM.slug
          ? ((W = (e) => {
              eM.slug && (eA.current = e);
            }),
            (ek[46] = eM.slug),
            (ek[47] = W))
          : (W = ek[47]));
      let eJ = !!eM.slug;
      (ek[48] !== eJ ? ((V = g(eJ)), (ek[48] = eJ), (ek[49] = V)) : (V = ek[49]),
        ek[50] !== eW ? (($ = () => eW("slug")), (ek[50] = eW), (ek[51] = $)) : ($ = ek[51]),
        ek[52] !== e$ || ek[53] !== W || ek[54] !== V || ek[55] !== $ || ek[56] !== eP.slug
          ? ((H = (0, t.jsx)("input", {
              id: "slug",
              ref: W,
              className: V,
              value: eP.slug,
              onChange: e$,
              onBlur: $,
              placeholder: "sharon-lane-kitchen",
            })),
            (ek[52] = e$),
            (ek[53] = W),
            (ek[54] = V),
            (ek[55] = $),
            (ek[56] = eP.slug),
            (ek[57] = H))
          : (H = ek[57]),
        ek[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, t.jsxs)("p", {
              className: "text-xs text-pretty text-[var(--p-coffee-bean)]/60",
              children: [
                "Auto-generated from title. Lowercase, numbers, hyphens only — used in",
                " ",
                (0, t.jsx)("code", { className: "font-mono", children: "/projects/[slug]" }),
                ".",
              ],
            })),
            (ek[58] = G))
          : (G = ek[58]),
        ek[59] !== eM.slug
          ? ((J = (0, t.jsx)(b, { message: eM.slug })), (ek[59] = eM.slug), (ek[60] = J))
          : (J = ek[60]),
        ek[61] !== H || ek[62] !== J
          ? ((Y = (0, t.jsxs)("div", { className: "space-y-1.5", children: [K, H, G, J] })),
            (ek[61] = H),
            (ek[62] = J),
            (ek[63] = Y))
          : (Y = ek[63]),
        ek[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, t.jsx)("label", {
              htmlFor: "description",
              className: m,
              children: "Description (Markdown)",
            })),
            (ek[64] = Z))
          : (Z = ek[64]),
        ek[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (e) => e_((t) => ({ ...t, description: e.target.value }))), (ek[65] = X))
          : (X = ek[65]),
        ek[66] !== eP.description
          ? ((ee = (0, t.jsxs)("div", {
              className: "space-y-1.5",
              children: [
                Z,
                (0, t.jsx)("textarea", {
                  id: "description",
                  className:
                    "flex min-h-40 w-full border border-[var(--p-tan)] bg-[var(--p-white)] px-3 py-2 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)]",
                  value: eP.description,
                  onChange: X,
                }),
              ],
            })),
            (ek[66] = eP.description),
            (ek[67] = ee))
          : (ee = ek[67]),
        ek[68] !== q || ek[69] !== Y || ek[70] !== ee
          ? ((et = (0, t.jsxs)("fieldset", {
              className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
              children: [M, q, Y, ee],
            })),
            (ek[68] = q),
            (ek[69] = Y),
            (ek[70] = ee),
            (ek[71] = et))
          : (et = ek[71]),
        ek[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (0, t.jsx)("legend", {
              className:
                "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
              children: "Featured image",
            })),
            (es = (0, t.jsx)("p", {
              className: "text-xs text-[var(--p-coffee-bean)]/60",
              children:
                "The main image shown on the project card and hero. Upload one or paste a URL.",
            })),
            (ek[72] = er),
            (ek[73] = es))
          : ((er = ek[72]), (es = ek[73])),
        ek[74] !== eP.featuredImageUrl
          ? ((en = eP.featuredImageUrl ? [eP.featuredImageUrl] : []),
            (ek[74] = eP.featuredImageUrl),
            (ek[75] = en))
          : (en = ek[75]),
        ek[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = (e) => {
              (e_((t) => ({ ...t, featuredImageUrl: e[0] ?? "" })), eQ(y));
            }),
            (ek[76] = ei))
          : (ei = ek[76]),
        ek[77] !== eK || ek[78] !== en
          ? ((ea = (0, t.jsx)(u.ImageUploader, {
              multiple: !1,
              value: en,
              onChange: ei,
              disabled: eK,
            })),
            (ek[77] = eK),
            (ek[78] = en),
            (ek[79] = ea))
          : (ea = ek[79]),
        ek[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, t.jsx)("label", {
              htmlFor: "featured-url",
              className: m,
              children: "Or paste URL",
            })),
            (ek[80] = eo))
          : (eo = ek[80]),
        ek[81] !== eM.featuredImageUrl || ek[82] !== eM.slug || ek[83] !== eM.title
          ? ((el = (e) => {
              !eM.featuredImageUrl || eM.slug || eM.title || (eA.current = e);
            }),
            (ek[81] = eM.featuredImageUrl),
            (ek[82] = eM.slug),
            (ek[83] = eM.title),
            (ek[84] = el))
          : (el = ek[84]));
      let eY = !!eM.featuredImageUrl;
      (ek[85] !== eY ? ((eu = g(eY)), (ek[85] = eY), (ek[86] = eu)) : (eu = ek[86]),
        ek[87] !== eM.featuredImageUrl
          ? ((ec = (e) => {
              (e_((t) => ({ ...t, featuredImageUrl: e.target.value })),
                eM.featuredImageUrl && eQ(x));
            }),
            (ek[87] = eM.featuredImageUrl),
            (ek[88] = ec))
          : (ec = ek[88]),
        ek[89] !== eW
          ? ((ed = () => eW("featuredImageUrl")), (ek[89] = eW), (ek[90] = ed))
          : (ed = ek[90]),
        ek[91] !== el ||
        ek[92] !== eu ||
        ek[93] !== ec ||
        ek[94] !== ed ||
        ek[95] !== eP.featuredImageUrl
          ? ((ep = (0, t.jsx)("input", {
              id: "featured-url",
              ref: el,
              className: eu,
              value: eP.featuredImageUrl,
              onChange: ec,
              onBlur: ed,
              placeholder: "https://...",
            })),
            (ek[91] = el),
            (ek[92] = eu),
            (ek[93] = ec),
            (ek[94] = ed),
            (ek[95] = eP.featuredImageUrl),
            (ek[96] = ep))
          : (ep = ek[96]),
        ek[97] !== eM.featuredImageUrl
          ? ((eh = (0, t.jsx)(b, { message: eM.featuredImageUrl })),
            (ek[97] = eM.featuredImageUrl),
            (ek[98] = eh))
          : (eh = ek[98]),
        ek[99] !== ep || ek[100] !== eh
          ? ((ef = (0, t.jsxs)("div", { className: "space-y-1", children: [eo, ep, eh] })),
            (ek[99] = ep),
            (ek[100] = eh),
            (ek[101] = ef))
          : (ef = ek[101]),
        ek[102] !== ea || ek[103] !== ef
          ? ((em = (0, t.jsxs)("fieldset", {
              className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
              children: [er, es, ea, ef],
            })),
            (ek[102] = ea),
            (ek[103] = ef),
            (ek[104] = em))
          : (em = ek[104]),
        ek[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = (0, t.jsx)("legend", {
              className:
                "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
              children: "Gallery images",
            })),
            (eb = (0, t.jsx)("p", {
              className: "text-xs text-[var(--p-coffee-bean)]/60",
              children:
                "Shown in the carousel on the project page. Select multiple files at once or drag & drop.",
            })),
            (ek[105] = eg),
            (ek[106] = eb))
          : ((eg = ek[105]), (eb = ek[106])),
        ek[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((ev = (e) => e_((t) => ({ ...t, imageUrls: e }))), (ek[107] = ev))
          : (ev = ek[107]),
        ek[108] !== eK || ek[109] !== eP.imageUrls
          ? ((ex = (0, t.jsxs)("fieldset", {
              className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
              children: [
                eg,
                eb,
                (0, t.jsx)(u.ImageUploader, {
                  multiple: !0,
                  value: eP.imageUrls,
                  onChange: ev,
                  disabled: eK,
                }),
              ],
            })),
            (ek[108] = eK),
            (ek[109] = eP.imageUrls),
            (ek[110] = ex))
          : (ex = ek[110]),
        ek[111] === Symbol.for("react.memo_cache_sentinel")
          ? ((ey = (0, t.jsx)("legend", {
              className:
                "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
              children: "Publishing",
            })),
            (ek[111] = ey))
          : (ey = ek[111]),
        ek[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((eS = (e) => e_((t) => ({ ...t, published: e.target.checked }))), (ek[112] = eS))
          : (eS = ek[112]),
        ek[113] !== eP.published
          ? ((eR = (0, t.jsx)("input", {
              type: "checkbox",
              checked: eP.published,
              onChange: eS,
              className: "size-4 accent-[var(--p-deep-walnut)]",
            })),
            (ek[113] = eP.published),
            (ek[114] = eR))
          : (eR = ek[114]),
        ek[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((ej = (0, t.jsx)("span", {
              className: "text-sm text-[var(--p-dark-walnut)]",
              children: "Published — visible on the public site",
            })),
            (ek[115] = ej))
          : (ej = ek[115]),
        ek[116] !== eR
          ? ((eC = (0, t.jsxs)("fieldset", {
              className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
              children: [
                ey,
                (0, t.jsxs)("label", {
                  className: "flex cursor-pointer items-center gap-3",
                  children: [eR, ej],
                }),
              ],
            })),
            (ek[116] = eR),
            (ek[117] = eC))
          : (eC = ek[117]));
      let eZ = "create" === eD ? "Create project" : "Save changes";
      return (
        ek[118] !== eK || ek[119] !== eZ
          ? ((ew = (0, t.jsx)("button", {
              type: "submit",
              className:
                "inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-5 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2 disabled:opacity-50",
              disabled: eK,
              children: eZ,
            })),
            (ek[118] = eK),
            (ek[119] = eZ),
            (ek[120] = ew))
          : (ew = ek[120]),
        ek[121] !== eU
          ? ((eO = (0, t.jsx)("button", {
              type: "button",
              className:
                "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2",
              onClick: () => eU.push("/cms/projects"),
              children: "Cancel",
            })),
            (ek[121] = eU),
            (ek[122] = eO))
          : (eO = ek[122]),
        ek[123] !== ew || ek[124] !== eO
          ? ((eI = (0, t.jsxs)("div", { className: "flex gap-3", children: [ew, eO] })),
            (ek[123] = ew),
            (ek[124] = eO),
            (ek[125] = eI))
          : (eI = ek[125]),
        ek[126] !== eH ||
        ek[127] !== et ||
        ek[128] !== em ||
        ek[129] !== ex ||
        ek[130] !== eC ||
        ek[131] !== eI
          ? ((eE = (0, t.jsxs)("form", {
              onSubmit: eH,
              className: "max-w-2xl space-y-6",
              noValidate: !0,
              children: [et, em, ex, eC, eI],
            })),
            (ek[126] = eH),
            (ek[127] = et),
            (ek[128] = em),
            (ek[129] = ex),
            (ek[130] = eC),
            (ek[131] = eI),
            (ek[132] = eE))
          : (eE = ek[132]),
        eE
      );
    }
    function x(e) {
      return { ...e, featuredImageUrl: void 0 };
    }
    function y(e) {
      return { ...e, featuredImageUrl: void 0 };
    }
    function S(e) {
      return { ...e, slug: void 0 };
    }
    function R(e) {
      return { ...e, slug: void 0 };
    }
    function j(e) {
      return { ...e, title: void 0 };
    }
    function C(e) {
      return o.toast.error(e.message ?? "Failed to update");
    }
    function w(e) {
      return l.client.project.update(e);
    }
    function O(e) {
      return o.toast.error(e.message ?? "Failed to create");
    }
    function I(e) {
      return l.client.project.create(e);
    }
    function E(e) {
      return e.slug;
    }
    function k(e) {
      return e.slug;
    }
    function D() {
      return l.client.project.listAdmin();
    }
    e.s(["ProjectForm", () => v]);
  },
  50362,
  (e) => {
    "use strict";
    let t, r;
    var s,
      n,
      i,
      a = e.i(43476),
      o = e.i(932),
      l = e.i(22016),
      u = e.i(71645),
      c = e.i(18566),
      d = e.i(54616),
      p = e.i(66027),
      h = e.i(46696),
      f = e.i(26121);
    (e.s([], 12248), e.i(12248));
    var m = e.i(30628),
      g = e.i(76477),
      b = e.i(66196),
      v = e.i(33605),
      x = e.i(89633),
      y = e.i(26665),
      S = e.i(6157),
      R = e.i(47857),
      j = e.i(50091),
      C = e.i(5963),
      w = e.i(3404),
      O = e.i(58642);
    e.i(47167);
    var I = e.i(67805);
    let E = u.createContext(void 0);
    function k(e) {
      let t = u.useContext(E);
      if (!1 === e && void 0 === t) throw Error((0, I.default)(27));
      return t;
    }
    var D = e.i(83921),
      N = e.i(98263),
      T = e.i(628),
      U = e.i(69375);
    let P = {
      ...T.popupStoreSelectors,
      modal: (0, D.createSelector)((e) => e.modal),
      nested: (0, D.createSelector)((e) => e.nested),
      nestedOpenDialogCount: (0, D.createSelector)((e) => e.nestedOpenDialogCount),
      disablePointerDismissal: (0, D.createSelector)((e) => e.disablePointerDismissal),
      openMethod: (0, D.createSelector)((e) => e.openMethod),
      descriptionElementId: (0, D.createSelector)((e) => e.descriptionElementId),
      titleElementId: (0, D.createSelector)((e) => e.titleElementId),
      viewportElement: (0, D.createSelector)((e) => e.viewportElement),
      role: (0, D.createSelector)((e) => e.role),
    };
    class _ extends N.ReactStore {
      constructor(e) {
        super(
          (function (e = {}) {
            return {
              ...(0, T.createInitialPopupStoreState)(),
              modal: !0,
              disablePointerDismissal: !1,
              popupElement: null,
              viewportElement: null,
              descriptionElementId: void 0,
              titleElementId: void 0,
              openMethod: null,
              nested: !1,
              nestedOpenDialogCount: 0,
              role: "dialog",
              ...e,
            };
          })(e),
          {
            popupRef: u.createRef(),
            backdropRef: u.createRef(),
            internalBackdropRef: u.createRef(),
            outsidePressEnabledRef: { current: !0 },
            triggerElements: new U.PopupTriggerMap(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
          },
          P,
        );
      }
      setOpen = (e, t) => {
        if (
          ((t.preventUnmountOnClose = () => {
            this.set("preventUnmountingOnClose", !0);
          }),
          e ||
            null != t.trigger ||
            null == this.state.activeTriggerId ||
            (t.trigger = this.state.activeTriggerElement ?? void 0),
          this.context.onOpenChange?.(e, t),
          t.isCanceled)
        )
          return;
        let r = { open: e, nativeEvent: t.event, reason: t.reason, nested: this.state.nested };
        this.state.floatingRootContext.context.events?.emit("openchange", r);
        let s = { open: e },
          n = t.trigger?.id ?? null;
        ((n || e) && ((s.activeTriggerId = n), (s.activeTriggerElement = t.trigger ?? null)),
          this.update(s));
      };
    }
    function M(e) {
      let {
          children: t,
          open: r,
          defaultOpen: s = !1,
          onOpenChange: n,
          onOpenChangeComplete: i,
          actionsRef: o,
          handle: l,
          triggerId: c,
          defaultTriggerId: d = null,
        } = e,
        p = k(),
        h = !!p,
        f = (0, m.useRefWithInit)(
          () =>
            l?.store ??
            new _({
              open: s,
              openProp: r,
              activeTriggerId: d,
              triggerIdProp: c,
              modal: !0,
              disablePointerDismissal: !0,
              nested: h,
              role: "alertdialog",
            }),
        ).current;
      (f.useControlledProp("openProp", r),
        f.useControlledProp("triggerIdProp", c),
        f.useSyncedValue("nested", h),
        f.useContextCallback("onOpenChange", n),
        f.useContextCallback("onOpenChangeComplete", i));
      let I = f.useState("payload");
      !(function (e) {
        let { store: t, parentContext: r, actionsRef: s } = e,
          n = t.useState("open"),
          i = t.useState("disablePointerDismissal"),
          a = t.useState("modal"),
          o = t.useState("popupElement"),
          { openMethod: l, triggerProps: c, reset: d } = (0, j.useOpenInteractionType)(n);
        (0, O.useImplicitActiveTrigger)(t);
        let { forceUnmount: p } = (0, O.useOpenStateTransitions)(n, t, () => {
            d();
          }),
          h = (0, g.useStableCallback)((e) => {
            let r = (0, C.createChangeEventDetails)(e);
            return (
              (r.preventUnmountOnClose = () => {
                t.set("preventUnmountingOnClose", !0);
              }),
              r
            );
          }),
          f = u.useCallback(() => {
            t.setOpen(!1, h(w.REASONS.imperativeAction));
          }, [t, h]);
        u.useImperativeHandle(s, () => ({ unmount: p, close: f }), [p, f]);
        let m = (0, S.useSyncedFloatingRootContext)({
            popupStore: t,
            onOpenChange: t.setOpen,
            treatPopupAsFloatingElement: !0,
            noEmit: !0,
          }),
          [I, E] = u.useState(0),
          k = 0 === I,
          D = (0, y.useRole)(m),
          N = (0, v.useDismiss)(m, {
            outsidePressEvent: () =>
              t.context.internalBackdropRef.current || t.context.backdropRef.current
                ? "intentional"
                : { mouse: "trap-focus" === a ? "sloppy" : "intentional", touch: "sloppy" },
            outsidePress(e) {
              if (
                !t.context.outsidePressEnabledRef.current ||
                ("button" in e && 0 !== e.button) ||
                ("touches" in e && 1 !== e.touches.length)
              )
                return !1;
              let r = (0, R.getTarget)(e);
              return (
                !!k &&
                !i &&
                (!a ||
                  (!t.context.internalBackdropRef.current && !t.context.backdropRef.current) ||
                  t.context.internalBackdropRef.current === r ||
                  t.context.backdropRef.current === r ||
                  ((0, R.contains)(r, o) && !r?.hasAttribute("data-base-ui-portal")))
              );
            },
            escapeKey: k,
          });
        (0, b.useScrollLock)(n && !0 === a, o);
        let {
          getReferenceProps: T,
          getFloatingProps: U,
          getTriggerProps: P,
        } = (0, x.useInteractions)([D, N]);
        (t.useContextCallback("onNestedDialogOpen", (e) => {
          E(e + 1);
        }),
          t.useContextCallback("onNestedDialogClose", () => {
            E(0);
          }),
          u.useEffect(
            () => (
              r?.onNestedDialogOpen && n && r.onNestedDialogOpen(I),
              r?.onNestedDialogClose && !n && r.onNestedDialogClose(),
              () => {
                r?.onNestedDialogClose && n && r.onNestedDialogClose();
              }
            ),
            [n, r, I],
          ));
        let _ = u.useMemo(() => T(c), [T, c]),
          M = u.useMemo(() => P(c), [P, c]),
          Q = u.useMemo(() => U(), [U]);
        t.useSyncedValues({
          openMethod: l,
          activeTriggerProps: _,
          inactiveTriggerProps: M,
          popupProps: Q,
          floatingRootContext: m,
          nestedOpenDialogCount: I,
        });
      })({
        store: f,
        actionsRef: o,
        parentContext: p?.store.context,
        onOpenChange: n,
        triggerIdProp: c,
      });
      let D = u.useMemo(() => ({ store: f }), [f]);
      return (0, a.jsx)(E.Provider, {
        value: D,
        children: "function" == typeof t ? t({ payload: I }) : t,
      });
    }
    var Q = e.i(27601),
      F = e.i(83590),
      A = e.i(84759);
    let z = { ...F.popupStateMapping, ...A.transitionStatusMapping },
      B = u.forwardRef(function (e, t) {
        let { render: r, className: s, forceRender: n = !1, ...i } = e,
          { store: a } = k(),
          o = a.useState("open"),
          l = a.useState("nested"),
          u = a.useState("mounted"),
          c = a.useState("transitionStatus");
        return (0, Q.useRenderElement)("div", e, {
          state: { open: o, transitionStatus: c },
          ref: [a.context.backdropRef, t],
          stateAttributesMapping: z,
          props: [
            {
              role: "presentation",
              hidden: !u,
              style: { userSelect: "none", WebkitUserSelect: "none" },
            },
            i,
          ],
          enabled: n || !l,
        });
      });
    var L = e.i(91730);
    let q = u.forwardRef(function (e, t) {
      let { render: r, className: s, disabled: n = !1, nativeButton: i = !0, ...a } = e,
        { store: o } = k(),
        l = o.useState("open"),
        { getButtonProps: u, buttonRef: c } = (0, L.useButton)({ disabled: n, native: i });
      return (0, Q.useRenderElement)("button", e, {
        state: { disabled: n },
        ref: [t, c],
        props: [
          {
            onClick: function (e) {
              l &&
                o.setOpen(!1, (0, C.createChangeEventDetails)(w.REASONS.closePress, e.nativeEvent));
            },
          },
          a,
          u,
        ],
      });
    });
    var K = e.i(89879);
    let W = u.forwardRef(function (e, t) {
      let { render: r, className: s, id: n, ...i } = e,
        { store: a } = k(),
        o = (0, K.useBaseUiId)(n);
      return (
        a.useSyncedValueWithCleanup("descriptionElementId", o),
        (0, Q.useRenderElement)("p", e, { ref: t, props: [{ id: o }, i] })
      );
    });
    var V = e.i(88306);
    let $ = (((s = {}).nestedDialogs = "--nested-dialogs"), s),
      H =
        (((n = {})[(n.open = F.CommonPopupDataAttributes.open)] = "open"),
        (n[(n.closed = F.CommonPopupDataAttributes.closed)] = "closed"),
        (n[(n.startingStyle = F.CommonPopupDataAttributes.startingStyle)] = "startingStyle"),
        (n[(n.endingStyle = F.CommonPopupDataAttributes.endingStyle)] = "endingStyle"),
        (n.nested = "data-nested"),
        (n.nestedDialogOpen = "data-nested-dialog-open"),
        n),
      G = u.createContext(void 0);
    function J() {
      let e = u.useContext(G);
      if (void 0 === e) throw Error((0, I.default)(26));
      return e;
    }
    var Y = e.i(89269),
      Z = e.i(92238);
    let X = {
        ...F.popupStateMapping,
        ...A.transitionStatusMapping,
        nestedDialogOpen: (e) => (e ? { [H.nestedDialogOpen]: "" } : null),
      },
      ee = u.forwardRef(function (e, t) {
        let { className: r, finalFocus: s, initialFocus: n, render: i, ...o } = e,
          { store: l } = k(),
          u = l.useState("descriptionElementId"),
          c = l.useState("disablePointerDismissal"),
          d = l.useState("floatingRootContext"),
          p = l.useState("popupProps"),
          h = l.useState("modal"),
          f = l.useState("mounted"),
          m = l.useState("nested"),
          g = l.useState("nestedOpenDialogCount"),
          b = l.useState("open"),
          v = l.useState("openMethod"),
          x = l.useState("titleElementId"),
          y = l.useState("transitionStatus"),
          S = l.useState("role");
        (J(),
          (0, Y.useOpenChangeComplete)({
            open: b,
            ref: l.context.popupRef,
            onComplete() {
              b && l.context.onOpenChangeComplete?.(!0);
            },
          }));
        let R =
            void 0 === n
              ? function (e) {
                  return "touch" !== e || l.context.popupRef.current;
                }
              : n,
          j = (0, Q.useRenderElement)("div", e, {
            state: { open: b, nested: m, transitionStatus: y, nestedDialogOpen: g > 0 },
            props: [
              p,
              {
                "aria-labelledby": x ?? void 0,
                "aria-describedby": u ?? void 0,
                role: S,
                tabIndex: -1,
                hidden: !f,
                onKeyDown(e) {
                  Z.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
                },
                style: { [$.nestedDialogs]: g },
              },
              o,
            ],
            ref: [t, l.context.popupRef, l.useStateSetter("popupElement")],
            stateAttributesMapping: X,
          });
        return (0, a.jsx)(V.FloatingFocusManager, {
          context: d,
          openInteractionType: v,
          disabled: !f,
          closeOnFocusOut: !c,
          initialFocus: R,
          returnFocus: s,
          modal: !1 !== h,
          restoreFocus: "popup",
          children: j,
        });
      });
    var et = e.i(58130),
      er = e.i(37692),
      es = e.i(36893);
    let en = u.forwardRef(function (e, t) {
        let { keepMounted: r = !1, ...s } = e,
          { store: n } = k(),
          i = n.useState("mounted"),
          o = n.useState("modal"),
          l = n.useState("open");
        return i || r
          ? (0, a.jsx)(G.Provider, {
              value: r,
              children: (0, a.jsxs)(er.FloatingPortal, {
                ref: t,
                ...s,
                children: [
                  i &&
                    !0 === o &&
                    (0, a.jsx)(es.InternalBackdrop, {
                      ref: n.context.internalBackdropRef,
                      inert: (0, et.inertValue)(!l),
                    }),
                  e.children,
                ],
              }),
            })
          : null;
      }),
      ei = u.forwardRef(function (e, t) {
        let { render: r, className: s, id: n, ...i } = e,
          { store: a } = k(),
          o = (0, K.useBaseUiId)(n);
        return (
          a.useSyncedValueWithCleanup("titleElementId", o),
          (0, Q.useRenderElement)("h2", e, { ref: t, props: [{ id: o }, i] })
        );
      });
    var ea = e.i(7335),
      eo = e.i(4012);
    let el = u.forwardRef(function (e, t) {
        let {
            render: r,
            className: s,
            disabled: n = !1,
            nativeButton: i = !0,
            id: a,
            payload: o,
            handle: l,
            ...c
          } = e,
          d = k(!0),
          p = l?.store ?? d?.store;
        if (!p) throw Error((0, I.default)(79));
        let h = (0, K.useBaseUiId)(a),
          f = p.useState("floatingRootContext"),
          m = p.useState("isOpenedByTrigger", h),
          g = u.useRef(null),
          { registerTrigger: b, isMountedByThisTrigger: v } = (0, O.useTriggerDataForwarding)(
            h,
            g,
            p,
            { payload: o },
          ),
          { getButtonProps: y, buttonRef: S } = (0, L.useButton)({ disabled: n, native: i }),
          R = (0, eo.useClick)(f, { enabled: null != f }),
          j = (0, x.useInteractions)([R]),
          C = p.useState("triggerProps", v);
        return (0, Q.useRenderElement)("button", e, {
          state: { disabled: n, open: m },
          ref: [S, t, b, g],
          props: [j.getReferenceProps(), C, { [ea.CLICK_TRIGGER_IDENTIFIER]: "", id: h }, c, y],
          stateAttributesMapping: F.triggerOpenStateMapping,
        });
      }),
      eu =
        (((i = {})[(i.open = F.CommonPopupDataAttributes.open)] = "open"),
        (i[(i.closed = F.CommonPopupDataAttributes.closed)] = "closed"),
        (i[(i.startingStyle = F.CommonPopupDataAttributes.startingStyle)] = "startingStyle"),
        (i[(i.endingStyle = F.CommonPopupDataAttributes.endingStyle)] = "endingStyle"),
        (i.nested = "data-nested"),
        (i.nestedDialogOpen = "data-nested-dialog-open"),
        i),
      ec = {
        ...F.popupStateMapping,
        ...A.transitionStatusMapping,
        nested: (e) => (e ? { [eu.nested]: "" } : null),
        nestedDialogOpen: (e) => (e ? { [eu.nestedDialogOpen]: "" } : null),
      },
      ed = u.forwardRef(function (e, t) {
        let { className: r, render: s, children: n, ...i } = e,
          a = J(),
          { store: o } = k(),
          l = o.useState("open"),
          u = o.useState("nested"),
          c = o.useState("transitionStatus"),
          d = o.useState("nestedOpenDialogCount"),
          p = o.useState("mounted");
        return (0, Q.useRenderElement)("div", e, {
          enabled: a || p,
          state: { open: l, nested: u, transitionStatus: c, nestedDialogOpen: d > 0 },
          ref: [t, o.useStateSetter("viewportElement")],
          stateAttributesMapping: ec,
          props: [
            {
              role: "presentation",
              hidden: !p,
              style: { pointerEvents: l ? void 0 : "none" },
              children: n,
            },
            i,
          ],
        });
      });
    class ep {
      constructor(e) {
        this.store = e ?? new _();
      }
      open(e) {
        let t = e ? this.store.context.triggerElements.getById(e) : void 0;
        this.store.setOpen(
          !0,
          (0, C.createChangeEventDetails)(w.REASONS.imperativeAction, void 0, t),
        );
      }
      openWithPayload(e) {
        (this.store.set("payload", e),
          this.store.setOpen(
            !0,
            (0, C.createChangeEventDetails)(w.REASONS.imperativeAction, void 0, void 0),
          ));
      }
      close() {
        this.store.setOpen(
          !1,
          (0, C.createChangeEventDetails)(w.REASONS.imperativeAction, void 0, void 0),
        );
      }
      get isOpen() {
        return this.store.state.open;
      }
    }
    function eh() {
      return new ep(new _({ modal: !0, disablePointerDismissal: !0, role: "alertdialog" }));
    }
    e.s(
      [
        "Backdrop",
        0,
        B,
        "Close",
        0,
        q,
        "Description",
        0,
        W,
        "Handle",
        () => ep,
        "Popup",
        0,
        ee,
        "Portal",
        0,
        en,
        "Root",
        () => M,
        "Title",
        0,
        ei,
        "Trigger",
        0,
        el,
        "Viewport",
        0,
        ed,
        "createHandle",
        () => eh,
      ],
      2756,
    );
    var ef = e.i(2756),
      ef = ef,
      em = e.i(75157),
      eg = e.i(7670);
    let eb = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
      ev = eg.clsx,
      ex =
        ((t =
          "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-xs font-medium focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none"),
        (r = {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
              outline:
                "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
              secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
              ghost:
                "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
              destructive:
                "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default:
                "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
              xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
              sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
              lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
              icon: "size-8",
              "icon-xs": "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
              "icon-sm": "size-7 rounded-none",
              "icon-lg": "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }),
        (e) => {
          var s;
          if ((null == r ? void 0 : r.variants) == null)
            return ev(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
          let { variants: n, defaultVariants: i } = r,
            a = Object.keys(n).map((t) => {
              let r = null == e ? void 0 : e[t],
                s = null == i ? void 0 : i[t];
              if (null === r) return null;
              let a = eb(r) || eb(s);
              return n[t][a];
            }),
            o =
              e &&
              Object.entries(e).reduce((e, t) => {
                let [r, s] = t;
                return (void 0 === s || (e[r] = s), e);
              }, {});
          return ev(
            t,
            a,
            null == r || null == (s = r.compoundVariants)
              ? void 0
              : s.reduce((e, t) => {
                  let { class: r, className: s, ...n } = t;
                  return Object.entries(n).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...i, ...o }[t])
                      : { ...i, ...o }[t] === r;
                  })
                    ? [...e, r, s]
                    : e;
                }, []),
            null == e ? void 0 : e.class,
            null == e ? void 0 : e.className,
          );
        });
    function ey(e) {
      let t,
        r = (0, o.c)(2);
      return (
        r[0] !== e ? ((t = (0, a.jsx)(ef.Root, { ...e })), (r[0] = e), (r[1] = t)) : (t = r[1]), t
      );
    }
    function eS(e) {
      let t,
        r,
        s = (0, o.c)(4);
      return (
        s[0] !== e ? (({ ...t } = e), (s[0] = e), (s[1] = t)) : (t = s[1]),
        s[2] !== t ? ((r = (0, a.jsx)(ef.Portal, { ...t })), (s[2] = t), (s[3] = r)) : (r = s[3]),
        r
      );
    }
    function eR(e) {
      let t,
        r,
        s,
        n,
        i = (0, o.c)(8);
      return (
        i[0] !== e
          ? (({ className: t, ...r } = e), (i[0] = e), (i[1] = t), (i[2] = r))
          : ((t = i[1]), (r = i[2])),
        i[3] !== t
          ? ((s = (0, em.cn)(
              "fixed inset-0 z-50 bg-black/50 data-[closed]:animate-out data-[closed]:fade-out-0 data-[starting-style]:animate-in data-[starting-style]:fade-in-0",
              t,
            )),
            (i[3] = t),
            (i[4] = s))
          : (s = i[4]),
        i[5] !== r || i[6] !== s
          ? ((n = (0, a.jsx)(ef.Backdrop, { className: s, ...r })),
            (i[5] = r),
            (i[6] = s),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function ej(e) {
      let t,
        r,
        s,
        n,
        i = (0, o.c)(8);
      return (
        i[0] !== e
          ? (({ className: t, ...r } = e), (i[0] = e), (i[1] = t), (i[2] = r))
          : ((t = i[1]), (r = i[2])),
        i[3] !== t
          ? ((s = (0, em.cn)(
              "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95",
              t,
            )),
            (i[3] = t),
            (i[4] = s))
          : (s = i[4]),
        i[5] !== r || i[6] !== s
          ? ((n = (0, a.jsx)(ef.Viewport, { className: s, ...r })),
            (i[5] = r),
            (i[6] = s),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function eC(e) {
      let t,
        r,
        s,
        n,
        i = (0, o.c)(8);
      return (
        i[0] !== e
          ? (({ className: t, ...r } = e), (i[0] = e), (i[1] = t), (i[2] = r))
          : ((t = i[1]), (r = i[2])),
        i[3] !== t ? ((s = (0, em.cn)("grid gap-4", t)), (i[3] = t), (i[4] = s)) : (s = i[4]),
        i[5] !== r || i[6] !== s
          ? ((n = (0, a.jsx)(ef.Popup, { className: s, ...r })), (i[5] = r), (i[6] = s), (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function ew(e) {
      let t,
        r,
        s,
        n,
        i = (0, o.c)(8);
      return (
        i[0] !== e
          ? (({ className: t, ...r } = e), (i[0] = e), (i[1] = t), (i[2] = r))
          : ((t = i[1]), (r = i[2])),
        i[3] !== t
          ? ((s = (0, em.cn)("text-lg font-semibold text-balance", t)), (i[3] = t), (i[4] = s))
          : (s = i[4]),
        i[5] !== r || i[6] !== s
          ? ((n = (0, a.jsx)(ef.Title, { className: s, ...r })), (i[5] = r), (i[6] = s), (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function eO(e) {
      let t,
        r,
        s,
        n,
        i = (0, o.c)(8);
      return (
        i[0] !== e
          ? (({ className: t, ...r } = e), (i[0] = e), (i[1] = t), (i[2] = r))
          : ((t = i[1]), (r = i[2])),
        i[3] !== t
          ? ((s = (0, em.cn)("text-sm text-muted-foreground text-pretty", t)),
            (i[3] = t),
            (i[4] = s))
          : (s = i[4]),
        i[5] !== r || i[6] !== s
          ? ((n = (0, a.jsx)(ef.Description, { className: s, ...r })),
            (i[5] = r),
            (i[6] = s),
            (i[7] = n))
          : (n = i[7]),
        n
      );
    }
    function eI(e) {
      let t,
        r,
        s,
        n,
        i,
        l = (0, o.c)(10);
      l[0] !== e
        ? (({ className: t, variant: s, ...r } = e), (l[0] = e), (l[1] = t), (l[2] = r), (l[3] = s))
        : ((t = l[1]), (r = l[2]), (s = l[3]));
      let u = void 0 === s ? "outline" : s;
      return (
        l[4] !== t || l[5] !== u
          ? ((n = (0, em.cn)(ex({ variant: u }), t)), (l[4] = t), (l[5] = u), (l[6] = n))
          : (n = l[6]),
        l[7] !== r || l[8] !== n
          ? ((i = (0, a.jsx)(ef.Close, { className: n, ...r })), (l[7] = r), (l[8] = n), (l[9] = i))
          : (i = l[9]),
        i
      );
    }
    var eE = e.i(63886);
    let ek =
      "inline-flex h-9 items-center justify-center border-2 border-red-700 bg-red-700 px-5 text-xs font-semibold text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2";
    function eD() {
      let e,
        t,
        r,
        s,
        n,
        i,
        m,
        g,
        b,
        v,
        x,
        y,
        S,
        R,
        j,
        C,
        w,
        O,
        I,
        E,
        k = (0, o.c)(41),
        D = (0, c.useParams)(),
        N = (0, c.useRouter)(),
        T = D.id;
      k[0] !== T
        ? ((e = ["project", T]),
          (t = () => f.client.project.getById({ id: T })),
          (k[0] = T),
          (k[1] = e),
          (k[2] = t))
        : ((e = k[1]), (t = k[2]));
      let U = !!T;
      k[3] !== e || k[4] !== t || k[5] !== U
        ? ((r = { queryKey: e, queryFn: t, enabled: U }),
          (k[3] = e),
          (k[4] = t),
          (k[5] = U),
          (k[6] = r))
        : (r = k[6]);
      let { data: P, isPending: _ } = (0, p.useQuery)(r);
      (k[7] !== T
        ? ((s = () => f.client.project.delete({ id: T })), (k[7] = T), (k[8] = s))
        : (s = k[8]),
        k[9] !== N
          ? ((n = () => {
              (h.toast.success("Project deleted"), N.push("/cms/projects"));
            }),
            (k[9] = N),
            (k[10] = n))
          : (n = k[10]),
        k[11] !== s || k[12] !== n
          ? ((i = { mutationFn: s, onSuccess: n, onError: eN }),
            (k[11] = s),
            (k[12] = n),
            (k[13] = i))
          : (i = k[13]));
      let M = (0, d.useMutation)(i),
        [Q, F] = (0, u.useState)(!1);
      k[14] !== M
        ? ((m = function () {
            (F(!1), M.mutate());
          }),
          (k[14] = M),
          (k[15] = m))
        : (m = k[15]);
      let A = m;
      if (_ || !P) {
        let e;
        return (
          k[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsxs)("div", {
                className: "max-w-2xl space-y-6",
                children: [
                  (0, a.jsx)("div", { className: "h-7 w-40 rounded bg-[var(--p-warm-white)]" }),
                  (0, a.jsx)("div", { className: "h-64 w-full rounded bg-[var(--p-warm-white)]" }),
                ],
              })),
              (k[16] = e))
            : (e = k[16]),
          e
        );
      }
      k[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("h1", {
                className: "text-2xl font-bold text-balance text-[var(--p-deep-walnut)]",
                children: "Edit project",
              }),
              (0, a.jsx)("div", {
                className: "mt-2 h-px w-10 bg-[var(--p-tan)]",
                "aria-hidden": !0,
              }),
            ],
          })),
          (k[17] = g))
        : (g = k[17]);
      let z = `/projects/${P.slug}`;
      if (
        (k[18] !== z
          ? ((b = (0, a.jsx)(l.default, {
              href: z,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2",
              children: "View on site",
            })),
            (k[18] = z),
            (k[19] = b))
          : (b = k[19]),
        k[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)("button", {
              type: "button",
              className: ek,
              onClick: () => F(!0),
              "aria-label": "Delete project",
              children: "Delete",
            })),
            (k[20] = v))
          : (v = k[20]),
        k[21] !== b
          ? ((x = (0, a.jsxs)("div", {
              className: "mb-8 flex items-start justify-between gap-4",
              children: [
                g,
                (0, a.jsxs)("div", { className: "flex shrink-0 gap-2", children: [b, v] }),
              ],
            })),
            (k[21] = b),
            (k[22] = x))
          : (x = k[22]),
        k[23] !== P)
      ) {
        let e;
        ((e = [...(P.images ?? [])].sort((e, t) => e.sortOrder - t.sortOrder).map((e) => e.url)),
          (y = {
            slug: P.slug,
            title: P.title,
            description: P.description,
            featuredImageUrl: P.featuredImageUrl ?? "",
            published: P.published,
            imageUrls: e,
          }),
          (k[23] = P),
          (k[24] = y));
      } else y = k[24];
      return (
        k[25] !== T || k[26] !== y
          ? ((S = (0, a.jsx)(eE.ProjectForm, { mode: "edit", id: T, initialData: y })),
            (k[25] = T),
            (k[26] = y),
            (k[27] = S))
          : (S = k[27]),
        k[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, a.jsx)(eR, {})), (k[28] = R))
          : (R = k[28]),
        k[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(ew, { children: "Delete project?" })),
            (C = (0, a.jsx)(eO, {
              children: "This cannot be undone. The project and its images will be removed.",
            })),
            (k[29] = j),
            (k[30] = C))
          : ((j = k[29]), (C = k[30])),
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, a.jsx)(eI, { variant: "outline", children: "Cancel" })), (k[31] = w))
          : (w = k[31]),
        k[32] !== A
          ? ((O = (0, a.jsxs)(eS, {
              children: [
                R,
                (0, a.jsx)(ej, {
                  children: (0, a.jsxs)(eC, {
                    children: [
                      j,
                      C,
                      (0, a.jsxs)("div", {
                        className: "flex justify-end gap-2",
                        children: [
                          w,
                          (0, a.jsx)("button", {
                            type: "button",
                            className: ek,
                            onClick: A,
                            children: "Delete",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })),
            (k[32] = A),
            (k[33] = O))
          : (O = k[33]),
        k[34] !== Q || k[35] !== O
          ? ((I = (0, a.jsx)(ey, { open: Q, onOpenChange: F, children: O })),
            (k[34] = Q),
            (k[35] = O),
            (k[36] = I))
          : (I = k[36]),
        k[37] !== x || k[38] !== S || k[39] !== I
          ? ((E = (0, a.jsxs)("div", { children: [x, S, I] })),
            (k[37] = x),
            (k[38] = S),
            (k[39] = I),
            (k[40] = E))
          : (E = k[40]),
        E
      );
    }
    function eN(e) {
      return h.toast.error(e.message ?? "Failed to delete");
    }
    e.s(["default", () => eD], 50362);
  },
]);
