import { PROJECTS } from "@/lib/data";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return null;
  }

  return <ProjectDetail project={project} />;
}
