import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks, studio } from '../../data/site'

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHeroRoute =
    location.pathname === '/' ||
    (location.pathname.startsWith('/work/') && location.pathname !== '/work/')

  const transparent = isHeroRoute && !scrolled && !menuOpen

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setScrolled(window.scrollY > 40)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const textColor = transparent ? 'text-paper' : 'text-ink'

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.8rem] uppercase tracking-wideish transition-colors duration-200 ${
      isActive
        ? 'text-signal'
        : `${textColor} ${
            transparent ? 'hover:text-paper' : 'hover:text-gray'
          }`
    }`

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-studio ${
          transparent
            ? 'bg-transparent'
            : 'border-b border-gray-line bg-paper/95 backdrop-blur'
        }`}
      >
        <a
          href="#main"
          className="absolute left-4 top-2 -translate-y-16 bg-ink px-4 py-2 text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>

        <nav className="container-editorial flex h-[4.5rem] items-center justify-between sm:h-20">
          <Link
            to="/"
            className={`font-display text-lg font-semibold tracking-tightish sm:text-xl ${textColor}`}
          >
            NORTHSTAR
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`flex items-center gap-2 text-[0.8rem] uppercase tracking-wideish md:hidden ${
              menuOpen ? 'text-ink' : textColor
            }`}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[60] flex flex-col bg-paper transition-opacity duration-300 ease-studio md:hidden ${
          menuOpen
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-editorial flex h-[4.5rem] shrink-0 items-center justify-end sm:h-20">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-[0.8rem] uppercase tracking-wideish text-ink"
          >
            Close
          </button>
        </div>

        <div className="container-editorial flex flex-1 flex-col justify-center gap-6 pb-24">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 font-display text-5xl font-medium tracking-tightish text-ink"
            >
              <span className="font-mono text-sm text-gray">
                0{index + 1}
              </span>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="container-editorial shrink-0 pb-10">
          <p className="meta">{studio.email}</p>
        </div>
      </div>
    </>
  )
}
