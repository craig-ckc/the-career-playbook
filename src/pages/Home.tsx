import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../utils/cn'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import RoomCard from '../components/features/RoomCard'
import JourneyArc from '../components/features/JourneyArc'
import FeatureCard from '../components/features/FeatureCard'
import ProgrammeTimeline from '../components/features/ProgrammeTimeline'
import RegisterCTA from '../components/features/RegisterCTA'
import event from '../content/event.json'
import rooms from '../content/rooms.json'
import journey from '../content/journey.json'
import schedule from '../content/schedule.json'
import type { JourneyStep, ScheduleEntry } from '../types/content'

const typedJourney = journey as JourneyStep[]
const typedSchedule = schedule as ScheduleEntry[]

const features = [
  { icon: '🎤', title: 'Industry Speakers', description: 'Hear from credible professionals across diverse industries and sectors.' },
  { icon: '🧠', title: 'Interactive Workshops', description: 'Six breakaway rooms, each led by a specialist — choose the sessions that matter most to you.' },
  { icon: '💬', title: 'Career Panel', description: 'A 75-minute moderated discussion on the career moves that matter, with a live Q&A.' },
  { icon: '🤝', title: 'Networking', description: 'Connect with 25 industry mentors, peers, speakers, and fellow young professionals.' },
  { icon: '🧭', title: 'Practical Advice', description: 'Leave with actionable strategies you can apply to your career immediately.' },
]

function FadeSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div ref={ref} className={cn(isVisible ? 'animate-fade-up' : 'opacity-0', className)}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>The Career Playbook — 27 June 2026 | Grace Place Church</title>
        <meta name="description" content="A powerful career masterclass for students, graduates, young professionals, and emerging leaders. Six breakaway rooms, expert panel, networking. 27 June 2026, Grace Place Church. R100." />
        <meta property="og:title" content="The Career Playbook — Your Path. Your Pace. Your Purpose." />
        <meta property="og:description" content="A career masterclass with six specialist breakaway rooms covering AI, interviews, personal branding, mental health, career growth, and entrepreneurship. 27 June 2026." />
        <meta property="og:type" content="website" />
      </Head>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen bg-ground flex flex-col overflow-hidden">
        {/* Decorative gold arc */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-gold/8 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-gold/5 pointer-events-none"
        />

        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 pt-28 pb-8 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold/60 mb-6 block animate-fade-in">
            {event.organisedBy}
          </span>

          <h1
            className="font-display uppercase text-cream leading-none tracking-tight animate-fade-up"
            style={{ fontSize: 'clamp(64px, 13vw, 144px)' }}
          >
            The Career<br />
            <span className="text-gold">Playbook</span>
          </h1>

          <div className="flex flex-wrap gap-2 mt-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <Badge label={event.dateShort} variant="outline" />
            <Badge label={event.venue} variant="outline" />
            <Badge label={event.priceDisplay} variant="gold" />
          </div>

          <p
            className="font-display uppercase text-cream/60 mt-6 tracking-widest animate-fade-up"
            style={{ fontSize: 'clamp(13px, 2vw, 18px)', animationDelay: '180ms' }}
          >
            {event.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <Button variant="primary" size="lg" href="#register">
              Register Now →
            </Button>
            <Button variant="outline" size="lg" href="/rooms">
              Explore Rooms
            </Button>
          </div>
        </div>

        {/* Ticker strip */}
        <div className="border-t border-cream/8 py-3 overflow-hidden bg-surface/50">
          <div className="animate-ticker flex whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted pr-16">
                Faith · Purpose · Excellence · Impact · 27 June 2026 · Grace Place Church · R100 pp ·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <Section variant="cream" py="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeSection>
              <SectionHeading
                eyebrow="A Career Masterclass"
                title="For the driven. The ambitious. The ready."
                light={false}
              />
            </FadeSection>
            <FadeSection>
              <blockquote className="border-l-2 border-gold pl-6 mb-6">
                <p className="font-display uppercase text-charcoal text-xl lg:text-2xl leading-snug">
                  "{event.quote}"
                </p>
                <cite className="font-mono text-[10px] uppercase tracking-widest text-muted-dark not-italic block mt-3">
                  — {event.quoteSource}
                </cite>
              </blockquote>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Whether you are starting your career, seeking promotion, or exploring your purpose, this masterclass provides practical guidance and meaningful insights to help you move forward with confidence.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {event.pillars.map(p => (
                  <Badge key={p} label={p} variant="muted" />
                ))}
              </div>
            </FadeSection>
          </div>
        </Container>
      </Section>

      {/* ── JOURNEY ARC ──────────────────────────────── */}
      <Section variant="dark" py="lg" id="journey">
        <Container maxWidth="xl">
          <FadeSection className="mb-10">
            <SectionHeading
              eyebrow="Six Chapters"
              title="One Career Story"
              subtitle="Each room is a chapter. Together they map the full journey from preparation to launch."
            />
          </FadeSection>
          <JourneyArc steps={typedJourney} />
        </Container>
      </Section>

      {/* ── WHAT TO EXPECT ───────────────────────────── */}
      <Section variant="cream" py="lg">
        <Container>
          <FadeSection className="mb-10">
            <SectionHeading
              eyebrow="What's Included"
              title="Designed for real growth"
              light={false}
            />
          </FadeSection>
          <FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map(f => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </FadeSection>
        </Container>
      </Section>

      {/* ── ROOMS ────────────────────────────────────── */}
      <Section variant="dark" py="lg" id="rooms">
        <Container maxWidth="xl">
          <FadeSection className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The Breakaway Rooms"
              title="Six rooms. Six paths."
              subtitle="Interactive, specialist-led sessions running simultaneously across four 30-minute rounds."
            />
            <Link
              to="/rooms"
              className="font-mono text-[10px] uppercase tracking-widest text-gold/60 hover:text-gold transition-colors shrink-0 whitespace-nowrap"
            >
              View All Rooms →
            </Link>
          </FadeSection>
          <FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rooms.map(room => (
                <RoomCard key={room.id} room={room} variant="preview" />
              ))}
            </div>
          </FadeSection>
        </Container>
      </Section>

      {/* ── PROGRAMME SNAPSHOT ───────────────────────── */}
      <Section variant="cream" py="lg">
        <Container maxWidth="md">
          <FadeSection className="mb-8">
            <SectionHeading
              eyebrow="The Programme"
              title={event.dateShort}
              subtitle={`${event.venue} · ${event.time}`}
              light={false}
            />
          </FadeSection>
          <FadeSection>
            <ProgrammeTimeline items={typedSchedule} compact onLight />
          </FadeSection>
          <FadeSection className="mt-8">
            <Link
              to="/programme"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-dark hover:text-charcoal transition-colors"
            >
              View Full Programme →
            </Link>
          </FadeSection>
        </Container>
      </Section>

      {/* ── REGISTER CTA ─────────────────────────────── */}
      <RegisterCTA />
    </>
  )
}
