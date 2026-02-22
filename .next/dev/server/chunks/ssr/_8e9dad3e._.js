module.exports = [
  "[project]/src/lib/image-url.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["proxyImageUrlIfNeeded", () => proxyImageUrlIfNeeded]);
    /**
     * Use the same-origin image proxy only for R2 URLs to avoid CORS.
     * Same-origin, relative, and other URLs (e.g. Google avatars) are returned unchanged.
     * Invalid URLs are returned as-is so the browser can fail gracefully instead of throwing.
     */ const R2_PUBLIC_RE = /^https:\/\/[a-zA-Z0-9.-]+\.r2\.dev(\/|$)/;
    function isConstructableUrl(url) {
      if (url.startsWith("/")) return true;
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }
    function proxyImageUrlIfNeeded(url) {
      if (!url || url.startsWith("/")) return url;
      if (!isConstructableUrl(url)) return url;
      if (R2_PUBLIC_RE.test(url)) {
        return `/api/image?url=${encodeURIComponent(url)}`;
      }
      return url;
    }
  },
  "[project]/src/components/image-uploader.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["ImageUploader", () => ImageUploader]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/image-url.ts [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
    ("use client");
    async function uploadFiles(files) {
      const formData = new FormData();
      for (const file of files) {
        formData.append("files", file);
      }
      const res = await fetch(
        ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/api/upload",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        },
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Upload failed");
      }
      const data = await res.json();
      return data.urls ?? (data.url ? [data.url] : []);
    }
    function ImageUploader({ value, onChange, multiple = true, className, disabled = false }) {
      const inputRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const [dragging, setDragging] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [uploading, setUploading] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [uploadingCount, setUploadingCount] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(0);
      const handleFiles = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])(
        async (files) => {
          const list = Array.from(files).filter((f) => f.type.startsWith("image/"));
          if (list.length === 0) return;
          if (!multiple && list.length > 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "toast"
            ].error("Only one image allowed here.");
            return;
          }
          setUploading(true);
          setUploadingCount(list.length);
          try {
            const urls = await uploadFiles(list);
            onChange(multiple ? [...value, ...urls] : urls);
          } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "toast"
            ].error(e instanceof Error ? e.message : "Upload failed");
          } finally {
            setUploading(false);
            setUploadingCount(0);
            if (inputRef.current) inputRef.current.value = "";
          }
        },
        [multiple, onChange, value],
      );
      const handleDrop = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])(
        (e) => {
          e.preventDefault();
          setDragging(false);
          if (disabled || uploading) return;
          handleFiles(e.dataTransfer.files);
        },
        [disabled, handleFiles, uploading],
      );
      const handleRemove = (url) => {
        onChange(value.filter((u) => u !== url));
      };
      const handleChange = (e) => {
        if (e.target.files) handleFiles(e.target.files);
      };
      const showDropZone = multiple || value.length === 0;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("space-y-3", className),
          children: [
            value.length > 0 &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5",
                  children: [
                    value.map((url) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "group relative aspect-square overflow-hidden border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "img",
                              {
                                src: (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "proxyImageUrlIfNeeded"
                                ])(url),
                                alt: "",
                                className: "size-full object-cover",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/src/components/image-uploader.tsx",
                                lineNumber: 107,
                                columnNumber: 15,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                type: "button",
                                onClick: () => handleRemove(url),
                                disabled: disabled || uploading,
                                "aria-label": "Remove image",
                                className:
                                  "absolute right-1 top-1 flex size-5 items-center justify-center bg-black/70 text-white opacity-0 outline-none transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-white",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "svg",
                                  {
                                    width: "10",
                                    height: "10",
                                    viewBox: "0 0 10 10",
                                    fill: "none",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "path",
                                      {
                                        d: "M1 1l8 8M9 1L1 9",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "[project]/src/components/image-uploader.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/src/components/image-uploader.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/src/components/image-uploader.tsx",
                                lineNumber: 112,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          ],
                        },
                        url,
                        true,
                        {
                          fileName: "[project]/src/components/image-uploader.tsx",
                          lineNumber: 102,
                          columnNumber: 13,
                        },
                        this,
                      ),
                    ),
                    uploading &&
                      Array.from({
                        length: uploadingCount,
                      }).map((_, i) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "aspect-square border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "size-full animate-pulse bg-[var(--p-tan)]/30",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/src/components/image-uploader.tsx",
                                lineNumber: 134,
                                columnNumber: 17,
                              },
                              this,
                            ),
                          },
                          `uploading-${i}`,
                          false,
                          {
                            fileName: "[project]/src/components/image-uploader.tsx",
                            lineNumber: 129,
                            columnNumber: 15,
                          },
                          this,
                        ),
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/components/image-uploader.tsx",
                  lineNumber: 100,
                  columnNumber: 9,
                },
                this,
              ),
            showDropZone &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  role: "button",
                  tabIndex: disabled ? -1 : 0,
                  "aria-label": "Upload images — click or drag and drop",
                  "aria-disabled": disabled || uploading,
                  onDragOver: (e) => {
                    e.preventDefault();
                    setDragging(true);
                  },
                  onDragLeave: () => setDragging(false),
                  onDrop: handleDrop,
                  onClick: () => !disabled && !uploading && inputRef.current?.click(),
                  onKeyDown: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (!disabled && !uploading) inputRef.current?.click();
                    }
                  },
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "cn"
                  ])(
                    "flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed py-10 text-center outline-none transition-colors",
                    dragging
                      ? "border-[var(--p-toffee)] bg-[var(--p-tan)]/10"
                      : "border-[var(--p-tan)] bg-[var(--p-white)] hover:border-[var(--p-toffee)] hover:bg-[var(--p-tan)]/5",
                    (disabled || uploading) && "cursor-not-allowed opacity-50",
                  ),
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "svg",
                      {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "text-[var(--p-toffee)]",
                        "aria-hidden": true,
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "path",
                            {
                              d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/src/components/image-uploader.tsx",
                              lineNumber: 177,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "polyline",
                            {
                              points: "17 8 12 3 7 8",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/src/components/image-uploader.tsx",
                              lineNumber: 178,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "line",
                            {
                              x1: "12",
                              y1: "3",
                              x2: "12",
                              y2: "15",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/src/components/image-uploader.tsx",
                              lineNumber: 179,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/src/components/image-uploader.tsx",
                        lineNumber: 165,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: "text-xs font-semibold text-[var(--p-deep-walnut)]",
                              children: uploading
                                ? `Uploading ${uploadingCount} file${uploadingCount > 1 ? "s" : ""}…`
                                : "Click to upload or drag & drop",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/src/components/image-uploader.tsx",
                              lineNumber: 182,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: "mt-0.5 text-[11px] text-[var(--p-coffee-bean)]/60",
                              children: multiple
                                ? "PNG, JPG, WEBP — multiple allowed"
                                : "PNG, JPG, WEBP",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/src/components/image-uploader.tsx",
                              lineNumber: 187,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/src/components/image-uploader.tsx",
                        lineNumber: 181,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/components/image-uploader.tsx",
                  lineNumber: 142,
                  columnNumber: 9,
                },
                this,
              ),
            !multiple &&
              value.length > 0 &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "button",
                {
                  type: "button",
                  disabled: disabled || uploading,
                  onClick: () => inputRef.current?.click(),
                  className:
                    "inline-flex h-8 items-center gap-1.5 border border-[var(--p-tan)] bg-transparent px-3 text-xs font-medium text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)] disabled:opacity-50",
                  children: uploading ? "Uploading…" : "Replace image",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/components/image-uploader.tsx",
                  lineNumber: 196,
                  columnNumber: 9,
                },
                this,
              ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "input",
              {
                ref: inputRef,
                type: "file",
                accept: "image/*",
                multiple: multiple,
                className: "hidden",
                "aria-hidden": true,
                onChange: handleChange,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/image-uploader.tsx",
                lineNumber: 206,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/components/image-uploader.tsx",
          lineNumber: 97,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/src/app/cms/projects/project-form.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["ProjectForm", () => ProjectForm]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/utils/orpc.ts [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/components/image-uploader.tsx [app-ssr] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
    ("use client");
    const defaultValues = {
      slug: "",
      title: "",
      description: "",
      featuredImageUrl: "",
      published: false,
      imageUrls: [],
    };
    const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    function toSlug(text) {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/[\s-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    function validateField(name, value, existingSlugs = []) {
      if (name === "slug") {
        const v = value;
        if (!v.trim()) return "Slug is required";
        if (!SLUG_RE.test(v)) return "Slug must be lowercase letters, numbers, and hyphens only";
        if (existingSlugs.includes(v.trim().toLowerCase()))
          return "This slug is already used by another project.";
      }
      if (name === "title") {
        const v = value;
        if (!v.trim()) return "Title is required";
      }
      return undefined;
    }
    function validateAll(values, existingSlugs = []) {
      const errors = {};
      const fields = ["slug", "title"];
      for (const f of fields) {
        const err = validateField(f, values[f], existingSlugs);
        if (err) errors[f] = err;
      }
      return errors;
    }
    const labelClass =
      "block text-xs font-semibold uppercase tracking-wider text-[var(--p-deep-walnut)]";
    function inputClass(hasError) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "cn"
      ])(
        "flex h-9 w-full border bg-[var(--p-white)] px-3 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1",
        hasError
          ? "border-red-500 focus-visible:ring-red-400"
          : "border-[var(--p-tan)] focus-visible:ring-[var(--p-toffee)]",
      );
    }
    const btnPrimary =
      "inline-flex h-9 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-5 text-xs font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2 disabled:opacity-50";
    const btnOutline =
      "inline-flex h-9 items-center justify-center border-2 border-[var(--p-tan)] bg-transparent px-5 text-xs font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2";
    function FieldError({ message }) {
      if (!message) return null;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "p",
        {
          role: "alert",
          className: "mt-1 text-xs font-medium text-red-600",
          children: message,
        },
        void 0,
        false,
        {
          fileName: "[project]/src/app/cms/projects/project-form.tsx",
          lineNumber: 98,
          columnNumber: 5,
        },
        this,
      );
    }
    function ProjectForm({ mode, id, initialData }) {
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      const [values, setValues] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(initialData ?? defaultValues);
      const [errors, setErrors] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])({});
      const slugManuallyEdited = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(!!initialData?.slug);
      const firstErrorRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const createMutation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useMutation"
      ])({
        mutationFn: (input) =>
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "client"
          ].project.create(input),
        onSuccess: () => {
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "toast"
          ].success("Project created");
          router.push("/cms/projects");
        },
        onError: (e) =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "toast"
          ].error(e.message ?? "Failed to create"),
      });
      const updateMutation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useMutation"
      ])({
        mutationFn: (input) =>
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "client"
          ].project.update(input),
        onSuccess: () => {
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "toast"
          ].success("Project updated");
          router.push("/cms/projects");
        },
        onError: (e) =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "toast"
          ].error(e.message ?? "Failed to update"),
      });
      const isPending = createMutation.isPending || updateMutation.isPending;
      const handleBlur = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])(
        (name) => {
          const err = validateField(name, values[name]);
          setErrors((prev) => ({
            ...prev,
            [name]: err,
          }));
        },
        [values],
      );
      function handleTitleChange(e) {
        const title = e.target.value;
        setValues((v) => ({
          ...v,
          title,
          slug: slugManuallyEdited.current ? v.slug : toSlug(title),
        }));
        if (errors.title)
          setErrors((prev) => ({
            ...prev,
            title: undefined,
          }));
        if (!slugManuallyEdited.current && errors.slug) {
          setErrors((prev) => ({
            ...prev,
            slug: undefined,
          }));
        }
      }
      function handleSlugChange(e) {
        const raw = e.target.value;
        const normalised = toSlug(raw) || raw.replace(/[^a-z0-9-]/gi, "").toLowerCase();
        slugManuallyEdited.current = true;
        setValues((v) => ({
          ...v,
          slug: normalised,
        }));
        if (errors.slug)
          setErrors((prev) => ({
            ...prev,
            slug: undefined,
          }));
      }
      function handleSubmit(e) {
        e.preventDefault();
        const errs = validateAll(values);
        setErrors(errs);
        if (Object.keys(errs).length > 0) {
          // Focus first invalid field
          requestAnimationFrame(() => {
            firstErrorRef.current?.focus();
          });
          return;
        }
        const payload = {
          slug: values.slug,
          title: values.title.trim(),
          description: values.description,
          featuredImageUrl: values.featuredImageUrl.trim() || null,
          published: values.published,
          imageUrls: values.imageUrls.filter(Boolean),
        };
        if (mode === "create") {
          createMutation.mutate(payload);
        } else if (id) {
          updateMutation.mutate({
            id,
            ...payload,
          });
        }
      }
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "form",
        {
          onSubmit: handleSubmit,
          className: "max-w-2xl space-y-6",
          noValidate: true,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "fieldset",
              {
                className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "legend",
                    {
                      className:
                        "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
                      children: "Details",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 204,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "space-y-1.5",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            htmlFor: "title",
                            className: labelClass,
                            children: [
                              "Title ",
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className: "text-red-500",
                                  children: "*",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                                  lineNumber: 211,
                                  columnNumber: 19,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 210,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "input",
                          {
                            id: "title",
                            ref: (el) => {
                              if (errors.title && !errors.slug) firstErrorRef.current = el;
                            },
                            className: inputClass(!!errors.title),
                            value: values.title,
                            onChange: handleTitleChange,
                            onBlur: () => handleBlur("title"),
                            placeholder: "Sharon Lane Kitchen",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 213,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          FieldError,
                          {
                            message: errors.title,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 224,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 209,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "space-y-1.5",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            htmlFor: "slug",
                            className: labelClass,
                            children: [
                              "Slug ",
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className: "text-red-500",
                                  children: "*",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                                  lineNumber: 230,
                                  columnNumber: 18,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 229,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "input",
                          {
                            id: "slug",
                            ref: (el) => {
                              if (errors.slug) firstErrorRef.current = el;
                            },
                            className: inputClass(!!errors.slug),
                            value: values.slug,
                            onChange: handleSlugChange,
                            onBlur: () => handleBlur("slug"),
                            placeholder: "sharon-lane-kitchen",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 232,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "text-xs text-pretty text-[var(--p-coffee-bean)]/60",
                            children: [
                              "Auto-generated from title. Lowercase, numbers, hyphens only — used in",
                              " ",
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "code",
                                {
                                  className: "font-mono",
                                  children: "/projects/[slug]",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                                  lineNumber: 245,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              ".",
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 243,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          FieldError,
                          {
                            message: errors.slug,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 247,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 228,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "space-y-1.5",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            htmlFor: "description",
                            className: labelClass,
                            children: "Description (Markdown)",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 251,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "textarea",
                          {
                            id: "description",
                            className:
                              "flex min-h-40 w-full border border-[var(--p-tan)] bg-[var(--p-white)] px-3 py-2 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)]",
                            value: values.description,
                            onChange: (e) =>
                              setValues((v) => ({
                                ...v,
                                description: e.target.value,
                              })),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 254,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 250,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/cms/projects/project-form.tsx",
                lineNumber: 203,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "fieldset",
              {
                className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "legend",
                    {
                      className:
                        "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
                      children: "Featured image",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 267,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      className: "text-xs text-[var(--p-coffee-bean)]/60",
                      children:
                        "The main image shown on the project card and hero. Upload one or paste a URL.",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 270,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "ImageUploader"
                    ],
                    {
                      multiple: false,
                      value: values.featuredImageUrl ? [values.featuredImageUrl] : [],
                      onChange: (urls) => {
                        setValues((v) => ({
                          ...v,
                          featuredImageUrl: urls[0] ?? "",
                        }));
                        setErrors((prev) => ({
                          ...prev,
                          featuredImageUrl: undefined,
                        }));
                      },
                      disabled: isPending,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 273,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "space-y-1",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            htmlFor: "featured-url",
                            className: labelClass,
                            children: "Or paste URL",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 283,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "input",
                          {
                            id: "featured-url",
                            ref: (el) => {
                              if (errors.featuredImageUrl && !errors.slug && !errors.title)
                                firstErrorRef.current = el;
                            },
                            className: inputClass(!!errors.featuredImageUrl),
                            value: values.featuredImageUrl,
                            onChange: (e) => {
                              setValues((v) => ({
                                ...v,
                                featuredImageUrl: e.target.value,
                              }));
                              if (errors.featuredImageUrl)
                                setErrors((prev) => ({
                                  ...prev,
                                  featuredImageUrl: undefined,
                                }));
                            },
                            onBlur: () => handleBlur("featuredImageUrl"),
                            placeholder: "https://...",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 286,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          FieldError,
                          {
                            message: errors.featuredImageUrl,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 302,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 282,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/cms/projects/project-form.tsx",
                lineNumber: 266,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "fieldset",
              {
                className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "legend",
                    {
                      className:
                        "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
                      children: "Gallery images",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 308,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      className: "text-xs text-[var(--p-coffee-bean)]/60",
                      children:
                        "Shown in the carousel on the project page. Select multiple files at once or drag & drop.",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 311,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  errors.imageUrls
                    ? /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          role: "alert",
                          className: "text-xs font-medium text-red-600",
                          children: errors.imageUrls,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/app/cms/projects/project-form.tsx",
                          lineNumber: 315,
                          columnNumber: 11,
                        },
                        this,
                      )
                    : null,
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "ImageUploader"
                    ],
                    {
                      multiple: true,
                      value: values.imageUrls,
                      onChange: (urls) =>
                        setValues((v) => ({
                          ...v,
                          imageUrls: urls,
                        })),
                      disabled: isPending,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 319,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/cms/projects/project-form.tsx",
                lineNumber: 307,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "fieldset",
              {
                className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "legend",
                    {
                      className:
                        "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
                      children: "Publishing",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 329,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "label",
                    {
                      className: "flex cursor-pointer items-center gap-3",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "input",
                          {
                            type: "checkbox",
                            checked: values.published,
                            onChange: (e) =>
                              setValues((v) => ({
                                ...v,
                                published: e.target.checked,
                              })),
                            className: "size-4 accent-[var(--p-deep-walnut)]",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 333,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "span",
                          {
                            className: "text-sm text-[var(--p-dark-walnut)]",
                            children: "Published — visible on the public site",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/cms/projects/project-form.tsx",
                            lineNumber: 341,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 332,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/cms/projects/project-form.tsx",
                lineNumber: 328,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "flex gap-3",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "submit",
                      className: btnPrimary,
                      disabled: isPending,
                      children: mode === "create" ? "Create project" : "Save changes",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 349,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "button",
                      className: btnOutline,
                      onClick: () => router.push("/cms/projects"),
                      children: "Cancel",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/cms/projects/project-form.tsx",
                      lineNumber: 352,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/cms/projects/project-form.tsx",
                lineNumber: 348,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/app/cms/projects/project-form.tsx",
          lineNumber: 201,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["MutationObserver", () => MutationObserver]);
    // src/mutationObserver.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)",
      );
    var MutationObserver = class
      extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "Subscribable"
      ]
    {
      #client;
      #currentResult = void 0;
      #currentMutation;
      #mutateOptions;
      constructor(client, options) {
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
      }
      bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
      }
      setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (
          !(0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "shallowEqualObjects"
          ])(this.options, prevOptions)
        ) {
          this.#client.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#currentMutation,
            observer: this,
          });
        }
        if (
          prevOptions?.mutationKey &&
          this.options.mutationKey &&
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "hashKey"
          ])(prevOptions.mutationKey) !==
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "hashKey"
            ])(this.options.mutationKey)
        ) {
          this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
          this.#currentMutation.setOptions(this.options);
        }
      }
      onUnsubscribe() {
        if (!this.hasListeners()) {
          this.#currentMutation?.removeObserver(this);
        }
      }
      onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
      }
      getCurrentResult() {
        return this.#currentResult;
      }
      reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
      }
      mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
      }
      #updateResult() {
        const state =
          this.#currentMutation?.state ??
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "getDefaultState"
          ])();
        this.#currentResult = {
          ...state,
          isPending: state.status === "pending",
          isSuccess: state.status === "success",
          isError: state.status === "error",
          isIdle: state.status === "idle",
          mutate: this.mutate,
          reset: this.reset,
        };
      }
      #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "notifyManager"
        ].batch(() => {
          if (this.#mutateOptions && this.hasListeners()) {
            const variables = this.#currentResult.variables;
            const onMutateResult = this.#currentResult.context;
            const context = {
              client: this.#client,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
            if (action?.type === "success") {
              try {
                this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
              } catch (e) {
                void Promise.reject(e);
              }
              try {
                this.#mutateOptions.onSettled?.(
                  action.data,
                  null,
                  variables,
                  onMutateResult,
                  context,
                );
              } catch (e) {
                void Promise.reject(e);
              }
            } else if (action?.type === "error") {
              try {
                this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
              } catch (e) {
                void Promise.reject(e);
              }
              try {
                this.#mutateOptions.onSettled?.(
                  void 0,
                  action.error,
                  variables,
                  onMutateResult,
                  context,
                );
              } catch (e) {
                void Promise.reject(e);
              }
            }
          }
          this.listeners.forEach((listener) => {
            listener(this.#currentResult);
          });
        });
      }
    };
  },
  //# sourceMappingURL=mutationObserver.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["useMutation", () => useMutation]);
    // src/useMutation.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)",
      );
    ("use client");
    function useMutation(options, queryClient) {
      const client = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useQueryClient"
      ])(queryClient);
      const [observer] =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ](
          () =>
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "MutationObserver"
            ](client, options),
        );
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](() => {
        observer.setOptions(options);
      }, [observer, options]);
      const result =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useSyncExternalStore"
        ](
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "useCallback"
          ](
            (onStoreChange) =>
              observer.subscribe(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "notifyManager"
                ].batchCalls(onStoreChange),
              ),
            [observer],
          ),
          () => observer.getCurrentResult(),
          () => observer.getCurrentResult(),
        );
      const mutate =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          (variables, mutateOptions) => {
            observer
              .mutate(variables, mutateOptions)
              .catch(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "noop"
                ],
              );
          },
          [observer],
        );
      if (
        result.error &&
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "shouldThrowError"
        ])(observer.options.throwOnError, [result.error])
      ) {
        throw result.error;
      }
      return {
        ...result,
        mutate,
        mutateAsync: result.mutate,
      };
    }
  },
  //# sourceMappingURL=useMutation.js.map
];

//# sourceMappingURL=_8e9dad3e._.js.map
