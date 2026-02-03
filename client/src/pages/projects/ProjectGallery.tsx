import { useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";

const projectData: Record<string, { title: string, description: string, imageCount: number }> = {
    "rollrasen": {
        title: "Rollrasen",
        description: "Professionelle Verlegung von hochwertigem schweizer Rollrasen für sofortiges Grün.",
        imageCount: 11
    },
    "landschaftsbau": {
        title: "Landschaftsbau",
        description: "Professioneller Landschaftsbau für anspruchsvolle Aussenanlagen.",
        imageCount: 20
    },
    "gartengestaltung": {
        title: "Gartengestaltung",
        description: "Individuelle Gartengestaltung, die Ästhetik und Funktionalität harmonisch vereint.",
        imageCount: 34
    }
};

export default function ProjectGallery() {
    const [, params] = useRoute("/projekte/:projectId");
    const [, setLocation] = useLocation();
    const projectId = params?.projectId || "";
    const data = projectData[projectId];
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!data) return <div>Projekt nicht gefunden</div>;

    const images = Array.from({ length: data.imageCount }, (_, i) => `/images/projects/${projectId}/${i + 1}.jpg`);

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
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Referenz</span>
                    <h1 className="font-display font-bold text-4xl md:text-6xl text-[#2D241E] mb-6">{data.title}</h1>
                    <p className="text-[#5D4037] text-lg font-light leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`${data.title} Bild ${index + 1}`}
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
