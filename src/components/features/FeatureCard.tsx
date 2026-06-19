interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 lg:p-7 border border-charcoal/10 bg-cream hover:bg-cream-surface transition-colors duration-200">
      <span className="text-3xl block mb-4" role="img" aria-hidden="true">{icon}</span>
      <h3 className="font-display uppercase text-xl text-charcoal leading-tight">{title}</h3>
      <p className="font-body text-sm text-muted-dark mt-2 leading-relaxed">{description}</p>
    </div>
  )
}
