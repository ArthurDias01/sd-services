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
  27992,
  (a) => {
    "use strict";
    a.s(["HeroSection", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/hero-section.tsx <module evaluation>",
      "HeroSection",
    );
  },
  79871,
  (a) => {
    "use strict";
    a.s(["HeroSection", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/hero-section.tsx",
      "HeroSection",
    );
  },
  48249,
  (a) => {
    "use strict";
    a.i(27992);
    var b = a.i(79871);
    a.n(b);
  },
  75364,
  (a) => {
    "use strict";
    a.s(["ProjectCard", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call ProjectCard() from the server but ProjectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/project-card.tsx <module evaluation>",
      "ProjectCard",
    );
  },
  61532,
  (a) => {
    "use strict";
    a.s(["ProjectCard", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call ProjectCard() from the server but ProjectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/project-card.tsx",
      "ProjectCard",
    );
  },
  16774,
  (a) => {
    "use strict";
    a.i(75364);
    var b = a.i(61532);
    a.n(b);
  },
  60168,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(95936),
      d = a.i(6460),
      e = a.i(48249),
      f = a.i(16774);
    let g = [
      {
        title: "Kitchen Cabinetry",
        desc: "Full custom kitchen cabinetry crafted to your exact floor plan — handpicked hardwoods, soft-close hardware, and layouts that maximise every inch.",
        cta: "See kitchen projects",
      },
      {
        title: "Walk-in Closets",
        desc: "Bespoke closet systems built around your wardrobe and lifestyle. Cedar-lined, fully fitted, and finished to a standard you won't find in showrooms.",
        cta: "Explore closet work",
      },
      {
        title: "Bathroom Vanities",
        desc: "Custom vanities and built-in storage that turn a bathroom into a retreat — waterproof construction, solid-wood fronts, and integrated lighting options.",
        cta: "View vanity projects",
      },
      {
        title: "Built-ins & Millwork",
        desc: "Floating shelves, home offices, entertainment walls, and architectural millwork built to complement your interior — not fight it.",
        cta: "Browse built-ins",
      },
    ];
    async function h() {
      let a = [],
        h = null,
        i = null,
        j = null;
      try {
        [a, h, i, j] = await Promise.all([
          d.client.project.list(),
          d.client.setting.get({ key: "hero_image_url" }),
          d.client.setting.get({ key: "contact_email" }),
          d.client.setting.get({ key: "contact_phone" }),
        ]);
      } catch {}
      let k = h || a[0]?.featuredImageUrl || null,
        l =
          k && k.startsWith("/") && process.env.R2_PUBLIC_URL
            ? `${process.env.R2_PUBLIC_URL.replace(/\/$/, "")}${k}`
            : k,
        m = i || "contact@example.com",
        n = j || null;
      return (0, b.jsxs)("div", {
        className: "bg-[var(--p-white)] text-[var(--p-dark-walnut)]",
        children: [
          (0, b.jsx)(e.HeroSection, { heroImage: l }),
          (0, b.jsx)("section", {
            className: "border-t border-[var(--p-tan)]/30 bg-[var(--p-cream)] py-20 md:py-24",
            children: (0, b.jsxs)("div", {
              className: "mx-auto max-w-6xl px-6",
              children: [
                (0, b.jsx)("span", {
                  className:
                    "mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]",
                  children: "What we craft",
                }),
                (0, b.jsx)("h2", {
                  className:
                    "text-2xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-3xl",
                  children: "Luxury cabinetry, tailored to you",
                }),
                (0, b.jsx)("div", {
                  className: "mt-4 h-px w-12 bg-[var(--p-tan)]",
                  "aria-hidden": !0,
                }),
                (0, b.jsx)("p", {
                  className: "mt-6 max-w-2xl text-sm text-pretty text-[var(--p-coffee-bean)]",
                  children:
                    "Every piece we build is designed around your space, your taste, and your life — using premium hardwoods, precision joinery, and finishes you won't find off the shelf.",
                }),
                (0, b.jsx)("div", {
                  className: "mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
                  children: g.map((a) =>
                    (0, b.jsxs)(
                      "div",
                      {
                        children: [
                          (0, b.jsx)("h3", {
                            className:
                              "text-sm font-bold uppercase tracking-widest text-[var(--p-deep-walnut)]",
                            children: a.title,
                          }),
                          (0, b.jsx)("div", {
                            className: "mt-2 h-px w-6 bg-[var(--p-tan)]",
                            "aria-hidden": !0,
                          }),
                          (0, b.jsx)("p", {
                            className: "mt-3 text-sm text-pretty text-[var(--p-coffee-bean)]",
                            children: a.desc,
                          }),
                        ],
                      },
                      a.title,
                    ),
                  ),
                }),
                (0, b.jsx)("div", {
                  className: "mt-12",
                  children: (0, b.jsxs)(c.default, {
                    href: "/projects",
                    className:
                      "inline-flex items-center gap-2 text-sm font-semibold text-[var(--p-toffee)] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2",
                    children: [
                      "See our work",
                      (0, b.jsx)("span", { "aria-hidden": !0, children: "→" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, b.jsx)("section", {
            className: "bg-[var(--p-white)] py-20 md:py-24",
            children: (0, b.jsxs)("div", {
              className: "mx-auto max-w-6xl px-6",
              children: [
                (0, b.jsx)("span", {
                  className:
                    "mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]",
                  children: "Portfolio",
                }),
                (0, b.jsx)("h2", {
                  className:
                    "text-2xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-3xl",
                  children: "Recent projects",
                }),
                (0, b.jsx)("div", {
                  className: "mt-4 h-px w-12 bg-[var(--p-tan)]",
                  "aria-hidden": !0,
                }),
                0 === a.length
                  ? (0, b.jsx)("p", {
                      className: "mt-10 text-pretty text-[var(--p-coffee-bean)]",
                      children: "No projects to show yet.",
                    })
                  : (0, b.jsxs)(b.Fragment, {
                      children: [
                        (0, b.jsx)("div", {
                          className:
                            "relative mt-12 grid gap-px bg-[var(--p-tan)]/30 sm:grid-cols-2 lg:grid-cols-3",
                          children: a.slice(0, 6).map((a) =>
                            (0, b.jsx)(
                              f.ProjectCard,
                              {
                                id: a.id,
                                slug: a.slug,
                                title: a.title,
                                featuredImageUrl: a.featuredImageUrl,
                                description: a.description ?? void 0,
                              },
                              a.id,
                            ),
                          ),
                        }),
                        a.length > 6 &&
                          (0, b.jsx)("div", {
                            className: "mt-12 flex justify-center",
                            children: (0, b.jsx)(c.default, {
                              href: "/projects",
                              className:
                                "inline-flex h-11 items-center justify-center border-2 border-[var(--p-toffee)] bg-transparent px-7 text-sm font-semibold text-[var(--p-toffee)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2",
                              children: "View all projects",
                            }),
                          }),
                      ],
                    }),
              ],
            }),
          }),
          (0, b.jsx)("section", {
            id: "contact",
            className: "border-t border-[var(--p-tan)]/30 bg-[var(--p-cream)] py-20 md:py-24",
            children: (0, b.jsxs)("div", {
              className: "mx-auto max-w-xl px-6 text-center",
              children: [
                (0, b.jsx)("span", {
                  className:
                    "mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]",
                  children: "Contact",
                }),
                (0, b.jsx)("h2", {
                  className:
                    "text-2xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-3xl",
                  children: "Let’s build something beautiful",
                }),
                (0, b.jsx)("div", {
                  className: "mx-auto mt-4 h-px w-12 bg-[var(--p-tan)]",
                  "aria-hidden": !0,
                }),
                (0, b.jsx)("p", {
                  className: "mt-6 text-pretty text-[var(--p-coffee-bean)]",
                  children:
                    "Reach out for a custom quote or to discuss your project. We work with clients across the United States for luxury cabinetry and millwork.",
                }),
                (0, b.jsx)("div", {
                  className: "mt-8",
                  children: (0, b.jsx)("a", {
                    href: `mailto:${m}?subject=Custom%20cabinetry%20quote`,
                    className:
                      "inline-flex h-11 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-8 text-sm font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2",
                    children: "Request a quote",
                  }),
                }),
                (0, b.jsxs)("p", {
                  className: "mt-4 text-xs text-[var(--p-toffee)]",
                  children: [
                    "Or email us at",
                    " ",
                    (0, b.jsx)("a", {
                      href: `mailto:${m}`,
                      className: "underline underline-offset-2 hover:no-underline",
                      children: m,
                    }),
                  ],
                }),
                n &&
                  (0, b.jsxs)("p", {
                    className: "mt-2 text-xs text-[var(--p-toffee)]",
                    children: [
                      "Or call us at",
                      " ",
                      (0, b.jsx)("a", {
                        href: `tel:${n.replace(/[\s()-]/g, "")}`,
                        className: "underline underline-offset-2 hover:no-underline",
                        children: n,
                      }),
                    ],
                  }),
              ],
            }),
          }),
          (0, b.jsx)("footer", {
            className: "border-t border-[var(--p-tan)]/30 bg-[var(--p-white)] py-8",
            children: (0, b.jsxs)("div", {
              className: "mx-auto flex max-w-6xl items-center justify-between px-6",
              children: [
                (0, b.jsxs)("p", {
                  className: "text-xs text-[var(--p-toffee)]",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " Custom Cabinetry. All rights reserved.",
                  ],
                }),
                (0, b.jsx)(c.default, {
                  href: "/login",
                  className:
                    "text-xs text-[var(--p-tan)] outline-none hover:text-[var(--p-toffee)] focus-visible:underline",
                  children: "Admin",
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => h]);
  },
  23804,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/node_modules_next_dist_981dc6eb._.js",
          "server/chunks/ssr/node_modules_next_99977b66._.js",
        ].map((b) => a.l(b)),
      ).then(() => b(5246)),
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e986c484._.js.map
