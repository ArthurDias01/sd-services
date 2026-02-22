import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const project = pgTable("project", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  featuredImageUrl: text("featured_image_url"),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const projectImage = pgTable("project_image", {
  id: text("id").primaryKey(),
  projectId: text("project_id")
    .notNull()
    .references(() => project.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
});

export const projectRelations = relations(project, ({ many }) => ({
  images: many(projectImage),
}));

export const projectImageRelations = relations(projectImage, ({ one }) => ({
  project: one(project, {
    fields: [projectImage.projectId],
    references: [project.id],
  }),
}));
