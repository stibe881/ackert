import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projekte", href: "#projects" },
    { name: "Über uns", href: "/about" },
    { name: "Karriere", href: "/career" },
    { name: "Kontakt", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-4 text-[#2D241E]"
          : "bg-transparent py-8 text-white"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - Full visibility, no text, larger size */}
        <Link href="/">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={cn(
              "h-16 w-auto transition-all duration-300", // Increased height, auto width
              isScrolled ? "scale-90" : "scale-100"
            )}>
              <img
                src="/images/logo.png"
                alt="Ackert Garten Logo"
                className="h-full w-auto object-contain" // Maintain aspect ratio, no cropping
              />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            if (link.href.startsWith("#")) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors relative group py-2",
                    location === "/"
                      ? (isScrolled ? "text-[#5D4037] hover:text-primary" : "text-white/90 hover:text-white")
                      : "text-[#5D4037] hover:text-primary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                    location === "/" ? (isScrolled ? "bg-primary" : "bg-white") : "bg-primary"
                  )} />
                </a>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group py-2",
                    location === "/"
                      ? (isScrolled ? "text-[#5D4037] hover:text-primary" : "text-white/90 hover:text-white")
                      : "text-[#5D4037] hover:text-primary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                    location === "/" ? (isScrolled ? "bg-primary" : "bg-white") : "bg-primary"
                  )} />
                </Link>
              );
            }
          })}
          <Button 
            variant="default" 
            className={cn(
              "font-bold rounded-full px-6 transition-all hover:scale-105",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-white text-[#2D241E] hover:bg-white/90"
            )}
            onClick={() => scrollToSection("#contact")}
          >
            Angebot anfragen
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-[#2D241E]" : "text-white"} /> : <Menu className={isScrolled ? "text-[#2D241E]" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-[#5D4037]/10 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5 shadow-xl">
          {navLinks.map((link) => {
            if (link.href.startsWith("#")) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-xl font-display font-bold text-[#2D241E] hover:text-primary"
                >
                  {link.name}
                </a>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-bold text-[#2D241E] hover:text-primary"
                >
                  {link.name}
                </Link>
              );
            }
          })}
          <Button 
            className="w-full bg-primary text-white font-bold rounded-full h-12"
            onClick={() => scrollToSection("#contact")}
          >
            Angebot anfragen
          </Button>
        </div>
      )}
    </nav>
  );
}
