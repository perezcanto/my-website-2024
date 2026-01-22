import { useLocale } from 'next-intl'

export default function HomeSchema() {
  const locale = useLocale()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": locale === 'en' ? "Alejandro Perez-canto – Full-Stack Developer" : "Alejandro Perez-canto – Desarrollador Full-Stack",
    "description": locale === 'en'
      ? "Full-Stack Developer specializing in creating modern and engaging web experiences."
      : "Desarrollador Full-Stack especializado en crear experiencias web modernas y atractivas.",
    "url": locale === 'en' ? "https://www.perez-canto.com/en" : "https://www.perez-canto.com/es",
    "author": {
      "@type": "Person",
      "name": "Alejandro Perez-canto",
      "url": "https://www.perez-canto.com",
      "sameAs": [
        "www.linkedin.com/in/alejandro-perez-canto-8b8432193",
        "https://github.com/perezcanto"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alejandro Perez-canto",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.perez-canto.com/images/logo.png",
        "width": 250,
        "height": 250
      }
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        locale === 'en' ? "https://www.perez-canto.com/en" : "https://www.perez-canto.com/es"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": locale === 'en' ? "https://www.perez-canto.com/en" : "https://www.perez-canto.com/es"
        }
      ]
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Alejandro Perez-canto"
    },
    "datePublished": "2023-01-01",
    "dateModified": "2023-10-01",
    "inLanguage": locale
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}