import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { ContactFormData } from '../../types'
import { projectTypes, budgetRanges } from '../../data/site'

type Errors = Partial<Record<keyof ContactFormData, string>>

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: ContactFormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Enter your name.'
  if (!data.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!data.projectType) errors.projectType = 'Select a project type.'
  if (!data.message.trim()) errors.message = 'Tell us a little about the project.'
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = validate(form)
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
      firstInvalid?.focus()
      return
    }

    setStatus('submitting')
    window.setTimeout(() => setStatus('success'), 1000)
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite">
        <p className="eyebrow">Message sent</p>
        <p className="mt-4 max-w-[42ch] font-display text-3xl font-medium leading-tight tracking-tightish sm:text-4xl">
          Thanks, {form.name.split(' ')[0]}. We’ll be in touch shortly.
        </p>
        <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-gray">
          This is a portfolio demonstration, so nothing was actually sent. In
          a live studio site, this would route to our project inbox.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm)
            setStatus('idle')
          }}
          className="btn-outline mt-8"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  const fieldClass = (hasError: boolean) => `field-input ${hasError ? 'border-signal' : ''}`

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.name))}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-signal">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.email))}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-signal">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="field-label">
          Company <span className="normal-case text-gray/70">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update('company', e.target.value)}
          className="mt-2 field-input"
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="field-label">
            Project type
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            className={`mt-2 ${fieldClass(Boolean(errors.projectType))}`}
          >
            <option value="">Select</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-1.5 text-xs text-signal">
              {errors.projectType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="field-label">
            Budget range <span className="normal-case text-gray/70">(optional)</span>
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className="mt-2 field-input"
          >
            <option value="">Select</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Tell us about the project
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`mt-2 ${fieldClass(Boolean(errors.message))}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-signal">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto sm:min-w-[220px] disabled:cursor-wait"
      >
        {status === 'submitting' ? (
          <>
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-paper/40 border-t-paper"
            />
            Sending
          </>
        ) : (
          'Send enquiry'
        )}
      </button>
    </form>
  )
}
