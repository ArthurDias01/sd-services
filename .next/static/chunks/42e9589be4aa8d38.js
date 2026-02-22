(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  44877,
  (e) => {
    "use strict";
    var t,
      n,
      r = e.i(43476),
      o = e.i(932),
      i = e.i(18566);
    (e.s([], 38727), e.i(38727), e.i(47167));
    var l = e.i(71645),
      a = e.i(67805);
    let s = l.createContext(void 0);
    function u(e) {
      let t = l.useContext(s);
      if (void 0 === t && !e) throw Error((0, a.default)(33));
      return t;
    }
    let c = l.createContext(void 0);
    function f(e) {
      let t = l.useContext(c);
      if (void 0 === t && !e) throw Error((0, a.default)(36));
      return t;
    }
    var d = e.i(27601),
      p = e.i(83590);
    let g = l.forwardRef(function (e, t) {
      let { className: n, render: r, ...o } = e,
        { store: i } = f(),
        { arrowRef: l, side: a, align: s, arrowUncentered: c, arrowStyles: g } = u(),
        m = i.useState("open");
      return (0, d.useRenderElement)("div", e, {
        ref: [l, t],
        stateAttributesMapping: p.popupStateMapping,
        state: { open: m, side: a, align: s, uncentered: c },
        props: { style: g, "aria-hidden": !0, ...o },
      });
    });
    var m = e.i(84759);
    let v = l.createContext(void 0);
    function h(e = !0) {
      let t = l.useContext(v);
      if (void 0 === t && !e) throw Error((0, a.default)(25));
      return t;
    }
    var E = e.i(3404);
    let b = { ...p.popupStateMapping, ...m.transitionStatusMapping },
      y = l.forwardRef(function (e, t) {
        let { className: n, render: r, ...o } = e,
          { store: i } = f(),
          l = i.useState("open"),
          a = i.useState("mounted"),
          s = i.useState("transitionStatus"),
          u = i.useState("lastOpenChangeReason"),
          c = h();
        return (0, d.useRenderElement)("div", e, {
          ref: c?.backdropRef ? [t, c.backdropRef] : t,
          state: { open: l, transitionStatus: s },
          stateAttributesMapping: b,
          props: [
            {
              role: "presentation",
              hidden: !a,
              style: {
                pointerEvents: u === E.REASONS.triggerHover ? "none" : void 0,
                userSelect: "none",
                WebkitUserSelect: "none",
              },
            },
            o,
          ],
        });
      });
    var x = e.i(76477);
    function R({ controlled: e, default: t, name: n, state: r = "value" }) {
      let { current: o } = l.useRef(void 0 !== e),
        [i, a] = l.useState(t),
        s = l.useCallback((e) => {
          o || a(e);
        }, []);
      return [o ? e : i, s];
    }
    let S = l.createContext(void 0);
    var w = e.i(26292),
      C = e.i(91730),
      T = e.i(19805);
    function O(e) {
      let {
          closeOnClick: t,
          highlighted: n,
          id: r,
          nodeId: o,
          store: i,
          itemRef: a,
          itemMetadata: s,
        } = e,
        { events: u } = i.useState("floatingTreeRoot"),
        c = h(!0),
        f = void 0 !== c;
      return l.useMemo(
        () => ({
          id: r,
          role: "menuitem",
          tabIndex: n ? 0 : -1,
          onMouseMove(e) {
            o && u.emit("itemhover", { nodeId: o, target: e.currentTarget });
          },
          onClick(e) {
            t && u.emit("close", { domEvent: e, reason: E.REASONS.itemPress });
          },
          onMouseUp(e) {
            if (c) {
              let t = c.initialCursorPointRef.current;
              if (
                ((c.initialCursorPointRef.current = null),
                f && t && 1 >= Math.abs(e.clientX - t.x) && 1 >= Math.abs(e.clientY - t.y))
              )
                return;
            }
            a.current &&
              i.context.allowMouseUpTriggerRef.current &&
              (!f || 2 === e.button) &&
              (!s || "regular-item" === s.type) &&
              a.current.click();
          },
        }),
        [t, n, r, u, o, i, a, c, f, s],
      );
    }
    let I = { type: "regular-item" };
    function M(e) {
      let {
          closeOnClick: t,
          disabled: n = !1,
          highlighted: r,
          id: o,
          store: i,
          nativeButton: a,
          itemMetadata: s,
          nodeId: u,
        } = e,
        c = l.useRef(null),
        { getButtonProps: f, buttonRef: d } = (0, C.useButton)({
          disabled: n,
          focusableWhenDisabled: !0,
          native: a,
        }),
        p = O({
          closeOnClick: t,
          highlighted: r,
          id: o,
          nodeId: u,
          store: i,
          itemRef: c,
          itemMetadata: s,
        }),
        g = l.useCallback(
          (e) =>
            (0, T.mergeProps)(
              p,
              {
                onMouseEnter() {
                  "submenu-trigger" === s.type && s.setActive();
                },
                onKeyUp(e) {
                  " " === e.key && i.context.typingRef.current && e.preventBaseUIHandler();
                },
              },
              e,
              f,
            ),
          [p, f, i, s],
        ),
        m = (0, w.useMergedRefs)(c, d);
      return l.useMemo(() => ({ getItemProps: g, itemRef: m }), [g, m]);
    }
    var A = e.i(977);
    let k = l.createContext({
        register: () => {},
        unregister: () => {},
        subscribeMapChange: () => () => {},
        elementsRef: { current: [] },
        nextIndexRef: { current: 0 },
      }),
      P = (((t = {})[(t.None = 0)] = "None"), (t[(t.GuessFromOrder = 1)] = "GuessFromOrder"), t);
    function N(e = {}) {
      let { label: t, metadata: n, textRef: r, indexGuessBehavior: o, index: i } = e,
        {
          register: a,
          unregister: s,
          subscribeMapChange: u,
          elementsRef: c,
          labelsRef: f,
          nextIndexRef: d,
        } = l.useContext(k),
        p = l.useRef(-1),
        [g, m] = l.useState(
          i ??
            (o === P.GuessFromOrder
              ? () => {
                  if (-1 === p.current) {
                    let e = d.current;
                    ((d.current += 1), (p.current = e));
                  }
                  return p.current;
                }
              : -1),
        ),
        v = l.useRef(null),
        h = l.useCallback(
          (e) => {
            if (((v.current = e), -1 !== g && null !== e && ((c.current[g] = e), f))) {
              let n = void 0 !== t;
              f.current[g] = n ? t : (r?.current?.textContent ?? e.textContent);
            }
          },
          [g, c, f, t, r],
        );
      return (
        (0, A.useIsoLayoutEffect)(() => {
          if (null != i) return;
          let e = v.current;
          if (e)
            return (
              a(e, n),
              () => {
                s(e);
              }
            );
        }, [i, a, s, n]),
        (0, A.useIsoLayoutEffect)(() => {
          if (null == i)
            return u((e) => {
              let t = v.current ? e.get(v.current)?.index : null;
              null != t && m(t);
            });
        }, [i, u, m]),
        l.useMemo(() => ({ ref: h, index: g }), [g, h])
      );
    }
    var L = e.i(89879);
    let D =
        (((n = {}).checked = "data-checked"),
        (n.unchecked = "data-unchecked"),
        (n.disabled = "data-disabled"),
        (n.highlighted = "data-highlighted"),
        n),
      F = {
        checked: (e) => (e ? { [D.checked]: "" } : { [D.unchecked]: "" }),
        ...m.transitionStatusMapping,
      };
    var _ = e.i(5963);
    let H = l.forwardRef(function (e, t) {
      let {
          render: n,
          className: o,
          id: i,
          label: a,
          nativeButton: s = !1,
          disabled: c = !1,
          closeOnClick: p = !1,
          checked: g,
          defaultChecked: m,
          onCheckedChange: v,
          ...h
        } = e,
        b = N({ label: a }),
        y = u(!0),
        w = (0, L.useBaseUiId)(i),
        { store: C } = f(),
        T = C.useState("isActive", b.index),
        O = C.useState("itemProps"),
        [A, k] = R({ controlled: g, default: m ?? !1, name: "MenuCheckboxItem", state: "checked" }),
        { getItemProps: P, itemRef: D } = M({
          closeOnClick: p,
          disabled: c,
          highlighted: T,
          id: w,
          store: C,
          nativeButton: s,
          nodeId: y?.nodeId,
          itemMetadata: I,
        }),
        H = l.useMemo(() => ({ disabled: c, highlighted: T, checked: A }), [c, T, A]),
        W = (0, x.useStableCallback)((e) => {
          let t = {
            ...(0, _.createChangeEventDetails)(E.REASONS.itemPress, e.nativeEvent),
            preventUnmountOnClose: () => {},
          };
          (v?.(!A, t), t.isCanceled || k((e) => !e));
        }),
        j = (0, d.useRenderElement)("div", e, {
          state: H,
          stateAttributesMapping: F,
          props: [O, { role: "menuitemcheckbox", "aria-checked": A, onClick: W }, h, P],
          ref: [D, t, b.ref],
        });
      return (0, r.jsx)(S.Provider, { value: H, children: j });
    });
    var W = e.i(88841),
      j = e.i(89269);
    let B = l.forwardRef(function (e, t) {
        let { render: n, className: r, keepMounted: o = !1, ...i } = e,
          s = (function () {
            let e = l.useContext(S);
            if (void 0 === e) throw Error((0, a.default)(30));
            return e;
          })(),
          u = l.useRef(null),
          { transitionStatus: c, setMounted: f } = (0, W.useTransitionStatus)(s.checked);
        (0, j.useOpenChangeComplete)({
          open: s.checked,
          ref: u,
          onComplete() {
            s.checked || f(!1);
          },
        });
        let p = {
          checked: s.checked,
          disabled: s.disabled,
          highlighted: s.highlighted,
          transitionStatus: c,
        };
        return (0, d.useRenderElement)("span", e, {
          state: p,
          ref: [t, u],
          stateAttributesMapping: F,
          props: { "aria-hidden": !0, ...i },
          enabled: o || s.checked,
        });
      }),
      U = l.createContext(void 0),
      V = l.forwardRef(function (e, t) {
        let { render: n, className: o, ...i } = e,
          [a, s] = l.useState(void 0),
          u = l.useMemo(() => ({ setLabelId: s }), [s]),
          c = (0, d.useRenderElement)("div", e, {
            ref: t,
            props: { role: "group", "aria-labelledby": a, ...i },
          });
        return (0, r.jsx)(U.Provider, { value: u, children: c });
      }),
      z = l.forwardRef(function (e, t) {
        let { className: n, render: r, id: o, ...i } = e,
          s = (0, L.useBaseUiId)(o),
          { setLabelId: u } = (function () {
            let e = l.useContext(U);
            if (void 0 === e) throw Error((0, a.default)(31));
            return e;
          })();
        return (
          (0, A.useIsoLayoutEffect)(
            () => (
              u(s),
              () => {
                u(void 0);
              }
            ),
            [u, s],
          ),
          (0, d.useRenderElement)("div", e, {
            ref: t,
            props: { id: s, role: "presentation", ...i },
          })
        );
      }),
      G = l.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            id: o,
            label: i,
            nativeButton: l = !1,
            disabled: a = !1,
            closeOnClick: s = !0,
            ...c
          } = e,
          p = N({ label: i }),
          g = u(!0),
          m = (0, L.useBaseUiId)(o),
          { store: v } = f(),
          h = v.useState("isActive", p.index),
          E = v.useState("itemProps"),
          { getItemProps: b, itemRef: y } = M({
            closeOnClick: s,
            disabled: a,
            highlighted: h,
            id: m,
            store: v,
            nativeButton: l,
            nodeId: g?.nodeId,
            itemMetadata: I,
          });
        return (0, d.useRenderElement)("div", e, {
          state: { disabled: a, highlighted: h },
          props: [E, c, b],
          ref: [y, t, p.ref],
        });
      }),
      Y = l.forwardRef(function (e, t) {
        let { render: n, className: r, id: o, label: i, closeOnClick: a = !1, ...s } = e,
          c = l.useRef(null),
          p = N({ label: i }),
          g = u(!0),
          m = g?.nodeId,
          v = (0, L.useBaseUiId)(o),
          { store: h } = f(),
          E = h.useState("isActive", p.index),
          b = h.useState("itemProps"),
          y = O({ closeOnClick: a, highlighted: E, id: v, nodeId: m, store: h, itemRef: c }),
          x = l.useMemo(() => ({ highlighted: E }), [E]);
        return (0, d.useRenderElement)("a", e, { state: x, props: [b, s, y], ref: [c, t, p.ref] });
      });
    var $ = e.i(88306),
      K = e.i(29315),
      q = e.i(90219),
      X = e.i(47857),
      J = e.i(82033),
      Q = e.i(51665),
      Z = e.i(94365),
      ee = e.i(30628),
      et = e.i(66745),
      en = e.i(32652),
      er = e.i(494);
    let eo = (0, en.createAttribute)("safe-polygon"),
      ei = `button,a,[role="button"],select,[tabindex]:not([tabindex="-1"]),${er.TYPEABLE_SELECTOR}`;
    class el {
      constructor() {
        ((this.pointerType = void 0),
          (this.interactedInside = !1),
          (this.handler = void 0),
          (this.blockMouseMove = !0),
          (this.performedPointerEventsMutation = !1),
          (this.unbindMouseMove = () => {}),
          (this.restTimeoutPending = !1),
          (this.openChangeTimeout = new et.Timeout()),
          (this.restTimeout = new et.Timeout()),
          (this.handleCloseOptions = void 0));
      }
      static create() {
        return new el();
      }
      dispose = () => {
        (this.openChangeTimeout.clear(), this.restTimeout.clear());
      };
      disposeEffect = () => this.dispose;
    }
    function ea(e) {
      let t = (0, ee.useRefWithInit)(el.create).current,
        n = e.context.dataRef.current;
      return (
        n.hoverInteractionState || (n.hoverInteractionState = t),
        (0, Z.useOnMount)(n.hoverInteractionState.disposeEffect),
        n.hoverInteractionState
      );
    }
    let es = new Set(["click", "mousedown"]),
      eu = l.createContext(void 0);
    var ec = e.i(92238),
      ef = e.i(7335),
      ed = e.i(17514);
    function ep(e) {
      return "starting" === e ? ef.DISABLED_TRANSITIONS_STYLE : ed.EMPTY_OBJECT;
    }
    let eg = { ...p.popupStateMapping, ...m.transitionStatusMapping },
      em = l.forwardRef(function (e, t) {
        let { render: n, className: o, finalFocus: i, ...s } = e,
          { store: c } = f(),
          { side: p, align: g } = u(),
          m =
            null !=
            (function (e) {
              let t = l.useContext(eu);
              if (void 0 === t && !e) throw Error((0, a.default)(69));
              return t;
            })(!0),
          v = c.useState("open"),
          h = c.useState("transitionStatus"),
          b = c.useState("popupProps"),
          y = c.useState("mounted"),
          R = c.useState("instantType"),
          S = c.useState("activeTriggerElement"),
          w = c.useState("parent"),
          C = c.useState("lastOpenChangeReason"),
          T = c.useState("rootId"),
          O = c.useState("floatingRootContext"),
          I = c.useState("floatingTreeRoot"),
          M = c.useState("closeDelay"),
          k = c.useState("activeTriggerElement"),
          P = "context-menu" === w.type;
        ((0, j.useOpenChangeComplete)({
          open: v,
          ref: c.context.popupRef,
          onComplete() {
            v && c.context.onOpenChangeComplete?.(!0);
          },
        }),
          l.useEffect(() => {
            function e(e) {
              c.setOpen(!1, (0, _.createChangeEventDetails)(e.reason, e.domEvent));
            }
            return (
              I.events.on("close", e),
              () => {
                I.events.off("close", e);
              }
            );
          }, [I.events, c]));
        let N = c.useState("hoverEnabled"),
          L = c.useState("disabled");
        !(function (e, t = {}) {
          let n = "rootStore" in e ? e.rootStore : e,
            r = n.useState("open"),
            o = n.useState("floatingElement"),
            i = n.useState("domReferenceElement"),
            { dataRef: a } = n.context,
            { enabled: s = !0, closeDelay: u = 0 } = t,
            c = ea(n),
            f = (0, Q.useFloatingTree)(),
            d = (0, Q.useFloatingParentNodeId)(),
            p = (0, x.useStableCallback)(
              () =>
                !!c.interactedInside || (!!a.current.openEvent && es.has(a.current.openEvent.type)),
            ),
            g = (0, x.useStableCallback)(() => {
              let e = a.current.openEvent?.type;
              return e?.includes("mouse") && "mousedown" !== e;
            }),
            m = (0, x.useStableCallback)((e) =>
              (0, X.isTargetInsideEnabledTrigger)(e, n.context.triggerElements),
            ),
            v = l.useCallback(
              (e, t = !0) => {
                var r, o;
                let i =
                  ((r = u),
                  (o = c.pointerType) && !(0, J.isMouseLikePointerType)(o)
                    ? 0
                    : "function" == typeof r
                      ? r()
                      : r);
                i && !c.handler
                  ? c.openChangeTimeout.start(i, () =>
                      n.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e)),
                    )
                  : t &&
                    (c.openChangeTimeout.clear(),
                    n.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e)));
              },
              [u, n, c],
            ),
            h = (0, x.useStableCallback)(() => {
              (c.unbindMouseMove(), (c.handler = void 0));
            }),
            b = (0, x.useStableCallback)(() => {
              if (c.performedPointerEventsMutation) {
                let e = (0, q.ownerDocument)(o).body;
                ((e.style.pointerEvents = ""),
                  e.removeAttribute(eo),
                  (c.performedPointerEventsMutation = !1));
              }
            }),
            y = (0, x.useStableCallback)((e) => {
              var t;
              if (!((t = (0, X.getTarget)(e)) && t.closest(ei))) {
                c.interactedInside = !1;
                return;
              }
              c.interactedInside = !0;
            });
          ((0, A.useIsoLayoutEffect)(() => {
            r ||
              ((c.pointerType = void 0),
              (c.restTimeoutPending = !1),
              (c.interactedInside = !1),
              h(),
              b());
          }, [r, c, h, b]),
            l.useEffect(
              () => () => {
                h();
              },
              [h],
            ),
            l.useEffect(() => b, [b]),
            (0, A.useIsoLayoutEffect)(() => {
              if (
                s &&
                r &&
                c.handleCloseOptions?.blockPointerEvents &&
                g() &&
                (0, K.isElement)(i) &&
                o
              ) {
                c.performedPointerEventsMutation = !0;
                let e = (0, q.ownerDocument)(o).body;
                e.setAttribute(eo, "");
                let t = f?.nodesRef.current.find((e) => e.id === d)?.context?.elements.floating;
                return (
                  t && (t.style.pointerEvents = ""),
                  (e.style.pointerEvents = "none"),
                  (i.style.pointerEvents = "auto"),
                  (o.style.pointerEvents = "auto"),
                  () => {
                    ((e.style.pointerEvents = ""),
                      (i.style.pointerEvents = ""),
                      (o.style.pointerEvents = ""));
                  }
                );
              }
            }, [s, r, i, o, c, g, f, d]),
            l.useEffect(() => {
              if (s)
                return (
                  o &&
                    (o.addEventListener("mouseleave", e),
                    o.addEventListener("mouseenter", t),
                    o.addEventListener("mouseleave", r),
                    o.addEventListener("pointerdown", y, !0)),
                  () => {
                    o &&
                      (o.removeEventListener("mouseleave", e),
                      o.removeEventListener("mouseenter", t),
                      o.removeEventListener("mouseleave", r),
                      o.removeEventListener("pointerdown", y, !0));
                  }
                );
              function e(e) {
                !p() &&
                  a.current.floatingContext &&
                  n.select("open") &&
                  !m(e.relatedTarget) &&
                  (b(), h(), p() || v(e));
              }
              function t(e) {
                (c.openChangeTimeout.clear(), b(), c.handler?.(e), h());
              }
              function r(e) {
                p() || v(e, !1);
              }
            }, [s, o, n, a, p, m, v, b, h, y, c]));
        })(O, { enabled: N && !L && !P && "menubar" !== w.type, closeDelay: M });
        let D = {
            transitionStatus: h,
            side: p,
            align: g,
            open: v,
            nested: "menu" === w.type,
            instant: R,
          },
          F = (0, d.useRenderElement)("div", e, {
            state: D,
            ref: [t, c.context.popupRef],
            stateAttributesMapping: eg,
            props: [
              b,
              {
                onKeyDown(e) {
                  m && ec.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
                },
              },
              ep(h),
              s,
              { "data-rootownerid": T },
            ],
          }),
          H = void 0 === w.type || P;
        return (
          (S || ("menubar" === w.type && C !== E.REASONS.outsidePress)) && (H = !0),
          (0, r.jsx)($.FloatingFocusManager, {
            context: O,
            modal: P,
            disabled: !y,
            returnFocus: void 0 === i ? H : i,
            initialFocus: "menu" !== w.type,
            restoreFocus: !0,
            externalTree: "menubar" !== w.type ? I : void 0,
            previousFocusableElement: k,
            nextFocusableElement: void 0 === w.type ? c.context.triggerFocusTargetRef : void 0,
            beforeContentFocusGuardRef:
              void 0 === w.type ? c.context.beforeContentFocusGuardRef : void 0,
            children: F,
          })
        );
      });
    var ev = e.i(37692);
    let eh = l.createContext(void 0),
      eE = l.forwardRef(function (e, t) {
        let { keepMounted: n = !1, ...o } = e,
          { store: i } = f();
        return i.useState("mounted") || n
          ? (0, r.jsx)(eh.Provider, {
              value: n,
              children: (0, r.jsx)(ev.FloatingPortal, { ref: t, ...o }),
            })
          : null;
      });
    var eb = e.i(58130);
    let ey = ["top", "right", "bottom", "left"],
      ex = Math.min,
      eR = Math.max,
      eS = Math.round,
      ew = Math.floor,
      eC = (e) => ({ x: e, y: e }),
      eT = { left: "right", right: "left", bottom: "top", top: "bottom" },
      eO = { start: "end", end: "start" };
    function eI(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function eM(e) {
      return e.split("-")[0];
    }
    function eA(e) {
      return e.split("-")[1];
    }
    function ek(e) {
      return "x" === e ? "y" : "x";
    }
    function eP(e) {
      return "y" === e ? "height" : "width";
    }
    let eN = new Set(["top", "bottom"]);
    function eL(e) {
      return eN.has(eM(e)) ? "y" : "x";
    }
    function eD(e) {
      return e.replace(/start|end/g, (e) => eO[e]);
    }
    let eF = ["left", "right"],
      e_ = ["right", "left"],
      eH = ["top", "bottom"],
      eW = ["bottom", "top"];
    function ej(e) {
      return e.replace(/left|right|bottom|top/g, (e) => eT[e]);
    }
    function eB(e) {
      return "number" != typeof e
        ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
        : { top: e, right: e, bottom: e, left: e };
    }
    function eU(e) {
      let { x: t, y: n, width: r, height: o } = e;
      return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
    }
    var eV = e.i(231);
    function ez(e, t, n) {
      let r,
        { reference: o, floating: i } = e,
        l = eL(t),
        a = ek(eL(t)),
        s = eP(a),
        u = eM(t),
        c = "y" === l,
        f = o.x + o.width / 2 - i.width / 2,
        d = o.y + o.height / 2 - i.height / 2,
        p = o[s] / 2 - i[s] / 2;
      switch (u) {
        case "top":
          r = { x: f, y: o.y - i.height };
          break;
        case "bottom":
          r = { x: f, y: o.y + o.height };
          break;
        case "right":
          r = { x: o.x + o.width, y: d };
          break;
        case "left":
          r = { x: o.x - i.width, y: d };
          break;
        default:
          r = { x: o.x, y: o.y };
      }
      switch (eA(t)) {
        case "start":
          r[a] -= p * (n && c ? -1 : 1);
          break;
        case "end":
          r[a] += p * (n && c ? -1 : 1);
      }
      return r;
    }
    async function eG(e, t) {
      var n;
      void 0 === t && (t = {});
      let { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
        {
          boundary: u = "clippingAncestors",
          rootBoundary: c = "viewport",
          elementContext: f = "floating",
          altBoundary: d = !1,
          padding: p = 0,
        } = eI(t, e),
        g = eB(p),
        m = a[d ? ("floating" === f ? "reference" : "floating") : f],
        v = eU(
          await i.getClippingRect({
            element:
              null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n
                ? m
                : m.contextElement ||
                  (await (null == i.getDocumentElement
                    ? void 0
                    : i.getDocumentElement(a.floating))),
            boundary: u,
            rootBoundary: c,
            strategy: s,
          }),
        ),
        h =
          "floating" === f
            ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
            : l.reference,
        E = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)),
        b = ((await (null == i.isElement ? void 0 : i.isElement(E))) &&
          (await (null == i.getScale ? void 0 : i.getScale(E)))) || { x: 1, y: 1 },
        y = eU(
          i.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: h,
                offsetParent: E,
                strategy: s,
              })
            : h,
        );
      return {
        top: (v.top - y.top + g.top) / b.y,
        bottom: (y.bottom - v.bottom + g.bottom) / b.y,
        left: (v.left - y.left + g.left) / b.x,
        right: (y.right - v.right + g.right) / b.x,
      };
    }
    let eY = async (e, t, n) => {
      let {
          placement: r = "bottom",
          strategy: o = "absolute",
          middleware: i = [],
          platform: l,
        } = n,
        a = i.filter(Boolean),
        s = await (null == l.isRTL ? void 0 : l.isRTL(t)),
        u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: c, y: f } = ez(u, r, s),
        d = r,
        p = {},
        g = 0;
      for (let n = 0; n < a.length; n++) {
        var m;
        let { name: i, fn: v } = a[n],
          {
            x: h,
            y: E,
            data: b,
            reset: y,
          } = await v({
            x: c,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: { ...l, detectOverflow: null != (m = l.detectOverflow) ? m : eG },
            elements: { reference: e, floating: t },
          });
        ((c = null != h ? h : c),
          (f = null != E ? E : f),
          (p = { ...p, [i]: { ...p[i], ...b } }),
          y &&
            g <= 50 &&
            (g++,
            "object" == typeof y &&
              (y.placement && (d = y.placement),
              y.rects &&
                (u =
                  !0 === y.rects
                    ? await l.getElementRects({ reference: e, floating: t, strategy: o })
                    : y.rects),
              ({ x: c, y: f } = ez(u, d, s))),
            (n = -1)));
      }
      return { x: c, y: f, placement: d, strategy: o, middlewareData: p };
    };
    function e$(e, t) {
      return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
      };
    }
    function eK(e) {
      return ey.some((t) => e[t] >= 0);
    }
    let eq = new Set(["left", "top"]);
    async function eX(e, t) {
      let { placement: n, platform: r, elements: o } = e,
        i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
        l = eM(n),
        a = eA(n),
        s = "y" === eL(n),
        u = eq.has(l) ? -1 : 1,
        c = i && s ? -1 : 1,
        f = eI(t, e),
        {
          mainAxis: d,
          crossAxis: p,
          alignmentAxis: g,
        } = "number" == typeof f
          ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
          : {
              mainAxis: f.mainAxis || 0,
              crossAxis: f.crossAxis || 0,
              alignmentAxis: f.alignmentAxis,
            };
      return (
        a && "number" == typeof g && (p = "end" === a ? -1 * g : g),
        s ? { x: p * c, y: d * u } : { x: d * u, y: p * c }
      );
    }
    function eJ(e) {
      let t = (0, K.getComputedStyle)(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        o = (0, K.isHTMLElement)(e),
        i = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : r,
        a = eS(n) !== i || eS(r) !== l;
      return (a && ((n = i), (r = l)), { width: n, height: r, $: a });
    }
    function eQ(e) {
      return (0, K.isElement)(e) ? e : e.contextElement;
    }
    function eZ(e) {
      let t = eQ(e);
      if (!(0, K.isHTMLElement)(t)) return eC(1);
      let n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = eJ(t),
        l = (i ? eS(n.width) : n.width) / r,
        a = (i ? eS(n.height) : n.height) / o;
      return (
        (l && Number.isFinite(l)) || (l = 1), (a && Number.isFinite(a)) || (a = 1), { x: l, y: a }
      );
    }
    let e0 = eC(0);
    function e1(e) {
      let t = (0, K.getWindow)(e);
      return (0, K.isWebKit)() && t.visualViewport
        ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
        : e0;
    }
    function e2(e, t, n, r) {
      var o;
      (void 0 === t && (t = !1), void 0 === n && (n = !1));
      let i = e.getBoundingClientRect(),
        l = eQ(e),
        a = eC(1);
      t && (r ? (0, K.isElement)(r) && (a = eZ(r)) : (a = eZ(e)));
      let s = (void 0 === (o = n) && (o = !1), r && (!o || r === (0, K.getWindow)(l)) && o)
          ? e1(l)
          : eC(0),
        u = (i.left + s.x) / a.x,
        c = (i.top + s.y) / a.y,
        f = i.width / a.x,
        d = i.height / a.y;
      if (l) {
        let e = (0, K.getWindow)(l),
          t = r && (0, K.isElement)(r) ? (0, K.getWindow)(r) : r,
          n = e,
          o = (0, K.getFrameElement)(n);
        for (; o && r && t !== n; ) {
          let e = eZ(o),
            t = o.getBoundingClientRect(),
            r = (0, K.getComputedStyle)(o),
            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
          ((u *= e.x),
            (c *= e.y),
            (f *= e.x),
            (d *= e.y),
            (u += i),
            (c += l),
            (n = (0, K.getWindow)(o)),
            (o = (0, K.getFrameElement)(n)));
        }
      }
      return eU({ width: f, height: d, x: u, y: c });
    }
    function e3(e, t) {
      let n = (0, K.getNodeScroll)(e).scrollLeft;
      return t ? t.left + n : e2((0, K.getDocumentElement)(e)).left + n;
    }
    function e5(e, t) {
      let n = e.getBoundingClientRect();
      return { x: n.left + t.scrollLeft - e3(e, n), y: n.top + t.scrollTop };
    }
    let e4 = new Set(["absolute", "fixed"]);
    function e6(e, t, n) {
      var r;
      let o;
      if ("viewport" === t)
        o = (function (e, t) {
          let n = (0, K.getWindow)(e),
            r = (0, K.getDocumentElement)(e),
            o = n.visualViewport,
            i = r.clientWidth,
            l = r.clientHeight,
            a = 0,
            s = 0;
          if (o) {
            ((i = o.width), (l = o.height));
            let e = (0, K.isWebKit)();
            (!e || (e && "fixed" === t)) && ((a = o.offsetLeft), (s = o.offsetTop));
          }
          let u = e3(r);
          if (u <= 0) {
            let e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o =
                ("CSS1Compat" === e.compatMode &&
                  parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                0,
              l = Math.abs(r.clientWidth - t.clientWidth - o);
            l <= 25 && (i -= l);
          } else u <= 25 && (i += u);
          return { width: i, height: l, x: a, y: s };
        })(e, n);
      else if ("document" === t) {
        let t, n, i, l, a, s, u;
        ((r = (0, K.getDocumentElement)(e)),
          (t = (0, K.getDocumentElement)(r)),
          (n = (0, K.getNodeScroll)(r)),
          (i = r.ownerDocument.body),
          (l = eR(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth)),
          (a = eR(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight)),
          (s = -n.scrollLeft + e3(r)),
          (u = -n.scrollTop),
          "rtl" === (0, K.getComputedStyle)(i).direction &&
            (s += eR(t.clientWidth, i.clientWidth) - l),
          (o = { width: l, height: a, x: s, y: u }));
      } else if ((0, K.isElement)(t)) {
        let e, r, i, l, a, s;
        ((r = (e = e2(t, !0, "fixed" === n)).top + t.clientTop),
          (i = e.left + t.clientLeft),
          (l = (0, K.isHTMLElement)(t) ? eZ(t) : eC(1)),
          (a = t.clientWidth * l.x),
          (s = t.clientHeight * l.y),
          (o = { width: a, height: s, x: i * l.x, y: r * l.y }));
      } else {
        let n = e1(e);
        o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
      }
      return eU(o);
    }
    function e7(e) {
      return "static" === (0, K.getComputedStyle)(e).position;
    }
    function e8(e, t) {
      if (!(0, K.isHTMLElement)(e) || "fixed" === (0, K.getComputedStyle)(e).position) return null;
      if (t) return t(e);
      let n = e.offsetParent;
      return ((0, K.getDocumentElement)(e) === n && (n = n.ownerDocument.body), n);
    }
    function e9(e, t) {
      let n = (0, K.getWindow)(e);
      if ((0, K.isTopLayer)(e)) return n;
      if (!(0, K.isHTMLElement)(e)) {
        let t = (0, K.getParentNode)(e);
        for (; t && !(0, K.isLastTraversableNode)(t); ) {
          if ((0, K.isElement)(t) && !e7(t)) return t;
          t = (0, K.getParentNode)(t);
        }
        return n;
      }
      let r = e8(e, t);
      for (; r && (0, K.isTableElement)(r) && e7(r); ) r = e8(r, t);
      return r && (0, K.isLastTraversableNode)(r) && e7(r) && !(0, K.isContainingBlock)(r)
        ? n
        : r || (0, K.getContainingBlock)(e) || n;
    }
    let te = async function (e) {
        let t = this.getOffsetParent || e9,
          n = this.getDimensions,
          r = await n(e.floating);
        return {
          reference: (function (e, t, n) {
            let r = (0, K.isHTMLElement)(t),
              o = (0, K.getDocumentElement)(t),
              i = "fixed" === n,
              l = e2(e, !0, i, t),
              a = { scrollLeft: 0, scrollTop: 0 },
              s = eC(0);
            if (r || (!r && !i))
              if (
                (("body" !== (0, K.getNodeName)(t) || (0, K.isOverflowElement)(o)) &&
                  (a = (0, K.getNodeScroll)(t)),
                r)
              ) {
                let e = e2(t, !0, i, t);
                ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
              } else o && (s.x = e3(o));
            i && !r && o && (s.x = e3(o));
            let u = !o || r || i ? eC(0) : e5(o, a);
            return {
              x: l.left + a.scrollLeft - s.x - u.x,
              y: l.top + a.scrollTop - s.y - u.y,
              width: l.width,
              height: l.height,
            };
          })(e.reference, await t(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: r.width, height: r.height },
        };
      },
      tt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
            i = "fixed" === o,
            l = (0, K.getDocumentElement)(r),
            a = !!t && (0, K.isTopLayer)(t.floating);
          if (r === l || (a && i)) return n;
          let s = { scrollLeft: 0, scrollTop: 0 },
            u = eC(1),
            c = eC(0),
            f = (0, K.isHTMLElement)(r);
          if (
            (f || (!f && !i)) &&
            (("body" !== (0, K.getNodeName)(r) || (0, K.isOverflowElement)(l)) &&
              (s = (0, K.getNodeScroll)(r)),
            (0, K.isHTMLElement)(r))
          ) {
            let e = e2(r);
            ((u = eZ(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop));
          }
          let d = !l || f || i ? eC(0) : e5(l, s);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - s.scrollLeft * u.x + c.x + d.x,
            y: n.y * u.y - s.scrollTop * u.y + c.y + d.y,
          };
        },
        getDocumentElement: K.getDocumentElement,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
            i = [
              ...("clippingAncestors" === n
                ? (0, K.isTopLayer)(t)
                  ? []
                  : (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = (0, K.getOverflowAncestors)(e, [], !1).filter(
                          (e) => (0, K.isElement)(e) && "body" !== (0, K.getNodeName)(e),
                        ),
                        o = null,
                        i = "fixed" === (0, K.getComputedStyle)(e).position,
                        l = i ? (0, K.getParentNode)(e) : e;
                      for (; (0, K.isElement)(l) && !(0, K.isLastTraversableNode)(l); ) {
                        let t = (0, K.getComputedStyle)(l),
                          n = (0, K.isContainingBlock)(l);
                        (n || "fixed" !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n && "static" === t.position && !!o && e4.has(o.position)) ||
                                ((0, K.isOverflowElement)(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = (0, K.getParentNode)(t);
                                    return (
                                      !(
                                        r === n ||
                                        !(0, K.isElement)(r) ||
                                        (0, K.isLastTraversableNode)(r)
                                      ) &&
                                      ("fixed" === (0, K.getComputedStyle)(r).position || e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (o = t),
                          (l = (0, K.getParentNode)(l)));
                      }
                      return (t.set(e, r), r);
                    })(t, this._c)
                : [].concat(n)),
              r,
            ],
            l = i[0],
            a = i.reduce(
              (e, n) => {
                let r = e6(t, n, o);
                return (
                  (e.top = eR(r.top, e.top)),
                  (e.right = ex(r.right, e.right)),
                  (e.bottom = ex(r.bottom, e.bottom)),
                  (e.left = eR(r.left, e.left)),
                  e
                );
              },
              e6(t, l, o),
            );
          return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
        },
        getOffsetParent: e9,
        getElementRects: te,
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          let { width: t, height: n } = eJ(e);
          return { width: t, height: n };
        },
        getScale: eZ,
        isElement: K.isElement,
        isRTL: function (e) {
          return "rtl" === (0, K.getComputedStyle)(e).direction;
        },
      };
    function tn(e, t) {
      return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
    }
    function tr(e, t, n, r) {
      let o;
      void 0 === r && (r = {});
      let {
          ancestorScroll: i = !0,
          ancestorResize: l = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: s = "function" == typeof IntersectionObserver,
          animationFrame: u = !1,
        } = r,
        c = eQ(e),
        f =
          i || l
            ? [...(c ? (0, K.getOverflowAncestors)(c) : []), ...(0, K.getOverflowAncestors)(t)]
            : [];
      f.forEach((e) => {
        (i && e.addEventListener("scroll", n, { passive: !0 }),
          l && e.addEventListener("resize", n));
      });
      let d =
          c && s
            ? (function (e, t) {
                let n,
                  r = null,
                  o = (0, K.getDocumentElement)(e);
                function i() {
                  var e;
                  (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
                }
                return (
                  !(function l(a, s) {
                    (void 0 === a && (a = !1), void 0 === s && (s = 1), i());
                    let u = e.getBoundingClientRect(),
                      { left: c, top: f, width: d, height: p } = u;
                    if ((a || t(), !d || !p)) return;
                    let g = {
                        rootMargin:
                          -ew(f) +
                          "px " +
                          -ew(o.clientWidth - (c + d)) +
                          "px " +
                          -ew(o.clientHeight - (f + p)) +
                          "px " +
                          -ew(c) +
                          "px",
                        threshold: eR(0, ex(1, s)) || 1,
                      },
                      m = !0;
                    function v(t) {
                      let r = t[0].intersectionRatio;
                      if (r !== s) {
                        if (!m) return l();
                        r
                          ? l(!1, r)
                          : (n = setTimeout(() => {
                              l(!1, 1e-7);
                            }, 1e3));
                      }
                      (1 !== r || tn(u, e.getBoundingClientRect()) || l(), (m = !1));
                    }
                    try {
                      r = new IntersectionObserver(v, { ...g, root: o.ownerDocument });
                    } catch (e) {
                      r = new IntersectionObserver(v, g);
                    }
                    r.observe(e);
                  })(!0),
                  i
                );
              })(c, n)
            : null,
        p = -1,
        g = null;
      a &&
        ((g = new ResizeObserver((e) => {
          let [r] = e;
          (r &&
            r.target === c &&
            g &&
            (g.unobserve(t),
            cancelAnimationFrame(p),
            (p = requestAnimationFrame(() => {
              var e;
              null == (e = g) || e.observe(t);
            }))),
            n());
        })),
        c && !u && g.observe(c),
        g.observe(t));
      let m = u ? e2(e) : null;
      return (
        u &&
          (function t() {
            let r = e2(e);
            (m && !tn(m, r) && n(), (m = r), (o = requestAnimationFrame(t)));
          })(),
        n(),
        () => {
          var e;
          (f.forEach((e) => {
            (i && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n));
          }),
            null == d || d(),
            null == (e = g) || e.disconnect(),
            (g = null),
            u && cancelAnimationFrame(o));
        }
      );
    }
    var to = e.i(74080),
      ti = "u" > typeof document ? l.useLayoutEffect : function () {};
    function tl(e, t) {
      let n, r, o;
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if ("function" == typeof e && e.toString() === t.toString()) return !0;
      if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
          if ((n = e.length) !== t.length) return !1;
          for (r = n; 0 != r--; ) if (!tl(e[r], t[r])) return !1;
          return !0;
        }
        if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; 0 != r--; ) {
          let n = o[r];
          if (("_owner" !== n || !e.$$typeof) && !tl(e[n], t[n])) return !1;
        }
        return !0;
      }
      return e != e && t != t;
    }
    function ta(e) {
      return "u" < typeof window
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function ts(e, t) {
      let n = ta(e);
      return Math.round(t * n) / n;
    }
    function tu(e) {
      let t = l.useRef(e);
      return (
        ti(() => {
          t.current = e;
        }),
        t
      );
    }
    var tc = e.i(83799),
      tf = e.i(24019),
      td = e.i(69375);
    let tp = l.createContext(void 0);
    function tg() {
      let e = l.useContext(tp);
      return e?.direction ?? "ltr";
    }
    let tm = {
      name: "hide",
      async fn(e) {
        var t;
        let { width: n, height: r, x: o, y: i } = e.rects.reference,
          l = await {
            ...((t = void 0),
            {
              name: "hide",
              options: (t = {}),
              async fn(e) {
                let { rects: n, platform: r } = e,
                  { strategy: o = "referenceHidden", ...i } = eI(t, e);
                switch (o) {
                  case "referenceHidden": {
                    let t = e$(
                      await r.detectOverflow(e, { ...i, elementContext: "reference" }),
                      n.reference,
                    );
                    return { data: { referenceHiddenOffsets: t, referenceHidden: eK(t) } };
                  }
                  case "escaped": {
                    let t = e$(await r.detectOverflow(e, { ...i, altBoundary: !0 }), n.floating);
                    return { data: { escapedOffsets: t, escaped: eK(t) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [void 0, void 0],
          }.fn(e);
        return {
          data: {
            referenceHidden: l.data?.referenceHidden || (0 === n && 0 === r && 0 === o && 0 === i),
          },
        };
      },
    };
    e.i(33848);
    let tv = { sideX: "left", sideY: "top" };
    function th(e, t, n) {
      let r = "inline-start" === e || "inline-end" === e;
      return {
        top: "top",
        right: r ? (n ? "inline-start" : "inline-end") : "right",
        bottom: "bottom",
        left: r ? (n ? "inline-end" : "inline-start") : "left",
      }[t];
    }
    function tE(e, t, n) {
      let { rects: r, placement: o } = e;
      return {
        side: th(t, eM(o), n),
        align: eA(o) || "center",
        anchor: { width: r.reference.width, height: r.reference.height },
        positioner: { width: r.floating.width, height: r.floating.height },
      };
    }
    function tb(e) {
      return null != e && "current" in e;
    }
    function ty(e) {
      let { children: t, elementsRef: n, labelsRef: o, onMapChange: i } = e,
        a = (0, x.useStableCallback)(i),
        s = l.useRef(0),
        u = (0, ee.useRefWithInit)(tR).current,
        c = (0, ee.useRefWithInit)(tx).current,
        [f, d] = l.useState(0),
        p = l.useRef(f),
        g = (0, x.useStableCallback)((e, t) => {
          (c.set(e, t ?? null), (p.current += 1), d(p.current));
        }),
        m = (0, x.useStableCallback)((e) => {
          (c.delete(e), (p.current += 1), d(p.current));
        }),
        v = l.useMemo(() => {
          let e = new Map();
          return (
            Array.from(c.keys())
              .filter((e) => e.isConnected)
              .sort(tS)
              .forEach((t, n) => {
                let r = c.get(t) ?? {};
                e.set(t, { ...r, index: n });
              }),
            e
          );
        }, [c, f]);
      ((0, A.useIsoLayoutEffect)(() => {
        if ("function" != typeof MutationObserver || 0 === v.size) return;
        let e = new MutationObserver((e) => {
          let t = new Set(),
            n = (e) => (t.has(e) ? t.delete(e) : t.add(e));
          (e.forEach((e) => {
            (e.removedNodes.forEach(n), e.addedNodes.forEach(n));
          }),
            0 === t.size && ((p.current += 1), d(p.current)));
        });
        return (
          v.forEach((t, n) => {
            n.parentElement && e.observe(n.parentElement, { childList: !0 });
          }),
          () => {
            e.disconnect();
          }
        );
      }, [v]),
        (0, A.useIsoLayoutEffect)(() => {
          (p.current === f &&
            (n.current.length !== v.size && (n.current.length = v.size),
            o && o.current.length !== v.size && (o.current.length = v.size),
            (s.current = v.size)),
            a(v));
        }, [a, v, n, o, f]),
        (0, A.useIsoLayoutEffect)(
          () => () => {
            n.current = [];
          },
          [n],
        ),
        (0, A.useIsoLayoutEffect)(
          () => () => {
            o && (o.current = []);
          },
          [o],
        ));
      let h = (0, x.useStableCallback)(
        (e) => (
          u.add(e),
          () => {
            u.delete(e);
          }
        ),
      );
      (0, A.useIsoLayoutEffect)(() => {
        u.forEach((e) => e(v));
      }, [u, v]);
      let E = l.useMemo(
        () => ({
          register: g,
          unregister: m,
          subscribeMapChange: h,
          elementsRef: n,
          labelsRef: o,
          nextIndexRef: s,
        }),
        [g, m, h, n, o, s],
      );
      return (0, r.jsx)(k.Provider, { value: E, children: t });
    }
    function tx() {
      return new Map();
    }
    function tR() {
      return new Set();
    }
    function tS(e, t) {
      let n = e.compareDocumentPosition(t);
      return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY
        ? -1
        : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS
          ? 1
          : 0;
    }
    var tw = e.i(36893);
    let tC = l.forwardRef(function (e, t) {
        let {
            anchor: n,
            positionMethod: o = "absolute",
            className: i,
            render: u,
            side: c,
            align: g,
            sideOffset: m = 0,
            alignOffset: v = 0,
            collisionBoundary: b = "clipping-ancestors",
            collisionPadding: y = 5,
            arrowPadding: R = 5,
            sticky: S = !1,
            disableAnchorTracking: w = !1,
            collisionAvoidance: C = ef.DROPDOWN_COLLISION_AVOIDANCE,
            ...T
          } = e,
          { store: O } = f(),
          I = (function () {
            let e = l.useContext(eh);
            if (void 0 === e) throw Error((0, a.default)(32));
            return e;
          })(),
          M = h(!0),
          k = O.useState("parent"),
          P = O.useState("floatingRootContext"),
          N = O.useState("floatingTreeRoot"),
          L = O.useState("mounted"),
          D = O.useState("open"),
          F = O.useState("modal"),
          H = O.useState("activeTriggerElement"),
          W = O.useState("transitionStatus"),
          j = O.useState("lastOpenChangeReason"),
          B = O.useState("floatingNodeId"),
          U = O.useState("floatingParentNodeId"),
          V = n,
          z = m,
          G = v,
          Y = g,
          $ = C;
        "context-menu" === k.type &&
          ((V = n ?? k.context?.anchor),
          (Y = Y ?? "start"),
          c || "center" === Y || ((G = e.alignOffset ?? 2), (z = e.sideOffset ?? -5)));
        let X = c,
          J = Y;
        "menu" === k.type
          ? ((X = X ?? "inline-end"),
            (J = J ?? "start"),
            ($ = e.collisionAvoidance ?? ef.POPUP_COLLISION_AVOIDANCE))
          : "menubar" === k.type && ((X = X ?? "bottom"), (J = J ?? "start"));
        let Z = "context-menu" === k.type,
          et = (function (e) {
            var t, n, r, o, i, a, s, u, c, f, d, p;
            let {
                anchor: g,
                positionMethod: m = "absolute",
                side: v = "bottom",
                sideOffset: h = 0,
                align: E = "center",
                alignOffset: b = 0,
                collisionBoundary: y,
                collisionPadding: R = 5,
                sticky: S = !1,
                arrowPadding: w = 5,
                disableAnchorTracking: C = !1,
                keepMounted: T = !1,
                floatingRootContext: O,
                mounted: I,
                collisionAvoidance: M,
                shiftCrossAxis: k = !1,
                nodeId: P,
                adaptiveOrigin: N,
                lazyFlip: L = !1,
                externalTree: D,
              } = e,
              [F, _] = l.useState(null);
            I || null === F || _(null);
            let H = M.side || "flip",
              W = M.align || "flip",
              j = M.fallbackAxisSide || "end",
              B = "function" == typeof g ? g : void 0,
              U = (0, x.useStableCallback)(B),
              V = B ? U : g,
              z = (0, eV.useValueAsRef)(g),
              G = "rtl" === tg(),
              Y =
                F ||
                {
                  top: "top",
                  right: "right",
                  bottom: "bottom",
                  left: "left",
                  "inline-end": G ? "left" : "right",
                  "inline-start": G ? "right" : "left",
                }[v],
              $ = "center" === E ? Y : `${Y}-${E}`,
              X = R,
              J = +("bottom" === v),
              Z = +("top" === v),
              et = +("right" === v),
              en = +("left" === v);
            "number" == typeof X
              ? (X = { top: X + J, right: X + en, bottom: X + Z, left: X + et })
              : X &&
                (X = {
                  top: (X.top || 0) + J,
                  right: (X.right || 0) + en,
                  bottom: (X.bottom || 0) + Z,
                  left: (X.left || 0) + et,
                });
            let er = { boundary: "clipping-ancestors" === y ? "clippingAncestors" : y, padding: X },
              eo = l.useRef(null),
              ei = (0, eV.useValueAsRef)(h),
              el = (0, eV.useValueAsRef)(b),
              ea = [
                ((t = (e) => {
                  let t = tE(e, v, G),
                    n = "function" == typeof ei.current ? ei.current(t) : ei.current,
                    r = "function" == typeof el.current ? el.current(t) : el.current;
                  return { mainAxis: n, crossAxis: r, alignmentAxis: r };
                }),
                (n = ["function" != typeof h ? h : 0, "function" != typeof b ? b : 0, G, v]),
                {
                  ...(void 0 === (r = t) && (r = 0),
                  {
                    name: "offset",
                    options: r,
                    async fn(e) {
                      var t, n;
                      let { x: o, y: i, placement: l, middlewareData: a } = e,
                        s = await eX(e, r);
                      return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                        null != (n = a.arrow) &&
                        n.alignmentOffset
                        ? {}
                        : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
                    },
                  }),
                  options: [t, n],
                }),
              ],
              es = "none" === W && "shift" !== H,
              eu = !es && (S || k || "shift" === H),
              ec =
                "none" === H
                  ? null
                  : {
                      ...{
                        name: "flip",
                        options:
                          (i = o =
                            {
                              ...er,
                              padding: {
                                top: X.top + 1,
                                right: X.right + 1,
                                bottom: X.bottom + 1,
                                left: X.left + 1,
                              },
                              mainAxis: !k && "flip" === H,
                              crossAxis: "flip" === W && "alignment",
                              fallbackAxisSideDirection: j,
                            }),
                        async fn(e) {
                          var t, n, r, o, l, a, s, u;
                          let c,
                            f,
                            d,
                            {
                              placement: p,
                              middlewareData: g,
                              rects: m,
                              initialPlacement: v,
                              platform: h,
                              elements: E,
                            } = e,
                            {
                              mainAxis: b = !0,
                              crossAxis: y = !0,
                              fallbackPlacements: x,
                              fallbackStrategy: R = "bestFit",
                              fallbackAxisSideDirection: S = "none",
                              flipAlignment: w = !0,
                              ...C
                            } = eI(i, e);
                          if (null != (t = g.arrow) && t.alignmentOffset) return {};
                          let T = eM(p),
                            O = eL(v),
                            I = eM(v) === v,
                            M = await (null == h.isRTL ? void 0 : h.isRTL(E.floating)),
                            A = x || (I || !w ? [ej(v)] : ((c = ej(v)), [eD(v), c, eD(c)])),
                            k = "none" !== S;
                          !x &&
                            k &&
                            A.push(
                              ...((f = eA(v)),
                              (d = (function (e, t, n) {
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (n) return t ? e_ : eF;
                                    return t ? eF : e_;
                                  case "left":
                                  case "right":
                                    return t ? eH : eW;
                                  default:
                                    return [];
                                }
                              })(eM(v), "start" === S, M)),
                              f &&
                                ((d = d.map((e) => e + "-" + f)), w && (d = d.concat(d.map(eD)))),
                              d),
                            );
                          let P = [v, ...A],
                            N = await h.detectOverflow(e, C),
                            L = [],
                            D = (null == (n = g.flip) ? void 0 : n.overflows) || [];
                          if ((b && L.push(N[T]), y)) {
                            let e,
                              t,
                              n,
                              r,
                              o =
                                ((a = p),
                                (s = m),
                                void 0 === (u = M) && (u = !1),
                                (e = eA(a)),
                                (n = eP((t = ek(eL(a))))),
                                (r =
                                  "x" === t
                                    ? e === (u ? "end" : "start")
                                      ? "right"
                                      : "left"
                                    : "start" === e
                                      ? "bottom"
                                      : "top"),
                                s.reference[n] > s.floating[n] && (r = ej(r)),
                                [r, ej(r)]);
                            L.push(N[o[0]], N[o[1]]);
                          }
                          if (
                            ((D = [...D, { placement: p, overflows: L }]), !L.every((e) => e <= 0))
                          ) {
                            let e = ((null == (r = g.flip) ? void 0 : r.index) || 0) + 1,
                              t = P[e];
                            if (
                              t &&
                              ("alignment" !== y ||
                                O === eL(t) ||
                                D.every((e) => eL(e.placement) !== O || e.overflows[0] > 0))
                            )
                              return { data: { index: e, overflows: D }, reset: { placement: t } };
                            let n =
                              null ==
                              (o = D.filter((e) => e.overflows[0] <= 0).sort(
                                (e, t) => e.overflows[1] - t.overflows[1],
                              )[0])
                                ? void 0
                                : o.placement;
                            if (!n)
                              switch (R) {
                                case "bestFit": {
                                  let e =
                                    null ==
                                    (l = D.filter((e) => {
                                      if (k) {
                                        let t = eL(e.placement);
                                        return t === O || "y" === t;
                                      }
                                      return !0;
                                    })
                                      .map((e) => [
                                        e.placement,
                                        e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                                      ])
                                      .sort((e, t) => e[1] - t[1])[0])
                                      ? void 0
                                      : l[0];
                                  e && (n = e);
                                  break;
                                }
                                case "initialPlacement":
                                  n = v;
                              }
                            if (p !== n) return { reset: { placement: n } };
                          }
                          return {};
                        },
                      },
                      options: [o, void 0],
                    },
              ef = es
                ? null
                : ((a = (e) => {
                    var t, n;
                    let r = (0, q.ownerDocument)(e.elements.floating).documentElement;
                    return {
                      ...er,
                      rootBoundary: k
                        ? { x: 0, y: 0, width: r.clientWidth, height: r.clientHeight }
                        : void 0,
                      mainAxis: "none" !== W,
                      crossAxis: eu,
                      limiter:
                        S || k
                          ? void 0
                          : {
                              ...(void 0 ===
                                (n = t =
                                  (e) => {
                                    if (!eo.current) return {};
                                    let { width: t, height: n } =
                                        eo.current.getBoundingClientRect(),
                                      r = eL(eM(e.placement)),
                                      o = "y" === r ? X.left + X.right : X.top + X.bottom;
                                    return { offset: ("y" === r ? t : n) / 2 + o / 2 };
                                  }) && (n = {}),
                              {
                                options: n,
                                fn(e) {
                                  let { x: t, y: r, placement: o, rects: i, middlewareData: l } = e,
                                    {
                                      offset: a = 0,
                                      mainAxis: s = !0,
                                      crossAxis: u = !0,
                                    } = eI(n, e),
                                    c = { x: t, y: r },
                                    f = eL(o),
                                    d = ek(f),
                                    p = c[d],
                                    g = c[f],
                                    m = eI(a, e),
                                    v =
                                      "number" == typeof m
                                        ? { mainAxis: m, crossAxis: 0 }
                                        : { mainAxis: 0, crossAxis: 0, ...m };
                                  if (s) {
                                    let e = "y" === d ? "height" : "width",
                                      t = i.reference[d] - i.floating[e] + v.mainAxis,
                                      n = i.reference[d] + i.reference[e] - v.mainAxis;
                                    p < t ? (p = t) : p > n && (p = n);
                                  }
                                  if (u) {
                                    var h, E;
                                    let e = "y" === d ? "width" : "height",
                                      t = eq.has(eM(o)),
                                      n =
                                        i.reference[f] -
                                        i.floating[e] +
                                        ((t && (null == (h = l.offset) ? void 0 : h[f])) || 0) +
                                        (t ? 0 : v.crossAxis),
                                      r =
                                        i.reference[f] +
                                        i.reference[e] +
                                        (t ? 0 : (null == (E = l.offset) ? void 0 : E[f]) || 0) -
                                        (t ? v.crossAxis : 0);
                                    g < n ? (g = n) : g > r && (g = r);
                                  }
                                  return { [d]: p, [f]: g };
                                },
                              }),
                              options: [t, void 0],
                            },
                    };
                  }),
                  (s = [er, S, k, X, W]),
                  {
                    ...(void 0 === (u = a) && (u = {}),
                    {
                      name: "shift",
                      options: u,
                      async fn(e) {
                        let { x: t, y: n, placement: r, platform: o } = e,
                          {
                            mainAxis: i = !0,
                            crossAxis: l = !1,
                            limiter: a = {
                              fn: (e) => {
                                let { x: t, y: n } = e;
                                return { x: t, y: n };
                              },
                            },
                            ...s
                          } = eI(u, e),
                          c = { x: t, y: n },
                          f = await o.detectOverflow(e, s),
                          d = eL(eM(r)),
                          p = ek(d),
                          g = c[p],
                          m = c[d];
                        if (i) {
                          let e = "y" === p ? "top" : "left",
                            t = "y" === p ? "bottom" : "right",
                            n = g + f[e],
                            r = g - f[t];
                          g = eR(n, ex(g, r));
                        }
                        if (l) {
                          let e = "y" === d ? "top" : "left",
                            t = "y" === d ? "bottom" : "right",
                            n = m + f[e],
                            r = m - f[t];
                          m = eR(n, ex(m, r));
                        }
                        let v = a.fn({ ...e, [p]: g, [d]: m });
                        return {
                          ...v,
                          data: { x: v.x - t, y: v.y - n, enabled: { [p]: i, [d]: l } },
                        };
                      },
                    }),
                    options: [a, s],
                  });
            ("shift" === H || "shift" === W || "center" === E ? ea.push(ef, ec) : ea.push(ec, ef),
              ea.push(
                {
                  ...{
                    name: "size",
                    options:
                      (f = c =
                        {
                          ...er,
                          apply({
                            elements: { floating: e },
                            rects: { reference: t },
                            availableWidth: n,
                            availableHeight: r,
                          }) {
                            let o = e.style;
                            (o.setProperty("--available-width", `${n}px`),
                              o.setProperty("--available-height", `${r}px`),
                              o.setProperty("--anchor-width", `${t.width}px`),
                              o.setProperty("--anchor-height", `${t.height}px`));
                          },
                        }),
                    async fn(e) {
                      var t, n;
                      let r,
                        o,
                        { placement: i, rects: l, platform: a, elements: s } = e,
                        { apply: u = () => {}, ...c } = eI(f, e),
                        d = await a.detectOverflow(e, c),
                        p = eM(i),
                        g = eA(i),
                        m = "y" === eL(i),
                        { width: v, height: h } = l.floating;
                      "top" === p || "bottom" === p
                        ? ((r = p),
                          (o =
                            g ===
                            ((await (null == a.isRTL ? void 0 : a.isRTL(s.floating)))
                              ? "start"
                              : "end")
                              ? "left"
                              : "right"))
                        : ((o = p), (r = "end" === g ? "top" : "bottom"));
                      let E = h - d.top - d.bottom,
                        b = v - d.left - d.right,
                        y = ex(h - d[r], E),
                        x = ex(v - d[o], b),
                        R = !e.middlewareData.shift,
                        S = y,
                        w = x;
                      if (
                        (null != (t = e.middlewareData.shift) && t.enabled.x && (w = b),
                        null != (n = e.middlewareData.shift) && n.enabled.y && (S = E),
                        R && !g)
                      ) {
                        let e = eR(d.left, 0),
                          t = eR(d.right, 0),
                          n = eR(d.top, 0),
                          r = eR(d.bottom, 0);
                        m
                          ? (w = v - 2 * (0 !== e || 0 !== t ? e + t : eR(d.left, d.right)))
                          : (S = h - 2 * (0 !== n || 0 !== r ? n + r : eR(d.top, d.bottom)));
                      }
                      await u({ ...e, availableWidth: w, availableHeight: S });
                      let C = await a.getDimensions(s.floating);
                      return v !== C.width || h !== C.height ? { reset: { rects: !0 } } : {};
                    },
                  },
                  options: [c, void 0],
                },
                ((d = () => ({
                  element: eo.current || document.createElement("div"),
                  padding: w,
                  offsetParent: "floating",
                })),
                (p = [w]),
                {
                  name: "arrow",
                  options: d,
                  async fn(e) {
                    let {
                        x: t,
                        y: n,
                        placement: r,
                        rects: o,
                        platform: i,
                        elements: l,
                        middlewareData: a,
                      } = e,
                      { element: s, padding: u = 0, offsetParent: c = "real" } = eI(d, e) || {};
                    if (null == s) return {};
                    let f = eB(u),
                      p = { x: t, y: n },
                      g = ek(eL(r)),
                      m = eP(g),
                      v = await i.getDimensions(s),
                      h = "y" === g,
                      E = h ? "clientHeight" : "clientWidth",
                      b = o.reference[m] + o.reference[g] - p[g] - o.floating[m],
                      y = p[g] - o.reference[g],
                      x = "real" === c ? await i.getOffsetParent?.(s) : l.floating,
                      R = l.floating[E] || o.floating[m];
                    (R && (await i.isElement?.(x))) || (R = l.floating[E] || o.floating[m]);
                    let S = R / 2 - v[m] / 2 - 1,
                      w = Math.min(f[h ? "top" : "left"], S),
                      C = Math.min(f[h ? "bottom" : "right"], S),
                      T = R - v[m] - C,
                      O = R / 2 - v[m] / 2 + (b / 2 - y / 2),
                      I = eR(w, ex(O, T)),
                      M =
                        !a.arrow &&
                        null != eA(r) &&
                        O !== I &&
                        o.reference[m] / 2 - (O < w ? w : C) - v[m] / 2 < 0,
                      A = M ? (O < w ? O - w : O - T) : 0;
                    return {
                      [g]: p[g] + A,
                      data: { [g]: I, centerOffset: O - I - A, ...(M && { alignmentOffset: A }) },
                      reset: M,
                    };
                  },
                  options: [d, p],
                }),
                {
                  name: "transformOrigin",
                  fn(e) {
                    let { elements: t, middlewareData: n, placement: r, rects: o, y: i } = e,
                      l = eM(r),
                      a = eL(l),
                      s = eo.current,
                      u = n.arrow?.x || 0,
                      c = n.arrow?.y || 0,
                      f = s?.clientWidth || 0,
                      d = s?.clientHeight || 0,
                      p = u + f / 2,
                      g = c + d / 2,
                      m = Math.abs(n.shift?.y || 0),
                      E = o.reference.height / 2,
                      b = "function" == typeof h ? h(tE(e, v, G)) : h,
                      y = m > b,
                      x = {
                        top: `${p}px calc(100% + ${b}px)`,
                        bottom: `${p}px ${-b}px`,
                        left: `calc(100% + ${b}px) ${g}px`,
                        right: `${-b}px ${g}px`,
                      }[l],
                      R = `${p}px ${o.reference.y + E - i}px`;
                    return (
                      t.floating.style.setProperty(
                        "--transform-origin",
                        eu && "y" === a && y ? R : x,
                      ),
                      {}
                    );
                  },
                },
                tm,
                N,
              ),
              (0, A.useIsoLayoutEffect)(() => {
                !I &&
                  O &&
                  O.update({
                    referenceElement: null,
                    floatingElement: null,
                    domReferenceElement: null,
                  });
              }, [I, O]));
            let ed = l.useMemo(
                () => ({
                  elementResize: !C && "u" > typeof ResizeObserver,
                  layoutShift: !C && "u" > typeof IntersectionObserver,
                }),
                [C],
              ),
              {
                refs: ep,
                elements: eg,
                x: em,
                y: ev,
                middlewareData: eh,
                update: eE,
                placement: eb,
                context: ey,
                isPositioned: eS,
                floatingStyles: ew,
              } = (function (e = {}) {
                let { nodeId: t, externalTree: n } = e,
                  r = (function (e) {
                    let { open: t = !1, onOpenChange: n, elements: r = {} } = e,
                      o = (0, tc.useId)(),
                      i = null != (0, Q.useFloatingParentNodeId)(),
                      l = (0, ee.useRefWithInit)(
                        () =>
                          new tf.FloatingRootStore({
                            open: t,
                            onOpenChange: n,
                            referenceElement: r.reference ?? null,
                            floatingElement: r.floating ?? null,
                            triggerElements: new td.PopupTriggerMap(),
                            floatingId: o,
                            nested: i,
                            noEmit: !1,
                          }),
                      ).current;
                    return (
                      (0, A.useIsoLayoutEffect)(() => {
                        let e = { open: t, floatingId: o };
                        (void 0 !== r.reference &&
                          ((e.referenceElement = r.reference),
                          (e.domReferenceElement = (0, K.isElement)(r.reference)
                            ? r.reference
                            : null)),
                          void 0 !== r.floating && (e.floatingElement = r.floating),
                          l.update(e));
                      }, [t, o, r.reference, r.floating, l]),
                      (l.context.onOpenChange = n),
                      (l.context.nested = i),
                      (l.context.noEmit = !1),
                      l
                    );
                  })(e),
                  o = e.rootContext || r,
                  i = {
                    reference: o.useState("referenceElement"),
                    floating: o.useState("floatingElement"),
                    domReference: o.useState("domReferenceElement"),
                  },
                  [a, s] = l.useState(null),
                  u = l.useRef(null),
                  c = (0, Q.useFloatingTree)(n);
                (0, A.useIsoLayoutEffect)(() => {
                  i.domReference && (u.current = i.domReference);
                }, [i.domReference]);
                let f = (function (e) {
                    void 0 === e && (e = {});
                    let {
                        placement: t = "bottom",
                        strategy: n = "absolute",
                        middleware: r = [],
                        platform: o,
                        elements: { reference: i, floating: a } = {},
                        transform: s = !0,
                        whileElementsMounted: u,
                        open: c,
                      } = e,
                      [f, d] = l.useState({
                        x: 0,
                        y: 0,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1,
                      }),
                      [p, g] = l.useState(r);
                    tl(p, r) || g(r);
                    let [m, v] = l.useState(null),
                      [h, E] = l.useState(null),
                      b = l.useCallback((e) => {
                        e !== S.current && ((S.current = e), v(e));
                      }, []),
                      y = l.useCallback((e) => {
                        e !== w.current && ((w.current = e), E(e));
                      }, []),
                      x = i || m,
                      R = a || h,
                      S = l.useRef(null),
                      w = l.useRef(null),
                      C = l.useRef(f),
                      T = null != u,
                      O = tu(u),
                      I = tu(o),
                      M = tu(c),
                      A = l.useCallback(() => {
                        var e, r;
                        let o, i, l;
                        if (!S.current || !w.current) return;
                        let a = { placement: t, strategy: n, middleware: p };
                        (I.current && (a.platform = I.current),
                          ((e = S.current),
                          (r = w.current),
                          (o = new Map()),
                          (l = { ...(i = { platform: tt, ...a }).platform, _c: o }),
                          eY(e, r, { ...i, platform: l })).then((e) => {
                            let t = { ...e, isPositioned: !1 !== M.current };
                            k.current &&
                              !tl(C.current, t) &&
                              ((C.current = t),
                              to.flushSync(() => {
                                d(t);
                              }));
                          }));
                      }, [p, t, n, I, M]);
                    ti(() => {
                      !1 === c &&
                        C.current.isPositioned &&
                        ((C.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
                    }, [c]);
                    let k = l.useRef(!1);
                    (ti(
                      () => (
                        (k.current = !0),
                        () => {
                          k.current = !1;
                        }
                      ),
                      [],
                    ),
                      ti(() => {
                        if ((x && (S.current = x), R && (w.current = R), x && R)) {
                          if (O.current) return O.current(x, R, A);
                          A();
                        }
                      }, [x, R, A, O, T]));
                    let P = l.useMemo(
                        () => ({ reference: S, floating: w, setReference: b, setFloating: y }),
                        [b, y],
                      ),
                      N = l.useMemo(() => ({ reference: x, floating: R }), [x, R]),
                      L = l.useMemo(() => {
                        let e = { position: n, left: 0, top: 0 };
                        if (!N.floating) return e;
                        let t = ts(N.floating, f.x),
                          r = ts(N.floating, f.y);
                        return s
                          ? {
                              ...e,
                              transform: "translate(" + t + "px, " + r + "px)",
                              ...(ta(N.floating) >= 1.5 && { willChange: "transform" }),
                            }
                          : { position: n, left: t, top: r };
                      }, [n, s, N.floating, f.x, f.y]);
                    return l.useMemo(
                      () => ({ ...f, update: A, refs: P, elements: N, floatingStyles: L }),
                      [f, A, P, N, L],
                    );
                  })({ ...e, elements: { ...i, ...(a && { reference: a }) } }),
                  d = l.useCallback(
                    (e) => {
                      let t = (0, K.isElement)(e)
                        ? {
                            getBoundingClientRect: () => e.getBoundingClientRect(),
                            getClientRects: () => e.getClientRects(),
                            contextElement: e,
                          }
                        : e;
                      (s(t), f.refs.setReference(t));
                    },
                    [f.refs],
                  ),
                  [p, g] = l.useState(null),
                  [m, v] = l.useState(null);
                (o.useSyncedValue("referenceElement", p),
                  o.useSyncedValue("domReferenceElement", (0, K.isElement)(p) ? p : null),
                  o.useSyncedValue("floatingElement", m));
                let h = l.useCallback(
                    (e) => {
                      (((0, K.isElement)(e) || null === e) && ((u.current = e), g(e)),
                        ((0, K.isElement)(f.refs.reference.current) ||
                          null === f.refs.reference.current ||
                          (null !== e && !(0, K.isElement)(e))) &&
                          f.refs.setReference(e));
                    },
                    [f.refs, g],
                  ),
                  E = l.useCallback(
                    (e) => {
                      (v(e), f.refs.setFloating(e));
                    },
                    [f.refs],
                  ),
                  b = l.useMemo(
                    () => ({
                      ...f.refs,
                      setReference: h,
                      setFloating: E,
                      setPositionReference: d,
                      domReference: u,
                    }),
                    [f.refs, h, E, d],
                  ),
                  y = l.useMemo(
                    () => ({ ...f.elements, domReference: i.domReference }),
                    [f.elements, i.domReference],
                  ),
                  x = o.useState("open"),
                  R = o.useState("floatingId"),
                  S = l.useMemo(
                    () => ({
                      ...f,
                      dataRef: o.context.dataRef,
                      open: x,
                      onOpenChange: o.setOpen,
                      events: o.context.events,
                      floatingId: R,
                      refs: b,
                      elements: y,
                      nodeId: t,
                      rootStore: o,
                    }),
                    [f, b, y, t, o, x, R],
                  );
                return (
                  (0, A.useIsoLayoutEffect)(() => {
                    o.context.dataRef.current.floatingContext = S;
                    let e = c?.nodesRef.current.find((e) => e.id === t);
                    e && (e.context = S);
                  }),
                  l.useMemo(
                    () => ({ ...f, context: S, refs: b, elements: y, rootStore: o }),
                    [f, b, y, S, o],
                  )
                );
              })({
                rootContext: O,
                placement: $,
                middleware: ea,
                strategy: m,
                whileElementsMounted: T ? void 0 : (...e) => tr(...e, ed),
                nodeId: P,
                externalTree: D,
              }),
              { sideX: eC, sideY: eT } = eh.adaptiveOrigin || tv,
              eO = eS ? m : "fixed",
              eN = l.useMemo(() => {
                let e = N ? { position: eO, [eC]: em, [eT]: ev } : { position: eO, ...ew };
                return (eS || (e.opacity = 0), e);
              }, [N, eO, eC, em, eT, ev, ew, eS]),
              eU = l.useRef(null);
            ((0, A.useIsoLayoutEffect)(() => {
              if (!I) return;
              let e = z.current,
                t = "function" == typeof e ? e() : e,
                n = (tb(t) ? t.current : t) || null;
              n !== eU.current && (ep.setPositionReference(n), (eU.current = n));
            }, [I, ep, V, z]),
              l.useEffect(() => {
                if (!I) return;
                let e = z.current;
                "function" != typeof e &&
                  tb(e) &&
                  e.current !== eU.current &&
                  (ep.setPositionReference(e.current), (eU.current = e.current));
              }, [I, ep, V, z]),
              l.useEffect(() => {
                if (T && I && eg.domReference && eg.floating)
                  return tr(eg.domReference, eg.floating, eE, ed);
              }, [T, I, eg, eE, ed]));
            let ez = eM(eb),
              eG = th(v, ez, G),
              e$ = eA(eb) || "center",
              eK = !!eh.hide?.referenceHidden;
            (0, A.useIsoLayoutEffect)(() => {
              L && I && eS && _(ez);
            }, [L, I, eS, ez]);
            let eJ = l.useMemo(
                () => ({ position: "absolute", top: eh.arrow?.y, left: eh.arrow?.x }),
                [eh.arrow],
              ),
              eQ = eh.arrow?.centerOffset !== 0;
            return l.useMemo(
              () => ({
                positionerStyles: eN,
                arrowStyles: eJ,
                arrowRef: eo,
                arrowUncentered: eQ,
                side: eG,
                align: e$,
                physicalSide: ez,
                anchorHidden: eK,
                refs: ep,
                context: ey,
                isPositioned: eS,
                update: eE,
              }),
              [eN, eJ, eo, eQ, eG, e$, ez, eK, ep, ey, eS, eE],
            );
          })({
            anchor: V,
            floatingRootContext: P,
            positionMethod: M ? "fixed" : o,
            mounted: L,
            side: X,
            sideOffset: z,
            align: J,
            alignOffset: G,
            arrowPadding: Z ? 0 : R,
            collisionBoundary: b,
            collisionPadding: y,
            sticky: S,
            nodeId: B,
            keepMounted: I,
            disableAnchorTracking: w,
            collisionAvoidance: $,
            shiftCrossAxis: Z && !("side" in $ && "flip" === $.side),
            externalTree: N,
          }),
          en = l.useMemo(() => {
            let e = {};
            return (
              D || (e.pointerEvents = "none"),
              { role: "presentation", hidden: !L, style: { ...et.positionerStyles, ...e } }
            );
          }, [D, L, et.positionerStyles]);
        (l.useEffect(() => {
          function e(e) {
            e.open &&
              (e.parentNodeId === B && O.set("hoverEnabled", !1),
              e.nodeId !== B &&
                e.parentNodeId === O.select("floatingParentNodeId") &&
                O.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.siblingOpen)));
          }
          return (
            N.events.on("menuopenchange", e),
            () => {
              N.events.off("menuopenchange", e);
            }
          );
        }, [O, N.events, B]),
          l.useEffect(() => {
            if (null != O.select("floatingParentNodeId"))
              return (
                N.events.on("menuopenchange", e),
                () => {
                  N.events.off("menuopenchange", e);
                }
              );
            function e(e) {
              if (e.open || e.nodeId !== O.select("floatingParentNodeId")) return;
              let t = e.reason ?? E.REASONS.siblingOpen;
              O.setOpen(!1, (0, _.createChangeEventDetails)(t));
            }
          }, [N.events, O]),
          l.useEffect(() => {
            function e(e) {
              D &&
                e.nodeId === O.select("floatingParentNodeId") &&
                e.target &&
                H &&
                H !== e.target &&
                O.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.siblingOpen));
            }
            return (
              N.events.on("itemhover", e),
              () => {
                N.events.off("itemhover", e);
              }
            );
          }, [N.events, D, H, O]),
          l.useEffect(() => {
            let e = {
              open: D,
              nodeId: B,
              parentNodeId: U,
              reason: O.select("lastOpenChangeReason"),
            };
            N.events.emit("menuopenchange", e);
          }, [N.events, D, O, B, U]));
        let er = {
            open: D,
            side: et.side,
            align: et.align,
            anchorHidden: et.anchorHidden,
            nested: "menu" === k.type,
          },
          eo = l.useMemo(
            () => ({
              side: et.side,
              align: et.align,
              arrowRef: et.arrowRef,
              arrowUncentered: et.arrowUncentered,
              arrowStyles: et.arrowStyles,
              nodeId: et.context.nodeId,
            }),
            [et.side, et.align, et.arrowRef, et.arrowUncentered, et.arrowStyles, et.context.nodeId],
          ),
          ei = (0, d.useRenderElement)("div", e, {
            state: er,
            stateAttributesMapping: p.popupStateMapping,
            ref: [t, O.useStateSetter("positionerElement")],
            props: [en, ep(W), T],
          }),
          el =
            L &&
            "menu" !== k.type &&
            (("menubar" !== k.type && F && j !== E.REASONS.triggerHover) ||
              ("menubar" === k.type && k.context.modal)),
          ea = null;
        return (
          "menubar" === k.type ? (ea = k.context.contentElement) : void 0 === k.type && (ea = H),
          (0, r.jsxs)(s.Provider, {
            value: eo,
            children: [
              el &&
                (0, r.jsx)(tw.InternalBackdrop, {
                  ref:
                    "context-menu" === k.type || "nested-context-menu" === k.type
                      ? k.context.internalBackdropRef
                      : null,
                  inert: (0, eb.inertValue)(!D),
                  cutout: ea,
                }),
              (0, r.jsx)(Q.FloatingNode, {
                id: B,
                children: (0, r.jsx)(ty, {
                  elementsRef: O.context.itemDomElements,
                  labelsRef: O.context.itemLabels,
                  children: ei,
                }),
              }),
            ],
          })
        );
      }),
      tT = l.createContext(void 0),
      tO = l.memo(
        l.forwardRef(function (e, t) {
          let {
              render: n,
              className: o,
              value: i,
              defaultValue: a,
              onValueChange: s,
              disabled: u = !1,
              ...c
            } = e,
            [f, p] = R({ controlled: i, default: a, name: "MenuRadioGroup" }),
            g = (0, x.useStableCallback)(s),
            m = (0, x.useStableCallback)((e, t) => {
              (g?.(e, t), t.isCanceled || p(e));
            }),
            v = (0, d.useRenderElement)("div", e, {
              state: { disabled: u },
              ref: t,
              props: { role: "group", "aria-disabled": u || void 0, ...c },
            }),
            h = l.useMemo(() => ({ value: f, setValue: m, disabled: u }), [f, m, u]);
          return (0, r.jsx)(tT.Provider, { value: h, children: v });
        }),
      ),
      tI = l.createContext(void 0),
      tM = l.forwardRef(function (e, t) {
        let {
            render: n,
            className: o,
            id: i,
            label: s,
            nativeButton: c = !1,
            disabled: p = !1,
            closeOnClick: g = !1,
            value: m,
            ...v
          } = e,
          h = N({ label: s }),
          b = u(!0),
          y = (0, L.useBaseUiId)(i),
          { store: R } = f(),
          S = R.useState("isActive", h.index),
          w = R.useState("itemProps"),
          {
            value: C,
            setValue: T,
            disabled: O,
          } = (function () {
            let e = l.useContext(tT);
            if (void 0 === e) throw Error((0, a.default)(34));
            return e;
          })(),
          A = O || p,
          k = C === m,
          { getItemProps: P, itemRef: D } = M({
            closeOnClick: g,
            disabled: A,
            highlighted: S,
            id: y,
            store: R,
            nativeButton: c,
            nodeId: b?.nodeId,
            itemMetadata: I,
          }),
          H = l.useMemo(() => ({ disabled: A, highlighted: S, checked: k }), [A, S, k]),
          W = (0, x.useStableCallback)((e) => {
            T(m, {
              ...(0, _.createChangeEventDetails)(E.REASONS.itemPress, e.nativeEvent),
              preventUnmountOnClose: () => {},
            });
          }),
          j = (0, d.useRenderElement)("div", e, {
            state: H,
            stateAttributesMapping: F,
            props: [w, { role: "menuitemradio", "aria-checked": k, onClick: W }, v, P],
            ref: [D, t, h.ref],
          });
        return (0, r.jsx)(tI.Provider, { value: H, children: j });
      }),
      tA = l.forwardRef(function (e, t) {
        let { render: n, className: r, keepMounted: o = !1, ...i } = e,
          s = (function () {
            let e = l.useContext(tI);
            if (void 0 === e) throw Error((0, a.default)(35));
            return e;
          })(),
          u = l.useRef(null),
          { transitionStatus: c, setMounted: f } = (0, W.useTransitionStatus)(s.checked);
        (0, j.useOpenChangeComplete)({
          open: s.checked,
          ref: u,
          onComplete() {
            s.checked || f(!1);
          },
        });
        let p = {
          checked: s.checked,
          disabled: s.disabled,
          highlighted: s.highlighted,
          transitionStatus: c,
        };
        return (0, d.useRenderElement)("span", e, {
          state: p,
          stateAttributesMapping: F,
          ref: [t, u],
          props: { "aria-hidden": !0, ...i },
          enabled: o || s.checked,
        });
      });
    var tk = e.i(66196),
      tP = e.i(3851),
      tN = e.i(33605),
      tL = e.i(89633);
    function tD(e, t, n) {
      return Math.floor(e / t) !== n;
    }
    function tF(e, t) {
      return t < 0 || t >= e.current.length;
    }
    function t_(e, t) {
      return tW(e, { disabledIndices: t });
    }
    function tH(e, t) {
      return tW(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
    }
    function tW(
      e,
      { startingIndex: t = -1, decrement: n = !1, disabledIndices: r, amount: o = 1 } = {},
    ) {
      let i = t;
      do i += n ? -o : o;
      while (i >= 0 && i <= e.current.length - 1 && tj(e, i, r));
      return i;
    }
    function tj(e, t, n) {
      if ("function" == typeof n) return n(t);
      if (n) return n.includes(t);
      let r = e.current[t];
      return !!r && (r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled"));
    }
    var tB = e.i(98442);
    function tU(e, t, n) {
      switch (e) {
        case "vertical":
          return t;
        case "horizontal":
          return n;
        default:
          return t || n;
      }
    }
    function tV(e, t) {
      return tU(
        t,
        e === er.ARROW_UP || e === er.ARROW_DOWN,
        e === er.ARROW_LEFT || e === er.ARROW_RIGHT,
      );
    }
    function tz(e, t, n) {
      return (
        tU(t, e === er.ARROW_DOWN, n ? e === er.ARROW_LEFT : e === er.ARROW_RIGHT) ||
        "Enter" === e ||
        " " === e ||
        "" === e
      );
    }
    var tG = e.i(26665),
      tY = e.i(6157);
    let t$ = l.createContext(null);
    function tK(e) {
      let t = l.useContext(t$);
      if (null === t && !e) throw Error((0, a.default)(5));
      return t;
    }
    var tq = e.i(50091),
      tX = e.i(83921),
      tJ = e.i(98263),
      tQ = e.i(5671),
      tZ = e.i(628);
    let t0 = {
      ...tZ.popupStoreSelectors,
      disabled: (0, tX.createSelector)(
        (e) => ("menubar" === e.parent.type && e.parent.context.disabled) || e.disabled,
      ),
      modal: (0, tX.createSelector)(
        (e) => (void 0 === e.parent.type || "context-menu" === e.parent.type) && (e.modal ?? !0),
      ),
      allowMouseEnter: (0, tX.createSelector)((e) => e.allowMouseEnter),
      stickIfOpen: (0, tX.createSelector)((e) => e.stickIfOpen),
      parent: (0, tX.createSelector)((e) => e.parent),
      rootId: (0, tX.createSelector)((e) =>
        "menu" === e.parent.type
          ? e.parent.store.select("rootId")
          : void 0 !== e.parent.type
            ? e.parent.context.rootId
            : e.rootId,
      ),
      activeIndex: (0, tX.createSelector)((e) => e.activeIndex),
      isActive: (0, tX.createSelector)((e, t) => e.activeIndex === t),
      hoverEnabled: (0, tX.createSelector)((e) => e.hoverEnabled),
      instantType: (0, tX.createSelector)((e) => e.instantType),
      lastOpenChangeReason: (0, tX.createSelector)((e) => e.openChangeReason),
      floatingTreeRoot: (0, tX.createSelector)((e) =>
        "menu" === e.parent.type ? e.parent.store.select("floatingTreeRoot") : e.floatingTreeRoot,
      ),
      floatingNodeId: (0, tX.createSelector)((e) => e.floatingNodeId),
      floatingParentNodeId: (0, tX.createSelector)((e) => e.floatingParentNodeId),
      itemProps: (0, tX.createSelector)((e) => e.itemProps),
      closeDelay: (0, tX.createSelector)((e) => e.closeDelay),
      keyboardEventRelay: (0, tX.createSelector)((e) =>
        e.keyboardEventRelay
          ? e.keyboardEventRelay
          : "menu" === e.parent.type
            ? e.parent.store.select("keyboardEventRelay")
            : void 0,
      ),
    };
    class t1 extends tJ.ReactStore {
      constructor(e) {
        (super(
          {
            ...{
              ...(0, tZ.createInitialPopupStoreState)(),
              disabled: !1,
              modal: !0,
              allowMouseEnter: !1,
              stickIfOpen: !0,
              parent: { type: void 0 },
              rootId: void 0,
              activeIndex: null,
              hoverEnabled: !0,
              instantType: void 0,
              openChangeReason: null,
              floatingTreeRoot: new tQ.FloatingTreeStore(),
              floatingNodeId: void 0,
              floatingParentNodeId: null,
              itemProps: ed.EMPTY_OBJECT,
              keyboardEventRelay: void 0,
              closeDelay: 0,
            },
            ...e,
          },
          {
            positionerRef: l.createRef(),
            popupRef: l.createRef(),
            typingRef: { current: !1 },
            itemDomElements: { current: [] },
            itemLabels: { current: [] },
            allowMouseUpTriggerRef: { current: !1 },
            triggerFocusTargetRef: l.createRef(),
            beforeContentFocusGuardRef: l.createRef(),
            onOpenChangeComplete: void 0,
            triggerElements: new td.PopupTriggerMap(),
          },
          t0,
        ),
          (this.unsubscribeParentListener = this.observe("parent", (e) => {
            if ((this.unsubscribeParentListener?.(), "menu" === e.type)) {
              ((this.unsubscribeParentListener = e.store.subscribe(() => {
                this.notifyAll();
              })),
                (this.context.allowMouseUpTriggerRef = e.store.context.allowMouseUpTriggerRef));
              return;
            }
            (void 0 !== e.type &&
              (this.context.allowMouseUpTriggerRef = e.context.allowMouseUpTriggerRef),
              (this.unsubscribeParentListener = null));
          })));
      }
      setOpen(e, t) {
        this.state.floatingRootContext.context.events.emit("setOpen", { open: e, eventDetails: t });
      }
      static useStore(e, t) {
        let n = (0, ee.useRefWithInit)(() => new t1(t)).current;
        return e ?? n;
      }
      unsubscribeParentListener = null;
    }
    var t2 = e.i(58642);
    let t3 = l.createContext(void 0);
    function t5() {
      return l.useContext(t3);
    }
    let t4 = (0, tP.fastComponent)(function (e) {
      let t,
        n,
        o,
        {
          children: i,
          open: a,
          onOpenChange: s,
          onOpenChangeComplete: u,
          defaultOpen: d = !1,
          disabled: p = !1,
          modal: g,
          loopFocus: m = !0,
          orientation: v = "vertical",
          actionsRef: b,
          closeParentOnEsc: y = !1,
          handle: R,
          triggerId: S,
          defaultTriggerId: w = null,
          highlightItemOnHover: C = !0,
        } = e,
        O = h(!0),
        I = f(!0),
        M = tK(!0),
        k = t5(),
        P = l.useMemo(
          () =>
            k && I
              ? { type: "menu", store: I.store }
              : M
                ? { type: "menubar", context: M }
                : O && !I
                  ? { type: "context-menu", context: O }
                  : { type: void 0 },
          [O, I, M, k],
        ),
        N = t1.useStore(R?.store, {
          open: d,
          openProp: a,
          activeTriggerId: w,
          triggerIdProp: S,
          parent: P,
        });
      ((o = l.useRef(!0)).current &&
        ((o.current = !1),
        (() => {
          void 0 === a &&
            !1 === N.state.open &&
            !0 === d &&
            N.update({ open: !0, activeTriggerId: w });
        })()),
        N.useControlledProp("openProp", a),
        N.useControlledProp("triggerIdProp", S),
        N.useContextCallback("onOpenChangeComplete", u));
      let L = N.useState("floatingTreeRoot"),
        D = (0, Q.useFloatingNodeId)(L),
        F = (0, Q.useFloatingParentNodeId)();
      (0, A.useIsoLayoutEffect)(() => {
        O && !I
          ? N.update({
              parent: { type: "context-menu", context: O },
              floatingNodeId: D,
              floatingParentNodeId: F,
            })
          : I && N.update({ floatingNodeId: D, floatingParentNodeId: F });
      }, [O, I, D, F, N]);
      let H = N.useState("open"),
        W = N.useState("activeTriggerElement"),
        j = N.useState("positionerElement"),
        B = N.useState("hoverEnabled"),
        U = N.useState("modal"),
        V = N.useState("disabled"),
        z = N.useState("lastOpenChangeReason"),
        G = N.useState("parent"),
        Y = N.useState("activeIndex"),
        $ = N.useState("payload"),
        Z = N.useState("floatingParentNodeId"),
        ee = l.useRef(null),
        en = null != Z;
      N.useSyncedValues({
        disabled: p,
        modal: void 0 === G.type ? g : void 0,
        rootId: (0, tc.useId)(),
      });
      let { openMethod: eo, triggerProps: ei, reset: el } = (0, tq.useOpenInteractionType)(H);
      (0, t2.useImplicitActiveTrigger)(N);
      let { forceUnmount: ea } = (0, t2.useOpenStateTransitions)(H, N, () => {
          (N.update({ allowMouseEnter: !1, stickIfOpen: !0 }), el());
        }),
        es = l.useRef("context-menu" !== G.type),
        eu = (0, et.useTimeout)();
      (l.useEffect(() => {
        if ((H || (ee.current = null), "context-menu" === G.type)) {
          if (!H) {
            (eu.clear(), (es.current = !1));
            return;
          }
          eu.start(500, () => {
            es.current = !0;
          });
        }
      }, [eu, H, G.type]),
        (0, tk.useScrollLock)(H && U && z !== E.REASONS.triggerHover && "touch" !== eo, j),
        (0, A.useIsoLayoutEffect)(() => {
          H || B || N.set("hoverEnabled", !0);
        }, [H, B, N]));
      let ec = l.useRef(!0),
        ep = (0, et.useTimeout)(),
        eg = (0, x.useStableCallback)((e, n) => {
          let r = n.reason;
          if (
            (H === e && n.trigger === W && z === r) ||
            ((n.preventUnmountOnClose = () => {
              N.set("preventUnmountingOnClose", !0);
            }),
            e || null != n.trigger || (n.trigger = W ?? void 0),
            s?.(e, n),
            n.isCanceled)
          )
            return;
          let o = { open: e, nativeEvent: n.event, reason: n.reason, nested: en };
          t?.emit("openchange", o);
          let i = n.event;
          if (!1 === e && i?.type === "click" && "touch" === i.pointerType && !ec.current) return;
          if (!e && null !== Y) {
            let e = N.context.itemDomElements.current[Y];
            queueMicrotask(() => {
              e?.setAttribute("tabindex", "-1");
            });
          }
          e && r === E.REASONS.triggerFocus
            ? ((ec.current = !1),
              ep.start(300, () => {
                ec.current = !0;
              }))
            : ((ec.current = !0), ep.clear());
          let l =
              (r === E.REASONS.triggerPress || r === E.REASONS.itemPress) &&
              0 === i.detail &&
              i?.isTrusted,
            a = !e && (r === E.REASONS.escapeKey || null == r),
            u = { open: e, openChangeReason: r };
          ee.current = n.event ?? null;
          let c = n.trigger?.id ?? null;
          ((c || e) && ((u.activeTriggerId = c), (u.activeTriggerElement = n.trigger ?? null)),
            N.update(u),
            "menubar" === G.type &&
            (r === E.REASONS.triggerFocus ||
              r === E.REASONS.focusOut ||
              r === E.REASONS.triggerHover ||
              r === E.REASONS.listNavigation ||
              r === E.REASONS.siblingOpen)
              ? N.set("instantType", "group")
              : l || a
                ? N.set("instantType", l ? "click" : "dismiss")
                : N.set("instantType", void 0));
        }),
        em = l.useCallback(
          (e) => {
            let t = (0, _.createChangeEventDetails)(e);
            return (
              (t.preventUnmountOnClose = () => {
                N.set("preventUnmountingOnClose", !0);
              }),
              t
            );
          },
          [N],
        ),
        ev = l.useCallback(() => {
          N.setOpen(!1, em(E.REASONS.imperativeAction));
        }, [N, em]);
      (l.useImperativeHandle(b, () => ({ unmount: ea, close: ev }), [ea, ev]),
        "context-menu" === G.type && (n = G.context),
        l.useImperativeHandle(n?.positionerRef, () => j, [j]),
        l.useImperativeHandle(n?.actionsRef, () => ({ setOpen: eg }), [eg]));
      let eh = (0, tY.useSyncedFloatingRootContext)({ popupStore: N, onOpenChange: eg });
      ((t = eh.context.events),
        l.useEffect(() => {
          let e = ({ open: e, eventDetails: t }) => eg(e, t);
          return (
            t.on("setOpen", e),
            () => {
              t?.off("setOpen", e);
            }
          );
        }, [t, eg]));
      let eE = (0, tN.useDismiss)(eh, {
          enabled: !V,
          bubbles: { escapeKey: y && "menu" === G.type },
          outsidePress: () =>
            "context-menu" !== G.type || ee.current?.type === "contextmenu" || es.current,
          externalTree: en ? L : void 0,
        }),
        eb = (0, tG.useRole)(eh, { role: "menu" }),
        ey = tg(),
        ex = l.useCallback(
          (e) => {
            N.select("activeIndex") !== e && N.set("activeIndex", e);
          },
          [N],
        ),
        eR = (function (e, t) {
          let n = "rootStore" in e ? e.rootStore : e,
            r = n.useState("open"),
            o = n.useState("floatingElement"),
            i = n.useState("domReferenceElement"),
            a = n.context.dataRef,
            {
              listRef: s,
              activeIndex: u,
              onNavigate: c = () => {},
              enabled: f = !0,
              selectedIndex: d = null,
              allowEscape: p = !1,
              loopFocus: g = !1,
              nested: m = !1,
              rtl: v = !1,
              virtual: h = !1,
              focusItemOnOpen: b = "auto",
              focusItemOnHover: y = !0,
              openOnArrowKeyDown: R = !0,
              disabledIndices: S,
              orientation: w = "vertical",
              parentOrientation: C,
              cols: T = 1,
              id: O,
              resetOnPointerLeave: I = !0,
              externalTree: M,
            } = t,
            k = (0, X.getFloatingFocusElement)(o),
            P = (0, eV.useValueAsRef)(k),
            N = (0, Q.useFloatingParentNodeId)(),
            L = (0, Q.useFloatingTree)(M);
          (0, A.useIsoLayoutEffect)(() => {
            a.current.orientation = w;
          }, [a, w]);
          let D = (0, X.isTypeableCombobox)(i),
            F = l.useRef(b),
            H = l.useRef(d ?? -1),
            W = l.useRef(null),
            j = l.useRef(!0),
            B = (0, x.useStableCallback)((e) => {
              c(-1 === H.current ? null : H.current, e);
            }),
            U = l.useRef(B),
            V = l.useRef(!!o),
            z = l.useRef(r),
            G = l.useRef(!1),
            Y = l.useRef(!1),
            $ = (0, eV.useValueAsRef)(S),
            Z = (0, eV.useValueAsRef)(r),
            ee = (0, eV.useValueAsRef)(d),
            et = (0, eV.useValueAsRef)(I),
            en = (0, x.useStableCallback)(() => {
              function e(e) {
                h
                  ? L?.events.emit("virtualfocus", e)
                  : (0, tB.enqueueFocus)(e, { sync: G.current, preventScroll: !0 });
              }
              let t = s.current[H.current],
                n = Y.current;
              (t && e(t),
                (G.current ? (e) => e() : requestAnimationFrame)(() => {
                  let r = s.current[H.current] || t;
                  !r ||
                    (t || e(r),
                    ei &&
                      (n || !j.current) &&
                      r.scrollIntoView?.({ block: "nearest", inline: "nearest" }));
                }));
            });
          ((0, A.useIsoLayoutEffect)(() => {
            f &&
              (r && o
                ? ((H.current = d ?? -1), F.current && null != d && ((Y.current = !0), B()))
                : V.current && ((H.current = -1), U.current()));
          }, [f, r, o, d, B]),
            (0, A.useIsoLayoutEffect)(() => {
              if (f) {
                if (!r) {
                  G.current = !1;
                  return;
                }
                if (o)
                  if (null == u) {
                    if (((G.current = !1), null != ee.current)) return;
                    if (
                      (V.current && ((H.current = -1), en()),
                      (!z.current || !V.current) &&
                        F.current &&
                        (null != W.current || (!0 === F.current && null == W.current)))
                    ) {
                      let e = 0,
                        t = () => {
                          null == s.current[0]
                            ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), (e += 1))
                            : ((H.current =
                                null == W.current || tz(W.current, w, v) || m ? t_(s) : tH(s)),
                              (W.current = null),
                              B());
                        };
                      t();
                    }
                  } else tF(s, u) || ((H.current = u), en(), (Y.current = !1));
              }
            }, [f, r, o, u, ee, m, s, w, v, B, en, $]),
            (0, A.useIsoLayoutEffect)(() => {
              if (!f || o || !L || h || !V.current) return;
              let e = L.nodesRef.current,
                t = e.find((e) => e.id === N)?.context?.elements.floating,
                n = (0, X.activeElement)((0, q.ownerDocument)(o)),
                r = e.some((e) => e.context && (0, X.contains)(e.context.elements.floating, n));
              t && !r && j.current && t.focus({ preventScroll: !0 });
            }, [f, o, L, N, h]),
            (0, A.useIsoLayoutEffect)(() => {
              ((U.current = B), (z.current = r), (V.current = !!o));
            }),
            (0, A.useIsoLayoutEffect)(() => {
              r || ((W.current = null), (F.current = b));
            }, [r, b]));
          let eo = null != u,
            ei = l.useMemo(() => {
              function e(e) {
                if (!Z.current) return;
                let t = s.current.indexOf(e.currentTarget);
                -1 !== t && H.current !== t && ((H.current = t), B(e));
              }
              return {
                onFocus(t) {
                  ((G.current = !0), e(t));
                },
                onClick: ({ currentTarget: e }) => e.focus({ preventScroll: !0 }),
                onMouseMove(t) {
                  ((G.current = !0), (Y.current = !1), y && e(t));
                },
                onPointerLeave(e) {
                  if (!Z.current || !j.current || "touch" === e.pointerType) return;
                  G.current = !0;
                  let t = e.relatedTarget;
                  !y ||
                    s.current.includes(t) ||
                    (et.current &&
                      ((0, tB.enqueueFocus)(null, { sync: !0 }),
                      (H.current = -1),
                      B(e),
                      h || P.current?.focus({ preventScroll: !0 })));
                },
              };
            }, [Z, P, y, s, B, et, h]),
            el = l.useCallback(
              () =>
                C ??
                L?.nodesRef.current.find((e) => e.id === N)?.context?.dataRef?.current.orientation,
              [N, L, C],
            ),
            ea = (0, x.useStableCallback)((e) => {
              var t, o;
              let l, a;
              if (
                ((j.current = !1),
                (G.current = !0),
                229 === e.which || (!Z.current && e.currentTarget === P.current))
              )
                return;
              if (
                m &&
                ((t = e.key),
                (l = v ? t === er.ARROW_RIGHT : t === er.ARROW_LEFT),
                (a = t === er.ARROW_UP),
                "both" === w || ("horizontal" === w && T && T > 1) ? "Escape" === t : tU(w, l, a))
              ) {
                (tV(e.key, el()) || (0, J.stopEvent)(e),
                  n.setOpen(
                    !1,
                    (0, _.createChangeEventDetails)(E.REASONS.listNavigation, e.nativeEvent),
                  ),
                  (0, K.isHTMLElement)(i) && (h ? L?.events.emit("virtualfocus", i) : i.focus()));
                return;
              }
              let u = H.current,
                c = t_(s, S),
                f = tH(s, S);
              if (
                (D ||
                  ("Home" === e.key && ((0, J.stopEvent)(e), (H.current = c), B(e)),
                  "End" === e.key && ((0, J.stopEvent)(e), (H.current = f), B(e))),
                T > 1)
              ) {
                let t,
                  n,
                  r = Array.from({ length: s.current.length }, () => ({ width: 1, height: 1 })),
                  i =
                    ((t = []),
                    (n = 0),
                    r.forEach(({ width: e, height: r }, o) => {
                      let i = !1;
                      for (; !i; ) {
                        let l = [];
                        for (let t = 0; t < e; t += 1)
                          for (let e = 0; e < r; e += 1) l.push(n + t + e * T);
                        (n % T) + e <= T && l.every((e) => null == t[e])
                          ? (l.forEach((e) => {
                              t[e] = o;
                            }),
                            (i = !0))
                          : (n += 1);
                      }
                    }),
                    [...t]),
                  l = i.findIndex((e) => null != e && !tj(s, e, S)),
                  a = i.reduce((e, t, n) => (null == t || tj(s, t, S) ? e : n), -1),
                  u =
                    i[
                      (function (
                        e,
                        {
                          event: t,
                          orientation: n,
                          loopFocus: r,
                          rtl: o,
                          cols: i,
                          disabledIndices: l,
                          minIndex: a,
                          maxIndex: s,
                          prevIndex: u,
                          stopEvent: c = !1,
                        },
                      ) {
                        let f = u,
                          d = [],
                          p = {},
                          g = !1;
                        {
                          let t = null,
                            n = -1;
                          e.current.forEach((e, r) => {
                            if (null == e) return;
                            let o = e.closest('[role="row"]');
                            (o && (g = !0),
                              (o !== t || -1 === n) && ((t = o), (d[(n += 1)] = [])),
                              d[n].push(r),
                              (p[r] = n));
                          });
                        }
                        let m = g && d.length > 0 && d.some((e) => e.length !== i);
                        function v(t) {
                          if (!m || -1 === u) return;
                          let n = p[u];
                          if (null == n) return;
                          let o = d[n].indexOf(u),
                            i = "up" === t ? n - 1 : n + 1;
                          r && (i < 0 ? (i = d.length - 1) : i >= d.length && (i = 0));
                          let a = new Set();
                          for (; i >= 0 && i < d.length && !a.has(i); ) {
                            a.add(i);
                            let n = d[i];
                            if (0 === n.length) {
                              i = "up" === t ? i - 1 : i + 1;
                              continue;
                            }
                            let s = Math.min(o, n.length - 1);
                            for (let t = s; t >= 0; t -= 1) {
                              let r = n[t];
                              if (!tj(e, r, l)) return r;
                            }
                            ((i = "up" === t ? i - 1 : i + 1),
                              r && (i < 0 ? (i = d.length - 1) : i >= d.length && (i = 0)));
                          }
                        }
                        if (t.key === er.ARROW_UP) {
                          let n = v("up");
                          if (void 0 !== n) (c && (0, J.stopEvent)(t), (f = n));
                          else {
                            if ((c && (0, J.stopEvent)(t), -1 === u)) f = s;
                            else if (
                              ((f = tW(e, {
                                startingIndex: f,
                                amount: i,
                                decrement: !0,
                                disabledIndices: l,
                              })),
                              r && (u - i < a || f < 0))
                            ) {
                              let e = u % i,
                                t = s % i,
                                n = s - (t - e);
                              f = t === e ? s : t > e ? n : n - i;
                            }
                            tF(e, f) && (f = u);
                          }
                        }
                        if (t.key === er.ARROW_DOWN) {
                          let n = v("down");
                          void 0 !== n
                            ? (c && (0, J.stopEvent)(t), (f = n))
                            : (c && (0, J.stopEvent)(t),
                              -1 === u
                                ? (f = a)
                                : ((f = tW(e, { startingIndex: u, amount: i, disabledIndices: l })),
                                  r &&
                                    u + i > s &&
                                    (f = tW(e, {
                                      startingIndex: (u % i) - i,
                                      amount: i,
                                      disabledIndices: l,
                                    }))),
                              tF(e, f) && (f = u));
                        }
                        if ("both" === n) {
                          let n = ew(u / i);
                          (t.key === (o ? er.ARROW_LEFT : er.ARROW_RIGHT) &&
                            (c && (0, J.stopEvent)(t),
                            u % i != i - 1
                              ? ((f = tW(e, { startingIndex: u, disabledIndices: l })),
                                r &&
                                  tD(f, i, n) &&
                                  (f = tW(e, {
                                    startingIndex: u - (u % i) - 1,
                                    disabledIndices: l,
                                  })))
                              : r &&
                                (f = tW(e, { startingIndex: u - (u % i) - 1, disabledIndices: l })),
                            tD(f, i, n) && (f = u)),
                            t.key === (o ? er.ARROW_RIGHT : er.ARROW_LEFT) &&
                              (c && (0, J.stopEvent)(t),
                              u % i != 0
                                ? ((f = tW(e, {
                                    startingIndex: u,
                                    decrement: !0,
                                    disabledIndices: l,
                                  })),
                                  r &&
                                    tD(f, i, n) &&
                                    (f = tW(e, {
                                      startingIndex: u + (i - (u % i)),
                                      decrement: !0,
                                      disabledIndices: l,
                                    })))
                                : r &&
                                  (f = tW(e, {
                                    startingIndex: u + (i - (u % i)),
                                    decrement: !0,
                                    disabledIndices: l,
                                  })),
                              tD(f, i, n) && (f = u)));
                          let a = ew(s / i) === n;
                          tF(e, f) &&
                            (f =
                              r && a
                                ? t.key === (o ? er.ARROW_RIGHT : er.ARROW_LEFT)
                                  ? s
                                  : tW(e, { startingIndex: u - (u % i) - 1, disabledIndices: l })
                                : u);
                        }
                        return f;
                      })(
                        { current: i.map((e) => (null != e ? s.current[e] : null)) },
                        {
                          event: e,
                          orientation: w,
                          loopFocus: g,
                          rtl: v,
                          cols: T,
                          disabledIndices:
                            ((o = [
                              ...(("function" != typeof S ? S : null) ||
                                s.current.map((e, t) => (tj(s, t, S) ? t : void 0))),
                              void 0,
                            ]),
                            i.flatMap((e, t) => (o.includes(e) ? [t] : []))),
                          minIndex: l,
                          maxIndex: a,
                          prevIndex: (function (e, t, n, r, o) {
                            if (-1 === e) return -1;
                            let i = n.indexOf(e),
                              l = t[e];
                            switch (o) {
                              case "tl":
                                return i;
                              case "tr":
                                if (!l) return i;
                                return i + l.width - 1;
                              case "bl":
                                if (!l) return i;
                                return i + (l.height - 1) * r;
                              case "br":
                                return n.lastIndexOf(e);
                              default:
                                return -1;
                            }
                          })(
                            H.current > f ? c : H.current,
                            r,
                            i,
                            T,
                            e.key === er.ARROW_DOWN
                              ? "bl"
                              : e.key === (v ? er.ARROW_LEFT : er.ARROW_RIGHT)
                                ? "tr"
                                : "tl",
                          ),
                          stopEvent: !0,
                        },
                      )
                    ];
                if ((null != u && ((H.current = u), B(e)), "both" === w)) return;
              }
              if (tV(e.key, w)) {
                if (
                  ((0, J.stopEvent)(e),
                  r &&
                    !h &&
                    (0, X.activeElement)(e.currentTarget.ownerDocument) === e.currentTarget)
                ) {
                  ((H.current = tz(e.key, w, v) ? c : f), B(e));
                  return;
                }
                (tz(e.key, w, v)
                  ? g
                    ? u >= f
                      ? p && u !== s.current.length
                        ? (H.current = -1)
                        : ((G.current = !1), (H.current = c))
                      : (H.current = tW(s, { startingIndex: u, disabledIndices: S }))
                    : (H.current = Math.min(f, tW(s, { startingIndex: u, disabledIndices: S })))
                  : g
                    ? u <= c
                      ? p && -1 !== u
                        ? (H.current = s.current.length)
                        : ((G.current = !1), (H.current = f))
                      : (H.current = tW(s, { startingIndex: u, decrement: !0, disabledIndices: S }))
                    : (H.current = Math.max(
                        c,
                        tW(s, { startingIndex: u, decrement: !0, disabledIndices: S }),
                      )),
                  tF(s, H.current) && (H.current = -1),
                  B(e));
              }
            }),
            es = l.useMemo(
              () => h && r && eo && { "aria-activedescendant": `${O}-${u}` },
              [h, r, eo, O, u],
            ),
            eu = l.useMemo(
              () => ({
                "aria-orientation": "both" === w ? void 0 : w,
                ...(!D ? es : {}),
                onKeyDown(e) {
                  if ("Tab" === e.key && e.shiftKey && r && !h) {
                    let t = (0, X.getTarget)(e.nativeEvent);
                    if (t && !(0, X.contains)(P.current, t)) return;
                    ((0, J.stopEvent)(e),
                      n.setOpen(
                        !1,
                        (0, _.createChangeEventDetails)(E.REASONS.focusOut, e.nativeEvent),
                      ),
                      (0, K.isHTMLElement)(i) && i.focus());
                    return;
                  }
                  ea(e);
                },
                onPointerMove() {
                  j.current = !0;
                },
              }),
              [es, ea, P, w, D, n, r, h, i],
            ),
            ec = l.useMemo(() => {
              function e(e) {
                "auto" === b && (0, J.isVirtualClick)(e.nativeEvent) && (F.current = !h);
              }
              function t(e) {
                ((F.current = b),
                  "auto" === b && (0, J.isVirtualPointerEvent)(e.nativeEvent) && (F.current = !0));
              }
              return {
                onKeyDown(e) {
                  var t, r;
                  let o = n.select("open");
                  j.current = !1;
                  let i = e.key.startsWith("Arrow"),
                    l =
                      ((t = e.key),
                      (r = el()),
                      tU(r, v ? t === er.ARROW_LEFT : t === er.ARROW_RIGHT, t === er.ARROW_DOWN)),
                    a = tV(e.key, w),
                    u = (m ? l : a) || "Enter" === e.key || "" === e.key.trim();
                  if (h && o) return ea(e);
                  if (o || R || !i) {
                    if (u) {
                      let t = tV(e.key, el());
                      W.current = m && t ? null : e.key;
                    }
                    if (m) {
                      l &&
                        ((0, J.stopEvent)(e),
                        o
                          ? ((H.current = t_(s, $.current)), B(e))
                          : n.setOpen(
                              !0,
                              (0, _.createChangeEventDetails)(
                                E.REASONS.listNavigation,
                                e.nativeEvent,
                                e.currentTarget,
                              ),
                            ));
                      return;
                    }
                    a &&
                      (null != ee.current && (H.current = ee.current),
                      (0, J.stopEvent)(e),
                      !o && R
                        ? n.setOpen(
                            !0,
                            (0, _.createChangeEventDetails)(
                              E.REASONS.listNavigation,
                              e.nativeEvent,
                              e.currentTarget,
                            ),
                          )
                        : ea(e),
                      o && B(e));
                  }
                },
                onFocus(e) {
                  n.select("open") && !h && ((H.current = -1), B(e));
                },
                onPointerDown: t,
                onPointerEnter: t,
                onMouseDown: e,
                onClick: e,
              };
            }, [ea, $, b, s, m, B, n, R, w, el, v, ee, h]),
            ef = l.useMemo(() => ({ ...es, ...ec }), [es, ec]);
          return l.useMemo(
            () => (f ? { reference: ef, floating: eu, item: ei, trigger: ec } : {}),
            [f, ef, eu, ec, ei],
          );
        })(eh, {
          enabled: !V,
          listRef: N.context.itemDomElements,
          activeIndex: Y,
          nested: void 0 !== G.type,
          loopFocus: m,
          orientation: v,
          parentOrientation: "menubar" === G.type ? G.context.orientation : void 0,
          rtl: "rtl" === ey,
          disabledIndices: ed.EMPTY_ARRAY,
          onNavigate: ex,
          openOnArrowKeyDown: "context-menu" !== G.type,
          externalTree: en ? L : void 0,
          focusItemOnHover: C,
        }),
        eS = l.useCallback(
          (e) => {
            N.context.typingRef.current = e;
          },
          [N],
        ),
        eC = (function (e, t) {
          let n = "rootStore" in e ? e.rootStore : e,
            r = n.context.dataRef,
            o = n.useState("open"),
            {
              listRef: i,
              activeIndex: a,
              onMatch: s,
              onTypingChange: u,
              enabled: c = !0,
              resetMs: f = 750,
              selectedIndex: d = null,
            } = t,
            p = (0, et.useTimeout)(),
            g = l.useRef(""),
            m = l.useRef(d ?? a ?? -1),
            v = l.useRef(null);
          ((0, A.useIsoLayoutEffect)(() => {
            (o || null === d) &&
              (p.clear(), (v.current = null), "" !== g.current && (g.current = ""));
          }, [o, d, p]),
            (0, A.useIsoLayoutEffect)(() => {
              o && "" === g.current && (m.current = d ?? a ?? -1);
            }, [o, d, a]));
          let h = (0, x.useStableCallback)((e) => {
              e
                ? r.current.typing || ((r.current.typing = e), u?.(e))
                : r.current.typing && ((r.current.typing = e), u?.(e));
            }),
            E = (0, x.useStableCallback)((e) => {
              function t(e, t, n) {
                let r = t.find((e) => e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) === 0);
                return r ? e.indexOf(r) : -1;
              }
              let n = i.current;
              if (
                (g.current.length > 0 &&
                  " " !== g.current[0] &&
                  (-1 === t(n, n, g.current) ? h(!1) : " " === e.key && (0, J.stopEvent)(e)),
                null == n || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey)
              )
                return;
              o && " " !== e.key && ((0, J.stopEvent)(e), h(!0));
              let r = "" === g.current;
              (r && (m.current = d ?? a ?? -1),
                n.every((e) => !e || e[0]?.toLocaleLowerCase() !== e[1]?.toLocaleLowerCase()) &&
                  g.current === e.key &&
                  ((g.current = ""), (m.current = v.current)),
                (g.current += e.key),
                p.start(f, () => {
                  ((g.current = ""), (m.current = v.current), h(!1));
                }));
              let l = r ? (d ?? a ?? -1) : m.current,
                u = t(n, [...n.slice((l || 0) + 1), ...n.slice(0, (l || 0) + 1)], g.current);
              -1 !== u ? (s?.(u), (v.current = u)) : " " !== e.key && ((g.current = ""), h(!1));
            }),
            b = (0, x.useStableCallback)((e) => {
              let t = e.relatedTarget,
                r = n.select("domReferenceElement"),
                o = n.select("floatingElement"),
                i = (0, X.contains)(r, t),
                l = (0, X.contains)(o, t);
              i || l || (p.clear(), (g.current = ""), (m.current = v.current), h(!1));
            }),
            y = l.useMemo(() => ({ onKeyDown: E, onBlur: b }), [E, b]),
            R = l.useMemo(
              () => ({
                onKeyDown: E,
                onKeyUp(e) {
                  " " === e.key && h(!1);
                },
                onBlur: b,
              }),
              [E, b, h],
            );
          return l.useMemo(() => (c ? { reference: y, floating: R } : {}), [c, y, R]);
        })(eh, {
          listRef: N.context.itemLabels,
          activeIndex: Y,
          resetMs: ef.TYPEAHEAD_RESET_MS,
          onMatch: (e) => {
            H && e !== Y && N.set("activeIndex", e);
          },
          onTypingChange: eS,
        }),
        {
          getReferenceProps: eT,
          getFloatingProps: eO,
          getItemProps: eI,
          getTriggerProps: eM,
        } = (0, tL.useInteractions)([eE, eb, eR, eC]),
        eA = l.useMemo(() => {
          let e = (0, T.mergeProps)(
            eT(),
            {
              onMouseMove() {
                N.set("allowMouseEnter", !0);
              },
            },
            ei,
          );
          return (delete e.role, e);
        }, [eT, N, ei]),
        ek = l.useMemo(() => {
          let e = eM();
          if (!e) return e;
          let t = (0, T.mergeProps)(e, ei);
          return (delete t.role, delete t["aria-controls"], t);
        }, [eM, ei]),
        eP = l.useMemo(
          () =>
            eO({
              onMouseMove() {
                (N.set("allowMouseEnter", !0), "menu" === G.type && N.set("hoverEnabled", !1));
              },
              onClick() {
                N.select("hoverEnabled") && N.set("hoverEnabled", !1);
              },
              onKeyDown(e) {
                let t = N.select("keyboardEventRelay");
                t && !e.isPropagationStopped() && t(e);
              },
            }),
          [eO, G.type, N],
        ),
        eN = l.useMemo(() => eI(), [eI]);
      N.useSyncedValues({
        floatingRootContext: eh,
        activeTriggerProps: eA,
        inactiveTriggerProps: ek,
        popupProps: eP,
        itemProps: eN,
      });
      let eL = l.useMemo(() => ({ store: N, parent: P }), [N, P]),
        eD = (0, r.jsx)(c.Provider, {
          value: eL,
          children: "function" == typeof i ? i({ payload: $ }) : i,
        });
      return void 0 === G.type || "context-menu" === G.type
        ? (0, r.jsx)(Q.FloatingTree, { externalTree: L, children: eD })
        : eD;
    });
    function t6(e) {
      let t = f().store,
        n = l.useMemo(() => ({ parentMenu: t }), [t]);
      return (0, r.jsx)(t3.Provider, { value: n, children: (0, r.jsx)(t4, { ...e }) });
    }
    var t7 = e.i(87612);
    function t8(e, t) {
      let [n, r] = e,
        o = !1,
        i = t.length;
      for (let e = 0, l = i - 1; e < i; l = e++) {
        let [i, a] = t[e] || [0, 0],
          [s, u] = t[l] || [0, 0];
        a >= r != u >= r && n <= ((s - i) * (r - a)) / (u - a) + i && (o = !o);
      }
      return o;
    }
    function t9(e = {}) {
      let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        o = new et.Timeout(),
        i = !1,
        l = null,
        a = null,
        s = "u" > typeof performance ? performance.now() : 0,
        u = ({ x: e, y: n, placement: u, elements: c, onClose: f, nodeId: d, tree: p }) =>
          function (g) {
            function m() {
              (o.clear(), f());
            }
            if ((o.clear(), !c.domReference || !c.floating || null == u || null == e || null == n))
              return;
            let { clientX: v, clientY: h } = g,
              E = [v, h],
              b = (0, X.getTarget)(g),
              y = "mouseleave" === g.type,
              x = (0, X.contains)(c.floating, b),
              R = (0, X.contains)(c.domReference, b),
              S = c.domReference.getBoundingClientRect(),
              w = c.floating.getBoundingClientRect(),
              C = u.split("-")[0],
              T = e > w.right - w.width / 2,
              O = n > w.bottom - w.height / 2,
              I = E[0] >= S.x && E[0] <= S.x + S.width && E[1] >= S.y && E[1] <= S.y + S.height,
              M = w.width > S.width,
              A = w.height > S.height,
              k = (M ? S : w).left,
              P = (M ? S : w).right,
              N = (A ? S : w).top,
              L = (A ? S : w).bottom;
            if (x && ((i = !0), !y)) return;
            if ((R && (i = !1), R && !y)) {
              i = !0;
              return;
            }
            if (
              (y &&
                (0, K.isElement)(g.relatedTarget) &&
                (0, X.contains)(c.floating, g.relatedTarget)) ||
              (p &&
                (0, t7.getNodeChildren)(p.nodesRef.current, d).some(({ context: e }) => e?.open))
            )
              return;
            if (
              ("top" === C && n >= S.bottom - 1) ||
              ("bottom" === C && n <= S.top + 1) ||
              ("left" === C && e >= S.right - 1) ||
              ("right" === C && e <= S.left + 1)
            )
              return m();
            let D = [];
            switch (C) {
              case "top":
                D = [
                  [k, S.top + 1],
                  [k, w.bottom - 1],
                  [P, w.bottom - 1],
                  [P, S.top + 1],
                ];
                break;
              case "bottom":
                D = [
                  [k, w.top + 1],
                  [k, S.bottom - 1],
                  [P, S.bottom - 1],
                  [P, w.top + 1],
                ];
                break;
              case "left":
                D = [
                  [w.right - 1, L],
                  [w.right - 1, N],
                  [S.left + 1, N],
                  [S.left + 1, L],
                ];
                break;
              case "right":
                D = [
                  [S.right - 1, L],
                  [S.right - 1, N],
                  [w.left + 1, N],
                  [w.left + 1, L],
                ];
            }
            if (!t8([v, h], D)) {
              if (i && !I) return m();
              if (!y && r) {
                let e = (function (e, t) {
                  let n = performance.now(),
                    r = n - s;
                  if (null === l || null === a || 0 === r) return ((l = e), (a = t), (s = n), null);
                  let o = e - l,
                    i = t - a,
                    u = Math.sqrt(o * o + i * i);
                  return ((l = e), (a = t), (s = n), u / r);
                })(g.clientX, g.clientY);
                if (null !== e && e < 0.1) return m();
              }
              t8(
                [v, h],
                (function ([e, n]) {
                  switch (C) {
                    case "top": {
                      let r = [
                        [w.left, T || M ? w.bottom - t : w.top],
                        [w.right, T ? (M ? w.bottom - t : w.top) : w.bottom - t],
                      ];
                      return [
                        [M ? e + t / 2 : T ? e + 4 * t : e - 4 * t, n + t + 1],
                        [M ? e - t / 2 : T ? e + 4 * t : e - 4 * t, n + t + 1],
                        ...r,
                      ];
                    }
                    case "bottom": {
                      let r = [
                        [w.left, T || M ? w.top + t : w.bottom],
                        [w.right, T ? (M ? w.top + t : w.bottom) : w.top + t],
                      ];
                      return [
                        [M ? e + t / 2 : T ? e + 4 * t : e - 4 * t, n - t],
                        [M ? e - t / 2 : T ? e + 4 * t : e - 4 * t, n - t],
                        ...r,
                      ];
                    }
                    case "left":
                      return [
                        [O || A ? w.right - t : w.left, w.top],
                        [O ? (A ? w.right - t : w.left) : w.right - t, w.bottom],
                        [e + t + 1, A ? n + t / 2 : O ? n + 4 * t : n - 4 * t],
                        [e + t + 1, A ? n - t / 2 : O ? n + 4 * t : n - 4 * t],
                      ];
                    case "right": {
                      let r = [
                        [O || A ? w.left + t : w.right, w.top],
                        [O ? (A ? w.left + t : w.right) : w.left + t, w.bottom],
                      ];
                      return [
                        [e - t, A ? n + t / 2 : O ? n + 4 * t : n - 4 * t],
                        [e - t, A ? n - t / 2 : O ? n + 4 * t : n - 4 * t],
                        ...r,
                      ];
                    }
                    default:
                      return [];
                  }
                })([e, n]),
              )
                ? !i && r && o.start(40, m)
                : m();
            }
          };
      return ((u.__options = { blockPointerEvents: n }), u);
    }
    var ne = e.i(4012),
      nt = e.i(57666);
    let nn = nt.isMac && nt.isSafari;
    function nr(e, t, n) {
      if (n && !(0, J.isMouseLikePointerType)(n)) return 0;
      if ("number" == typeof e) return e;
      if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : n?.[t];
      }
      return e?.[t];
    }
    function no(e) {
      return "function" == typeof e ? e() : e;
    }
    ((0, en.createAttribute)("safe-polygon"), er.TYPEABLE_SELECTOR);
    let ni = { current: null };
    function nl(e, t = {}) {
      let n = "rootStore" in e ? e.rootStore : e,
        { dataRef: r, events: o } = n.context,
        {
          enabled: i = !0,
          delay: a = 0,
          handleClose: s = null,
          mouseOnly: u = !1,
          restMs: c = 0,
          move: f = !0,
          triggerElementRef: d = ni,
          externalTree: p,
          isActiveTrigger: g = !0,
        } = t,
        m = (0, Q.useFloatingTree)(p),
        v = ea(n),
        h = (0, eV.useValueAsRef)(s),
        b = (0, eV.useValueAsRef)(a),
        y = (0, eV.useValueAsRef)(c),
        R = (0, eV.useValueAsRef)(i);
      g && (v.handleCloseOptions = h.current?.__options);
      let S = (0, x.useStableCallback)(
          () =>
            !!v.interactedInside ||
            (!!r.current.openEvent && ["click", "mousedown"].includes(r.current.openEvent.type)),
        ),
        w = (0, x.useStableCallback)((e) =>
          (0, X.isTargetInsideEnabledTrigger)(e, n.context.triggerElements),
        ),
        C = l.useCallback(
          (e, t = !0) => {
            let r = nr(b.current, "close", v.pointerType);
            r && !v.handler
              ? v.openChangeTimeout.start(r, () =>
                  n.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e)),
                )
              : t &&
                (v.openChangeTimeout.clear(),
                n.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e)));
          },
          [b, n, v],
        ),
        T = (0, x.useStableCallback)(() => {
          (v.unbindMouseMove(), (v.handler = void 0));
        }),
        O = (0, x.useStableCallback)(() => {
          if (v.performedPointerEventsMutation) {
            let e = (0, q.ownerDocument)(n.select("domReferenceElement")).body;
            ((e.style.pointerEvents = ""),
              e.removeAttribute(eo),
              (v.performedPointerEventsMutation = !1));
          }
        });
      l.useEffect(() => {
        if (i)
          return (
            o.on("openchange", e),
            () => {
              o.off("openchange", e);
            }
          );
        function e(e) {
          e.open ||
            (v.openChangeTimeout.clear(),
            v.restTimeout.clear(),
            (v.blockMouseMove = !0),
            (v.restTimeoutPending = !1));
        }
      }, [i, o, v]);
      let I = (0, x.useStableCallback)((e) => {
        if (S() || !r.current.floatingContext || w(e.relatedTarget)) return;
        let t = d.current;
        h.current?.({
          ...r.current.floatingContext,
          tree: m,
          x: e.clientX,
          y: e.clientY,
          onClose() {
            (O(), T(), S() || t !== n.select("domReferenceElement") || C(e));
          },
        })(e);
      });
      return (
        l.useEffect(() => {
          if (!i) return;
          let e = d.current ?? (g ? n.select("domReferenceElement") : null);
          if ((0, K.isElement)(e))
            return (
              n.select("open") && e.addEventListener("mouseleave", l),
              f && e.addEventListener("mousemove", t, { once: !0 }),
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", o),
              () => {
                (e.removeEventListener("mouseleave", l),
                  f && e.removeEventListener("mousemove", t),
                  e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", o));
              }
            );
          function t(e) {
            if (
              (v.openChangeTimeout.clear(),
              (v.blockMouseMove = !1),
              (u && !(0, J.isMouseLikePointerType)(v.pointerType)) ||
                (no(y.current) > 0 && !nr(b.current, "open")))
            )
              return;
            let t = nr(b.current, "open", v.pointerType),
              r = n.select("domReferenceElement"),
              o = n.context.triggerElements,
              i =
                (o.hasElement(e.target) ||
                  o.hasMatchingElement((t) => (0, X.contains)(t, e.target))) &&
                (!r || !(0, X.contains)(r, e.target)),
              l = e.currentTarget ?? null,
              a = n.select("open"),
              s = !a || i;
            i && a
              ? n.setOpen(!0, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e, l))
              : t
                ? v.openChangeTimeout.start(t, () => {
                    s &&
                      n.setOpen(!0, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e, l));
                  })
                : s && n.setOpen(!0, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, e, l));
          }
          function o(e) {
            if (S()) return void O();
            v.unbindMouseMove();
            let t = n.select("domReferenceElement"),
              o = (0, q.ownerDocument)(t);
            if ((v.restTimeout.clear(), (v.restTimeoutPending = !1), !w(e.relatedTarget))) {
              if (h.current && r.current.floatingContext) {
                n.select("open") || v.openChangeTimeout.clear();
                let t = d.current;
                v.handler = h.current({
                  ...r.current.floatingContext,
                  tree: m,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    (O(),
                      T(),
                      R.current && !S() && t === n.select("domReferenceElement") && C(e, !0));
                  },
                });
                let i = v.handler;
                (i(e),
                  o.addEventListener("mousemove", i),
                  (v.unbindMouseMove = () => {
                    o.removeEventListener("mousemove", i);
                  }));
                return;
              }
              ("touch" === v.pointerType &&
                (0, X.contains)(n.select("floatingElement"), e.relatedTarget)) ||
                C(e);
            }
          }
          function l(e) {
            I(e);
          }
        }, [T, O, r, b, C, n, i, h, I, v, g, S, w, u, f, y, d, m, R]),
        l.useMemo(() => {
          if (i)
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                let { nativeEvent: t } = e,
                  r = e.currentTarget,
                  o = n.select("domReferenceElement"),
                  i = n.context.triggerElements,
                  l = n.select("open"),
                  a =
                    (i.hasElement(e.target) ||
                      i.hasMatchingElement((t) => (0, X.contains)(t, e.target))) &&
                    (!o || !(0, X.contains)(o, e.target));
                function s() {
                  if (((v.restTimeoutPending = !1), S())) return;
                  let e = n.select("open");
                  v.blockMouseMove ||
                    (e && !a) ||
                    n.setOpen(!0, (0, _.createChangeEventDetails)(E.REASONS.triggerHover, t, r));
                }
                (!u || (0, J.isMouseLikePointerType)(v.pointerType)) &&
                  (!l || a) &&
                  0 !== no(y.current) &&
                  ((!a && v.restTimeoutPending && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (v.restTimeout.clear(),
                    "touch" === v.pointerType
                      ? to.flushSync(() => {
                          s();
                        })
                      : a && l
                        ? s()
                        : ((v.restTimeoutPending = !0), v.restTimeout.start(no(y.current), s))));
              },
            };
          function e(e) {
            v.pointerType = e.pointerType;
          }
        }, [i, v, S, u, n, y])
      );
    }
    var na = e.i(59266),
      ns = e.i(54694);
    function nu(e) {
      let {
          render: t,
          className: n,
          state: r = ed.EMPTY_OBJECT,
          props: o = ed.EMPTY_ARRAY,
          refs: i = ed.EMPTY_ARRAY,
          metadata: a,
          stateAttributesMapping: s,
          tag: u = "div",
          ...c
        } = e,
        { compositeProps: f, compositeRef: p } = (function (e = {}) {
          let {
              highlightItemOnHover: t,
              highlightedIndex: n,
              onHighlightedIndexChange: r,
            } = (0, ns.useCompositeRootContext)(),
            { ref: o, index: i } = N(e),
            a = n === i,
            s = l.useRef(null),
            u = (0, w.useMergedRefs)(o, s);
          return {
            compositeProps: l.useMemo(
              () => ({
                tabIndex: a ? 0 : -1,
                onFocus() {
                  r(i);
                },
                onMouseMove() {
                  let e = s.current;
                  if (!t || !e) return;
                  let n = e.hasAttribute("disabled") || "true" === e.ariaDisabled;
                  a || n || e.focus();
                },
              }),
              [a, r, i, t],
            ),
            compositeRef: u,
            index: i,
          };
        })({ metadata: a });
      return (0, d.useRenderElement)(u, e, {
        state: r,
        ref: [...i, p],
        props: [f, ...o, c],
        stateAttributesMapping: s,
      });
    }
    var nc = e.i(72408);
    let nf = (0, tP.fastComponentRef)(function (e, t) {
        let n,
          o,
          i,
          {
            render: s,
            className: u,
            disabled: c = !1,
            nativeButton: g = !0,
            id: m,
            openOnHover: v,
            delay: b = 100,
            closeDelay: y = 0,
            handle: R,
            payload: S,
            ...w
          } = e,
          T = f(!0),
          O = R?.store ?? T?.store;
        if (!O) throw Error((0, a.default)(85));
        let I = (0, L.useBaseUiId)(m),
          M = O.useState("isTriggerActive", I),
          k = O.useState("floatingRootContext"),
          P = O.useState("isOpenedByTrigger", I),
          N = l.useRef(null),
          D =
            ((n = h(!0)),
            (o = f(!0)),
            (i = tK(!0)),
            l.useMemo(
              () =>
                i
                  ? { type: "menubar", context: i }
                  : n && !o
                    ? { type: "context-menu", context: n }
                    : { type: void 0 },
              [n, o, i],
            )),
          F = (0, ns.useCompositeRootContext)(!0),
          H = (0, Q.useFloatingTree)(),
          W = l.useMemo(() => H ?? new tQ.FloatingTreeStore(), [H]),
          j = (0, Q.useFloatingNodeId)(W),
          B = (0, Q.useFloatingParentNodeId)(),
          { registerTrigger: U, isMountedByThisTrigger: V } = (0, t2.useTriggerDataForwarding)(
            I,
            N,
            O,
            {
              payload: S,
              closeDelay: y,
              parent: D,
              floatingTreeRoot: W,
              floatingNodeId: j,
              floatingParentNodeId: B,
              keyboardEventRelay: F?.relayKeyboardEvent,
            },
          ),
          z = "menubar" === D.type,
          G = O.useState("disabled"),
          Y = c || G || (z && D.context.disabled),
          { getButtonProps: $, buttonRef: J } = (0, C.useButton)({ disabled: Y, native: g });
        l.useEffect(() => {
          P || void 0 !== D.type || (O.context.allowMouseUpTriggerRef.current = !1);
        }, [O, P, D.type]);
        let Z = l.useRef(null),
          ee = (0, et.useTimeout)(),
          er = (0, x.useStableCallback)((e) => {
            if (!Z.current) return;
            (ee.clear(), (O.context.allowMouseUpTriggerRef.current = !1));
            let t = e.target;
            if (
              (0, X.contains)(Z.current, t) ||
              (0, X.contains)(O.select("positionerElement"), t) ||
              t === Z.current ||
              (null != t &&
                (function e(t) {
                  return (0, K.isHTMLElement)(t) && t.hasAttribute("data-rootownerid")
                    ? (t.getAttribute("data-rootownerid") ?? void 0)
                    : (0, K.isLastTraversableNode)(t)
                      ? void 0
                      : e((0, K.getParentNode)(t));
                })(t) === O.select("rootId"))
            )
              return;
            let n = (function (e) {
              let t = e.getBoundingClientRect(),
                n = window.getComputedStyle(e, "::before"),
                r = window.getComputedStyle(e, "::after");
              if ("none" === n.content && "none" === r.content) return t;
              let o = parseFloat(n.width) || 0,
                i = parseFloat(n.height) || 0,
                l = parseFloat(r.width) || 0,
                a = parseFloat(r.height) || 0,
                s = Math.max(t.width, o, l),
                u = Math.max(t.height, i, a),
                c = s - t.width,
                f = u - t.height;
              return {
                left: t.left - c / 2,
                right: t.right + c / 2,
                top: t.top - f / 2,
                bottom: t.bottom + f / 2,
              };
            })(Z.current);
            (e.clientX >= n.left - 2 &&
              e.clientX <= n.right + 2 &&
              e.clientY >= n.top - 2 &&
              e.clientY <= n.bottom + 2) ||
              W.events.emit("close", { domEvent: e, reason: E.REASONS.cancelOpen });
          });
        l.useEffect(() => {
          P &&
            O.select("lastOpenChangeReason") === E.REASONS.triggerHover &&
            (0, q.ownerDocument)(Z.current).addEventListener("mouseup", er, { once: !0 });
        }, [P, er, O]);
        let eo = z && D.context.hasSubmenuOpen,
          ei = nl(k, {
            enabled: (v ?? eo) && !Y && "context-menu" !== D.type && (!z || (eo && !V)),
            handleClose: t9({ blockPointerEvents: !z }),
            mouseOnly: !0,
            move: !1,
            restMs: void 0 === D.type ? b : void 0,
            delay: { close: y },
            triggerElementRef: N,
            externalTree: W,
            isActiveTrigger: M,
          }),
          el = (function (e, t) {
            let n = (0, et.useTimeout)(),
              [r, o] = l.useState(!1);
            return (
              (0, A.useIsoLayoutEffect)(() => {
                e && "trigger-hover" === t
                  ? (o(!0),
                    n.start(ef.PATIENT_CLICK_THRESHOLD, () => {
                      o(!1);
                    }))
                  : e || (n.clear(), o(!1));
              }, [e, t, n]),
              r
            );
          })(P, O.select("lastOpenChangeReason")),
          ea = (0, ne.useClick)(k, {
            enabled: !Y && "context-menu" !== D.type,
            event: P && z ? "click" : "mousedown",
            toggle: !0,
            ignoreMouse: !1,
            stickIfOpen: void 0 === D.type && el,
          }),
          es = (function (e, t = {}) {
            let n = "rootStore" in e ? e.rootStore : e,
              { events: r, dataRef: o } = n.context,
              { enabled: i = !0, delay: a } = t,
              s = l.useRef(!1),
              u = l.useRef(null),
              c = (0, et.useTimeout)(),
              f = l.useRef(!0);
            (l.useEffect(() => {
              let e = n.select("domReferenceElement");
              if (!i) return;
              let t = (0, K.getWindow)(e);
              function r() {
                let e = n.select("domReferenceElement");
                !n.select("open") &&
                  (0, K.isHTMLElement)(e) &&
                  e === (0, X.activeElement)((0, q.ownerDocument)(e)) &&
                  (s.current = !0);
              }
              function o() {
                f.current = !0;
              }
              function l() {
                f.current = !1;
              }
              return (
                t.addEventListener("blur", r),
                nn &&
                  (t.addEventListener("keydown", o, !0), t.addEventListener("pointerdown", l, !0)),
                () => {
                  (t.removeEventListener("blur", r),
                    nn &&
                      (t.removeEventListener("keydown", o, !0),
                      t.removeEventListener("pointerdown", l, !0)));
                }
              );
            }, [n, i]),
              l.useEffect(() => {
                if (i)
                  return (
                    r.on("openchange", e),
                    () => {
                      r.off("openchange", e);
                    }
                  );
                function e(e) {
                  if (e.reason === E.REASONS.triggerPress || e.reason === E.REASONS.escapeKey) {
                    let e = n.select("domReferenceElement");
                    (0, K.isElement)(e) && ((u.current = e), (s.current = !0));
                  }
                }
              }, [r, i, n]));
            let d = l.useMemo(
              () => ({
                onMouseLeave() {
                  ((s.current = !1), (u.current = null));
                },
                onFocus(e) {
                  let t = e.currentTarget;
                  if (s.current) {
                    if (u.current === t) return;
                    ((s.current = !1), (u.current = null));
                  }
                  let r = (0, X.getTarget)(e.nativeEvent);
                  if ((0, K.isElement)(r)) {
                    if (nn && !e.relatedTarget) {
                      if (!f.current && !(0, X.isTypeableElement)(r)) return;
                    } else if (!(0, X.matchesFocusVisible)(r)) return;
                  }
                  let o = (0, X.isTargetInsideEnabledTrigger)(
                      e.relatedTarget,
                      n.context.triggerElements,
                    ),
                    { nativeEvent: i, currentTarget: l } = e,
                    d = "function" == typeof a ? a() : a;
                  (n.select("open") && o) || 0 === d || void 0 === d
                    ? n.setOpen(!0, (0, _.createChangeEventDetails)(E.REASONS.triggerFocus, i, l))
                    : c.start(d, () => {
                        s.current ||
                          n.setOpen(
                            !0,
                            (0, _.createChangeEventDetails)(E.REASONS.triggerFocus, i, l),
                          );
                      });
                },
                onBlur(e) {
                  ((s.current = !1), (u.current = null));
                  let t = e.relatedTarget,
                    r = e.nativeEvent,
                    i =
                      (0, K.isElement)(t) &&
                      t.hasAttribute((0, en.createAttribute)("focus-guard")) &&
                      "outside" === t.getAttribute("data-type");
                  c.start(0, () => {
                    let e = n.select("domReferenceElement"),
                      l = (0, X.activeElement)(e ? e.ownerDocument : document);
                    if (
                      (!t && l === e) ||
                      (0, X.contains)(o.current.floatingContext?.refs.floating.current, l) ||
                      (0, X.contains)(e, l) ||
                      i
                    )
                      return;
                    let a = t ?? l;
                    (0, X.isTargetInsideEnabledTrigger)(a, n.context.triggerElements) ||
                      n.setOpen(!1, (0, _.createChangeEventDetails)(E.REASONS.triggerFocus, r));
                  });
                },
              }),
              [o, n, c, a],
            );
            return l.useMemo(() => (i ? { reference: d, trigger: d } : {}), [i, d]);
          })(k, { enabled: !Y && eo }),
          eu = (function (e) {
            let { enabled: t = !0, mouseDownAction: n, open: r } = e,
              o = l.useRef(!1);
            return l.useMemo(
              () =>
                t
                  ? {
                      onMouseDown: (e) => {
                        (("open" === n && !r) || ("close" === n && r)) &&
                          ((o.current = !0),
                          (0, q.ownerDocument)(e.currentTarget).addEventListener(
                            "click",
                            () => {
                              o.current = !1;
                            },
                            { once: !0 },
                          ));
                      },
                      onClick: (e) => {
                        o.current && ((o.current = !1), e.preventBaseUIHandler());
                      },
                    }
                  : ed.EMPTY_OBJECT,
              [t, n, r],
            );
          })({ open: P, enabled: z, mouseDownAction: "open" }),
          ec = (0, tL.useInteractions)([ea, es]),
          ep = { disabled: Y, open: P },
          eg = O.useState("triggerProps", V),
          em = [Z, t, J, U, N],
          ev = [
            ec.getReferenceProps(),
            ei ?? ed.EMPTY_OBJECT,
            eg,
            {
              "aria-haspopup": "menu",
              id: I,
              onMouseDown: (e) => {
                O.select("open") ||
                  (ee.start(200, () => {
                    O.context.allowMouseUpTriggerRef.current = !0;
                  }),
                  (0, q.ownerDocument)(e.currentTarget).addEventListener("mouseup", er, {
                    once: !0,
                  }));
              },
            },
            z ? { role: "menuitem" } : {},
            eu,
            w,
            $,
          ],
          eh = l.useRef(null),
          eE = (0, x.useStableCallback)((e) => {
            to.flushSync(() => {
              O.setOpen(
                !1,
                (0, _.createChangeEventDetails)(E.REASONS.focusOut, e.nativeEvent, e.currentTarget),
              );
            });
            let t = (0, na.getTabbableBeforeElement)(eh.current);
            t?.focus();
          }),
          eb = (0, x.useStableCallback)((e) => {
            let t = O.select("positionerElement");
            if (t && (0, na.isOutsideEvent)(e, t))
              O.context.beforeContentFocusGuardRef.current?.focus();
            else {
              to.flushSync(() => {
                O.setOpen(
                  !1,
                  (0, _.createChangeEventDetails)(
                    E.REASONS.focusOut,
                    e.nativeEvent,
                    e.currentTarget,
                  ),
                );
              });
              let n = (0, na.getTabbableAfterElement)(
                O.context.triggerFocusTargetRef.current || N.current,
              );
              for (; null !== n && (0, X.contains)(t, n); ) {
                let e = n;
                if ((n = (0, na.getNextTabbable)(n)) === e) break;
              }
              n?.focus();
            }
          }),
          ey = (0, d.useRenderElement)("button", e, {
            enabled: !z,
            stateAttributesMapping: p.pressableTriggerOpenStateMapping,
            state: ep,
            ref: em,
            props: ev,
          });
        return z
          ? (0, r.jsx)(nu, {
              tag: "button",
              render: s,
              className: u,
              state: ep,
              refs: em,
              props: ev,
              stateAttributesMapping: p.pressableTriggerOpenStateMapping,
            })
          : P
            ? (0, r.jsxs)(l.Fragment, {
                children: [
                  (0, r.jsx)(nc.FocusGuard, { ref: eh, onFocus: eE }, `${I}-pre-focus-guard`),
                  (0, r.jsx)(l.Fragment, { children: ey }, I),
                  (0, r.jsx)(
                    nc.FocusGuard,
                    { ref: O.context.triggerFocusTargetRef, onFocus: eb },
                    `${I}-post-focus-guard`,
                  ),
                ],
              })
            : (0, r.jsx)(l.Fragment, { children: ey }, I);
      }),
      nd = l.forwardRef(function (e, t) {
        let { className: n, render: r, orientation: o = "horizontal", ...i } = e;
        return (0, d.useRenderElement)("div", e, {
          state: { orientation: o },
          ref: t,
          props: [{ role: "separator", "aria-orientation": o }, i],
        });
      }),
      np = l.forwardRef(function (e, t) {
        let {
            render: n,
            className: r,
            label: o,
            id: i,
            nativeButton: s = !1,
            openOnHover: c = !0,
            delay: g = 100,
            closeDelay: m = 0,
            disabled: v = !1,
            ...h
          } = e,
          E = N(),
          b = u(),
          { store: y } = f(),
          x = (0, L.useBaseUiId)(i),
          R = y.useState("open"),
          S = y.useState("floatingRootContext"),
          w = y.useState("floatingTreeRoot"),
          C = (0, t2.useTriggerRegistration)(x, y),
          T = l.useCallback(
            (e) => {
              let t = C(e);
              return (
                null !== e &&
                  y.select("open") &&
                  null == y.select("activeTriggerId") &&
                  y.update({ activeTriggerId: x, activeTriggerElement: e, closeDelay: m }),
                t
              );
            },
            [C, m, y, x],
          ),
          O = l.useRef(null),
          I = l.useCallback(
            (e) => {
              ((O.current = e), y.set("activeTriggerElement", e));
            },
            [y],
          ),
          A = t5();
        if (!A?.parentMenu) throw Error((0, a.default)(37));
        y.useSyncedValue("closeDelay", m);
        let k = A.parentMenu,
          P = k.useState("itemProps"),
          D = k.useState("isActive", E.index),
          F = l.useMemo(
            () => ({
              type: "submenu-trigger",
              setActive() {
                k.set("activeIndex", E.index);
              },
            }),
            [k, E.index],
          ),
          _ = y.useState("disabled"),
          H = v || _,
          { getItemProps: W, itemRef: j } = M({
            closeOnClick: !1,
            disabled: H,
            highlighted: D,
            id: x,
            store: y,
            nativeButton: s,
            itemMetadata: F,
            nodeId: b?.nodeId,
          }),
          B = y.useState("hoverEnabled"),
          U = k.useState("allowMouseEnter"),
          V = nl(S, {
            enabled: B && c && !H,
            handleClose: t9({ blockPointerEvents: !0 }),
            mouseOnly: !0,
            move: !0,
            restMs: g,
            delay: U ? { open: g, close: m } : 0,
            triggerElementRef: O,
            externalTree: w,
          }),
          z = (0, ne.useClick)(S, {
            enabled: !H,
            event: "mousedown",
            toggle: !c,
            ignoreMouse: c,
            stickIfOpen: !1,
          }),
          G = (0, tL.useInteractions)([z]),
          Y = y.useState("triggerProps", !0);
        return (
          delete Y.id,
          (0, d.useRenderElement)("div", e, {
            state: { disabled: H, highlighted: D, open: R },
            stateAttributesMapping: p.triggerOpenStateMapping,
            props: [
              G.getReferenceProps(),
              V,
              Y,
              P,
              {
                tabIndex: R || D ? 0 : -1,
                onBlur() {
                  D && k.set("activeIndex", null);
                },
              },
              h,
              W,
            ],
            ref: [t, E.ref, j, T, I],
          })
        );
      });
    class ng {
      constructor() {
        this.store = new t1();
      }
      open(e) {
        let t = e ? this.store.context.triggerElements.getById(e) : void 0;
        if (e && !t) throw Error((0, a.default)(83, e));
        this.store.setOpen(!0, (0, _.createChangeEventDetails)("imperative-action", void 0, t));
      }
      close() {
        this.store.setOpen(
          !1,
          (0, _.createChangeEventDetails)("imperative-action", void 0, void 0),
        );
      }
      get isOpen() {
        return this.store.state.open;
      }
    }
    function nm() {
      return new ng();
    }
    e.s(
      [
        "Arrow",
        0,
        g,
        "Backdrop",
        0,
        y,
        "CheckboxItem",
        0,
        H,
        "CheckboxItemIndicator",
        0,
        B,
        "Group",
        0,
        V,
        "GroupLabel",
        0,
        z,
        "Handle",
        () => ng,
        "Item",
        0,
        G,
        "LinkItem",
        0,
        Y,
        "Popup",
        0,
        em,
        "Portal",
        0,
        eE,
        "Positioner",
        0,
        tC,
        "RadioGroup",
        0,
        tO,
        "RadioItem",
        0,
        tM,
        "RadioItemIndicator",
        0,
        tA,
        "Root",
        0,
        t4,
        "Separator",
        0,
        nd,
        "SubmenuRoot",
        () => t6,
        "SubmenuTrigger",
        0,
        np,
        "Trigger",
        0,
        nf,
        "createHandle",
        () => nm,
      ],
      30250,
    );
    var nv = e.i(30250),
      nv = nv,
      nh = e.i(75254);
    ((0, nh.default)("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
      (0, nh.default)("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]));
    var nE = e.i(75157);
    function nb(e) {
      let t,
        n,
        i = (0, o.c)(4);
      return (
        i[0] !== e ? (({ ...t } = e), (i[0] = e), (i[1] = t)) : (t = i[1]),
        i[2] !== t
          ? ((n = (0, r.jsx)(nv.Root, { "data-slot": "dropdown-menu", ...t })),
            (i[2] = t),
            (i[3] = n))
          : (n = i[3]),
        n
      );
    }
    function ny(e) {
      let t,
        n,
        i = (0, o.c)(4);
      return (
        i[0] !== e ? (({ ...t } = e), (i[0] = e), (i[1] = t)) : (t = i[1]),
        i[2] !== t
          ? ((n = (0, r.jsx)(nv.Trigger, { "data-slot": "dropdown-menu-trigger", ...t })),
            (i[2] = t),
            (i[3] = n))
          : (n = i[3]),
        n
      );
    }
    function nx(e) {
      let t,
        n,
        i,
        l,
        a,
        s,
        u,
        c,
        f,
        d = (0, o.c)(18);
      d[0] !== e
        ? (({ align: i, alignOffset: l, side: a, sideOffset: s, className: t, ...n } = e),
          (d[0] = e),
          (d[1] = t),
          (d[2] = n),
          (d[3] = i),
          (d[4] = l),
          (d[5] = a),
          (d[6] = s))
        : ((t = d[1]), (n = d[2]), (i = d[3]), (l = d[4]), (a = d[5]), (s = d[6]));
      let p = void 0 === i ? "start" : i,
        g = void 0 === l ? 0 : l,
        m = void 0 === a ? "bottom" : a,
        v = void 0 === s ? 4 : s;
      return (
        d[7] !== t
          ? ((u = (0, nE.cn)(
              "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-none shadow-md ring-1 duration-100 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden",
              t,
            )),
            (d[7] = t),
            (d[8] = u))
          : (u = d[8]),
        d[9] !== n || d[10] !== u
          ? ((c = (0, r.jsx)(nv.Popup, {
              "data-slot": "dropdown-menu-content",
              className: u,
              ...n,
            })),
            (d[9] = n),
            (d[10] = u),
            (d[11] = c))
          : (c = d[11]),
        d[12] !== p || d[13] !== g || d[14] !== m || d[15] !== v || d[16] !== c
          ? ((f = (0, r.jsx)(nv.Portal, {
              children: (0, r.jsx)(nv.Positioner, {
                className: "isolate z-50 outline-none",
                align: p,
                alignOffset: g,
                side: m,
                sideOffset: v,
                children: c,
              }),
            })),
            (d[12] = p),
            (d[13] = g),
            (d[14] = m),
            (d[15] = v),
            (d[16] = c),
            (d[17] = f))
          : (f = d[17]),
        f
      );
    }
    function nR(e) {
      let t,
        n,
        i = (0, o.c)(4);
      return (
        i[0] !== e ? (({ ...t } = e), (i[0] = e), (i[1] = t)) : (t = i[1]),
        i[2] !== t
          ? ((n = (0, r.jsx)(nv.Group, { "data-slot": "dropdown-menu-group", ...t })),
            (i[2] = t),
            (i[3] = n))
          : (n = i[3]),
        n
      );
    }
    function nS(e) {
      let t,
        n,
        i,
        l,
        a,
        s = (0, o.c)(10);
      return (
        s[0] !== e
          ? (({ className: t, inset: n, ...i } = e), (s[0] = e), (s[1] = t), (s[2] = n), (s[3] = i))
          : ((t = s[1]), (n = s[2]), (i = s[3])),
        s[4] !== t
          ? ((l = (0, nE.cn)("text-muted-foreground px-2 py-2 text-xs data-[inset]:pl-8", t)),
            (s[4] = t),
            (s[5] = l))
          : (l = s[5]),
        s[6] !== n || s[7] !== i || s[8] !== l
          ? ((a = (0, r.jsx)(nv.GroupLabel, {
              "data-slot": "dropdown-menu-label",
              "data-inset": n,
              className: l,
              ...i,
            })),
            (s[6] = n),
            (s[7] = i),
            (s[8] = l),
            (s[9] = a))
          : (a = s[9]),
        a
      );
    }
    function nw(e) {
      let t,
        n,
        i,
        l,
        a,
        s,
        u = (0, o.c)(12);
      u[0] !== e
        ? (({ className: t, inset: n, variant: l, ...i } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = n),
          (u[3] = i),
          (u[4] = l))
        : ((t = u[1]), (n = u[2]), (i = u[3]), (l = u[4]));
      let c = void 0 === l ? "default" : l;
      return (
        u[5] !== t
          ? ((a = (0, nE.cn)(
              "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none px-2 py-2 text-xs [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
              t,
            )),
            (u[5] = t),
            (u[6] = a))
          : (a = u[6]),
        u[7] !== n || u[8] !== i || u[9] !== a || u[10] !== c
          ? ((s = (0, r.jsx)(nv.Item, {
              "data-slot": "dropdown-menu-item",
              "data-inset": n,
              "data-variant": c,
              className: a,
              ...i,
            })),
            (u[7] = n),
            (u[8] = i),
            (u[9] = a),
            (u[10] = c),
            (u[11] = s))
          : (s = u[11]),
        s
      );
    }
    function nC(e) {
      let t,
        n,
        i,
        l,
        a = (0, o.c)(8);
      return (
        a[0] !== e
          ? (({ className: t, ...n } = e), (a[0] = e), (a[1] = t), (a[2] = n))
          : ((t = a[1]), (n = a[2])),
        a[3] !== t
          ? ((i = (0, nE.cn)("bg-border -mx-1 h-px", t)), (a[3] = t), (a[4] = i))
          : (i = a[4]),
        a[5] !== n || a[6] !== i
          ? ((l = (0, r.jsx)(nv.Separator, {
              "data-slot": "dropdown-menu-separator",
              className: i,
              ...n,
            })),
            (a[5] = n),
            (a[6] = i),
            (a[7] = l))
          : (l = a[7]),
        l
      );
    }
    var nT = e.i(78938);
    function nO(e) {
      let t,
        n,
        i,
        l,
        a = (0, o.c)(8);
      return (
        a[0] !== e
          ? (({ className: t, ...n } = e), (a[0] = e), (a[1] = t), (a[2] = n))
          : ((t = a[1]), (n = a[2])),
        a[3] !== t
          ? ((i = (0, nE.cn)("bg-muted rounded-none animate-pulse", t)), (a[3] = t), (a[4] = i))
          : (i = a[4]),
        a[5] !== n || a[6] !== i
          ? ((l = (0, r.jsx)("div", { "data-slot": "skeleton", className: i, ...n })),
            (a[5] = n),
            (a[6] = i),
            (a[7] = l))
          : (l = a[7]),
        l
      );
    }
    function nI(e) {
      let t,
        n,
        i = (0, o.c)(7),
        { name: l, image: a } = e;
      if (a) {
        let e;
        return (
          i[0] !== a || i[1] !== l
            ? ((e = (0, r.jsx)("img", {
                src: a,
                alt: l,
                referrerPolicy: "no-referrer",
                className: "size-7 rounded-full object-cover",
              })),
              (i[0] = a),
              (i[1] = l),
              (i[2] = e))
            : (e = i[2]),
          e
        );
      }
      i[3] !== l
        ? ((t = l.split(" ").map(nM).join("").slice(0, 2).toUpperCase()), (i[3] = l), (i[4] = t))
        : (t = i[4]);
      let s = t;
      return (
        i[5] !== s
          ? ((n = (0, r.jsx)("span", {
              className:
                "flex size-7 items-center justify-center rounded-full bg-[var(--p-toffee)] text-[10px] font-bold text-[var(--p-white)]",
              children: s,
            })),
            (i[5] = s),
            (i[6] = n))
          : (n = i[6]),
        n
      );
    }
    function nM(e) {
      return e[0];
    }
    function nA(e) {
      let t,
        n,
        l,
        a,
        s,
        u,
        c,
        f,
        d,
        p,
        g,
        m,
        v,
        h = (0, o.c)(31),
        { compact: E } = e,
        b = void 0 !== E && E,
        y = (0, i.useRouter)(),
        { data: x, isPending: R } = nT.authClient.useSession();
      if (R) {
        let e;
        return (
          h[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(nO, { className: "h-9 w-24" })), (h[0] = e))
            : (e = h[0]),
          e
        );
      }
      if (!x) {
        let e;
        return (
          h[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)("a", {
                href: "/login",
                className: (0, nE.cn)(
                  "inline-flex h-9 items-center justify-center border border-[var(--p-tan)] bg-[var(--p-white)] px-4 text-xs font-semibold text-[var(--p-deep-walnut)] outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2",
                ),
                children: "Sign In",
              })),
              (h[1] = e))
            : (e = h[1]),
          e
        );
      }
      let S =
        !b &&
        "rounded-full border border-[var(--p-tan)]/60 bg-[var(--p-white)] px-2 py-1 hover:border-[var(--p-toffee)]";
      return (
        h[2] !== S
          ? ((t = (0, nE.cn)(
              "flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-tan)] focus-visible:ring-offset-2",
              S,
            )),
            (h[2] = S),
            (h[3] = t))
          : (t = h[3]),
        h[4] !== x.user.image || h[5] !== x.user.name
          ? ((n = (0, r.jsx)(nI, { name: x.user.name, image: x.user.image })),
            (h[4] = x.user.image),
            (h[5] = x.user.name),
            (h[6] = n))
          : (n = h[6]),
        h[7] !== b || h[8] !== x.user.name
          ? ((l =
              !b &&
              (0, r.jsx)("span", {
                className: "max-w-[120px] truncate text-xs font-medium text-[var(--p-dark-walnut)]",
                children: x.user.name,
              })),
            (h[7] = b),
            (h[8] = x.user.name),
            (h[9] = l))
          : (l = h[9]),
        h[10] !== t || h[11] !== n || h[12] !== l
          ? ((a = (0, r.jsxs)(ny, { className: t, "aria-label": "User menu", children: [n, l] })),
            (h[10] = t),
            (h[11] = n),
            (h[12] = l),
            (h[13] = a))
          : (a = h[13]),
        h[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)(nS, {
              className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
              children: "Account",
            })),
            (u = (0, r.jsx)(nC, {})),
            (h[14] = s),
            (h[15] = u))
          : ((s = h[14]), (u = h[15])),
        h[16] !== x.user.email
          ? ((c = (0, r.jsx)(nw, {
              className: "text-xs text-muted-foreground",
              children: x.user.email,
            })),
            (h[16] = x.user.email),
            (h[17] = c))
          : (c = h[17]),
        h[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(nC, {})), (h[18] = f))
          : (f = h[18]),
        h[19] !== y
          ? ((d = (0, r.jsx)(nw, {
              className: "text-xs",
              onClick: () => y.push("/cms/projects"),
              children: "Content Studio",
            })),
            (h[19] = y),
            (h[20] = d))
          : (d = h[20]),
        h[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)(nC, {})), (h[21] = p))
          : (p = h[21]),
        h[22] !== y
          ? ((g = (0, r.jsx)(nw, {
              variant: "destructive",
              className: "text-xs",
              onClick: () => {
                nT.authClient.signOut({ fetchOptions: { onSuccess: () => y.push("/") } });
              },
              children: "Sign Out",
            })),
            (h[22] = y),
            (h[23] = g))
          : (g = h[23]),
        h[24] !== d || h[25] !== g || h[26] !== c
          ? ((m = (0, r.jsx)(nx, {
              align: "end",
              className: "min-w-[180px] bg-card",
              children: (0, r.jsxs)(nR, { children: [s, u, c, f, d, p, g] }),
            })),
            (h[24] = d),
            (h[25] = g),
            (h[26] = c),
            (h[27] = m))
          : (m = h[27]),
        h[28] !== m || h[29] !== a
          ? ((v = (0, r.jsxs)(nb, { children: [a, m] })), (h[28] = m), (h[29] = a), (h[30] = v))
          : (v = h[30]),
        v
      );
    }
    e.s(["default", () => nA], 44877);
  },
]);
