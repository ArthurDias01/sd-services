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
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)",
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
      if ($[0] !== "ecc09595bb8ca3b84169a4857c2bf41999e9806cbb8a08f656c90a8a9539fce8") {
        for (let $i = 0; $i < 3; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ecc09595bb8ca3b84169a4857c2bf41999e9806cbb8a08f656c90a8a9539fce8";
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
      ])(134);
      if ($[0] !== "ecc09595bb8ca3b84169a4857c2bf41999e9806cbb8a08f656c90a8a9539fce8") {
        for (let $i = 0; $i < 134; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ecc09595bb8ca3b84169a4857c2bf41999e9806cbb8a08f656c90a8a9539fce8";
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
      if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
          queryKey: ["projects", "admin"],
          queryFn: _temp,
        };
        $[2] = t2;
      } else {
        t2 = $[2];
      }
      const { data: projects } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useQuery"
      ])(t2);
      let t3;
      if ($[3] !== id || $[4] !== mode || $[5] !== projects) {
        t3 =
          mode === "create"
            ? (projects?.map(_ProjectFormAnonymous) ?? [])
            : (projects
                ?.filter(
                  {
                    "ProjectForm[(anonymous)()]": (p_0) => p_0.id !== id,
                  }["ProjectForm[(anonymous)()]"],
                )
                .map(_ProjectFormAnonymous2) ?? []);
        $[3] = id;
        $[4] = mode;
        $[5] = projects;
        $[6] = t3;
      } else {
        t3 = $[6];
      }
      const existingSlugs = t3;
      let t4;
      if ($[7] !== router) {
        t4 = {
          mutationFn: _temp2,
          onSuccess: () => {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "toast"
            ].success("Project created");
            router.push("/cms/projects");
          },
          onError: _temp3,
        };
        $[7] = router;
        $[8] = t4;
      } else {
        t4 = $[8];
      }
      const createMutation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMutation"
      ])(t4);
      let t5;
      if ($[9] !== router) {
        t5 = {
          mutationFn: _temp4,
          onSuccess: () => {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "toast"
            ].success("Project updated");
            router.push("/cms/projects");
          },
          onError: _temp5,
        };
        $[9] = router;
        $[10] = t5;
      } else {
        t5 = $[10];
      }
      const updateMutation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMutation"
      ])(t5);
      const isPending = createMutation.isPending || updateMutation.isPending;
      let t6;
      if ($[11] !== existingSlugs || $[12] !== values) {
        t6 = {
          "ProjectForm[handleBlur]": (name) => {
            const err = validateField(name, values[name], existingSlugs);
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
        $[11] = existingSlugs;
        $[12] = values;
        $[13] = t6;
      } else {
        t6 = $[13];
      }
      const handleBlur = t6;
      let t7;
      if ($[14] !== errors.slug || $[15] !== errors.title) {
        t7 = function handleTitleChange(e_1) {
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
        $[14] = errors.slug;
        $[15] = errors.title;
        $[16] = t7;
      } else {
        t7 = $[16];
      }
      const handleTitleChange = t7;
      let t8;
      if ($[17] !== errors.slug) {
        t8 = function handleSlugChange(e_2) {
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
        $[17] = errors.slug;
        $[18] = t8;
      } else {
        t8 = $[18];
      }
      const handleSlugChange = t8;
      let t9;
      if (
        $[19] !== createMutation ||
        $[20] !== existingSlugs ||
        $[21] !== id ||
        $[22] !== mode ||
        $[23] !== updateMutation ||
        $[24] !== values
      ) {
        t9 = function handleSubmit(e_3) {
          e_3.preventDefault();
          const errs = validateAll(values, existingSlugs);
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
        $[19] = createMutation;
        $[20] = existingSlugs;
        $[21] = id;
        $[22] = mode;
        $[23] = updateMutation;
        $[24] = values;
        $[25] = t9;
      } else {
        t9 = $[25];
      }
      const handleSubmit = t9;
      let t10;
      if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0,
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
            lineNumber: 281,
            columnNumber: 11,
          },
          this,
        );
        $[26] = t10;
      } else {
        t10 = $[26];
      }
      let t11;
      if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0,
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
                  lineNumber: 288,
                  columnNumber: 63,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 288,
            columnNumber: 11,
          },
          this,
        );
        $[27] = t11;
      } else {
        t11 = $[27];
      }
      let t12;
      if ($[28] !== errors.slug || $[29] !== errors.title) {
        t12 = {
          "ProjectForm[<input>.ref]": (el) => {
            if (errors.title && !errors.slug) {
              firstErrorRef.current = el;
            }
          },
        }["ProjectForm[<input>.ref]"];
        $[28] = errors.slug;
        $[29] = errors.title;
        $[30] = t12;
      } else {
        t12 = $[30];
      }
      const t13 = !!errors.title;
      let t14;
      if ($[31] !== t13) {
        t14 = inputClass(t13);
        $[31] = t13;
        $[32] = t14;
      } else {
        t14 = $[32];
      }
      let t15;
      if ($[33] !== handleBlur) {
        t15 = {
          "ProjectForm[<input>.onBlur]": () => handleBlur("title"),
        }["ProjectForm[<input>.onBlur]"];
        $[33] = handleBlur;
        $[34] = t15;
      } else {
        t15 = $[34];
      }
      let t16;
      if (
        $[35] !== handleTitleChange ||
        $[36] !== t12 ||
        $[37] !== t14 ||
        $[38] !== t15 ||
        $[39] !== values.title
      ) {
        t16 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            id: "title",
            ref: t12,
            className: t14,
            value: values.title,
            onChange: handleTitleChange,
            onBlur: t15,
            placeholder: "Sharon Lane Kitchen",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 329,
            columnNumber: 11,
          },
          this,
        );
        $[35] = handleTitleChange;
        $[36] = t12;
        $[37] = t14;
        $[38] = t15;
        $[39] = values.title;
        $[40] = t16;
      } else {
        t16 = $[40];
      }
      let t17;
      if ($[41] !== errors.title) {
        t17 = /*#__PURE__*/ (0,
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
            lineNumber: 341,
            columnNumber: 11,
          },
          this,
        );
        $[41] = errors.title;
        $[42] = t17;
      } else {
        t17 = $[42];
      }
      let t18;
      if ($[43] !== t16 || $[44] !== t17) {
        t18 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1.5",
            children: [t11, t16, t17],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 349,
            columnNumber: 11,
          },
          this,
        );
        $[43] = t16;
        $[44] = t17;
        $[45] = t18;
      } else {
        t18 = $[45];
      }
      let t19;
      if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0,
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
                  lineNumber: 358,
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
            lineNumber: 358,
            columnNumber: 11,
          },
          this,
        );
        $[46] = t19;
      } else {
        t19 = $[46];
      }
      let t20;
      if ($[47] !== errors.slug) {
        t20 = {
          "ProjectForm[<input>.ref]": (el_0) => {
            if (errors.slug) {
              firstErrorRef.current = el_0;
            }
          },
        }["ProjectForm[<input>.ref]"];
        $[47] = errors.slug;
        $[48] = t20;
      } else {
        t20 = $[48];
      }
      const t21 = !!errors.slug;
      let t22;
      if ($[49] !== t21) {
        t22 = inputClass(t21);
        $[49] = t21;
        $[50] = t22;
      } else {
        t22 = $[50];
      }
      let t23;
      if ($[51] !== handleBlur) {
        t23 = {
          "ProjectForm[<input>.onBlur]": () => handleBlur("slug"),
        }["ProjectForm[<input>.onBlur]"];
        $[51] = handleBlur;
        $[52] = t23;
      } else {
        t23 = $[52];
      }
      let t24;
      if (
        $[53] !== handleSlugChange ||
        $[54] !== t20 ||
        $[55] !== t22 ||
        $[56] !== t23 ||
        $[57] !== values.slug
      ) {
        t24 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            id: "slug",
            ref: t20,
            className: t22,
            value: values.slug,
            onChange: handleSlugChange,
            onBlur: t23,
            placeholder: "sharon-lane-kitchen",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 398,
            columnNumber: 11,
          },
          this,
        );
        $[53] = handleSlugChange;
        $[54] = t20;
        $[55] = t22;
        $[56] = t23;
        $[57] = values.slug;
        $[58] = t24;
      } else {
        t24 = $[58];
      }
      let t25;
      if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0,
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
                  lineNumber: 410,
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
            lineNumber: 410,
            columnNumber: 11,
          },
          this,
        );
        $[59] = t25;
      } else {
        t25 = $[59];
      }
      let t26;
      if ($[60] !== errors.slug) {
        t26 = /*#__PURE__*/ (0,
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
            lineNumber: 417,
            columnNumber: 11,
          },
          this,
        );
        $[60] = errors.slug;
        $[61] = t26;
      } else {
        t26 = $[61];
      }
      let t27;
      if ($[62] !== t24 || $[63] !== t26) {
        t27 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1.5",
            children: [t19, t24, t25, t26],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 425,
            columnNumber: 11,
          },
          this,
        );
        $[62] = t24;
        $[63] = t26;
        $[64] = t27;
      } else {
        t27 = $[64];
      }
      let t28;
      if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0,
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
            lineNumber: 434,
            columnNumber: 11,
          },
          this,
        );
        $[65] = t28;
      } else {
        t28 = $[65];
      }
      let t29;
      if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
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
        $[66] = t29;
      } else {
        t29 = $[66];
      }
      let t30;
      if ($[67] !== values.description) {
        t30 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1.5",
            children: [
              t28,
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
                  onChange: t29,
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                  lineNumber: 455,
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
            lineNumber: 455,
            columnNumber: 11,
          },
          this,
        );
        $[67] = values.description;
        $[68] = t30;
      } else {
        t30 = $[68];
      }
      let t31;
      if ($[69] !== t18 || $[70] !== t27 || $[71] !== t30) {
        t31 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [t10, t18, t27, t30],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 463,
            columnNumber: 11,
          },
          this,
        );
        $[69] = t18;
        $[70] = t27;
        $[71] = t30;
        $[72] = t31;
      } else {
        t31 = $[72];
      }
      let t32;
      let t33;
      if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0,
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
            lineNumber: 474,
            columnNumber: 11,
          },
          this,
        );
        t33 = /*#__PURE__*/ (0,
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
            lineNumber: 475,
            columnNumber: 11,
          },
          this,
        );
        $[73] = t32;
        $[74] = t33;
      } else {
        t32 = $[73];
        t33 = $[74];
      }
      let t34;
      if ($[75] !== values.featuredImageUrl) {
        t34 = values.featuredImageUrl ? [values.featuredImageUrl] : [];
        $[75] = values.featuredImageUrl;
        $[76] = t34;
      } else {
        t34 = $[76];
      }
      let t35;
      if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
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
        $[77] = t35;
      } else {
        t35 = $[77];
      }
      let t36;
      if ($[78] !== isPending || $[79] !== t34) {
        t36 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "ImageUploader"
          ],
          {
            multiple: false,
            value: t34,
            onChange: t35,
            disabled: isPending,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 509,
            columnNumber: 11,
          },
          this,
        );
        $[78] = isPending;
        $[79] = t34;
        $[80] = t36;
      } else {
        t36 = $[80];
      }
      let t37;
      if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0,
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
            lineNumber: 518,
            columnNumber: 11,
          },
          this,
        );
        $[81] = t37;
      } else {
        t37 = $[81];
      }
      let t38;
      if ($[82] !== errors.featuredImageUrl || $[83] !== errors.slug || $[84] !== errors.title) {
        t38 = {
          "ProjectForm[<input>.ref]": (el_1) => {
            if (errors.featuredImageUrl && !errors.slug && !errors.title) {
              firstErrorRef.current = el_1;
            }
          },
        }["ProjectForm[<input>.ref]"];
        $[82] = errors.featuredImageUrl;
        $[83] = errors.slug;
        $[84] = errors.title;
        $[85] = t38;
      } else {
        t38 = $[85];
      }
      const t39 = !!errors.featuredImageUrl;
      let t40;
      if ($[86] !== t39) {
        t40 = inputClass(t39);
        $[86] = t39;
        $[87] = t40;
      } else {
        t40 = $[87];
      }
      let t41;
      if ($[88] !== errors.featuredImageUrl) {
        t41 = {
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
        $[88] = errors.featuredImageUrl;
        $[89] = t41;
      } else {
        t41 = $[89];
      }
      let t42;
      if ($[90] !== handleBlur) {
        t42 = {
          "ProjectForm[<input>.onBlur]": () => handleBlur("featuredImageUrl"),
        }["ProjectForm[<input>.onBlur]"];
        $[90] = handleBlur;
        $[91] = t42;
      } else {
        t42 = $[91];
      }
      let t43;
      if (
        $[92] !== t38 ||
        $[93] !== t40 ||
        $[94] !== t41 ||
        $[95] !== t42 ||
        $[96] !== values.featuredImageUrl
      ) {
        t43 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            id: "featured-url",
            ref: t38,
            className: t40,
            value: values.featuredImageUrl,
            onChange: t41,
            onBlur: t42,
            placeholder: "https://...",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 580,
            columnNumber: 11,
          },
          this,
        );
        $[92] = t38;
        $[93] = t40;
        $[94] = t41;
        $[95] = t42;
        $[96] = values.featuredImageUrl;
        $[97] = t43;
      } else {
        t43 = $[97];
      }
      let t44;
      if ($[98] !== errors.featuredImageUrl) {
        t44 = /*#__PURE__*/ (0,
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
            lineNumber: 592,
            columnNumber: 11,
          },
          this,
        );
        $[98] = errors.featuredImageUrl;
        $[99] = t44;
      } else {
        t44 = $[99];
      }
      let t45;
      if ($[100] !== t43 || $[101] !== t44) {
        t45 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "space-y-1",
            children: [t37, t43, t44],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 600,
            columnNumber: 11,
          },
          this,
        );
        $[100] = t43;
        $[101] = t44;
        $[102] = t45;
      } else {
        t45 = $[102];
      }
      let t46;
      if ($[103] !== t36 || $[104] !== t45) {
        t46 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [t32, t33, t36, t45],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 609,
            columnNumber: 11,
          },
          this,
        );
        $[103] = t36;
        $[104] = t45;
        $[105] = t46;
      } else {
        t46 = $[105];
      }
      let t47;
      let t48;
      if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0,
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
            lineNumber: 619,
            columnNumber: 11,
          },
          this,
        );
        t48 = /*#__PURE__*/ (0,
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
            lineNumber: 620,
            columnNumber: 11,
          },
          this,
        );
        $[106] = t47;
        $[107] = t48;
      } else {
        t47 = $[106];
        t48 = $[107];
      }
      let t49;
      if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = {
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
        $[108] = t49;
      } else {
        t49 = $[108];
      }
      let t50;
      if ($[109] !== isPending || $[110] !== values.imageUrls) {
        t50 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "fieldset",
          {
            className: "space-y-4 border border-[var(--p-tan)] bg-[var(--p-white)] p-6",
            children: [
              t47,
              t48,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "ImageUploader"
                ],
                {
                  multiple: true,
                  value: values.imageUrls,
                  onChange: t49,
                  disabled: isPending,
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/app/cms/projects/project-form.tsx",
                  lineNumber: 643,
                  columnNumber: 106,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 643,
            columnNumber: 11,
          },
          this,
        );
        $[109] = isPending;
        $[110] = values.imageUrls;
        $[111] = t50;
      } else {
        t50 = $[111];
      }
      let t51;
      if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
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
            lineNumber: 652,
            columnNumber: 11,
          },
          this,
        );
        $[112] = t51;
      } else {
        t51 = $[112];
      }
      let t52;
      if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
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
        $[113] = t52;
      } else {
        t52 = $[113];
      }
      let t53;
      if ($[114] !== values.published) {
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
            lineNumber: 673,
            columnNumber: 11,
          },
          this,
        );
        $[114] = values.published;
        $[115] = t53;
      } else {
        t53 = $[115];
      }
      let t54;
      if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
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
            lineNumber: 681,
            columnNumber: 11,
          },
          this,
        );
        $[116] = t54;
      } else {
        t54 = $[116];
      }
      let t55;
      if ($[117] !== t53) {
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
                  lineNumber: 688,
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
            lineNumber: 688,
            columnNumber: 11,
          },
          this,
        );
        $[117] = t53;
        $[118] = t55;
      } else {
        t55 = $[118];
      }
      const t56 = mode === "create" ? "Create project" : "Save changes";
      let t57;
      if ($[119] !== isPending || $[120] !== t56) {
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
            lineNumber: 697,
            columnNumber: 11,
          },
          this,
        );
        $[119] = isPending;
        $[120] = t56;
        $[121] = t57;
      } else {
        t57 = $[121];
      }
      let t58;
      if ($[122] !== router) {
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
            lineNumber: 706,
            columnNumber: 11,
          },
          this,
        );
        $[122] = router;
        $[123] = t58;
      } else {
        t58 = $[123];
      }
      let t59;
      if ($[124] !== t57 || $[125] !== t58) {
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
            lineNumber: 716,
            columnNumber: 11,
          },
          this,
        );
        $[124] = t57;
        $[125] = t58;
        $[126] = t59;
      } else {
        t59 = $[126];
      }
      let t60;
      if (
        $[127] !== handleSubmit ||
        $[128] !== t31 ||
        $[129] !== t46 ||
        $[130] !== t50 ||
        $[131] !== t55 ||
        $[132] !== t59
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
            children: [t31, t46, t50, t55, t59],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/cms/projects/project-form.tsx",
            lineNumber: 725,
            columnNumber: 11,
          },
          this,
        );
        $[127] = handleSubmit;
        $[128] = t31;
        $[129] = t46;
        $[130] = t50;
        $[131] = t55;
        $[132] = t59;
        $[133] = t60;
      } else {
        t60 = $[133];
      }
      return t60;
    }
    _s(ProjectForm, "HkN1Ycf+Szlw0iBp+61VqSVbmUU=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRouter"
        ],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useQuery"
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
    function _temp5(e_0) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "toast"
      ].error(e_0.message ?? "Failed to update");
    }
    function _temp4(input_0) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "client"
      ].project.update(input_0);
    }
    function _temp3(e) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "toast"
      ].error(e.message ?? "Failed to create");
    }
    function _temp2(input) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "client"
      ].project.create(input);
    }
    function _ProjectFormAnonymous2(p_1) {
      return p_1.slug;
    }
    function _ProjectFormAnonymous(p) {
      return p.slug;
    }
    function _temp() {
      return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$orpc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "client"
      ].project.listAdmin();
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
  "[project]/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["QueryObserver", () => QueryObserver]);
    // src/queryObserver.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)",
      );
    var QueryObserver = class
      extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "Subscribable"
      ]
    {
      constructor(client, options) {
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "pendingThenable"
        ])();
        this.bindMethods();
        this.setOptions(options);
      }
      #client;
      #currentQuery = void 0;
      #currentQueryInitialState = void 0;
      #currentResult = void 0;
      #currentResultState;
      #currentResultOptions;
      #currentThenable;
      #selectError;
      #selectFn;
      #selectResult;
      // This property keeps track of the last query with defined data.
      // It will be used to pass the previous data and query to the placeholder function between renders.
      #lastQueryWithDefinedData;
      #staleTimeoutId;
      #refetchIntervalId;
      #currentRefetchInterval;
      #trackedProps = /* @__PURE__ */ new Set();
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        if (this.listeners.size === 1) {
          this.#currentQuery.addObserver(this);
          if (shouldFetchOnMount(this.#currentQuery, this.options)) {
            this.#executeFetch();
          } else {
            this.updateResult();
          }
          this.#updateTimers();
        }
      }
      onUnsubscribe() {
        if (!this.hasListeners()) {
          this.destroy();
        }
      }
      shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
      }
      setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (
          this.options.enabled !== void 0 &&
          typeof this.options.enabled !== "boolean" &&
          typeof this.options.enabled !== "function" &&
          typeof (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "resolveEnabled"
          ])(this.options.enabled, this.#currentQuery) !== "boolean"
        ) {
          throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (
          prevOptions._defaulted &&
          !(0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "shallowEqualObjects"
          ])(this.options, prevOptions)
        ) {
          this.#client.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#currentQuery,
            observer: this,
          });
        }
        const mounted = this.hasListeners();
        if (
          mounted &&
          shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)
        ) {
          this.#executeFetch();
        }
        this.updateResult();
        if (
          mounted &&
          (this.#currentQuery !== prevQuery ||
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "resolveEnabled"
            ])(this.options.enabled, this.#currentQuery) !==
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "resolveEnabled"
              ])(prevOptions.enabled, this.#currentQuery) ||
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "resolveStaleTime"
            ])(this.options.staleTime, this.#currentQuery) !==
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "resolveStaleTime"
              ])(prevOptions.staleTime, this.#currentQuery))
        ) {
          this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (
          mounted &&
          (this.#currentQuery !== prevQuery ||
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "resolveEnabled"
            ])(this.options.enabled, this.#currentQuery) !==
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "resolveEnabled"
              ])(prevOptions.enabled, this.#currentQuery) ||
            nextRefetchInterval !== this.#currentRefetchInterval)
        ) {
          this.#updateRefetchInterval(nextRefetchInterval);
        }
      }
      getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
          this.#currentResult = result;
          this.#currentResultOptions = this.options;
          this.#currentResultState = this.#currentQuery.state;
        }
        return result;
      }
      getCurrentResult() {
        return this.#currentResult;
      }
      trackResult(result, onPropTracked) {
        return new Proxy(result, {
          get: (target, key) => {
            this.trackProp(key);
            onPropTracked?.(key);
            if (key === "promise") {
              this.trackProp("data");
              if (
                !this.options.experimental_prefetchInRender &&
                this.#currentThenable.status === "pending"
              ) {
                this.#currentThenable.reject(
                  new Error("experimental_prefetchInRender feature flag is not enabled"),
                );
              }
            }
            return Reflect.get(target, key);
          },
        });
      }
      trackProp(key) {
        this.#trackedProps.add(key);
      }
      getCurrentQuery() {
        return this.#currentQuery;
      }
      refetch({ ...options } = {}) {
        return this.fetch({
          ...options,
        });
      }
      fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(() => this.createResult(query, defaultedOptions));
      }
      fetch(fetchOptions) {
        return this.#executeFetch({
          ...fetchOptions,
          cancelRefetch: fetchOptions.cancelRefetch ?? true,
        }).then(() => {
          this.updateResult();
          return this.#currentResult;
        });
      }
      #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
          promise = promise.catch(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "noop"
            ],
          );
        }
        return promise;
      }
      #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "resolveStaleTime"
        ])(this.options.staleTime, this.#currentQuery);
        if (
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "isServer"
          ] ||
          this.#currentResult.isStale ||
          !(0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "isValidTimeout"
          ])(staleTime)
        ) {
          return;
        }
        const time = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "timeUntilStale"
        ])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "timeoutManager"
          ].setTimeout(() => {
            if (!this.#currentResult.isStale) {
              this.updateResult();
            }
          }, timeout);
      }
      #computeRefetchInterval() {
        return (
          (typeof this.options.refetchInterval === "function"
            ? this.options.refetchInterval(this.#currentQuery)
            : this.options.refetchInterval) ?? false
        );
      }
      #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "isServer"
          ] ||
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "resolveEnabled"
          ])(this.options.enabled, this.#currentQuery) === false ||
          !(0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "isValidTimeout"
          ])(this.#currentRefetchInterval) ||
          this.#currentRefetchInterval === 0
        ) {
          return;
        }
        this.#refetchIntervalId =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "timeoutManager"
          ].setInterval(() => {
            if (
              this.options.refetchIntervalInBackground ||
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "focusManager"
              ].isFocused()
            ) {
              this.#executeFetch();
            }
          }, this.#currentRefetchInterval);
      }
      #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
      }
      #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "timeoutManager"
          ].clearTimeout(this.#staleTimeoutId);
          this.#staleTimeoutId = void 0;
        }
      }
      #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "timeoutManager"
          ].clearInterval(this.#refetchIntervalId);
          this.#refetchIntervalId = void 0;
        }
      }
      createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
          ...state,
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
          const mounted = this.hasListeners();
          const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
          const fetchOptionally =
            mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
          if (fetchOnMount || fetchOptionally) {
            newState = {
              ...newState,
              ...(0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "fetchState"
              ])(state.data, query.options),
            };
          }
          if (options._optimisticResults === "isRestoring") {
            newState.fetchStatus = "idle";
          }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
          let placeholderData;
          if (
            prevResult?.isPlaceholderData &&
            options.placeholderData === prevResultOptions?.placeholderData
          ) {
            placeholderData = prevResult.data;
            skipSelect = true;
          } else {
            placeholderData =
              typeof options.placeholderData === "function"
                ? options.placeholderData(
                    this.#lastQueryWithDefinedData?.state.data,
                    this.#lastQueryWithDefinedData,
                  )
                : options.placeholderData;
          }
          if (placeholderData !== void 0) {
            status = "success";
            data = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "replaceData"
            ])(prevResult?.data, placeholderData, options);
            isPlaceholderData = true;
          }
        }
        if (options.select && data !== void 0 && !skipSelect) {
          if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
            data = this.#selectResult;
          } else {
            try {
              this.#selectFn = options.select;
              data = options.select(data);
              data = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "replaceData"
              ])(prevResult?.data, data, options);
              this.#selectResult = data;
              this.#selectError = null;
            } catch (selectError) {
              this.#selectError = selectError;
            }
          }
        }
        if (this.#selectError) {
          error = this.#selectError;
          data = this.#selectResult;
          errorUpdatedAt = Date.now();
          status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
          status,
          fetchStatus: newState.fetchStatus,
          isPending,
          isSuccess: status === "success",
          isError,
          isInitialLoading: isLoading,
          isLoading,
          data,
          dataUpdatedAt: newState.dataUpdatedAt,
          error,
          errorUpdatedAt,
          failureCount: newState.fetchFailureCount,
          failureReason: newState.fetchFailureReason,
          errorUpdateCount: newState.errorUpdateCount,
          isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
          isFetchedAfterMount:
            newState.dataUpdateCount > queryInitialState.dataUpdateCount ||
            newState.errorUpdateCount > queryInitialState.errorUpdateCount,
          isFetching,
          isRefetching: isFetching && !isPending,
          isLoadingError: isError && !hasData,
          isPaused: newState.fetchStatus === "paused",
          isPlaceholderData,
          isRefetchError: isError && hasData,
          isStale: isStale(query, options),
          refetch: this.refetch,
          promise: this.#currentThenable,
          isEnabled:
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "resolveEnabled"
            ])(options.enabled, query) !== false,
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
          const hasResultData = nextResult.data !== void 0;
          const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
          const finalizeThenableIfPossible = (thenable) => {
            if (isErrorWithoutData) {
              thenable.reject(nextResult.error);
            } else if (hasResultData) {
              thenable.resolve(nextResult.data);
            }
          };
          const recreateThenable = () => {
            const pending =
              (this.#currentThenable =
              nextResult.promise =
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "pendingThenable"
                ])());
            finalizeThenableIfPossible(pending);
          };
          const prevThenable = this.#currentThenable;
          switch (prevThenable.status) {
            case "pending":
              if (query.queryHash === prevQuery.queryHash) {
                finalizeThenableIfPossible(prevThenable);
              }
              break;
            case "fulfilled":
              if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
                recreateThenable();
              }
              break;
            case "rejected":
              if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
                recreateThenable();
              }
              break;
          }
        }
        return nextResult;
      }
      updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
          this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if (
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "shallowEqualObjects"
          ])(nextResult, prevResult)
        ) {
          return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = () => {
          if (!prevResult) {
            return true;
          }
          const { notifyOnChangeProps } = this.options;
          const notifyOnChangePropsValue =
            typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
          if (
            notifyOnChangePropsValue === "all" ||
            (!notifyOnChangePropsValue && !this.#trackedProps.size)
          ) {
            return true;
          }
          const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
          if (this.options.throwOnError) {
            includedProps.add("error");
          }
          return Object.keys(this.#currentResult).some((key) => {
            const typedKey = key;
            const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
            return changed && includedProps.has(typedKey);
          });
        };
        this.#notify({
          listeners: shouldNotifyListeners(),
        });
      }
      #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
          return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
          prevQuery?.removeObserver(this);
          query.addObserver(this);
        }
      }
      onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
          this.#updateTimers();
        }
      }
      #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "notifyManager"
        ].batch(() => {
          if (notifyOptions.listeners) {
            this.listeners.forEach((listener) => {
              listener(this.#currentResult);
            });
          }
          this.#client.getQueryCache().notify({
            query: this.#currentQuery,
            type: "observerResultsUpdated",
          });
        });
      }
    };
    function shouldLoadOnMount(query, options) {
      return (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "resolveEnabled"
        ])(options.enabled, query) !== false &&
        query.state.data === void 0 &&
        !(query.state.status === "error" && options.retryOnMount === false)
      );
    }
    function shouldFetchOnMount(query, options) {
      return (
        shouldLoadOnMount(query, options) ||
        (query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount))
      );
    }
    function shouldFetchOn(query, options, field) {
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "resolveEnabled"
        ])(options.enabled, query) !== false &&
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "resolveStaleTime"
        ])(options.staleTime, query) !== "static"
      ) {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || (value !== false && isStale(query, options));
      }
      return false;
    }
    function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
      return (
        (query !== prevQuery ||
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "resolveEnabled"
          ])(prevOptions.enabled, query) === false) &&
        (!options.suspense || query.state.status !== "error") &&
        isStale(query, options)
      );
    }
    function isStale(query, options) {
      return (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "resolveEnabled"
        ])(options.enabled, query) !== false &&
        query.isStaleByTime(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "resolveStaleTime"
          ])(options.staleTime, query),
        )
      );
    }
    function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
      if (
        !(0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "shallowEqualObjects"
        ])(observer.getCurrentResult(), optimisticResult)
      ) {
        return true;
      }
      return false;
    }
  },
  //# sourceMappingURL=queryObserver.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "QueryErrorResetBoundary",
      () => QueryErrorResetBoundary,
      "useQueryErrorResetBoundary",
      () => useQueryErrorResetBoundary,
    ]);
    // src/QueryErrorResetBoundary.tsx
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)",
      );
    ("use client");
    function createValue() {
      let isReset = false;
      return {
        clearReset: () => {
          isReset = false;
        },
        reset: () => {
          isReset = true;
        },
        isReset: () => {
          return isReset;
        },
      };
    }
    var QueryErrorResetBoundaryContext =
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "createContext"
      ](createValue());
    var useQueryErrorResetBoundary = () =>
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useContext"
      ](QueryErrorResetBoundaryContext);
    var QueryErrorResetBoundary = ({ children }) => {
      const [value] =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](
          {
            "QueryErrorResetBoundary.useState": () => createValue(),
          }["QueryErrorResetBoundary.useState"],
        );
      return /* @__PURE__ */ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsx"
      ])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children,
      });
    };
  },
  //# sourceMappingURL=QueryErrorResetBoundary.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "ensurePreventErrorBoundaryRetry",
      () => ensurePreventErrorBoundaryRetry,
      "getHasError",
      () => getHasError,
      "useClearResetErrorBoundary",
      () => useClearResetErrorBoundary,
    ]);
    // src/errorBoundaryUtils.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)",
      );
    ("use client");
    var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
      const throwOnError =
        query?.state.error && typeof options.throwOnError === "function"
          ? (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "shouldThrowError"
            ])(options.throwOnError, [query.state.error, query])
          : options.throwOnError;
      if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
        if (!errorResetBoundary.isReset()) {
          options.retryOnMount = false;
        }
      }
    };
    var useClearResetErrorBoundary = (errorResetBoundary) => {
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "useClearResetErrorBoundary.useEffect": () => {
            errorResetBoundary.clearReset();
          },
        }["useClearResetErrorBoundary.useEffect"],
        [errorResetBoundary],
      );
    };
    var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense }) => {
      return (
        result.isError &&
        !errorResetBoundary.isReset() &&
        !result.isFetching &&
        query &&
        ((suspense && result.data === void 0) ||
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "shouldThrowError"
          ])(throwOnError, [result.error, query]))
      );
    };
  },
  //# sourceMappingURL=errorBoundaryUtils.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "IsRestoringProvider",
      () => IsRestoringProvider,
      "useIsRestoring",
      () => useIsRestoring,
    ]);
    // src/IsRestoringProvider.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    ("use client");
    var IsRestoringContext =
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "createContext"
      ](false);
    var useIsRestoring = () =>
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useContext"
      ](IsRestoringContext);
    var IsRestoringProvider = IsRestoringContext.Provider;
  },
  //# sourceMappingURL=IsRestoringProvider.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "defaultThrowOnError",
      () => defaultThrowOnError,
      "ensureSuspenseTimers",
      () => ensureSuspenseTimers,
      "fetchOptimistic",
      () => fetchOptimistic,
      "shouldSuspend",
      () => shouldSuspend,
      "willFetch",
      () => willFetch,
    ]);
    // src/suspense.ts
    var defaultThrowOnError = (_error, query) => query.state.data === void 0;
    var ensureSuspenseTimers = (defaultedOptions) => {
      if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value) =>
          value === "static"
            ? value
            : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime =
          typeof originalStaleTime === "function"
            ? (...args) => clamp(originalStaleTime(...args))
            : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
          defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
      }
    };
    var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
    var shouldSuspend = (defaultedOptions, result) =>
      defaultedOptions?.suspense && result.isPending;
    var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) =>
      observer.fetchOptimistic(defaultedOptions).catch(() => {
        errorResetBoundary.clearReset();
      });
  },
  //# sourceMappingURL=suspense.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["useBaseQuery", () => useBaseQuery]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        "[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
      );
    // src/useBaseQuery.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)",
      );
    ("use client");
    function useBaseQuery(options, Observer, queryClient) {
      if (("TURBOPACK compile-time truthy", 1)) {
        if (typeof options !== "object" || Array.isArray(options)) {
          throw new Error(
            'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object',
          );
        }
      }
      const isRestoring = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useIsRestoring"
      ])();
      const errorResetBoundary = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useQueryErrorResetBoundary"
      ])();
      const client = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useQueryClient"
      ])(queryClient);
      const defaultedOptions = client.defaultQueryOptions(options);
      client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
      const query = client.getQueryCache().get(defaultedOptions.queryHash);
      if (("TURBOPACK compile-time truthy", 1)) {
        if (!defaultedOptions.queryFn) {
          console.error(
            `[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`,
          );
        }
      }
      defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "ensureSuspenseTimers"
      ])(defaultedOptions);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "ensurePreventErrorBoundaryRetry"
      ])(defaultedOptions, errorResetBoundary, query);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useClearResetErrorBoundary"
      ])(errorResetBoundary);
      const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
      const [observer] =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](
          {
            "useBaseQuery.useState": () => new Observer(client, defaultedOptions),
          }["useBaseQuery.useState"],
        );
      const result = observer.getOptimisticResult(defaultedOptions);
      const shouldSubscribe = !isRestoring && options.subscribed !== false;
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useSyncExternalStore"
      ](
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          {
            "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange) => {
              const unsubscribe = shouldSubscribe
                ? observer.subscribe(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "notifyManager"
                    ].batchCalls(onStoreChange),
                  )
                : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "noop"
                  ];
              observer.updateResult();
              return unsubscribe;
            },
          }["useBaseQuery.useSyncExternalStore.useCallback"],
          [observer, shouldSubscribe],
        ),
        {
          "useBaseQuery.useSyncExternalStore": () => observer.getCurrentResult(),
        }["useBaseQuery.useSyncExternalStore"],
        {
          "useBaseQuery.useSyncExternalStore": () => observer.getCurrentResult(),
        }["useBaseQuery.useSyncExternalStore"],
      );
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "useBaseQuery.useEffect": () => {
            observer.setOptions(defaultedOptions);
          },
        }["useBaseQuery.useEffect"],
        [defaultedOptions, observer],
      );
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "shouldSuspend"
        ])(defaultedOptions, result)
      ) {
        throw (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "fetchOptimistic"
        ])(defaultedOptions, observer, errorResetBoundary);
      }
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "getHasError"
        ])({
          result,
          errorResetBoundary,
          throwOnError: defaultedOptions.throwOnError,
          query,
          suspense: defaultedOptions.suspense,
        })
      ) {
        throw result.error;
      }
      client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
      if (
        defaultedOptions.experimental_prefetchInRender &&
        !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "isServer"
        ] &&
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "willFetch"
        ])(result, isRestoring)
      ) {
        const promise = isNewCacheEntry // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
          ? (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "fetchOptimistic"
            ])(defaultedOptions, observer, errorResetBoundary) // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
          : query?.promise;
        promise
          ?.catch(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "noop"
            ],
          )
          .finally(() => {
            observer.updateResult();
          });
      }
      return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
    }
  },
  //# sourceMappingURL=useBaseQuery.js.map
  "[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["useQuery", () => useQuery]);
    // src/useQuery.ts
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)",
      );
    ("use client");
    function useQuery(options, queryClient) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useBaseQuery"
      ])(
        options,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "QueryObserver"
        ],
        queryClient,
      );
    }
  },
  //# sourceMappingURL=useQuery.js.map
]);

//# sourceMappingURL=_9bf33af9._.js.map
