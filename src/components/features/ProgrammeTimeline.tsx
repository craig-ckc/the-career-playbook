import type { ScheduleEntry } from '../../types/content'
import ScheduleItem from './ScheduleItem'

interface ProgrammeTimelineProps {
  items: ScheduleEntry[]
  compact?: boolean
  onLight?: boolean
}

export default function ProgrammeTimeline({
  items,
  compact = false,
  onLight = false,
}: ProgrammeTimelineProps) {
  const displayed = compact ? items.filter(i => i.highlight) : items

  return (
    <div>
      {displayed.map(item => (
        <ScheduleItem key={item.id} item={item} onLight={onLight} />
      ))}
    </div>
  )
}
