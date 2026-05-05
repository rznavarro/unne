'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-bg-primary">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-content mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Gold line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-16 h-px bg-gold/40" />
          </div>

          <h2
            className="text-4xl md:text-6xl text-text-primary mb-6 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            La propiedad correcta{' '}
            <em style={{ fontStyle: 'italic' }}>existe.</em>
            <br />
            Ayudamos a encontrarla.
          </h2>

          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
            Respuesta en menos de 2 horas · Consulta sin costo
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/propiedades"
              className="flex items-center gap-2 bg-gold text-black font-semibold px-8 py-4 rounded-full text-base hover:bg-accent-muted transition-colors group"
            >
              Ver propiedades disponibles
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/56932924867"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border text-text-primary font-medium px-8 py-4 rounded-full text-base hover:border-gold transition-colors"
            >
              <MessageCircle size={18} />
              Hablar con un agente
            </a>
          </div>

          <p className="text-text-muted text-sm mt-8">
            Asturias 171, of. 206, Las Condes · contacto@unne.cl · +562 6465 3732
          </p>
        </motion.div>
      </div>
    </section>
  )
}
