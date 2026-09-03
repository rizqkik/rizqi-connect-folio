// src/app/page.tsx
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About, Experience, Skills, Achievements, Leadership, Contact, Footer } from "@/components/sections/Sections";
import { Projects as ProjectsSection } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <Skills />
      <Achievements />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
