import { Metadata } from 'next';
import UKContent from './UKContent';

export const metadata: Metadata = {
  title: "India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports",
  description: "Explore the India-UK peanut trade partnership under the Free Trade Agreement. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the UK market.",
  keywords: "India UK peanut trade, Indian peanut exports UK, groundnut trade partnership, peanut market UK, Indian peanut suppliers UK, peanut export opportunities, UK peanut market, Indian groundnut exports, peanut trade policies, UK peanut importers, Indian peanut exporters, peanut market analysis UK, groundnut trade partnership, peanut export business UK, Indian peanut suppliers, UK peanut market trends, peanut trade opportunities, Indian groundnut suppliers UK, peanut export market UK, peanut trade partnership India UK",
  openGraph: {
    title: "India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports",
    description: "Explore the India-UK peanut trade partnership under the Free Trade Agreement. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the UK market.",
    type: "website",
    url: "https://balajiexports.com/blogs/uk",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/uk-peanut-trade-og.jpg",
        width: 1200,
        height: 630,
        alt: "India-UK Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports",
    description: "Explore the India-UK peanut trade partnership under the Free Trade Agreement. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the UK market.",
    images: ["https://balajiexports.com/images/uk-peanut-trade-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/uk"
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

export default function UKPage() {
  return <UKContent />;
} 