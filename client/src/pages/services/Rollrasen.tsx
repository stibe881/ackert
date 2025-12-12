import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Leaf, Clock, ThumbsUp, Sprout } from "lucide-react";
import { useEffect } from "react";

export default function Rollrasen() {
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
    "Premium Schweizer Rollrasen aus regionaler Anzucht",
    "Fachgerechte Bodenvorbereitung und Untergrundprüfung",
    "Präzise Verlegung für ein perfektes Ergebnis",
    "Sofort grüne und nutzbare Rasenflächen",
    "Professionelle Anwachsgarantie und Pflegeberatung",
    "Für private Gärten und Gewerbeflächen"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Sofort grün",
      description: "Innerhalb weniger Stunden zur perfekten Rasenfläche"
    },
    {
      icon: Leaf,
      title: "Premium-Qualität",
      description: "Dichte, robuste Grasnarbe für langanhaltende Freude"
    },
    {
      icon: Sprout,
      title: "Anwachsgarantie",
      description: "Fachgerechte Verlegung mit professioneller Nachbetreuung"
    },
    {
      icon: ThumbsUp,
      title: "Unkrautfrei",
      description: "Saubere Rasenfläche ohne Unkraut von Anfang an"
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
              Schweizer Rollrasen
            </h1>
            <p className="text-xl text-[#5D4037] max-w-3xl mx-auto font-light leading-relaxed">
              Verwandeln Sie kahle Flächen in sattes Grün – mit Premium Schweizer Rollrasen.
              Regional angebaut, sofort nutzbar und perfekt an unser Klima angepasst.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="/images/Rollrasen_1.jpeg"
              alt="Rollrasen"
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
                Schweizer Qualität –<br />
                <span className="italic text-primary">sofort grün</span>
              </h2>
              <p className="text-[#5D4037] mb-8 leading-relaxed font-light">
                Mit Premium Schweizer Rollrasen schaffen wir sofort grüne, dichte Rasenflächen,
                die optimal an unser Klima angepasst sind. Regional angebaut und frisch verlegt –
                von der Bodenvorbereitung bis zur Fertigstellung sorgen wir für ein makelloses Ergebnis.
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
                  src="/images/Rollrasen_2.jpg"
                  alt="Rollrasen Verlegung"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/Rollrasen_3.jpg"
                  alt="Fertiger Rollrasen"
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
              Professionelle Rollrasenverlegung mit Qualitätsgarantie
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
            Ihr perfekter Rasen wartet
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Lassen Sie uns Ihre Rasenfläche professionell anlegen.
            Kontaktieren Sie uns für eine kostenlose Beratung und Offerte.
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
