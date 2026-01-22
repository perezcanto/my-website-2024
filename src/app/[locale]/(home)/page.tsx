import { SimpleCta, Hero, Services, Contact, SkillsExperience } from '@/components'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })

  return (
    <>
      <Hero
        firstName="Alejandro"
        lastName="Perez-canto"
        role={t('role')}
        description={t('description')}
        ctaHref="/contact"
        ctaLabel={t('ctaLabel')}
      />
      <Services />
      <SkillsExperience />
      <SimpleCta />
      <Contact sub />
    </>
  )
}
