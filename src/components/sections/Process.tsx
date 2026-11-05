'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Container, FadeIn } from '@/components'

const STEPS = ['discover', 'design', 'build', 'launch'] as const

export default function Process() {
  const t = useTranslations('homeSections.process')
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()

  // The rail fills as the reader moves through the steps: scroll position *is* progress here.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 55%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-2xl">
        <h2 className="heading-5 font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-neutral-600 md:text-xl">{t('intro')}</p>
      </FadeIn>

      <ol
        ref={ref}
        className="relative mt-14 grid grid-cols-1 gap-12 pl-10 md:mt-20 lg:grid-cols-4 lg:gap-8 lg:pl-0 lg:pt-12"
      >
        {/* Rail: vertical on mobile, horizontal on desktop */}
        <span
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px bg-neutral-200 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-px lg:w-auto"
        />
        <motion.span
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-neutral-950 lg:hidden"
          style={{ scaleY: reduce ? 1 : progress }}
        />
        <motion.span
          aria-hidden
          className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-neutral-950 lg:block"
          style={{ scaleX: reduce ? 1 : progress }}
        />

        {STEPS.map((step, i) => (
          <li key={step} className="relative">
            <span
              aria-hidden
              className="absolute -left-10 top-1 h-[15px] w-[15px] rounded-full border border-neutral-950 bg-white lg:-top-12 lg:left-0"
            />
            <FadeIn>
              <p className="text-sm font-medium tabular-nums text-neutral-500">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-title text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="mt-3 max-w-sm text-base text-neutral-600">
                {t(`steps.${step}.body`)}
              </p>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Container>
  )
}
