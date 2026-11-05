'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { GridPattern2 } from '..'

interface HeroProps {
  firstName: string
  lastName: string
  role: string
  description: string
  ctaHref: string
  ctaLabel: string
}

// One authored entrance: role tag wipes in, the name rises line by line out of a
// mask, the black block sweeps behind the last name, then copy and CTA settle.
const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero({
  firstName,
  lastName,
  role,
  description,
  ctaHref,
  ctaLabel,
}: HeroProps) {
  const reduce = useReducedMotion()

  const rise = (delay: number): Variants => ({
    hidden: { y: reduce ? 0 : '105%', opacity: reduce ? 0 : 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: reduce ? 0.3 : 0.8, delay, ease: EASE },
    },
  })

  const wipe = (delay: number, duration = 0.7): Variants => ({
    hidden: { scaleX: reduce ? 1 : 0, opacity: reduce ? 0 : 1 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: reduce ? 0.3 : duration, delay, ease: EASE },
    },
  })

  const settle = (delay: number): Variants => ({
    hidden: { y: reduce ? 0 : 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay, ease: EASE },
    },
  })

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <GridPattern2 />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
      >
        <h1 className="sr-only">
          {firstName} {lastName}, {role}
        </h1>

        {/* Role tag */}
        <div className="relative mb-8 inline-block">
          <motion.span
            aria-hidden
            className="absolute inset-0 origin-left bg-black"
            variants={wipe(0, 0.6)}
          />
          <motion.p
            className="relative px-5 py-2 text-xs font-medium uppercase tracking-widest text-white sm:text-sm"
            variants={settle(0.35)}
          >
            {role}
          </motion.p>
        </div>

        {/* First name */}
        <div aria-hidden className="overflow-hidden pb-2">
          <motion.p
            className="font-title text-5xl font-semibold tracking-tight text-black sm:text-6xl md:text-8xl"
            variants={rise(0.2)}
          >
            {firstName}
          </motion.p>
        </div>

        {/* Last name on its black block */}
        <div aria-hidden className="relative mb-10 inline-block md:mb-12">
          <motion.span
            className="absolute inset-0 origin-left bg-black"
            variants={wipe(0.45)}
          />
          <div className="relative overflow-hidden">
            <motion.p
              className="font-title whitespace-nowrap px-3 py-2 text-5xl font-semibold tracking-tight text-white sm:px-4 sm:text-6xl md:text-8xl"
              variants={rise(0.65)}
            >
              {lastName}
            </motion.p>
          </div>
        </div>

        <motion.p
          className="mx-auto mb-10 max-w-2xl px-1 text-base text-gray-600 sm:text-lg md:mb-12 md:text-xl"
          variants={settle(0.9)}
        >
          {description}
        </motion.p>

        <motion.div variants={settle(1.0)}>
          <Link
            href={ctaHref}
            className="group relative inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-white transition-[background-color,transform] duration-200 ease-out hover:bg-neutral-800 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <span className="text-base font-medium">{ctaLabel}</span>
            <FiArrowRight
              aria-hidden
              className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
