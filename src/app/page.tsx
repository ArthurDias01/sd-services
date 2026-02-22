import Link from "next/link";

import { client } from "@/utils/orpc";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";

const SERVICES = [
  {
    title: "Kitchen Cabinetry",
    desc: "Full custom kitchen cabinetry crafted to your exact floor plan — handpicked hardwoods, soft-close hardware, and layouts that maximise every inch.",
    cta: "See kitchen projects",
  },
  {
    title: "Walk-in Closets",
    desc: "Bespoke closet systems built around your wardrobe and lifestyle. Cedar-lined, fully fitted, and finished to a standard you won't find in showrooms.",
    cta: "Explore closet work",
  },
  {
    title: "Bathroom Vanities",
    desc: "Custom vanities and built-in storage that turn a bathroom into a retreat — waterproof construction, solid-wood fronts, and integrated lighting options.",
    cta: "View vanity projects",
  },
  {
    title: "Built-ins & Millwork",
    desc: "Floating shelves, home offices, entertainment walls, and architectural millwork built to complement your interior — not fight it.",
    cta: "Browse built-ins",
  },
];

export default async function Home() {
  let projects: Awaited<ReturnType<typeof client.project.list>> = [];
  let heroImageSetting: string | null = null;
  let contactEmail: string | null = null;
  let contactPhone: string | null = null;
  try {
    [projects, heroImageSetting, contactEmail, contactPhone] = await Promise.all([
      client.project.list(),
      client.setting.get({ key: "hero_image_url" }),
      client.setting.get({ key: "contact_email" }),
      client.setting.get({ key: "contact_phone" }),
    ]);
  } catch {
    // API unreachable (e.g. misconfigured RPC URL or network)
  }
  const projectList = Array.isArray(projects) ? projects : [];
  const heroStr = typeof heroImageSetting === "string" ? heroImageSetting : null;
  const rawHero = heroStr ?? projectList[0]?.featuredImageUrl ?? null;
  const heroImage =
    rawHero && typeof rawHero === "string" && rawHero.startsWith("/") && process.env.R2_PUBLIC_URL
      ? `${process.env.R2_PUBLIC_URL.replace(/\/$/, "")}${rawHero}`
      : typeof rawHero === "string"
        ? rawHero
        : null;
  const email =
    typeof contactEmail === "string" && contactEmail.trim() !== ""
      ? contactEmail.trim()
      : "contact@example.com";
  const phone =
    typeof contactPhone === "string" && contactPhone.trim() !== "" ? contactPhone.trim() : null;

  return (
    <div className="bg-[var(--p-white)] text-[var(--p-dark-walnut)]">
      {/* ── Hero ── */}
      <HeroSection heroImage={heroImage} />

      {/* ── Services ── */}
      <section className="border-t border-[var(--p-tan)]/30 bg-[var(--p-cream)] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]">
            What we craft
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-3xl">
            Luxury cabinetry, tailored to you
          </h2>
          <div className="mt-4 h-px w-12 bg-[var(--p-tan)]" aria-hidden />
          <p className="mt-6 max-w-2xl text-sm text-pretty text-[var(--p-coffee-bean)]">
            Every piece we build is designed around your space, your taste, and your life — using
            premium hardwoods, precision joinery, and finishes you won't find off the shelf.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--p-deep-walnut)]">
                  {s.title}
                </h3>
                <div className="mt-2 h-px w-6 bg-[var(--p-tan)]" aria-hidden />
                <p className="mt-3 text-sm text-pretty text-[var(--p-coffee-bean)]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--p-toffee)] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2"
            >
              See our work
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-[var(--p-white)] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]">
            Portfolio
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-3xl">
            Recent projects
          </h2>
          <div className="mt-4 h-px w-12 bg-[var(--p-tan)]" aria-hidden />

          {projectList.length === 0 ? (
            <p className="mt-10 text-pretty text-[var(--p-coffee-bean)]">
              No projects to show yet.
            </p>
          ) : (
            <>
              <div className="relative mt-12 grid gap-px bg-[var(--p-tan)]/30 sm:grid-cols-2 lg:grid-cols-3">
                {projectList.slice(0, 6).map((p) => (
                  <ProjectCard
                    key={p.id}
                    id={p.id}
                    slug={p.slug}
                    title={p.title}
                    featuredImageUrl={p.featuredImageUrl}
                    description={p.description ?? undefined}
                  />
                ))}
              </div>
              {projectList.length > 6 && (
                <div className="mt-12 flex justify-center">
                  <Link
                    href="/projects"
                    className="inline-flex h-11 items-center justify-center border-2 border-[var(--p-toffee)] bg-transparent px-7 text-sm font-semibold text-[var(--p-toffee)] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2"
                  >
                    View all projects
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="border-t border-[var(--p-tan)]/30 bg-[var(--p-cream)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-xl px-6 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[var(--p-toffee)]">
            Contact
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-3xl">
            Let&rsquo;s build something beautiful
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-[var(--p-tan)]" aria-hidden />
          <p className="mt-6 text-pretty text-[var(--p-coffee-bean)]">
            Reach out for a custom quote or to discuss your project. We work with clients across the
            United States for luxury cabinetry and millwork.
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${email}?subject=Custom%20cabinetry%20quote`}
              className="inline-flex h-11 items-center justify-center border-2 border-[var(--p-deep-walnut)] bg-[var(--p-deep-walnut)] px-8 text-sm font-semibold text-[var(--p-white)] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--p-deep-walnut)] focus-visible:ring-offset-2"
            >
              Request a quote
            </a>
          </div>
          <p className="mt-4 text-xs text-[var(--p-toffee)]">
            Or email us at{" "}
            <a href={`mailto:${email}`} className="underline underline-offset-2 hover:no-underline">
              {email}
            </a>
          </p>
          {phone && (
            <p className="mt-2 text-xs text-[var(--p-toffee)]">
              Or call us at{" "}
              <a
                href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                className="underline underline-offset-2 hover:no-underline"
              >
                {phone}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--p-tan)]/30 bg-[var(--p-white)] py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <p className="text-xs text-[var(--p-toffee)]">
            &copy; {new Date().getFullYear()} Custom Cabinetry. All rights reserved.
          </p>
          <Link
            href="/login"
            className="text-xs text-[var(--p-tan)] outline-none hover:text-[var(--p-toffee)] focus-visible:underline"
          >
            Admin
          </Link>
        </div>
      </footer>
    </div>
  );
}
