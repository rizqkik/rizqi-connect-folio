import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { Projects } from "@/components/portfolio/Projects";
import {
  About,
  Achievements,
  Contact,
  Experience,
  Footer,
  Leadership,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Muhammad Rizqi Fauzan — Telecommunication Engineer";
const description =
  "Portfolio of Muhammad Rizqi Fauzan, Telecommunication Engineering graduate from PENS working across network infrastructure, RF/RAN, fiber optic, IoT, robotics, and AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
