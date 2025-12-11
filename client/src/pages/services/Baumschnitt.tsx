import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, TreeDeciduous, Scissors, Eye, Gem } from "lucide-react";

export default function Baumschnitt() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const features = [
    "Fachgerechter Erhaltungs- und Pflegeschnitt",
    "Kronenpflege und Kronenaufbau",
    "Entfernung von Totholz und kranken Ästen",
    "Auslichtungsschnitt für mehr Licht und Luft",
    "Verjüngungsschnitt für alte Bäume",
    "Obstbaumschnitt für reiche Ernte"
  ];

  const benefits = [
    {
      icon: TreeDeciduous,
      title: "Gesunde Bäume",
      description: "Professioneller Schnitt für vitale und starke Bäume"
    },
    {
      icon: Scissors,
      title: "Fachgerecht",
      description: "Präzise Schnittführung nach neuesten Standards"
    },
    {
      icon: Eye,
      title: "Formschön",
      description: "Ästhetischer Schnitt für harmonische Kronenformen"
    },
    {
      icon: Gem,
      title: "Wertvoll",
      description: "Werterhalt und Wertsteigerung Ihrer Bäume"
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
              Baumschnitt
            </h1>
            <p className="text-xl text-[#5D4037] max-w-3xl mx-auto font-light leading-relaxed">
              Professioneller Baumschnitt ist Kunst und Wissenschaft zugleich. Mit fachgerechtem
              Schnitt fördern wir die Gesundheit, Sicherheit und Schönheit Ihrer Bäume.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="/images/tree-pruning-hero.jpg"
              alt="Baumschnitt"
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
                Meisterlicher Schnitt<br />
                <span className="italic text-primary">für starke Bäume</span>
              </h2>
              <p className="text-[#5D4037] mb-8 leading-relaxed font-light">
                Bäume sind lebende Organismen, die fachkundige Pflege benötigen. Unser erfahrenes
                Team führt alle Schnittarbeiten nach den Regeln der Baumpflege durch und berücksichtigt
                dabei die individuellen Bedürfnisse jeder Baumart.
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
                  src="/images/tree-work-1.jpg"
                  alt="Baumschnittarbeiten"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/images/project-3.jpg";
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <img
                  src="/images/tree-work-2.jpg"
                  alt="Kronenpflege"
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
              Erfahrene Baumpfleger für fachgerechten und sicheren Baumschnitt
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
            Ihre Bäume brauchen Pflege?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Vertrauen Sie auf unsere Expertise im professionellen Baumschnitt.
            Kontaktieren Sie uns für eine kostenlose Begutachtung.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-14 text-lg"
            onClick={scrollToContact}
          >
            Jetzt Termin vereinbaren
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
