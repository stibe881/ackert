import { Leaf, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D241E] text-[#FDFBF7] pt-24 pb-12 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10">
                <img src="/images/logo-rounded.png" alt="Ackert Garten Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none">
                  ACKERT
                </span>
                <span className="text-[10px] text-white/60 tracking-[0.2em] uppercase font-bold mt-1">
                  Garten GmbH
                </span>
              </div>
            </div>
            <p className="text-[#D7CCC8] text-sm leading-relaxed font-light max-w-xs">
              Wir gestalten Gärten, die Geschichten erzählen. Mit Respekt vor der Natur und Liebe zum Handwerk schaffen wir Orte der Ruhe und Inspiration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Leistungen", "Projekte", "Über uns", "Karriere"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#D7CCC8] hover:text-primary transition-colors text-sm flex items-center gap-3 group font-light">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Leistungen</h4>
            <ul className="space-y-4">
              {["Gartengestaltung", "Landschaftsbau", "Pflanzenpflege", "Baumschnitt", "Terrassenbau"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#D7CCC8] hover:text-primary transition-colors text-sm flex items-center gap-3 group font-light">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    {item}
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
                <span className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">
                  Schöneggstrasse 1a<br />
                  5012 Schönenwerd
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">076 831 32 42</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">info@ackert.ch</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#D7CCC8]/60 text-xs font-light">
            © {new Date().getFullYear()} Ackert Garten GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">Impressum</a>
            <a href="#" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">Datenschutz</a>
            <a href="#" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
