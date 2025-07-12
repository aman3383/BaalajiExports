import { Metadata } from 'next';
import IndonesiaContent from './IndonesiaContent';

export const metadata: Metadata = {
  title: "India-Indonesia Peanut Trade | Southeast Asian Partnership & Business Opportunities | Balaji Exports",
  description: "Discover the growing agricultural trade relationship between India and Indonesia with insights into peanut exports, market trends, and emerging business opportunities in Indonesia's expanding market.",
  keywords: "India Indonesia peanut trade, Indonesian peanut market, Indonesia groundnut imports, Indonesian food industry, peanut exports Indonesia, Indian groundnuts Indonesia, Indonesian market opportunities, Southeast Asia trade, Indonesian agricultural trade, Indonesia import regulations, Indonesian food processing, ASEAN peanut trade, Indonesian snack industry, Indonesia market potential",
  openGraph: {
    title: "India-Indonesia Peanut Trade | Southeast Asian Partnership & Business Opportunities | Balaji Exports",
    description: "Discover the growing agricultural trade relationship between India and Indonesia with insights into peanut exports, market trends, and emerging business opportunities in Indonesia's expanding market.",
    url: "https://balajiexports.com/blogs/indonesia",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/indonesia-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Indonesia Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Indonesia Peanut Trade | Southeast Asian Partnership & Business Opportunities | Balaji Exports",
    description: "Discover the growing agricultural trade relationship between India and Indonesia with insights into peanut exports, market trends, and emerging business opportunities in Indonesia's expanding market.",
    images: ["https://balajiexports.com/images/blogs/indonesia-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/indonesia"
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

export default function IndonesiaBlogPage() {
  return <IndonesiaContent />;
} 