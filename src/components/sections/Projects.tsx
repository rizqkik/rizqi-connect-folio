"use client";

import { Reveal } from "./Reveal";
import { SectionHead, Shell } from "./Sections";
import { PROJECTS } from "@/lib/data";

function Arrow() {
  return (
    <span className="shrink-0 text-muted-foreground transition-[transform,color] duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent">
      ↗
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead index="02" title="Selected Projects" />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground">
            Selected works across network engineering, AI, and robotics. Each project includes documentation and media — click to view the full Drive folder.
          </p>
        </Reveal>

        <ol className="mt-12 md:mt-16">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.no} delay={i * 50} as="li">
              <a
                href={project.drive}
                target="_blank"
                rel="noreferrer"
                className="group block cursor-pointer border-t border-border transition-colors duration-300 hover:border-border-strong"
              >
                <div className="grid gap-3 py-7 md:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1fr)_100px] md:items-baseline md:gap-8">
                  <span className="label-eyebrow">{project.no}</span>
                  <div className="min-w-0">
                    <h3 className="flex items-baseline gap-3 text-lg font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
                      {project.title}
                      <Arrow />
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    {project.body}
                    <span className="mt-2 block label-eyebrow">{project.tech}</span>
                  </p>
                  <span className="label-eyebrow md:text-right">{project.year}</span>
                </div>
              </a>
            </Reveal>
          ))}
          <div className="rule-top" />
        </ol>
      </Shell>
    </section>
  );
}
