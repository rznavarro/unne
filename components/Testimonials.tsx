'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/properties'
import { Quote } from 'lucide-react'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-primary">
      <div className="max-w-content mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">
            Clientes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl text-text-primary mb-16 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Lo que dicen quienes{' '}
            <em style={{ fontStyle: 'italic' }}>ya compraron</em>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                className="bg-bg-secondary border border-border rounded-2xl p-6 flex flex-col gap-5 hover:border-border-gold transition-colors duration-300"
              >
                <Quote size={20} className="text-gold opacity-60" />
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-bg-elevated border border-border-gold flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.transaction}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
