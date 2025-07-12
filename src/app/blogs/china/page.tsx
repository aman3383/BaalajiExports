import { Metadata } from 'next';
import ChinaContent from './ChinaContent';

export const metadata: Metadata = {
  title: "India-China Peanut Trade | World's Largest Market Opportunities | Balaji Exports",
  description: "Explore the growing agricultural trade between India and China with insights into peanut exports, Chinese market demands, trade opportunities, and significant potential in the world's largest market for Indian groundnut varieties.",
  keywords: "India China peanut trade, Chinese peanut market, China groundnut imports, Chinese food industry, peanut exports China, Indian groundnuts China, Chinese market opportunities, China agricultural trade, Chinese snack industry, peanut varieties China, China import regulations, Chinese food processing, Asia peanut trade, China market potential",
  openGraph: {
    title: "India-China Peanut Trade | World's Largest Market Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and China with insights into peanut exports, Chinese market demands, trade opportunities, and significant potential in the world's largest market for Indian groundnut varieties.",
    url: "https://balajiexports.com/blogs/china",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/china-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-China Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-China Peanut Trade | World's Largest Market Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and China with insights into peanut exports, Chinese market demands, trade opportunities, and significant potential in the world's largest market for Indian groundnut varieties.",
    images: ["https://balajiexports.com/images/blogs/china-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/china"
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

export default function ChinaBlogPage() {
  return <ChinaContent />;
} 