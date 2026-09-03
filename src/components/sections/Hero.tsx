"use client";

import { Shell } from "./Sections";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
      <Shell className="relative pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 items-start">
          {/* Profile Photo */}
          <div className="fade-in-up flex justify-center lg:justify-start">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-surface border-2 border-border-strong flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-muted-foreground">
                <circle cx="50" cy="35" r="18" fill="currentColor" opacity="0.3" />
                <ellipse cx="50" cy="75" rx="30" ry="22" fill="currentColor" opacity="0.3" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Hero Content */}
          <div>
            <h1
              className="fade-in-up text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[3rem] lg:text-[3.5rem]"
              style={{ ["--anim-delay" as string]: "80ms" }}
            >
              Muhammad Rizqi Fauzan
            </h1>

            <p
              className="fade-in-up mt-4 text-xl md:text-2xl tracking-tight text-muted-foreground font-medium"
              style={{ ["--anim-delay" as string]: "160ms" }}
            >
              Telecommunication Engineer · Network · IoT · Robotics · AI
            </p>

            <p
              className="fade-in-up mt-6 max-w-2xl text-base md:text-[1.05rem] leading-relaxed text-muted-foreground"
              style={{ ["--anim-delay" as string]: "240ms" }}
            >
              Telecommunication engineer with hands-on experience across network infrastructure, RF/RAN, fiber optic deployment, IoT systems, robotics, and AI/ML. Currently open to opportunities in network engineering, embedded systems, and applied AI.
            </p>

            <div
              className="fade-in-up mt-8 flex items-center gap-2.5"
              style={{ ["--anim-delay" as string]: "320ms" }}
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="label-eyebrow">Currently open to opportunities</span>
            </div>

            <div
              className="fade-in-up mt-10 flex flex-wrap items-center gap-3"
              style={{ ["--anim-delay" as string]: "400ms" }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-2.5 bg-primary px-5 py-2.5 text-sm tracking-tight text-primary-foreground transition-opacity duration-200 hover:opacity-88"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="border border-border-strong px-5 py-2.5 text-sm tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
