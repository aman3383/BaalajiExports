import { Metadata } from 'next';
import BlanchedPeanutContent from './BlanchedPeanutContent';

export const metadata: Metadata = {
  title: "Premium Export Quality Blanched Peanuts | Balaji Exports India",
  description: "High-quality Blanched Peanuts with skins removed for enhanced flavor and smooth texture. FSSAI, ISO & HACCP certified. Ideal for peanut butter, snacks, baking, and confectionery. Global shipping available from India's leading peanut exporter.",
  keywords: [
    'blanched peanuts', 'skinless peanuts', 'peanut butter grade peanuts', 'export quality peanuts', 
    'Indian peanuts exporter', 'smooth peanuts', 'peanut snacks', 'confectionery peanuts', 
    'bulk peanut supplier', 'groundnut exporters India', 'wholesale peanuts suppliers', 
    'FSSAI certified peanuts', 'ISO certified groundnuts', 'HACCP peanuts', 
    'peanut butter manufacturing', 'snack grade peanuts', 'bakery peanuts', 
    'cosmetic grade peanuts', 'animal feed peanuts', 'peanut exporters to UAE',
    'groundnut companies Gujarat', 'buy groundnuts bulk', 'groundnut prices per ton',
    'peanut importers worldwide', 'best quality groundnuts India'
  ],
  authors: [{ name: "Balaji Exports" }],
  publisher: "Balaji Exports",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    title: "Premium Export Quality Blanched Peanuts | Balaji Exports India",
    description: "Blanched peanuts with skins removed for smooth texture and rich flavor. FSSAI, ISO & HACCP certified. Ideal for snacks, peanut butter, and confectionery. Exported globally with premium quality standards from India's leading exporter.",
    url: "https://balajiexports.com/products/blanched-peanuts",
    images: [
      {
        url: "/images/blanched-peanuts-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Quality Blanched Peanuts from Balaji Exports India"
      }
    ],
    siteName: "Balaji Exports",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    title: "Premium Export Quality Blanched Peanuts | Balaji Exports",
    description: "Blanched peanuts with skins removed for smooth texture and rich flavor. FSSAI, ISO & HACCP certified. Ideal for snacks, peanut butter, and confectionery.",
    images: ["/images/blanched-peanuts-og-image.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/products/blanched-peanuts",
    languages: {
      'en': "https://balajiexports.com/products/blanched-peanuts",
      'hi': "https://balajiexports.com/hi/products/blanched-peanuts"
    }
  },
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    "theme-color": "#2E7D32",
    "msapplication-TileColor": "#2E7D32",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default"
  }
};

export default function BlanchedPeanutPage() {
  return <BlanchedPeanutContent />;
} 