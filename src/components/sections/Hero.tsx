'use client'

import type React from 'react'

import { useEffect, useState, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMousePointer } from 'react-icons/fi'
import { GridPattern2 } from '..'
import { useTranslations } from "next-intl";

interface HeroProps {
  firstName: string
  lastName: string
  role: string
  description: string
  ctaHref: string
  ctaLabel: string
}

export default function Hero({
  firstName,
  lastName,
  role,
  description,
  ctaHref,
  ctaLabel,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: false, amount: 0.1 })

  // Scroll-based animations
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const gridOpacity = useTransform(opacity, [0, 1], [0.3, 0.05])

  const t = useTranslations("navigation");


  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({
      x: (x / rect.width - 0.5) * 2,
      y: (y / rect.height - 0.5) * 2,
    })

    mouseX.set((x / rect.width - 0.5) * 2)
    mouseY.set((y / rect.height - 0.5) * 2)
  }

  useEffect(() => {
    setIsVisible(true)

    // Initialize cursor position to center
    setMousePosition({ x: 0, y: 0 })

    // Cleanup
    return () => {
      setIsVisible(false)
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
      },
    },
  }

  // Split text into letters for animation
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        variants={letterVariants}
        className="inline-block"
        style={{
          display: char === ' ' ? 'inline' : 'inline-block',
          whiteSpace: 'pre',
        }}
      >
        {char}
      </motion.span>
    ))
  }

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >
      <GridPattern2 />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <motion.div
          className="container mx-auto px-4 py-20 text-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8 inline-block"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 h-full w-full bg-black"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <motion.p
                className="relative z-10 px-6 py-2 text-sm font-medium uppercase tracking-widest text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {role}
              </motion.p>
            </div>
          </motion.div>
          <h1 className="sr-only">
            {firstName} {lastName}
          </h1>
          {/* First Name */}
          <motion.div className="overflow-hidden pb-4" variants={itemVariants}>
            <motion.h2
              className="font-title text-6xl font-semibold tracking-tight text-black md:text-8xl"
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {splitText(firstName)}
            </motion.h2>
          </motion.div>

          {/* Last Name */}
          <motion.div className="mb-12 overflow-hidden" variants={itemVariants}>
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 h-full w-full bg-black"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <motion.h2
                className="font-title relative z-10 px-4 py-2 text-6xl font-semibold whitespace-nowrap tracking-tight text-white md:text-8xl"
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {splitText(lastName)}
              </motion.h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="mx-auto mb-12 max-w-2xl"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-base px-1 sm:text-lg text-gray-600 md:text-xl">{description}</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={ctaHref}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-8 py-4 text-white transition-all hover:pr-12"
              >
                <span className="relative z-10 text-base font-medium">
                  {ctaLabel}
                </span>
                <motion.span
                  className="absolute right-4 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <FiArrowRight className="h-5 w-5" />
                </motion.span>
                <motion.span
                  className="absolute inset-0 z-0 bg-gray-800"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  )
}
