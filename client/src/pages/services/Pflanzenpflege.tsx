import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sprout, Droplets, Sun, Heart } from "lucide-react";

export default function Pflanzenpflege() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const features = [
    "Regelmäßige Kontrolle und Pflege Ihrer Pflanzen",
    "Bedarfsgerechte Düngung und Bewässerung",
    "Schnittmaßnahmen für gesundes Wachstum",
    "Unkrautbekämpfung und Bodenpflege",
    "Krankheits- und Schädlingsmanagement",
    "Saisonale Pflanzarbeiten und Umgestaltung"
  ];

  const benefits = [
    {
      icon: Sprout,
      title: "Gesunde Pflanzen",
      description: "Optimale Pflege für kräftiges und vitales Wachstum"
    },
    {
      icon: Droplets,
      title: "Wassermanagement",
      description: "Effiziente Bewässerung für gesunde Wurzeln"
    },
    {
      icon: Sun,
      title: "Standortgerecht",
      description: "Pflanzen am richtigen Ort für beste Entwicklung"
    },
    {
      icon: Heart,
      title: "Mit Liebe",
      description: "Leidenschaftliche Betreuung für Ihren Garten"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block">
              Leistungen
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[#2D241E]">
              Pflanzenpflege
            </h1>
            <p className="text-xl text-[#5D4037] max-w-3xl mx-auto font-light leading-relaxed">
              Gesunde und prächtige Pflanzen benötigen fachkundige Pflege. Wir kümmern uns
              mit Expertise und Hingabe um Ihre grünen Schätze und sorgen für einen blühenden Garten.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="/images/plant-care-hero.jpg"
              alt="Pflanzenpflege"
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/images/hero-bg.jpg";
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6 text-[#2D241E]">
                Professionelle Pflege<br />
                <span className="italic text-primary">für blühende Gärten</span>
              </h2>
              <p className="text-[#5D4037] mb-8 leading-relaxed font-light">
                Jede Pflanze hat individuelle Bedürfnisse. Unsere Gartenexperten kennen die
                Ansprüche verschiedenster Pflanzenarten und sorgen mit fachgerechter Pflege
                dafür, dass Ihr Garten das ganze Jahr über in voller Pracht erstrahlt.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[#5D4037] font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/plant-care-1.jpg"
                  alt="Pflanzenpflege Detail"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/images/project-1.jpg";
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <img
                  src="/images/plant-care-2.jpg"
                  alt="Gesunde Pflanzen"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/images/project-2.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-[#2D241E]">
              Warum Ackert Garten?
            </h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto font-light">
              Fachkundige Pflanzenpflege für einen gesunden und blühenden Garten
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-[#2D241E]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#5D4037] text-sm font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D241E] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ihr Garten verdient die beste Pflege
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Lassen Sie uns gemeinsam für gesunde und prächtige Pflanzen sorgen.
            Kontaktieren Sie uns für ein Pflegekonzept nach Maß.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-14 text-lg"
            onClick={scrollToContact}
          >
            Jetzt Pflegevertrag anfragen
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
