import { cn } from '../../utils/cn'

type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface ContainerProps {
  maxWidth?: MaxWidth
  className?: string
  children: React.ReactNode
}

const maxWidthMap: Record<MaxWidth, string> = {
  sm:   'max-w-2xl',
  md:   'max-w-4xl',
  lg:   'max-w-6xl',
  xl:   'max-w-7xl',
  full: 'max-w-full',
}

export default function Container({
  maxWidth = 'lg',
  className,
  children,
}: ContainerProps) {
  return (
    <div className={cn('mx-auto px-6 lg:px-8', maxWidthMap[maxWidth], className)}>
      {children}
    </div>
  )
}
