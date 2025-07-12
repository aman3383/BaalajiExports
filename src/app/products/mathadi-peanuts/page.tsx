import { Metadata } from 'next';
import MathadiPeanutContent from './MathadiPeanutContent';

export const metadata: Metadata = {
  title: 'Premium Mathadi Peanuts | Export Quality Groundnuts from Gujarat | Balaji Exports',
  description: 'Premium Mathadi Peanuts from Gujarat, India. Large, round, flat kernels ideal for roasting, snack manufacturing, oil extraction & confectionery. FSSAI, HACCP & ISO certified. Wholesale supplier to global markets.',
  keywords: [
    'mathadi peanuts', 'export quality peanuts', 'Indian groundnuts', 'peanut exporters',
    'Gujarat peanuts', 'roasted peanuts', 'peanut brittle', 'bulk peanuts supplier',
    'peanut oil extraction', 'wholesale peanuts', 'groundnut companies', 'peanut importers',
    'edible peanuts', 'food grade peanuts'
  ],
  openGraph: {
    title: 'Premium Mathadi Peanuts | Export Quality Groundnuts from Gujarat | Balaji Exports',
    description: 'Premium Mathadi Peanuts from Gujarat, India. Large, round, flat kernels ideal for roasting, snack manufacturing, oil extraction & confectionery. FSSAI, HACCP & ISO certified.',
    type: 'website',
    url: 'https://balajiexports.com/products/mathadi-peanuts',
    siteName: 'Balaji Exports',
    images: [
      {
        url: 'https://balajiexports.com/images/mathadi-peanuts-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Mathadi Peanuts from Gujarat - Export Quality Groundnuts'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BalajiExports',
    creator: '@BalajiExports',
    title: 'Premium Mathadi Peanuts | Export Quality Groundnuts from Gujarat | Balaji Exports',
    description: 'Premium Mathadi Peanuts from Gujarat, India. Large, round, flat kernels ideal for roasting, snack manufacturing, oil extraction & confectionery.',
    images: ['https://balajiexports.com/images/mathadi-peanuts-twitter.jpg']
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/mathadi-peanuts',
    languages: {
      'en': 'https://balajiexports.com/products/mathadi-peanuts',
      'hi': 'https://balajiexports.com/hi/products/mathadi-peanuts',
      'gu': 'https://balajiexports.com/gu/products/mathadi-peanuts',
      'x-default': 'https://balajiexports.com/products/mathadi-peanuts'
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
    'geo.region': 'IN-GJ',
    'geo.placename': 'Gujarat, India',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
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

export default function MathadiPeanutPage() {
  return <MathadiPeanutContent />;
}