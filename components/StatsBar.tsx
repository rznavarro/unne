'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 3441, decimals: 0, suffix: '', label: 'Propiedades activas' },
  { value: 14,   decimals: 0, suffix: '+', label: 'Años en el mercado' },
  { value: 4.9,  decimals: 1, suffix: '★', label: 'Valoración clientes' },
  { value: 1.2,  decimals: 1, suffix: 'B UF', label: 'En transacciones' },
]

function useCountUp(target: number, decimals: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setCount(parseFloat((ease * target).toFixed(decimals)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, decimals])

  return count
}

function StatItem({ value, decimals, suffix, label, active }: {
  value: number; decimals: number; suffix: string; label: string; active: boolean
}) {
  const count = useCountUp(value, decimals, active)
  return (
    <div className="flex flex-col items-center text-center">
      <span
        className="text-5xl md:text-6xl font-bold text-gold leading-none mb-2"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString('es-CL')}
        {suffix}
      </span>
      <span className="text-text-secondary text-sm tracking-wide">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-bg-secondary border-y border-border py-16 md:py-20 px-6">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
        {stats.map((s, i) => (
          <div key={i} className="relative">
            <StatItem {...s} active={active} />
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
