import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import {
  ACHIEVEMENTS,
  CONTACT,
  EXPERIENCE,
  LEADERSHIP,
  PROFILE_META,
  SKILLS,
} from "./data";

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1180px] px-6 md:px-10", className)}>{children}</div>;
}

export function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="label-eyebrow">{index}</span>
      <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Shell>
        <div className="rule-top grid gap-10 pt-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-16">
          <Reveal>
            <p className="label-eyebrow">About</p>
          </Reveal>
          <div className="max-w-2xl">
            <Reveal delay={80}>
              <p className="text-xl leading-relaxed tracking-tight md:text-[1.4rem] md:leading-[1.6]">
                I&apos;m a Telecommunication Engineering graduate from PENS, drawn to the point
                where communication systems meet software. Most of my work sits between the two:
                planning and testing networks, then writing the code that makes the data they carry
                useful.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-[0.975rem] leading-relaxed text-muted-foreground">
                My studies and projects moved from RF, RAN, and fiber optic fundamentals into
                embedded systems, robotics, and machine learning — building rescue robots, sensor
                pipelines, and models that turn raw measurements into decisions. I like problems
                that require both a spectrum analyzer and a terminal.
              </p>
            </Reveal>

            <dl className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {PROFILE_META.map((item, i) => (
                <Reveal key={item.label} delay={180 + i * 50}>
                  <div className="rule-top pt-3">
                    <dt className="label-eyebrow">{item.label}</dt>
                    <dd className="mt-1.5 text-sm tracking-tight">{item.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Shell>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead index="01" title="Experience" />
        </Reveal>

        <ol className="mt-12 md:mt-16">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.no} delay={i * 80} as="li">
              <div className="rule-top grid gap-4 py-8 md:grid-cols-[48px_minmax(0,1fr)_140px] md:gap-10">
                <span className="label-eyebrow md:pt-1">{item.no}</span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-sm text-accent">{item.org}</p>
                  <p className="mt-4 max-w-xl text-[0.925rem] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
                <span className="label-eyebrow md:pt-1 md:text-right">{item.year}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </Shell>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead index="03" title="Skill map" />
        </Reveal>

        <div className="mt-12 md:mt-16">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="rule-top grid gap-3 py-7 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
                <p className="label-eyebrow md:pt-1">{group.category}</p>
                <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  {group.items.map((item, j) => (
                    <li key={item} className="flex items-baseline gap-3 text-[0.975rem] tracking-tight">
                      {j > 0 && <span className="text-border-strong">·</span>}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="rule-top" />
        </div>
      </Shell>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead index="04" title="Achievements & certifications" />
        </Reveal>

        <ul className="mt-12 grid gap-x-14 md:mt-16 md:grid-cols-2">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 55} as="li">
              <div className="rule-top flex items-baseline justify-between gap-6 py-4">
                <span className="text-[0.975rem] tracking-tight">{item.title}</span>
                <span className="label-eyebrow shrink-0">{item.meta}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}

export function Leadership() {
  return (
    <section className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead index="05" title="Leadership & organisation" />
        </Reveal>

        <div className="mt-12 md:mt-16">
          {LEADERSHIP.map((item, i) => (
            <Reveal key={item.org} delay={i * 70}>
              <div className="group relative grid gap-3 border-l border-border py-7 pl-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
                <span className="absolute -left-[3.5px] top-9 h-[7px] w-[7px] bg-border-strong transition-colors duration-300 group-hover:bg-accent" />
                <div className="min-w-0">
                  <h3 className="text-base font-medium tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                </div>
                <p className="text-[0.925rem] leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <Shell>
        <div className="rule-top pt-12">
          <Reveal>
            <h2 className="max-w-2xl text-[2rem] font-medium leading-[1.12] tracking-tight md:text-[3rem]">
              Let&apos;s build something meaningful.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground">
              Open to opportunities across network engineering, RF engineering, fiber optic, IoT,
              embedded systems, robotics, and AI.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="bg-primary px-5 py-2.5 text-sm tracking-tight text-primary-foreground transition-opacity duration-200 hover:opacity-88"
              >
                Email Me
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-border-strong px-5 py-2.5 text-sm tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="border border-border-strong px-5 py-2.5 text-sm tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="label-eyebrow mt-10">{CONTACT.email}</p>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Shell className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted-foreground">© 2026 Muhammad Rizqi Fauzan</p>
        <nav className="flex gap-6 text-[13px]">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-muted-foreground transition-colors duration-200 hover:text-accent"
          >
            Email
          </a>
        </nav>
      </Shell>
    </footer>
  );
}
