import React from 'react'
import resume from './data/resume'

const socialLinks = [
  { label: 'GitHub', url: import.meta.env.VITE_GITHUB_URL },
  { label: 'LinkedIn', url: import.meta.env.VITE_LINKEDIN_URL },
  { label: 'Twitter', url: import.meta.env.VITE_TWITTER_URL },
  { label: 'Resume', url: import.meta.env.VITE_RESUME_URL },
]

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="max-w-3xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default function App() {
  const name = import.meta.env.VITE_NAME || 'Your Name'
  const role = import.meta.env.VITE_ROLE || 'Your Role'
  const location = import.meta.env.VITE_LOCATION || 'Your Location'
  const email = import.meta.env.VITE_EMAIL
  const phone = import.meta.env.VITE_PHONE

  return (
    <div>
      <header className="border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg text-gray-600">{role}</p>
          <p className="text-gray-500">{location}</p>
          <div className="flex gap-4 mt-3 flex-wrap">
            {socialLinks
              .filter((s) => s.url)
              .map((s) => (
                <a
                  key={s.label}
                  className="underline underline-offset-4 hover:text-sky-600"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            {email && (
              <a className="underline underline-offset-4" href={`mailto:${email}`}>
                Email
              </a>
            )}
            {phone && (
              <a className="underline underline-offset-4" href={`tel:${phone}`}>
                Phone
              </a>
            )}
          </div>
        </div>
      </header>

      <main>
        <Section title="About">
          <p>{resume.about}</p>
        </Section>

        <Section title="Experience">
          {resume.experience.map((exp) => (
            <div key={exp.company} className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-semibold">
                  {exp.title} — {exp.company}
                </h3>
                <span className="text-sm text-gray-500">
                  {exp.start} — {exp.end}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{exp.summary}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Projects">
          <div className="grid md:grid-cols-2 gap-4">
            {resume.projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-4 rounded-lg border hover:border-sky-400"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-gray-700">{p.description}</p>
                {p.tags?.length ? (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </a>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="flex gap-2 flex-wrap">
            {resume.skills.map((s) => (
              <span key={s} className="bg-gray-200 px-2 py-1 rounded text-sm">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Education">
          {resume.education.map((e) => (
            <div key={e.school} className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-semibold">
                  {e.degree} — {e.school}
                </h3>
                <span className="text-sm text-gray-500">{e.year}</span>
              </div>
              <p className="mt-2 text-gray-700">{e.details}</p>
            </div>
          ))}
        </Section>
      </main>

      <footer className="mt-16 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {name}
      </footer>
    </div>
  )
}
