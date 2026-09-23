import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-ink">
      <img
        src={`${import.meta.env.BASE_URL}images/northstar-hero.jpg`}
        alt="Northstar Creative"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

      <div className="container-editorial relative pb-16 pt-28 sm:pb-20">
        <p className="meta text-paper/60">Northstar Creative — Studio 04</p>
        <h1 className="mt-5 max-w-[16ch] font-display text-mega font-medium text-paper">
          WE DESIGN THE BRANDS EVERYONE ELSE COPIES.
        </h1>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[46ch] text-[1.05rem] leading-relaxed text-paper/75">
            An independent studio building identity, digital and campaign
            work for brands moving culture forward.
          </p>
          <Link to="/work" className="btn-ghost-light shrink-0">
            View selected work
          </Link>
        </div>
      </div>
    </section>
  )
}
