import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'Rooms',      to: '/rooms' },
  { label: 'Programme',  to: '/programme' },
  { label: 'Speakers',   to: '/speakers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-ground/90 backdrop-blur-md border-b border-cream/10 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)]'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display uppercase text-cream text-xl leading-none tracking-tight hover:text-gold transition-colors"
          >
            The Career<br />
            <span className="text-gold">Playbook</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'font-body text-sm font-bold transition-colors duration-200',
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-cream/70 hover:text-cream'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="/register">
              Register — R100
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={cn('block w-6 h-0.5 bg-cream transition-all duration-200', menuOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-6 h-0.5 bg-cream transition-all duration-200', menuOpen && 'opacity-0')} />
            <span className={cn('block w-6 h-0.5 bg-cream transition-all duration-200', menuOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 sunburst-panel flex flex-col pt-24 px-8 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'font-display uppercase text-[clamp(36px,8vw,56px)] leading-tight transition-colors',
                  location.pathname === link.to ? 'text-gold' : 'text-cream hover:text-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/register">
              Register — R100
            </Button>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mt-auto mb-8">
            27 June 2026 · Grace Place Church
          </p>
        </div>
      )}
    </>
  )
}
