"use client";

import { Nav } from "@/components/sections/Nav";
import { Shell, SectionHead } from "@/components/sections/Sections";
import { Reveal } from "@/components/sections/Reveal";
import { CONTACT, PROJECTS } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Grouped projects for resume page                                   */
/* ------------------------------------------------------------------ */

const NETWORK = {
  skills: [
    "IP Networking",
    "TCP/IP",
    "SD-WAN",
    "Network Infrastructure",
    "RF Planning",
    "Fiber Optic / GPON",
    "Drive Test",
    "Atoll",
  ],
  experience: [
    {
      no: "01",
      role: "Datacom Activation Junior Engineer Intern",
      org: "PT. PLN Indonesia Comnets Plus",
      year: "2025",
      body: "Supported SD-WAN backup migration for railway operations through network analysis, field surveys, connectivity testing, and technical documentation.",
    },
    {
      no: "02",
      role: "BTS & Microwave Installer / OJT",
      org: "TechBros — PT. Teknologi Digital Nusantara",
      year: "2026",
      body: "Worked on BTS infrastructure installation and upgrades including RRU deployment, antenna systems, GPS antenna integration, feeder and RET cables, power systems, and acceptance testing.",
    },
  ],
  projects: PROJECTS.filter((p) => p.domain === "network"),
};

const AI = {
  skills: [
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Data Science",
    "Python",
    "Random Forest",
    "Scikit-learn",
    "NLP",
    "Speech Recognition",
  ],
  experience: [
    {
      no: "01",
      role: "Operasional & AI Engineer",
      org: "NechCode Startup Agency",
      year: "2026",
      body: "Co-founded and operated a digital technology startup delivering web, mobile, AI chatbot, and automation solutions while coordinating projects, teams, budgeting, and machine learning deployment.",
    },
  ],
  projects: PROJECTS.filter((p) => p.domain === "ai"),
};

