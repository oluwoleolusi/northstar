const options = [
  'All',
  'Brand Identity',
  'Digital Experiences',
  'Art Direction',
  'Creative Strategy',
  'Campaigns',
] as const

export type WorkCategory = (typeof options)[number]

interface Props {
  active: WorkCategory
  onChange: (value: WorkCategory) => void
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Filter work by category"
      className="scrollbar-none flex gap-6 overflow-x-auto border-b border-gray-line pb-4"
    >
      {options.map((option) => {
        const isActive = option === active
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            className={`shrink-0 whitespace-nowrap font-mono text-[0.75rem] uppercase tracking-wideish transition-colors duration-200 ${
              isActive ? 'text-signal' : 'text-gray hover:text-ink'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
