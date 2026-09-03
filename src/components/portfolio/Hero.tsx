import { SystemChain } from "./Diagrams";
import { Shell } from "./Sections";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
      <Shell className="relative pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p
              className="fade-in-up label-eyebrow"
              style={{ ["--anim-delay" as string]: "80ms" }}
            >
              Telecommunication Engineer · Network · IoT · Robotics · AI
            </p>

            <h1
              className="fade-in-up mt-7 max-w-[19ch] text-[2.35rem] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[3rem] lg:text-[3.5rem]"
              style={{ ["--anim-delay" as string]: "160ms" }}
            >
              Engineering systems that connect the physical and digital world.
            </h1>

            <p
              className="fade-in-up mt-8 max-w-xl text-[1rem] leading-relaxed text-muted-foreground"
              style={{ ["--anim-delay" as string]: "240ms" }}
            >
              Fresh graduate in Telecommunication Engineering with hands-on experience across
              network infrastructure, RF/RAN, fiber optic, IoT, robotics, and artificial
              intelligence.
            </p>

            <div
              className="fade-in-up mt-10 flex flex-wrap items-center gap-3"
              style={{ ["--anim-delay" as string]: "320ms" }}
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

            <div
              className="fade-in-up mt-12 flex items-center gap-2.5"
              style={{ ["--anim-delay" as string]: "400ms" }}
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="label-eyebrow">Currently open to opportunities</span>
            </div>
          </div>

          <div
            className="fade-in-up max-w-sm self-end lg:justify-self-end"
            style={{ ["--anim-delay" as string]: "280ms" }}
          >
            <SystemChain />
          </div>
        </div>
      </Shell>
    </section>
  );
}
