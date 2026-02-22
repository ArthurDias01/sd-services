import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/lib/db";
import { siteSetting } from "@/lib/db/schema/siteSetting";

import { adminProcedure, publicProcedure } from "../index";

export const settingRouter = {
  get: publicProcedure
    .input(z.object({ key: z.string().min(1) }))
    .handler(async ({ input }) => {
      const [row] = await db
        .select()
        .from(siteSetting)
        .where(eq(siteSetting.key, input.key))
        .limit(1);
      return row?.value ?? null;
    }),

  upsert: adminProcedure
    .input(z.object({ key: z.string().min(1), value: z.string() }))
    .handler(async ({ input }) => {
      await db
        .insert(siteSetting)
        .values({ key: input.key, value: input.value })
        .onConflictDoUpdate({
          target: siteSetting.key,
          set: { value: input.value },
        });
      return { ok: true };
    }),
};
