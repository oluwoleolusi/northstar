import { studio } from '../data/site'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-[14ch] font-display text-huge font-medium tracking-tightish">
            Have something worth building?
          </h1>
          <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-gray">
            Tell us about the project and we’ll get back to you within a
            couple of days.
          </p>

          <div className="mt-12 space-y-6 border-t border-gray-line pt-8">
            <div>
              <p className="field-label">Email</p>
              <a href={`mailto:${studio.email}`} className="mt-2 block text-lg text-ink hover:text-signal">
                {studio.email}
              </a>
            </div>
            <div>
              <p className="field-label">Location</p>
              <p className="mt-2 text-lg text-ink">{studio.location}</p>
            </div>
            <div>
              <p className="field-label">Follow</p>
              <div className="mt-2 flex gap-5">
                {studio.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink underline decoration-gray-line underline-offset-4 hover:text-signal hover:decoration-signal"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
