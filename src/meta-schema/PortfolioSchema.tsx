import { useLocale } from 'next-intl'

export default function PortfolioSchema() {
  const locale = useLocale()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": locale === 'en' ? "Alejandro Perez-canto's Portfolio" : "Portafolio de Alejandro Perez-canto",
    "url": locale === 'en' ? "https://www.perez-canto.com/en/project-portfolio" : "https://www.perez-canto.com/es/portafolio-proyectos",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://rdg-v2.vercel.app/soluciones-a-medida",
        "name": "Rdg Soluciones",
        "description": locale === 'en' 
          ? "Custom solutions with modern web technologies."
          : "Soluciones personalizadas con tecnologías web modernas."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://www.medeiroswines.com",
        "name": "Medeiros Wines",
        "description": locale === 'en' 
          ? "Website rebuild with UI and accessibility enhancements."
          : "Reconstrucción del sitio web con mejoras de UI y accesibilidad."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://www.proamericantrailersfl.com/en",
        "name": "Pro American Trailers",
        "description": locale === 'en' 
          ? "Multilingual and SEO optimized web application."
          : "Aplicación web multilingüe y optimizada para SEO."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}