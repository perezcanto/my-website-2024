'use client'
import React from 'react'
import { Container } from '@/components'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

function CalIframe() {
  const t = useTranslations('contact')
  
  return (
    <Container sectionClassName="mt-20 md:mt-44">
      <h2 className="heading-5 mb-8 text-center font-semibold text-black [text-wrap:balance]">
        {t('scheduleHeading')}
      </h2>
      <iframe
        src="https://cal.com/perez-canto/15min"
        title={t('scheduleTitle')}
        className="h-[800px] w-full rounded-3xl bg-black"
      />
    </Container>
  )
}

export default CalIframe

export const CalIframeDynamic = dynamic(
  () => import('@/components/contact/CalIframe'),
  {
    ssr: false,
  },
)
