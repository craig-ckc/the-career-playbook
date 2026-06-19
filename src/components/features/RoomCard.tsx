import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import type { Room } from '../../types/content'
import Badge from '../ui/Badge'

interface RoomCardProps {
  room: Room
  variant?: 'preview' | 'full'
}

export default function RoomCard({ room, variant = 'preview' }: RoomCardProps) {
  return (
    <Link
      to={`/rooms/${room.slug}`}
      className={cn(
        'group relative overflow-hidden flex flex-col',
        'bg-surface border border-cream/5 hover:border-gold/25',
        'transition-all duration-300 hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold'
      )}
    >
      {/* Large decorative room number */}
      <span
        aria-hidden="true"
        className="absolute top-3 right-4 font-display text-[80px] leading-none text-gold/10 select-none pointer-events-none group-hover:text-gold/20 transition-colors duration-300"
      >
        {String(room.number).padStart(2, '0')}
      </span>

      <div className="p-6 lg:p-7 flex flex-col flex-1">
        <Badge label={room.track} variant="gold" className="self-start" />

        <h3 className="font-display uppercase text-[clamp(18px,2.5vw,22px)] leading-tight text-cream mt-4 group-hover:text-gold transition-colors duration-200">
          {room.title}
        </h3>

        <p className="font-body text-sm text-muted mt-2 leading-relaxed">
          {room.tagline}
        </p>

        {variant === 'full' && (
          <ul className="mt-4 space-y-1.5">
            {room.themes.slice(0, 3).map(theme => (
              <li key={theme} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-gold/50 mt-0.5 shrink-0">—</span>
                <span>{theme}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold/50">
            {room.journeyLabel}
          </span>
          <span className="text-muted group-hover:text-gold transition-colors duration-200 text-sm">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
