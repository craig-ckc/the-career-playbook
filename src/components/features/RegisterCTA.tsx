import event from '../../content/event.json'
import Button from '../ui/Button'
import Countdown from './Countdown'

interface RegisterCTAProps {
  title?: string
  subtitle?: string
}

export default function RegisterCTA({
  title,
  subtitle,
}: RegisterCTAProps) {
  return (
    <section id="register" className="bg-gold py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/60 block mb-4">
          Save Your Seat
        </span>

        <h2
          className="font-display uppercase text-charcoal leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(44px, 8vw, 84px)' }}
        >
          {title ?? event.dateShort}
        </h2>

        <p className="font-mono text-xs uppercase tracking-[0.16em] text-charcoal/70 mt-4">
          {event.venue} · {event.time} · {event.priceDisplay}
        </p>

        <div className="mt-10">
          <Countdown />
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="dark" size="lg" href={event.registrationUrl} className="w-full sm:w-auto justify-center">
            Register Now →
          </Button>
        </div>

        <p className="font-body text-sm text-charcoal/65 mt-6 max-w-md mx-auto leading-relaxed">
          {subtitle ?? 'A career masterclass for students, graduates, young professionals, and emerging leaders.'}
        </p>
      </div>
    </section>
  )
}
