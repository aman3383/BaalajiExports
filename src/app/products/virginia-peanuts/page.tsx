import { Metadata } from 'next';
import VirginiaPeanutContent from './VirginiaPeanutContent';

export const metadata: Metadata = {
  title: 'Premium Export Quality Virginia Peanuts | Balaji Exports - Bulk Supplier India',
  description: 'Leading Virginia peanuts supplier from India. Export quality large-kernel groundnuts for snacking, roasting & food industries. FSSAI, HACCP, ISO certified. Competitive wholesale prices, global shipping.',
  keywords: [
    'virginia peanuts', 'large kernel peanuts', 'export quality groundnuts', 'peanut supplier India',
    'wholesale groundnuts', 'bulk peanuts exporter', 'premium peanuts India', 'roasted peanuts',
    'in-shell peanuts', 'peanut manufacturers India', 'groundnut exporters Andhra Pradesh',
    'peanut prices per ton', 'buy groundnuts bulk', 'food grade peanuts', 'snack industry peanuts',
    'confectionery peanuts', 'peanut butter manufacturing', 'FSSAI certified peanuts', 'HACCP peanuts',
    'ISO certified groundnuts', 'aflatoxin controlled peanuts', 'hygienic packaging peanuts',
    'lab tested groundnuts', 'edible peanuts India', 'peanut export business'
  ],
  openGraph: {
    title: 'Premium Export Quality Virginia Peanuts | Balaji Exports - Leading Indian Supplier',
    description: 'Premium Virginia peanuts from India\'s leading exporter. Large-kernel groundnuts perfect for snacking, roasting & food industries. FSSAI certified, competitive wholesale prices, global shipping available.',
    type: 'website',
    url: 'https://balajiexports.com/products/virginia-peanuts',
    siteName: 'Balaji Exports',
    images: [
      {
        url: 'https://balajiexports.com/images/products/virginia-peanuts.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Virginia Peanuts - Large kernel export quality groundnuts from Balaji Exports India'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BalajiExports',
    creator: '@BalajiExports',
    title: 'Premium Virginia Peanuts - Export Quality | Balaji Exports India',
    description: 'Large-kernel Virginia peanuts from India\'s premier supplier. Perfect for snacking, roasting & food industries. FSSAI certified, competitive prices, worldwide shipping.',
    images: ['https://balajiexports.com/images/products/virginia-peanuts.jpg']
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/virginia-peanuts',
    languages: {
      'en': 'https://balajiexports.com/products/virginia-peanuts',
      'hi': 'https://balajiexports.com/hi/products/virginia-peanuts',
      'gu': 'https://balajiexports.com/gu/products/virginia-peanuts',
      'x-default': 'https://balajiexports.com/products/virginia-peanuts'
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

export default function VirginiaPeanutPage() {
  return <VirginiaPeanutContent />;
}


