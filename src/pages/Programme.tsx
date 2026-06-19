import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import ProgrammeTimeline from '../components/features/ProgrammeTimeline'
import RoomCard from '../components/features/RoomCard'
import RegisterCTA from '../components/features/RegisterCTA'
import schedule from '../content/schedule.json'
import rooms from '../content/rooms.json'
import panelists from '../content/panelists.json'
import type { ScheduleEntry, Panelist } from '../types/content'

const typedSchedule = schedule as ScheduleEntry[]
const typedPanelists = panelists as Panelist[]

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
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold/60 block mb-4">
            09:15 – 10:30
          </span>
          <h2 className="font-display uppercase text-cream text-3xl lg:text-4xl mb-2 leading-tight">
            Panel Discussion
          </h2>
          <p className="font-display uppercase text-gold text-xl mb-8">
            Accelerate Your Career — The Moves That Matter
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {typedPanelists.map(p => (
              <div key={p.id} className="bg-surface p-5 border border-cream/5">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-surface-2 mb-3">
                  <span className="font-display text-sm text-gold">{p.initials}</span>
                </div>
                <p className="font-display uppercase text-cream text-base leading-tight">{p.name}</p>
                <Badge label="Panelist" variant="muted" className="mt-2" />
              </div>
            ))}
          </div>

          <div className="bg-surface border border-cream/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">Moderator</p>
            <p className="font-display uppercase text-cream text-lg">Raksha Naidoo</p>
            <p className="font-body text-sm text-muted mt-1">CEO, Board Director & Leadership Mentor</p>
          </div>

          <p className="font-body text-muted mt-6 leading-relaxed">
            A 45-minute moderated panel discussion followed by a 30-minute audience Q&A. Panelists share the career moves that have defined their trajectories — honest, practical, and applicable.
          </p>
        </Container>
      </Section>

      {/* Breakaway Rooms Grid */}
      <Section variant="dark" py="lg" className="border-t border-cream/5">
        <Container maxWidth="xl">
          <div className="mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold/60 block mb-2">11:00 – 13:00</span>
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

      <RegisterCTA />
    </>
  )
}
