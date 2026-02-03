import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FleetImage from "@/components/FleetImage";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A120B] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FleetImage />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
