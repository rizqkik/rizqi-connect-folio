"use client";

import Link from "next/link";
import Image from "next/image";
import { STATS } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background grid */}
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />

      {/* Decorative blue gradient */}
      <div
        className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-20 items-center">
          {/* Left: Hero Content */}
          <div>
            <p className="label-eyebrow mb-6 fade-in-up" style={{ "--anim-delay": "80ms" } as React.CSSProperties}>
              Engineer & Business Strategist
            </p>

            <h1 className="fade-in-up text-[3.5rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[4.5rem] lg:text-[5.5rem]" style={{ "--anim-delay": "120ms" } as React.CSSProperties}>
              Muhammad Rizqi{" "}
              <span className="text-gradient">Fauzan</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl fade-in-up" style={{ "--anim-delay": "200ms" } as React.CSSProperties}>
              Telecommunication Engineer bridging network infrastructure, AI/IoT systems, and technology business strategy. Building solutions that connect, automate, and scale.
            </p>

            {/* Status badge */}
            <div className="mt-8 flex items-center gap-3 fade-in-up" style={{ "--anim-delay": "280ms" } as React.CSSProperties}>
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-sm font-medium tracking-wide text-muted-foreground">
                Available for Projects
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4 fade-in-up" style={{ "--anim-delay": "360ms" } as React.CSSProperties}>
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-accent/25"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 hover:border-accent hover:text-accent"
              >
                Let&apos;s Connect
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 fade-in-up" style={{ "--anim-delay": "440ms" } as React.CSSProperties}>
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end fade-in-up" style={{ "--anim-delay": "200ms" } as React.CSSProperties}>
            <div className="relative">
              {/* Decorative blue frame */}
              <div className="absolute -inset-4 rounded-3xl bg-accent/10" />
              <div className="absolute -inset-8 rounded-3xl bg-accent/5" />

              <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border-2 border-border-strong md:h-[480px] md:w-[380px]">
                <Image
                  src="/profile.png"
                  alt="Muhammad Rizqi Fauzan"
                  width={380}
                  height={480}
                  className="h-full w-full object-cover object-[center_20%]"
                  priority
                />
              </div>

              {/* Year badge */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border-strong bg-white px-4 py-2 text-sm font-bold tracking-tight shadow-lg">
                2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
