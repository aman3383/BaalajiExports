import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FreeSampleButton from '@/components/FreeSampleButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Balaji Exports - Premium Peanut Exporters from India',
  description: 'Leading exporters of premium quality peanuts and groundnuts from India. FSSAI, HACCP, ISO certified. Bulk wholesale peanut suppliers for global markets.',
  metadataBase: new URL('https://www.baalajiexports.com'),
  alternates: {
    canonical: '/',
  },
  keywords: 'peanut exporters, groundnut exporters, bulk peanuts, wholesale peanuts, Indian peanuts, export quality peanuts',
  authors: [{ name: 'Balaji Exports' }],
  openGraph: {
    title: 'Balaji Exports - Premium Peanut Exporters from India',
    description: 'Leading exporters of premium quality peanuts and groundnuts from India. FSSAI, HACCP, ISO certified.',
    url: 'https://www.balajiexports.com',
    siteName: 'Balaji Exports',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Balaji Exports - Premium Peanut Exporters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balaji Exports - Premium Peanut Exporters from India',
    description: 'Leading exporters of premium quality peanuts and groundnuts from India. FSSAI, HACCP, ISO certified.',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider>
          <Navbar />
          <FreeSampleButton />
          <WhatsAppButton />
          <ScrollToTopButton />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 