"use client"

import { useTranslations } from 'next-intl'
import {
  FiMonitor,
  FiCamera,
  FiHeart,
  FiCompass,
  FiGlobe,
  FiBookOpen,
  FiUsers,
  FiMinimize2,
  FiZap,
  FiTrendingUp,
  FiLayers,
  FiAward,
  FiMusic,
} from "react-icons/fi"
import { SiNintendoswitch } from "react-icons/si"

export default function BeyondCoding() {
  const t = useTranslations('BeyondCoding')

  const hobbies = [
    { title: t('hobbies.videoGames'), icon: <SiNintendoswitch className="text-black shrink-0" /> },
    { title: t('hobbies.anime'), icon: <FiMonitor className="text-black shrink-0" /> },
    { title: t('hobbies.music'), icon: <FiMusic className="text-black shrink-0" /> },
    { title: t('hobbies.photography'), icon: <FiCamera className="text-black shrink-0" /> },
    { title: t('hobbies.animals'), icon: <FiHeart className="text-black shrink-0" /> },
    { title: t('hobbies.hiking'), icon: <FiCompass className="text-black shrink-0" /> },
    { title: t('hobbies.traveling'), icon: <FiGlobe className="text-black shrink-0" /> },
  ]

  const filosofias = [
    { title: t('philosophy.userCentered'), icon: <FiUsers className="text-black shrink-0" /> },
    { title: t('philosophy.learning'), icon: <FiBookOpen className="text-black shrink-0" /> },
    { title: t('philosophy.simplicity'), icon: <FiMinimize2 className="text-black shrink-0" /> },
    { title: t('philosophy.innovation'), icon: <FiZap className="text-black shrink-0" /> },
    { title: t('philosophy.efficiency'), icon: <FiTrendingUp className="text-black shrink-0" /> },
    { title: t('philosophy.minimalism'), icon: <FiLayers className="text-black shrink-0" /> },
    { title: t('philosophy.excellence'), icon: <FiAward className="text-black shrink-0" /> },
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-6 font-semibold tracking-tight text-black">{t('title')}</h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              {t('hobbiesTitle')}
            </h3>
            <ul className="grid gap-3">
              {hobbies.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black"
                >
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              {t('philosophyTitle')}
            </h3>
            <ul className="grid gap-3">
              {filosofias.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-black"
                >
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
