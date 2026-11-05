'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Container, FadeIn } from '@/components'

const ITEMS = ['responsive', 'seo', 'a11y', 'perf', 'analytics', 'deploy'] as const

// The tick draws itself once the row is in view: a literal "checked" for each inclusion.
function Check({ index }: { index: number }) {
  const reduce = useReducedMotion()
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-neutral-950 p-1 text-white"
    >
      <motion.path
        d="M5 12.5l4.5 4.5L19 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
        transition={{ duration: 0.45, delay: 0.15 + Math.min(index * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

export default function Includes() {
  const t = useTranslations('homeSections.includes')

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-14 sm:px-10 md:py-20 lg:px-16">
        <FadeIn className="max-w-2xl">
          <h2 className="heading-5 font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{t('intro')}</p>
        </FadeIn>
        <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-start gap-4">
              <Check index={i} />
              <span className="text-base font-medium text-neutral-950 md:text-lg">
                {t(`items.${item}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
