import Nav from '@/components/Nav'
import Image from 'next/image'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import AgentCard from '@/components/AgentCard'
import { agents } from '@/lib/properties'

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="bg-bg-primary border-b border-border">
        <Nav />
      </div>

      {/* Hero nosotros */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920"
          alt="Unne oficina Las Condes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-end px-6 md:px-16 pb-12">
          <div className="max-w-content mx-auto w-full">
            <p className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">Quiénes somos</p>
            <h1
              className="text-4xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Desde 2010, vendiendo{' '}
              <em style={{ fontStyle: 'italic' }}>el sector oriente</em>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 py-20">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              Unne nació en 2010 con una convicción: el sector oriente de Santiago merecía
              una corredora que lo conociera de verdad. Desde entonces hemos ayudado a más
              de 2,800 familias a comprar, vender e invertir en Las Condes, Vitacura,
              Lo Barnechea y Providencia, acumulando más de 1.2B UF en transacciones.
            </p>
            <p className="text-text-secondary leading-relaxed">
              No trabajamos en toda la ciudad. Solo en el sector oriente.
              Y eso hace toda la diferencia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '2010', label: 'Año de fundación' },
              { value: '3,441', label: 'Propiedades activas' },
              { value: '2,800+', label: 'Familias asesoradas' },
              { value: '4.9★', label: 'Valoración promedio' },
            ].map(s => (
              <div key={s.label} className="bg-bg-secondary border border-border rounded-xl p-5">
                <p
                  className="text-gold text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {s.value}
                </p>
                <p className="text-text-secondary text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-6">
          <p className="text-gold text-xs uppercase tracking-widest mb-3 font-medium">El equipo</p>
          <h2
            className="text-3xl md:text-4xl text-text-primary mb-12"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Especialistas, no generalistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map(agent => <AgentCard key={agent.id} agent={agent} />)}
          </div>
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
