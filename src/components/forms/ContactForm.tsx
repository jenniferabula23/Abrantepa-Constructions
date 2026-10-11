import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/data/content'
import { cn } from '@/utils/cn'

interface FormState {
  fullName: string
  email: string
  phone: string
  enquiryType: string
  projectLocation: string
  description: string
  preferredContact: string
}

interface FormErrors {
  [key: string]: string | undefined
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  enquiryType: '',
  projectLocation: '',
  description: '',
  preferredContact: 'Email',
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.enquiryType) errors.enquiryType = 'Please select an enquiry type.'
  if (!values.description.trim() || values.description.trim().length < 20) {
    errors.description = 'Please share a short project description (at least 20 characters).'
  }
  if (!values.preferredContact) {
    errors.preferredContact = 'Please choose a preferred contact method.'
  }
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    // Development-ready submission placeholder.
    // Replace with Formspree, Resend, API route, or CRM webhook.
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.info('[Abrantepa Contact Enquiry]', values)
    setStatus('success')
    setValues(initialState)
  }

  if (status === 'success') {
    return (
      <div className="border border-accent/50 bg-ink/50 p-8" role="status">
        <h3 className="headline-md text-[1.5rem] text-warm-white">Enquiry prepared</h3>
        <p className="body-lg mt-3 text-sand">{siteContent.forms.contactSuccess}</p>
        <p className="mt-3 text-sm text-stone">{siteContent.forms.integrationNote}</p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send Another Enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field
        label="Full name"
        error={errors.fullName}
        htmlFor="fullName"
      >
        <input
          id="fullName"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={(e) => setValues({ ...values, fullName: e.target.value })}
          className={inputClass(errors.fullName)}
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email address" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={inputClass(errors.email)}
          />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={inputClass()}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Enquiry type" error={errors.enquiryType} htmlFor="enquiryType">
          <select
            id="enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={(e) => setValues({ ...values, enquiryType: e.target.value })}
            className={inputClass(errors.enquiryType)}
          >
            <option value="">Select type</option>
            <option>Architectural Design</option>
            <option>Home Modernization</option>
            <option>New Construction</option>
            <option>Renovation</option>
            <option>General Enquiry</option>
          </select>
        </Field>
        <Field label="Project location" htmlFor="projectLocation">
          <input
            id="projectLocation"
            name="projectLocation"
            value={values.projectLocation}
            onChange={(e) =>
              setValues({ ...values, projectLocation: e.target.value })
            }
            className={inputClass()}
            placeholder="City, region, or area"
          />
        </Field>
      </div>

      <Field
        label="Project description"
        error={errors.description}
        htmlFor="description"
      >
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={(e) => setValues({ ...values, description: e.target.value })}
          className={inputClass(errors.description)}
          placeholder="Tell us about the home, site, or transformation you have in mind."
        />
      </Field>

      <fieldset>
        <legend className="mb-3 text-[0.72rem] font-semibold tracking-[0.14em] text-sand uppercase">
          Preferred contact method
        </legend>
        <div className="flex flex-wrap gap-4">
          {['Email', 'Phone', 'WhatsApp'].map((method) => (
            <label key={method} className="inline-flex items-center gap-2 text-sm text-warm-white">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={values.preferredContact === method}
                onChange={(e) =>
                  setValues({ ...values, preferredContact: e.target.value })
                }
                className="accent-accent"
              />
              {method}
            </label>
          ))}
        </div>
        {errors.preferredContact ? (
          <p className="mt-2 text-sm text-red-700" role="alert">
            {errors.preferredContact}
          </p>
        ) : null}
      </fieldset>

      <Button type="submit" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Preparing…' : 'Send Enquiry'}
      </Button>
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

function inputClass(error?: string) {
  return cn(
    'w-full border bg-ink/40 px-4 py-3 text-sm text-warm-white outline-none transition-colors placeholder:text-stone focus:border-accent',
    error ? 'border-red-400' : 'border-white/20',
  )
}
