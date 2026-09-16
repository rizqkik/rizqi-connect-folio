"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT, PROJECTS } from "@/lib/data";

const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
  };
}

export default function ProjectDetail({ project }: ProjectPageProps) {
  const domainLabel = DOMAIN_LABELS[project.domain] ?? project.domain;
  const techItems = project.tech.split(" · ");
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <main className="relative">
      {/* Background grid */}
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />

      {/* Back navigation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageTransition}
        className="mx-auto max-w-[1280px] px-6 pt-28 md:px-10 md:pt-36"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto max-w-[1280px] px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12"
      >
        {/* Domain tag */}
        <motion.div variants={fadeUp}>
          <span className="label-eyebrow mb-4 inline-block">{domainLabel}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[3.25rem] lg:text-[4rem]"
        >
          {project.title.split("—")[0].trim()}
          {project.title.includes("—") && (
            <span className="text-gradient"> —{project.title.split("—")[1]}</span>
          )}
        </motion.h1>

        {/* Subtitle + year */}
        <motion.div
          variants={fadeUp}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <p className="text-lg tracking-tight text-muted-foreground md:text-xl">
            {project.subtitle}
          </p>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
          {techItems.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-tight text-accent-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
          >
            Discuss a similar project
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href={project.drive}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
          >
            View documentation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Project details section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="border-t border-border bg-card/30"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-20">
            {/* Section label */}
            <motion.div variants={fadeUp}>
              <span className="label-eyebrow mb-4 inline-block">Overview</span>
            </motion.div>

            {/* Content */}
            <div className="max-w-3xl">
              <motion.p
                variants={fadeUp}
                className="text-xl leading-relaxed tracking-tight md:text-2xl"
              >
                {project.body}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-8 sm:grid-cols-2"
              >
                <div className="rounded-2xl border border-border bg-surface/50 p-6">
                  <p className="label-eyebrow mb-2">Challenge</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.domain === "network" &&
                      "Designing and deploying reliable connectivity infrastructure that meets strict performance, redundancy, and scalability requirements under real-world constraints."}
                    {project.domain === "ai" &&
                      "Building intelligent systems that accurately process, classify, or interpret complex data — from sensor readings to human speech — and deliver actionable outputs in real time."}
                    {project.domain === "iot" &&
                      "Creating robust embedded systems that bridge hardware and software — from sensor integration and microcontroller logic to wireless communication and real-world physical interaction."}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface/50 p-6">
                  <p className="label-eyebrow mb-2">Approach</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.domain === "network" &&
                      "Applied structured network engineering methodology: requirements analysis, topology design, field validation, and technical documentation aligned with industry standards."}
                    {project.domain === "ai" &&
                      "Leveraged data-driven development: data collection, feature engineering, model training with cross-validation, and iterative evaluation against real-world test cases."}
                    {project.domain === "iot" &&
                      "Integrated hardware-software co-design: sensor calibration, embedded programming, communication protocols, and system-level testing in target deployment environments."}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <p className="label-eyebrow mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {techItems.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-4 py-2 text-sm tracking-tight text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation between projects */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
          <p className="label-eyebrow mb-8 text-center">Continue Exploring</p>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card/30 p-6 transition-all duration-300 hover:border-border-strong hover:bg-card/50"
            >
              <span className="text-xs text-muted-foreground">← Previous</span>
              <p className="text-base font-medium tracking-tight transition-transform duration-300 group-hover:-translate-x-1">
                {prevProject.title}
              </p>
              <span className="text-sm text-muted-foreground">{prevProject.year} · {prevProject.subtitle}</span>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-3 rounded-2xl border border-border bg-card/30 p-6 transition-all duration-300 hover:border-border-strong hover:bg-card/50 text-right"
            >
              <span className="text-xs text-muted-foreground">Next →</span>
              <p className="text-base font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1">
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
