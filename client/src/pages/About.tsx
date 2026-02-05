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
              Seit über 10 Jahren Ihr Partner für professionelle Gartenanlagen und Landschaftsbau.
            </p>
          </div>
        </section>

        {/* Philosophy/Founder Section */}
        <section className="container mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold text-[#2D241E] mb-6">
                  Unsere Philosophie
                </h2>
                <p className="text-[#5D4E37] leading-relaxed text-lg font-light">
                  "Die Zufriedenheit unserer Kunden ist für uns das A und O. Seit über 10 Jahren betreuen wir unsere Kunden erfolgreich – von der Erstellung der Gartenpläne über das Einholen der Baubewilligungen bis zur kompletten Ausführung der Gartenanlagen in den Kantonen Solothurn, Aargau, Basel-Land, Basel-Stadt und Luzern."
                </p>
                <p className="text-[#5D4E37] mt-4 font-medium italic">
                  – Erdzan Kalac, Geschäftsführer (seit 2017 selbstständig)
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-[#2D241E]">
                  Unsere Stärken
                </h3>
                <p className="text-[#5D4E37] leading-relaxed font-light">
                  Unsere Stärke liegt in Neuanlagen sowie Sanierungen, ebenfalls gehören auch die Ökogärten zu unserem Fachgebiet. Wir verbinden modernes Design mit ökologischer Verantwortung.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/erdzan_kalac.jpg"
                  alt="Erdzan Kalac - Geschäftsführer Ackert Garten GmbH"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rollrasen Section */}
        <section className="bg-white py-24 mb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/Rollrasen_1.jpeg"
                  alt="Schweizer Rollrasen in Premiumqualität"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="font-display text-4xl font-bold text-[#2D241E]">
                  Premium Rollrasen
                </h2>
                <p className="text-[#5D4E37] text-lg leading-relaxed font-light">
                  Mit unserem schweizer Rollrasen in 1-A Premiumqualität haben wir schweizweit die besten Preis-Leistungsverhältnisse. Jährlich vertreiben und verlegen wir mehrere Tausend m² schweizweit.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-primary font-bold">
                    <Leaf h-5 w-5 />
                    <span>1-A Premiumqualität aus der Schweiz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#2D241E] py-24 -mx-4 rounded-[3rem] md:rounded-[5rem]">
          <div className="container">
            <h2 className="font-display text-4xl font-bold text-white text-center mb-16">
              Unsere Werte & Zukunft
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  icon: Leaf,
                  title: "Ökogärten",
                  description: "Wir fördern die Biodiversität durch fachgerecht gestaltete Ökogärten."
                },
                {
                  icon: Award,
                  title: "10 Jahre Erfahrung",
                  description: "Langjährige Expertise von der Planung bis zur Ausführung."
                },
                {
                  icon: Heart,
                  title: "Leidenschaft",
                  description: "Wir investieren kontinuierlich in unser Unternehmen und Wissen."
                },
                {
                  icon: Users,
                  title: "Kundennähe",
                  description: "Ihre Zufriedenheit ist unser A und O - in jeder Phase des Projekts."
                }
              ].map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 mb-8 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#D7CCC8] font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center max-w-3xl mx-auto">
              <p className="text-[#D7CCC8] text-lg font-light leading-relaxed italic">
                "Auch zukünftig investieren wir in unser Unternehmen sowie unser Wissen, um unseren Kunden immer das Beste bieten zu können."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
