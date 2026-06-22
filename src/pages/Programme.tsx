import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import ProgrammeTimeline from '../components/features/ProgrammeTimeline'
import PanelDiscussion from '../components/features/PanelDiscussion'
import RoomCard from '../components/features/RoomCard'
import EventCountdown from '../components/features/EventCountdown'
import schedule from '../content/schedule.json'
import rooms from '../content/rooms.json'
import type { ScheduleEntry } from '../types/content'

const typedSchedule = schedule as ScheduleEntry[]

export default function Programme() {
  return (
    <>
      <Head>
        <title>Programme — The Career Playbook | 27 June 2026</title>
        <meta name="description" content="Full event programme for The Career Playbook. 27 June 2026, Grace Place Church. Networking, panel discussion, and six breakaway rooms from 8:00 AM." />
        <meta property="og:title" content="Programme — The Career Playbook" />
        <meta property="og:description" content="From 07:30 arrivals to 13:00 breakaway rooms — the full schedule for The Career Playbook masterclass." />
      </Head>

      {/* Hero */}
      <Section variant="dark" py="lg" className="pt-32 lg:pt-40">
        <Container>
          <SectionHeading
            eyebrow="27 June 2026 · Grace Place Church"
            title="The Programme"
            subtitle="From arrival and networking through to six simultaneous breakaway rooms — a full morning of career-defining conversations."
          />
        </Container>
      </Section>

      {/* Full Timeline */}
      <Section variant="cream" py="lg">
        <Container maxWidth="md">
          <ProgrammeTimeline items={typedSchedule} onLight />
        </Container>
      </Section>

      {/* Panel Detail */}
      <Section variant="dark" py="lg">
        <Container maxWidth="lg">
          <PanelDiscussion />
        </Container>
      </Section>

      {/* Breakaway Rooms Grid */}
      <Section variant="dark" py="lg" className="border-t border-cream/5">
        <Container maxWidth="xl">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-gold/60 block mb-2">11:00 – 13:00</span>
            <h2 className="font-display uppercase text-cream text-3xl">Breakaway Rooms</h2>
            <p className="font-body text-muted mt-2">Six rooms running simultaneously across four 30-minute rounds.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} variant="preview" />
            ))}
          </div>
        </Container>
      </Section>

      <EventCountdown />
    </>
  )
}
