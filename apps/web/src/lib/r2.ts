import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

function getR2Client(): S3Client | null {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) return null;

  return new S3Client({
    region: "auto",
    // The S3-compatible API endpoint — used only for writes, never for public reads.
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
    // Force path-style so the SDK routes correctly: endpoint/{bucket}/{key}
    forcePathStyle: true,
  });
}

export type UploadResult = { url: string };

/**
 * Upload a file buffer to R2. Falls back to local /public/uploads when R2
 * env vars are not configured (development convenience).
 *
 * R2_PUBLIC_URL must be the **public** URL root for your bucket, e.g.:
 *   - https://pub-<hash>.r2.dev          (R2 managed public access)
 *   - https://images.yourdomain.com      (custom domain)
 *
 * Do NOT set it to the S3-compatible storage endpoint
 * (*.r2.cloudflarestorage.com) — that requires auth and browsers cannot
 * load images from it directly.
 */
export async function uploadFile(
  file: File,
  folder = "uploads",
): Promise<UploadResult> {
  const ext = file.name.includes(".")
    ? file.name.split(".").pop()!.toLowerCase()
    : "bin";
  const key = `${folder}/${crypto.randomUUID()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const r2 = getR2Client();

  if (r2) {
    const bucket = process.env.R2_BUCKET_NAME;
    const publicUrl = process.env.R2_PUBLIC_URL;

    if (!bucket || !publicUrl) {
      throw new Error(
        "R2_BUCKET_NAME and R2_PUBLIC_URL must be set when using R2",
      );
    }

    // Guard against accidentally using the private API endpoint as the public URL
    if (publicUrl.includes("r2.cloudflarestorage.com")) {
      throw new Error(
        "R2_PUBLIC_URL must be your bucket's public URL (pub-xxx.r2.dev or custom domain), " +
          "not the S3-compatible API endpoint (*.r2.cloudflarestorage.com). " +
          "Enable public access in your R2 bucket settings to get the public URL.",
      );
    }

    await r2.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: buffer,
        ContentType: file.type || "application/octet-stream",
        ContentLength: buffer.byteLength,
      }),
    );

    const base = publicUrl.replace(/\/$/, "");
    return { url: `${base}/${key}` };
  }

  // Local fallback — save to public/uploads/
  const { writeFile, mkdir } = await import("node:fs/promises");
  const nodePath = await import("node:path");
  const uploadDir = nodePath.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  const fileName = `${crypto.randomUUID()}.${ext}`;
  await writeFile(nodePath.join(uploadDir, fileName), buffer);
  return { url: `/uploads/${fileName}` };
}
