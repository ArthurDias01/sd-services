(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/src/lib/image-url.ts [app-client] (ecmascript)",
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
    if (typeof globalThis.$RefreshHelpers$ === "object" && globalThis.$RefreshHelpers !== null) {
      __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
    }
  },
  "[project]/src/components/image-uploader.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["ImageUploader", () => ImageUploader]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/image-url.ts [app-client] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
    var _s = __turbopack_context__.k.signature();
    ("use client");
    async function uploadFiles(files) {
      const formData = new FormData();
      for (const file of files) {
        formData.append("files", file);
      }
      const res = await fetch(
        ("TURBOPACK compile-time truthy", 1)
          ? `${window.location.origin}/api/upload`
          : "TURBOPACK unreachable",
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
      _s();
      const inputRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const [dragging, setDragging] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [uploading, setUploading] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [uploadingCount, setUploadingCount] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(0);
      const handleFiles = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])(
        {
          "ImageUploader.useCallback[handleFiles]": async (files) => {
            const list = Array.from(files).filter(
              {
                "ImageUploader.useCallback[handleFiles].list": (f) => f.type.startsWith("image/"),
              }["ImageUploader.useCallback[handleFiles].list"],
            );
            if (list.length === 0) return;
            if (!multiple && list.length > 1) {
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "toast"
              ].error(e instanceof Error ? e.message : "Upload failed");
            } finally {
              setUploading(false);
              setUploadingCount(0);
              if (inputRef.current) inputRef.current.value = "";
            }
          },
        }["ImageUploader.useCallback[handleFiles]"],
        [multiple, onChange, value],
      );
      const handleDrop = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])(
        {
          "ImageUploader.useCallback[handleDrop]": (e_0) => {
            e_0.preventDefault();
            setDragging(false);
            if (disabled || uploading) return;
            handleFiles(e_0.dataTransfer.files);
          },
        }["ImageUploader.useCallback[handleDrop]"],
        [disabled, handleFiles, uploading],
      );
      const handleRemove = (url) => {
        onChange(value.filter((u) => u !== url));
      };
      const handleChange = (e_1) => {
        if (e_1.target.files) handleFiles(e_1.target.files);
      };
      const showDropZone = multiple || value.length === 0;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])("space-y-3", className),
          children: [
            value.length > 0 &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5",
                  children: [
                    value.map((url_0) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "group relative aspect-square overflow-hidden border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "img",
                              {
                                src: (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "proxyImageUrlIfNeeded"
                                ])(url_0),
                                alt: "",
                                className: "size-full object-cover",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/src/components/image-uploader.tsx",
                                lineNumber: 89,
                                columnNumber: 15,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                type: "button",
                                onClick: () => handleRemove(url_0),
                                disabled: disabled || uploading,
                                "aria-label": "Remove image",
                                className:
                                  "absolute right-1 top-1 flex size-5 items-center justify-center bg-black/70 text-white opacity-0 outline-none transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-1 focus-visible:ring-white",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                        lineNumber: 92,
                                        columnNumber: 19,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "[project]/src/components/image-uploader.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/src/components/image-uploader.tsx",
                                lineNumber: 90,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          ],
                        },
                        url_0,
                        true,
                        {
                          fileName: "[project]/src/components/image-uploader.tsx",
                          lineNumber: 87,
                          columnNumber: 31,
                        },
                        this,
                      ),
                    ),
                    uploading &&
                      Array.from({
                        length: uploadingCount,
                      }).map((_, i) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "aspect-square border border-[var(--p-tan)] bg-[var(--p-warm-white)]",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                lineNumber: 101,
                                columnNumber: 17,
                              },
                              this,
                            ),
                          },
                          `uploading-${i}`,
                          false,
                          {
                            fileName: "[project]/src/components/image-uploader.tsx",
                            lineNumber: 100,
                            columnNumber: 24,
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
                  lineNumber: 86,
                  columnNumber: 28,
                },
                this,
              ),
            showDropZone &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  role: "button",
                  tabIndex: disabled ? -1 : 0,
                  "aria-label": "Upload images — click or drag and drop",
                  "aria-disabled": disabled || uploading,
                  onDragOver: (e_2) => {
                    e_2.preventDefault();
                    setDragging(true);
                  },
                  onDragLeave: () => setDragging(false),
                  onDrop: handleDrop,
                  onClick: () => !disabled && !uploading && inputRef.current?.click(),
                  onKeyDown: (e_3) => {
                    if (e_3.key === "Enter" || e_3.key === " ") {
                      e_3.preventDefault();
                      if (!disabled && !uploading) inputRef.current?.click();
                    }
                  },
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 116,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 117,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 118,
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
                        lineNumber: 115,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 121,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                              lineNumber: 124,
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
                        lineNumber: 120,
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
                  lineNumber: 106,
                  columnNumber: 24,
                },
                this,
              ),
            !multiple &&
              value.length > 0 &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                  lineNumber: 131,
                  columnNumber: 41,
                },
                this,
              ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                lineNumber: 135,
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
          lineNumber: 84,
          columnNumber: 10,
        },
        this,
      );
    }
    _s(ImageUploader, "iYEZj1hyAKGyy2x2+2KcE/Xz050=");
    _c = ImageUploader;
    var _c;
    __turbopack_context__.k.register(_c, "ImageUploader");
    if (typeof globalThis.$RefreshHelpers$ === "object" && globalThis.$RefreshHelpers !== null) {
      __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
    }
  },
  "[project]/src/app/cms/projects/project-form.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["ProjectForm", () => ProjectForm]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/navigation.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/utils/orpc.ts [app-client] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/image-uploader.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
    var _s = __turbopack_context__.k.signature();
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
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
    function FieldError(t0) {
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(3);
      if ($[0] !== "baed3847dd5be45321be23844c4ccc025987204eca1c82d2229761941c7fd094") {
        for (let $i = 0; $i < 3; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "baed3847dd5be45321be23844c4ccc025987204eca1c82d2229761941c7fd094";
      }
      const { message } = t0;
      if (!message) {
        return null;
      }
      let t1;
      if ($[1] !== message) {
        t1 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 76,
            columnNumber: 10,
          },
          this,
        );
        $[1] = message;
        $[2] = t1;
      } else {
        t1 = $[2];
      }
      return t1;
    }
    _c = FieldError;
    function ProjectForm(t0) {
      _s();
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(132);
      if ($[0] !== "baed3847dd5be45321be23844c4ccc025987204eca1c82d2229761941c7fd094") {
        for (let $i = 0; $i < 132; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "baed3847dd5be45321be23844c4ccc025987204eca1c82d2229761941c7fd094";
      }
      const { mode, id, initialData } = t0;
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      const [values, setValues] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(initialData ?? defaultValues);
      let t1;
      if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
      } else {
        t1 = $[1];
      }
      const [errors, setErrors] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(t1);
      const slugManuallyEdited = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(!!initialData?.slug);
      const firstErrorRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      let t2;
      if ($[2] !== router) {
        t2 = {
          mutationFn: _temp,
          onSuccess: () => {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "toast"
            ].success("Project created");
            router.push("/cms/projects");
          },
          onError: _temp2,
        };
        $[2] = router;
        $[3] = t2;
      } else {
        t2 = $[3];
      }
      const createMutation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMutation"
      ])(t2);
      let t3;
      if ($[4] !== router) {
        t3 = {
          mutationFn: _temp3,
          onSuccess: () => {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "toast"
            ].success("Project updated");
            router.push("/cms/projects");
          },
          onError: _temp4,
        };
        $[4] = router;
        $[5] = t3;
      } else {
        t3 = $[5];
      }
      const updateMutation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMutation"
      ])(t3);
      const isPending = createMutation.isPending || updateMutation.isPending;
      let t4;
      if ($[6] !== values) {
        t4 = {
          "ProjectForm[handleBlur]": (name) => {
            const err = validateField(name, values[name]);
            setErrors(
              {
                "ProjectForm[handleBlur > setErrors()]": (prev) => ({
                  ...prev,
                  [name]: err,
                }),
              }["ProjectForm[handleBlur > setErrors()]"],
            );
          },
        }["ProjectForm[handleBlur]"];
        $[6] = values;
        $[7] = t4;
      } else {
        t4 = $[7];
      }
      const handleBlur = t4;
      let t5;
      if ($[8] !== errors.slug || $[9] !== errors.title) {
        t5 = function handleTitleChange(e_1) {
          const title = e_1.target.value;
          setValues(
            {
              "ProjectForm[handleTitleChange > setValues()]": (v) => ({
                ...v,
                title,
                slug: slugManuallyEdited.current ? v.slug : toSlug(title),
              }),
            }["ProjectForm[handleTitleChange > setValues()]"],
          );
          if (errors.title) {
            setErrors(_ProjectFormHandleTitleChangeSetErrors);
          }
          if (!slugManuallyEdited.current && errors.slug) {
            setErrors(_ProjectFormHandleTitleChangeSetErrors2);
          }
        };
        $[8] = errors.slug;
        $[9] = errors.title;
        $[10] = t5;
      } else {
        t5 = $[10];
      }
      const handleTitleChange = t5;
      let t6;
      if ($[11] !== errors.slug) {
        t6 = function handleSlugChange(e_2) {
          const raw = e_2.target.value;
          const normalised = toSlug(raw) || raw.replace(/[^a-z0-9-]/gi, "").toLowerCase();
          slugManuallyEdited.current = true;
          setValues(
            {
              "ProjectForm[handleSlugChange > setValues()]": (v_0) => ({
                ...v_0,
                slug: normalised,
              }),
            }["ProjectForm[handleSlugChange > setValues()]"],
          );
          if (errors.slug) {
            setErrors(_ProjectFormHandleSlugChangeSetErrors);
          }
        };
        $[11] = errors.slug;
        $[12] = t6;
      } else {
        t6 = $[12];
      }
      const handleSlugChange = t6;
      let t7;
      if (
        $[13] !== createMutation ||
        $[14] !== id ||
        $[15] !== mode ||
        $[16] !== updateMutation ||
        $[17] !== values
      ) {
        t7 = function handleSubmit(e_3) {
          e_3.preventDefault();
          const errs = validateAll(values);
          setErrors(errs);
          if (Object.keys(errs).length > 0) {
            requestAnimationFrame(
              {
                "ProjectForm[handleSubmit > requestAnimationFrame()]": () => {
                  firstErrorRef.current?.focus();
                },
              }["ProjectForm[handleSubmit > requestAnimationFrame()]"],
            );
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
          } else {
            if (id) {
              updateMutation.mutate({
                id,
                ...payload,
              });
            }
          }
        };
        $[13] = createMutation;
        $[14] = id;
        $[15] = mode;
        $[16] = updateMutation;
        $[17] = values;
        $[18] = t7;
      } else {
        t7 = $[18];
      }
      const handleSubmit = t7;
      let t8;
      if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "legend",
          {
            className: "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
            children: "Details",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 253,
            columnNumber: 10,
          },
          this,
        );
        $[19] = t8;
      } else {
        t8 = $[19];
      }
      let t9;
      if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "label",
          {
            htmlFor: "title",
            className: labelClass,
            children: [
              "Title ",
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                  lineNumber: 260,
                  columnNumber: 62,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 260,
            columnNumber: 10,
          },
          this,
        );
        $[20] = t9;
      } else {
        t9 = $[20];
      }
      let t10;
      if ($[21] !== errors.slug || $[22] !== errors.title) {
        t10 = {
          "ProjectForm[<input>.ref]": (el) => {
            if (errors.title && !errors.slug) {
              firstErrorRef.current = el;
            }
          },
        }["ProjectForm[<input>.ref]"];
        $[21] = errors.slug;
        $[22] = errors.title;
        $[23] = t10;
      } else {
        t10 = $[23];
      }
      const t11 = !!errors.title;
      let t12;
      if ($[24] !== t11) {
        t12 = inputClass(t11);
        $[24] = t11;
        $[25] = t12;
      } else {
        t12 = $[25];
      }
      let t13;
      if ($[26] !== handleBlur) {
        t13 = {
          "ProjectForm[<input>.onBlur]": () => handleBlur("title"),
        }["ProjectForm[<input>.onBlur]"];
        $[26] = handleBlur;
        $[27] = t13;
      } else {
        t13 = $[27];
      }
      let t14;
      if (
        $[28] !== handleTitleChange ||
        $[29] !== t10 ||
        $[30] !== t12 ||
        $[31] !== t13 ||
        $[32] !== values.title
      ) {
        t14 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            id: "title",
            ref: t10,
            className: t12,
            value: values.title,
            onChange: handleTitleChange,
            onBlur: t13,
            placeholder: "Sharon Lane Kitchen",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 301,
            columnNumber: 11,
          },
          this,
        );
        $[28] = handleTitleChange;
        $[29] = t10;
        $[30] = t12;
        $[31] = t13;
        $[32] = values.title;
        $[33] = t14;
      } else {
        t14 = $[33];
      }
      let t15;
      if ($[34] !== errors.title) {
        t15 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 313,
            columnNumber: 11,
          },
          this,
        );
        $[34] = errors.title;
        $[35] = t15;
      } else {
        t15 = $[35];
      }
      let t16;
      if ($[36] !== t14 || $[37] !== t15) {
        t16 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1.5",
            children: [t9, t14, t15],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 321,
            columnNumber: 11,
          },
          this,
        );
        $[36] = t14;
        $[37] = t15;
        $[38] = t16;
      } else {
        t16 = $[38];
      }
      let t17;
      if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "label",
          {
            htmlFor: "slug",
            className: labelClass,
            children: [
              "Slug ",
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                  lineNumber: 330,
                  columnNumber: 61,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 330,
            columnNumber: 11,
          },
          this,
        );
        $[39] = t17;
      } else {
        t17 = $[39];
      }
      let t18;
      if ($[40] !== errors.slug) {
        t18 = {
          "ProjectForm[<input>.ref]": (el_0) => {
            if (errors.slug) {
              firstErrorRef.current = el_0;
            }
          },
        }["ProjectForm[<input>.ref]"];
        $[40] = errors.slug;
        $[41] = t18;
      } else {
        t18 = $[41];
      }
      const t19 = !!errors.slug;
      let t20;
      if ($[42] !== t19) {
        t20 = inputClass(t19);
        $[42] = t19;
        $[43] = t20;
      } else {
        t20 = $[43];
      }
      let t21;
      if ($[44] !== handleBlur) {
        t21 = {
          "ProjectForm[<input>.onBlur]": () => handleBlur("slug"),
        }["ProjectForm[<input>.onBlur]"];
        $[44] = handleBlur;
        $[45] = t21;
      } else {
        t21 = $[45];
      }
      let t22;
      if (
        $[46] !== handleSlugChange ||
        $[47] !== t18 ||
        $[48] !== t20 ||
        $[49] !== t21 ||
        $[50] !== values.slug
      ) {
        t22 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            id: "slug",
            ref: t18,
            className: t20,
            value: values.slug,
            onChange: handleSlugChange,
            onBlur: t21,
            placeholder: "sharon-lane-kitchen",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 370,
            columnNumber: 11,
          },
          this,
        );
        $[46] = handleSlugChange;
        $[47] = t18;
        $[48] = t20;
        $[49] = t21;
        $[50] = values.slug;
        $[51] = t22;
      } else {
        t22 = $[51];
      }
      let t23;
      if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "p",
          {
            className: "text-xs text-pretty text-[var(--p-coffee-bean)]/60",
            children: [
              "Auto-generated from title. Lowercase, numbers, hyphens only — used in",
              " ",
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                  lineNumber: 382,
                  columnNumber: 151,
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
            lineNumber: 382,
            columnNumber: 11,
          },
          this,
        );
        $[52] = t23;
      } else {
        t23 = $[52];
      }
      let t24;
      if ($[53] !== errors.slug) {
        t24 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 389,
            columnNumber: 11,
          },
          this,
        );
        $[53] = errors.slug;
        $[54] = t24;
      } else {
        t24 = $[54];
      }
      let t25;
      if ($[55] !== t22 || $[56] !== t24) {
        t25 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1.5",
            children: [t17, t22, t23, t24],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 397,
            columnNumber: 11,
          },
          this,
        );
        $[55] = t22;
        $[56] = t24;
        $[57] = t25;
      } else {
        t25 = $[57];
      }
      let t26;
      if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 406,
            columnNumber: 11,
          },
          this,
        );
        $[58] = t26;
      } else {
        t26 = $[58];
      }
      let t27;
      if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
          "ProjectForm[<textarea>.onChange]": (e_4) =>
            setValues(
              {
                "ProjectForm[<textarea>.onChange > setValues()]": (v_1) => ({
                  ...v_1,
                  description: e_4.target.value,
                }),
              }["ProjectForm[<textarea>.onChange > setValues()]"],
            ),
        }["ProjectForm[<textarea>.onChange]"];
        $[59] = t27;
      } else {
        t27 = $[59];
      }
      let t28;
      if ($[60] !== values.description) {
        t28 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1.5",
            children: [
              t26,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "textarea",
                {
                  id: "description",
                  className:
                    "flex min-h-40 w-full border border-[var(--p-tan)] bg-[var(--p-white)] px-3 py-2 text-sm text-[var(--p-dark-walnut)] outline-none placeholder:text-[var(--p-coffee-bean)]/40 focus-visible:ring-1 focus-visible:ring-[var(--p-toffee)]",
                  value: values.description,
                  onChange: t27,
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                  lineNumber: 427,
                  columnNumber: 45,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 427,
            columnNumber: 11,
          },
          this,
        );
        $[60] = values.description;
        $[61] = t28;
      } else {
        t28 = $[61];
      }
      let t29;
      if ($[62] !== t16 || $[63] !== t25 || $[64] !== t28) {
        t29 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [t8, t16, t25, t28],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 435,
            columnNumber: 11,
          },
          this,
        );
        $[62] = t16;
        $[63] = t25;
        $[64] = t28;
        $[65] = t29;
      } else {
        t29 = $[65];
      }
      let t30;
      let t31;
      if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "legend",
          {
            className: "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
            children: "Featured image",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 446,
            columnNumber: 11,
          },
          this,
        );
        t31 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 447,
            columnNumber: 11,
          },
          this,
        );
        $[66] = t30;
        $[67] = t31;
      } else {
        t30 = $[66];
        t31 = $[67];
      }
      let t32;
      if ($[68] !== values.featuredImageUrl) {
        t32 = values.featuredImageUrl ? [values.featuredImageUrl] : [];
        $[68] = values.featuredImageUrl;
        $[69] = t32;
      } else {
        t32 = $[69];
      }
      let t33;
      if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
          "ProjectForm[<ImageUploader>.onChange]": (urls) => {
            setValues(
              {
                "ProjectForm[<ImageUploader>.onChange > setValues()]": (v_2) => ({
                  ...v_2,
                  featuredImageUrl: urls[0] ?? "",
                }),
              }["ProjectForm[<ImageUploader>.onChange > setValues()]"],
            );
            setErrors(_ProjectFormImageUploaderOnChangeSetErrors);
          },
        }["ProjectForm[<ImageUploader>.onChange]"];
        $[70] = t33;
      } else {
        t33 = $[70];
      }
      let t34;
      if ($[71] !== isPending || $[72] !== t32) {
        t34 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "ImageUploader"
          ],
          {
            multiple: false,
            value: t32,
            onChange: t33,
            disabled: isPending,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 481,
            columnNumber: 11,
          },
          this,
        );
        $[71] = isPending;
        $[72] = t32;
        $[73] = t34;
      } else {
        t34 = $[73];
      }
      let t35;
      if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 490,
            columnNumber: 11,
          },
          this,
        );
        $[74] = t35;
      } else {
        t35 = $[74];
      }
      let t36;
      if ($[75] !== errors.featuredImageUrl || $[76] !== errors.slug || $[77] !== errors.title) {
        t36 = {
          "ProjectForm[<input>.ref]": (el_1) => {
            if (errors.featuredImageUrl && !errors.slug && !errors.title) {
              firstErrorRef.current = el_1;
            }
          },
        }["ProjectForm[<input>.ref]"];
        $[75] = errors.featuredImageUrl;
        $[76] = errors.slug;
        $[77] = errors.title;
        $[78] = t36;
      } else {
        t36 = $[78];
      }
      const t37 = !!errors.featuredImageUrl;
      let t38;
      if ($[79] !== t37) {
        t38 = inputClass(t37);
        $[79] = t37;
        $[80] = t38;
      } else {
        t38 = $[80];
      }
      let t39;
      if ($[81] !== errors.featuredImageUrl) {
        t39 = {
          "ProjectForm[<input>.onChange]": (e_5) => {
            setValues(
              {
                "ProjectForm[<input>.onChange > setValues()]": (v_3) => ({
                  ...v_3,
                  featuredImageUrl: e_5.target.value,
                }),
              }["ProjectForm[<input>.onChange > setValues()]"],
            );
            if (errors.featuredImageUrl) {
              setErrors(_ProjectFormInputOnChangeSetErrors);
            }
          },
        }["ProjectForm[<input>.onChange]"];
        $[81] = errors.featuredImageUrl;
        $[82] = t39;
      } else {
        t39 = $[82];
      }
      let t40;
      if ($[83] !== handleBlur) {
        t40 = {
          "ProjectForm[<input>.onBlur]": () => handleBlur("featuredImageUrl"),
        }["ProjectForm[<input>.onBlur]"];
        $[83] = handleBlur;
        $[84] = t40;
      } else {
        t40 = $[84];
      }
      let t41;
      if (
        $[85] !== t36 ||
        $[86] !== t38 ||
        $[87] !== t39 ||
        $[88] !== t40 ||
        $[89] !== values.featuredImageUrl
      ) {
        t41 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            id: "featured-url",
            ref: t36,
            className: t38,
            value: values.featuredImageUrl,
            onChange: t39,
            onBlur: t40,
            placeholder: "https://...",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 552,
            columnNumber: 11,
          },
          this,
        );
        $[85] = t36;
        $[86] = t38;
        $[87] = t39;
        $[88] = t40;
        $[89] = values.featuredImageUrl;
        $[90] = t41;
      } else {
        t41 = $[90];
      }
      let t42;
      if ($[91] !== errors.featuredImageUrl) {
        t42 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 564,
            columnNumber: 11,
          },
          this,
        );
        $[91] = errors.featuredImageUrl;
        $[92] = t42;
      } else {
        t42 = $[92];
      }
      let t43;
      if ($[93] !== t41 || $[94] !== t42) {
        t43 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1",
            children: [t35, t41, t42],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 572,
            columnNumber: 11,
          },
          this,
        );
        $[93] = t41;
        $[94] = t42;
        $[95] = t43;
      } else {
        t43 = $[95];
      }
      let t44;
      if ($[96] !== t34 || $[97] !== t43) {
        t44 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [t30, t31, t34, t43],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 581,
            columnNumber: 11,
          },
          this,
        );
        $[96] = t34;
        $[97] = t43;
        $[98] = t44;
      } else {
        t44 = $[98];
      }
      let t45;
      let t46;
      if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "legend",
          {
            className: "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
            children: "Gallery images",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 591,
            columnNumber: 11,
          },
          this,
        );
        t46 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 592,
            columnNumber: 11,
          },
          this,
        );
        $[99] = t45;
        $[100] = t46;
      } else {
        t45 = $[99];
        t46 = $[100];
      }
      let t47;
      if ($[101] !== errors.imageUrls) {
        t47 = errors.imageUrls
          ? /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                lineNumber: 601,
                columnNumber: 30,
              },
              this,
            )
          : null;
        $[101] = errors.imageUrls;
        $[102] = t47;
      } else {
        t47 = $[102];
      }
      let t48;
      if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = {
          "ProjectForm[<ImageUploader>.onChange]": (urls_0) =>
            setValues(
              {
                "ProjectForm[<ImageUploader>.onChange > setValues()]": (v_4) => ({
                  ...v_4,
                  imageUrls: urls_0,
                }),
              }["ProjectForm[<ImageUploader>.onChange > setValues()]"],
            ),
        }["ProjectForm[<ImageUploader>.onChange]"];
        $[103] = t48;
      } else {
        t48 = $[103];
      }
      let t49;
      if ($[104] !== isPending || $[105] !== values.imageUrls) {
        t49 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "ImageUploader"
          ],
          {
            multiple: true,
            value: values.imageUrls,
            onChange: t48,
            disabled: isPending,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 623,
            columnNumber: 11,
          },
          this,
        );
        $[104] = isPending;
        $[105] = values.imageUrls;
        $[106] = t49;
      } else {
        t49 = $[106];
      }
      let t50;
      if ($[107] !== t47 || $[108] !== t49) {
        t50 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [t45, t46, t47, t49],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 632,
            columnNumber: 11,
          },
          this,
        );
        $[107] = t47;
        $[108] = t49;
        $[109] = t50;
      } else {
        t50 = $[109];
      }
      let t51;
      if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "legend",
          {
            className: "px-2 text-xs font-semibold uppercase tracking-wider text-[var(--p-toffee)]",
            children: "Publishing",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 641,
            columnNumber: 11,
          },
          this,
        );
        $[110] = t51;
      } else {
        t51 = $[110];
      }
      let t52;
      if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = {
          "ProjectForm[<input>.onChange]": (e_6) =>
            setValues(
              {
                "ProjectForm[<input>.onChange > setValues()]": (v_5) => ({
                  ...v_5,
                  published: e_6.target.checked,
                }),
              }["ProjectForm[<input>.onChange > setValues()]"],
            ),
        }["ProjectForm[<input>.onChange]"];
        $[111] = t52;
      } else {
        t52 = $[111];
      }
      let t53;
      if ($[112] !== values.published) {
        t53 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            type: "checkbox",
            checked: values.published,
            onChange: t52,
            className: "size-4 accent-[var(--p-deep-walnut)]",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 662,
            columnNumber: 11,
          },
          this,
        );
        $[112] = values.published;
        $[113] = t53;
      } else {
        t53 = $[113];
      }
      let t54;
      if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 670,
            columnNumber: 11,
          },
          this,
        );
        $[114] = t54;
      } else {
        t54 = $[114];
      }
      let t55;
      if ($[115] !== t53) {
        t55 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [
              t51,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "label",
                {
                  className: "flex cursor-pointer items-center gap-3",
                  children: [t53, t54],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                  lineNumber: 677,
                  columnNumber: 101,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 677,
            columnNumber: 11,
          },
          this,
        );
        $[115] = t53;
        $[116] = t55;
      } else {
        t55 = $[116];
      }
      const t56 = mode === "create" ? "Create project" : "Save changes";
      let t57;
      if ($[117] !== isPending || $[118] !== t56) {
        t57 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "button",
          {
            type: "submit",
            className: btnPrimary,
            disabled: isPending,
            children: t56,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 686,
            columnNumber: 11,
          },
          this,
        );
        $[117] = isPending;
        $[118] = t56;
        $[119] = t57;
      } else {
        t57 = $[119];
      }
      let t58;
      if ($[120] !== router) {
        t58 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "button",
          {
            type: "button",
            className: btnOutline,
            onClick: {
              "ProjectForm[<button>.onClick]": () => router.push("/cms/projects"),
            }["ProjectForm[<button>.onClick]"],
            children: "Cancel",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 695,
            columnNumber: 11,
          },
          this,
        );
        $[120] = router;
        $[121] = t58;
      } else {
        t58 = $[121];
      }
      let t59;
      if ($[122] !== t57 || $[123] !== t58) {
        t59 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "flex gap-3",
            children: [t57, t58],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 705,
            columnNumber: 11,
          },
          this,
        );
        $[122] = t57;
        $[123] = t58;
        $[124] = t59;
      } else {
        t59 = $[124];
      }
      let t60;
      if (
        $[125] !== handleSubmit ||
        $[126] !== t29 ||
        $[127] !== t44 ||
        $[128] !== t50 ||
        $[129] !== t55 ||
        $[130] !== t59
      ) {
        t60 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "form",
          {
            onSubmit: handleSubmit,
            className: "max-w-2xl space-y-6",
            noValidate: true,
            children: [t29, t44, t50, t55, t59],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 714,
            columnNumber: 11,
          },
          this,
        );
        $[125] = handleSubmit;
        $[126] = t29;
        $[127] = t44;
        $[128] = t50;
        $[129] = t55;
        $[130] = t59;
        $[131] = t60;
      } else {
        t60 = $[131];
      }
      return t60;
    }
    _s(ProjectForm, "a5vHICeT3n3QGedXh5hsQzQyAkw=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRouter"
        ],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useMutation"
        ],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useMutation"
        ],
      ];
    });
    _c1 = ProjectForm;
    function _ProjectFormInputOnChangeSetErrors(prev_4) {
      return {
        ...prev_4,
        featuredImageUrl: undefined,
      };
    }
    function _ProjectFormImageUploaderOnChangeSetErrors(prev_3) {
      return {
        ...prev_3,
        featuredImageUrl: undefined,
      };
    }
    function _ProjectFormHandleSlugChangeSetErrors(prev_2) {
      return {
        ...prev_2,
        slug: undefined,
      };
    }
    function _ProjectFormHandleTitleChangeSetErrors2(prev_1) {
      return {
        ...prev_1,
        slug: undefined,
      };
    }
    function _ProjectFormHandleTitleChangeSetErrors(prev_0) {
      return {
        ...prev_0,
        title: undefined,
      };
    }
    function _temp4(e_0) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "toast"
      ].error(e_0.message ?? "Failed to update");
    }
    function _temp3(input_0) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "client"
      ].project.update(input_0);
    }
    function _temp2(e) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "toast"
      ].error(e.message ?? "Failed to create");
    }
    function _temp(input) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "client"
      ].project.create(input);
    }
    var _c, _c1;
    __turbopack_context__.k.register(_c, "FieldError");
    __turbopack_context__.k.register(_c1, "ProjectForm");
    if (typeof globalThis.$RefreshHelpers$ === "object" && globalThis.$RefreshHelpers !== null) {
      __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
    }
  },
  "[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["MutationObserver", () => MutationObserver]);
    // src/mutationObserver.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)",
      );
    var MutationObserver = class
      extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "hashKey"
          ])(prevOptions.mutationKey) !==
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
  "[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["useMutation", () => useMutation]);
    // src/useMutation.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)",
      );
    ("use client");
    function useMutation(options, queryClient) {
      const client = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useQueryClient"
      ])(queryClient);
      const [observer] =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](
          {
            "useMutation.useState": () =>
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "MutationObserver"
              ](client, options),
          }["useMutation.useState"],
        );
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "useMutation.useEffect": () => {
            observer.setOptions(options);
          },
        }["useMutation.useEffect"],
        [observer, options],
      );
      const result =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useSyncExternalStore"
        ](
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useCallback"
          ](
            {
              "useMutation.useSyncExternalStore[result]": (onStoreChange) =>
                observer.subscribe(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "notifyManager"
                  ].batchCalls(onStoreChange),
                ),
            }["useMutation.useSyncExternalStore[result]"],
            [observer],
          ),
          {
            "useMutation.useSyncExternalStore[result]": () => observer.getCurrentResult(),
          }["useMutation.useSyncExternalStore[result]"],
          {
            "useMutation.useSyncExternalStore[result]": () => observer.getCurrentResult(),
          }["useMutation.useSyncExternalStore[result]"],
        );
      const mutate =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          {
            "useMutation.useCallback[mutate]": (variables, mutateOptions) => {
              observer
                .mutate(variables, mutateOptions)
                .catch(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "noop"
                  ],
                );
            },
          }["useMutation.useCallback[mutate]"],
          [observer],
        );
      if (
        result.error &&
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
]);

//# sourceMappingURL=_9781f693._.js.map
