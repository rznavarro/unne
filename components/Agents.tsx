'use client'

import { motion } from 'framer-motion'
import AgentCard from './AgentCard'
import { agents } from '@/lib/properties'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Agents() {
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
            El equipo
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl text-text-primary mb-4 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Un agente dedicado.
            <br />
            <em style={{ fontStyle: 'italic' }}>Un número. Siempre.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary text-base mb-16 max-w-lg">
            Cada cliente trabaja con un especialista de su zona. Sin centralitas, sin bots.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <motion.div key={agent.id} variants={fadeUp}>
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
