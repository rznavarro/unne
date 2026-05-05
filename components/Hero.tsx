'use client'

import { useRef, useEffect } from 'react'
import { MapPin, Search } from 'lucide-react'
import Nav from './Nav'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadingOutRef = useRef(false)
  const animFrameRef = useRef<number>(0)

  const fadeVideo = (target: number, duration: number, onDone?: () => void) => {
    cancelAnimationFrame(animFrameRef.current)
    const video = videoRef.current
    if (!video) return
    const start = performance.now()
    const from = video.style.opacity === '' ? 0 : parseFloat(video.style.opacity || '0')

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      video.style.opacity = String(from + (target - from) * t)
      if (t < 1) { animFrameRef.current = requestAnimationFrame(tick) }
      else { onDone?.() }
    }
    animFrameRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      video.style.opacity = '0'
      video.play()
      fadeVideo(1, 500)
    }

    const handleTimeUpdate = () => {
      if (!video || fadingOutRef.current) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55) {
        fadingOutRef.current = true
        fadeVideo(0, 500)
      }
    }

    const handleEnded = () => {
      if (!video) return
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play()
        fadingOutRef.current = false
        fadeVideo(1, 500)
      }, 100)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920"
        muted
        playsInline
        loop={false}
        poster="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920"
        style={{ opacity: 0 }}
      />

      {/* Overlay cinematic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

      {/* Nav */}
      <div className="relative z-30">
        <Nav />
      </div>

      {/* Hero content */}
      <div
        className="relative z-20 flex flex-col items-start justify-center min-h-screen px-6 md:px-16 lg:px-24 -translate-y-[8%]"
        style={{ paddingTop: '96px' }}
      >
        <div className="max-w-content mx-auto w-full">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={14} className="text-gold" />
            <span className="text-text-secondary text-sm tracking-widest uppercase font-medium">
              Las Condes · Vitacura · Lo Barnechea · Providencia
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-[80px] text-text-primary mb-6 leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Propiedades que{' '}
            <em className="not-italic" style={{ fontStyle: 'italic' }}>no verás</em>
            {' '}en ningún portal
          </h1>

          {/* Subheadline */}
          <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Acceso exclusivo a propiedades off-market en el sector oriente de Santiago.
            Más de 3,400 propiedades. Oficina en Las Condes.
          </p>

          {/* Search bar — liquid glass */}
          <div className="liquid-glass rounded-2xl p-2 w-full max-w-3xl">
            <div className="flex flex-col md:flex-row gap-2">
              <select className="flex-1 min-w-0 bg-transparent text-text-primary text-sm px-4 py-3 outline-none cursor-pointer appearance-none">
                <option value="" className="bg-bg-primary">Tipo</option>
                <option value="casa" className="bg-bg-primary">Casa</option>
                <option value="departamento" className="bg-bg-primary">Departamento</option>
                <option value="parcela" className="bg-bg-primary">Parcela</option>
                <option value="oficina" className="bg-bg-primary">Oficina</option>
              </select>
              <div className="w-px bg-white/10 hidden md:block shrink-0" />
              <select className="flex-1 min-w-0 bg-transparent text-text-primary text-sm px-4 py-3 outline-none cursor-pointer appearance-none">
                <option value="" className="bg-bg-primary">Zona</option>
                <option value="las-condes" className="bg-bg-primary">Las Condes</option>
                <option value="vitacura" className="bg-bg-primary">Vitacura</option>
                <option value="lo-barnechea" className="bg-bg-primary">Lo Barnechea</option>
                <option value="providencia" className="bg-bg-primary">Providencia</option>
                <option value="la-reina" className="bg-bg-primary">La Reina</option>
              </select>
              <div className="w-px bg-white/10 hidden md:block shrink-0" />
              <select className="flex-1 min-w-0 bg-transparent text-text-primary text-sm px-4 py-3 outline-none cursor-pointer appearance-none">
                <option value="" className="bg-bg-primary">Presupuesto</option>
                <option value="0-3000" className="bg-bg-primary">Hasta UF 3,000</option>
                <option value="3000-6000" className="bg-bg-primary">UF 3,000 – 6,000</option>
                <option value="6000-10000" className="bg-bg-primary">UF 6,000 – 10,000</option>
                <option value="10000+" className="bg-bg-primary">UF 10,000+</option>
              </select>
              <button className="flex items-center justify-center gap-2 bg-gold text-black font-semibold text-sm px-5 py-3 rounded-xl hover:bg-accent-muted transition-colors shrink-0">
                <Search size={16} />
                <span className="hidden lg:inline">Encontrar mi propiedad</span>
                <span className="lg:hidden">Buscar</span>
              </button>
            </div>
          </div>

          {/* Stats inline */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { value: '3,441', label: 'propiedades activas' },
              { value: '14 años', label: 'en el mercado' },
              { value: '4.9★', label: 'valoración' },
            ].map(s => (
              <div key={s.label} className="flex flex-col">
                <span className="text-gold font-semibold text-lg">{s.value}</span>
                <span className="text-text-muted text-xs uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
      </div>
    </div>
  )
}
