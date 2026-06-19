import { cn } from '../../utils/cn'

type Align = 'left' | 'center'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: Align
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = true,
  className,
}: SectionHeadingProps) {
  const center = align === 'center'

  return (
    <div className={cn(center ? 'text-center' : '', className)}>
      {eyebrow && (
        <span
          className={cn(
            'font-mono text-[10px] uppercase tracking-[0.22em] mb-4 block',
            light ? 'text-gold/70' : 'text-muted-dark'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display uppercase leading-none tracking-tight',
          'text-[clamp(32px,5vw,56px)]',
          light ? 'text-cream' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'font-body text-lg mt-4 leading-relaxed',
            center ? 'mx-auto max-w-xl' : 'max-w-xl',
            light ? 'text-muted' : 'text-muted-dark'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
