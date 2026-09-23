import { Link } from 'react-router-dom'
import type { Project } from '../../types'

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-gray-line">
      <Link to={`/work/${project.slug}`} className="group block">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-charcoal">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-studio group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="container-editorial absolute inset-0 flex flex-col justify-end pb-12">
            <p className="meta text-paper/70">Next project</p>
            <h2 className="mt-3 font-display text-huge font-medium tracking-tightish text-paper transition-colors duration-300 group-hover:text-signal">
              {project.title}
            </h2>
          </div>
        </div>
      </Link>
    </section>
  )
}
