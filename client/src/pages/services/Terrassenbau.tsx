import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Home, Layers, Sparkles, Target } from "lucide-react";
import { useEffect } from "react";

export default function Terrassenbau() {
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
    "Individuelle Terrassenplanung und -gestaltung",
    "Hochwertige Materialien: Holz, Stein, WPC",
    "Unterkonstruktion und Drainage-Systeme",
    "Integrierte Beleuchtung und Beschattung",
    "Sichtschutz und Geländer nach Mass",
    "Barrierefreie Ausführung möglich"
  ];

  const benefits = [
    {
      icon: Home,
      title: "Wohnraumerweiterung",
      description: "Erweitern Sie Ihren Lebensraum nach draussen"
    },
    {
      icon: Layers,
      title: "Materialvielfalt",
      description: "Grosse Auswahl an edlen Belägen und Designs"
    },
    {
      icon: Sparkles,
      title: "Einzigartig",
      description: "Massgeschneiderte Lösungen für Ihr Zuhause"
    },
    {
      icon: Target,
      title: "Präzision",
      description: "Millimetergenaue Ausführung für perfekte Ergebnisse"
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
              Terrassenbau
            </h1>
            <p className="text-xl text-[#5D4037] max-w-3xl mx-auto font-light leading-relaxed">
              Eine Terrasse ist mehr als nur eine Fläche – sie ist Ihr persönlicher Rückzugsort
              im Freien. Wir bauen hochwertige Terrassen, die Komfort, Ästhetik und Langlebigkeit vereinen.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="/images/Terrassenbau_1.jpg"
              alt="Terrassenbau"
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
                Ihre Terrasse –<br />
                <span className="italic text-primary">perfekt umgesetzt</span>
              </h2>
              <p className="text-[#5D4037] mb-8 leading-relaxed font-light">
                Ob klassisch aus Naturstein, modern mit WPC oder rustikal in Holz – wir realisieren
                Terrassen in höchster Qualität. Von der Planung über die fachgerechte Unterkonstruktion
                bis zur finalen Gestaltung begleiten wir Ihr Projekt kompetent und zuverlässig.
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
                  src="/images/Terrassenbau_2.jpg"
                  alt="Terrassenbau Detail"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/Terrassenbau_3.jpg"
                  alt="Fertige Terrasse"
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
              Erfahrung und Präzision für traumhafte Terrassen
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
            Ihre Traumterrasse wartet
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Lassen Sie uns gemeinsam Ihre perfekte Outdoor-Oase schaffen.
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-14 text-lg"
            onClick={scrollToContact}
          >
            Jetzt Projekt starten
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
