import { useLocale } from 'next-intl'

export default function ContactSchema() {
  const locale = useLocale()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": locale === 'en' ? "Contact Alejandro Perez-canto" : "Contactar a Alejandro Perez-canto",
    "url": locale === 'en' ? "https://www.perez-canto.com/en/contact" : "https://www.perez-canto.com/es/contacto",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": locale === 'en' ? "US" : "ES",
      "availableLanguage": locale === 'en' ? "English" : "Spanish"
    },
    "sameAs": [
      "www.linkedin.com/in/alejandro-perez-canto-8b8432193",
      "https://github.com/perezcanto"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}