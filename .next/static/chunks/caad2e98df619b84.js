(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  75367,
  (e) => {
    "use strict";
    var t = e.i(43476),
      s = e.i(932),
      a = e.i(71645),
      i = e.i(18566),
      n = e.i(46696),
      l = e.i(78938),
      r = e.i(17521),
      r = r;
    function c() {
      let e,
        a = (0, s.c)(1);
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("div", {
              className: "flex h-full items-center justify-center pt-8",
              children: (0, t.jsx)(r.default, { className: "animate-spin" }),
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      );
    }
    let o = () => {
      let e,
        a = (0, s.c)(1);
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": !0,
              className: "size-5",
              children: [
                (0, t.jsx)("path", {
                  d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                  fill: "#4285F4",
                }),
                (0, t.jsx)("path", {
                  d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                  fill: "#34A853",
                }),
                (0, t.jsx)("path", {
                  d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",
                  fill: "#FBBC05",
                }),
                (0, t.jsx)("path", {
                  d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                  fill: "#EA4335",
                }),
              ],
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      );
    };
    function d() {
      let e,
        n,
        r,
        d,
        m,
        h,
        p,
        u,
        f = (0, s.c)(13),
        v = (0, i.useRouter)(),
        { data: j, isPending: b } = l.authClient.useSession();
      if (
        (f[0] !== v || f[1] !== j?.user
          ? ((e = () => {
              j?.user && v.replace("/cms/projects");
            }),
            (f[0] = v),
            (f[1] = j?.user),
            (f[2] = e))
          : (e = f[2]),
        f[3] !== v || f[4] !== j ? ((n = [j, v]), (f[3] = v), (f[4] = j), (f[5] = n)) : (n = f[5]),
        (0, a.useEffect)(e, n),
        b || j?.user)
      ) {
        let e;
        return (
          f[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-dvh items-center justify-center bg-[var(--p-cream)]",
                children: (0, t.jsx)(c, {}),
              })),
              (f[6] = e))
            : (e = f[6]),
          e
        );
      }
      return (
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsxs)("div", {
              className:
                "hidden flex-1 flex-col justify-between bg-[var(--p-deep-walnut)] p-12 lg:flex",
              children: [
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("span", {
                    className:
                      "text-xs font-semibold uppercase tracking-widest text-[var(--p-tan)]",
                    children: "Content Studio",
                  }),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("p", {
                      className:
                        "text-3xl font-bold leading-snug text-balance text-[var(--p-white)]",
                      children: "“Craftsmanship is not a shortcut. It is the long way done right.”",
                    }),
                    (0, t.jsx)("div", {
                      className: "mt-6 h-px w-12 bg-[var(--p-tan)]",
                      "aria-hidden": !0,
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "mt-4 text-xs font-medium uppercase tracking-widest text-[var(--p-tan)]",
                      children: "Custom Cabinetry",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("p", {
                    className: "text-xs text-[var(--p-white)]/40",
                    children: "Authorised access only",
                  }),
                }),
              ],
            })),
            (f[7] = r))
          : (r = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("span", {
              className:
                "mb-6 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)] lg:hidden",
              children: "Content Studio",
            })),
            (m = (0, t.jsx)("h1", {
              className: "text-2xl font-bold text-balance text-[var(--p-deep-walnut)]",
              children: "Sign in",
            })),
            (h = (0, t.jsx)("div", {
              className: "mt-3 h-px w-10 bg-[var(--p-tan)]",
              "aria-hidden": !0,
            })),
            (p = (0, t.jsx)("p", {
              className: "mt-4 text-sm text-pretty text-[var(--p-coffee-bean)]",
              children: "Use your Google account to access the content management area.",
            })),
            (f[8] = d),
            (f[9] = m),
            (f[10] = h),
            (f[11] = p))
          : ((d = f[8]), (m = f[9]), (h = f[10]), (p = f[11])),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsxs)("div", {
              className: "flex min-h-dvh",
              children: [
                r,
                (0, t.jsx)("div", {
                  className:
                    "flex flex-1 flex-col items-center justify-center bg-[var(--p-cream)] px-6 py-12",
                  children: (0, t.jsxs)("div", {
                    className: "w-full max-w-sm",
                    children: [
                      d,
                      m,
                      h,
                      p,
                      (0, t.jsx)("div", {
                        className: "mt-8",
                        children: (0, t.jsxs)("button", {
                          type: "button",
                          onClick: x,
                          className:
                            "flex w-full items-center justify-center gap-3 border border-[var(--p-tan)] bg-[var(--p-white)] px-5 py-3 text-sm font-semibold text-[var(--p-deep-walnut)] outline-none transition-shadow hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2",
                          children: [(0, t.jsx)(o, {}), "Continue with Google"],
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-8 text-center text-xs text-[var(--p-toffee)]/70",
                        children: "Only authorised administrators can access this area.",
                      }),
                    ],
                  }),
                }),
              ],
            })),
            (f[12] = u))
          : (u = f[12]),
        u
      );
    }
    function x() {
      let e = `${window.location.origin}/cms/projects`;
      l.authClient.signIn.social({ provider: "google", callbackURL: e }, { onError: m });
    }
    function m(e) {
      n.toast.error(e.error?.message ?? e.error?.statusText ?? "Sign in failed");
    }
    e.s(["default", () => d], 75367);
  },
]);
