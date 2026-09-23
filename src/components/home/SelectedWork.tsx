import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import ProjectRow from '../work/ProjectRow'

const featuredSlugs = ['aura', 'mota', 'field-notes', 'orbit']

export default function SelectedWork() {
  const selected = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p))

  return (
    <section className="section-pad">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-gray-line pb-8">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 font-display text-huge font-medium tracking-tightish">
              A short list, on purpose.
            </h2>
          </div>
          <Link to="/work" className="link-arrow">
            All projects
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          {selected.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
