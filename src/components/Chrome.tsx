import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { school } from '../config/school'
import { Btn } from './ui'

const links = [['/', 'Home'], ['/about', 'About Us'], ['/academics', 'Academics'], ['/vision-mission', 'Vision & Mission'], ['/admissions', 'Admissions'], ['/contact', 'Contact']]

export const Wordmark = ({ light = false }: { light?: boolean }) => school.logoPath
  ? <img src={school.logoPath} alt={school.name} className="h-10" />
  : <span className={`flex items-center gap-2 text-lg font-bold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
      <span aria-hidden className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-gold ring-1 ring-gold/40">U</span>{school.name}</span>

export function Header() {
  const [open, setOpen] = useState(false)
  const item = ({ isActive }: { isActive: boolean }) => `rounded-full px-3 py-2 text-sm font-medium ${isActive ? 'bg-sky text-navy' : 'text-ink/80 hover:text-navy'}`
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" aria-label={`${school.name} home`}><Wordmark /></Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map(([to, t]) => <NavLink key={to} to={to} end className={item}>{t}</NavLink>)}
        </nav>
        <div className="hidden lg:block"><Btn to="/contact" variant="dark">Enquire now</Btn></div>
        <button className="rounded-lg p-2 text-navy lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-navy/10 px-5 pb-5 pt-3 lg:hidden">
          {links.map(([to, t]) => <NavLink key={to} to={to} end className={item} onClick={() => setOpen(false)}>{t}</NavLink>)}
          <div className="pt-3"><Btn to="/contact" variant="dark">Enquire now</Btn></div>
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div><Wordmark light /><p className="mt-4 max-w-xs text-sm">{school.tagline}</p></div>
        <nav aria-label="Footer"><p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">{links.map(([to, t]) => <li key={to}><Link className="hover:text-gold" to={to}>{t}</Link></li>)}</ul></nav>
        <div className="space-y-3 text-sm"><p className="font-semibold text-white">Contact</p>
          <p className="flex gap-2"><MapPin aria-hidden className="h-4 w-4 shrink-0 translate-y-0.5" />{school.address}</p>
          {school.phone && <p className="flex gap-2"><Phone aria-hidden className="h-4 w-4 shrink-0 translate-y-0.5" /><a href={`tel:${school.phone.replace(/\s/g, '')}`}>{school.phone}</a></p>}
          {school.email && <p className="flex gap-2"><Mail aria-hidden className="h-4 w-4 shrink-0 translate-y-0.5" /><a href={`mailto:${school.email}`}>{school.email}</a></p>}
          <a className="inline-block underline hover:text-gold" href={school.mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
    </footer>
  )
}
