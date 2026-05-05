import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { properties } from '@/lib/properties'
import { Bed, Bath, Square, MapPin, ArrowLeft, MessageCircle, Phone } from 'lucide-react'

function formatPrice(price: number, currency: string) {
  if (currency === 'UF') return `UF ${price.toLocaleString('es-CL')}`
  return `$${(price / 1_000_000).toFixed(1)}M CLP`
}

export function generateStaticParams() {
  return properties.map(p => ({ id: p.id }))
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id)
  if (!property) notFound()

  const related = properties.filter(p => p.commune === property.commune && p.id !== property.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="bg-bg-primary border-b border-border">
        <Nav />
      </div>

      <div className="max-w-content mx-auto px-6 py-12">
        {/* Back */}
        <Link href="/propiedades" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-8 transition-colors">
          <ArrowLeft size={14} />
          Volver a propiedades
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left — images + info */}
          <div className="lg:col-span-2">
            {/* Main image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              {property.badge && (
                <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${
                  property.badge === 'EXCLUSIVO' ? 'bg-gold text-black' : 'bg-white text-black'
                }`}>
                  {property.badge}
                </div>
              )}
            </div>

            {/* Details */}
            <h1
              className="text-3xl md:text-4xl text-text-primary mb-3 leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-text-secondary text-sm mb-6">
              <MapPin size={14} />
              <span>{property.zone}, {property.commune}</span>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Square, value: `${property.m2} m²`, label: 'm² construidos' },
                { icon: Bed, value: `${property.bedrooms} dorm.`, label: 'Dormitorios' },
                { icon: Bath, value: `${property.bathrooms} baños`, label: 'Baños' },
              ].map(spec => {
                const Icon = spec.icon
                return (
                  <div key={spec.label} className="bg-bg-secondary border border-border rounded-xl p-4 flex flex-col gap-2">
                    <Icon size={18} className="text-gold" />
                    <p className="text-text-primary font-semibold text-lg">{spec.value}</p>
                    <p className="text-text-muted text-xs">{spec.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary leading-relaxed">
                Propiedad {property.type.toLowerCase()} ubicada en {property.zone}, {property.commune}.
                {property.m2} m² construidos, {property.bedrooms} dormitorios y {property.bathrooms} baños.
                Acceso a través de Unne — especialistas en el sector oriente de Santiago.
              </p>
            </div>
          </div>

          {/* Right — sticky contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-bg-secondary border border-border rounded-2xl p-6">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Precio de venta</p>
              <p
                className="text-4xl font-bold text-text-primary mb-6"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {formatPrice(property.price, property.currency)}
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/56932924867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold text-black font-semibold py-3 rounded-xl hover:bg-accent-muted transition-colors"
                >
                  <MessageCircle size={17} />
                  Quiero ver esta propiedad
                </a>
                <a
                  href="tel:+5626465 3732"
                  className="flex items-center justify-center gap-2 border border-border text-text-primary py-3 rounded-xl hover:border-gold transition-colors text-sm"
                >
                  <Phone size={16} />
                  Llamar al +562 6465 3732
                </a>
              </div>

              <p className="text-text-muted text-xs text-center mt-4">
                Respuesta en menos de 2 horas · Consulta sin costo
              </p>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2
              className="text-2xl text-text-primary mb-8"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              También en {property.commune}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.id} href={`/propiedades/${p.id}`} className="group block bg-bg-secondary border border-border rounded-2xl overflow-hidden hover:border-border-gold transition-colors">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-text-primary font-bold">{formatPrice(p.price, p.currency)}</p>
                    <p className="text-text-secondary text-sm mt-1 line-clamp-1">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <WhatsAppFloat />
    </div>
  )
}
