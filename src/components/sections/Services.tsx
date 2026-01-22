'use client'

import { useState, useEffect, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import { FiCode, FiLayers, FiZap } from 'react-icons/fi'
import { LuAccessibility } from 'react-icons/lu'
import SectionIntro from './SectionIntro'
import { Button } from '@/components'
import { useTranslations } from 'next-intl'
import lottie1 from '@/lotties/statistical-data-charts.json'
import lottie2 from '@/lotties/online-design-website.json'
import lottie3 from '@/lotties/search-loading.json'
import lottie4 from '@/lotties/customize-browser.json'

let Lottie: any = null

export default function ImmersiveServicesMinimalist() {
  const t = useTranslations('services')
  const [isClient, setIsClient] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  const services = [
    {
      id: 1,
      title: t('responsiveDesign.title'),
      tagline: t('responsiveDesign.tagline'),
      description: t('responsiveDesign.description'),
      icon: <FiLayers className="h-full w-full p-4" />,
      lottie: lottie1,
      stats: [
        { value: '99%', label: t('responsiveDesign.stats.mobileCompatibility') },
        { value: '2.1s', label: t('responsiveDesign.stats.averageLoadTime') },
        { value: '40%', label: t('responsiveDesign.stats.conversionIncrease') },
      ],
    },
    {
      id: 2,
      title: t('uiUxDesign.title'),
      tagline: t('uiUxDesign.tagline'),
      description: t('uiUxDesign.description'),
      icon: <FiCode className="h-full w-full p-4" />,
      lottie: lottie2,
      stats: [
        { value: '87%', label: t('uiUxDesign.stats.userSatisfaction') },
        { value: '35%', label: t('uiUxDesign.stats.bounceRateReduction') },
        { value: '4.8/5', label: t('uiUxDesign.stats.averageUserRating') },
      ],
    },
    {
      id: 3,
      title: t('performanceOptimization.title'),
      tagline: t('performanceOptimization.tagline'),
      description: t('performanceOptimization.description'),
      icon: <FiZap className="h-full w-full p-4" />,
      lottie: lottie3,
      stats: [
        { value: '95+', label: t('performanceOptimization.stats.pageSpeedScore') },
        { value: '0.8s', label: t('performanceOptimization.stats.firstContentfulPaint') },
        { value: '60%', label: t('performanceOptimization.stats.trafficIncrease') },
      ],
    },
    {
      id: 4,
      title: t('accessibility.title'),
      tagline: t('accessibility.tagline'),
      description: t('accessibility.description'),
      icon: <LuAccessibility className="h-full w-full p-4" />,
      lottie: lottie4,
      stats: [
        { value: 'WCAG 2.1', label: t('accessibility.stats.complianceLevel') },
        { value: '100%', label: t('accessibility.stats.screenReaderCompatible') },
        { value: 'AAA', label: t('accessibility.stats.accessibilityRating') },
      ],
    },
  ]

  useEffect(() => {
    import('react-lottie').then((module) => {
      Lottie = module.default
      setIsClient(true)
    })
  }, [])

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [isHovering, services.length])

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-16 text-center md:mb-24">
          <SectionIntro
            eyebrow={t('eyebrow')}
            title={t('title')}
            className="mx-auto mt-24 w-fit sm:mt-32 lg:mt-40"
          >
            <p className="mt-6 ">
              {t('intro')}
            </p>
          </SectionIntro>
        </div>
        <div className="relative">
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`relative overflow-hidden border border-gray-200 rounded-3xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeService === index
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{service.title}</span>
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl border-2 border-black "
            >
              <div className="lg:flex ">
                <div className="p-8 md:p-12 bg-black lg:w-1/2">
                  <div className="mb-6 h-16 w-16 rounded-3xl bg-white text-black">
                    {services[activeService].icon}
                  </div>
                  <h3 className="mb-3 font-title heading-7 font-bold text-white">{services[activeService].title}</h3>
                  <p className="mb-6 text-base md:text-lg font-medium text-white">{services[activeService].tagline}</p>
                  <p className="mb-8 text-white">{services[activeService].description}</p>
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {services[activeService].stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="rounded-xl border border-gray-200 p-4 text-center"
                      >
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-200">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  <Button href="/portfolio" invert className=" ">
                    {t('learnMore')}
                  </Button>
                </div>
                <div className="relative lg:w-1/2">
                  <div className="absolute inset-0 z-10 border-l border-gray-200"></div>
                  <div className="h-full w-full md:p-20">
                    {isClient && Lottie ? (
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: services[activeService].lottie,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center"></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeService === index ? 'w-8 bg-black' : 'bg-gray-300'
                }`}
                aria-label={t('viewService', { index: index + 1 })}
              />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-5 text-center"
        >
          <Button href="/services" className="bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-gray-900">
            {t('viewAllServices')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
