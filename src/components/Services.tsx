'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Gartengestaltung',
    description: 'Von der ersten Idee bis zur Umsetzung – wir gestalten Ihren Traumgarten nach Ihren individuellen Wünschen.',
    features: ['Konzeptentwicklung', 'Bepflanzungsplanung', '3D-Visualisierung']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Landschaftsbau',
    description: 'Professioneller Bau von Terrassen, Mauern, Wegen und allen weiteren Elementen Ihrer Aussenanlage.',
    features: ['Terrassen & Wege', 'Mauern & Treppen', 'Wasserelemente']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Gartenpflege',
    description: 'Regelmässige Pflege und Unterhalt für dauerhaft gepflegte und gesunde Grünflächen.',
    features: ['Rasenpflege', 'Heckenschnitt', 'Saisonale Bepflanzung']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Baumarbeiten',
    description: 'Fachgerechter Rückschnitt, Pflege und bei Bedarf sichere Fällung von Bäumen aller Art.',
    features: ['Baumpflege', 'Kronenschnitt', 'Baumfällung']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Pflasterarbeiten',
    description: 'Präzise Verlegung von Platten, Steinen und Pflasterbelägen für Einfahrten, Wege und Plätze.',
    features: ['Belagsarbeiten', 'Naturstein', 'Betonsteine']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Umgebungsarbeiten',
    description: 'Komplette Neugestaltung oder Sanierung Ihrer Aussenanlage – alles aus einer Hand.',
    features: ['Neuanlagen', 'Sanierungen', 'Beratung & Planung']
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-accent-orange/10 rounded-full text-accent-orange font-body font-semibold text-sm tracking-wider mb-6">
            UNSERE LEISTUNGEN
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-accent-brown mb-8">
            Alles für Ihren
            <br />
            <span className="text-primary-green">perfekten Garten</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-accent-brown/70 max-w-3xl mx-auto">
            Von der Planung über die Ausführung bis zur Pflege – wir bieten Ihnen
            das komplette Leistungsspektrum im Gartenbau.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-neutral-cream rounded-2xl p-8 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 bg-gradient-to-br from-primary-green to-primary-green-dark rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-accent-brown mb-4 group-hover:text-primary-green transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-accent-brown/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm font-body text-accent-brown/60"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary-green text-white rounded-full font-body font-bold text-lg hover:bg-primary-green-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Persönliche Beratung anfragen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
