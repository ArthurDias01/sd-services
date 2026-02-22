import { ProjectForm } from "../project-form";

export default function NewProjectPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-balance text-[var(--p-deep-walnut)]">New project</h1>
        <div className="mt-2 h-px w-10 bg-[var(--p-tan)]" aria-hidden />
      </div>
      <ProjectForm mode="create" />
    </div>
  );
}
