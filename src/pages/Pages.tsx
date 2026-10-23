import { Phone, Mail, Clock } from 'lucide-react'
import { school } from '../config/school'
import { PageHero, Section, Photo, Pending, MapCard, Btn } from '../components/ui'
import Enquiry from '../components/Enquiry'

const Card = ({ title, text }: { title: string; text: string }) => (
  <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10"><h3 className="text-lg font-semibold text-navy">{title}</h3><p className="mt-2 text-ink/75">{text}</p></article>
)
const H2 = ({ children }: { children: string }) => <h2 className="mb-5 text-3xl font-bold text-navy">{children}</h2>
const List = ({ items }: { items: string[] }) => <ul className="list-disc space-y-2 pl-6 text-ink/85">{items.map(i => <li key={i}>{i}</li>)}</ul>

export const About = () => (
  <>
    <PageHero title={`About ${school.name}`} intro="A school in Gwalior focused on helping children learn well and grow into thoughtful people." />
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div><H2>Who we are</H2><p className="text-ink/85">{school.name} is a school in {school.address}. Our aim is to give every child a good start in learning, in a setting where they feel known, safe and encouraged.</p></div>
        <div><H2>Our philosophy</H2><p className="text-ink/85">Children learn best when they are curious and confident. We want classrooms where questions are welcome, effort is recognised and good habits form every day.</p></div>
      </div>
    </Section>
    <Section tone="sky">
      <div className="grid gap-5 md:grid-cols-3">
        <Card title="Commitment to students" text="We want each child to progress in learning and in character, at a pace that suits them." />
        <Card title="A supportive environment" text="Children take risks and try new things when they feel safe. A caring setting comes first." />
        <Card title="Parents and teachers together" text="Regular, open communication between home and school helps children do their best." />
      </div>
    </Section>
    <Section>
      <H2>Gallery</H2>
      <div className="grid gap-5 sm:grid-cols-3">{[0, 1, 2].map(i => <Photo key={i} hue={i} alt={`Placeholder for school photograph ${i + 1}`} />)}</div>
      <p className="mt-4 text-sm text-ink/60">Placeholder illustrations. Real school photographs will be added here.</p>
    </Section>
  </>
)

export const Vision = () => (
  <>
    <PageHero title="Vision and mission" intro="What we hope for our children and how we plan to get there." />
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold text-gold">Vision</h2><p className="mt-3 text-lg">{school.vision}</p></div>
        <div className="rounded-3xl bg-sky p-8"><h2 className="text-2xl font-bold text-navy">Mission</h2><p className="mt-3 text-lg">{school.mission}</p></div>
      </div>
      <p className="mt-4 text-sm text-ink/60">These statements are drafts awaiting school management approval.</p>
    </Section>
    <Section tone="sky">
      <H2>Core values</H2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{school.values.map(v => <Card key={v.title} {...v} />)}</div>
    </Section>
    <Section>
      <H2>The environment we aspire to</H2>
      <p className="max-w-3xl text-ink/85">A school where academic learning and personal growth go together: where children are challenged, supported and trusted to take responsibility, and where families feel welcome.</p>
    </Section>
  </>
)

export const Academics = () => (
  <>
    <PageHero title="Academics" intro="How learning is organised at the school." />
    <Section><H2>Learning at our school</H2><p className="max-w-3xl text-ink/85">We want children to build strong foundations and enjoy learning. Specific details below will be published once confirmed by the school.</p></Section>
    <Section tone="sky"><H2>Classes</H2>{school.classes.length ? <List items={school.classes} /> : <Pending what="The list of classes" />}</Section>
    <Section><H2>Curriculum and teaching approach</H2>
      {school.affiliation ? <p className="text-ink/85">Affiliation: {school.affiliation}</p> : <Pending what="Curriculum and affiliation details" />}</Section>
    <Section tone="sky"><H2>Co-curricular activities</H2>{school.activities.length ? <List items={school.activities} /> : <Pending what="The list of activities" />}</Section>
  </>
)

export const Admissions = () => {
  const a = school.admission
  return (
    <>
      <PageHero title="Admissions" intro="Welcome. We are glad you are considering our school for your child." />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div><H2>Classes and eligibility</H2>{a.eligibility ? <p className="text-ink/85">{a.eligibility}</p> : <Pending what="Eligibility information" />}</div>
            <div><H2>Admission process</H2>{a.process.length ? <ol className="list-decimal space-y-2 pl-6">{a.process.map(s => <li key={s}>{s}</li>)}</ol> : <Pending what="The admission process" />}</div>
            <div><H2>Documents required</H2>{a.documents.length ? <List items={a.documents} /> : <Pending what="The document list" />}</div>
            <Btn to="/contact" variant="dark">Contact the school</Btn>
          </div>
          <Enquiry />
        </div>
      </Section>
    </>
  )
}

export const Contact = () => (
  <>
    <PageHero title="Contact us" intro="We would love to hear from you." />
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <MapCard />
          <ul className="space-y-3 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10">
            <li className="flex gap-3"><Phone aria-hidden className="h-5 w-5 text-navy" />{school.phone ? <a href={`tel:${school.phone.replace(/\s/g, '')}`}>{school.phone}</a> : <span className="text-ink/60">Phone number coming soon</span>}</li>
            <li className="flex gap-3"><Mail aria-hidden className="h-5 w-5 text-navy" />{school.email ? <a href={`mailto:${school.email}`}>{school.email}</a> : <span className="text-ink/60">Email address coming soon</span>}</li>
            <li className="flex gap-3"><Clock aria-hidden className="h-5 w-5 text-navy" />{school.timings || <span className="text-ink/60">Office hours coming soon</span>}</li>
          </ul>
        </div>
        <Enquiry />
      </div>
    </Section>
  </>
)
