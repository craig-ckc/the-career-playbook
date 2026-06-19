import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import JourneyArc from '../components/features/JourneyArc'
import RoomCard from '../components/features/RoomCard'
import RegisterCTA from '../components/features/RegisterCTA'
import rooms from '../content/rooms.json'
import journey from '../content/journey.json'
import type { JourneyStep } from '../types/content'

const typedJourney = journey as JourneyStep[]

export default function Rooms() {
  return (
    <>
      <Head>
        <title>Breakaway Rooms — The Career Playbook</title>
        <meta name="description" content="Six specialist-led breakaway rooms covering AI & the future of work, interview skills, personal branding, mental health, career growth, and entrepreneurship." />
        <meta property="og:title" content="Breakaway Rooms — The Career Playbook" />
        <meta property="og:description" content="Choose your sessions. Each breakaway room is led by an industry specialist and runs across four 30-minute interactive rounds." />
      </Head>

      {/* Hero */}
      <Section variant="dark" py="lg" className="pt-32 lg:pt-40">
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="The Breakaway Rooms"
            title="Six rooms. Six paths."
            subtitle="Each room is led by a specialist and forms one chapter in the career story. Sessions run simultaneously across four 30-minute rounds — interactive, practical, and Q&A driven."
          />
        </Container>
      </Section>

      {/* Journey arc */}
      <Section variant="dark" py="none" className="pb-16">
        <Container maxWidth="xl">
          <JourneyArc steps={typedJourney} />
        </Container>
      </Section>

      {/* Rooms grid */}
      <Section variant="surface" py="lg">
        <Container maxWidth="xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} variant="full" />
            ))}
          </div>
        </Container>
      </Section>

      <RegisterCTA />
    </>
  )
}
