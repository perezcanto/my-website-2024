import { useLocale } from 'next-intl'

export default function ServicesSchema() {
  const locale = useLocale()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Alejandro Perez-canto",
      "url": locale === 'en' ? "https://www.perez-canto.com/en/services" : "https://www.perez-canto.com/es/servicios"
    },
    "serviceType": [
      {
        "@type": "Service",
        "name": "Responsive Design",
        "description": locale === 'en'
          ? "Seamless experiences across all devices. I create responsive web designs that ensure your website looks great on any screen—from desktops to smartphones."
          : "Experiencias fluidas en todos los dispositivos. Creo diseños web responsivos que aseguran que su sitio web se vea genial en cualquier pantalla, desde computadoras de escritorio hasta teléfonos inteligentes."
      },
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": locale === 'en'
          ? "Crafting intuitive and engaging user interfaces. I design user interfaces that are both visually appealing and easy to use, enhancing user satisfaction and reducing bounce rates."
          : "Diseñando interfaces de usuario intuitivas y atractivas. Diseño interfaces de usuario que son visualmente atractivas y fáciles de usar, mejorando la satisfacción del usuario y reduciendo las tasas de rebote."
      },
      {
        "@type": "Service",
        "name": "Performance Optimization",
        "description": locale === 'en'
          ? "Speed and efficiency for your web applications. I optimize web applications to ensure fast load times and smooth performance, increasing traffic and engagement."
          : "Velocidad y eficiencia para sus aplicaciones web. Optimizo aplicaciones web para asegurar tiempos de carga rápidos y un rendimiento fluido, aumentando el tráfico y la participación."
      },
      {
        "@type": "Service",
        "name": "Accessibility",
        "description": locale === 'en'
          ? "Making web accessible to everyone. I ensure that web applications are accessible to all users, including those with disabilities, by adhering to WCAG standards."
          : "Haciendo la web accesible para todos. Aseguro que las aplicaciones web sean accesibles para todos los usuarios, incluidos aquellos con discapacidades, cumpliendo con los estándares WCAG."
      },
      {
        "@type": "Service",
        "name": "E-commerce Solutions",
        "description": locale === 'en'
          ? "Developing robust e-commerce platforms with secure payment gateways and seamless user experiences."
          : "Desarrollando plataformas de comercio electrónico robustas con pasarelas de pago seguras y experiencias de usuario fluidas."
      },
      {
        "@type": "Service",
        "name": "Content Management",
        "description": locale === 'en'
          ? "Implementing efficient content management systems to streamline content creation and publication."
          : "Implementando sistemas de gestión de contenido eficientes para agilizar la creación y publicación de contenido."
      },
      {
        "@type": "Service",
        "name": "Cloud Integration",
        "description": locale === 'en'
          ? "Integrating cloud services to enhance scalability and performance of web applications."
          : "Integrando servicios en la nube para mejorar la escalabilidad y el rendimiento de las aplicaciones web."
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