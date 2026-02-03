import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";

// Diese Liste enthält Beispiel-Detaillaufnahmen aus den verschiedenen Projekten
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
        <div className="min-h-screen bg-[#FDFBF7] py-20">
            <div className="container">
                <Button
                    variant="ghost"
                    onClick={() => setLocation("/")}
                    className="mb-8 hover:bg-primary/10 text-[#5D4037] flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
                </Button>

                <div className="max-w-3xl mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Handwerkskunst</span>
                    <h1 className="font-display font-bold text-4xl md:text-6xl text-[#2D241E] mb-6">Qualität im <span className="italic text-primary">Detail</span></h1>
                    <p className="text-[#5D4037] text-lg font-light leading-relaxed">
                        Präzision bis in den letzten Winkel. Wir legen Wert auf sorgfältige Materialwahl und handwerkliche Meisterschaft, damit Ihr Garten über Jahrzehnte hinweg seine Schönheit bewahrt.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {qualityImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Qualität Detail Bild ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="text-white w-8 h-8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Vollbild"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </div>
    );
}
