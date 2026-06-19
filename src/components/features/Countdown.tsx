import { useEffect, useState } from 'react'

// 27 June 2026, 08:00 — South African Standard Time (UTC+2)
const TARGET = new Date('2026-06-27T08:00:00+02:00').getTime()

interface Remaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getRemaining(): Remaining | null {
  const ms = TARGET - Date.now()
  if (ms <= 0) return null
  const total = Math.floor(ms / 1000)
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export default function Countdown() {
  // Start null so server render and first client render match, then fill in.
  const [remaining, setRemaining] = useState<Remaining | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setRemaining(getRemaining())
    const id = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  if (mounted && !remaining) {
    return (
      <p className="font-display uppercase text-charcoal text-2xl tracking-tight">
        The doors are open — come on in.
      </p>
    )
  }

  const units: { label: string; value: number | null }[] = [
    { label: 'Days', value: remaining?.days ?? null },
    { label: 'Hours', value: remaining?.hours ?? null },
    { label: 'Minutes', value: remaining?.minutes ?? null },
    { label: 'Seconds', value: remaining?.seconds ?? null },
  ]

  return (
    <div className="flex items-start justify-center gap-2 sm:gap-3" aria-label="Time remaining until the event">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-start">
          <div className="flex flex-col items-center">
            <span className="flex min-w-[1.6em] items-center justify-center rounded-[5px] border border-charcoal/15 bg-charcoal/[0.05] px-3 py-2 font-display text-charcoal leading-none tabular-nums text-[clamp(34px,6.5vw,58px)]">
              {u.value === null ? '––' : pad(u.value)}
            </span>
            <span className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-charcoal/55">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-charcoal/30 leading-none text-[clamp(28px,5vw,48px)] px-0.5 sm:px-1 pt-2" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
