import { useParams, Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import SpeakerCard from '../components/features/SpeakerCard'
import RoomCard from '../components/features/RoomCard'
import RegisterCTA from '../components/features/RegisterCTA'
import rooms from '../content/rooms.json'
import speakers from '../content/speakers.json'
import type { Speaker } from '../types/content'

const typedSpeakers = speakers as Speaker[]

export function getStaticPaths() {
  return rooms.map(r => `rooms/${r.slug}`)
}

export default function RoomDetail() {
  const { slug } = useParams<{ slug: string }>()
  const room = rooms.find(r => r.slug === slug)

  if (!room) {
    return (
      <Section variant="dark" py="xl" className="pt-32">
        <Container>
          <p className="font-display uppercase text-cream text-3xl">Room not found.</p>
          <Link to="/rooms" className="text-gold mt-4 inline-block">← Back to rooms</Link>
        </Container>
      </Section>
    )
  }

  const hosts = typedSpeakers.filter(s => room.hostIds.includes(s.id))
  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 3)

  return (
    <>
      <Head>
        <title>{room.title} — The Career Playbook</title>
        <meta name="description" content={`${room.subtitle} ${room.description.slice(0, 120)}...`} />
        <meta property="og:title" content={`${room.title} — The Career Playbook`} />
        <meta property="og:description" content={room.tagline} />
      </Head>

      {/* Hero */}
      <Section variant="dark" py="lg" className="pt-32 lg:pt-40">
        <Container>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge label={`Room ${String(room.number).padStart(2, '0')}`} variant="outline" />
            <Badge label={room.track} variant="gold" />
            <Badge label={room.journeyLabel} variant="coral" />
          </div>
          <SectionHeading
            eyebrow={room.journeyLabel}
            title={room.title}
            subtitle={room.subtitle}
          />
        </Container>
      </Section>

      {/* Tagline + Description */}
      <Section variant="surface" py="md">
        <Container maxWidth="md">
          <p className="font-display uppercase text-gold text-2xl lg:text-3xl leading-snug mb-6">
            {room.tagline}
          </p>
          <p className="font-body text-cream/80 leading-relaxed text-base">
            {room.description}
          </p>
        </Container>
      </Section>

      {/* Key Themes */}
      <Section variant="cream" py="lg">
        <Container maxWidth="md">
          <h2 className="font-display uppercase text-charcoal text-2xl lg:text-3xl mb-8 leading-tight">Key Discussion Themes</h2>
          <ul className="space-y-4">
            {room.themes.map((theme, i) => (
              <li key={theme} className="flex items-start gap-4">
                <span className="font-mono text-xs text-gold shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-charcoal/80 text-base leading-relaxed">{theme}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Takeaway */}
      <Section variant="dark" py="md">
        <Container maxWidth="md">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/60 block mb-4">
            Key Takeaway
          </span>
          <blockquote className="border-l-2 border-gold pl-6">
            <p className="font-display uppercase text-cream text-xl lg:text-2xl leading-snug">
              {room.takeaway}
            </p>
          </blockquote>
        </Container>
      </Section>

      {/* Host Bios */}
      <Section variant="cream" py="lg">
        <Container maxWidth="md">
          <h2 className="font-display uppercase text-charcoal text-2xl lg:text-3xl mb-8 leading-tight">
            {hosts.length > 1 ? 'Your Hosts' : 'Your Host'}
          </h2>
          <div className="flex flex-col gap-4">
            {hosts.map(host => (
              <SpeakerCard key={host.id} speaker={host} variant="row" />
            ))}
          </div>
        </Container>
      </Section>

      {/* Other Rooms */}
      <Section variant="dark" py="lg">
        <Container maxWidth="xl">
          <h2 className="font-display uppercase text-cream text-3xl mb-8">Other Rooms</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherRooms.map(r => (
              <RoomCard key={r.id} room={r} variant="preview" />
            ))}
          </div>
        </Container>
      </Section>

      <RegisterCTA />
    </>
  )
}
