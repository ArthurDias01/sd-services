module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/auth-client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authClient",
    ()=>authClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/better-auth/dist/client/react/index.mjs [app-route] (ecmascript) <locals>");
;
const authClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAuthClient"])({
    ...("TURBOPACK compile-time value", "undefined") !== "undefined" && {
        baseURL: window.location.origin
    }
});
}),
"[project]/src/lib/r2.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
;
function getR2Client() {
    const accountId = process.env.R2_ACCOUNT_ID;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    if (!accountId || !accessKeyId || !secretAccessKey) return null;
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["S3Client"]({
        region: "auto",
        // The S3-compatible API endpoint — used only for writes, never for public reads.
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId,
            secretAccessKey
        },
        // Force path-style so the SDK routes correctly: endpoint/{bucket}/{key}
        forcePathStyle: true
    });
}
async function uploadFile(file, folder = "uploads") {
    const ext = file.name.includes(".") ? file.name.split(".").pop().toLowerCase() : "bin";
    const key = `${folder}/${crypto.randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const r2 = getR2Client();
    if (r2) {
        const bucket = process.env.R2_BUCKET_NAME;
        const publicUrl = process.env.R2_PUBLIC_URL;
        if (!bucket || !publicUrl) {
            throw new Error("R2_BUCKET_NAME and R2_PUBLIC_URL must be set when using R2");
        }
        // Guard against accidentally using the private API endpoint as the public URL
        if (publicUrl.includes("r2.cloudflarestorage.com")) {
            throw new Error("R2_PUBLIC_URL must be your bucket's public URL (pub-xxx.r2.dev or custom domain), " + "not the S3-compatible API endpoint (*.r2.cloudflarestorage.com). " + "Enable public access in your R2 bucket settings to get the public URL.");
        }
        await r2.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"]({
            Bucket: bucket,
            Key: key,
            Body: buffer,
            ContentType: file.type || "application/octet-stream",
            ContentLength: buffer.byteLength
        }));
        const base = publicUrl.replace(/\/$/, "");
        return {
            url: `${base}/${key}`
        };
    }
    // Local fallback — save to public/uploads/
    const { writeFile, mkdir } = await __turbopack_context__.A("[externals]/node:fs/promises [external] (node:fs/promises, cjs, async loader)");
    const nodePath = await __turbopack_context__.A("[externals]/node:path [external] (node:path, cjs, async loader)");
    const uploadDir = nodePath.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, {
        recursive: true
    });
    const fileName = `${crypto.randomUUID()}.${ext}`;
    await writeFile(nodePath.join(uploadDir, fileName), buffer);
    return {
        url: `/uploads/${fileName}`
    };
}
}),
"[project]/src/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$r2$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/r2.ts [app-route] (ecmascript)");
;
;
;
;
async function getAdminSession() {
    let session = null;
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authClient"].getSession({
            fetchOptions: {
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])(),
                throw: false
            }
        });
        session = result && typeof result === "object" && "data" in result ? result.data : null;
    } catch  {
        return null;
    }
    if (!session?.user) return null;
    const allowed = process.env.CMS_ALLOWED_EMAILS;
    if (allowed) {
        const emails = allowed.split(",").map((e)=>e.trim().toLowerCase());
        if (!emails.includes(session.user.email?.toLowerCase() ?? "")) return null;
    }
    return session;
}
async function POST(request) {
    const session = await getAdminSession();
    if (!session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    let formData;
    try {
        formData = await request.formData();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid form data"
        }, {
            status: 400
        });
    }
    // Accept either a single "file" or multiple "files[]"
    const rawFiles = formData.getAll("files");
    const single = formData.get("file");
    const allFiles = [
        ...rawFiles.filter((f)=>f instanceof File),
        ...single instanceof File ? [
            single
        ] : []
    ];
    if (allFiles.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No files provided"
        }, {
            status: 400
        });
    }
    try {
        const results = await Promise.all(allFiles.map((file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$r2$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadFile"])(file, "uploads")));
        // Single file → { url } for backwards compat; multiple → { urls }
        if (allFiles.length === 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                url: results[0].url,
                urls: [
                    results[0].url
                ]
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            urls: results.map((r)=>r.url)
        });
    } catch (err) {
        console.error("Upload error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Upload failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e00aa568._.js.map