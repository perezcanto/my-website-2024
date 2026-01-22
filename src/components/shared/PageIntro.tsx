import clsx from 'clsx'
import { Container, FadeIn } from '@/components'

export default function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
  sub = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
  sub?: boolean
}) {
  const headingTag = sub ? 'h2' : 'h1'
  const headingClass = sub ? 'heading-5' : 'heading-2'
  const Tag = headingTag as any

  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        <Tag>

          <span className="mb-6 text-sm uppercase tracking-widest text-gray-500">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'font-display mt-6 block max-w-5xl',
              headingClass,
              'font-semibold tracking-tight text-neutral-950 [text-wrap:balance]',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </Tag>
      </FadeIn>
    </Container>
  )
}
