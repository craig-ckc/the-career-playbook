import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found — The Career Playbook</title>
      </Head>
      <Section variant="dark" py="xl" className="min-h-screen flex items-center">
        <Container>
          <span className="font-display text-[120px] text-gold/10 leading-none block">404</span>
          <h1 className="font-display uppercase text-cream text-4xl lg:text-5xl -mt-4 mb-4">
            Page not found
          </h1>
          <p className="font-body text-muted mb-8">
            This page doesn't exist. Head back to the homepage or explore the rooms.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" href="/">Back to Home</Button>
            <Button variant="outline" href="/rooms">Explore Rooms</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