const ROBOT = {
  skills: [
    "Embedded Systems",
    "Microcontrollers",
    "ESP32",
    "Raspberry Pi",
    "C/C++",
    "Sensors",
    "IoT",
    "Wireless Communication",
    "Control Logic",
  ],
  experience: [
    {
      no: "01",
      role: "Researcher",
      org: "Research Group Laboratory — Mobile Network & Pervasive Computing",
      year: "2025",
      body: "Contributed to mobile network and pervasive computing research within the campus laboratory.",
    },
  ],
  projects: PROJECTS.filter((p) => p.domain === "robot"),
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SkillPills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-baseline gap-3 text-[0.925rem] tracking-tight"
        >
          {i > 0 && <span className="text-border-strong">·</span>}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExperienceRow({
  item,
  delay,
}: {
  item: (typeof NETWORK.experience)[number];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="rule-top grid gap-6 py-8 md:grid-cols-[140px_minmax(0,1fr)] md:gap-10">
        <div className="flex md:justify-center md:pt-2">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded bg-surface border border-border flex items-center justify-center">
            <span className="text-xs text-muted-foreground text-center px-1">
              LOGO
            </span>
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-medium tracking-tight">{item.role}</h3>
            <span className="label-eyebrow shrink-0">{item.year}</span>
          </div>
          <p className="mt-1 text-sm text-accent">{item.org}</p>
          <p className="mt-4 max-w-xl text-[0.925rem] leading-relaxed text-muted-foreground">
            {item.body}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectRow({
  item,
  delay,
}: {
  item: (typeof NETWORK.projects)[number];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.drive}
        target="_blank"
        rel="noreferrer"
        className="group block cursor-pointer border-t border-border transition-colors duration-300 hover:border-border-strong"
      >
        <div className="grid gap-3 py-7 md:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1fr)_100px] md:items-baseline md:gap-8">
          <span className="label-eyebrow">{item.no}</span>
          <div className="min-w-0">
            <h3 className="flex items-baseline gap-3 text-lg font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
              {item.title}
              <span className="text-muted-foreground transition-[transform,color] duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent">
                ↗
              </span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
          </div>
          <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
            {item.body}
            <span className="mt-2 block label-eyebrow">{item.tech}</span>
          </p>
          <span className="label-eyebrow md:text-right">{item.year}</span>
        </div>
      </a>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Domain section                                                     */
/* ------------------------------------------------------------------ */

function DomainSection({
  id,
  index,
  title,
  subtitle,
  intro,
  data,
}: {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  intro: string;
  data: typeof NETWORK;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHead index={index} title={title} />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </Reveal>

        {/* Skills */}
        <div className="mt-12 md:mt-16">
          <Reveal delay={100}>
            <div className="rule-top grid gap-3 py-7 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
              <p className="label-eyebrow md:pt-1">{subtitle}</p>
              <SkillPills items={data.skills} />
            </div>
          </Reveal>
        </div>

        {/* Experience */}
        <div>
          <Reveal delay={140}>
            <div className="rule-top pt-10">
              <p className="label-eyebrow">Experience</p>
            </div>
          </Reveal>
          {data.experience.map((item, i) => (
            <ExperienceRow key={item.no} item={item} delay={180 + i * 80} />
          ))}
        </div>

        {/* Projects */}
        <div className="mt-12 md:mt-16">
          <Reveal delay={220}>
            <div className="rule-top pt-10">
              <p className="label-eyebrow">Key Projects</p>
            </div>
          </Reveal>
          <div>
            {data.projects.map((project, i) => (
              <ProjectRow
                key={project.no}
                item={project}
                delay={260 + i * 60}
              />
            ))}
            <div className="rule-top" />
          </div>
        </div>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ResumePage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
        <Shell className="relative pb-16 pt-16 md:pb-20 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-16">
            <Reveal>
              <p className="label-eyebrow">Resume</p>
            </Reveal>
            <div className="max-w-2xl">
              <Reveal delay={80}>
                <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[3rem] lg:text-[3.5rem]">
                  Capability by Domain
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-xl leading-relaxed tracking-tight md:text-[1.4rem] md:leading-[1.6]">
                  Network engineering, artificial intelligence, and robotics —
                  three domains I work across as a Telecommunication Engineer.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-[0.975rem] leading-relaxed text-muted-foreground">
                  This page maps my skills, experience, and projects into three
                  focus areas. Each section is self-contained so you can jump
                  straight to what matters for your context.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#network"
                    className="bg-primary px-5 py-2.5 text-sm tracking-tight text-primary-foreground transition-opacity duration-200 hover:opacity-88"
                  >
                    Network
                  </a>
                  <a
                    href="#ai"
                    className="border border-border-strong px-5 py-2.5 text-sm tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    AI
                  </a>
                  <a
                    href="#robot"
                    className="border border-border-strong px-5 py-2.5 text-sm tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    Robot
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Shell>
      </section>

      <div className="border-t border-border" />

      <DomainSection
        id="network"
        index="01"
        title="Network Engineering"
        subtitle="Technical Skills"
        intro="Hands-on with SD-WAN migration, BTS infrastructure, fiber optic planning, and drive test campaigns. I work across RAN, IP networking, and passive access networks."
        data={NETWORK}
      />

      <div className="border-t border-border" />

      <DomainSection
        id="ai"
        index="02"
        title="Artificial Intelligence"
        subtitle="Technical Skills"
        intro="Building classification models, voice assistants, and edge inference pipelines. From data pipelines to deployed ML systems on resource-constrained hardware."
        data={AI}
      />

      <div className="border-t border-border" />

      <DomainSection
        id="robot"
        index="03"
        title="Robotics & Embedded"
        subtitle="Technical Skills"
        intro="Microcontroller-based robots, sensor integration, wireless telemetry, and reactive control logic. I build systems that sense, decide, and act in the physical world."
        data={ROBOT}
      />

      <div className="border-t border-border" />

      {/* Closing CTA */}
      <section className="py-24 md:py-36">
        <Shell>
          <div className="rule-top pt-12">
            <Reveal>
              <h2 className="max-w-2xl text-[2rem] font-medium leading-[1.12] tracking-tight md:text-[3rem]">
                Let&apos;s build something meaningful.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground">
                Open to opportunities across network engineering, RF, fiber
                optic, IoT, robotics, embedded systems, and AI.
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

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <Shell className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted-foreground">
            &copy; 2026 Muhammad Rizqi Fauzan
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
    </main>
  );
}
