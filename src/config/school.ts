import type { SchoolInfo } from '../types'

/**
 * SINGLE SOURCE OF TRUTH for school content.
 * Empty strings / empty arrays = NOT YET VERIFIED. The site hides or labels those parts.
 * Items marked DRAFT are professional placeholder copy that school management must approve.
 */
export const school: SchoolInfo = {
  name: 'Universal Children School',
  tagline: 'Where Young Minds Learn, Grow and Thrive.', // DRAFT
  logoPath: null, // e.g. '/logo.png' placed in /public. null = text wordmark
  address: 'Gwalior, Madhya Pradesh, India', // TODO: full street address
  phone: '', // TODO verify, e.g. '+91 00000 00000'
  email: '', // TODO verify
  mapsUrl: 'https://maps.app.goo.gl/2DZ39Bg1SppQGm9t7',
  mapEmbedUrl: '', // TODO: Google Maps > Share > Embed a map > copy the iframe src URL
  timings: '', // TODO office hours / school timings
  affiliation: '', // TODO: do NOT fill until confirmed
  classes: [], // TODO verified class levels
  activities: [], // TODO verified co-curricular activities
  vision: 'To nurture confident, curious, responsible and capable individuals who love learning and contribute positively to society.', // DRAFT
  mission: 'To provide a safe, supportive and stimulating environment where every child is encouraged to learn, think independently and grow in character.', // DRAFT
  values: [
    { title: 'Curiosity', text: 'Asking questions and exploring ideas is part of everyday learning.' },
    { title: 'Respect', text: 'Treating classmates, teachers and families with kindness.' },
    { title: 'Responsibility', text: 'Taking ownership of choices, work and community.' },
    { title: 'Integrity', text: 'Honesty and fairness in what we say and do.' },
  ], // DRAFT
  themes: [
    { title: 'Academic foundations', text: 'Strong basics in language, numbers and understanding the world.', icon: 'book' },
    { title: 'Creativity', text: 'Room to imagine, make and express ideas.', icon: 'palette' },
    { title: 'Confidence', text: 'A supportive setting where children are encouraged to speak up and try.', icon: 'heart' },
    { title: 'Character', text: 'Everyday habits of kindness, honesty and responsibility.', icon: 'compass' },
  ], // DRAFT, presented as intended philosophy
  admission: {
    eligibility: '', // TODO classes open and age criteria
    process: [], // TODO verified steps
    documents: [], // TODO verified list
  },
  social: { facebook: '', instagram: '', youtube: '' },
}
