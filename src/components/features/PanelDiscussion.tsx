import { cn } from '../../utils/cn'
import speakers from '../../content/speakers.json'
import panelists from '../../content/panelists.json'
import { panelistImages, panelistImagePosition } from '../../assets/panelistImages'
import type { Speaker, Panelist } from '../../types/content'

const moderator = (speakers as Speaker[]).find(s => s.roles.includes('panel-moderator'))
const typedPanelists = panelists as Panelist[]

const PANEL = {
  time: '09:15 – 10:30',
  format: '45-min discussion · 30-min Q&A',
  title: 'Accelerate Your Career',
  topic: 'The Moves That Matter',
  blurb:
    'A moderated panel where industry leaders share the career moves that defined their trajectories — honest, practical, and built for a live audience Q&A.',
}

/* Square portrait that falls back to initials when an image is missing. */
function Portrait({
  id,
  name,
  initials,
  className,
  initialsClassName,
}: {
  id: string
  name: string
  initials: string
  className?: string
  initialsClassName?: string
}) {
  const image = panelistImages[id]
  const position = panelistImagePosition[id] ?? '50% 20%'

  return (
    <div className={cn('relative aspect-square overflow-hidden bg-surface-2', className)}>
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          style={{ objectPosition: position }}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          className={cn(
            'flex h-full w-full items-center justify-center font-display text-cream/70',
            initialsClassName
          )}
        >
          {initials}
        </span>
      )}
    </div>
  )
}

interface PanelDiscussionProps {
  className?: string
}

export default function PanelDiscussion({ className }: PanelDiscussionProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md border border-cream/10 bg-surface/50',
        className
      )}
    >
      <div aria-hidden="true" className="h-0.5 w-full bg-gold/70" />

      <div className="p-6 lg:p-8">
        {/* Header — time + format read like a billing line */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-cream/10 pb-5">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold/70">
            {PANEL.time} · Panel Discussion
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {PANEL.format}
          </span>
        </div>

        <h3 className="font-display uppercase text-cream leading-[1.04] tracking-tight mt-6 text-[clamp(28px,4vw,46px)]">
          {PANEL.title}
        </h3>
        <p className="font-display uppercase text-gold text-base lg:text-lg mt-1">
          — {PANEL.topic}
        </p>

        {/* The bill: moderator headlines, panelists form the ensemble */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)]">
          {moderator && (
            <div className="relative flex flex-col overflow-hidden rounded-md border border-gold/35 bg-gold/[0.07] p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  Moderator
                </span>
                <span aria-hidden="true" className="font-mono text-[11px] text-gold/50">
                  ★
                </span>
              </div>

              <Portrait
                id={moderator.id}
                name={moderator.name}
                initials={moderator.initials}
                className="mt-4 w-full rounded-[5px] ring-1 ring-gold/40"
                initialsClassName="text-5xl text-gold/80"
              />

              <div className="mt-4">
                <span className="block font-display uppercase text-cream text-xl lg:text-2xl leading-[1.05]">
                  {moderator.name}
                </span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-gold/80 leading-snug">
                  {moderator.title}
                </span>
              </div>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            {typedPanelists.map((p, i) => (
              <div
                key={p.id}
                className="group flex items-center gap-4 rounded-md border border-cream/10 bg-surface p-4 transition-colors duration-200 hover:border-gold/30"
              >
                <Portrait
                  id={p.id}
                  name={p.name}
                  initials={p.initials}
                  className="w-16 shrink-0 rounded-[5px] ring-1 ring-cream/10"
                  initialsClassName="text-lg"
                />
                <div className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-gold/60">
                    Panelist · {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-0.5 block font-display uppercase text-cream text-base lg:text-lg leading-tight">
                    {p.name}
                  </span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted leading-snug mt-0.5">
                    {p.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-sm text-muted mt-6 leading-relaxed max-w-2xl">
          {PANEL.blurb}
        </p>
      </div>
    </div>
  )
}
