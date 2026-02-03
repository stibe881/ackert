import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";

interface ApplicationFormProps {
  position: string;
  onClose: () => void;
}

export default function ApplicationForm({ position, onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("Die Datei ist zu gross. Maximale Grösse: 10MB");
        return;
      }
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Bitte laden Sie Ihren Lebenslauf hoch.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", position);
      formDataToSend.append("message", `Telefon: ${formData.phone}\n\nNachricht: ${formData.message}`);
      formDataToSend.append("type", "application");
      if (cvFile) {
        formDataToSend.append("cvFile", cvFile);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Bewerbung");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-[#2D241E]">
            Bewerbung: {position}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#2D241E] mb-2">
                Vorname *
              </label>
              <Input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full text-black bg-white border-gray-200"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[#2D241E] mb-2">
                Nachname *
              </label>
              <Input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full text-black bg-white border-gray-200"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D241E] mb-2">
                E-Mail *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-black bg-white border-gray-200"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#2D241E] mb-2">
                Telefon
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-black bg-white border-gray-200"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#2D241E] mb-2">
              Nachricht
            </label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Erzählen Sie uns kurz über sich und warum Sie zu Ackert Garten GmbH passen..."
              className="w-full text-[#2D241E] bg-white border-gray-200 focus:border-primary focus:ring-primary"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-[#2D241E] mb-2">
              Lebenslauf (PDF) *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
              {cvFile ? (
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                  <span className="text-sm text-[#2D241E] font-medium">{cvFile.name}</span>
                  <button
                    type="button"
                    onClick={() => setCvFile(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <label htmlFor="cv-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-[#5D4037]">
                    Klicken Sie hier, um Ihren Lebenslauf hochzuladen
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PDF, max. 10MB</p>
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-800 text-sm">
                Bewerbung erfolgreich gesendet! Wir melden uns bald bei Ihnen.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-800 text-sm">
                {errorMessage || "Fehler beim Senden. Bitte versuchen Sie es erneut."}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 text-black border-gray-300 hover:bg-gray-100"
              disabled={isSubmitting}
            >
              Abbrechen
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
            </Button>
          </div>
        </form>
      </div >
    </div >
  );
}
