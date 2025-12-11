import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#2D241E] mb-12">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                1. Geltungsbereich
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
                Ackert Garten GmbH (nachfolgend "Auftragnehmer") und ihren Kunden (nachfolgend "Auftraggeber")
                über Leistungen im Bereich Gartenbau und Landschaftsgestaltung.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                2. Vertragsschluss
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                2.1 Alle Angebote des Auftragnehmers sind freibleibend, sofern nicht ausdrücklich etwas
                anderes vereinbart wurde.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                2.2 Der Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch
                Ausführung der Leistung zustande.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                2.3 Mündliche Nebenabreden bedürfen zu ihrer Gültigkeit der schriftlichen Bestätigung.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                3. Leistungsumfang
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                3.1 Der Umfang der zu erbringenden Leistungen ergibt sich aus der Auftragsbestätigung bzw.
                dem schriftlichen Vertrag.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                3.2 Zusatzleistungen werden gesondert berechnet und bedürfen der schriftlichen Vereinbarung.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                3.3 Der Auftragnehmer behält sich vor, Subunternehmer zur Leistungserbringung einzusetzen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                4. Preise und Zahlungsbedingungen
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                4.1 Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive der gesetzlichen
                Mehrwertsteuer.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                4.2 Die Zahlung erfolgt nach Rechnungsstellung innerhalb von 30 Tagen netto ohne Abzug.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                4.3 Bei umfangreichen Projekten können Abschlagszahlungen vereinbart werden.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                4.4 Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5% p.a. berechnet.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                5. Ausführungsfristen
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                5.1 Vereinbarte Fristen und Termine gelten als verbindlich, wenn sie ausdrücklich
                schriftlich als solche bezeichnet wurden.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                5.2 Verzögerungen aufgrund höherer Gewalt, Witterungsbedingungen oder anderer vom
                Auftragnehmer nicht zu vertretender Umstände berechtigen nicht zu Schadenersatzansprüchen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                6. Mitwirkungspflichten des Auftraggebers
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                6.1 Der Auftraggeber verpflichtet sich, alle für die Leistungserbringung notwendigen
                Informationen rechtzeitig zur Verfügung zu stellen.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                6.2 Der Zugang zum Grundstück und zu erforderlichen Anschlüssen (Wasser, Strom) ist
                vom Auftraggeber zu gewährleisten.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                6.3 Erforderliche Genehmigungen sind vom Auftraggeber einzuholen, sofern nichts anderes
                vereinbart wurde.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                7. Gewährleistung
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                7.1 Der Auftragnehmer gewährleistet die fachgerechte Ausführung aller Arbeiten nach
                den anerkannten Regeln der Technik.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                7.2 Die Gewährleistungsfrist beträgt 2 Jahre ab Abnahme der Leistung, sofern nichts
                anderes vereinbart wurde.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                7.3 Bei Pflanzen gilt eine Anwuchsgarantie von 1 Jahr, vorausgesetzt die Pflegeanleitung
                wurde befolgt.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                7.4 Mängel sind unverzüglich schriftlich anzuzeigen. Der Auftragnehmer ist zur Nachbesserung
                berechtigt.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                8. Haftung
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                8.1 Der Auftragnehmer haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                8.2 Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche
                Vertragspflichten betroffen sind.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                8.3 Eine Haftung für indirekte Schäden und Folgeschäden ist ausgeschlossen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                9. Urheberrecht
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Alle Planungsunterlagen, Entwürfe und sonstigen Unterlagen bleiben geistiges Eigentum
                des Auftragnehmers. Eine Weitergabe an Dritte bedarf der schriftlichen Zustimmung.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                10. Schlussbestimmungen
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                10.1 Es gilt ausschließlich Schweizer Recht.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                10.2 Gerichtsstand ist Schönenwerd, soweit gesetzlich zulässig.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                10.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Gültigkeit
                der übrigen Bestimmungen nicht.
              </p>
            </section>

            <section className="mb-10">
              <p className="text-[#5D4E37] text-sm leading-relaxed">
                Stand: {new Date().toLocaleDateString('de-CH')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
