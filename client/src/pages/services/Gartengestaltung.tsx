import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Leaf, Palette, Ruler, Lightbulb } from "lucide-react";
import { useEffect } from "react";

export default function Gartengestaltung() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const features = [
    "Individuelle Gartenplanung nach Ihren Wünschen",
    "Berücksichtigung von Standort und Bodenverhältnissen",
    "Nachhaltige und pflegeleichte Pflanzkonzepte",
    "Harmonische Integration von Wegen und Plätzen",
    "Professionelle Umsetzung durch erfahrene Gärtner"
  ];

  const benefits = [
    {
      icon: Palette,
      title: "Kreative Konzepte",
      description: "Einzigartige Designs, die Ihre Persönlichkeit widerspiegeln"
    },
    {
      icon: Ruler,
      title: "Präzise Planung",
      description: "Detaillierte Vermessung und perfekte Umsetzung"
    },
    {
      icon: Leaf,
      title: "Nachhaltig",
      description: "Umweltfreundliche Materialien und heimische Pflanzen"
    },
    {
      icon: Lightbulb,
      title: "Beratung",
      description: "Kompetente Unterstützung von der Idee bis zur Fertigstellung"
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
              Gartengestaltung
            </h1>
            <p className="text-xl text-[#5D4037] max-w-3xl mx-auto font-light leading-relaxed">
              Ihr Garten ist ein Ort der Erholung und Inspiration. Wir gestalten individuelle
              Gartenlandschaften, die perfekt zu Ihrem Lebensstil passen und Ihre Träume verwirklichen.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="/images/Gartengestaltung_3.jpeg"
              alt="Gartengestaltung"
              className="w-full h-[400px] object-cover"
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
                Ihr Traumgarten –<br />
                <span className="italic text-primary">professionell geplant</span>
              </h2>
              <p className="text-[#5D4037] mb-8 leading-relaxed font-light">
                Von der ersten Skizze bis zum fertigen Garten begleiten wir Sie durch den
                gesamten Gestaltungsprozess. Unsere erfahrenen Gartenarchitekten entwickeln
                individuelle Konzepte, die Ästhetik, Funktionalität und Nachhaltigkeit vereinen.
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
                  src="/images/Gartengestaltung_2.jpeg"
                  alt="Gartenplanung"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/Gartengestaltung_1.jpeg"
                  alt="Gartendesign"
                  className="w-full h-64 object-cover"
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
              Warum Ackert Garten GmbH?
            </h2>
            <p className="text-[#5D4037] max-w-2xl mx-auto font-light">
              Profitieren Sie von unserer Erfahrung und Leidenschaft für aussergewöhnliche Gartengestaltung
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
            Bereit für Ihren Traumgarten?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Lassen Sie uns gemeinsam Ihren perfekten Garten gestalten.
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-14 text-lg"
            onClick={scrollToContact}
          >
            Jetzt Beratung anfragen
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
