'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import UnneLogo from './UnneLogo'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/propiedades', label: 'Propiedades' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="px-6 md:px-8 py-6">
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <UnneLogo width={88} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/56932924867`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
          >
            WhatsApp
          </a>
          <Link
            href="/propiedades"
            className="liquid-glass rounded-full px-5 py-2 text-text-primary text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Ver propiedades
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile slide-in */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-bg-primary flex flex-col items-center justify-center gap-8">
          <div className="absolute top-8 left-8">
            <UnneLogo width={96} />
          </div>
          <button
            className="absolute top-6 right-6 text-text-primary"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-text-primary text-2xl font-medium"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/56932924867`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gold text-black font-semibold px-8 py-3 rounded-full text-base"
          >
            Hablar con un agente
          </a>
        </div>
      )}
    </nav>
  )
}
