import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import CategoryFilter from '../components/work/CategoryFilter'
import type { WorkCategory } from '../components/work/CategoryFilter'
import ProjectRow from '../components/work/ProjectRow'

export default function Work() {
  const [category, setCategory] = useState<WorkCategory>('All')

  const filtered = useMemo(() => {
    if (category === 'All') return projects
    return projects.filter((p) => p.services.includes(category))
  }, [category])

  return (
    <section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="container-editorial">
        <div className="max-w-2xl border-b border-gray-line pb-12">
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 font-display text-huge font-medium tracking-tightish">
            Selected projects, {projects.length} and counting.
          </h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-gray">
            Identity, digital and campaign work for clients across skincare,
            mobility, publishing, hospitality, technology and food.
          </p>
        </div>

        <div className="mt-10">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-gray">No projects in this category yet.</p>
        ) : (
          <div className="mt-4">
            {filtered.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
