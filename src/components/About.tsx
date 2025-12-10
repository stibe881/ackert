'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-neutral-cream overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 20 80 Q 80 20, 140 80 T 260 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-green"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="inline-block px-6 py-2 bg-primary-green/10 rounded-full text-primary-green font-body font-semibold text-sm tracking-wider mb-6">
              ÜBER UNS
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-accent-brown mb-8">
              Leidenschaft für
              <br />
              <span className="text-primary-green">grüne Welten</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-body text-lg md:text-xl text-accent-brown/80 leading-relaxed">
                Ackert Garten GmbH steht seit über zwei Jahrzehnten für
                erstklassige Gartengestaltung und professionellen Landschaftsbau
                in Schönenwerd und der gesamten Region.
              </p>
              <p className="font-body text-lg md:text-xl text-accent-brown/80 leading-relaxed">
                Mit Herzblut, Fachkompetenz und einem Auge für Details verwandeln
                wir Ihre Gartenträume in grüne Oasen. Ob Neubau, Umgestaltung
                oder regelmässige Pflege – wir sind Ihr verlässlicher Partner für
                alle Gartenarbeiten.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['20+ Jahre Erfahrung', 'Qualitätsarbeit', 'Persönliche Beratung'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white rounded-full text-primary-green font-body font-semibold text-sm shadow-md"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-primary-green-dark opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-7xl font-display font-bold mb-4">20+</div>
                    <div className="text-xl font-body">Jahre Erfahrung</div>
                    <div className="text-sm font-body opacity-80 mt-2">in Gartenbau</div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-accent-orange rounded-full opacity-30 blur-xl" />
                <div className="absolute bottom-12 left-12 w-32 h-32 bg-primary-green-light rounded-full opacity-30 blur-xl" />
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-accent-brown">100%</div>
                    <div className="font-body text-sm text-accent-brown/70">Kundenzufriedenheit</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
