import { Button, Container, FadeIn } from '@/components'
import { useTranslations } from 'next-intl'

export default function SimpleCta() {
  const t = useTranslations('simpleCta')

  return (
    <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="w-full rounded-3xl bg-neutral-950 px-6 py-20 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="heading-6 font-semibold [text-wrap:balance] text-white">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white">
              {t('description')}
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                {t('ctaLabel')}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
