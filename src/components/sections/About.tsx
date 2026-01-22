'use client'

import { motion } from 'framer-motion'
import { FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'
import { SkillsExperience } from '@/components'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import BeyondCoding from '../about/BeyondCoding'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('About')
  const locale = useLocale()


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full border-b border-gray-100 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <h1  className="heading-2 font-semibold" dangerouslySetInnerHTML={{
                  __html: t('name').replace('\n', '<br />'),
                }} />
                
              

              <h2 className="text-xl text-gray-600 md:text-2xl">
                {t('role')}
              </h2>

              <p className="max-w-lg text-lg text-gray-600">
                {t('heroDescription')}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="#contact"
                  className="flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-600"
                >
                  {t('getInTouch')}
                  <FiArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href={`/assets/resume-alejandro-perez-canto-${locale}.pdf`}
                  target="_blank"
                  download
                  className="flex items-center rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-50"
                >
                  {t('downloadCV')}
                  <FiDownload className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="flex gap-4 pt-6">
                <Link
                  href="mailto:alejandro@example.com"
                  className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
                  aria-label={t('emailLabel')}
                >
                  <FiMail className="h-5 w-5 text-black" />
                </Link>
                <Link
                  href="https://github.com/perezcanto"
                  target="_blank"
                  className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
                  aria-label={t('githubLabel')}
                >
                  <FaGithub className="h-5 w-5 text-black" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] overflow-hidden rounded-3xl bg-gray-100 md:h-[500px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/alejo.jpg"
                  alt="Alejandro Perez-canto"
                  fill
                  style={{ objectPosition: '0 75%' }}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="w-full border-b border-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="heading-6 font-semibold tracking-tight text-black">
                  {t('aboutMeTitle')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('bio1')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('bio2')}
                </p>
              </div>

              <blockquote className="border-l-4 border-black py-3 pl-4 text-xl italic text-black">
                {t('quote')}
              </blockquote>

              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  {t('bio3')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <SkillsExperience />
      <BeyondCoding />
    </div>
  )
}
