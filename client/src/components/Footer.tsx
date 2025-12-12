import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D241E] text-[#FDFBF7] pt-24 pb-12 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Ackert Garten Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-[#D7CCC8] text-sm leading-relaxed font-light max-w-xs">
              Wir gestalten Gärten, die Geschichten erzählen. Mit Respekt vor der Natur und Liebe zum Handwerk schaffen wir Orte der Ruhe und Inspiration.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ackert_garten/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/ackertgartenbaugmbh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Leistungen", href: "#services" },
                { name: "Projekte", href: "#projects" },
                { name: "Über uns", href: "/about" },
                { name: "Karriere", href: "/career" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="text-[#D7CCC8] hover:text-primary transition-colors text-sm flex items-center gap-3 group font-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Leistungen</h4>
            <ul className="space-y-4">
              {[
                { name: "Gartengestaltung", href: "/services/gartengestaltung" },
                { name: "Landschaftsbau", href: "/services/landschaftsbau" },
                { name: "Pflanzenpflege", href: "/services/pflanzenpflege" },
                { name: "Baumschnitt", href: "/services/baumschnitt" },
                { name: "Terrassenbau", href: "/services/terrassenbau" },
                { name: "Rollrasen", href: "/services/rollrasen" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#D7CCC8] hover:text-primary transition-colors text-sm flex items-center gap-3 group font-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Kontakt</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Schöneggstrasse+1a,+5012+Schönenwerd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors"
                >
                  Schöneggstrasse 1a<br />
                  5012 Schönenwerd
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+41768313242" className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">076 831 32 42</a>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:ackertgarten@hotmail.com" className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">ackertgarten@hotmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#D7CCC8]/60 text-xs font-light">
            © {new Date().getFullYear()} Ackert Garten GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="https://gross-ict.ch" target="_blank" rel="noopener noreferrer" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">
              Realisation: Gross ICT
            </a>
            <span className="text-[#D7CCC8]/60 text-xs">•</span>
            <a href="/imprint" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">Impressum</a>
            <a href="/privacy" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">Datenschutz</a>
            <a href="/terms" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
