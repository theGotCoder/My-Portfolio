import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
