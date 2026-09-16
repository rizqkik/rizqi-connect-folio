import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About, Services, Experience, Skills, Contact, Footer } from "@/components/sections/Sections";
import { Projects as ProjectsSection } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Experience />
      <ProjectsSection />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
