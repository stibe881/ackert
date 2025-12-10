'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Landschaftsvideo_Ohne_Menschen_Erstellt.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex items-center justify-center text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm font-body font-medium tracking-wider border-2 border-white text-white shadow-xl">
              SEIT ÜBER 20 JAHREN IHR PARTNER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none text-white drop-shadow-2xl"
          >
            Grüne Träume
            <br />
            <span className="text-accent-orange drop-shadow-2xl">werden Realität</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-body text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
          >
            Professionelle Gartengestaltung, Landschaftsbau und Gartenpflege
            in Schönenwerd und Umgebung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-primary-green rounded-full font-body font-bold text-lg hover:bg-neutral-cream transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center gap-3"
            >
              Jetzt Beratung anfragen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black/40 backdrop-blur-md border-2 border-white text-white rounded-full font-body font-bold text-lg hover:bg-black/50 transition-all duration-300 shadow-lg"
            >
              Unsere Leistungen
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white drop-shadow-lg"
        >
          <span className="text-sm font-body tracking-wider">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        style={{ scale }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-orange rounded-full blur-3xl opacity-20"
      />
      <motion.div
        style={{ scale }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary-green-light rounded-full blur-3xl opacity-20"
      />
    </section>
  )
}
