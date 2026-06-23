import type { Mentor } from '../../types/content'
import { cn } from '../../utils/cn'

interface MentorDirectoryProps {
  mentors: Mentor[]
}

const accents = [
  'bg-gold',
  'bg-coral',
  'bg-teal',
  'bg-sky',
  'bg-berry',
] as const

function mentorNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}

export default function MentorDirectory({ mentors }: MentorDirectoryProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {mentors.map((mentor, index) => {
        const accent = accents[index % accents.length]

        return (
        <article
          key={mentor.id}
          className="group relative bg-white/70 border border-charcoal/10 rounded-md min-h-40 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-charcoal/25 hover:bg-white/85 hover:shadow-[0_18px_40px_rgba(23,27,28,0.08)]"
        >
          <div className={cn('h-1 w-full', accent)} aria-hidden="true" />

          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dark leading-relaxed">
                {mentor.industry}
              </p>
              <span className="font-mono text-[10px] text-charcoal/45 border border-charcoal/10 rounded-full px-1.5 py-0.5 leading-none shrink-0">
                {mentorNumber(index)}
              </span>
            </div>

            <h3 className="font-display uppercase text-charcoal text-[clamp(22px,2.4vw,28px)] leading-[1] mt-3">
              {mentor.name}
            </h3>

            <div className="mt-auto pt-4">
              <div className="h-px w-full bg-charcoal/10 mb-3" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-charcoal/45 mb-0.5">
                Occupation
              </p>
              <p className="font-body text-[13px] text-charcoal/75 leading-relaxed">
                {mentor.occupation}
              </p>
            </div>
          </div>
        </article>
        )
      })}
    </div>
  )
}
