'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingUp, Lock, MapPin } from 'lucide-react'

const items = [
  {
    icon: Clock,
    title: 'Vendemos 40% más rápido',
    body: 'Nuestro tiempo promedio de venta es 40% menor al mercado. Cada propiedad entra con estrategia de precio y marketing antes del día uno.',
  },
  {
    icon: TrendingUp,
    title: '94% al precio pedido o más',
    body: 'El 94% de nuestros vendedores cierran al precio de lista. No dejamos dinero sobre la mesa.',
  },
  {
    icon: Lock,
    title: 'Propiedades off-market',
    body: 'Acceso a propiedades que nunca llegan a Portalinmobiliario ni a Doomos. Solo para clientes Unne.',
  },
  {
    icon: MapPin,
    title: 'Solo el sector oriente',
    body: 'No trabajamos en toda Chile. Nos especializamos en Las Condes, Vitacura, Lo Barnechea y Providencia. Nadie las conoce mejor.',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Diferenciadores() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-secondary border-y border-border">
      <div className="max-w-content mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">
            Por qué Unne
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl text-text-primary mb-16 leading-tight max-w-xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Lo que nos hace{' '}
            <em style={{ fontStyle: 'italic' }}>distintos</em>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl border border-border-gold flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
