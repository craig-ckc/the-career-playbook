import type { Speaker } from '../../types/content'
import Badge from '../ui/Badge'
import rooms from '../../content/rooms.json'
import { speakerImages, speakerImagePosition } from '../../assets/speakerImages'

interface SpeakerCardProps {
  speaker: Speaker
  variant?: 'full' | 'compact' | 'row'
}

function PlaceholderAvatar() {
  return (
    <div className="h-full w-full bg-cream-surface flex items-end justify-center">
      <svg
        viewBox="0 0 100 100"
        className="h-[88%] w-auto text-muted-dark/35"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="50" cy="36" r="20" />
        <path d="M50 60c-20 0-34 13-37 32a90 90 0 0 0 74 0c-3-19-17-32-37-32z" />
      </svg>
    </div>
  )
}

export default function SpeakerCard({ speaker, variant = 'full' }: SpeakerCardProps) {
  const room = rooms.find(r => speaker.roomIds.includes(r.id))
  const image = speakerImages[speaker.id]
  const position = speakerImagePosition[speaker.id] ?? '50% 18%'

  if (variant === 'row') {
    return (
      <article className="bg-white/60 border border-charcoal/10 rounded-md overflow-hidden flex flex-col sm:flex-row">
        {/* Flush portrait on the side */}
        <div className="w-full aspect-[4/5] sm:aspect-auto sm:w-44 lg:w-52 shrink-0 bg-cream-surface overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={speaker.name}
              style={{ objectPosition: position }}
              className="h-full w-full object-cover"
            />
          ) : (
            <PlaceholderAvatar />
          )}
        </div>
        <div className="flex flex-col gap-1 flex-1 p-5 lg:p-6">
          {room && <Badge label={room.track} variant="muted" className="self-start mb-2" />}
          <h3 className="font-display uppercase text-charcoal text-xl leading-tight">{speaker.name}</h3>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-dark mt-0.5">{speaker.title}</p>
          <p className="font-body text-sm text-charcoal/70 mt-3 leading-relaxed">{speaker.bioFull}</p>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className="bg-white/60 border border-charcoal/10 rounded-md overflow-hidden flex items-stretch">
        <div className="w-20 shrink-0 bg-cream-surface">
          {image ? (
            <img src={image} alt={speaker.name} style={{ objectPosition: position }} className="h-full w-full object-cover" />
          ) : (
            <PlaceholderAvatar />
          )}
        </div>
        <div className="p-4 flex flex-col gap-0.5">
          <h3 className="font-display uppercase text-charcoal text-lg leading-tight">{speaker.name}</h3>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-dark">{speaker.title}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="group bg-white/60 border border-charcoal/10 rounded-md overflow-hidden flex flex-col h-full transition-colors duration-200 hover:border-charcoal/25">
      {/* Flush portrait — no padding around the image */}
      <div className="aspect-[4/5] w-full overflow-hidden bg-cream-surface">
        {image ? (
          <img
            src={image}
            alt={speaker.name}
            style={{ objectPosition: position }}
            className="h-full w-full object-cover"
          />
        ) : (
          <PlaceholderAvatar />
        )}
      </div>

      {/* Padded details */}
      <div className="flex flex-col gap-1 flex-1 p-5">
        {room && <Badge label={room.track} variant="muted" className="self-start mb-2" />}

        <h3 className="font-display uppercase text-charcoal text-xl leading-tight">
          {speaker.name}
        </h3>

        <p className="font-mono text-xs uppercase tracking-wider text-muted-dark mt-0.5">
          {speaker.title}
        </p>

        <p className="font-body text-sm text-charcoal/70 mt-3 leading-relaxed">
          {speaker.bioFull}
        </p>
      </div>
    </article>
  )
}
