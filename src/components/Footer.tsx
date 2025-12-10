'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Gartengestaltung',
    'Landschaftsbau',
    'Gartenpflege',
    'Baumarbeiten',
    'Pflasterarbeiten',
    'Umgebungsarbeiten'
  ]

  const quickLinks = [
    { label: 'Über uns', href: '#about' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Kontakt', href: '#contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-primary-green-dark via-primary-green to-primary-green-dark text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green-light rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 relative">
                <Image
                  src="/images/logo.svg"
                  alt="Ackert Garten GmbH"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-2xl">Ackert</div>
                <div className="text-xs tracking-wider opacity-90">GARTEN GMBH</div>
              </div>
            </div>
            <p className="text-white/90 font-body leading-relaxed mb-8 text-sm">
              Seit über 20 Jahren Ihr verlässlicher Partner für professionelle
              Gartengestaltung und Landschaftsbau in Schönenwerd und Umgebung.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:0768313242"
                className="flex items-center gap-3 hover:text-accent-orange transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-orange transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold">076 831 32 42</span>
              </a>

              <a
                href="mailto:ackertgarten@hotmail.com"
                className="flex items-center gap-3 hover:text-accent-orange transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-orange transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold break-all">ackertgarten@hotmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/80 hover:text-accent-orange transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Leistungen</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-body text-white/80 text-sm flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Address */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Standort</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="font-body text-white/90 leading-relaxed">
                  Schöneggstrasse 1a<br />
                  5012 Schönenwerd<br />
                  Schweiz
                </p>
              </div>

              <div className="pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-full font-body font-bold text-sm hover:bg-accent-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Jetzt kontaktieren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

              {/* Social Media */}
              <div className="flex gap-3 pt-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/70 font-body">
              © {currentYear} Ackert Garten GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 font-body">
              <a href="#" className="text-white/70 hover:text-accent-orange transition-colors font-medium">
                Impressum
              </a>
              <a href="#" className="text-white/70 hover:text-accent-orange transition-colors font-medium">
                Datenschutz
              </a>
              <a href="#" className="text-white/70 hover:text-accent-orange transition-colors font-medium">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
