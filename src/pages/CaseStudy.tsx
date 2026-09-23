import { Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import CaseStudyHero from '../components/work/CaseStudyHero'
import NextProject from '../components/work/NextProject'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <article>
      <CaseStudyHero project={project} />

      <section className="section-pad border-b border-gray-line">
        <div className="container-editorial grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <p className="eyebrow">Overview</p>
          <p className="max-w-[62ch] text-2xl leading-[1.5] tracking-tightish sm:text-3xl">
            {project.description}
          </p>
        </div>
      </section>

      <section className="section-pad border-b border-gray-line">
        <div className="container-editorial grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Challenge</p>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-gray">{project.challenge}</p>
          </div>
          <div>
            <p className="eyebrow">Approach</p>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-gray">{project.approach}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-line">
        <img
          src={project.gallery[1]}
          alt={`${project.title} — ${project.services[0] ?? 'identity work'}`}
          className="h-[60vh] w-full object-cover sm:h-[80vh]"
          loading="lazy"
        />
        <div className="container-editorial py-10">
          <p className="meta">{project.services[0] ?? 'Identity'}</p>
        </div>
      </section>

      {project.services[1] && (
        <section className="border-b border-gray-line">
          <div className="grid lg:grid-cols-2">
            <img
              src={project.gallery[2]}
              alt={`${project.title} — ${project.services[1]}`}
              className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full"
              loading="lazy"
            />
            <div className="flex flex-col justify-center px-6 py-14 sm:px-8 lg:px-14">
              <p className="eyebrow">{project.services[1]}</p>
              <p className="mt-5 max-w-[46ch] font-display text-3xl font-medium leading-[1.15] tracking-tightish sm:text-4xl">
                {project.title}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="container-editorial max-w-2xl">
          <p className="eyebrow">Outcome</p>
          <p className="mt-5 text-2xl leading-[1.5] tracking-tightish sm:text-3xl">
            {project.outcome}
          </p>
        </div>
      </section>

      <NextProject project={next} />
    </article>
  )
}
