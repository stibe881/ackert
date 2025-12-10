import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#FDFBF7]">
      <div className="container max-w-6xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info - Left Side (Dark) */}
          <div className="lg:w-2/5 bg-[#2D241E] p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/texture-leaf-macro.png')", backgroundSize: "cover" }} />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Kontakt</span>
                <h2 className="font-display font-bold text-4xl mb-6">
                  Lassen Sie uns <br />
                  <span className="italic text-secondary">sprechen</span>
                </h2>
                <p className="text-gray-300 font-light mb-12">
                  Jeder Garten beginnt mit einem Gespräch. Erzählen Sie uns von Ihren Wünschen.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Besuchen Sie uns</h4>
                    <p className="text-gray-300 text-sm font-light">Schöneggstrasse 1a<br />5012 Schönenwerd</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Rufen Sie an</h4>
                    <p className="text-gray-300 text-sm font-light">076 831 32 42</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Schreiben Sie uns</h4>
                    <p className="text-gray-300 text-sm font-light">info@ackert.ch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right Side (Light) */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Ihr Name" 
                    className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ihre@email.de" 
                    className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E]"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Betreff</label>
                <Input 
                  id="subject" 
                  placeholder="Worum geht es?" 
                  className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Nachricht</label>
                <Textarea 
                  id="message" 
                  placeholder="Beschreiben Sie Ihr Projekt..." 
                  className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E] min-h-[100px] resize-none"
                />
              </div>

              <Button className="w-full md:w-auto px-8 h-14 bg-[#2D241E] text-white hover:bg-primary font-bold text-lg transition-all rounded-full">
                Nachricht senden
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
