'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bed, Bath, Square, MapPin } from 'lucide-react'
import type { Property } from '@/lib/properties'

const badgeStyles: Record<string, string> = {
  EXCLUSIVO:       'bg-gold text-black',
  NUEVO:           'bg-white text-black',
  'PRECIO REDUCIDO': 'bg-bg-elevated text-text-secondary border border-border',
}

function formatPrice(price: number, currency: string) {
  if (currency === 'UF') {
    return `UF ${price.toLocaleString('es-CL')}`
  }
  return `$${(price / 1_000_000).toFixed(1)}M`
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/propiedades/${property.id}`} className="group block">
      <div className="rounded-2xl overflow-hidden bg-bg-secondary border border-border hover:border-border-gold transition-colors duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badge */}
          {property.badge && (
            <div className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-semibold tracking-wider ${badgeStyles[property.badge]}`}>
              {property.badge}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full">
              Ver propiedad
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-text-primary font-bold text-xl leading-tight">
              {formatPrice(property.price, property.currency)}
            </p>
            <span className="text-text-muted text-xs uppercase tracking-wider mt-1 shrink-0">
              {property.type}
            </span>
          </div>

          <h3 className="text-text-secondary text-sm leading-snug mb-3 line-clamp-2">
            {property.title}
          </h3>

          <div className="flex items-center gap-1 text-text-muted text-xs mb-4">
            <MapPin size={11} />
            <span>{property.zone}, {property.commune}</span>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 text-text-secondary text-xs border-t border-border pt-4">
            <span className="flex items-center gap-1">
              <Square size={12} />
              {property.m2} m²
            </span>
            <span className="flex items-center gap-1">
              <Bed size={12} />
              {property.bedrooms} hab.
            </span>
            <span className="flex items-center gap-1">
              <Bath size={12} />
              {property.bathrooms} baños
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
