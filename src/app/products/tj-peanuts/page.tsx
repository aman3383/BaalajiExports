import { Metadata } from 'next';
import TJPeanutContent from './TJPeanutContent';

export const metadata: Metadata = {
  title: "Premium Export Quality TJ Peanuts (Tirupati Java) | Balaji Exports",
  description: "Top-grade TJ Peanuts (Tirupati Java) with light pink skin, uniform shape, and 44–47% oil content. Ideal for snacks, peanut butter, and confectionery. Export-ready from India.",
  keywords: "TJ peanuts, Tirupati Java peanuts, Java peanuts India, export quality peanuts, light pink peanuts, Indian groundnuts, peanut exporters, bulk peanut supplier, medium-sized peanuts, wholesale peanuts India, groundnut export, peanut butter manufacturing, food grade peanuts, FSSAI certified peanuts, Gujarat peanuts, Andhra Pradesh groundnuts",
  openGraph: {
    title: "Premium Export Quality TJ Peanuts (Tirupati Java) | Balaji Exports",
    description: "Export-quality TJ Peanuts from India with light pink skin, medium-round size, and rich flavor. Ideal for snacks, peanut butter, and food processing industries.",
    url: "https://balajiexports.com/products/tj-peanuts",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/tj-peanuts-main.jpg",
        width: 1200,
        height: 630,
        alt: "Premium TJ Peanuts (Tirupati Java) - Export Quality from India"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Export Quality TJ Peanuts (Tirupati Java) | Balaji Exports",
    description: "High-quality TJ Peanuts with light pink skin, consistent size, and 44–47% oil. Perfect for snacks, sweets, and export markets. Sourced from Gujarat & Andhra Pradesh.",
    images: ["https://balajiexports.com/images/tj-peanuts-main.jpg"]
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/tj-peanuts'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  category: 'product',
  classification: 'agricultural products',
  referrer: 'origin-when-cross-origin',
  themeColor: '#2E5D31',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  formatDetection: {
    telephone: false
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Gujarat, India',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714'
  }
};

export default function TJPeanutPage() {
  return <TJPeanutContent />;
} 