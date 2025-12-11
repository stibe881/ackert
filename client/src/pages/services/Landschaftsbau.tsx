import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Trees, Hammer, Award, Shield } from "lucide-react";

export default function Landschaftsbau() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const features = [
    "Professioneller Garten- und Landschaftsbau",
    "Bepflanzung mit heimischen und exotischen Gewächsen",
    "Anlage von Rasenflächen und Blumenbeeten",
    "Natursteinarbeiten und Mauerbau",
    "Wegebau und Pflasterarbeiten",
    "Erdbewegungen und Geländemodellierungen"
  ];

  const benefits = [
    {
      icon: Hammer,
      title: "Handwerkskunst",
      description: "Präzise Ausführung mit hochwertigen Materialien"
    },
    {
      icon: Trees,
      title: "Vielfalt",
      description: "Umfassendes Leistungsspektrum für jeden Außenbereich"
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Langlebige Lösungen mit Garantie"
    },
    {
      icon: Shield,
      title: "Zuverlässig",
      description: "Termingerechte Fertigstellung Ihres Projekts"
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
              Landschaftsbau
            </h1>
            <p className="text-xl text-[#5D4037] max-w-3xl mx-auto font-light leading-relaxed">
              Von der Neuanlage bis zur Umgestaltung – wir schaffen beeindruckende Außenanlagen,
              die funktional und ästhetisch überzeugen. Professioneller Landschaftsbau für Privat- und Gewerbekunden.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="/images/landscaping-hero.jpg"
              alt="Landschaftsbau"
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
                Professionelle Gestaltung<br />
                <span className="italic text-primary">Ihrer Außenanlagen</span>
              </h2>
              <p className="text-[#5D4037] mb-8 leading-relaxed font-light">
                Mit modernster Technik und traditionellem Handwerk realisieren wir anspruchsvolle
                Landschaftsbauprojekte. Ob Neuanlage, Umgestaltung oder Erweiterung – wir setzen
                Ihre Visionen präzise und termingerecht um.
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
                  src="/images/landscape-work-1.jpg"
                  alt="Landschaftsbauarbeiten"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/images/project-3.jpg";
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <img
                  src="/images/landscape-work-2.jpg"
                  alt="Natursteinarbeiten"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/images/project-4.jpg";
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
              Erfahrung und Kompetenz für anspruchsvolle Landschaftsbauprojekte
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
            Ihr Landschaftsbauprojekt wartet
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Lassen Sie uns Ihre Außenanlagen neu gestalten.
            Kontaktieren Sie uns für eine kostenlose Erstberatung.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-14 text-lg"
            onClick={scrollToContact}
          >
            Jetzt Angebot anfragen
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
