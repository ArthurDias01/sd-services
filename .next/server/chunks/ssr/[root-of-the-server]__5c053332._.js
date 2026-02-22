module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  50645,
  (a) => {
    a.n(a.i(27572));
  },
  17537,
  (a) => {
    a.n(a.i(3363));
  },
  13718,
  (a) => {
    a.n(a.i(85523));
  },
  18198,
  (a) => {
    a.n(a.i(45518));
  },
  62212,
  (a) => {
    a.n(a.i(66114));
  },
  62270,
  (a) => {
    a.n(a.i(14115));
  },
  59459,
  (a) => {
    "use strict";
    a.s(["ProjectForm", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call ProjectForm() from the server but ProjectForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/app/cms/projects/project-form.tsx <module evaluation>",
      "ProjectForm",
    );
  },
  42171,
  (a) => {
    "use strict";
    a.s(["ProjectForm", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call ProjectForm() from the server but ProjectForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/app/cms/projects/project-form.tsx",
      "ProjectForm",
    );
  },
  24751,
  (a) => {
    "use strict";
    a.i(59459);
    var b = a.i(42171);
    a.n(b);
  },
  22065,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(24751);
    function d() {
      return (0, b.jsxs)("div", {
        children: [
          (0, b.jsxs)("div", {
            className: "mb-8",
            children: [
              (0, b.jsx)("h1", {
                className: "text-2xl font-bold text-balance text-[var(--p-deep-walnut)]",
                children: "New project",
              }),
              (0, b.jsx)("div", {
                className: "mt-2 h-px w-10 bg-[var(--p-tan)]",
                "aria-hidden": !0,
              }),
            ],
          }),
          (0, b.jsx)(c.ProjectForm, { mode: "create" }),
        ],
      });
    }
    a.s(["default", () => d]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c053332._.js.map
