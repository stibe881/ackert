'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-primary-green-dark via-primary-green to-primary-green-light overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 text-white"
        >
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full font-body font-semibold text-sm tracking-wider mb-6 border border-white/30">
            KONTAKT
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
            Lassen Sie uns
            <br />
            <span className="text-accent-orange">gemeinsam planen</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Haben Sie Fragen oder wünschen Sie eine persönliche Beratung?
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-body font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-all duration-300 font-body"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-body font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-all duration-300 font-body"
                  placeholder="ihre@email.ch"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-body font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-all duration-300 font-body"
                  placeholder="+41 76 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-body font-medium mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-all duration-300 font-body resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-10 py-5 bg-white text-primary-green rounded-xl font-body font-bold text-lg hover:bg-neutral-cream transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
              >
                Anfrage senden
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Adresse</h3>
                  <p className="font-body text-white/80 leading-relaxed">
                    Schöneggstrasse 1a<br />
                    5012 Schönenwerd<br />
                    Schweiz
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Telefon</h3>
                  <a
                    href="tel:0768313242"
                    className="font-body text-white/80 hover:text-white transition-colors duration-300 text-lg"
                  >
                    076 831 32 42
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">E-Mail</h3>
                  <a
                    href="mailto:ackertgarten@hotmail.com"
                    className="font-body text-white/80 hover:text-white transition-colors duration-300 break-all"
                  >
                    ackertgarten@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-accent-orange/20 backdrop-blur-sm border-2 border-accent-orange/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Öffnungszeiten
              </h3>
              <div className="space-y-2 font-body text-white/80">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span className="font-semibold text-white">07:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span className="font-semibold text-white">Nach Vereinbarung</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span className="font-semibold text-white">Geschlossen</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
