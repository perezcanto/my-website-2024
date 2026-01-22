import { Button, Container } from '@/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <div className="flex max-w-xl mx-auto flex-col items-center text-center">
        <p className="font-display text-4xl md:text-8xl font-semibold text-neutral-950 ">
          404
        </p>
        <h1 className="mt-4 font-display text-xl md:text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition "
        >
          Go to the home page
        </Button>
      </div>
    </Container>
  )
}
