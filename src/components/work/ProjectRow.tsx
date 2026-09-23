import { Link } from 'react-router-dom'
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function ProjectRow({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0')

  if (project.layout === 'featured') {
    return (
      <Link to={`/work/${project.slug}`} className="group block border-b border-gray-line pb-16 pt-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-gray">{num}</span>
          <span className="meta">{project.category} — {project.year}</span>
        </div>
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden bg-charcoal">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-studio group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-huge font-medium tracking-tightish transition-colors duration-300 group-hover:text-signal">
            {project.title}
          </h3>
          <span className="link-arrow">
            View project
            <span className="arrow" aria-hidden="true">→</span>
          </span>
        </div>
        <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-gray">
          {project.description}
        </p>
      </Link>
    )
  }

  if (project.layout === 'wide') {
    return (
      <Link to={`/work/${project.slug}`} className="group block border-b border-gray-line py-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-charcoal">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-studio group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-end">
          <span className="font-mono text-sm text-gray">{num}</span>
          <div>
            <h3 className="font-display text-3xl font-medium tracking-tightish transition-colors duration-300 group-hover:text-signal sm:text-4xl">
              {project.title}
            </h3>
            <p className="meta mt-2">{project.category} — {project.year}</p>
          </div>
          <span className="link-arrow">
            View project
            <span className="arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    )
  }

  if (project.layout === 'text-led') {
    return (
      <Link
        to={`/work/${project.slug}`}
        className="group grid gap-6 border-b border-gray-line py-16 sm:grid-cols-[1fr_0.55fr] sm:gap-12"
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-gray">{num}</span>
            <span className="meta">{project.category} — {project.year}</span>
          </div>
          <h3 className="mt-4 font-display text-4xl font-medium tracking-tightish transition-colors duration-300 group-hover:text-signal sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-gray">
            {project.description}
          </p>
          <span className="link-arrow mt-6">
            View project
            <span className="arrow" aria-hidden="true">→</span>
          </span>
        </div>
        <div className="relative aspect-square w-full overflow-hidden bg-charcoal sm:self-center">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-studio group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
    )
  }

  // standard — alternating split
  const reversed = index % 2 === 1
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group grid gap-6 border-b border-gray-line py-16 sm:grid-cols-2 sm:gap-12"
    >
      <div className={`relative aspect-[4/3] w-full overflow-hidden bg-charcoal ${reversed ? 'sm:order-2' : ''}`}>
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-studio group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className={`flex flex-col justify-center ${reversed ? 'sm:order-1' : ''}`}>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-gray">{num}</span>
          <span className="meta">{project.category} — {project.year}</span>
        </div>
        <h3 className="mt-4 font-display text-4xl font-medium tracking-tightish transition-colors duration-300 group-hover:text-signal">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-gray">
          {project.description}
        </p>
        <span className="link-arrow mt-6">
          View project
          <span className="arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
