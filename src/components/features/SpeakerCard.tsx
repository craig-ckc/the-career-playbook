import { cn } from '../../utils/cn'
import type { Speaker } from '../../types/content'
import Badge from '../ui/Badge'
import rooms from '../../content/rooms.json'

interface SpeakerCardProps {
  speaker: Speaker
  variant?: 'full' | 'compact'
}

export default function SpeakerCard({ speaker, variant = 'full' }: SpeakerCardProps) {
  const room = rooms.find(r => speaker.roomIds.includes(r.id))

  return (
    <article
      className={cn(
        'bg-cream-surface border border-charcoal/8 flex flex-col gap-4',
        variant === 'full' ? 'p-6 lg:p-8' : 'p-5 flex-row items-start'
      )}
    >
      {/* Monogram avatar */}
      <div
        className={cn(
          'shrink-0 rounded-full border-2 border-gold flex items-center justify-center bg-charcoal',
          variant === 'full' ? 'w-14 h-14' : 'w-11 h-11'
        )}
      >
        <span
          className={cn(
            'font-display text-gold leading-none',
            variant === 'full' ? 'text-xl' : 'text-sm'
          )}
        >
          {speaker.initials}
        </span>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        {room && <Badge label={room.track} variant="muted" className="self-start mb-1" />}

        <h3
          className={cn(
            'font-display uppercase text-charcoal leading-tight',
            variant === 'full' ? 'text-2xl' : 'text-lg'
          )}
        >
          {speaker.name}
        </h3>

        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-dark">
          {speaker.title}
        </p>

        {variant === 'full' && (
          <p className="font-body text-sm text-charcoal/70 mt-3 leading-relaxed">
            {speaker.bioFull}
          </p>
        )}
      </div>
    </article>
  )
}
