'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Moderne Terrassenanlage',
    category: 'Landschaftsbau',
    color: 'from-primary-green to-primary-green-dark',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
  },
  {
    title: 'Naturnaher Hausgarten',
    category: 'Gartengestaltung',
    color: 'from-accent-orange to-accent-orange-dark',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&auto=format&fit=crop',
  },
  {
    title: 'Pflegeleichte Vorgärten',
    category: 'Gartenpflege',
    color: 'from-primary-green-light to-primary-green',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=800&auto=format&fit=crop',
  },
  {
    title: 'Exklusive Poolanlage',
    category: 'Umgebungsarbeiten',
    color: 'from-primary-green-dark to-accent-brown',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-neutral-cream to-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-primary-green/10 rounded-full text-primary-green font-body font-semibold text-sm tracking-wider mb-6">
            UNSERE PROJEKTE
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-accent-brown mb-8">
            Verwirklichte
            <br />
            <span className="text-accent-orange">Gartenträume</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-accent-brown/70 max-w-3xl mx-auto">
            Jedes Projekt ist einzigartig – überzeugen Sie sich von unserer Arbeit
            und lassen Sie sich inspirieren.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500`} />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-body font-medium border border-white/30">
                    {project.category}
                  </span>
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  {project.title}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-1 bg-white/50 rounded-full"
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Hover Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-body text-accent-brown/70 mb-6">
            Möchten Sie mehr Projekte sehen oder uns persönlich kennenlernen?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent-orange text-white rounded-full font-body font-bold text-lg hover:bg-accent-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Vereinbaren Sie einen Termin
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
