import { useLocale } from 'next-intl'

export default function AboutSchema() {
  const locale = useLocale()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alejandro Perez-canto",
    "url": locale === 'en' ? "https://www.perez-canto.com/en/about" : "https://www.perez-canto.com/es/sobre",
    "sameAs": [
      "www.linkedin.com/in/alejandro-perez-canto-8b8432193",
      "https://github.com/perezcanto"
    ],
    "jobTitle": locale === 'en' ? "Full-Stack Developer" : "Desarrollador Full-Stack",
    "worksFor": {
      "@type": "Organization",
      "name": "Alejandro Perez-canto"
    },
    "description": locale === 'en'
      ? "Discover the professional journey, skills, and development philosophy of Alejandro Perez-canto, a Full-Stack Developer with extensive experience in modern web technologies."
      : "Conozca la trayectoria profesional, habilidades y filosofía de desarrollo de Alejandro Perez-canto, un desarrollador Full-Stack con amplia experiencia en tecnologías web modernas.",
    "knowsAbout": [
      "React", "Next.js", "TypeScript", "JavaScript", "UI/UX Design", "Web Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": locale === 'en' ? "University of Technology" : "Universidad de Tecnología"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}