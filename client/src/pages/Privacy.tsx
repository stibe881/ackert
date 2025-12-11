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

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Allgemeine Hinweise
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                2. Datenerfassung auf unserer Website
              </h2>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
                Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs).
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Wofür nutzen wir Ihre Daten?
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                3. Hosting
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. Personenbezogene Daten,
                die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei
                kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden,
                handeln.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Datenschutz
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <div className="text-[#5D4E37] space-y-2 mb-4">
                <p className="font-semibold text-[#2D241E]">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>Ackert Garten GmbH</p>
                <p>Schöneggstrasse 1a</p>
                <p>5012 Schönenwerd</p>
                <p>Schweiz</p>
                <p>Telefon: 076 831 32 42</p>
                <p>E-Mail: info@ackert.ch</p>
              </div>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
                Mitteilung per E-Mail an uns.
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher
                oder gerichtlicher Rechtsbehelfe.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                5. Datenerfassung auf unserer Website
              </h2>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Cookies
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner
                keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
                effektiver und sicherer zu machen.
              </p>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Server-Log-Dateien
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-[#5D4E37] mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-[#2D241E] mt-6 mb-3">
                Kontaktformular
              </h3>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-3xl font-bold text-[#2D241E] mb-4">
                6. Ihre Rechte
              </h2>
              <p className="text-[#5D4E37] leading-relaxed mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                Berichtigung, Sperrung oder Löschung dieser Daten.
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
