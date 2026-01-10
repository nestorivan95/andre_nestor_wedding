import type { Metadata } from 'next'
import { Playfair_Display, Lato, Dancing_Script, Bodoni_Moda } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-elegant',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-wedding',
  display: 'swap',
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
  variable: '--font-bodoni',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andrea & Nestor - Nuestra Boda',
  description: 'Invitación a nuestra boda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable} ${dancing.variable} ${bodoniModa.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}

