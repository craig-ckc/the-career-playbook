import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../utils/cn'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import RoomCard from '../components/features/RoomCard'
import JourneyArc from '../components/features/JourneyArc'
import FeatureCard from '../components/features/FeatureCard'
import ProgrammeTimeline from '../components/features/ProgrammeTimeline'
import RegisterCTA from '../components/features/RegisterCTA'
import event from '../content/event.json'
import rooms from '../content/rooms.json'
import journey from '../content/journey.json'
import schedule from '../content/schedule.json'
import heroImage from '../assets/career-workshop-hero.avif'
import networkingImage from '../assets/career-networking.avif'
import collaborationImage from '../assets/career-collaboration.avif'
import type { JourneyStep, ScheduleEntry } from '../types/content'

const typedJourney = journey as JourneyStep[]
const typedSchedule = schedule as ScheduleEntry[]

const features = [
  { icon: 'speakers', title: 'Industry Speakers', description: 'Hear from credible professionals across diverse industries and sectors.' },
  { icon: 'workshops', title: 'Interactive Workshops', description: 'Six breakaway rooms, each led by a specialist — choose the sessions that matter most to you.' },
  { icon: 'panel', title: 'Career Panel', description: 'A 75-minute moderated discussion on the career moves that matter, with a live Q&A.' },
  { icon: 'networking', title: 'Networking', description: 'Connect with 25 industry mentors, peers, speakers, and fellow young professionals.' },
  { icon: 'advice', title: 'Practical Advice', description: 'Leave with actionable strategies you can apply to your career immediately.' },
] as const

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
        <div className="brand-photo absolute inset-0" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ground via-ground/85 to-ground/35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-ground/80 via-transparent to-ground/30" aria-hidden="true" />

        <div className="flex-1 flex items-center px-6 lg:px-12 pt-28 pb-16 max-w-7xl mx-auto w-full relative">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold mb-6 block animate-fade-in">
              {event.organisedBy}
            </span>

            <h1
              className="font-display uppercase text-cream leading-[0.92] tracking-tight animate-fade-up"
              style={{ fontSize: 'clamp(58px, 10vw, 132px)' }}
            >
              The Career<br />
              <span className="text-gold">Playbook</span>
            </h1>

            <p className="font-body text-base lg:text-lg text-cream/85 mt-6 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '120ms' }}>
              A practical career masterclass for students, graduates, young professionals, and emerging leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9 animate-fade-up w-full sm:w-auto" style={{ animationDelay: '220ms' }}>
              <Button variant="primary" size="lg" href="/register" className="w-full sm:w-auto justify-center">
                Register Now →
              </Button>
              <Button variant="outline" size="lg" href="/rooms" className="w-full sm:w-auto justify-center">
                Explore Rooms
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <Section variant="cream" py="lg">
        <Container>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center">
            <FadeSection>
              <div className="brand-photo w-full aspect-[4/5] rounded-md border border-charcoal/10">
                <img
                  src={networkingImage}
                  alt="A confident young professional"
                  className="h-full w-full object-cover object-[50%_25%]"
                />
              </div>
            </FadeSection>
            <FadeSection>
              <SectionHeading
                eyebrow="A Career Masterclass"
                title="For the driven. The ambitious. The ready."
                light={false}
              />
              <p className="font-body text-base text-charcoal/80 leading-relaxed mt-1">
                Whether you are starting your career, seeking promotion, or exploring your purpose, this masterclass provides practical guidance and meaningful insights to help you move forward with confidence.
              </p>
              <blockquote className="border-l-2 border-gold pl-5 mt-7">
                <p className="font-display uppercase text-charcoal text-xl leading-snug">"{event.quote}"</p>
                <cite className="font-mono text-xs uppercase tracking-widest text-muted-dark not-italic block mt-3">
                  — {event.quoteSource}
                </cite>
              </blockquote>
            </FadeSection>
          </div>
        </Container>
      </Section>

      {/* ── JOURNEY ARC ──────────────────────────────── */}
      <Section variant="dark" py="lg" id="journey" className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute right-0 top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
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
              className="font-mono text-xs uppercase tracking-widest text-gold/60 hover:text-gold transition-colors shrink-0 whitespace-nowrap"
            >
              View All Rooms →
            </Link>
          </FadeSection>
          <FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <FadeSection className="mb-10">
            <div className="brand-photo w-full aspect-[16/7] rounded-md border border-charcoal/10">
              <img
                src={collaborationImage}
                alt="People taking notes during a workshop discussion"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeSection>
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
              className="font-mono text-xs uppercase tracking-widest text-muted-dark hover:text-charcoal transition-colors"
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
