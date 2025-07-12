import { Metadata } from 'next';
import SouthAfricaContent from './SouthAfricaContent';

export const metadata: Metadata = {
  title: "India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports",
  description: "Explore the booming agricultural trade between India and South Africa with insights into growing peanut exports, Southern African market trends, and varieties most popular in the African market.",
  keywords: "India South Africa peanut trade, South African peanut market, South Africa groundnut imports, African peanut trade, South African food industry, peanut exports South Africa, Indian groundnuts Africa, South African market opportunities, African agricultural trade, South Africa import regulations, Southern African markets, African food processing, SADC trade, South African peanut demand",
  openGraph: {
    title: "India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports",
    description: "Explore the booming agricultural trade between India and South Africa with insights into growing peanut exports, Southern African market trends, and varieties most popular in the African market.",
    url: "https://balajiexports.com/blogs/south-africa",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/south-africa-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-South Africa Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports",
    description: "Explore the booming agricultural trade between India and South Africa with insights into growing peanut exports, Southern African market trends, and varieties most popular in the African market.",
    images: ["https://balajiexports.com/images/blogs/south-africa-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/south-africa"
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

export default function SouthAfricaBlogPage() {
  return <SouthAfricaContent />;
} 