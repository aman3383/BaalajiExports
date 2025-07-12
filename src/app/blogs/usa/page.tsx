import { Metadata } from 'next';
import USAContent from './USAContent';

export const metadata: Metadata = {
  title: "India-USA Peanut Trade Partnership | Market Insights & Export Opportunities | Balaji Exports",
  description: "Explore the growing India-USA peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the US market.",
  keywords: "India USA peanut trade, Indian peanut exports USA, groundnut trade partnership, peanut market USA, Indian peanut suppliers USA, peanut export opportunities, USA peanut market, Indian groundnut exports, peanut trade policies, USA peanut importers, Indian peanut exporters, peanut market analysis USA, groundnut trade partnership, peanut export business USA, Indian peanut suppliers, USA peanut market trends, peanut trade opportunities, Indian groundnut suppliers USA, peanut export market USA, peanut trade partnership India USA",
  openGraph: {
    title: "India-USA Peanut Trade Partnership | Market Insights & Export Opportunities | Balaji Exports",
    description: "Explore the growing India-USA peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the US market.",
    type: "website",
    url: "https://balajiexports.com/blogs/usa",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/usa-peanut-trade-og.jpg",
        width: 1200,
        height: 630,
        alt: "India-USA Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "India-USA Peanut Trade Partnership | Market Insights & Export Opportunities | Balaji Exports",
    description: "Explore the growing India-USA peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the US market.",
    images: ["https://balajiexports.com/images/usa-peanut-trade-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/usa"
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

export default function USAPage() {
  return <USAContent />;
} 