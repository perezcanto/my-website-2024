'use client'

import { useTranslations } from 'next-intl'
import { Container, FadeIn, FadeInStagger } from '@/components'

const ITEMS = ['user', 'simplicity', 'efficiency', 'learning'] as const

export default function Principles() {
  const t = useTranslations('homeSections.principles')

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-4">
          <h2 className="heading-5 font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
            {t('title')}
          </h2>
        </FadeIn>

        <FadeInStagger faster className="lg:col-span-8">
          <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <li key={item}>
                <FadeIn className="border-t border-neutral-950 py-8">
                  <h3 className="font-title text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">
                    {t(`items.${item}.title`)}
                  </h3>
                  <p className="mt-3 text-base text-neutral-600">
                    {t(`items.${item}.body`)}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </Container>
  )
}
