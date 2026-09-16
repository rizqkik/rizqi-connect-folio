"use client";

import Link from "next/link";
import { Shell } from "./Sections";
import Image from "next/image";
import { STATS } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-32">
      {/* Background grid */}
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />

      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.09 75 / 0.4), transparent 70%)" }}
        aria-hidden
      />

      <Shell className="relative pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20 items-start">
          {/* Profile Photo */}
          <div className="fade-in-up flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-border-strong opacity-50" />
              <div className="absolute -inset-6 rounded-full border border-border opacity-30" />

              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-border-strong md:h-64 md:w-64 lg:h-72 lg:w-72">
                <Image
                  src="/profile.png"
                  alt="Muhammad Rizqi Fauzan"
                  width={288}
                  height={288}
                  className="h-full w-full object-cover object-[center_20%]"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border-strong bg-surface px-4 py-1.5 text-[11px] font-medium tracking-wide text-accent shadow-lg backdrop-blur-sm">
                Available for Projects
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div>
            <div
              className="fade-in-up"
              style={{ ["--anim-delay" as string]: "80ms" }}
            >
              <p className="label-eyebrow mb-4">Engineer & Business Strategist</p>
            </div>

            <h1
              className="fade-in-up text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[3.25rem] lg:text-[4rem]"
              style={{ ["--anim-delay" as string]: "120ms" }}
            >
              Muhammad Rizqi{" "}
              <span className="text-gradient">Fauzan</span>
            </h1>

            <p
              className="fade-in-up mt-5 max-w-2xl text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl"
              style={{ ["--anim-delay" as string]: "200ms" }}
            >
              Telecommunication Engineer bridging network infrastructure, AI/IoT systems, and technology business strategy. Building solutions that connect, automate, and scale.
            </p>

            <div
              className="fade-in-up mt-8 flex flex-wrap items-center gap-3"
              style={{ ["--anim-delay" as string]: "280ms" }}
            >
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-tight text-accent-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
              >
                Let&apos;s Connect
              </Link>
            </div>

            {/* Quick stats inline */}
            <div
              className="fade-in-up mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
              style={{ ["--anim-delay" as string]: "360ms" }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl font-semibold tracking-tight text-accent md:text-3xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
