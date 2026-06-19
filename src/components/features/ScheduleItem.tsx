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
        'flex gap-5 lg:gap-8 py-5 border-b last:border-b-0',
        item.highlight
          ? onLight ? 'border-charcoal/10' : 'border-gold/15'
          : onLight ? 'border-charcoal/8' : 'border-cream/8',
        item.highlight && 'relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gold'
      )}
    >
      {/* Time */}
      <div className="shrink-0 w-28">
        <span className={cn(
          'font-mono text-xs uppercase tracking-wider',
          onLight ? 'text-muted-dark' : 'text-muted'
        )}>
          {item.timeStart}
        </span>
        <span className={cn('block font-mono text-[10px]', onLight ? 'text-muted-dark/60' : 'text-muted/60')}>
          – {item.timeEnd}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={cn(
          'font-display uppercase text-base leading-tight',
          item.highlight
            ? onLight ? 'text-charcoal' : 'text-cream'
            : onLight ? 'text-charcoal/80' : 'text-cream/80'
        )}>
          {item.segment}
        </p>
        <p className={cn(
          'font-body text-sm mt-1 leading-relaxed',
          onLight ? 'text-muted-dark' : 'text-muted'
        )}>
          {item.details}
        </p>
      </div>
    </div>
  )
}
