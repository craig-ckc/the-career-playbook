import { Link } from 'react-router-dom'

const links = [
  { label: 'Home',      to: '/' },
  { label: 'Rooms',     to: '/rooms' },
  { label: 'Programme', to: '/programme' },
  { label: 'Speakers',  to: '/speakers' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-cream/5">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-display uppercase text-cream text-2xl leading-none">
              The Career<br />
              <span className="text-gold">Playbook</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-3">
              The Collective Master Class Sessions
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-sm text-muted hover:text-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-cream/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            27 June 2026 · Grace Place Church · 8:00 AM – 1:00 PM · R100 pp
          </p>
          <p className="font-body text-xs text-muted/60">
            Faith · Purpose · Excellence · Impact
          </p>
        </div>
      </div>
    </footer>
  )
}
