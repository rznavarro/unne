import Image from 'next/image'
import { MessageCircle, Star } from 'lucide-react'
import type { Agent } from '@/lib/properties'

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="bg-bg-secondary border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-border-gold transition-colors duration-300 group">
      {/* Photo */}
      <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border shrink-0">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="64px"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-text-primary font-semibold text-base mb-0.5">{agent.name}</h3>
        <p className="text-gold text-xs font-medium mb-1">{agent.specialty}</p>
        <p className="text-text-muted text-xs mb-3">
          {agent.properties} propiedades · {agent.years} años
        </p>
        <p className="text-text-secondary text-sm leading-relaxed italic">
          "{agent.bio}"
        </p>
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/${agent.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-sm font-medium py-2.5 rounded-xl transition-colors"
      >
        <MessageCircle size={15} />
        WhatsApp directo
      </a>
    </div>
  )
}
