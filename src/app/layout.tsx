import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Container from '@/components/Container'

import { Providers } from './providers'
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
          <Providers>
            <Container>{children}</Container>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
