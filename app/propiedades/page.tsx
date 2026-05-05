'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import PropertyCard from '@/components/PropertyCard'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { properties } from '@/lib/properties'
import { SlidersHorizontal } from 'lucide-react'

const zones = ['Todas', 'Las Condes', 'Vitacura', 'Lo Barnechea', 'Providencia', 'La Reina', 'Colina']
const types = ['Todos', 'Casa', 'Departamento', 'Parcela', 'Oficina']

export default function PropiedadesPage() {
  const [activeZone, setActiveZone] = useState('Todas')
  const [activeType, setActiveType] = useState('Todos')
  const [order, setOrder] = useState<'asc' | 'desc'>('desc')

  const filtered = properties
    .filter(p => activeZone === 'Todas' || p.commune === activeZone)
    .filter(p => activeType === 'Todos' || p.type === activeType)
    .sort((a, b) => order === 'desc' ? b.price - a.price : a.price - b.price)

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="bg-bg-primary border-b border-border">
        <Nav />
      </div>

      <div className="max-w-content mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">Catálogo</p>
          <h1
            className="text-4xl md:text-5xl text-text-primary mb-2"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Propiedades en{' '}
            <em style={{ fontStyle: 'italic' }}>Santiago Oriente</em>
          </h1>
          <p className="text-text-secondary">{filtered.length} propiedades encontradas</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Zone filter */}
          <div className="flex gap-2 flex-wrap">
            {zones.map(z => (
              <button
                key={z}
                onClick={() => setActiveZone(z)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeZone === z
                    ? 'bg-gold text-black'
                    : 'border border-border text-text-secondary hover:border-gold hover:text-text-primary'
                }`}
              >
                {z}
              </button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap md:ml-auto">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeType === t
                    ? 'bg-bg-elevated text-text-primary border border-border-gold'
                    : 'border border-border text-text-muted hover:border-border-gold hover:text-text-secondary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Sort */}
          <button
            onClick={() => setOrder(o => o === 'desc' ? 'asc' : 'desc')}
            className="flex items-center gap-2 border border-border px-4 py-2 rounded-full text-sm text-text-secondary hover:border-border-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Precio {order === 'desc' ? '↓' : '↑'}
          </button>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="text-center py-24 text-text-muted">
            No hay propiedades con esos filtros.
          </div>
        )}
      </div>

      <WhatsAppFloat />
    </div>
  )
}
