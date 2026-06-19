import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import type { JourneyStep } from '../../types/content'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface JourneyArcProps {
  steps: JourneyStep[]
}

export default function JourneyArc({ steps }: JourneyArcProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
        isVisible ? 'animate-fade-up' : 'opacity-0'
      )}
    >
      {steps.map((step, i) => (
        <Link
          key={step.id}
          to={`/rooms/${step.roomSlug}`}
          className={cn(
            'group relative p-5 lg:p-6 rounded-md',
            'border border-cream/8 bg-cream/5 hover:border-gold/40 hover:bg-cream/8',
            'transition-all duration-300 hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gold'
          )}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span className="font-mono text-xs text-gold/60 block mb-2">
            0{i + 1}
          </span>
          <span className="font-display uppercase text-[clamp(20px,2.6vw,26px)] leading-tight text-cream group-hover:text-gold transition-colors duration-200 block">
            {step.label}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-gold/70 mt-3 block">
            {step.track}
          </span>
          <p className="font-body text-sm text-muted/80 mt-3 leading-relaxed hidden lg:block">
            {step.description}
          </p>
        </Link>
      ))}
    </div>
  )
}
