import { Link } from 'react-router-dom'
import { studio, navLinks } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-line bg-ink text-paper">
      <div className="container-editorial py-20 sm:py-28">
        <Link to="/contact" className="group inline-block">
          <p className="font-display text-huge font-medium tracking-tightish">
            Have something
            <br />
            worth building?
          </p>
          <span className="link-arrow mt-6 text-paper">
            Start a project
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </span>
        </Link>

        <div className="mt-20 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-3">
          <div>
            <p className="meta text-paper/50">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-paper/80 hover:text-signal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="meta text-paper/50">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              <li>
                <a href={`mailto:${studio.email}`} className="hover:text-signal">
                  {studio.email}
                </a>
              </li>
              <li>{studio.location}</li>
            </ul>
          </div>

          <div>
            <p className="meta text-paper/50">Follow</p>
            <ul className="mt-4 space-y-2.5">
              {studio.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-paper/80 hover:text-signal"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/40 sm:flex-row sm:justify-between">
          <p>&copy; {year} {studio.name}. All rights reserved.</p>
          <p>Design &amp; development portfolio concept.</p>
        </div>
      </div>
    </footer>
  )
}
