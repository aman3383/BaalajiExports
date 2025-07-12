import { Metadata } from 'next';
import SaltedPeanutContent from './SaltedPeanutContent';

export const metadata: Metadata = {
  title: "Premium Export Quality Salted Peanuts | Balaji Exports - India's Leading Groundnut Supplier",
  description: "High-quality Salted Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction. Wholesale groundnut supplier with global shipping.",
  keywords: "salted peanuts, export quality peanuts, Indian groundnuts, peanut exporters, wholesale peanuts, organic groundnuts, bulk peanuts supplier, peanut exports India, groundnut oil, peanut butter manufacturing, FSSAI certified peanuts, Gujarat peanuts, Rajasthan groundnuts",
  openGraph: {
    title: "Premium Export Quality Salted Peanuts | Balaji Exports - India's Leading Groundnut Supplier",
    description: "High-quality Salted Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction. Wholesale groundnut supplier with global shipping.",
    url: "https://balajiexports.com/products/salted-peanuts",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/products/salted-peanuts-og.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Export Quality Salted Peanuts from Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Export Quality Salted Peanuts | Balaji Exports - India's Leading Groundnut Supplier",
    description: "High-quality Salted Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction. Wholesale groundnut supplier with global shipping.",
    images: ["https://balajiexports.com/images/products/salted-peanuts-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/products/salted-peanuts",
    languages: {
      'en': "https://balajiexports.com/products/salted-peanuts"
    }
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1
  },
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    'ICBM': '26.9124, 75.7873',
    'theme-color': '#2E5933',
    'msapplication-TileColor': '#2E5933',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  }
};

export default function SaltedPeanutPage() {
  return <SaltedPeanutContent />;
} 