'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import AgentCard from '@/components/AgentCard'
import { agents } from '@/lib/properties'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', whatsapp: '', busca: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hola, soy ${form.nombre}. ${form.busca}`
    )
    window.open(`https://wa.me/56932924867?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="bg-bg-primary border-b border-border">
        <Nav />
      </div>

      <div className="max-w-content mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Info */}
          <div>
            <p className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">Contacto</p>
            <h1
              className="text-4xl md:text-5xl text-text-primary mb-6 leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Hablemos.{' '}
              <em style={{ fontStyle: 'italic' }}>Sin compromiso.</em>
            </h1>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Respuesta en menos de 2 horas. Consulta sin costo.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, label: 'Oficina', value: 'Asturias 171, of. 206, Las Condes' },
                { icon: Phone,  label: 'Teléfono', value: '+562 6465 3732' },
                { icon: Mail,   label: 'Email', value: 'contacto@unne.cl' },
                { icon: Clock,  label: 'Horario', value: 'Lun–Vie 9:00–19:00 · Sáb 10:00–14:00' },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg border border-border-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-text-primary text-sm">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-bg-secondary border border-border rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h3
                  className="text-2xl text-text-primary"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-text-secondary text-sm">
                  Te responderemos en menos de 2 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2
                  className="text-2xl text-text-primary mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Cuéntanos qué buscas
                </h2>

                <div>
                  <label className="text-text-muted text-xs uppercase tracking-wider block mb-2">
                    ¿Cómo te llamas?
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                    className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-text-muted text-xs uppercase tracking-wider block mb-2">
                    Tu WhatsApp (te respondemos en 2h)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+569..."
                    value={form.whatsapp}
                    onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                    className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-text-muted text-xs uppercase tracking-wider block mb-2">
                    ¿Qué estás buscando?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ej: Casa en Lo Barnechea, presupuesto UF 8,000, 4 dormitorios..."
                    value={form.busca}
                    onChange={e => setForm(f => ({ ...f, busca: e.target.value }))}
                    className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-black font-semibold py-3.5 rounded-xl hover:bg-accent-muted transition-colors text-sm"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Agents */}
        <div>
          <h2
            className="text-2xl md:text-3xl text-text-primary mb-8"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            O habla directo con un especialista
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map(a => <AgentCard key={a.id} agent={a} />)}
          </div>
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
