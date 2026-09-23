import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function ServicesTeaser() {
  return (
    <section className="section-pad border-t border-gray-line">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-8">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-display text-huge font-medium tracking-tightish">
              Five disciplines, one studio.
            </h2>
          </div>
          <Link to="/services" className="link-arrow">
            All services
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="border-t border-gray-line">
          {services.map((service) => (
            <li key={service.number} className="group border-b border-gray-line">
              <Link
                to="/services"
                className="flex items-baseline justify-between gap-6 py-6 transition-colors duration-200"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-gray">{service.number}</span>
                  <span className="font-display text-2xl font-medium tracking-tightish transition-colors duration-200 group-hover:text-signal sm:text-3xl">
                    {service.title}
                  </span>
                </span>
                <span className="hidden max-w-[32ch] text-sm text-gray sm:block">
                  {service.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
