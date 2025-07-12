import { Metadata } from 'next';
import OrganicPeanutContent from './OrganicPeanutContent';

export const metadata: Metadata = {
  title: "Premium Organic Peanuts Exporter from India | Balaji Exports",
  description: "Certified organic peanuts from India. Non-GMO, pesticide-free, FSSAI, HACCP, ISO certified. Ideal for snacks, peanut butter, oil extraction. Bulk supply, global export.",
  keywords: [
    'organic peanuts', 'certified organic groundnuts', 'non-GMO peanuts', 'pesticide-free peanuts',
    'Indian organic peanuts exporter', 'bulk organic peanuts', 'organic peanut butter',
    'organic peanut oil', 'wholesale organic groundnuts', 'FSSAI certified organic peanuts',
    'HACCP certified peanuts', 'ISO certified groundnuts', 'organic snack peanuts',
    'organic animal feed', 'organic peanut suppliers', 'organic groundnut exporters',
    'organic peanuts India', 'organic peanuts for export', 'organic peanuts for snacks',
    'organic peanuts for oil extraction', 'organic peanuts for peanut butter'
  ],
  authors: [{ name: "Balaji Exports" }],
  publisher: "Balaji Exports",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    title: "Premium Organic Peanuts Exporter from India | Balaji Exports",
    description: "Certified organic peanuts from India. Non-GMO, pesticide-free, FSSAI, HACCP, ISO certified. Ideal for snacks, peanut butter, oil extraction. Bulk supply, global export.",
    url: "https://balajiexports.com/products/organic-peanuts",
    images: [
      {
        url: "/images/organic-peanuts-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Organic Peanuts from Balaji Exports India"
      }
    ],
    siteName: "Balaji Exports",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    title: "Premium Organic Peanuts Exporter from India | Balaji Exports",
    description: "Certified organic peanuts from India. Non-GMO, pesticide-free, FSSAI, HACCP, ISO certified. Ideal for snacks, peanut butter, oil extraction. Bulk supply, global export.",
    images: ["/images/organic-peanuts-og-image.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/products/organic-peanuts",
    languages: {
      'en': "https://balajiexports.com/products/organic-peanuts",
      'hi': "https://balajiexports.com/hi/products/organic-peanuts"
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

export default function OrganicPeanutPage() {
  return <OrganicPeanutContent />;
} 