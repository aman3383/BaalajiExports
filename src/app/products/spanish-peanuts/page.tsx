import { Metadata } from 'next';
import SpanishPeanutContent from './SpanishPeanutContent';

export const metadata: Metadata = {
  title: "Premium Spanish Peanuts - High Quality Indian Groundnuts | Balaji Exports",
  description: "Discover premium quality Spanish Peanuts from India. FSSAI, HACCP, and ISO certified groundnuts perfect for peanut butter, snacks, and oil extraction. Competitive bulk pricing.",
  keywords: "Spanish Peanuts, Indian Groundnuts, Peanut Exporters, Groundnut Suppliers, Peanut Butter, Snack Manufacturing, Oil Extraction, FSSAI Certified, HACCP Certified, ISO Certified, Bulk Peanuts, Wholesale Groundnuts, Peanut Importers, Groundnut Companies, Peanut Export Business, Groundnut Prices, Edible Peanuts, Lab Tested Groundnuts, Hygienic Packaging, Peanut Export Company, Groundnuts from India, Peanut Exporters from India to UAE, Groundnut Companies in Rajasthan, Groundnut Companies in Gujarat, Groundnut Companies in Andhra Pradesh, Peanut Importers Worldwide, Wholesale Peanuts Suppliers in India, Groundnut Prices Per Ton, Buy Groundnuts in Bulk, Best Quality Groundnuts from India",
  openGraph: {
    title: "Premium Spanish Peanuts - High Quality Indian Groundnuts | Balaji Exports",
    description: "Discover premium quality Spanish Peanuts from India. FSSAI, HACCP, and ISO certified groundnuts perfect for peanut butter, snacks, and oil extraction. Competitive bulk pricing.",
    url: "https://balajiexports.com/products/spanish-peanuts",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/spanish-peanuts-og.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Spanish Peanuts from India"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Spanish Peanuts - High Quality Indian Groundnuts | Balaji Exports",
    description: "Discover premium quality Spanish Peanuts from India. FSSAI, HACCP, and ISO certified groundnuts perfect for peanut butter, snacks, and oil extraction. Competitive bulk pricing.",
    images: ["https://balajiexports.com/images/spanish-peanuts-og.jpg"]
  },
  alternates: {
    canonical: 'https://balajiexports.com/products/spanish-peanuts'
  }
};

export default function SpanishPeanutPage() {
  return <SpanishPeanutContent />;
} 