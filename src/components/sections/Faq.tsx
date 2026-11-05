'use client'

import { useId, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container, FadeIn } from '@/components'

const ITEMS = ['remote', 'stack', 'redesign', 'languages', 'timing', 'support'] as const

function FaqItem({ id, question, answer }: { id: string; question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const panelId = `${id}-panel`
  const buttonId = `${id}-button`

  return (
    <li className="border-b border-neutral-200">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
        >
          <span className="font-title text-lg font-semibold tracking-tight text-neutral-950 md:text-xl">
            {question}
          </span>
          {/* Plus turns into a cross: the icon itself states open/closed. */}
          <span
            aria-hidden
            className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-colors ${
              open
                ? 'rotate-45 border-neutral-950 bg-neutral-950'
                : 'border-neutral-300 bg-white group-hover:border-neutral-950'
            }`}
          >
            <span className={`absolute h-px w-3 ${open ? 'bg-white' : 'bg-neutral-950'}`} />
            <span className={`absolute h-3 w-px ${open ? 'bg-white' : 'bg-neutral-950'}`} />
          </span>
        </button>
      </h3>
      {/* grid-rows 0fr -> 1fr animates to the content's natural height without measuring it */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        // @ts-ignore React 18 types lack `inert`; keeps collapsed links out of the tab order
        inert={open ? undefined : true}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-base text-neutral-600 md:text-lg">{answer}</p>
        </div>
      </div>
    </li>
  )
}

export default function Faq() {
  const t = useTranslations('homeSections.faq')
  const baseId = useId()

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-4">
          <h2 className="heading-5 font-medium tracking-tight text-neutral-950 [text-wrap:balance] lg:sticky lg:top-12">
            {t('title')}
          </h2>
        </FadeIn>
        <FadeIn className="lg:col-span-8">
          <ul className="border-t border-neutral-200">
            {ITEMS.map((item) => (
              <FaqItem
                key={item}
                id={`${baseId}-${item}`}
                question={t(`items.${item}.q`)}
                answer={t(`items.${item}.a`)}
              />
            ))}
          </ul>
        </FadeIn>
      </div>
    </Container>
  )
}
