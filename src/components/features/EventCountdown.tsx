import event from '../../content/event.json'
import Countdown from './Countdown'

interface EventCountdownProps {
  title?: string
  subtitle?: string
}

export default function EventCountdown({
  title,
  subtitle,
}: EventCountdownProps) {
  return (
    <section className="bg-gold py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/60 block mb-4">
          Event Countdown
        </span>

        <h2
          className="font-display uppercase text-charcoal leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(44px, 8vw, 84px)' }}
        >
          {title ?? event.dateShort}
        </h2>

        <p className="font-mono text-xs uppercase tracking-[0.16em] text-charcoal/70 mt-4">
          {event.venue} · {event.time}
        </p>

        <div className="mt-10">
          <Countdown />
        </div>

        <p className="font-body text-sm text-charcoal/65 mt-8 max-w-md mx-auto leading-relaxed">
          {subtitle ?? 'A career masterclass for students, graduates, young professionals, and emerging leaders.'}
        </p>
      </div>
    </section>
  )
}
