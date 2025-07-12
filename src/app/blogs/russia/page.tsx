import { Metadata } from 'next';
import RussiaContent from './RussiaContent';

export const metadata: Metadata = {
  title: "India-Russia Peanut Trade | Strategic Market Partnership & Export Opportunities | Balaji Exports",
  description: "Explore the growing agricultural trade between India and Russia with insights into peanut exports, strategic market opportunities, and the significant potential in this important Russian market.",
  keywords: "India Russia peanut trade, Russian peanut market, Russia groundnut imports, Russian food industry, peanut exports Russia, Indian groundnuts Russia, Russian market opportunities, Russia agricultural trade, Russian import regulations, Russian food processing, Eurasian peanut trade, Russia market potential, Russian snack industry, strategic trade partnership",
  openGraph: {
    title: "India-Russia Peanut Trade | Strategic Market Partnership & Export Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and Russia with insights into peanut exports, strategic market opportunities, and the significant potential in this important Russian market.",
    url: "https://balajiexports.com/blogs/russia",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/russia-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Russia Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Russia Peanut Trade | Strategic Market Partnership & Export Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and Russia with insights into peanut exports, strategic market opportunities, and the significant potential in this important Russian market.",
    images: ["https://balajiexports.com/images/blogs/russia-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/russia"
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

export default function RussiaBlogPage() {
  return <RussiaContent />;
} 