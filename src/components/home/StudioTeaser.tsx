import { Link } from 'react-router-dom'
import { principles } from '../../data/philosophy'

export default function StudioTeaser() {
  return (
    <section className="section-pad border-t border-gray-line bg-charcoal text-paper">
      <div className="container-editorial">
        <p className="eyebrow text-paper/50">The studio</p>
        <p className="mt-5 max-w-[26ch] font-display text-huge font-medium tracking-tightish">
          Small enough to stay selective. Established enough to matter.
        </p>

        <div className="mt-16 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.number}>
              <span className="font-mono text-sm text-signal">{principle.number}</span>
              <p className="mt-3 font-display text-xl font-medium leading-tight tracking-tightish">
                {principle.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <Link to="/studio" className="link-arrow mt-16 text-paper">
          About the studio
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
