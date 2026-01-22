'use client'
import Link from 'next/link'
import { Border, ContactForm, Container, FadeIn, PageIntro } from '@/components'
import { useTranslations } from 'next-intl'

function ContactDetails() {
  const t = useTranslations('contactDetails')

  return (
    <FadeIn>
      <h2 className="font-title text-base font-semibold text-neutral-950 md:text-xl">
        {t('operations')}
      </h2>
      <p className="mt-6 text-base text-neutral-600 md:text-lg">
        {t('operationsDescription')}
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-title text-base font-semibold text-neutral-950 md:text-xl">
          {t('email')}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['Careers', 'alejandroperezcanto@gmail.com']].map(
            ([label, email]) => (
              <div key={email}>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-base text-neutral-600 hover:text-neutral-950 md:text-lg"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ),
          )}
        </dl>
      </Border>
    </FadeIn>
  )
}

export default function Contact({ sub }: { sub?: boolean }) {
  const t = useTranslations('contact')

  return (
    <>
      <Container sectionClassName="!py-0">
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} sub={sub}>
          <p className="mt-6 text-xl md:text-2xl">
            {t('intro')}
          </p>
        </PageIntro>
      </Container>

      <Container sectionClassName="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
