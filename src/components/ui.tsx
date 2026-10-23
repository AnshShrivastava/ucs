import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { BookOpen, Palette, Heart, Compass, MapPin } from 'lucide-react'
import { school } from '../config/school'

const icons = { book: BookOpen, palette: Palette, heart: Heart, compass: Compass }
export const ThemeIcon = ({ name }: { name: keyof typeof icons }) => { const I = icons[name]; return <I aria-hidden className="h-6 w-6" /> }

const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors'
const styles = {
  primary: `${base} bg-gold text-navy hover:bg-amber-400`,
  dark: `${base} bg-navy text-white hover:bg-navy-soft`,
  ghost: `${base} border-2 border-navy/25 text-navy hover:bg-white`,
  light: `${base} border-2 border-white/60 text-white hover:bg-white/10`,
}
export function Btn({ to, href, variant = 'primary', children }: { to?: string; href?: string; variant?: keyof typeof styles; children: ReactNode }) {
  if (to) return <Link to={to} className={styles[variant]}>{children}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer" className={styles[variant]}>{children}</a>
}

export const Section = ({ children, tone = 'plain', className = '' }: { children: ReactNode; tone?: 'plain' | 'sky' | 'navy'; className?: string }) => (
  <section className={`py-16 md:py-24 ${tone === 'sky' ? 'bg-sky/60' : tone === 'navy' ? 'bg-navy text-white' : ''} ${className}`}>
    <div className="mx-auto max-w-6xl px-5">{children}</div>
  </section>
)

export const PageHero = ({ title, intro }: { title: string; intro: string }) => (
  <div className="bg-sky/70"><div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-5xl">{title}</h1>
    <p className="mt-4 max-w-2xl text-lg text-ink/80">{intro}</p>
  </div></div>
)

/** Illustrated placeholder. Replace with <img src=... alt=...> once real school photos exist. */
export function Photo({ alt, hue = 0, className = '' }: { alt: string; hue?: number; className?: string }) {
  const c = [['#dcecfa', '#5fa8e0', '#f5b82e'], ['#fff1cf', '#f5b82e', '#14284b'], ['#e3f1e6', '#7bbf8e', '#14284b']][hue % 3]
  return (
    <svg role="img" aria-label={alt} viewBox="0 0 400 300" className={`w-full rounded-3xl ${className}`} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill={c[0]} />
      <circle cx="320" cy="70" r="38" fill={c[2]} />
      <path d="M0 230 Q100 170 200 215 T400 200 V300 H0Z" fill={c[1]} opacity=".55" />
      <rect x="110" y="120" width="180" height="110" rx="10" fill="#fff" />
      <path d="M100 124 200 70 300 124Z" fill="#14284b" />
      <rect x="185" y="170" width="30" height="60" rx="4" fill={c[1]} />
      <rect x="130" y="145" width="35" height="30" rx="4" fill={c[0]} /><rect x="235" y="145" width="35" height="30" rx="4" fill={c[0]} />
    </svg>
  )
}

export const MapCard = () => (
  <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10">
    {school.mapEmbedUrl && <iframe title={`Map showing ${school.name}`} src={school.mapEmbedUrl} loading="lazy" className="mb-5 h-72 w-full rounded-2xl border-0" />}
    <div className="flex items-start gap-3"><MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-navy" />
      <div><p className="font-semibold text-navy">{school.name}</p><p className="text-ink/80">{school.address}</p></div></div>
    <div className="mt-5"><Btn href={school.mapsUrl} variant="dark">Get directions</Btn></div>
  </div>
)

export const Pending = ({ what }: { what: string }) => (
  <p className="rounded-2xl border-2 border-dashed border-navy/25 bg-white/60 p-5 text-ink/70">{what} will be published here once confirmed by the school.</p>
)
