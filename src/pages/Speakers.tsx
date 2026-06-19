import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import SpeakerCard from '../components/features/SpeakerCard'
import RegisterCTA from '../components/features/RegisterCTA'
import speakers from '../content/speakers.json'
import panelists from '../content/panelists.json'
import type { Speaker, Panelist } from '../types/content'

const typedSpeakers = speakers as Speaker[]
const typedPanelists = panelists as Panelist[]
const hosts = typedSpeakers.filter(s => s.roles.includes('room-host'))

export default function Speakers() {
  return (
    <>
      <Head>
        <title>Speakers & Panelists — The Career Playbook</title>
        <meta name="description" content="Meet the room hosts, panel moderator, and panelists at The Career Playbook. Industry leaders sharing real career insights on 27 June 2026." />
        <meta property="og:title" content="Speakers & Panelists — The Career Playbook" />
        <meta property="og:description" content="Credible professionals from diverse industries sharing practical career guidance." />
      </Head>

      {/* Hero */}
      <Section variant="dark" py="lg" className="pt-32 lg:pt-40">
        <Container>
          <SectionHeading
            eyebrow="The Speakers"
            title="Credible voices. Real experience."
            subtitle="Every speaker brings industry depth, hard-won lessons, and a genuine commitment to helping the next generation move forward."
          />
        </Container>
      </Section>

      {/* Room Hosts */}
      <Section variant="cream" py="lg">
        <Container maxWidth="xl">
          <h2 className="font-display uppercase text-charcoal text-3xl mb-8">Room Hosts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {hosts.map(speaker => (
              <SpeakerCard key={speaker.id} speaker={speaker} variant="full" />
            ))}
          </div>
        </Container>
      </Section>

      {/* Panel */}
      <Section variant="dark" py="lg">
        <Container maxWidth="xl">
          <div className="mb-8">
            <h2 className="font-display uppercase text-cream text-3xl mb-2">Panel Discussion</h2>
            <p className="font-display uppercase text-gold text-lg">
              Accelerate Your Career — The Moves That Matter
            </p>
          </div>

          {/* Moderator */}
          {typedSpeakers
            .filter(s => s.roles.includes('panel-moderator'))
            .map(s => (
              <div key={s.id} className="bg-surface border border-gold/20 p-6 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold/60 block mb-3">
                  Moderator
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-ground shrink-0">
                    <span className="font-display text-gold">{s.initials}</span>
                  </div>
                  <div>
                    <p className="font-display uppercase text-cream text-xl">{s.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{s.title}</p>
                  </div>
                </div>
              </div>
            ))}

          {/* Panelists */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {typedPanelists.map(p => (
              <div key={p.id} className="bg-surface border border-cream/5 p-5">
                <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center bg-surface-2 mb-3">
                  <span className="font-display text-sm text-cream/60">{p.initials}</span>
                </div>
                <p className="font-display uppercase text-cream text-base leading-tight">{p.name}</p>
                <Badge label="Panelist" variant="muted" className="mt-2" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <RegisterCTA />
    </>
  )
}
