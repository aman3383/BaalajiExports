import { Metadata } from 'next';
import G20PeanutContent from './G20PeanutContent';

export const metadata: Metadata = {
  title: "Premium Export Quality G20 Peanuts | Balaji Exports - Best Indian Groundnuts Supplier",
  description: "Premium G20 Peanuts from India's top groundnut exporters. FSSAI, HACCP & ISO certified. High oil content, uniform size. Bulk wholesale available. Export to UAE, Europe, USA, Africa.",
  keywords: "G20 peanuts, export quality peanuts, Indian groundnuts, peanut exporters India, wholesale peanuts supplier, organic groundnuts, bulk peanuts, groundnut exporters Gujarat, peanut butter manufacturing, groundnut oil extraction, FSSAI certified peanuts, HACCP peanuts, ISO certified groundnuts, peanut exporters to UAE, groundnut companies Andhra Pradesh, wholesale groundnut prices, buy groundnuts bulk, premium Indian peanuts, edible peanuts export, groundnut exporters Rajasthan",
  authors: [{ name: "Balaji Exports" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Premium Export Quality G20 Peanuts | Balaji Exports - Best Indian Groundnuts",
    description: "High-quality G20 Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction. Global shipping available.",
    type: "website",
    url: "https://balajiexports.com/products/g20-peanuts",
    images: [
      {
        url: "https://balajiexports.com/images/products/g20-peanuts-featured.jpg",
        width: 1200,
        height: 630,
        alt: "Premium G20 Peanuts - Export Quality Indian Groundnuts"
      }
    ],
    siteName: "Balaji Exports",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "Premium Export Quality G20 Peanuts | Balaji Exports",
    description: "High-quality G20 Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction.",
    images: ["https://balajiexports.com/images/products/g20-peanuts-featured.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/products/g20-peanuts"
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification"
  },
  category: "Agricultural Products",
  classification: "Groundnuts & Peanuts",
  referrer: "origin-when-cross-origin",
  themeColor: "#2E7D32",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Gujarat, India",
    "geo.position": "23.0225;72.5714",
    "ICBM": "23.0225, 72.5714",
    "product-type": "Agricultural Products",
    "product-category": "Groundnuts & Peanuts",
    "origin-country": "India",
    "export-markets": "UAE, Europe, USA, Africa, Russia",
    "certifications": "FSSAI, HACCP, ISO",
    "minimum-order": "1 Ton",
    "packaging": "25kg, 50kg PP bags, Jute bags, Vacuum packing",
    "shelf-life": "12 months"
  }
};

export default function G20PeanutPage() {
  return <G20PeanutContent />;
} 