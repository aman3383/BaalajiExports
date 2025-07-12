import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: "About Balaji Exports - Leading Peanut Exporters from India | Our Story",
description: "Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.",
keywords: "About Balaji Exports, Peanut Export Company India, Groundnut Exporters India, Indian Peanut Suppliers, Peanut Export Business, Groundnut Trading Company, Peanut Wholesale India, Export Quality Peanuts, FSSAI Certified Peanut Exporters, HACCP Certified Groundnut Company, ISO Certified Peanut Suppliers, Peanut Exporters from India to UAE, Groundnut Companies in Gujarat, Peanut Export from India to Europe, Bulk Peanut Suppliers, Wholesale Groundnut Traders, Premium Quality Peanuts India, Organic Peanut Exporters, Natural Groundnuts India, Best Peanut Export Company",
  openGraph: {
    title: "About Balaji Exports - Leading Peanut Exporters from India | Our Story",
    description: "Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.",
    url: "https://balajiexports.com/about",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/about-balaji-exports-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Balaji Exports - Premier Peanut Exporters from India"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Balaji Exports - Leading Peanut Exporters from India | Our Story",
    description: "Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.",
    images: ["https://balajiexports.com/images/about-balaji-exports-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/about"
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

export default function AboutPage() {
  return <AboutContent />;
} 