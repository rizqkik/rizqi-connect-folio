"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import {
  CONTACT,
  EXPERIENCE,
  PROFILE_META,
  SERVICES,
  SKILLS,
  CERTIFICATIONS,
} from "@/lib/data";

export function Shell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1400px] px-6 md:px-12", className)}>
      {children}
    </div>
  );
}

export function SectionHead({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="label-eyebrow">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Shell>
        <div className="grid gap-12 md:grid-cols-[200px_minmax(0,1fr)] md:gap-20">
          <Reveal>
            <p className="text-3xl font-bold tracking-tight md:text-4xl">About</p>
          </Reveal>
          <div className="max-w-3xl">
            <Reveal delay={80}>
              <p className="text-xl leading-relaxed tracking-tight md:text-2xl md:leading-relaxed">
                I&apos;m a Telecommunication Engineer and entrepreneur working at the intersection of network infrastructure, intelligent systems, and technology business strategy.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-[0.975rem] leading-relaxed text-muted-foreground">
                From deploying BTS and fiber optic networks to building rescue robots and machine learning models — I work across the stack: RF planning, IoT pipelines, and systems that turn sensor data into decisions. As a co-founder of a tech startup, I also bring business strategy, team leadership, and client management to the table.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
                My approach combines engineering rigor with entrepreneurial thinking — building solutions that are not only technically sound but also commercially viable and scalable.
              </p>
            </Reveal>

            <dl className="mt-12 grid gap-x-12 gap-y-6 sm:grid-cols-2">
              {PROFILE_META.map((item, i) => (
                <Reveal key={item.label} delay={240 + i * 50}>
                  <div className="rule-top pt-4">
                    <dt className="label-eyebrow-muted">{item.label}</dt>
                    <dd className="mt-2 text-sm font-medium tracking-tight">
                      {item.value}
                    </dd>
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

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface/50">
      <Shell>
        <Reveal>
          <SectionHead
            index="01"
            title="What I Do"
            subtitle="Three pillars of expertise — network engineering, artificial intelligence, and IoT/robotics — backed by entrepreneurial experience."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.no} delay={100 + i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold tracking-tight text-border-strong transition-colors duration-300 group-hover:text-accent/30">
                    {service.no}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
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
          <SectionHead
            index="02"
            title="Work Experience"
            subtitle="Hands-on roles across network deployment, AI engineering, and startup operations."
          />
        </Reveal>

        <div className="mt-12 md:mt-16">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.no} delay={i * 100}>
              <div className="rule-top grid gap-6 py-10 md:grid-cols-[140px_minmax(0,1fr)] md:gap-10">
                <div className="flex md:justify-center md:pt-2">
                  <div className="grid h-16 w-16 place-items-center rounded-xl border border-border bg-surface md:h-20 md:w-20">
                    <span className="text-xs font-semibold tracking-wider text-accent">
                      LOGO
                    </span>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold tracking-tight">
                      {item.role}
                    </h3>
                    <span className="label-eyebrow-muted shrink-0">{item.year}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-accent">{item.org}</p>
                  <p className="mt-4 max-w-xl text-[0.925rem] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-surface/50">
      <Shell>
        <Reveal>
          <SectionHead
            index="03"
            title="Technical Skills"
            subtitle="Core competencies across engineering and technology domains."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={80 + i * 60}>
              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm font-bold tracking-tight text-accent">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-[12px] font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead
            index="04"
            title="Certifications"
            subtitle="Professional certifications and training programs across telecommunication, cloud, AI, and software development."
          />
        </Reveal>

        <div className="mt-12 space-y-12">
          {CERTIFICATIONS.map((group, i) => (
            <Reveal key={group.category} delay={80 + i * 60}>
              <div>
                <p className="label-eyebrow mb-6">{group.category}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((cert) => (
                    <div
                      key={cert.title}
                      className="group rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-sm font-bold tracking-tight leading-snug">
                          {cert.title}
                        </h4>
                        <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground">
                          {cert.year}
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-medium text-accent">
                        {cert.org}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {cert.description}
                      </p>
                      {cert.expires && (
                        <p className="mt-3 text-[10px] font-medium tracking-wide text-muted-foreground/70">
                          Valid until {cert.expires}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
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
            <h2 className="max-w-2xl text-[2rem] font-bold leading-[1.12] tracking-tight md:text-[3.5rem]">
              Let&apos;s build something{" "}
              <span className="text-gradient">meaningful.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground">
              Open to opportunities across network engineering, AI/ML, IoT, robotics, embedded systems, and technology business partnerships.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-tight text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-accent/25"
              >
                Email Me
                <span>→</span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="label-eyebrow-muted mt-10">{CONTACT.email}</p>
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
        <p className="text-[13px] text-muted-foreground">
          © 2026 Muhammad Rizqi Fauzan
        </p>
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
