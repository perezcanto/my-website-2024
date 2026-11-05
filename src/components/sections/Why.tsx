'use client'

import { useTranslations } from 'next-intl'
import { Container, FadeIn, FadeInStagger } from '@/components'

const ITEMS = ['oneHead', 'bilingual', 'remote', 'quality'] as const

export default function Why() {
  const t = useTranslations('homeSections.why')

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-3xl bg-neutral-950 px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <FadeIn className="max-w-2xl">
          <h2 className="heading-5 font-medium tracking-tight text-white [text-wrap:balance]">
            {t('title')}
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <ul className="mt-14 grid grid-cols-1 gap-x-16 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <li key={item}>
                <FadeIn className="border-t border-neutral-800 py-8">
                  <h3 className="font-title text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {t(`items.${item}.title`)}
                  </h3>
                  <p className="mt-3 text-base text-neutral-300">{t(`items.${item}.body`)}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </Container>
  )
}
