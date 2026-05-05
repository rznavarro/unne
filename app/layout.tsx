import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unne | Propiedades Premium en Santiago',
  description: 'Las mejores propiedades en Las Condes, Vitacura, Lo Barnechea y Providencia. Más de 3,400 propiedades. Oficina en Las Condes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
