'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCode,
  FiLayers,
  FiZap,
  FiDatabase,
  FiGlobe,
  FiServer,
} from 'react-icons/fi'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiLaravel,
  SiPhp,
  SiGit,
  SiVercel,
} from "react-icons/si"
import { useTranslations } from 'next-intl'

// Tech stack data
const techStack = [
  {
    name: 'React',
    icon: <SiReact className="h-8 w-8" />,
    category: 'frontend',
    experience: 90,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="h-8 w-8" />,
    category: 'frontend',
    experience: 85,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="h-8 w-8" />,
    category: 'language',
    experience: 80,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="h-8 w-8" />,
    category: 'language',
    experience: 95,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="h-8 w-8" />,
    category: 'frontend',
    experience: 90,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="h-8 w-8" />,
    category: 'database',
    experience: 65,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="h-8 w-8" />,
    category: 'database',
    experience: 80,
  },
  {
    name: 'Figma',
    icon: <SiFigma className="h-8 w-8" />,
    category: 'design',
    experience: 85,
  },
  {
    name: 'Laravel',
    icon: <SiLaravel className="h-8 w-8" />,
    category: 'backend',
    experience: 60,
  },
  {
    name: 'PHP',
    icon: <SiPhp className="h-8 w-8" />,
    category: 'language',
    experience: 65,
  },
  {
    name: 'Git',
    icon: <SiGit className="h-8 w-8" />,
    category: 'tools',
    experience: 90,
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="h-8 w-8" />,
    category: 'tools',
    experience: 85,
  },
]

export default function SkillsExperience() {
  const t = useTranslations('skillsExperience')
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section className="w-full border-b border-gray-100 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col space-y-8">
            <h2 className="heading-6 font-semibold tracking-tight text-black">
              {t('skillsExperience')}
            </h2>

            {/* Tabs */}
            <div role="tablist" className="flex flex-wrap gap-2 border-b border-gray-200">
              {(['skills', 'stack', 'education'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative rounded-t-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    activeTab === tab
                      ? 'text-white'
                      : 'bg-gray-50 text-black hover:bg-gray-100'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="skills-active-tab"
                      className="absolute inset-0 rounded-t-lg bg-black"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative z-10">{t(tab)}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="pt-4">
              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-gray-100 p-2">
                        <FiCode className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          {t('frontendDevelopment')}
                        </h3>
                        <p className="text-sm text-gray-600">
                          React, Next.js, TypeScript, Tailwind CSS
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-gray-100 p-2">
                        <FiServer className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          {t('backendDevelopment')}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Node.js, Laravel
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-gray-100 p-2">
                        <FiDatabase className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          {t('databaseManagement')}
                        </h3>
                        <p className="text-sm text-gray-600">
                          MongoDB, MySQL
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-gray-100 p-2">
                        <FiLayers className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          {t('uiUxDesign')}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Figma, Adobe XD
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-gray-100 p-2">
                        <FiZap className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          {t('performanceOptimization')}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Web Vitals, Lighthouse, Webpack, Bundling
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-gray-100 p-2">
                        <FiGlobe className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          {t('deploymentDevOps')}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Vercel, Cpanel
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'stack' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.3), ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center rounded-lg border border-gray-200 bg-gray-50 p-4 text-center transition-colors duration-200 hover:border-gray-400 hover:bg-white"
                      >
                        <div className="flex h-16 w-16 items-center justify-center">
                          {tech.icon}
                        </div>
                        <h3 className="mb-2 font-medium text-black">
                          {tech.name}
                        </h3>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <div className="relative border-l border-gray-200 pl-8">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-black"></div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-start justify-between">
                        <h3 className="font-title text-lg font-bold text-black md:text-xl">
                          {t('santiagoMarinoUniversity')}
                        </h3>
                        <span className="text-xs font-bold text-gray-500 md:text-sm">
                          2022   - {t('present')}
                        </span>
                      </div>
                      <h4 className="text-lg text-black">
                        {t('universityOfTechnology')}
                      </h4>
                      <p className="text-gray-600">
                        {t('santiagoMarinoUniversityDescription')}
                      </p>
                    </div>
                  </div>

                  <div className="relative border-l border-gray-200 pl-8">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-start justify-between">
                        <h3 className="font-title text-lg font-bold text-black md:text-xl">
                          {t('professionalCertifications')}
                        </h3>
                        <span className="text-xs font-bold text-gray-500 md:text-sm">
                          2016 - 2022
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Udemy, Platzi, Skillshare
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
