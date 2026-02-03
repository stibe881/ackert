import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Fehler beim Senden");

      setIsSubmitted(true);
      toast.success("Nachricht erfolgreich gesendet!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Entschuldigung, die Nachricht konnte nicht gesendet werden.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-1">Hauptsitz</h4>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Schöneggstrasse+1a,+5012+Schönenwerd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm font-light hover:text-white transition-colors block"
                      >
                        Schöneggstrasse 1a<br />5012 Schönenwerd
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Magazin</h4>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Baslerstrasse+267,+4632+Trimbach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm font-light hover:text-white transition-colors block"
                      >
                        Baslerstrasse 267<br />4632 Trimbach
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Rufen Sie an</h4>
                    <a href="tel:+41768313242" className="text-gray-300 text-sm font-light hover:text-white transition-colors">076 831 32 42</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Schreiben Sie uns</h4>
                    <a href="mailto:ackertgarten@hotmail.com" className="text-gray-300 text-sm font-light hover:text-white transition-colors">ackertgarten@hotmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right Side (Light) */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white min-h-[500px] flex items-center justify-center">
            {isSubmitted ? (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-3xl text-[#2D241E] mb-4">Vielen Dank!</h3>
                <p className="text-[#5D4E37] text-lg font-light mb-8">
                  Ihre Nachricht wurde versendet. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#2D241E] text-white hover:bg-primary rounded-full px-8"
                >
                  Weitere Nachricht senden
                </Button>
              </div>
            ) : (
              <form className="space-y-8 w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Name</label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Name"
                      className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Email</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre@email.de"
                      className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Betreff</label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Worum geht es?"
                    className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-[#2D241E] uppercase tracking-wider">Nachricht</label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Projekt..."
                    className="border-0 border-b border-[#5D4037]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-300 text-[#2D241E] min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 h-14 bg-[#2D241E] text-white hover:bg-primary font-bold text-lg transition-all rounded-full"
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
