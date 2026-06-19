import { cn } from '../../utils/cn'
import speakers from '../../content/speakers.json'
import panelists from '../../content/panelists.json'
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
        <div className="mt-8 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
          {moderator && (
            <div className="flex flex-col justify-between rounded-md border border-gold/30 bg-gold/[0.07] p-5">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold/80">
                Moderator
              </span>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-gold font-display text-lg text-charcoal">
                  {moderator.initials}
                </span>
                <span>
                  <span className="block font-display uppercase text-cream text-lg leading-tight">
                    {moderator.name}
                  </span>
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted mt-0.5">
                    {moderator.title}
                  </span>
                </span>
              </div>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            {typedPanelists.map(p => (
              <div
                key={p.id}
                className="flex items-center gap-3 rounded-md border border-cream/10 bg-surface p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-cream/20 bg-surface-2 font-display text-sm text-cream/70">
                  {p.initials}
                </span>
                <span>
                  <span className="block font-display uppercase text-cream text-base leading-tight">
                    {p.name}
                  </span>
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted-dark mt-0.5">
                    Panelist
                  </span>
                </span>
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
