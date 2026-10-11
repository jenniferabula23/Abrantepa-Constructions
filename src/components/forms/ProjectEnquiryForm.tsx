import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/data/content'
import { cn } from '@/utils/cn'

interface ProjectFormState {
  fullName: string
  email: string
  phone: string
  projectType: string
  buildType: string
  location: string
  description: string
  budget: string
  timeline: string
}

interface FormErrors {
  [key: string]: string | undefined
}

const initialState: ProjectFormState = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  buildType: '',
  location: '',
  description: '',
  budget: '',
  timeline: '',
}

const steps = [
  'Contact details',
  'Project type',
  'Scope and timing',
  'Review',
] as const

function validateStep(step: number, values: ProjectFormState): FormErrors {
  const errors: FormErrors = {}

  if (step === 0) {
    if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
    if (!values.email.trim()) {
      errors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Please enter a valid email address.'
    }
  }

  if (step === 1) {
    if (!values.projectType) errors.projectType = 'Please select a project type.'
    if (!values.buildType) errors.buildType = 'Please select a build type.'
    if (!values.location.trim()) {
      errors.location = 'Please share the site or property location.'
    }
  }

  if (step === 2) {
    if (!values.description.trim() || values.description.trim().length < 20) {
      errors.description =
        'Please describe the project in at least 20 characters.'
    }
  }

  return errors
}

export function ProjectEnquiryForm() {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<ProjectFormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const goNext = () => {
    const nextErrors = validateStep(step, values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setStep((current) => Math.min(current + 1, steps.length - 1))
  }

  const goBack = () => {
    setErrors({})
    setStep((current) => Math.max(current - 1, 0))
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const contactErrors = validateStep(0, values)
    const typeErrors = validateStep(1, values)
    const scopeErrors = validateStep(2, values)
    const all = { ...contactErrors, ...typeErrors, ...scopeErrors }
    setErrors(all)
    if (Object.keys(all).length > 0) {
      if (Object.keys(contactErrors).length) setStep(0)
      else if (Object.keys(typeErrors).length) setStep(1)
      else setStep(2)
      return
    }

    setStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.info('[Abrantepa Project Enquiry]', values)
    setStatus('success')
    setValues(initialState)
    setStep(0)
  }

  if (status === 'success') {
    return (
      <div className="border border-accent/50 bg-ink/50 p-8" role="status">
        <h3 className="headline-md text-[1.5rem] text-warm-white">Project request prepared</h3>
        <p className="body-lg mt-3 text-sand">{siteContent.forms.projectSuccess}</p>
        <p className="mt-3 text-sm text-stone">
          {siteContent.forms.integrationNote}
        </p>
        <Button type="button" className="mt-6" onClick={() => setStatus('idle')}>
          Start Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-sand uppercase">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-sm text-stone">{steps[step]}</p>
        </div>
        <div className="h-1 bg-white/10" aria-hidden="true">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 ? (
        <div className="space-y-5">
          <Field label="Full name" htmlFor="fullName" error={errors.fullName}>
            <input
              id="fullName"
              value={values.fullName}
              onChange={(e) => setValues({ ...values, fullName: e.target.value })}
              className={inputClass(errors.fullName)}
              autoComplete="name"
            />
          </Field>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Email" htmlFor="email" error={errors.email}>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                className={inputClass(errors.email)}
                autoComplete="email"
              />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                className={inputClass()}
                autoComplete="tel"
              />
            </Field>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-5">
          <Field
            label="Project type"
            htmlFor="projectType"
            error={errors.projectType}
          >
            <select
              id="projectType"
              value={values.projectType}
              onChange={(e) =>
                setValues({ ...values, projectType: e.target.value })
              }
              className={inputClass(errors.projectType)}
            >
              <option value="">Select project type</option>
              <option>Architectural Design</option>
              <option>Traditional Home Modernization</option>
              <option>Residential Construction</option>
              <option>Renovation and Remodeling</option>
              <option>Interior and Exterior Design</option>
              <option>Not sure yet</option>
            </select>
          </Field>
          <Field label="Build type" htmlFor="buildType" error={errors.buildType}>
            <select
              id="buildType"
              value={values.buildType}
              onChange={(e) => setValues({ ...values, buildType: e.target.value })}
              className={inputClass(errors.buildType)}
            >
              <option value="">Select build type</option>
              <option>New build</option>
              <option>Renovation</option>
              <option>Modernization</option>
              <option>Combination</option>
            </select>
          </Field>
          <Field
            label="Site or property location"
            htmlFor="location"
            error={errors.location}
          >
            <input
              id="location"
              value={values.location}
              onChange={(e) => setValues({ ...values, location: e.target.value })}
              className={inputClass(errors.location)}
              placeholder="Neighbourhood, city, or region"
            />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <Field
            label="Project description"
            htmlFor="description"
            error={errors.description}
          >
            <textarea
              id="description"
              rows={5}
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              className={inputClass(errors.description)}
              placeholder="Describe the property, goals, and any priorities."
            />
          </Field>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Estimated budget (optional)" htmlFor="budget">
              <select
                id="budget"
                value={values.budget}
                onChange={(e) => setValues({ ...values, budget: e.target.value })}
                className={inputClass()}
              >
                <option value="">Prefer not to say</option>
                <option>Exploring options</option>
                <option>Under discussion</option>
                <option>Defined range available on request</option>
              </select>
            </Field>
            <Field label="Expected timeline" htmlFor="timeline">
              <select
                id="timeline"
                value={values.timeline}
                onChange={(e) =>
                  setValues({ ...values, timeline: e.target.value })
                }
                className={inputClass()}
              >
                <option value="">Select timeline</option>
                <option>As soon as possible</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>6+ months</option>
                <option>Still planning</option>
              </select>
            </Field>
          </div>
          <p className="text-sm text-stone">
            File uploads can be enabled once a storage or form backend is
            connected.
          </p>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-4 border border-white/15 bg-ink/35 p-6 text-sm text-warm-white">
          <ReviewRow label="Name" value={values.fullName} />
          <ReviewRow label="Email" value={values.email} />
          <ReviewRow label="Phone" value={values.phone || '—'} />
          <ReviewRow label="Project type" value={values.projectType} />
          <ReviewRow label="Build type" value={values.buildType} />
          <ReviewRow label="Location" value={values.location} />
          <ReviewRow label="Budget" value={values.budget || 'Not specified'} />
          <ReviewRow label="Timeline" value={values.timeline || 'Not specified'} />
          <ReviewRow label="Description" value={values.description} />
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline-light" onClick={goBack}>
            Back
          </Button>
        ) : null}
        {step < steps.length - 1 ? (
          <Button type="button" onClick={goNext}>
            Continue
          </Button>
        ) : (
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Preparing…' : 'Submit Project Request'}
          </Button>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.72rem] font-semibold tracking-[0.14em] text-sand uppercase"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-white/10 pb-3 md:grid-cols-[10rem_1fr]">
      <dt className="text-stone">{label}</dt>
      <dd className="text-warm-white">{value}</dd>
    </div>
  )
}

function inputClass(error?: string) {
  return cn(
    'w-full border bg-ink/40 px-4 py-3 text-sm text-warm-white outline-none transition-colors placeholder:text-stone focus:border-accent',
    error ? 'border-red-400' : 'border-white/20',
  )
}
