import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import SpeakerCard from '../components/features/SpeakerCard'
import PanelDiscussion from '../components/features/PanelDiscussion'
import RegisterCTA from '../components/features/RegisterCTA'
import speakers from '../content/speakers.json'
import type { Speaker } from '../types/content'

const typedSpeakers = speakers as Speaker[]
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
          <h2 className="font-display uppercase text-charcoal text-2xl lg:text-3xl mb-8 leading-tight">Room Hosts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hosts.map(speaker => (
              <SpeakerCard key={speaker.id} speaker={speaker} variant="full" />
            ))}
          </div>
        </Container>
      </Section>

      {/* Panel */}
      <Section variant="dark" py="lg">
        <Container maxWidth="lg">
          <PanelDiscussion />
        </Container>
      </Section>

      <RegisterCTA />
    </>
  )
}
