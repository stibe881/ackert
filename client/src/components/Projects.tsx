import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rollrasen",
    category: "Rollrasen",
    image: "/images/project-rollrasen.jpg",
    description: "Professionelle Verlegung von hochwertigem Rollrasen für sofortiges Grün."
  },
  {
    id: 2,
    title: "Mediterrane Terrasse",
    category: "Terrassenbau",
    image: "/images/project-terrace.png",
    description: "Südländisches Flair mit Naturstein und hitzeverträglichen Pflanzen."
  },
  {
    id: 3,
    title: "Stadtgarten Oase",
    category: "Gartengestaltung",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1632&auto=format&fit=crop",
    description: "Maximale Erholung auf minimalem Raum mitten in der Stadt."
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-32 bg-[#2D241E] relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Referenzen</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
              Unsere <span className="italic text-secondary">Handschrift</span>
            </h2>
          </div>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-6">
            Alle Projekte ansehen
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Project List - Left Side */}
          <div className="lg:col-span-4 space-y-2">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  p-8 cursor-pointer transition-all duration-500 border-l-2
                  ${activeProject === index
                    ? "border-primary bg-white/5 pl-8"
                    : "border-white/10 hover:border-white/30 pl-6 hover:pl-8 bg-transparent"
                  }
                `}
                onMouseEnter={() => setActiveProject(index)}
              >
                <span className="text-xs text-primary/90 font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className={`font-display font-bold text-2xl mb-3 ${activeProject === index ? "text-white" : "text-white/60"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-light leading-relaxed ${activeProject === index ? "text-gray-300" : "text-gray-500"}`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Project Preview - Right Side (Natural Depth) */}
          <div className="lg:col-span-8 h-[600px] relative group">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  absolute inset-0 rounded-sm overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out
                  ${activeProject === index
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 translate-x-12 z-0"
                  }
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/90 via-transparent to-transparent opacity-40" />

                <div className="absolute bottom-8 right-8">
                  <Button className="rounded-full w-16 h-16 bg-white text-[#2D241E] hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            ))}

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-white/10 -z-10 translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
