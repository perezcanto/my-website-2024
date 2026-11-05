'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { useTranslations } from 'next-intl'
import { Container, FadeIn, FadeInStagger } from '@/components'

const ITEMS = ['newSite', 'redesign', 'migration', 'multilang', 'ecommerce', 'care'] as const

export default function Help() {
  const t = useTranslations('homeSections.help')

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-4">
          <div className="lg:sticky lg:top-12">
            <h2 className="heading-5 font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">{t('intro')}</p>
          </div>
        </FadeIn>

        <FadeInStagger faster className="lg:col-span-8">
          <ul className="border-t border-neutral-200">
            {ITEMS.map((item) => (
              <li key={item}>
                <FadeIn>
                  {/* Each row is a shortcut to the contact form; the arrow travels on hover. */}
                  <Link
                    href="/contact"
                    className="group grid grid-cols-1 gap-2 border-b border-neutral-200 py-7 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 sm:grid-cols-[minmax(0,14rem)_1fr_auto] sm:items-baseline sm:gap-8"
                  >
                    <h3 className="font-title text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">
                      {t(`items.${item}.title`)}
                    </h3>
                    <p className="text-base text-neutral-600 transition-colors duration-200 group-hover:text-neutral-950">
                      {t(`items.${item}.body`)}
                    </p>
                    <FiArrowRight
                      aria-hidden
                      className="hidden h-5 w-5 -translate-x-2 text-neutral-950 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block"
                    />
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
          <FadeIn className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-out hover:bg-neutral-800 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 md:text-base"
            >
              {t('cta')}
              <FiArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </FadeInStagger>
      </div>
    </Container>
  )
}
