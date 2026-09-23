import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-huge font-medium tracking-tightish">
        Page not found.
      </h1>
      <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-gray">
        The page you’re looking for doesn’t exist, or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  )
}
