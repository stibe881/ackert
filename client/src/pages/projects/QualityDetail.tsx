import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2, ShieldCheck, Gem, Ruler } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const qualityImages = [
    "/images/projects/landschaftsbau/1.jpg",
    "/images/projects/landschaftsbau/2.jpg",
    "/images/projects/landschaftsbau/11.jpg",
    "/images/projects/gartengestaltung/2.jpg",
    "/images/projects/gartengestaltung/11.jpg",
    "/images/projects/gartengestaltung/18.jpg",
    "/images/projects/gartengestaltung/19.jpg",
    "/images/projects/gartengestaltung/32.jpg",
    "/images/projects/rollrasen/3.jpg",
    "/images/projects/rollrasen/5.jpg",
    "/images/projects/landschaftsbau/13.jpg",
    "/images/projects/landschaftsbau/17.jpg",
];

export default function QualityDetail() {
    const [, setLocation] = useLocation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFBF7] selection:bg-primary selection:text-primary-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container">
                    <Button
                        variant="ghost"
                        onClick={() => setLocation("/")}
                        className="mb-12 hover:bg-primary/10 text-[#5D4037] flex items-center gap-2 rounded-full"
                    >
                        <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
                    </Button>

                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Perfektion bis ins Detail</span>
                        <h1 className="font-display font-bold text-5xl md:text-7xl text-[#2D241E] mb-8">
                            Unsere <span className="italic text-secondary">Qualitätsphilosophie</span>
                        </h1>
                        <p className="text-[#5D4037] text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Hinter jedem Projekt von Ackert Gartenbau steht das Versprechen höchster Präzision und handwerklicher Meisterschaft.
                        </p>
                    </div>

                    {/* Alternating Sections */}
                    <div className="space-y-32 mb-32">
                        {/* Section 1: Material & Senses */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6 font-bold text-primary">
                                    <Gem className="w-6 h-6" />
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D241E] mb-6">Materialwahl & Ästhetik</h2>
                                <p className="text-[#5D4037] text-lg font-light leading-relaxed mb-6">
                                    Wir glauben, dass die Qualität eines Gartens mit der Wahl der richtigen Materialien beginnt. Ob heimischer Naturstein, edles Holz oder ausgewählte Pflanzen – wir achten auf Texturen, Farben und Herkunft.
                                </p>
                                <p className="text-[#5D4037] text-lg font-light leading-relaxed">
                                    Jedes Element wird so platziert, dass es nicht nur heute gut aussieht, sondern auch in vielen Jahren noch durch seine Beständigkeit überzeugt. Das Zusammenspiel von Licht, Schatten und Materialität ist unser täglicher Fokus.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative group">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/projects/gartengestaltung/32.jpg"
                                        alt="Material Detail"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                    />
                                </div>
                                <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4 rounded-2xl" />
                            </div>
                        </div>

                        {/* Section 2: Precision */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative group">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/projects/landschaftsbau/11.jpg"
                                        alt="Präzision Detail"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                    />
                                </div>
                                <div className="absolute -inset-4 border border-secondary/20 -z-10 -translate-x-4 translate-y-4 rounded-2xl" />
                            </div>
                            <div>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-6 font-bold text-secondary">
                                    <Ruler className="w-6 h-6" />
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D241E] mb-6">Präzision & Fachkunde</h2>
                                <p className="text-[#5D4037] text-lg font-light leading-relaxed mb-6">
                                    Handwerkliches Geschick zeigt sich dort, wo andere wegschauen: in den Fugen, an den Kanten und in der Unterkonstruktion. Unsere Landschaftsgärtner arbeiten mit modernster Technik und traditionellem Wissen.
                                </p>
                                <p className="text-[#5D4037] text-lg font-light leading-relaxed">
                                    Wir überlassen nichts dem Zufall. Jedes Gefälle wird exakt berechnet, jede Pflanze optimal platziert und jede Natursteinmauer Stein für Stein mit Geduld und Auge für die Form gesetzt.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Longevity */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6 font-bold text-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D241E] mb-6">Langlebigkeit & Wert</h2>
                                <p className="text-[#5D4037] text-lg font-light leading-relaxed mb-6">
                                    Ein Garten von Ackert Gartenbau ist kein kurzlebiger Trend. Es ist ein wertbeständiger Lebensraum, der mit den Jahren an Charakter gewinnt. Wir planen vorausschauend, damit Pflegeaufwand und Ästhetik in Harmonie bleiben.
                                </p>
                                <p className="text-[#5D4037] text-lg font-light leading-relaxed">
                                    Unsere Qualität endet nicht mit dem Abschluss der Bauarbeiten. Wir bauen Gärten, die wachsen, sich entfalten und über Jahrzehnte hinweg Freude bereiten.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative group">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/projects/landschaftsbau/13.jpg"
                                        alt="Langlebigkeit Detail"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                    />
                                </div>
                                <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4 rounded-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Image Grid Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D241E] mb-4">Einblicke in unsere Arbeit</h2>
                            <p className="text-[#5D4037] font-light italic">Klicken Sie auf ein Bild, um es zu vergrössern</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {qualityImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img
                                        src={src}
                                        alt={`Qualität Detail Bild ${index + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 className="text-white w-6 h-6" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Vollbild"
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-sm translate-y-0 scale-100 animate-in zoom-in-95 duration-300"
                    />
                    <Button
                        variant="ghost"
                        className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        Schliessen
                    </Button>
                </div>
            )}
        </div>
    );
}
