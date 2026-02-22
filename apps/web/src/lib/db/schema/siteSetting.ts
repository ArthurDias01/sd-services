import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const siteSetting = pgTable("site_setting", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
