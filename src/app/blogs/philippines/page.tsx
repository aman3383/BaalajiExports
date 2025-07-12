import { Metadata } from 'next';
import PhilippinesContent from './PhilippinesContent';

export const metadata: Metadata = {
  title: "India-Philippines Peanut Trade | Southeast Asian Market Expansion & Export Opportunities | Balaji Exports",
  description: "Explore the growing agricultural trade between India and the Philippines with insights into peanut varieties, export opportunities, and market trends in this expanding Southeast Asian market.",
  keywords: "India Philippines peanut trade, Philippine peanut market, Philippines groundnut imports, Filipino food industry, peanut exports Philippines, Indian groundnuts Philippines, Philippine market opportunities, Southeast Asia trade, Philippine agricultural trade, Philippines import regulations, Filipino snack industry, ASEAN peanut trade, Philippine food processing, Southeast Asian markets",
  openGraph: {
    title: "India-Philippines Peanut Trade | Southeast Asian Market Expansion & Export Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and the Philippines with insights into peanut varieties, export opportunities, and market trends in this expanding Southeast Asian market.",
    url: "https://balajiexports.com/blogs/philippines",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/philippines-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Philippines Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Philippines Peanut Trade | Southeast Asian Market Expansion & Export Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and the Philippines with insights into peanut varieties, export opportunities, and market trends in this expanding Southeast Asian market.",
    images: ["https://balajiexports.com/images/blogs/philippines-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/philippines"
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

export default function PhilippinesBlogPage() {
  return <PhilippinesContent />;
} 