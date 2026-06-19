type IconKey = 'speakers' | 'workshops' | 'panel' | 'networking' | 'advice'

interface FeatureCardProps {
  icon: IconKey
  title: string
  description: string
}

const icons: Record<IconKey, React.ReactNode> = {
  speakers: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  workshops: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  panel: (
    <>
      <path d="M3 5h13v9H8l-5 4z" />
      <path d="M19 9h2v9l-4-3" />
    </>
  ),
  networking: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.8 7.8 10.4 16M16.2 7.8 13.6 16M8 6h8" />
    </>
  ),
  advice: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 lg:p-7 rounded-md border border-charcoal/10 bg-white/60 hover:bg-white/85 hover:border-charcoal/20 transition-colors duration-200">
      <span className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-gold/20 text-charcoal mb-5">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[icon]}
        </svg>
      </span>
      <h3 className="font-display uppercase text-xl text-charcoal leading-tight">{title}</h3>
      <p className="font-body text-sm text-muted-dark mt-2 leading-relaxed">{description}</p>
    </div>
  )
}
