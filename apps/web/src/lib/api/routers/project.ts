import { desc, eq } from "drizzle-orm";
import type { RouterClient } from "@orpc/server";
import { z } from "zod";

import { db } from "@/lib/db";
import { project, projectImage } from "@/lib/db/schema/project";

import { adminProcedure, publicProcedure } from "../index";

const slugSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL-safe (lowercase letters, numbers, hyphens)");

const imageUrlSchema = z
  .string()
  .min(1)
  .refine(
    (v) => v.startsWith("/") || v.startsWith("https://") || v.startsWith("http://"),
    "Must be a valid URL or a path starting with /",
  );

const projectCreateSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  description: z.string(),
  featuredImageUrl: imageUrlSchema.optional().nullable(),
  published: z.boolean().optional(),
  imageUrls: z.array(imageUrlSchema).optional(),
});

const projectUpdateSchema = projectCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const projectRouter = {
  list: publicProcedure.handler(async () => {
    const rows = await db
      .select({
        id: project.id,
        slug: project.slug,
        title: project.title,
        description: project.description,
        featuredImageUrl: project.featuredImageUrl,
      })
      .from(project)
      .where(eq(project.published, true))
      .orderBy(desc(project.updatedAt));
    return rows;
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string().min(1) }))
    .handler(async ({ input }) => {
      const [row] = await db
        .select()
        .from(project)
        .where(eq(project.slug, input.slug))
        .limit(1);
      if (!row || !row.published) return null;
      const images = await db
        .select({ id: projectImage.id, url: projectImage.url, sortOrder: projectImage.sortOrder })
        .from(projectImage)
        .where(eq(projectImage.projectId, row.id))
        .orderBy(projectImage.sortOrder);
      return {
        id: row.id,
        slug: row.slug,
        title: row.title,
        description: row.description,
        featuredImageUrl: row.featuredImageUrl,
        images,
      };
    }),

  listAdmin: adminProcedure.handler(async () => {
    const rows = await db
      .select({
        id: project.id,
        slug: project.slug,
        title: project.title,
        published: project.published,
        updatedAt: project.updatedAt,
      })
      .from(project)
      .orderBy(desc(project.updatedAt));
    return rows;
  }),

  getById: adminProcedure
    .input(z.object({ id: z.string().min(1) }))
    .handler(async ({ input }) => {
      const [row] = await db.select().from(project).where(eq(project.id, input.id)).limit(1);
      if (!row) return null;
      const images = await db
        .select({ id: projectImage.id, url: projectImage.url, sortOrder: projectImage.sortOrder })
        .from(projectImage)
        .where(eq(projectImage.projectId, row.id))
        .orderBy(projectImage.sortOrder);
      return {
        ...row,
        images,
      };
    }),

  create: adminProcedure.input(projectCreateSchema).handler(async ({ input }) => {
    const id = crypto.randomUUID();
    await db.insert(project).values({
      id,
      slug: input.slug,
      title: input.title,
      description: input.description ?? "",
      featuredImageUrl: input.featuredImageUrl ?? null,
      published: input.published ?? false,
    });
    const urls = input.imageUrls ?? [];
    if (urls.length > 0) {
      await db.insert(projectImage).values(
        urls.map((url, i) => ({
          id: crypto.randomUUID(),
          projectId: id,
          url,
          sortOrder: i,
        })),
      );
    }
    return { id };
  }),

  update: adminProcedure.input(projectUpdateSchema).handler(async ({ input }) => {
    const { id, imageUrls, ...rest } = input;
    const payload: {
      slug?: string;
      title?: string;
      description?: string;
      featuredImageUrl?: string | null;
      published?: boolean;
    } = {};
    if (rest.slug !== undefined) payload.slug = rest.slug;
    if (rest.title !== undefined) payload.title = rest.title;
    if (rest.description !== undefined) payload.description = rest.description;
    if (rest.featuredImageUrl !== undefined) payload.featuredImageUrl = rest.featuredImageUrl;
    if (rest.published !== undefined) payload.published = rest.published;
    if (Object.keys(payload).length > 0) {
      await db.update(project).set(payload).where(eq(project.id, id));
    }
    if (imageUrls !== undefined) {
      await db.delete(projectImage).where(eq(projectImage.projectId, id));
      if (imageUrls.length > 0) {
        await db.insert(projectImage).values(
          imageUrls.map((url, i) => ({
            id: crypto.randomUUID(),
            projectId: id,
            url,
            sortOrder: i,
          })),
        );
      }
    }
    return { id };
  }),

  delete: adminProcedure
    .input(z.object({ id: z.string().min(1) }))
    .handler(async ({ input }) => {
      await db.delete(project).where(eq(project.id, input.id));
      return { ok: true };
    }),
};

export type ProjectRouter = typeof projectRouter;
export type ProjectRouterClient = RouterClient<typeof projectRouter>;
