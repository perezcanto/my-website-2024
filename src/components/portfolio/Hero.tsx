'use client'
import React from 'react'
import { HeroParallax } from '@/components'

function Hero() {
  return <HeroParallax products={products} />
}
export const products = [
  {
    title: 'Rdg Soluciones',
    link: 'https://rdg-v2.vercel.app/soluciones-a-medida',
    thumbnail: '/images/portfolio/rdg-2.png',
  },
  {
    title: 'IntegraComex',
    link: 'https://www.integracomex.com.ar',
    thumbnail: '/images/portfolio/integra-1.png',
  },
  {
    title: 'Diskam',
    link: 'https://www.representacionesdiskam.com',
    thumbnail: '/images/portfolio/dikam-1.png',
  },

  {
    title: 'Delego Ai',
    link: 'https://www.delego.ai',
    thumbnail: '/images/portfolio/delego-1.png',
  },

  {
    title: 'Delego Ai',
    link: 'https://www.delego.ai',
    thumbnail: '/images/portfolio/delego-2.png',
  },

  {
    title: 'Telematica Ai',
    link: 'https://telematica.ai',
    thumbnail: '/images/portfolio/telematica-1.png',
  },
  {
    title: 'Medeiros',
    link: 'https://www.medeiroswines.com',
    thumbnail: '/images/portfolio/medeiros-1.png',
  },
  {
    title: 'Actionis Consulting',
    link: 'https://www.actionis-consulting.com',
    thumbnail: '/images/portfolio/actionis-1.png',
  },
  {
    title: "Maria's Home Care Services",
    link: 'https://www.mhhcservices.com/',
    thumbnail: '/images/portfolio/mhs-1.png',
  },
  
  {
    title: 'Telematica Ai',
    link: 'https://telematica.ai',
    thumbnail: '/images/portfolio/telematica-2.png',
  },
  {
    title: 'Diskam',
    link: 'https://representacionesdiskam.com',
    thumbnail: '/images/portfolio/dikam-2.png',
  },

  {
    title: 'Rdg FarmaSoft',
    link: 'https://rdg.pe/landing-farmasoft',
    thumbnail: '/images/portfolio/rdg-1.png',
  },
  
  {
    title: 'Pro American Trailers',
    link: 'https://www.proamericantrailersfl.com',
    thumbnail: '/images/portfolio/proamerican-1.png',
  },
  {
    title: 'Medeiros Wines',
    link: 'https://www.medeiroswines.com',
    thumbnail: '/images/portfolio/medeiros-2.png',
  },
]

export default Hero
