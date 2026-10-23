import { school } from '../config/school'
import { Btn, Section, Photo, ThemeIcon, MapCard } from '../components/ui'

export default function Home() {
  return (
    <>
      <div className="bg-sky/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-navy md:text-6xl">{school.tagline}</h1>
            <p className="mt-5 max-w-lg text-lg text-ink/80">{school.name} in Gwalior is a place where children are encouraged to be curious, build confidence and discover what they can do.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Btn to="/about">Explore our school</Btn><Btn to="/contact" variant="ghost">Get in touch</Btn></div>
          </div>
          <Photo alt="Illustration of a school building (placeholder for a school photograph)" className="shadow-xl" />
        </div>
      </div>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Photo alt="Placeholder image for a classroom photograph" hue={1} />
          <div><h2 className="text-3xl font-bold text-navy">Welcome to {school.name}</h2>
            <p className="mt-4 text-ink/80">We believe school is about more than marks. It is where children build strong learning habits, grow curious about the world and learn the values that shape who they become.</p>
            <div className="mt-6"><Btn to="/about" variant="dark">About us</Btn></div></div>
        </div>
      </Section>

      <Section tone="sky">
        <h2 className="text-3xl font-bold text-navy">Our educational approach</h2>
        <p className="mt-2 max-w-2xl text-ink/80">The ideas we want every child's school day to reflect.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {school.themes.map(t => (
            <article key={t.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/30 text-navy"><ThemeIcon name={t.icon} /></span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{t.title}</h3><p className="mt-2 text-sm text-ink/75">{t.text}</p>
            </article>))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-navy">Vision and mission</h2>
        <p className="mt-4 max-w-3xl text-xl text-ink/85">{school.vision}</p>
        <div className="mt-6"><Btn to="/vision-mission" variant="ghost">Read our vision and mission</Btn></div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-bold">Thinking about admission?</h2><p className="mt-2 max-w-xl text-white/80">Contact the school office for admission information. We are happy to answer your questions.</p></div>
          <Btn to="/admissions">Admission information</Btn>
        </div>
      </Section>

      <Section><h2 className="mb-8 text-3xl font-bold text-navy">Find us</h2><div className="max-w-xl"><MapCard /></div></Section>
    </>
  )
}
