import { Metadata } from 'next';
import NutJourneyContent from './NutJourneyContent';

export const metadata: Metadata = {
  title: "Nut Journey - From Farm to Table | Peanut Processing Guide | Balaji Exports",
  description: "Discover the complete journey of peanuts from farm to table. Learn about peanut farming, processing, quality control, and export standards. Expert insights from India's leading peanut exporters.",
  keywords: "peanut journey, farm to table, peanut processing, peanut farming, peanut quality control, peanut export standards, peanut processing guide, peanut farming techniques, peanut harvesting, peanut drying, peanut sorting, peanut packaging, peanut export process, peanut quality assurance, peanut processing steps, peanut farming methods, peanut export guidelines, peanut processing technology, peanut farming best practices, peanut export requirements",
  openGraph: {
    title: "Nut Journey - From Farm to Table | Peanut Processing Guide | Balaji Exports",
    description: "Discover the complete journey of peanuts from farm to table. Learn about peanut farming, processing, quality control, and export standards. Expert insights from India's leading peanut exporters.",
    type: "website",
    url: "https://balajiexports.com/nut-journey",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/nut-journey-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nut Journey - From Farm to Table Process by Balaji Exports"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "Nut Journey - From Farm to Table | Peanut Processing Guide | Balaji Exports",
    description: "Discover the complete journey of peanuts from farm to table. Learn about peanut farming, processing, quality control, and export standards.",
    images: ["https://balajiexports.com/images/nut-journey-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/nut-journey"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function NutJourneyPage() {
  return <NutJourneyContent />;
} 