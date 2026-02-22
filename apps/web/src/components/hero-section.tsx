"use client";

import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

interface HeroSectionProps {
  heroImage: string | null;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const, delay },
  });

  const fadeIn = (delay = 0) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Text column */}
        <div className="flex flex-col justify-center px-6 py-24 lg:py-32 lg:pr-16">
          <motion.span
            className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]"
            aria-hidden
            {...fadeUp(0)}
          >
            Brazilian craftsmanship
          </motion.span>

          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-5xl lg:text-6xl"
            {...fadeUp(0.08)}
          >
            High-end custom cabinetry
          </motion.h1>

          <motion.div
            className="mt-6 h-px w-16 bg-[var(--p-tan)]"
            aria-hidden
            {...fadeUp(0.14)}
          />

          <motion.p
            className="mt-6 max-w-md text-base text-pretty text-[var(--p-coffee-bean)] md:text-lg"
            {...fadeUp(0.18)}
          >
            Luxury cabinetry and millwork for kitchens, closets, and every
            detail of your space — designed and built in the US with Brazilian
            woodworking heritage.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            {...fadeUp(0.24)}
          >
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-7 text-sm font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2"
            >
              View our work
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-11 items-center justify-center border-2 border-[var(--p-coffee-bean)] bg-transparent px-7 text-sm font-semibold text-[var(--p-coffee-bean)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-coffee-bean)] focus-visible:ring-offset-2"
            >
              Request a custom quote
            </Link>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          className="relative hidden min-h-[480px] lg:block"
          {...fadeIn(0.3)}
        >
          {heroImage ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-[var(--p-deep-walnut)]/10" aria-hidden />
            </>
          ) : (
            <div className="absolute inset-0 bg-[var(--p-warm-white)]" aria-hidden />
          )}
        </motion.div>
      </div>

      {/* Mobile hero image */}
      {heroImage && (
        <motion.div
          className="aspect-video overflow-hidden lg:hidden"
          {...fadeIn(0.2)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="" className="size-full object-cover" />
        </motion.div>
      )}
    </section>
  );
}
