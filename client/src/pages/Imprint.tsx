import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Imprint() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#2D241E] mb-12">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                Angaben gemäss § 5 TMG
              </h2>
              <div className="text-[#5D4E37] space-y-2">
                <p className="font-semibold text-[#2D241E]">Ackert Garten GmbH</p>
                <p>Schöneggstrasse 1a</p>
                <p>5012 Schönenwerd</p>
                <p>Schweiz</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                Kontakt
              </h2>
              <div className="text-[#5D4E37] space-y-2">
                <p>
                  <span className="font-semibold text-[#2D241E]">Telefon:</span>{" "}
                  <a href="tel:+41768313242" className="text-primary hover:underline">
                    076 831 32 42
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#2D241E]">E-Mail:</span>{" "}
                  <a href="mailto:info@ackert.ch" className="text-primary hover:underline">
                    info@ackert.ch
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                Handelsregister
              </h2>
              <div className="text-[#5D4E37] space-y-2">
                <p>
                  <span className="font-semibold text-[#2D241E]">Handelsregisternummer:</span> CHE-XXX.XXX.XXX
                </p>
                <p>
                  <span className="font-semibold text-[#2D241E]">Registergericht:</span> Handelsregister Solothurn
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                Vertretungsberechtigte Person
              </h2>
              <div className="text-[#5D4E37]">
                <p>Geschäftsführer: Max Ackert</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                Umsatzsteuer-ID
              </h2>
              <div className="text-[#5D4E37]">
                <p>
                  <span className="font-semibold text-[#2D241E]">Umsatzsteuer-Identifikationsnummer gemäss §27 a Umsatzsteuergesetz:</span>
                  <br />
                  CHE XXX.XXX.XXX MWST
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                Haftungsausschluss
              </h2>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Haftung für Inhalte
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Haftung für Links
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Urheberrecht
              </h3>
              <p className="text-[#5D4E37] leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
