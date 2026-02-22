module.exports = [
  790,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(11857);
    a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
  },
  84707,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(11857);
    a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"));
  },
  97647,
  (a) => {
    "use strict";
    a.i(790);
    var b = a.i(84707);
    a.n(b);
  },
  95936,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return i;
      },
      useLinkStatus: function () {
        return h.useLinkStatus;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(64240),
      g = a.r(7997),
      h = f._(a.r(97647));
    function i(a) {
      let b = a.legacyBehavior,
        c =
          "string" == typeof a.children ||
          "number" == typeof a.children ||
          "string" == typeof a.children?.type,
        d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
      return (
        !b ||
          c ||
          d ||
          (a.children?.type?.$$typeof === Symbol.for("react.lazy")
            ? console.error(
                "Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
              )
            : console.error(
                "Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
              )),
        (0, g.jsx)(h.default, { ...a })
      );
    }
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  3363,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(95936);
    function d() {
      return (0, b.jsxs)("div", {
        className: "flex min-h-dvh flex-col items-center justify-center bg-[var(--p-cream)] px-6",
        children: [
          (0, b.jsx)("span", {
            className:
              "mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]",
            children: "404",
          }),
          (0, b.jsx)("h1", {
            className: "text-2xl font-bold text-balance text-[var(--p-deep-walnut)]",
            children: "Page not found",
          }),
          (0, b.jsx)("div", {
            className: "mx-auto mt-4 h-px w-12 bg-[var(--p-tan)]",
            "aria-hidden": !0,
          }),
          (0, b.jsx)("p", {
            className: "mt-4 text-center text-sm text-pretty text-[var(--p-coffee-bean)]",
            children: "The page you are looking for does not exist or has been moved.",
          }),
          (0, b.jsx)(c.default, {
            href: "/",
            className:
              "mt-8 inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-6 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2",
            children: "Back to home",
          }),
        ],
      });
    }
    a.s(["default", () => d]);
  },
];

//# sourceMappingURL=_5b825777._.js.map
