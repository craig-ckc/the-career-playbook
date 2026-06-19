import event from '../../content/event.json'
import Button from '../ui/Button'

interface RegisterCTAProps {
  title?: string
  subtitle?: string
}

export default function RegisterCTA({
  title,
  subtitle,
}: RegisterCTAProps) {
  return (
    <section id="register" className="bg-gold py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal/50 block mb-4">
          Save Your Seat
        </span>

        <h2
          className="font-display uppercase text-charcoal leading-none tracking-tight"
          style={{ fontSize: 'clamp(48px, 9vw, 96px)' }}
        >
          {title ?? event.dateShort}
        </h2>

        <p className="font-display uppercase text-charcoal/60 mt-3"
          style={{ fontSize: 'clamp(16px, 2.5vw, 24px)' }}>
          {event.venue} · {event.time} · {event.priceDisplay}
        </p>

        <div className="mt-8">
          <Button variant="dark" size="lg" href={event.registrationUrl}>
            Register Now →
          </Button>
        </div>

        <p className="font-body text-sm text-charcoal/50 mt-6 max-w-md mx-auto leading-relaxed">
          {subtitle ?? 'A career masterclass for students, graduates, young professionals, and emerging leaders.'}
        </p>
      </div>
    </section>
  )
}
