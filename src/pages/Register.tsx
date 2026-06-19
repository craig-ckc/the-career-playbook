import { useState } from 'react'
import { Head } from 'vite-react-ssg'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import event from '../content/event.json'
import rooms from '../content/rooms.json'

const STAGES = [
  'Student',
  'Recent graduate',
  'Young professional',
  'Emerging leader',
  'Other',
]

const fieldClass =
  'w-full rounded-[5px] border border-cream/15 bg-ground/60 px-4 py-3 font-body text-base text-cream placeholder:text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors'
const labelClass =
  'block font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2'

export default function Register() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    stage: STAGES[0],
    notes: '',
  })
  const [interests, setInterests] = useState<string[]>([])

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(f => ({ ...f, [key]: e.target.value }))

  const toggleRoom = (id: string) =>
    setInterests(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Register — The Career Playbook | 27 June 2026</title>
        <meta name="description" content="Reserve your seat at The Career Playbook — a career masterclass on 27 June 2026 at Grace Place Church. R100 per person." />
        <meta property="og:title" content="Register — The Career Playbook" />
      </Head>

      {/* Hero */}
      <Section variant="dark" py="lg" className="pt-32 lg:pt-40">
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={`Registration · ${event.priceDisplay}`}
            title={submitted ? "You're on the list" : 'Reserve your seat'}
            subtitle={
              submitted
                ? 'Your spot is held. Check your inbox for confirmation and joining details.'
                : 'Complete the form below to secure your place at the masterclass. It takes under a minute.'
            }
          />
        </Container>
      </Section>

      <Section variant="surface" py="lg">
        <Container maxWidth="lg">
          {submitted ? (
            <Confirmation form={form} interestCount={interests.length} />
          ) : (
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              {/* Event summary */}
              <aside className="rounded-md border border-cream/10 bg-ground/40 p-6 lg:p-8 h-max">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold/70">
                  The Details
                </span>
                <dl className="mt-5 space-y-4">
                  {[
                    ['Date', event.date],
                    ['Time', event.time],
                    ['Venue', event.venue],
                    ['Price', `${event.price} per person`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 border-b border-cream/8 pb-3">
                      <dt className="font-mono text-xs uppercase tracking-wider text-muted">{k}</dt>
                      <dd className="font-display uppercase text-cream text-lg leading-tight text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="font-body text-sm text-muted mt-6 leading-relaxed">
                  Your ticket includes the opening panel, all six breakaway rooms, the networking
                  hour, and lunch.
                </p>
              </aside>

              {/* Form */}
              <form onSubmit={handleSubmit} className="rounded-md border border-cream/10 bg-ground/40 p-6 lg:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className={labelClass}>Full name</label>
                    <input id="name" required value={form.name} onChange={update('name')} className={fieldClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" type="email" required value={form.email} onChange={update('email')} className={fieldClass} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={update('phone')} className={fieldClass} placeholder="+27 ..." />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="stage" className={labelClass}>Where are you in your career?</label>
                    <select id="stage" value={form.stage} onChange={update('stage')} className={fieldClass}>
                      {STAGES.map(s => <option key={s} value={s} className="bg-ground text-cream">{s}</option>)}
                    </select>
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className={labelClass}>Rooms you're most interested in <span className="normal-case tracking-normal text-muted/60">(optional)</span></legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {rooms.map(room => {
                      const active = interests.includes(room.id)
                      return (
                        <label
                          key={room.id}
                          className={
                            'flex items-center gap-3 rounded-[5px] border px-3 py-2.5 cursor-pointer transition-colors ' +
                            (active ? 'border-gold/60 bg-gold/10' : 'border-cream/12 bg-ground/40 hover:border-cream/30')
                          }
                        >
                          <input type="checkbox" checked={active} onChange={() => toggleRoom(room.id)} className="sr-only" />
                          <span className={'flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border ' + (active ? 'border-gold bg-gold text-charcoal' : 'border-cream/30')}>
                            {active && (
                              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m2.5 6 2.5 2.5 4.5-5" /></svg>
                            )}
                          </span>
                          <span className="font-body text-sm text-cream/85 leading-tight">{room.title}</span>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <div className="mt-6">
                  <label htmlFor="notes" className={labelClass}>Anything we should know? <span className="normal-case tracking-normal text-muted/60">(optional)</span></label>
                  <textarea id="notes" rows={3} value={form.notes} onChange={update('notes')} className={fieldClass + ' resize-none'} placeholder="Dietary needs, accessibility, questions…" />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto justify-center">
                    Complete registration — {event.price}
                  </Button>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted/70">
                    Demo form · no payment taken
                  </p>
                </div>
              </form>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}

function Confirmation({ form, interestCount }: { form: { name: string; email: string }; interestCount: number }) {
  return (
    <div className="mx-auto max-w-2xl rounded-md border border-gold/30 bg-ground/40 p-8 lg:p-10 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-charcoal">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7" /></svg>
      </span>
      <h2 className="font-display uppercase text-cream text-2xl lg:text-3xl mt-5 leading-tight">
        Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — you're registered
      </h2>
      <p className="font-body text-base text-muted mt-3 leading-relaxed">
        We've sent a confirmation to <span className="text-cream">{form.email || 'your email'}</span>.
        {interestCount > 0 && ` We've noted your interest in ${interestCount} room${interestCount > 1 ? 's' : ''}.`} See you on 27 June.
      </p>
      <p className="font-mono text-xs uppercase tracking-wider text-muted/60 mt-5">
        This is a demo — no payment was processed.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Button variant="primary" size="md" href="/programme">View the programme</Button>
        <Button variant="outline" size="md" href="/">Back to home</Button>
      </div>
    </div>
  )
}
