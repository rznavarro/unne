import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import PropertyGrid from '@/components/PropertyGrid'
import Diferenciadores from '@/components/Diferenciadores'
import Testimonials from '@/components/Testimonials'
import Agents from '@/components/Agents'
import CTASection from '@/components/CTASection'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <PropertyGrid />
      <Diferenciadores />
      <Testimonials />
      <Agents />
      <CTASection />
      <WhatsAppFloat />
    </main>
  )
}
