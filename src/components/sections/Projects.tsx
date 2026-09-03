"use client";

import { AerisArchitecture } from "./Diagrams";
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

        {/* Featured */}
        <Reveal delay={80}>
          <article className="group mt-12 md:mt-16">
            <div className="rule-top grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="label-eyebrow">01</span>
                  <span className="label-eyebrow">Featured · 2026</span>
                </div>
                <h3 className="mt-5 flex items-baseline gap-4 text-[2rem] font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-[2.5rem]">
                  AERIS
                  <Arrow />
                </h3>
                <p className="mt-2 text-base tracking-tight text-accent">
                  Rescue Robot System for Hazardous Gas Detection
                </p>
                <p className="mt-6 max-w-lg text-[0.975rem] leading-relaxed text-muted-foreground">
                  A fullstack mobile rescue robot designed for hazardous gas detection in
                  post-disaster environments, combining gas sensors, microcontroller-based control,
                  wireless communication, and machine learning.
                </p>
                <ul className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  {["Random Forest", "ESP32", "Raspberry Pi", "Python", "IoT", "Robotics"].map(
                    (tag, i) => (
                      <li key={tag} className="flex items-baseline gap-3 label-eyebrow">
                        {i > 0 && <span className="text-border-strong">·</span>}
                        <span>{tag}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="border border-border bg-surface p-6 transition-colors duration-300 group-hover:border-border-strong md:p-9">
                <AerisArchitecture />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Other projects */}
        <ol className="mt-20 md:mt-24">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.no} delay={i * 60} as="li">
              <article className="group cursor-default border-t border-border transition-colors duration-300 hover:border-border-strong">
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
              </article>
            </Reveal>
          ))}
          <div className="rule-top" />
        </ol>
      </Shell>
    </section>
  );
}
