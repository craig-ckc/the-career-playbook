import { cn } from '../../utils/cn'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const variantMap: Record<Variant, string> = {
  primary: 'bg-gold text-charcoal hover:bg-cream border border-gold',
  outline: 'bg-cream/8 text-cream border border-cream/35 hover:border-gold hover:bg-gold/12',
  ghost:   'bg-transparent text-cream hover:text-gold border border-transparent',
  dark:    'bg-charcoal text-cream hover:bg-surface border border-charcoal',
}

const sizeMap: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-sm',
  lg:  'px-7 py-3.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 font-body font-bold tracking-tight transition-all duration-200 rounded-[5px] cursor-pointer select-none',
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
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
