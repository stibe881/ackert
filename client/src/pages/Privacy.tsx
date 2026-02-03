import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#2D241E] mb-12">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Wir legen grossen Wert auf den Schutz Ihrer Privatsphäre. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                In dieser Datenschutzerklärung informieren wir Sie über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Website nach Massgabe des Schweizer Datenschutzgesetzes (revDSG) sowie, sofern anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                2. Verantwortliche Stelle
              </h2>
              <div className="text-[#5D4E37] space-y-2 mb-4">
                <p className="font-semibold text-[#2D241E]">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>Ackert Garten GmbH</p>
                <p>Schöneggstrasse 1a</p>
                <p>5012 Schönenwerd</p>
                <p>Schweiz</p>
                <p>Telefon: 076 831 32 42</p>
                <p>E-Mail: <a href="mailto:ackertgarten@hotmail.com" className="text-primary hover:underline">ackertgarten@hotmail.com</a></p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                3. Erfassung von Daten
              </h2>
              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Server-Log-Files
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind v.a. IP-Adresse, Datum/Uhrzeit und Browsertyp. Diese Daten dienen der technischen Optimierung und Sicherheit der Website.
              </p>
              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Kontaktformular & Kommunikation
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                4. Ihre Rechte
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Gemäss revDSG und DSGVO haben Sie zudem das Recht auf Datenübertragbarkeit sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (in der Schweiz der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte, EDÖB).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                5. Datensicherheit
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Wir nutzen eine SSL-Verschlüsselung (HTTPS), um die Sicherheit Ihrer Daten bei der Übertragung zu gewährleisten. Unsere IT-Systeme sind nach aktuellem Stand der Technik gegen Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen geschützt.
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
