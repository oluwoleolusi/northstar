import { principles, facts } from '../data/philosophy'

export default function Studio() {
  return (
    <>
      <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div className="container-editorial grid gap-10 border-b border-gray-line pb-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Studio</p>
            <h1 className="mt-4 font-display text-huge font-medium tracking-tightish">
              Northstar is an independent creative studio working across
              identity, digital and culture.
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-gray">
              We work with a short list of clients at a time, across
              industries, by design. The work spans identity systems, digital
              experiences and the campaigns that carry a brand into the
              world — held together by one studio’s point of view rather
              than a house style.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-gray-line">
        <div className="container-editorial">
          <p className="eyebrow">Philosophy</p>
          <div className="mt-8 grid gap-x-8 gap-y-14 border-t border-gray-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.number}>
                <span className="font-mono text-sm text-signal">{principle.number}</span>
                <p className="mt-3 font-display text-2xl font-medium leading-tight tracking-tightish sm:text-3xl">
                  {principle.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-gray-line">
        <div className="container-editorial grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 max-w-[18ch] text-3xl leading-[1.15] tracking-tightish sm:text-4xl">
              Structure first. Style follows.
            </h2>
          </div>
          <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-gray">
            Every project starts with the same question: what is this brand
            actually trying to do. The answer shapes the strategy, the
            strategy shapes the system, and the system is what makes the
            identity hold up once it leaves the studio — across a site, a
            storefront, a slide deck, a season.
          </p>
        </div>
      </section>

      <section className="grid gap-1 border-b border-gray-line sm:grid-cols-[1.4fr_1fr]">
        <img
          src={`${import.meta.env.BASE_URL}images/northstar-studio-01.jpg`}
          alt="Northstar Creative studio detail"
          className="h-[42vh] w-full object-cover sm:h-[60vh]"
          loading="lazy"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/northstar-studio-02.jpg`}
          alt="Northstar Creative studio detail, secondary view"
          className="h-[42vh] w-full object-cover sm:h-[60vh]"
          loading="lazy"
        />
      </section>

      <section className="section-pad">
        <div className="container-editorial">
          <p className="eyebrow">In short</p>
          <dl className="mt-8 grid gap-x-8 gap-y-8 border-t border-gray-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="meta">{fact.label}</dt>
                <dd className="mt-2 text-lg text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
