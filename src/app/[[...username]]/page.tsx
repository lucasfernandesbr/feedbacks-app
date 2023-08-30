import Console from '@/components/Console'

type HomeProps = {
  params: {
    username: string
  }
}

export default function User({ params }: HomeProps) {
  return <Console {...params} />
}
