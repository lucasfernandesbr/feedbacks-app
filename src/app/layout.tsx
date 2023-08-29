import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Container from '@/components/Container'

import StyledComponentsRegistry from './lib/registry'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Feedbacks',
  description: 'Give constructive feedbacks to your piers!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <StyledComponentsRegistry>
          <Container>{children}</Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
