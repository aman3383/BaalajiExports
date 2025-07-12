import { Metadata } from 'next';
import SingaporeContent from './SingaporeContent';

export const metadata: Metadata = {
  title: "India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports",
  description: "Explore the India-Singapore peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Singapore market.",
  keywords: "India Singapore peanut trade, Indian peanut exports Singapore, groundnut trade partnership, peanut market Singapore, Indian peanut suppliers Singapore, peanut export opportunities, Singapore peanut market, Indian groundnut exports, peanut trade policies, Singapore peanut importers, Indian peanut exporters, peanut market analysis Singapore, groundnut trade partnership, peanut export business Singapore, Indian peanut suppliers, Singapore peanut market trends, peanut trade opportunities, Indian groundnut suppliers Singapore, peanut export market Singapore, peanut trade partnership India Singapore",
  openGraph: {
    title: "India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports",
    description: "Explore the India-Singapore peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Singapore market.",
    type: "website",
    url: "https://balajiexports.com/blogs/singapore",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/singapore-peanut-trade-og.jpg",
        width: 1200,
        height: 630,
        alt: "India-Singapore Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports",
    description: "Explore the India-Singapore peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Singapore market.",
    images: ["https://balajiexports.com/images/singapore-peanut-trade-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/singapore"
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

export default function SingaporePage() {
  return <SingaporeContent />;
} 