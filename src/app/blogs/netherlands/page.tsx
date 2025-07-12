import { Metadata } from 'next';
import NetherlandsContent from './NetherlandsContent';

export const metadata: Metadata = {
  title: "India-Netherlands Peanut Trade | European Gateway & Export Opportunities | Balaji Exports",
  description: "Explore the India-Netherlands peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Netherlands market.",
  keywords: "India Netherlands peanut trade, Indian peanut exports Netherlands, groundnut trade partnership, peanut market Netherlands, Indian peanut suppliers Netherlands, peanut export opportunities, Netherlands peanut market, Indian groundnut exports, peanut trade policies, Netherlands peanut importers, Indian peanut exporters, peanut market analysis Netherlands, groundnut trade partnership, peanut export business Netherlands, Indian peanut suppliers, Netherlands peanut market trends, peanut trade opportunities, Indian groundnut suppliers Netherlands, peanut export market Netherlands, peanut trade partnership India Netherlands",
  openGraph: {
    title: "India-Netherlands Peanut Trade | European Gateway & Export Opportunities | Balaji Exports",
    description: "Explore the India-Netherlands peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Netherlands market.",
    type: "website",
    url: "https://balajiexports.com/blogs/netherlands",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/netherlands-peanut-trade-og.jpg",
        width: 1200,
        height: 630,
        alt: "India-Netherlands Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "India-Netherlands Peanut Trade | European Gateway & Export Opportunities | Balaji Exports",
    description: "Explore the India-Netherlands peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Netherlands market.",
    images: ["https://balajiexports.com/images/netherlands-peanut-trade-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/netherlands"
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

export default function NetherlandsPage() {
  return <NetherlandsContent />;
} 