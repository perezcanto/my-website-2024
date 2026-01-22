'use client'

import { motion } from 'framer-motion'
import { FiLayers, FiCode, FiZap, FiArrowRight, FiSearch } from 'react-icons/fi'
import { Button, Container } from '@/components'
import { useTranslations } from 'next-intl'

import lottie1 from '@/lotties/abstract-shapes.json'
import lottie2 from '@/lotties/broken-website.json'
import lottie3 from '@/lotties/research-through-internet.json'
import lottie4 from '@/lotties/statistical-data-charts.json'
import dynamic from 'next/dynamic'
export default function HeroSection() {
  const items = [
    {
      icon: <FiLayers className="h-4 w-4" />,
    },
    {
      icon: <FiCode className="h-4 w-4" />,
    },
    {
      icon: <FiZap className="h-4 w-4" />,
    },

    {
      icon: <FiSearch className="h-4 w-4" />,
    },
  ]
  const t = useTranslations('ServicesHero')
  const lotties = [lottie1, lottie2, lottie3, lottie4]
  const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

  return (
    <Container sectionClassName="mt-28 mb-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
            <span className="text-sm font-medium text-gray-700">
              {t('servicesTagline')}
            </span>
          </div>

          <h1 className="heading-2 font-semibold">
            {t('mainHeading')}
          </h1>

          <p className="max-w-lg text-xl text-gray-800">
            {t('description')}
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button href="/portfolio">
              <span className="flex items-center">
                {t('viewWork')}
                <FiArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>

            <Button href="/contact" invert>
              {t('getInTouch')}
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="duration-2000 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-colors group-hover:bg-gray-200 [&>*]:text-black"
                >
                  {items[i - 1].icon}
                </div>
              ))}
            </div>
            <p className="text-sm text-black">
              <span className="font-semibold">{t('serviceCount')}</span> {t('serviceNeeds')}
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] overflow-hidden  rounded-2xl md:h-[500px]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid w-full max-w-md grid-cols-2 gap-4 p-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-3xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gray-50">
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: lotties[i - 1],
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}
