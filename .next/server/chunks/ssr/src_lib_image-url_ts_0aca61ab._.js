module.exports = [
  99963,
  (a) => {
    "use strict";
    let b = /^https:\/\/[a-zA-Z0-9.-]+\.r2\.dev(\/|$)/;
    function c(a) {
      return !a ||
        a.startsWith("/") ||
        !(function (a) {
          if (a.startsWith("/")) return !0;
          try {
            return (new URL(a), !0);
          } catch {
            return !1;
          }
        })(a)
        ? a
        : b.test(a)
          ? `/api/image?url=${encodeURIComponent(a)}`
          : a;
    }
    a.s(["proxyImageUrlIfNeeded", () => c]);
  },
];

//# sourceMappingURL=src_lib_image-url_ts_0aca61ab._.js.map
