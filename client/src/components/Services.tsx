import { Sprout, Trees, Shovel, Ruler, Flower2, Leaf } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Sprout,
    title: "Gartengestaltung",
    description: "Individuelle Konzepte, die den Charakter Ihres Grundstücks unterstreichen.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    href: "/services/gartengestaltung"
  },
  {
    icon: Trees,
    title: "Landschaftsbau",
    description: "Professionelle Erdbewegung und Strukturierung für langlebige Aussenanlagen.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    href: "/services/landschaftsbau"
  },
  {
    icon: Leaf,
    title: "Rollrasen",
    description: "Sofort grüne Rasenflächen mit hochwertiger Qualität und professioneller Verlegung.",
    color: "text-lime-600",
    bg: "bg-lime-600/10",
    border: "border-lime-600/20",
    href: "/services/rollrasen"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#FDFBF7] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/images/texture-leaf-macro.png')", backgroundSize: "cover" }} />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Was wir tun</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2D241E] mb-6">
            Handwerk trifft <span className="italic text-primary">Natur</span>
          </h2>
          <p className="text-[#5D4037] text-lg font-light">
            Mit Leidenschaft und Fachwissen gestalten wir grüne Lebensräume, die Generationen überdauern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative h-80 perspective-1000 cursor-pointer"
            >
              <div className={`
                absolute inset-0 bg-white rounded-2xl p-8 flex flex-col justify-between
                transition-all duration-500 ease-out shadow-sm hover:shadow-xl
                group-hover:-translate-y-2 border border-[#5D4037]/10
              `}>
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mb-6
                  ${service.bg} ${service.border} border
                  transition-transform duration-500 group-hover:scale-110
                `}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2D241E] mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#5D4037] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-[#5D4037]/10 rounded-full mt-4 group-hover:w-full group-hover:bg-primary/20 transition-all duration-500" />
              </div>
            </Link>
          ))}

          {/* Visual Element Card */}
          <div className="relative h-80 md:col-span-2 lg:col-span-3 rounded-2xl overflow-hidden group shadow-lg">
            <img
              src="/images/service-icon-natural.png"
              alt="Gartenwerkzeug"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Qualität im Detail
              </h3>
              <p className="text-gray-200 text-sm font-light">
                Jeder Handgriff sitzt. Wir arbeiten mit Präzision und Liebe zum Detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
