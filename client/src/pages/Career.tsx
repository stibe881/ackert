import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import ApplicationForm from "@/components/ApplicationForm";

export default function Career() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D241E] mb-6">
              Karriere
            </h1>
            <p className="text-xl text-[#5D4E37] font-light leading-relaxed">
              Werde Teil unseres Teams und gestalte mit uns die Gärten von morgen.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="container mb-20">
          <h2 className="font-display text-4xl font-bold text-[#2D241E] text-center mb-16">
            Warum bei uns arbeiten?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Tolles Team",
                description: "Arbeite mit leidenschaftlichen Profis in einem familiären Umfeld."
              },
              {
                icon: GraduationCap,
                title: "Weiterbildung",
                description: "Wir fördern deine fachliche und persönliche Entwicklung."
              },
              {
                icon: TrendingUp,
                title: "Karrierechancen",
                description: "Wachse mit uns und übernimm Verantwortung in spannenden Projekten."
              },
              {
                icon: Briefcase,
                title: "Faire Bedingungen",
                description: "Moderne Ausrüstung, faire Bezahlung und flexible Arbeitszeiten."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2D241E] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#5D4E37] font-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mb-20">
          <h2 className="font-display text-4xl font-bold text-[#2D241E] text-center mb-16">
            Offene Stellen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Spontanbewerbung",
                type: "Alle Positionen",
                location: "Schönenwerd",
                description: "Sie möchten Teil unseres Teams werden? Wir freuen uns über Ihre Bewerbung und prüfen gerne, welche Position am besten zu Ihnen passt."
              }
            ].map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#2D241E] mb-2">
                      {job.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-[#5D4E37]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
                    onClick={() => {
                      setSelectedPosition(job.title);
                      setShowApplicationForm(true);
                    }}
                  >
                    Bewerben
                  </Button>
                </div>
                <p className="text-[#5D4E37] font-light">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Application CTA */}
        <section className="bg-[#2D241E] py-20 -mx-4">
          <div className="container text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Werde Teil unseres Teams
            </h2>
            <p className="text-[#D7CCC8] text-lg font-light mb-8 max-w-2xl mx-auto">
              Wir freuen uns über Bewerbungen von motivierten Menschen,
              die ihre Leidenschaft für Gartenbau mit uns teilen möchten.
            </p>
            <Button
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-6 text-lg"
              onClick={() => {
                setSelectedPosition("Spontanbewerbung");
                setShowApplicationForm(true);
              }}
            >
              Jetzt bewerben
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      {showApplicationForm && (
        <ApplicationForm
          position={selectedPosition}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
}
