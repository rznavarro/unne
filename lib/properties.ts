export type Property = {
  id: string
  title: string
  type: 'Casa' | 'Departamento' | 'Parcela' | 'Oficina'
  zone: string
  commune: string
  price: number
  currency: 'UF' | 'CLP'
  m2: number
  bedrooms: number
  bathrooms: number
  badge?: 'NUEVO' | 'EXCLUSIVO' | 'PRECIO REDUCIDO'
  image: string
  featured: boolean
}

export type Agent = {
  id: string
  name: string
  specialty: string
  zone: string
  properties: number
  years: number
  bio: string
  image: string
  whatsapp: string
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Ático con terraza · Vistas a la cordillera',
    type: 'Departamento',
    zone: 'El Golf',
    commune: 'Las Condes',
    price: 13990,
    currency: 'UF',
    m2: 163,
    bedrooms: 3,
    bathrooms: 2,
    badge: 'EXCLUSIVO',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
    featured: true,
  },
  {
    id: '2',
    title: 'Villa privada con piscina · Parcela 1,200m²',
    type: 'Casa',
    zone: 'La Dehesa',
    commune: 'Lo Barnechea',
    price: 9850,
    currency: 'UF',
    m2: 380,
    bedrooms: 5,
    bathrooms: 4,
    badge: 'EXCLUSIVO',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    featured: true,
  },
  {
    id: '3',
    title: 'Penthouse · Terraza panorámica · Entrega inmediata',
    type: 'Departamento',
    zone: 'Vitacura',
    commune: 'Vitacura',
    price: 11200,
    currency: 'UF',
    m2: 210,
    bedrooms: 4,
    bathrooms: 3,
    badge: 'NUEVO',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    featured: true,
  },
  {
    id: '4',
    title: 'Casa moderna · Jardín privado · Condominio seguridad 24h',
    type: 'Casa',
    zone: 'Chicureo',
    commune: 'Colina',
    price: 6586,
    currency: 'UF',
    m2: 220,
    bedrooms: 4,
    bathrooms: 3,
    badge: 'NUEVO',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    featured: true,
  },
  {
    id: '5',
    title: 'Departamento luminoso · 2 habitaciones · Parking incluido',
    type: 'Departamento',
    zone: 'Manuel Montt',
    commune: 'Providencia',
    price: 4200,
    currency: 'UF',
    m2: 78,
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    featured: true,
  },
  {
    id: '6',
    title: 'Casa en condominio · Amplio jardín · Sala de estar doble',
    type: 'Casa',
    zone: 'La Reina',
    commune: 'La Reina',
    price: 5800,
    currency: 'UF',
    m2: 195,
    bedrooms: 4,
    bathrooms: 3,
    badge: 'PRECIO REDUCIDO',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    featured: true,
  },
]

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Valentina Morales',
    specialty: 'Especialista Las Condes & Vitacura',
    zone: 'Oriente de Santiago',
    properties: 214,
    years: 9,
    bio: 'Me especializo en propiedades de alta gama en el sector oriente. Conozco cada edificio y condominio de la zona.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    whatsapp: '56932924867',
  },
  {
    id: '2',
    name: 'Rodrigo Fuentes',
    specialty: 'Especialista Lo Barnechea & La Dehesa',
    zone: 'Lo Barnechea',
    properties: 178,
    years: 12,
    bio: 'Doce años vendiendo exclusivamente en Lo Barnechea. Si existe, yo lo conozco.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    whatsapp: '56932924867',
  },
  {
    id: '3',
    name: 'Catalina Herrera',
    specialty: 'Especialista Providencia & Ñuñoa',
    zone: 'Sector Centro-Oriente',
    properties: 156,
    years: 7,
    bio: 'Departamentos premium y propiedades de inversión en las comunas más demandadas de Santiago.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    whatsapp: '56932924867',
  },
]

export const testimonials = [
  {
    id: '1',
    name: 'Marcelo Sandoval',
    transaction: 'Compró casa en Lo Barnechea',
    text: 'Llevábamos 8 meses buscando en Lo Barnechea sin encontrar nada que se ajustara. Rodrigo nos mostró 4 propiedades en una semana y encontramos exactamente lo que queríamos. Cerramos en 18 días al precio pedido.',
    avatar: 'MS',
  },
  {
    id: '2',
    name: 'Andrea Vidal',
    transaction: 'Vendió departamento en Las Condes',
    text: 'Vendí mi departamento en El Golf en 12 días y al 100% del precio de lista. Valentina conoce a los compradores antes de que lleguen al portal.',
    avatar: 'AV',
  },
  {
    id: '3',
    name: 'Felipe Contreras',
    transaction: 'Compró departamento en Providencia',
    text: 'Catalina me consiguió acceso a una propiedad off-market que nunca llegó a los portales. La compré por debajo del precio de mercado. Imposible lograrlo solo.',
    avatar: 'FC',
  },
]

export const stats = [
  { value: 3441, suffix: '', label: 'Propiedades activas' },
  { value: 14, suffix: '', label: 'Años en el mercado' },
  { value: 4.9, suffix: '★', label: 'Valoración clientes' },
  { value: 1.2, suffix: 'B', label: 'En transacciones UF', prefix: '' },
]
