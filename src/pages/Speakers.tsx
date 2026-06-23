import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import SpeakerCard from '../components/features/SpeakerCard'
import MentorDirectory from '../components/features/MentorDirectory'
import PanelDiscussion from '../components/features/PanelDiscussion'
import EventCountdown from '../components/features/EventCountdown'
import speakers from '../content/speakers.json'
import mentors from '../content/mentors.json'
import type { Mentor, Speaker } from '../types/content'

const typedSpeakers = speakers as Speaker[]
const hosts = typedSpeakers.filter(s => s.roles.includes('room-host'))
const typedMentors = mentors as Mentor[]

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

      {/* Mentors */}
      <Section variant="cream" py="lg" className="border-t border-charcoal/10">
        <Container maxWidth="xl">
          <div className="mb-8 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dark mb-4 block">
              Industry Mentors
            </span>
            <h2 className="font-display uppercase text-charcoal text-[clamp(34px,4.8vw,56px)] leading-[1.22] tracking-tight text-balance">
              Meet the mentors in the room
            </h2>
            <p className="font-body text-base text-muted-dark mt-4 leading-relaxed max-w-xl">
              Professionals across healthcare, business, technology, legal, finance, creative production, and more will be available for practical networking conversations.
            </p>
          </div>
          <MentorDirectory mentors={typedMentors} />
        </Container>
      </Section>

      <EventCountdown />
    </>
  )
}
