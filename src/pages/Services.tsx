import { services } from '../data/services'
import ServiceList from '../components/services/ServiceList'

export default function Services() {
  return (
    <>
      <section className="pb-16 pt-32 sm:pt-40">
        <div className="container-editorial max-w-2xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 font-display text-huge font-medium tracking-tightish">
            Five disciplines, applied together.
          </h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-gray">
            Most projects draw on more than one of these at once. Select a
            discipline for more on how we approach it.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-24 sm:pb-32">
        <ServiceList services={services} />
      </section>

      <section className="border-t border-gray-line">
        <img
          src={`${import.meta.env.BASE_URL}images/northstar-services.jpg`}
          alt="Northstar Creative, studio composition"
          className="h-[46vh] w-full object-cover sm:h-[58vh]"
          loading="lazy"
        />
      </section>
    </>
  )
}
