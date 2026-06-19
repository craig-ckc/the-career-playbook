import { cn } from '../../utils/cn'

type Variant = 'dark' | 'cream' | 'gold' | 'surface'
type Py = 'sm' | 'md' | 'lg' | 'xl' | 'none'

interface SectionProps {
  id?: string
  variant?: Variant
  py?: Py
  className?: string
  children: React.ReactNode
}

const variantMap: Record<Variant, string> = {
  dark:    'bg-ground text-cream',
  cream:   'bg-cream text-charcoal',
  gold:    'bg-gold text-charcoal',
  surface: 'bg-surface text-cream',
}

const pyMap: Record<Py, string> = {
  sm:   'py-12 lg:py-16',
  md:   'py-16 lg:py-24',
  lg:   'py-24 lg:py-32',
  xl:   'py-32 lg:py-40',
  none: '',
}

export default function Section({
  id,
  variant = 'dark',
  py = 'lg',
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(variantMap[variant], pyMap[py], className)}
    >
      {children}
    </section>
  )
}
