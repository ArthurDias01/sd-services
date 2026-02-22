import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { client } from "@/utils/orpc";

import { ProjectCarousel } from "@/components/project-carousel";

import { ProjectMarkdown } from "./project-markdown";
import { ProjectNav } from "./project-nav";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let project: Awaited<ReturnType<typeof client.project.getBySlug>> = null;
  try {
    project = await client.project.getBySlug({ slug });
  } catch {
    return { title: "Not found" };
  }
  if (!project) return { title: "Not found" };
  const desc = project.description.slice(0, 160).replace(/\s+/g, " ").trim();
  return {
    title: project.title,
    description: desc ? desc + (project.description.length > 160 ? "…" : "") : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  let project: Awaited<ReturnType<typeof client.project.getBySlug>> = null;
  let list: Awaited<ReturnType<typeof client.project.list>> = [];
  try {
    [project, list] = await Promise.all([
      client.project.getBySlug({ slug }),
      client.project.list(),
    ]);
  } catch {
    notFound();
  }

  if (!project) notFound();

  const currentIndex = list.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? list[currentIndex - 1]! : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < list.length - 1 ? list[currentIndex + 1]! : null;

  const imageUrls: string[] = [];
  if (project.featuredImageUrl) imageUrls.push(project.featuredImageUrl);
  for (const img of project.images ?? []) {
    if (img.url && !imageUrls.includes(img.url)) imageUrls.push(img.url);
  }

  return (
    <div className="min-h-dvh bg-[var(--p-white)] text-[var(--p-dark-walnut)]">
      <article className="container mx-auto max-w-4xl px-6 py-12">
        <ProjectCarousel urls={imageUrls} className="mb-8 aspect-4/3 w-full" />

        <header className="mb-8">
          <div className="mb-4 h-px w-12 bg-[var(--p-toffee)]" aria-hidden />
          <h1 className="text-3xl font-bold tracking-tight text-balance text-[var(--p-deep-walnut)] md:text-4xl">
            {project.title}
          </h1>
        </header>

        <div className="prose prose-neutral max-w-none text-pretty text-[var(--p-coffee-bean)] prose-headings:text-[var(--p-deep-walnut)] prose-a:text-[var(--p-toffee)]">
          <ProjectMarkdown content={project.description} />
        </div>

        <ProjectNav
          prev={prevProject ? { slug: prevProject.slug, title: prevProject.title } : null}
          next={nextProject ? { slug: nextProject.slug, title: nextProject.title } : null}
        />

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--p-toffee)] outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[var(--p-toffee)] focus-visible:ring-offset-2"
          >
            <span className="h-px w-4 bg-[var(--p-toffee)]" aria-hidden />
            All projects
          </Link>
        </div>
      </article>
    </div>
  );
}
