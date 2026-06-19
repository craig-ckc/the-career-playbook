import { cn } from '../../utils/cn'

type Variant = 'gold' | 'outline' | 'muted' | 'coral' | 'cream'

interface BadgeProps {
  label: string
  variant?: Variant
  className?: string
}

const variantMap: Record<Variant, string> = {
  gold:    'bg-gold text-charcoal border border-gold',
  outline: 'bg-cream/10 text-cream border border-cream/25',
  muted:   'bg-charcoal/8 text-charcoal/75 border border-charcoal/10',
  coral:   'bg-coral/16 text-coral border border-coral/30',
  cream:   'bg-cream text-charcoal border border-cream',
}

export default function Badge({ label, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs uppercase tracking-[0.14em] px-2.5 py-1 rounded-[3px]',
        variantMap[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
