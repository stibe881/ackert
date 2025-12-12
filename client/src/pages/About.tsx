import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Leaf, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D241E] mb-6">
              Über uns
            </h1>
            <p className="text-xl text-[#5D4E37] font-light leading-relaxed">
              Mit Leidenschaft und Erfahrung gestalten wir seit Jahren Gärten, die begeistern.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-[#2D241E]">
                Unsere Geschichte
              </h2>
              <p className="text-[#5D4E37] leading-relaxed">
                Ackert Garten GmbH steht für höchste Qualität im Gartenbau. Was als kleine Familienbetrieb begann,
                hat sich zu einem führenden Unternehmen für Gartengestaltung und Landschaftsbau entwickelt.
              </p>
              <p className="text-[#5D4E37] leading-relaxed">
                Unser Team aus erfahrenen Landschaftsgärtnern verbindet traditionelles Handwerk mit modernen
                Gestaltungskonzepten. Jedes Projekt wird mit Liebe zum Detail und höchstem Qualitätsanspruch umgesetzt.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80"
                alt="Gartenbau Arbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#2D241E] py-20 -mx-4">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-white text-center mb-16">
              Unsere Werte
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Nachhaltigkeit",
                  description: "Wir setzen auf umweltfreundliche Materialien und nachhaltige Methoden."
                },
                {
                  icon: Award,
                  title: "Qualität",
                  description: "Höchste Handwerkskunst und sorgfältige Ausführung in jedem Detail."
                },
                {
                  icon: Users,
                  title: "Teamwork",
                  description: "Gemeinsam erreichen wir aussergewöhnliche Ergebnisse."
                },
                {
                  icon: Heart,
                  title: "Leidenschaft",
                  description: "Wir lieben, was wir tun - und das sieht man in jedem Projekt."
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#D7CCC8] font-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mt-20">
          <h2 className="font-display text-4xl font-bold text-[#2D241E] text-center mb-16">
            Unser Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Erdzan Kalac",
                role: "Geschäftsführer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              },
              {
                name: "Mitarbeiter",
                role: "Landschaftsgärtner",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
              },
              {
                name: "Mitarbeiter",
                role: "Gartengestalter",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2D241E] mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-light">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
