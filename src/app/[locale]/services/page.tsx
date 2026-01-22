import { HeroServices } from '@/components'
import ServicesShowcase from '@/components/services/FullServices'

export default async function Home() {
  return (
    <>
      <HeroServices />
      <ServicesShowcase />
    </>
  )
}
