import { Metadata } from 'next';
import GermanyContent from './GermanyContent';

export const metadata: Metadata = {
  title: "India-Germany Peanut Trade | European Market Leader & Sustainable Sourcing | Balaji Exports",
  description: "Explore the growing agricultural partnership between India and Germany, focusing on peanut exports, sustainable sourcing practices, and opportunities in Europe's largest economy for Indian groundnut varieties.",
  keywords: "India Germany peanut trade, German peanut market, Germany groundnut imports, German food industry, European peanut trade, sustainable peanut sourcing, German quality standards, peanut exports Germany, Indian groundnuts Germany, German market opportunities, European agricultural trade, Germany import regulations, German peanut demand, sustainable agriculture Germany",
  openGraph: {
    title: "India-Germany Peanut Trade | European Market Leader & Sustainable Sourcing | Balaji Exports",
    description: "Explore the growing agricultural partnership between India and Germany, focusing on peanut exports, sustainable sourcing practices, and opportunities in Europe's largest economy for Indian groundnut varieties.",
    url: "https://balajiexports.com/blogs/germany",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/germany-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Germany Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Germany Peanut Trade | European Market Leader & Sustainable Sourcing | Balaji Exports",
    description: "Explore the growing agricultural partnership between India and Germany, focusing on peanut exports, sustainable sourcing practices, and opportunities in Europe's largest economy for Indian groundnut varieties.",
    images: ["https://balajiexports.com/images/blogs/germany-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/germany"
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

export default function GermanyBlogPage() {
  return <GermanyContent />;
} 