import { Metadata } from 'next';
import ICGV15099PeanutContent from './ICGV03043PeanutContent';

export const metadata: Metadata = {
  title: 'ICGV-03043 Peanuts - Premium Export Quality Groundnuts | Balaji Exports',
  description: 'Premium ICGV-03043 peanuts from India\'s leading exporter. High-yield, disease-resistant variety perfect for roasting, snack manufacturing, and confectionery. FSSAI, HACCP, ISO certified.',
  keywords: [
    'ICGV-03043 peanuts', 'export quality peanuts', 'Indian groundnuts', 'peanut exporters',
    'high-yield peanuts', 'disease-resistant peanuts', 'roasted peanuts', 'peanut confectionery',
    'bulk peanuts supplier', 'wholesale peanuts', 'groundnut companies', 'peanut importers',
    'edible peanuts', 'food grade peanuts'
  ],
  openGraph: {
    title: 'ICGV-03043 Peanuts - Premium Export Quality Groundnuts | Balaji Exports',
    description: 'Premium ICGV-03043 peanuts from India. High-yield, disease-resistant variety perfect for roasting, snack manufacturing, and confectionery. FSSAI, HACCP, ISO certified.',
    type: 'website',
    url: 'https://balajiexports.com/products/icgv-03043-peanuts',
    siteName: 'Balaji Exports',
    images: [
      {
        url: 'https://balajiexports.com/images/products/icgv-03043-peanuts.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium ICGV-03043 Peanuts - Export Quality Groundnuts'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BalajiExports',
    creator: '@BalajiExports',
    title: 'ICGV-03043 Peanuts - Premium Export Quality Groundnuts',
    description: 'Premium ICGV-03043 peanuts from India. High-yield, disease-resistant variety perfect for roasting, snack manufacturing, and confectionery.',
    images: ['https://balajiexports.com/images/products/icgv-03043-peanuts.jpg']
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/icgv-03043-peanuts',
    languages: {
      'en': 'https://balajiexports.com/products/icgv-03043-peanuts',
      'hi': 'https://balajiexports.com/hi/products/icgv-03043-peanuts',
      'x-default': 'https://balajiexports.com/products/icgv-03043-peanuts'
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
    'geo.region': 'IN-RJ',
    'geo.placename': 'Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    'ICBM': '26.9124, 75.7873',
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

export default function ICGV15099PeanutPage() {
  return <ICGV15099PeanutContent />;
}

