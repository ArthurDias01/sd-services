"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { proxyImageUrlIfNeeded } from "@/lib/image-url";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  slug: string;
  title: string;
  featuredImageUrl: string | null | undefined;
  description?: string;
}

export function ProjectCard({ slug, title, featuredImageUrl, description }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  const excerpt = description
    ? description.replace(/[#*`_[\]]/g, "").slice(0, 120).trimEnd() +
      (description.length > 120 ? "…" : "")
    : null;

  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "group relative block bg-[var(--p-white)] outline-none",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--p-deep-walnut)]",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Image */}
      <div className="aspect-4/3 overflow-hidden">
        {featuredImageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={proxyImageUrlIfNeeded(featuredImageUrl)}
              alt=""
              className="size-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* Description overlay */}
            {excerpt && (
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    className="absolute inset-x-0 bottom-0 top-auto bg-[var(--p-deep-walnut)]/90 px-5 py-4"
                    initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <p className="text-xs leading-relaxed text-pretty text-[var(--p-white)]/90">
                      {excerpt}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </>
        ) : (
          <div className="aspect-4/3 bg-[var(--p-warm-white)]" aria-hidden />
        )}
      </div>

      {/* Title */}
      <div className="px-5 py-4">
        <h3 className="text-sm font-semibold text-balance text-[var(--p-deep-walnut)] group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  );
}
