import { cn } from '../../utils/cn'

type Variant = 'gold' | 'outline' | 'muted' | 'coral' | 'cream'

interface BadgeProps {
  label: string
  variant?: Variant
  className?: string
}

const variantMap: Record<Variant, string> = {
  gold:    'bg-gold/15 text-gold border border-gold/30',
  outline: 'bg-transparent text-cream/70 border border-cream/25',
  muted:   'bg-surface text-muted border border-surface-2',
  coral:   'bg-coral/15 text-coral border border-coral/30',
  cream:   'bg-cream/10 text-cream border border-cream/20',
}

export default function Badge({ label, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full',
        variantMap[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
