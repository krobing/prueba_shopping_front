import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import ClientAppTheme from '@/styles/ClientAppTheme'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tienda Online',
  description: 'Consulta de productos y agregar al carrito',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientAppTheme>{children}</ClientAppTheme>
      </body>
    </html>
  )
}
