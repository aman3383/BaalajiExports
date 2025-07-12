import { Metadata } from 'next';
import ICGV15090PeanutContent from './ICGV15090PeanutContent';

export const metadata: Metadata = {
  title: 'ICGV 15090/ Girnar 5 Peanuts - Premium High Oleic Groundnuts Exporter | Balaji Exports',
  description: 'Premium ICGV-15090 high oleic peanuts from India\'s leading exporter. >78% oleic acid, export quality groundnuts for peanut butter, oil extraction & snacks. FSSAI, HACCP, ISO certified.',
  keywords: [
    'ICGV 15090/ Girnar 5 peanuts', 'high oleic groundnuts', 'peanut exporter India', 'groundnut supplier',
    'premium peanuts', 'peanut butter groundnuts', 'groundnut oil', 'export quality peanuts',
    'Balaji Exports', 'wholesale peanuts India'
  ],
  openGraph: {
    title: 'ICGV 15090/ Girnar 5 Premium High Oleic Peanuts - Export Quality Groundnuts',
    description: 'Premium ICGV-15090 high oleic peanuts with >78% oleic acid. Perfect for peanut butter, oil extraction & premium snacks. FSSAI certified export quality from India.',
    type: 'website',
    url: 'https://balajiexports.com/products/icgv-15090-peanuts',
    siteName: 'Balaji Exports',
    images: [
      {
        url: 'https://balajiexports.com/images/products/icgv-15090-peanuts.jpg',
        width: 1200,
        height: 630,
        alt: 'ICGV 15090/ Girnar 5 Premium High Oleic Peanuts - Export Quality Groundnuts'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BalajiExports',
    creator: '@BalajiExports',
    title: 'ICGV 15090/ Girnar 5 Premium High Oleic Peanuts - Export Quality',
    description: 'Premium high oleic peanuts with >78% oleic acid. Export quality ICGV-03043 groundnuts for peanut butter & oil extraction. FSSAI certified from India.',
    images: ['https://balajiexports.com/images/products/icgv-03043-peanuts.jpg']
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/icgv-15090-peanuts',
    languages: {
      'en': 'https://balajiexports.com/products/icgv-15090-peanuts',
      'hi': 'https://balajiexports.com/hi/products/icgv-15090-peanuts',
      'gu': 'https://balajiexports.com/gu/products/icgv-15090-peanuts',
      'x-default': 'https://balajiexports.com/products/icgv-15090-peanuts'
    }
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  category: 'Food & Beverages > Nuts & Seeds > Peanuts',
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Andhra Pradesh, India',
    'geo.position': '15.9129;79.7400',
    'ICBM': '15.9129, 79.7400',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'author': 'Balaji Exports',
    'contact': 'info@balajiexports.com',
    'reply-to': 'info@balajiexports.com',
    'owner': 'Balaji Exports',
    'directory': 'submission',
    'coverage': 'Worldwide',
    'target': 'Importers, Food Manufacturers, Snack Companies, Wholesalers, Distributors'
  }
};

export default function ICGV15090PeanutPage() {
  return <ICGV15090PeanutContent />;
}

