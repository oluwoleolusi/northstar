import { useState } from 'react'
import type { Service } from '../../types'

export default function ServiceList({ services }: { services: Service[] }) {
  const [openNumber, setOpenNumber] = useState<string | null>(services[0]?.number ?? null)

  return (
    <div className="border-t border-gray-line">
      {services.map((service) => {
        const isOpen = openNumber === service.number
        return (
          <div key={service.number} className="border-b border-gray-line">
            <button
              type="button"
              onClick={() => setOpenNumber(isOpen ? null : service.number)}
              aria-expanded={isOpen}
              aria-controls={`service-panel-${service.number}`}
              className="flex w-full flex-wrap items-baseline justify-between gap-4 py-7 text-left sm:flex-nowrap"
            >
              <span className="flex items-baseline gap-5">
                <span className={`font-mono text-sm ${isOpen ? 'text-signal' : 'text-gray'}`}>
                  {service.number}
                </span>
                <span
                  className={`font-display text-3xl font-medium tracking-tightish transition-colors duration-200 sm:text-4xl ${
                    isOpen ? 'text-signal' : 'text-ink'
                  }`}
                >
                  {service.title}
                </span>
              </span>
              <span className="hidden max-w-[30ch] text-sm text-gray sm:block">
                {service.summary}
              </span>
              <span
                aria-hidden="true"
                className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ease-studio ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
                <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink" />
              </span>
            </button>

            <div
              id={`service-panel-${service.number}`}
              className={`grid transition-all duration-300 ease-studio ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 pb-10 sm:grid-cols-2 sm:gap-16">
                  <p className="max-w-[46ch] text-[1.05rem] leading-relaxed text-gray">
                    {service.detail}
                  </p>
                  <ul className="space-y-2.5">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center gap-3 text-sm text-ink">
                        <span className="h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
