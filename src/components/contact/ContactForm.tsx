'use client'

import { useState, useMemo, useId } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { Button, FadeIn } from '@/components'
import { createContactSchema } from '@/schemas/contact'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

function TextInput({
  label,
  error,
  register,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & {
  label: string
  error?: string
  register?: any
}) {
  const id = useId()
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        {...props}
        {...register}
        placeholder=" "
        className={`peer block w-full border ${
          error ? 'border-red-500' : 'border-neutral-300'
        } focus:outline-hidden bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl`}
      />
      <label
        htmlFor={id}
        className="peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
      {error && (
        <p className="absolute bottom-[2px] mt-1 px-6 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const router = useRouter()
  const t = useTranslations('contactForm')
  const v = useTranslations('validation')
  const schema = useMemo(() => createContactSchema(v), [v])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', phone: '', message: '' }
  })

  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (data: any) => {
    setIsSending(true)
    try {
      const form = new FormData()
      Object.entries(data).forEach(([k, v]) => form.append(k, v as string))

      const r = await fetch('https://formspree.io/f/mnnpvebn', {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' }
      })

      if (r.ok) {
        toast.success(t('successMessage'))
        router.push('/thank-you') // Add redirect
      } else {
        toast.error(t('errorMessage'))
      }
    } catch {
      toast.error(t('unexpectedErrorMessage'))
    } finally {
      setIsSending(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-title text-base font-semibold text-neutral-950 md:text-xl">
          {t('workInquiries')}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t('name')} autoComplete="name" register={register('name')} error={errors.name?.message} />
          <TextInput label={t('email')} type="email" autoComplete="email" register={register('email')} error={errors.email?.message} />
          <TextInput label={t('phone')} type="tel" autoComplete="tel" register={register('phone')} error={errors.phone?.message} />
          <TextInput label={t('message')} register={register('message')} error={errors.message?.message} />
        </div>
        <Button type="submit" className="mt-10 md:text-lg" disabled={isSending}>
          {isSending ? t('sending') : t('cta')}
        </Button>
      </form>
    </FadeIn>
  )
}
