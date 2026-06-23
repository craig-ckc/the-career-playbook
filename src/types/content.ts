export interface Room {
  id: string
  slug: string
  number: number
  track: string
  journeyLabel: string
  title: string
  tagline: string
  subtitle: string
  description: string
  themes: string[]
  takeaway: string
  hostIds: string[]
}

export interface Speaker {
  id: string
  name: string
  title: string
  bioShort: string
  bioFull: string
  roles: string[]
  roomIds: string[]
  initials: string
}

export interface Panelist {
  id: string
  name: string
  title: string
  initials: string
}

export interface Mentor {
  id: string
  name: string
  industry: string
  occupation: string
}

export interface ScheduleEntry {
  id: string
  timeStart: string
  timeEnd: string
  segment: string
  details: string
  highlight: boolean
}

export interface JourneyStep {
  id: string
  label: string
  track: string
  description: string
  roomId: string
  roomSlug: string
}

export interface EventInfo {
  name: string
  organisedBy: string
  tagline: string
  pillars: string[]
  quote: string
  quoteSource: string
  date: string
  dateShort: string
  time: string
  timeStart: string
  timeEnd: string
  venue: string
}
