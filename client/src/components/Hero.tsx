import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer2 } from "lucide-react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      textRef.current.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2D241E]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-garden.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img src="/images/hero-garden-natural.png" alt="Garden Background" className="w-full h-full object-cover" />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D241E]/40 via-[#2D241E]/20 to-[#2D241E]/80" />
      </div>

      {/* Content Layer */}
      <div 
        ref={textRef}
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-white/90">
            Meisterhafte Gartenkunst
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-shadow-sm">
          Natur in <br />
          <span className="italic text-primary">
            Perfektion
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-100 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 font-light drop-shadow-md">
          Wir schaffen lebendige Rückzugsorte, die Ästhetik und Natur harmonisch vereinen. 
          Ihr Garten – ein handwerkliches Meisterwerk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 font-medium text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Beratung vereinbaren
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 font-medium text-lg px-8 h-14 rounded-full backdrop-blur-sm transition-all hover:scale-105"
          >
            Unsere Projekte
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-[10px] uppercase tracking-widest text-white/70">Entdecken</span>
        <MousePointer2 className="w-5 h-5 text-white" />
      </div>
    </section>
  );
}
