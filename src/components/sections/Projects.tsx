"use client";

import { Reveal } from "./Reveal";
import { SectionHead, Shell } from "./Sections";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";

const DOMAIN_LABELS: Record<string, { label: string; description: string }> = {
  network: { label: "Network", description: "Infrastructure & connectivity" },
  ai: { label: "AI", description: "Intelligent systems" },
  iot: { label: "IoT & Robotics", description: "Embedded & physical computing" },
};

export function Projects() {
  const domains = ["network", "ai", "iot"];

  return (
    <section id="projects" className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead
            index="04"
            title="Selected Projects"
            subtitle="A curated selection across network engineering, AI, and IoT/robotics. Click to explore each project in detail."
          />
        </Reveal>

        <div className="mt-16 space-y-20">
          {domains.map((domain) => {
            const projects = PROJECTS.filter((p) => p.domain === domain);
            return (
              <div key={domain}>
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {DOMAIN_LABELS[domain].label}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {DOMAIN_LABELS[domain].description}
                    </span>
                  </div>
                </Reveal>
                <div className="mt-8">
                  {projects.map((project, i) => (
                    <Reveal key={project.slug} delay={i * 50}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group block cursor-pointer rounded-xl border border-transparent transition-all duration-300 hover:border-border hover:bg-card/40 hover:px-4 md:hover:px-6"
                      >
                        <div className="grid gap-4 py-6 md:grid-cols-[48px_minmax(0,1.2fr)_minmax(0,1fr)_80px] md:items-baseline md:gap-8">
                          <span className="label-eyebrow-muted">{project.no}</span>
                          <div className="min-w-0">
                            <h4 className="flex items-baseline gap-3 text-base font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
                              {project.title}
                              <span className="shrink-0 text-muted-foreground transition-[transform,color] duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent">
                                ↗
                              </span>
                            </h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {project.subtitle}
                            </p>
                          </div>
                          <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                            {project.body}
                            <span className="mt-2 block label-eyebrow-muted">
                              {project.tech}
                            </span>
                          </p>
                          <span className="label-eyebrow-muted md:text-right">
                            {project.year}
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
