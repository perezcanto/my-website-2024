import { ImageResponse } from 'next/og'
import { PERSON, ROLE, asLocale } from '@/lib/seo'

// Social preview (WhatsApp, LinkedIn, X, Slack...) for every page under /[locale].
// It mirrors the home hero: role tag, name on the black block, grid background. No photo.
export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${PERSON.name} – Full-Stack Developer`

const DESCRIPTION = {
  en: 'React · Next.js · TypeScript · UI/UX',
  es: 'React · Next.js · TypeScript · UI/UX',
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = asLocale((await params).locale)
  const grid =
    'linear-gradient(to right, #ececec 1px, transparent 1px), linear-gradient(to bottom, #ececec 1px, transparent 1px)'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'white',
          backgroundImage: grid,
          backgroundSize: '72px 72px',
          color: '#0a0a0a',
        }}
      >
        <div
          style={{
            display: 'flex',
            background: '#0a0a0a',
            color: 'white',
            fontSize: 22,
            letterSpacing: 5,
            textTransform: 'uppercase',
            padding: '10px 22px',
            marginBottom: 34,
          }}
        >
          {ROLE[locale]}
        </div>
        <div style={{ display: 'flex', fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
          Alejandro
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 16,
            background: '#0a0a0a',
            color: 'white',
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
            padding: '10px 26px 18px',
          }}
        >
          Perez-canto
        </div>
        <div style={{ display: 'flex', marginTop: 40, fontSize: 30, color: '#525252' }}>
          {DESCRIPTION[locale]}
        </div>
        <div style={{ display: 'flex', marginTop: 18, fontSize: 24, color: '#a3a3a3' }}>
          perez-canto.com
        </div>
      </div>
    ),
    size,
  )
}
