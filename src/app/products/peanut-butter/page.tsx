import PeanutButterContent from './PeanutButterContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Peanut Butter Exporter from India | Balaji Exports",
  description: "Export-quality peanut butter from India. FSSAI, HACCP, ISO certified. Creamy, crunchy, natural, and flavored varieties. Bulk supply, private label, global export.",
  keywords: [
    'peanut butter', 'peanut butter exporter', 'Indian peanut butter', 'bulk peanut butter',
    'private label peanut butter', 'creamy peanut butter', 'crunchy peanut butter',
    'natural peanut butter', 'flavored peanut butter', 'FSSAI certified peanut butter',
    'HACCP certified peanut butter', 'ISO certified peanut butter', 'peanut butter supplier',
    'peanut butter manufacturer', 'peanut butter India', 'peanut butter for export',
    'peanut butter for snacks', 'peanut butter for baking', 'peanut butter for retail',
    'peanut butter for food service', 'peanut butter for confectionery'
  ],
  authors: [{ name: "Balaji Exports" }],
  publisher: "Balaji Exports",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    title: "Premium Peanut Butter Exporter from India | Balaji Exports",
    description: "Export-quality peanut butter from India. FSSAI, HACCP, ISO certified. Creamy, crunchy, natural, and flavored varieties. Bulk supply, private label, global export.",
    url: "https://balajiexports.com/products/peanut-butter",
    images: [
      {
        url: "/images/peanut-butter-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Peanut Butter from Balaji Exports India"
      }
    ],
    siteName: "Balaji Exports",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    title: "Premium Peanut Butter Exporter from India | Balaji Exports",
    description: "Export-quality peanut butter from India. FSSAI, HACCP, ISO certified. Creamy, crunchy, natural, and flavored varieties. Bulk supply, private label, global export.",
    images: ["/images/peanut-butter-og-image.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/products/peanut-butter",
    languages: {
      'en': "https://balajiexports.com/products/peanut-butter",
      'hi': "https://balajiexports.com/hi/products/peanut-butter"
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

export default function PeanutButterPage() {
  return <PeanutButterContent />;
}

