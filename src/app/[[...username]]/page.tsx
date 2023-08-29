import Console from '@/components/Console'
import { Suspense } from 'react'

type HomeProps = {
  params: {
    username: string
  }
}

export default function User({ params }: HomeProps) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Console {...params} />
    </Suspense>
  )
}
