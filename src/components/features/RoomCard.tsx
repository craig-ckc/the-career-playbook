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
        'group relative overflow-hidden flex flex-col rounded-md',
        'bg-surface border border-cream/8 hover:border-gold/35',
        'transition-all duration-300 hover:-translate-y-0.5 shadow-[0_14px_34px_rgba(0,0,0,0.16)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold'
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-gold/70 origin-left scale-x-100 group-hover:bg-gold transition-colors duration-300"
      />
      {/* Large decorative room number */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-5 font-display text-[68px] leading-none text-cream/[0.06] select-none pointer-events-none group-hover:text-gold/15 transition-colors duration-300"
      >
        {String(room.number).padStart(2, '0')}
      </span>

      <div className="p-6 lg:p-7 flex flex-col flex-1">
        <Badge label={room.track} variant="gold" className="self-start" />

        <h3 className="font-display uppercase text-[clamp(20px,2.2vw,25px)] leading-tight text-cream mt-5 group-hover:text-gold transition-colors duration-200">
          {room.title}
        </h3>

        <p className="font-body text-sm text-muted mt-3 leading-relaxed">
          {room.tagline}
        </p>

        {variant === 'full' && (
          <ul className="mt-4 space-y-1.5">
            {room.themes.slice(0, 3).map(theme => (
              <li key={theme} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-gold/60 mt-0.5 shrink-0">—</span>
                <span>{theme}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/70">
            {room.journeyLabel}
          </span>
          <span className="font-body text-sm font-bold text-cream group-hover:text-gold transition-colors duration-200">
            View room →
          </span>
        </div>
      </div>
    </Link>
  )
}
