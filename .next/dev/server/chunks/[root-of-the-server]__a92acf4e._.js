module.exports = [
  "[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-route-turbo.runtime.dev.js",
      () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () =>
      require("next/dist/compiled/@opentelemetry/api"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
      () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () => require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () => require("next/dist/server/app-render/work-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/fs [external] (fs, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("fs", () => require("fs"));

    module.exports = mod;
  },
  "[externals]/path [external] (path, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("path", () => require("path"));

    module.exports = mod;
  },
  "[externals]/os [external] (os, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("os", () => require("os"));

    module.exports = mod;
  },
  "[externals]/crypto [external] (crypto, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("crypto", () => require("crypto"));

    module.exports = mod;
  },
  "[project]/src/lib/env/server.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["getBaseUrl", () => getBaseUrl, "getServerEnv", () => getServerEnv]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/node_modules/dotenv/config.js [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@t3-oss/env-core/dist/index.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>",
      );
    /** Validates URL without throwing (Zod's .url() uses new URL() and can throw). */ function isValidUrl(
      s,
    ) {
      try {
        new URL(s);
        return true;
      } catch {
        return false;
      }
    }
    const serverSchema = {
      clientPrefix: "PUBLIC_",
      client: {},
      server: {
        DATABASE_URL:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .min(1),
        BETTER_AUTH_SECRET:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .min(32),
        GOOGLE_CLIENT_ID:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .min(1),
        GOOGLE_CLIENT_SECRET:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .min(1),
        CMS_ALLOWED_EMAILS:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        NODE_ENV:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .enum(["development", "production", "test"])
            .default("development"),
        R2_ACCOUNT_ID:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        R2_ACCESS_KEY_ID:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        R2_SECRET_ACCESS_KEY:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        R2_BUCKET_NAME:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        R2_PUBLIC_URL:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        VERCEL_URL:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional(),
        BETTER_AUTH_URL:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
            "z"
          ]
            .string()
            .optional()
            .refine((v) => !v || isValidUrl(v), "BETTER_AUTH_URL must be a valid URL"),
      },
      runtimeEnv: process.env,
      emptyStringAsUndefined: true,
    };
    let _env = null;
    /** Stub used when env vars are missing (e.g. during `next build`). Do not use at runtime. */ function getBuildStub() {
      return {
        DATABASE_URL: "",
        BETTER_AUTH_SECRET: "",
        GOOGLE_CLIENT_ID: "",
        GOOGLE_CLIENT_SECRET: "",
        CMS_ALLOWED_EMAILS: undefined,
        NODE_ENV: "development",
        R2_ACCOUNT_ID: undefined,
        R2_ACCESS_KEY_ID: undefined,
        R2_SECRET_ACCESS_KEY: undefined,
        R2_BUCKET_NAME: undefined,
        R2_PUBLIC_URL: undefined,
        VERCEL_URL: undefined,
        BETTER_AUTH_URL: undefined,
      };
    }
    function getServerEnv() {
      if (_env) return _env;
      if (typeof process.env.DATABASE_URL === "undefined") {
        return getBuildStub();
      }
      _env = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "createEnv"
      ])(serverSchema);
      return _env;
    }
    function getBaseUrl() {
      const e = getServerEnv();
      if (e.BETTER_AUTH_URL) return e.BETTER_AUTH_URL;
      if (e.VERCEL_URL) return `https://${e.VERCEL_URL}`;
      return "http://localhost:3001";
    }
  },
  "[project]/src/lib/db/schema/auth.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "account",
      () => account,
      "accountRelations",
      () => accountRelations,
      "session",
      () => session,
      "sessionRelations",
      () => sessionRelations,
      "user",
      () => user,
      "userRelations",
      () => userRelations,
      "verification",
      () => verification,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)",
      );
    const user = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])("user", {
      id: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("id").primaryKey(),
      name: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("name").notNull(),
      email: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("email")
        .notNull()
        .unique(),
      emailVerified: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "boolean"
      ])("email_verified")
        .default(false)
        .notNull(),
      image: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("image"),
      createdAt: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "timestamp"
      ])("created_at")
        .defaultNow()
        .notNull(),
      updatedAt: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "timestamp"
      ])("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
    });
    const session = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])(
      "session",
      {
        id: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("id").primaryKey(),
        expiresAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("expires_at").notNull(),
        token: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("token")
          .notNull()
          .unique(),
        createdAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("created_at")
          .defaultNow()
          .notNull(),
        updatedAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("updated_at")
          .$onUpdate(() => new Date())
          .notNull(),
        ipAddress: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("ip_address"),
        userAgent: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("user_agent"),
        userId: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("user_id")
          .notNull()
          .references(() => user.id, {
            onDelete: "cascade",
          }),
      },
      (table) => [
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "index"
        ])("session_userId_idx").on(table.userId),
      ],
    );
    const account = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])(
      "account",
      {
        id: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("id").primaryKey(),
        accountId: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("account_id").notNull(),
        providerId: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("provider_id").notNull(),
        userId: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("user_id")
          .notNull()
          .references(() => user.id, {
            onDelete: "cascade",
          }),
        accessToken: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("access_token"),
        refreshToken: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("refresh_token"),
        idToken: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("id_token"),
        accessTokenExpiresAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("access_token_expires_at"),
        refreshTokenExpiresAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("refresh_token_expires_at"),
        scope: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("scope"),
        password: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("password"),
        createdAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("created_at")
          .defaultNow()
          .notNull(),
        updatedAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("updated_at")
          .$onUpdate(() => new Date())
          .notNull(),
      },
      (table) => [
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "index"
        ])("account_userId_idx").on(table.userId),
      ],
    );
    const verification = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])(
      "verification",
      {
        id: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("id").primaryKey(),
        identifier: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("identifier").notNull(),
        value: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "text"
        ])("value").notNull(),
        expiresAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("expires_at").notNull(),
        createdAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("created_at")
          .defaultNow()
          .notNull(),
        updatedAt: (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "timestamp"
        ])("updated_at")
          .defaultNow()
          .$onUpdate(() => new Date())
          .notNull(),
      },
      (table) => [
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "index"
        ])("verification_identifier_idx").on(table.identifier),
      ],
    );
    const userRelations = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "relations"
    ])(user, ({ many }) => ({
      sessions: many(session),
      accounts: many(account),
    }));
    const sessionRelations = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "relations"
    ])(session, ({ one }) => ({
      user: one(user, {
        fields: [session.userId],
        references: [user.id],
      }),
    }));
    const accountRelations = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "relations"
    ])(account, ({ one }) => ({
      user: one(user, {
        fields: [account.userId],
        references: [user.id],
      }),
    }));
  },
  "[project]/src/lib/db/schema/project.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "project",
      () => project,
      "projectImage",
      () => projectImage,
      "projectImageRelations",
      () => projectImageRelations,
      "projectRelations",
      () => projectRelations,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)",
      );
    const project = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])("project", {
      id: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("id").primaryKey(),
      slug: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("slug")
        .notNull()
        .unique(),
      title: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("title").notNull(),
      description: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("description").notNull(),
      featuredImageUrl: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("featured_image_url"),
      published: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "boolean"
      ])("published")
        .default(false)
        .notNull(),
      createdAt: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "timestamp"
      ])("created_at")
        .defaultNow()
        .notNull(),
      updatedAt: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "timestamp"
      ])("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
    });
    const projectImage = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])("project_image", {
      id: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("id").primaryKey(),
      projectId: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("project_id")
        .notNull()
        .references(() => project.id, {
          onDelete: "cascade",
        }),
      url: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("url").notNull(),
      sortOrder: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "integer"
      ])("sort_order")
        .default(0)
        .notNull(),
    });
    const projectRelations = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "relations"
    ])(project, ({ many }) => ({
      images: many(projectImage),
    }));
    const projectImageRelations = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "relations"
    ])(projectImage, ({ one }) => ({
      project: one(project, {
        fields: [projectImage.projectId],
        references: [project.id],
      }),
    }));
  },
  "[project]/src/lib/db/schema/siteSetting.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["siteSetting", () => siteSetting]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)",
      );
    const siteSetting = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "pgTable"
    ])("site_setting", {
      key: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("key").primaryKey(),
      value: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "text"
      ])("value").notNull(),
      updatedAt: (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "timestamp"
      ])("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
    });
  },
  "[project]/src/lib/db/schema/index.ts [app-route] (ecmascript) <locals>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/schema/auth.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/schema/project.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$siteSetting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/lib/db/schema/siteSetting.ts [app-route] (ecmascript)",
      );
  },
  "[project]/src/lib/db/schema/index.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "account",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "account"
        ],
      "accountRelations",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "accountRelations"
        ],
      "project",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "project"
        ],
      "projectImage",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "projectImage"
        ],
      "projectImageRelations",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "projectImageRelations"
        ],
      "projectRelations",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "projectRelations"
        ],
      "session",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "session"
        ],
      "sessionRelations",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "sessionRelations"
        ],
      "siteSetting",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$siteSetting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "siteSetting"
        ],
      "user",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "user"
        ],
      "userRelations",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "userRelations"
        ],
      "verification",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "verification"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/src/lib/db/schema/index.ts [app-route] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/schema/auth.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/schema/project.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$siteSetting$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/lib/db/schema/siteSetting.ts [app-route] (ecmascript)",
      );
  },
  "[project]/src/lib/db/index.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["db", () => db]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/drizzle-orm/neon-http/driver.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/env/server.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/src/lib/db/schema/index.ts [app-route] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/schema/index.ts [app-route] (ecmascript)");
    let _db = null;
    function getDb() {
      if (!_db) {
        const env = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "getServerEnv"
        ])();
        const sql = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "neon"
        ])(env.DATABASE_URL);
        _db = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "drizzle"
        ])(sql, {
          schema:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
        });
      }
      return _db;
    }
    const db = new Proxy(
      {},
      {
        get(_, prop) {
          return getDb()[prop];
        },
      },
    );
  },
  "[project]/src/lib/auth/index.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["auth", () => auth, "getAuth", () => getAuth]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/index.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/db/schema/auth.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/env/server.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/better-auth/dist/auth/full.mjs [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-route] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/better-auth/dist/adapters/drizzle-adapter/drizzle-adapter.mjs [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)",
      );
    let _auth = null;
    function getAuth() {
      if (!_auth) {
        const env = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "getServerEnv"
        ])();
        const baseURL = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "getBaseUrl"
        ])();
        _auth = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "betterAuth"
        ])({
          baseURL,
          trustedOrigins: async (request) => {
            const list = [baseURL];
            if (env.VERCEL_URL) {
              list.push(`https://${env.VERCEL_URL}`);
            }
            const origin = request?.headers?.get?.("origin");
            if (origin && !list.includes(origin)) {
              list.push(origin);
            }
            return list;
          },
          database: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "drizzleAdapter"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
              "db"
            ],
            {
              provider: "pg",
              schema:
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$schema$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
            },
          ),
          emailAndPassword: {
            enabled: false,
          },
          socialProviders: {
            google: {
              clientId: env.GOOGLE_CLIENT_ID,
              clientSecret: env.GOOGLE_CLIENT_SECRET,
            },
          },
          advanced: {
            defaultCookieAttributes: {
              sameSite: "lax",
              secure: env.NODE_ENV === "production",
              httpOnly: true,
            },
          },
          plugins: [
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
              "nextCookies"
            ])(),
          ],
        });
      }
      return _auth;
    }
    const auth = new Proxy(
      {},
      {
        get(_, prop) {
          return getAuth()[prop];
        },
      },
    );
  },
  "[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () => require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[project]/src/app/api/auth/[...all]/route.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["GET", () => GET, "POST", () => POST]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/src/lib/auth/index.ts [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
    async function withRequestFix(request, handler) {
      try {
        const headersList = await (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "headers"
        ])();
        const url = request.url;
        const method = request.method;
        const modifiedRequest =
          method === "GET" || method === "HEAD"
            ? new Request(url, {
                method,
                headers: new Headers(headersList),
              })
            : new Request(url, {
                method,
                headers: new Headers(headersList),
                body: request.body,
                duplex: "half",
              });
        return await handler(modifiedRequest);
      } catch (error) {
        console.error("[Better Auth]", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "NextResponse"
        ].json(
          {
            error: "Authentication failed",
          },
          {
            status: 500,
          },
        );
      }
    }
    async function GET(request) {
      const auth = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "getAuth"
      ])();
      const { GET: handler } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "toNextJsHandler"
      ])(auth);
      return withRequestFix(request, handler);
    }
    async function POST(request) {
      const auth = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "getAuth"
      ])();
      const { POST: handler } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "toNextJsHandler"
      ])(auth);
      return withRequestFix(request, handler);
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a92acf4e._.js.map
