import { Metadata } from 'next';
import K6PeanutContent from './K6PeanutContent';

export const metadata: Metadata = {
  title: "Premium Export Quality K6 Peanuts | High Oil Indian Groundnuts | Balaji Exports",
  description: "K6 Peanuts with high oil content (up to 50%), medium-bold kernels, and excellent shelf life. Ideal for peanut oil extraction, butter, snacks, and export. Sourced from Gujarat and Andhra Pradesh.",
  keywords: "K6 peanuts, high oil peanuts, Indian groundnuts, export peanuts India, peanut oil extraction, peanut butter peanuts, bulk peanut suppliers, peanut exporters, machine-cleaned peanuts, food-grade peanuts, wholesale groundnuts, groundnut price per ton, buy groundnuts bulk, peanut importers, groundnut companies Andhra Pradesh, peanut exporters India UAE",
  authors: [{ name: "Balaji Exports" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://balajiexports.com/products/k6-peanuts",
    title: "Premium Export Quality K6 Peanuts | High Oil Indian Groundnuts",
    description: "Top-grade K6 Peanuts with 48–50% oil content and medium-bold kernels. Ideal for oil extraction, peanut butter, snacks, and global export markets. FSSAI, HACCP, ISO certified.",
    images: [
      {
        url: "https://balajiexports.com/images/k6-peanuts-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Premium K6 Peanuts - High Oil Content Indian Groundnuts"
      }
    ],
    siteName: "Balaji Exports",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "Premium Export Quality K6 Peanuts | High Oil Indian Groundnuts",
    description: "K6 Peanuts with high oil content and uniform medium-bold size. Used for peanut oil, butter, and snacks. Long shelf life, export-ready, and processed to global standards.",
    images: ["https://balajiexports.com/images/k6-peanuts-hero.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/products/k6-peanuts",
    languages: {
      'en': 'https://balajiexports.com/products/k6-peanuts',
      'hi': 'https://balajiexports.com/hi/products/k6-peanuts'
    }
  },
  category: "Agricultural Products",
  classification: "Groundnuts & Peanuts",
  other: {
    "product-type": "Agricultural Products",
    "product-category": "Groundnuts & Peanuts",
    "origin-country": "India",
    "export-markets": "UAE, Europe, USA, Africa, Russia",
    "certifications": "FSSAI, HACCP, ISO",
    "minimum-order": "1 Ton",
    "packaging": "25kg, 50kg PP bags, Jute bags, Vacuum packing",
    "shelf-life": "12 months",
    "geo-region": "IN-RJ",
    "geo-position": "26.9124;75.7873",
    "geo-placename": "Rajasthan, India"
  }
};

export default function K6PeanutPage() {
  return <K6PeanutContent />;
} 