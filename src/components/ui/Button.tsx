import { cn } from '../../utils/cn'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const variantMap: Record<Variant, string> = {
  primary: 'bg-gold text-charcoal hover:bg-gold/90 border border-gold',
  outline: 'bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10',
  ghost:   'bg-transparent text-cream hover:text-gold border border-transparent',
  dark:    'bg-charcoal text-cream hover:bg-charcoal/80 border border-charcoal',
}

const sizeMap: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-base',
  lg:  'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 font-body font-medium transition-all duration-200 rounded-full cursor-pointer select-none',
    variantMap[variant],
    sizeMap[size],
    className
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('#')
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
