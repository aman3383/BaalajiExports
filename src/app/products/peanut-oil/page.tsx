import { Metadata } from 'next';
import PeanutOilContent from './PeanutOilContent';

export const metadata: Metadata = {
  title: 'Premium Peanut Oil | High-Quality Cooking Oil | Balaji Exports',
  description: 'Premium peanut oil from leading Indian exporters. High smoke point (450°F), heart-healthy, neutral flavor. Perfect for cooking, frying, cosmetics & industrial use. FSSAI certified, competitive wholesale prices.',
  keywords: [
    'peanut oil', 'groundnut oil', 'cooking oil', 'high smoke point oil', 'heart healthy oil',
    'neutral flavor oil', 'frying oil', 'bulk peanut oil', 'wholesale peanut oil',
    'peanut oil exporters India', 'groundnut oil suppliers', 'FSSAI certified oil',
    'industrial peanut oil', 'cosmetic grade oil', 'refined peanut oil', 'food grade oil',
    'commercial cooking oil', 'restaurant cooking oil', 'deep frying oil', 'high temperature oil'
  ],
  authors: [{ name: 'Balaji Exports' }],
  publisher: 'Balaji Exports',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1
  },
  openGraph: {
    type: 'website',
    title: 'Premium Peanut Oil | High-Quality Cooking Oil | Balaji Exports',
    description: 'Premium peanut oil from leading Indian exporters. High smoke point (450°F), heart-healthy, neutral flavor. Perfect for cooking, frying, cosmetics & industrial use.',
    url: 'https://balajiexports.com/products/peanut-oil',
    siteName: 'Balaji Exports',
    images: [
      {
        url: 'https://balajiexports.com/images/products/peanut-oil.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Peanut Oil - High Quality Cooking Oil'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BalajiExports',
    creator: '@BalajiExports',
    title: 'Premium Peanut Oil | High-Quality Cooking Oil | Balaji Exports',
    description: 'Premium peanut oil from leading Indian exporters. High smoke point (450°F), heart-healthy, neutral flavor. Perfect for cooking, frying, cosmetics & industrial use.',
    images: ['https://balajiexports.com/images/products/peanut-oil.jpg']
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/peanut-oil',
    languages: {
      'en': 'https://balajiexports.com/products/peanut-oil',
      'en-gb': 'https://balajiexports.com/uk/products/peanut-oil',
      'en-ae': 'https://balajiexports.com/uae/products/peanut-oil',
      'x-default': 'https://balajiexports.com/products/peanut-oil'
    }
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  category: 'Food & Beverages > Cooking Oils > Peanut Oil',
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
    'target': 'Food Industry, Restaurants, Cosmetic Manufacturers, Industrial Users',
    'product:price:amount': 'Contact for pricing',
    'product:price:currency': 'USD',
    'product:availability': 'In Stock',
    'product:condition': 'New',
    'product:brand': 'Balaji Exports',
    'product:category': 'Cooking Oils',
    'product:material': 'Peanuts',
    'product:color': 'Light Yellow',
    'product:weight': 'Bulk quantities available',
    'product:dimensions': 'Standard industry packaging',
    'product:shipping': 'Worldwide shipping available',
    'product:payment_methods': 'Bank Transfer, Letter of Credit',
    'product:minimum_order': 'Contact for details',
    'product:certification': 'FSSAI, HACCP, ISO',
    'product:origin': 'India',
    'product:manufacturer': 'Balaji Exports',
    'product:supplier': 'Balaji Exports',
    'product:export_markets': 'Global',
    'product:import_markets': 'All countries',
    'product:customs_tariff': 'Contact for details',
    'product:incoterms': 'FOB, CIF, CFR',
    'product:packaging': 'Standard industry packaging',
    'product:storage': 'Store in cool, dry place',
    'product:shelf_life': '12 months',
    'product:moq': 'Contact for details',
    'product:lead_time': 'Contact for details',
    'product:sample_available': 'Yes',
    'product:private_labeling': 'Available',
    'product:oem': 'Available',
    'product:odm': 'Available'
  }
};

export default function PeanutOilPage() {
  return <PeanutOilContent />;
} 