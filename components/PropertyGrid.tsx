'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PropertyCard from './PropertyCard'
import { properties } from '@/lib/properties'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function PropertyGrid() {
  const featured = properties.filter(p => p.featured).slice(0, 6)

  return (
    <section className="py-24 md:py-32 px-6 bg-bg-primary">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">
              Propiedades destacadas
            </p>
            <h2
              className="text-3xl md:text-5xl text-text-primary leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Las que mueven
              <br />
              <em style={{ fontStyle: 'italic' }}>este mes</em>
            </h2>
          </div>
          <Link
            href="/propiedades"
            className="hidden md:flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium group"
          >
            Ver todas
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featured.map(property => (
            <motion.div key={property.id} variants={itemVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/propiedades"
            className="flex items-center gap-2 border border-border text-text-primary px-8 py-3 rounded-full text-sm font-medium hover:border-gold transition-colors"
          >
            Ver todas las propiedades
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
