import type { Project } from '../../types'

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full flex-col justify-end overflow-hidden bg-ink">
      <img
        src={project.heroImage}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="container-editorial relative pb-16 pt-28 sm:pb-20">
        <p className="meta text-paper/60">{project.category}</p>
        <h1 className="mt-4 font-display text-mega font-medium text-paper">{project.title}</h1>
        <p className="mt-6 text-[1.05rem] text-paper/75">{project.year}</p>
      </div>
    </section>
  )
}
