"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Layers, Target } from "lucide-react";
import Link from "next/link";
import { PROJECTS, CONTACT } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const DOMAIN_LABELS: Record<string, string> = {
  network: "Network Engineering",
  ai: "Artificial Intelligence",
  iot: "IoT & Robotics",
};

interface ProjectPageProps {
  project: {
    slug: string;
    no: string;
    title: string;
    subtitle: string;
    body: string;
    tech: string;
    year: string;
    domain: string;
    drive: string;
    client?: string;
    role?: string;
    timeline?: string;
    team?: string[];
    deliverables?: string[];
    metrics?: { label: string; value: string }[];
    approach?: string[];
  };
}

export default function ProjectDetail({ project }: ProjectPageProps) {
  const domainLabel = DOMAIN_LABELS[project.domain] ?? project.domain;
  const techItems = project.tech.split(" · ");
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const client = project.client || "Independent Project";
  const role = project.role || domainLabel;
  const timeline = project.timeline || project.year;
  const team = project.team || ["Solo Project"];
  const deliverables = project.deliverables || techItems;
  const metrics = project.metrics || [];
  const approach = project.approach || getDefaultApproach(project.domain);

  return (
    <main className="relative">
      {/* Background grid */}
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      {/* Back navigation */}
      <div className="mx-auto max-w-[1400px] px-6 pt-28 md:px-12 md:pt-36">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Hero */}
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-8 md:px-12 md:pb-20 md:pt-12">
        {/* Domain + Year */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="label-eyebrow">{domainLabel}</span>
          <span className="text-sm text-muted-foreground">{timeline}</span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[3.5rem] lg:text-[4.5rem]">
          {project.title.split("—")[0].trim()}
          {project.title.includes("—") && (
            <span className="text-gradient"> —{project.title.split("—")[1]}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-3xl text-xl tracking-tight text-muted-foreground md:text-2xl">
          {project.subtitle}. {project.body}
        </p>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {techItems.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-strong bg-background px-4 py-1.5 text-xs font-medium tracking-wide text-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={project.drive}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-tight text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-accent/25"
          >
            View Documentation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Discuss Similar Project
          </Link>
        </div>
      </div>

      {/* Project Info Strip */}
      <div className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12 md:py-14">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background">
                <Target className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">Role</p>
                <p className="mt-1 text-sm font-semibold">{role}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background">
                <Calendar className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">Timeline</p>
                <p className="mt-1 text-sm font-semibold">{timeline}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background">
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">Team</p>
                <p className="mt-1 text-sm font-semibold">{team.join(", ")}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background">
                <Layers className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">Deliverables</p>
                <p className="mt-1 text-sm font-semibold">{deliverables.length} items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-20">
          <div>
            <span className="label-eyebrow">01</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Problem</h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground md:text-2xl">
              {getProblem(project)}
            </p>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="bg-surface/50 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-20">
            <div>
              <span className="label-eyebrow">02</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Approach</h2>
            </div>
            <div className="max-w-3xl">
              <ul className="space-y-4">
                {approach.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[0.975rem] leading-relaxed text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-20">
          <div>
            <span className="label-eyebrow">03</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Deliverables</h2>
          </div>
          <div className="max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {metrics.length > 0 && (
        <div className="bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
            <div className="grid gap-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-20">
              <div>
                <span className="label-eyebrow">04</span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Results</h2>
              </div>
              <div className="max-w-3xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-border bg-background p-6 text-center"
                    >
                      <p className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24 text-center">
          <h2 className="text-[2rem] font-bold leading-[1.1] tracking-tight md:text-[2.5rem]">
            Interested in a similar project?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Let&apos;s discuss how we can build something great together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-accent/25"
            >
              Get in Touch
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation between projects */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
          <p className="label-eyebrow mb-8 text-center">Continue Exploring</p>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-border-strong hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">← Previous</span>
              <p className="text-base font-semibold tracking-tight transition-transform duration-300 group-hover:-translate-x-1">
                {prevProject.title}
              </p>
              <span className="text-sm text-muted-foreground">{prevProject.year} · {prevProject.subtitle}</span>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-3 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-border-strong hover:shadow-md text-right"
            >
              <span className="text-xs text-muted-foreground">Next →</span>
              <p className="text-base font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {nextProject.title}
              </p>
              <span className="text-sm text-muted-foreground">{nextProject.year} · {nextProject.subtitle}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function getProblem(project: ProjectPageProps["project"]): string {
  const domainProblems: Record<string, string> = {
    network:
      "Existing network infrastructure faced reliability and scalability issues, requiring a structured approach to design, validate, and deploy robust connectivity solutions under real-world operational constraints.",
    ai:
      "Raw data needed to be transformed into actionable intelligence through accurate processing, classification, and interpretation — delivering real-time outputs that could inform critical decisions.",
    iot:
      "Physical systems needed to sense, process, and act autonomously — bridging hardware and software through sensor integration, embedded programming, and wireless communication.",
  };
  return domainProblems[project.domain] || project.body;
}

function getDefaultApproach(domain: string): string[] {
  const approaches: Record<string, string[]> = {
    network: [
      "Conducted requirements analysis and field survey to understand existing infrastructure constraints",
      "Designed topology with redundancy, performance, and scalability as primary design goals",
      "Performed validation through simulation and field testing against industry standards",
      "Delivered comprehensive technical documentation and as-built configurations",
    ],
    ai: [
      "Collected and preprocessed domain-specific data with quality validation and feature engineering",
      "Trained multiple models using cross-validation with hyperparameter optimization",
      "Evaluated performance against real-world test cases with iterative refinement",
      "Deployed model with monitoring pipeline for continuous performance tracking",
    ],
    iot: [
      "Calibrated sensors and developed embedded firmware for reliable data acquisition",
      "Implemented communication protocols for wireless telemetry and remote monitoring",
      "Integrated hardware-software stack with reactive control logic for autonomous operation",
      "Conducted system-level testing in target deployment environments",
    ],
  };
  return approaches[domain] || ["Research & Analysis", "Design & Development", "Testing & Validation", "Deployment & Documentation"];
}
