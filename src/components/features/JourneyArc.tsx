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
        'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
        isVisible ? 'animate-fade-up' : 'opacity-0'
      )}
    >
      {steps.map((step, i) => (
        <Link
          key={step.id}
          to={`/rooms/${step.roomSlug}`}
          className={cn(
            'group relative p-5 lg:p-6',
            'border-t-2 border-cream/10 hover:border-gold',
            'transition-all duration-300',
            'focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gold'
          )}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span className="font-mono text-[10px] text-gold/40 block mb-2">
            0{i + 1}
          </span>
          <span className="font-display uppercase text-[clamp(20px,3vw,28px)] leading-none text-cream group-hover:text-gold transition-colors duration-200 block">
            {step.label}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted mt-2 block">
            {step.track}
          </span>
          <p className="font-body text-xs text-muted/70 mt-2 leading-relaxed hidden lg:block">
            {step.description}
          </p>
        </Link>
      ))}
    </div>
  )
}
