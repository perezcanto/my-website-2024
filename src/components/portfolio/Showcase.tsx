'use client'

import { useState, useRef, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiArrowLeft,
  FiPlus,
  FiMinus,
  FiX,
  FiEye
} from 'react-icons/fi'
import { useTranslations } from 'next-intl'

type Project = {
  id: string
  featured: boolean
  year: string
  duration: string
  liveUrl: string
  repoUrl: string
  tags: string[]
  images: string[]
}

const projects: Project[] = [
  {
    id: 'rdg',
    featured: true,
    year: '2025',
    duration: '2 months',
    liveUrl: 'https://rdg-v2.vercel.app/soluciones-a-medida',
    repoUrl: '',
    tags: ['branding', 'website', 'animations', 'uiux', 'next', 'tailwind', 'typescript'],
    images: [
      '/images/portfolio/rdg-2.png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png'
    ]
  },
  {
    id: 'medeiros',
    featured: true,
    year: '2025',
    duration: '1 month',
    liveUrl: 'https://www.medeiroswines.com',
    repoUrl: '',
    tags: ['next', 'typescript', 'tailwind', 'uiux', 'accessibility', 'rebuild'],
    images: [
      '/images/portfolio/medeiros-1.png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png'
    ]
  },
  {
    id: 'proamerican',
    featured: true,
    year: '2024',
    duration: '1 month',
    liveUrl: 'https://www.proamericantrailersfl.com/en',
    repoUrl: '',
    tags: ['next', 'typescript', 'tailwind', 'multilang', 'seo', 'performance'],
    images: [
      '/images/portfolio/proamerican-1.png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png'
    ]
  }
]

export default function Showcase() {
  const t = useTranslations('showcase')
  const [selected, setSelected] = useState<string | null>(null)
  const project = selected ? projects.find((p) => p.id === selected) : null

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-4">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              t={t}
              onSelect={() => setSelected(p.id)}
              index={i}
            />
          ))}
        </div>
      </section>
      <AnimatePresence>
        {project && <ProjectDetail project={project} t={t} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  )
}

function ProjectCard({
  project,
  t,
  onSelect,
  index
}: {
  project: Project
  t: ReturnType<typeof useTranslations<'showcase'>>
  onSelect: () => void
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden"
    >
      <div className="relative grid overflow-hidden rounded-lg border bg-white lg:grid-cols-2">
      <div className="relative aspect-video lg:aspect-auto lg:h-full">
          <Image src={project.images[0]} alt={t(`projects.${project.id}.title`)} fill className="object-cover" />
          {project.featured && (
            <div className="absolute left-0 top-0 bg-black px-4 py-2 text-xs font-medium text-white">{t('featured')}</div>
          )}
          <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-xs text-white">{project.year}</div>
        </div>
        <div className="flex flex-col p-8">
          <h3 className="mb-1 text-2xl font-bold">{t(`projects.${project.id}.title`)}</h3>
          <p className="mb-2 italic text-gray-600">{t(`projects.${project.id}.subtitle`)}</p>
          <p className="mb-6 text-gray-600">{t(`projects.${project.id}.description`)}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-800">
                {t(`tags.${tag}`)}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-800">
                +{project.tags.length - 5}
              </span>
            )}
          </div>
          <div className="mt-auto grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <div className="font-medium text-black">{t('role')}</div>
              <div>{t(`projects.${project.id}.role`)}</div>
            </div>
            <div>
              <div className="font-medium text-black">{t('duration')}</div>
              <div>{project.duration}</div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href={project.liveUrl} target="_blank" className="flex items-center rounded-md gap-2 border px-4 py-2 text-sm">
              <FiExternalLink />
              {t('live')}
            </Link>
          </div>
        </div>
      </div>
      {/* <button onClick={onSelect} className="absolute inset-0" aria-label={t('open')} /> */}
    </motion.article>
  )
}

function ProjectDetail({
  project,
  t,
  onClose
}: {
  project: Project
  t: ReturnType<typeof useTranslations<'showcase'>>
  onClose: () => void
}) {
  const images = project.images
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="absolute inset-0 overflow-auto">
        <div className="mx-auto max-w-6xl p-6">
          <button aria-label={t('close')} onClick={onClose} className="fixed right-6 top-6">
            <FiX />
          </button>
          <h2 className="mb-3 text-4xl font-bold text-center">{t(`projects.${project.id}.title`)}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-gray-600">
            {t(`projects.${project.id}.description`)}
          </p>
          <ImageGallery images={images} title={t(`projects.${project.id}.title`)} t={t} />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-semibold">{t('overview')}</h3>
              <p className="whitespace-pre-line text-gray-600">
                {t(`projects.${project.id}.longDescription`)}
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-2 font-semibold">{t('technologies')}</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded bg-gray-100 px-2.5 py-0.5 text-xs">
                      {t(`tags.${tag}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="mb-2 font-semibold">{t('challenges')}</h3>
                <p className="text-gray-600">{t(`projects.${project.id}.challenges`)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ImageGallery({
  images,
  title,
  t
}: {
  images: string[]
  title: string
  t: ReturnType<typeof useTranslations<'showcase'>>
}) {
  const [idx, setIdx] = useState(0)
  const [full, setFull] = useState(false)
  return (
    <div className="relative">
      <div className={`${full ? 'fixed inset-0 z-50 bg-black' : ''} relative overflow-hidden rounded-lg`}>
        <div className="relative aspect-video w-full">
          <Image src={images[idx]} alt={`${title}-${idx}`} fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button aria-label={t('gallery.prev')} onClick={() => setIdx(idx ? idx - 1 : images.length - 1)}>
              <FiArrowLeft />
            </button>
            <button aria-label={t('gallery.next')} onClick={() => setIdx((idx + 1) % images.length)}>
              <FiArrowRight />
            </button>
          </div>
          <button aria-label={full ? t('gallery.exit') : t('gallery.view')} className="absolute bottom-4 right-4" onClick={() => setFull(!full)}>
            {full ? <FiX /> : <FiEye />}
          </button>
          <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 text-sm text-white">
            {idx + 1}/{images.length}
          </div>
        </div>
      </div>
    </div>
  )
}
