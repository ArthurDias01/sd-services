module.exports = [
  58429,
  (a) => {
    "use strict";
    let b, c;
    var d,
      e,
      f,
      g = a.i(87924),
      h = a.i(38246),
      i = a.i(72131),
      j = a.i(50944),
      k = a.i(70025),
      l = a.i(33217),
      m = a.i(23292),
      n = a.i(16570);
    (a.s([], 22149), a.i(22149));
    var o = a.i(95337),
      p = a.i(71812),
      q = a.i(66173),
      r = a.i(60349),
      s = a.i(25158),
      t = a.i(59750),
      u = a.i(88074),
      v = a.i(6239),
      w = a.i(8273),
      x = a.i(62255),
      y = a.i(74348),
      z = a.i(86089),
      A = a.i(21376);
    let B = i.createContext(void 0);
    function C(a) {
      let b = i.useContext(B);
      if (!1 === a && void 0 === b) throw Error((0, A.default)(27));
      return b;
    }
    var D = a.i(458),
      E = a.i(43216),
      F = a.i(78462),
      G = a.i(21017);
    let H = {
      ...F.popupStoreSelectors,
      modal: (0, D.createSelector)((a) => a.modal),
      nested: (0, D.createSelector)((a) => a.nested),
      nestedOpenDialogCount: (0, D.createSelector)((a) => a.nestedOpenDialogCount),
      disablePointerDismissal: (0, D.createSelector)((a) => a.disablePointerDismissal),
      openMethod: (0, D.createSelector)((a) => a.openMethod),
      descriptionElementId: (0, D.createSelector)((a) => a.descriptionElementId),
      titleElementId: (0, D.createSelector)((a) => a.titleElementId),
      viewportElement: (0, D.createSelector)((a) => a.viewportElement),
      role: (0, D.createSelector)((a) => a.role),
    };
    class I extends E.ReactStore {
      constructor(a) {
        super(
          (function (a = {}) {
            return {
              ...(0, F.createInitialPopupStoreState)(),
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
              ...a,
            };
          })(a),
          {
            popupRef: i.createRef(),
            backdropRef: i.createRef(),
            internalBackdropRef: i.createRef(),
            outsidePressEnabledRef: { current: !0 },
            triggerElements: new G.PopupTriggerMap(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
          },
          H,
        );
      }
      setOpen = (a, b) => {
        if (
          ((b.preventUnmountOnClose = () => {
            this.set("preventUnmountingOnClose", !0);
          }),
          a ||
            null != b.trigger ||
            null == this.state.activeTriggerId ||
            (b.trigger = this.state.activeTriggerElement ?? void 0),
          this.context.onOpenChange?.(a, b),
          b.isCanceled)
        )
          return;
        let c = { open: a, nativeEvent: b.event, reason: b.reason, nested: this.state.nested };
        this.state.floatingRootContext.context.events?.emit("openchange", c);
        let d = { open: a },
          e = b.trigger?.id ?? null;
        ((e || a) && ((d.activeTriggerId = e), (d.activeTriggerElement = b.trigger ?? null)),
          this.update(d));
      };
    }
    function J(a) {
      let {
          children: b,
          open: c,
          defaultOpen: d = !1,
          onOpenChange: e,
          onOpenChangeComplete: f,
          actionsRef: h,
          handle: j,
          triggerId: k,
          defaultTriggerId: l = null,
        } = a,
        m = C(),
        n = !!m,
        A = (0, o.useRefWithInit)(
          () =>
            j?.store ??
            new I({
              open: d,
              openProp: c,
              activeTriggerId: l,
              triggerIdProp: k,
              modal: !0,
              disablePointerDismissal: !0,
              nested: n,
              role: "alertdialog",
            }),
        ).current;
      (A.useControlledProp("openProp", c),
        A.useControlledProp("triggerIdProp", k),
        A.useSyncedValue("nested", n),
        A.useContextCallback("onOpenChange", e),
        A.useContextCallback("onOpenChangeComplete", f));
      let D = A.useState("payload");
      !(function (a) {
        let { store: b, parentContext: c, actionsRef: d } = a,
          e = b.useState("open"),
          f = b.useState("disablePointerDismissal"),
          g = b.useState("modal"),
          h = b.useState("popupElement"),
          { openMethod: j, triggerProps: k, reset: l } = (0, w.useOpenInteractionType)(e);
        (0, z.useImplicitActiveTrigger)(b);
        let { forceUnmount: m } = (0, z.useOpenStateTransitions)(e, b, () => {
            l();
          }),
          n = (0, p.useStableCallback)((a) => {
            let c = (0, x.createChangeEventDetails)(a);
            return (
              (c.preventUnmountOnClose = () => {
                b.set("preventUnmountingOnClose", !0);
              }),
              c
            );
          }),
          o = i.useCallback(() => {
            b.setOpen(!1, n(y.REASONS.imperativeAction));
          }, [b, n]);
        i.useImperativeHandle(d, () => ({ unmount: m, close: o }), [m, o]);
        let A = (0, u.useSyncedFloatingRootContext)({
            popupStore: b,
            onOpenChange: b.setOpen,
            treatPopupAsFloatingElement: !0,
            noEmit: !0,
          }),
          [B, C] = i.useState(0),
          D = 0 === B,
          E = (0, t.useRole)(A),
          F = (0, r.useDismiss)(A, {
            outsidePressEvent: () =>
              b.context.internalBackdropRef.current || b.context.backdropRef.current
                ? "intentional"
                : { mouse: "trap-focus" === g ? "sloppy" : "intentional", touch: "sloppy" },
            outsidePress(a) {
              if (
                !b.context.outsidePressEnabledRef.current ||
                ("button" in a && 0 !== a.button) ||
                ("touches" in a && 1 !== a.touches.length)
              )
                return !1;
              let c = (0, v.getTarget)(a);
              return (
                !!D &&
                !f &&
                (!g ||
                  (!b.context.internalBackdropRef.current && !b.context.backdropRef.current) ||
                  b.context.internalBackdropRef.current === c ||
                  b.context.backdropRef.current === c ||
                  ((0, v.contains)(c, h) && !c?.hasAttribute("data-base-ui-portal")))
              );
            },
            escapeKey: D,
          });
        (0, q.useScrollLock)(e && !0 === g, h);
        let {
          getReferenceProps: G,
          getFloatingProps: H,
          getTriggerProps: I,
        } = (0, s.useInteractions)([E, F]);
        (b.useContextCallback("onNestedDialogOpen", (a) => {
          C(a + 1);
        }),
          b.useContextCallback("onNestedDialogClose", () => {
            C(0);
          }),
          i.useEffect(
            () => (
              c?.onNestedDialogOpen && e && c.onNestedDialogOpen(B),
              c?.onNestedDialogClose && !e && c.onNestedDialogClose(),
              () => {
                c?.onNestedDialogClose && e && c.onNestedDialogClose();
              }
            ),
            [e, c, B],
          ));
        let J = i.useMemo(() => G(k), [G, k]),
          K = i.useMemo(() => I(k), [I, k]),
          L = i.useMemo(() => H(), [H]);
        b.useSyncedValues({
          openMethod: j,
          activeTriggerProps: J,
          inactiveTriggerProps: K,
          popupProps: L,
          floatingRootContext: A,
          nestedOpenDialogCount: B,
        });
      })({
        store: A,
        actionsRef: h,
        parentContext: m?.store.context,
        onOpenChange: e,
        triggerIdProp: k,
      });
      let E = i.useMemo(() => ({ store: A }), [A]);
      return (0, g.jsx)(B.Provider, {
        value: E,
        children: "function" == typeof b ? b({ payload: D }) : b,
      });
    }
    var K = a.i(2840),
      L = a.i(4987),
      M = a.i(58418);
    let N = { ...L.popupStateMapping, ...M.transitionStatusMapping },
      O = i.forwardRef(function (a, b) {
        let { render: c, className: d, forceRender: e = !1, ...f } = a,
          { store: g } = C(),
          h = g.useState("open"),
          i = g.useState("nested"),
          j = g.useState("mounted"),
          k = g.useState("transitionStatus");
        return (0, K.useRenderElement)("div", a, {
          state: { open: h, transitionStatus: k },
          ref: [g.context.backdropRef, b],
          stateAttributesMapping: N,
          props: [
            {
              role: "presentation",
              hidden: !j,
              style: { userSelect: "none", WebkitUserSelect: "none" },
            },
            f,
          ],
          enabled: e || !i,
        });
      });
    var P = a.i(45819);
    let Q = i.forwardRef(function (a, b) {
      let { render: c, className: d, disabled: e = !1, nativeButton: f = !0, ...g } = a,
        { store: h } = C(),
        i = h.useState("open"),
        { getButtonProps: j, buttonRef: k } = (0, P.useButton)({ disabled: e, native: f });
      return (0, K.useRenderElement)("button", a, {
        state: { disabled: e },
        ref: [b, k],
        props: [
          {
            onClick: function (a) {
              i &&
                h.setOpen(!1, (0, x.createChangeEventDetails)(y.REASONS.closePress, a.nativeEvent));
            },
          },
          g,
          j,
        ],
      });
    });
    var R = a.i(98134);
    let S = i.forwardRef(function (a, b) {
      let { render: c, className: d, id: e, ...f } = a,
        { store: g } = C(),
        h = (0, R.useBaseUiId)(e);
      return (
        g.useSyncedValueWithCleanup("descriptionElementId", h),
        (0, K.useRenderElement)("p", a, { ref: b, props: [{ id: h }, f] })
      );
    });
    var T = a.i(15815);
    let U = (((d = {}).nestedDialogs = "--nested-dialogs"), d),
      V =
        (((e = {})[(e.open = L.CommonPopupDataAttributes.open)] = "open"),
        (e[(e.closed = L.CommonPopupDataAttributes.closed)] = "closed"),
        (e[(e.startingStyle = L.CommonPopupDataAttributes.startingStyle)] = "startingStyle"),
        (e[(e.endingStyle = L.CommonPopupDataAttributes.endingStyle)] = "endingStyle"),
        (e.nested = "data-nested"),
        (e.nestedDialogOpen = "data-nested-dialog-open"),
        e),
      W = i.createContext(void 0);
    function X() {
      let a = i.useContext(W);
      if (void 0 === a) throw Error((0, A.default)(26));
      return a;
    }
    var Y = a.i(2471),
      Z = a.i(32049);
    let $ = {
        ...L.popupStateMapping,
        ...M.transitionStatusMapping,
        nestedDialogOpen: (a) => (a ? { [V.nestedDialogOpen]: "" } : null),
      },
      _ = i.forwardRef(function (a, b) {
        let { className: c, finalFocus: d, initialFocus: e, render: f, ...h } = a,
          { store: i } = C(),
          j = i.useState("descriptionElementId"),
          k = i.useState("disablePointerDismissal"),
          l = i.useState("floatingRootContext"),
          m = i.useState("popupProps"),
          n = i.useState("modal"),
          o = i.useState("mounted"),
          p = i.useState("nested"),
          q = i.useState("nestedOpenDialogCount"),
          r = i.useState("open"),
          s = i.useState("openMethod"),
          t = i.useState("titleElementId"),
          u = i.useState("transitionStatus"),
          v = i.useState("role");
        (X(),
          (0, Y.useOpenChangeComplete)({
            open: r,
            ref: i.context.popupRef,
            onComplete() {
              r && i.context.onOpenChangeComplete?.(!0);
            },
          }));
        let w =
            void 0 === e
              ? function (a) {
                  return "touch" !== a || i.context.popupRef.current;
                }
              : e,
          x = (0, K.useRenderElement)("div", a, {
            state: { open: r, nested: p, transitionStatus: u, nestedDialogOpen: q > 0 },
            props: [
              m,
              {
                "aria-labelledby": t ?? void 0,
                "aria-describedby": j ?? void 0,
                role: v,
                tabIndex: -1,
                hidden: !o,
                onKeyDown(a) {
                  Z.COMPOSITE_KEYS.has(a.key) && a.stopPropagation();
                },
                style: { [U.nestedDialogs]: q },
              },
              h,
            ],
            ref: [b, i.context.popupRef, i.useStateSetter("popupElement")],
            stateAttributesMapping: $,
          });
        return (0, g.jsx)(T.FloatingFocusManager, {
          context: l,
          openInteractionType: s,
          disabled: !o,
          closeOnFocusOut: !k,
          initialFocus: w,
          returnFocus: d,
          modal: !1 !== n,
          restoreFocus: "popup",
          children: x,
        });
      });
    var aa = a.i(83065),
      ab = a.i(87263),
      ac = a.i(32654);
    let ad = i.forwardRef(function (a, b) {
        let { keepMounted: c = !1, ...d } = a,
          { store: e } = C(),
          f = e.useState("mounted"),
          h = e.useState("modal"),
          i = e.useState("open");
        return f || c
          ? (0, g.jsx)(W.Provider, {
              value: c,
              children: (0, g.jsxs)(ab.FloatingPortal, {
                ref: b,
                ...d,
                children: [
                  f &&
                    !0 === h &&
                    (0, g.jsx)(ac.InternalBackdrop, {
                      ref: e.context.internalBackdropRef,
                      inert: (0, aa.inertValue)(!i),
                    }),
                  a.children,
                ],
              }),
            })
          : null;
      }),
      ae = i.forwardRef(function (a, b) {
        let { render: c, className: d, id: e, ...f } = a,
          { store: g } = C(),
          h = (0, R.useBaseUiId)(e);
        return (
          g.useSyncedValueWithCleanup("titleElementId", h),
          (0, K.useRenderElement)("h2", a, { ref: b, props: [{ id: h }, f] })
        );
      });
    var af = a.i(19382),
      ag = a.i(58240);
    let ah = i.forwardRef(function (a, b) {
        let {
            render: c,
            className: d,
            disabled: e = !1,
            nativeButton: f = !0,
            id: g,
            payload: h,
            handle: j,
            ...k
          } = a,
          l = C(!0),
          m = j?.store ?? l?.store;
        if (!m) throw Error((0, A.default)(79));
        let n = (0, R.useBaseUiId)(g),
          o = m.useState("floatingRootContext"),
          p = m.useState("isOpenedByTrigger", n),
          q = i.useRef(null),
          { registerTrigger: r, isMountedByThisTrigger: t } = (0, z.useTriggerDataForwarding)(
            n,
            q,
            m,
            { payload: h },
          ),
          { getButtonProps: u, buttonRef: v } = (0, P.useButton)({ disabled: e, native: f }),
          w = (0, ag.useClick)(o, { enabled: null != o }),
          x = (0, s.useInteractions)([w]),
          y = m.useState("triggerProps", t);
        return (0, K.useRenderElement)("button", a, {
          state: { disabled: e, open: p },
          ref: [v, b, r, q],
          props: [x.getReferenceProps(), y, { [af.CLICK_TRIGGER_IDENTIFIER]: "", id: n }, k, u],
          stateAttributesMapping: L.triggerOpenStateMapping,
        });
      }),
      ai =
        (((f = {})[(f.open = L.CommonPopupDataAttributes.open)] = "open"),
        (f[(f.closed = L.CommonPopupDataAttributes.closed)] = "closed"),
        (f[(f.startingStyle = L.CommonPopupDataAttributes.startingStyle)] = "startingStyle"),
        (f[(f.endingStyle = L.CommonPopupDataAttributes.endingStyle)] = "endingStyle"),
        (f.nested = "data-nested"),
        (f.nestedDialogOpen = "data-nested-dialog-open"),
        f),
      aj = {
        ...L.popupStateMapping,
        ...M.transitionStatusMapping,
        nested: (a) => (a ? { [ai.nested]: "" } : null),
        nestedDialogOpen: (a) => (a ? { [ai.nestedDialogOpen]: "" } : null),
      },
      ak = i.forwardRef(function (a, b) {
        let { className: c, render: d, children: e, ...f } = a,
          g = X(),
          { store: h } = C(),
          i = h.useState("open"),
          j = h.useState("nested"),
          k = h.useState("transitionStatus"),
          l = h.useState("nestedOpenDialogCount"),
          m = h.useState("mounted");
        return (0, K.useRenderElement)("div", a, {
          enabled: g || m,
          state: { open: i, nested: j, transitionStatus: k, nestedDialogOpen: l > 0 },
          ref: [b, h.useStateSetter("viewportElement")],
          stateAttributesMapping: aj,
          props: [
            {
              role: "presentation",
              hidden: !m,
              style: { pointerEvents: i ? void 0 : "none" },
              children: e,
            },
            f,
          ],
        });
      });
    class al {
      constructor(a) {
        this.store = a ?? new I();
      }
      open(a) {
        let b = a ? this.store.context.triggerElements.getById(a) : void 0;
        this.store.setOpen(
          !0,
          (0, x.createChangeEventDetails)(y.REASONS.imperativeAction, void 0, b),
        );
      }
      openWithPayload(a) {
        (this.store.set("payload", a),
          this.store.setOpen(
            !0,
            (0, x.createChangeEventDetails)(y.REASONS.imperativeAction, void 0, void 0),
          ));
      }
      close() {
        this.store.setOpen(
          !1,
          (0, x.createChangeEventDetails)(y.REASONS.imperativeAction, void 0, void 0),
        );
      }
      get isOpen() {
        return this.store.state.open;
      }
    }
    function am() {
      return new al(new I({ modal: !0, disablePointerDismissal: !0, role: "alertdialog" }));
    }
    a.s(
      [
        "Backdrop",
        0,
        O,
        "Close",
        0,
        Q,
        "Description",
        0,
        S,
        "Handle",
        () => al,
        "Popup",
        0,
        _,
        "Portal",
        0,
        ad,
        "Root",
        () => J,
        "Title",
        0,
        ae,
        "Trigger",
        0,
        ah,
        "Viewport",
        0,
        ak,
        "createHandle",
        () => am,
      ],
      55314,
    );
    var an = a.i(55314),
      an = an,
      ao = a.i(68114),
      ap = a.i(98621);
    let aq = (a) => ("boolean" == typeof a ? `${a}` : 0 === a ? "0" : a),
      ar = ap.clsx,
      as =
        ((b =
          "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-xs font-medium focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none"),
        (c = {
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
        (a) => {
          var d;
          if ((null == c ? void 0 : c.variants) == null)
            return ar(b, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
          let { variants: e, defaultVariants: f } = c,
            g = Object.keys(e).map((b) => {
              let c = null == a ? void 0 : a[b],
                d = null == f ? void 0 : f[b];
              if (null === c) return null;
              let g = aq(c) || aq(d);
              return e[b][g];
            }),
            h =
              a &&
              Object.entries(a).reduce((a, b) => {
                let [c, d] = b;
                return (void 0 === d || (a[c] = d), a);
              }, {});
          return ar(
            b,
            g,
            null == c || null == (d = c.compoundVariants)
              ? void 0
              : d.reduce((a, b) => {
                  let { class: c, className: d, ...e } = b;
                  return Object.entries(e).every((a) => {
                    let [b, c] = a;
                    return Array.isArray(c)
                      ? c.includes({ ...f, ...h }[b])
                      : { ...f, ...h }[b] === c;
                  })
                    ? [...a, c, d]
                    : a;
                }, []),
            null == a ? void 0 : a.class,
            null == a ? void 0 : a.className,
          );
        });
    function at(a) {
      return (0, g.jsx)(an.Root, { ...a });
    }
    function au({ ...a }) {
      return (0, g.jsx)(an.Portal, { ...a });
    }
    function av({ className: a, ...b }) {
      return (0, g.jsx)(an.Backdrop, {
        className: (0, ao.cn)(
          "fixed inset-0 z-50 bg-black/50 data-[closed]:animate-out data-[closed]:fade-out-0 data-[starting-style]:animate-in data-[starting-style]:fade-in-0",
          a,
        ),
        ...b,
      });
    }
    function aw({ className: a, ...b }) {
      return (0, g.jsx)(an.Viewport, {
        className: (0, ao.cn)(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95",
          a,
        ),
        ...b,
      });
    }
    function ax({ className: a, ...b }) {
      return (0, g.jsx)(an.Popup, { className: (0, ao.cn)("grid gap-4", a), ...b });
    }
    function ay({ className: a, ...b }) {
      return (0, g.jsx)(an.Title, {
        className: (0, ao.cn)("text-lg font-semibold text-balance", a),
        ...b,
      });
    }
    function az({ className: a, ...b }) {
      return (0, g.jsx)(an.Description, {
        className: (0, ao.cn)("text-sm text-muted-foreground text-pretty", a),
        ...b,
      });
    }
    function aA({ className: a, variant: b = "outline", ...c }) {
      return (0, g.jsx)(an.Close, { className: (0, ao.cn)(as({ variant: b }), a), ...c });
    }
    var aB = a.i(53786);
    let aC =
      "inline-flex h-9 items-center justify-center border-2 border-red-700 bg-red-700 px-5 text-xs font-semibold text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2";
    function aD() {
      let a,
        b = (0, j.useParams)(),
        c = (0, j.useRouter)(),
        d = b.id,
        { data: e, isPending: f } = (0, l.useQuery)({
          queryKey: ["project", d],
          queryFn: () => n.client.project.getById({ id: d }),
          enabled: !!d,
        }),
        o = (0, k.useMutation)({
          mutationFn: () => n.client.project.delete({ id: d }),
          onSuccess: () => {
            (m.toast.success("Project deleted"), c.push("/cms/projects"));
          },
          onError: (a) => m.toast.error(a.message ?? "Failed to delete"),
        }),
        [p, q] = (0, i.useState)(!1);
      return f || !e
        ? (0, g.jsxs)("div", {
            className: "max-w-2xl space-y-6",
            children: [
              (0, g.jsx)("div", { className: "h-7 w-40 rounded bg-[var(--p-warm-white)]" }),
              (0, g.jsx)("div", { className: "h-64 w-full rounded bg-[var(--p-warm-white)]" }),
            ],
          })
        : (0, g.jsxs)("div", {
            children: [
              (0, g.jsxs)("div", {
                className: "mb-8 flex items-start justify-between gap-4",
                children: [
                  (0, g.jsxs)("div", {
                    children: [
                      (0, g.jsx)("h1", {
                        className: "text-2xl font-bold text-balance text-[var(--p-deep-walnut)]",
                        children: "Edit project",
                      }),
                      (0, g.jsx)("div", {
                        className: "mt-2 h-px w-10 bg-[var(--p-tan)]",
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex shrink-0 gap-2",
                    children: [
                      (0, g.jsx)(h.default, {
                        href: `/projects/${e.slug}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2",
                        children: "View on site",
                      }),
                      (0, g.jsx)("button", {
                        type: "button",
                        className: aC,
                        onClick: () => q(!0),
                        "aria-label": "Delete project",
                        children: "Delete",
                      }),
                    ],
                  }),
                ],
              }),
              (0, g.jsx)(aB.ProjectForm, {
                mode: "edit",
                id: d,
                initialData:
                  ((a = [...(e.images ?? [])]
                    .sort((a, b) => a.sortOrder - b.sortOrder)
                    .map((a) => a.url)),
                  {
                    slug: e.slug,
                    title: e.title,
                    description: e.description,
                    featuredImageUrl: e.featuredImageUrl ?? "",
                    published: e.published,
                    imageUrls: a,
                  }),
              }),
              (0, g.jsx)(at, {
                open: p,
                onOpenChange: q,
                children: (0, g.jsxs)(au, {
                  children: [
                    (0, g.jsx)(av, {}),
                    (0, g.jsx)(aw, {
                      children: (0, g.jsxs)(ax, {
                        children: [
                          (0, g.jsx)(ay, { children: "Delete project?" }),
                          (0, g.jsx)(az, {
                            children:
                              "This cannot be undone. The project and its images will be removed.",
                          }),
                          (0, g.jsxs)("div", {
                            className: "flex justify-end gap-2",
                            children: [
                              (0, g.jsx)(aA, { variant: "outline", children: "Cancel" }),
                              (0, g.jsx)("button", {
                                type: "button",
                                className: aC,
                                onClick: function () {
                                  (q(!1), o.mutate());
                                },
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
    }
    a.s(["default", () => aD], 58429);
  },
];

//# sourceMappingURL=src_app_cms_projects_%5Bid%5D_edit_page_tsx_1fcdd491._.js.map
