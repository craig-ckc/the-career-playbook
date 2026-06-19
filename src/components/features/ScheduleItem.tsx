import { cn } from '../../utils/cn'
import type { ScheduleEntry } from '../../types/content'

interface ScheduleItemProps {
  item: ScheduleEntry
  onLight?: boolean
}

export default function ScheduleItem({ item, onLight = false }: ScheduleItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-8 p-5 mb-3 rounded-md border last:mb-0',
        item.highlight
          ? onLight ? 'border-gold/45 bg-white/60' : 'border-gold/25 bg-gold/8'
          : onLight ? 'border-charcoal/8 bg-white/35' : 'border-cream/8 bg-cream/5',
        item.highlight && 'relative'
      )}
    >
      {/* Time range — fixed column, never wraps */}
      <div className="shrink-0 sm:w-24 font-mono flex items-baseline gap-2 sm:block">
        <span className={cn(
          'block text-sm tracking-wide whitespace-nowrap tabular-nums',
          item.highlight
            ? onLight ? 'text-charcoal' : 'text-cream'
            : onLight ? 'text-muted-dark' : 'text-muted'
        )}>
          {item.timeStart}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={cn(
          'font-display uppercase text-xl leading-tight',
          item.highlight
            ? onLight ? 'text-charcoal' : 'text-cream'
            : onLight ? 'text-charcoal/80' : 'text-cream/80'
        )}>
          {item.segment}
        </p>
        <p className={cn(
          'font-body text-base mt-2 leading-relaxed',
          onLight ? 'text-muted-dark' : 'text-muted'
        )}>
          {item.details}
        </p>
      </div>
    </div>
  )
}
