import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pathnames: {
    '/services': {
      en: '/services',
      es: '/servicios',
    },
    '/contact': {
      en: '/contact',
      es: '/contacto',
    },
    '/about': {
      en: '/about',
      es: '/acerca',
    },
    '/portfolio': {
      en: '/project-portfolio',
      es: '/portafolio-proyectos',
    },
    '/thank-you': {
      en: '/thank-you',
      es: '/Gracias',
    },
  },
} as any)

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
