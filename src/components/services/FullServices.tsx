'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiLayers,
  FiCode,
  FiZap,
  FiArrowRight,
  FiSearch,
  FiShoppingCart,
  FiRefreshCcw,
  FiShield,
  FiGlobe,
  FiDatabase,
  FiCloud,
  FiUsers,
  FiFileText,
  FiEdit,
  FiPieChart,
  FiCamera,
  FiTrendingUp,
  FiServer,
  FiMonitor,
  FiPackage
} from 'react-icons/fi'
import { LuAccessibility } from 'react-icons/lu'
import { Container, GridPattern } from '@/components'
import { useTranslations } from 'next-intl'

const categoryMap = {
  all: Array.from({ length: 21 }, (_, i) => i),
  design: [0, 1, 13],
  development: [2, 5, 8, 17, 19],
  performance: [2, 16, 18],
  security: [7, 11],
  content: [4, 12, 14, 15],
  infrastructure: [6, 9, 10, 20]
} as const

export default function ServicesShowcase() {
  const t = useTranslations('ServicesShowcase')
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryMap>('all')

  return (
    <Container>
      <div className="py-12">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {Object.keys(categoryMap).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as keyof typeof categoryMap)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-black text-white'
                  : 'border-200 border bg-gray-50 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t(`categories.${key}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {categoryMap[activeCategory].map((index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  layout: { duration: 0.3 }
                }}
                className="duration-2000 group rounded-3xl border border-gray-200 bg-white p-6 transition-colors"
              >
                <div className="duration-2000 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-colors group-hover:bg-gray-200 [&>*]:text-black">
                  {items[index].icon}
                </div>
                <h3 className="font-title mb-3 text-xl font-semibold">
                  {t(`items.${index}.title`)}
                </h3>
                <p className="mb-4 text-black">
                  {t(`items.${index}.description`)}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <GridPattern />
    </Container>
  )
}

const items = [
  { icon: <FiLayers className="h-6 w-6 text-gray-500" /> },
  { icon: <FiCode className="h-6 w-6 text-gray-500" /> },
  { icon: <FiZap className="h-6 w-6 text-gray-500" /> },
  { icon: <LuAccessibility className="h-6 w-6 text-gray-500" /> },
  { icon: <FiSearch className="h-6 w-6 text-gray-500" /> },
  { icon: <FiShoppingCart className="h-6 w-6 text-gray-500" /> },
  { icon: <FiRefreshCcw className="h-6 w-6 text-gray-500" /> },
  { icon: <FiShield className="h-6 w-6 text-gray-500" /> },
  { icon: <FiGlobe className="h-6 w-6 text-gray-500" /> },
  { icon: <FiDatabase className="h-6 w-6 text-gray-500" /> },
  { icon: <FiCloud className="h-6 w-6 text-gray-500" /> },
  { icon: <FiUsers className="h-6 w-6 text-gray-500" /> },
  { icon: <FiFileText className="h-6 w-6 text-gray-500" /> },
  { icon: <FiEdit className="h-6 w-6 text-gray-500" /> },
  { icon: <FiPieChart className="h-6 w-6 text-gray-500" /> },
  { icon: <FiCamera className="h-6 w-6 text-gray-500" /> },
  { icon: <FiTrendingUp className="h-6 w-6 text-gray-500" /> },
  { icon: <FiServer className="h-6 w-6 text-gray-500" /> },
  { icon: <FiMonitor className="h-6 w-6 text-gray-500" /> },
  { icon: <FiPackage className="h-6 w-6 text-gray-500" /> },
  { icon: <FiArrowRight className="h-6 w-6 text-gray-500" /> }
] as const
