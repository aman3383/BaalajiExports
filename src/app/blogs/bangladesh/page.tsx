import { Metadata } from 'next';
import BangladeshContent from './BangladeshContent';

export const metadata: Metadata = {
  title: "India-Bangladesh Peanut Trade | Bilateral Partnership & Regional Trade Opportunities | Balaji Exports",
  description: "Explore the growing agricultural trade between India and Bangladesh with insights into peanut exports, bilateral partnership benefits, and strong trade relations between these neighboring countries.",
  keywords: "India Bangladesh peanut trade, Bangladesh peanut market, Bangladesh groundnut imports, Bengali food industry, peanut exports Bangladesh, Indian groundnuts Bangladesh, Bangladesh market opportunities, India Bangladesh trade, Bangladesh agricultural trade, Bangladesh import regulations, South Asian peanut trade, neighboring countries trade, Bangladesh food processing, bilateral trade partnership",
  openGraph: {
    title: "India-Bangladesh Peanut Trade | Bilateral Partnership & Regional Trade Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and Bangladesh with insights into peanut exports, bilateral partnership benefits, and strong trade relations between these neighboring countries.",
    url: "https://balajiexports.com/blogs/bangladesh",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/bangladesh-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Bangladesh Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Bangladesh Peanut Trade | Bilateral Partnership & Regional Trade Opportunities | Balaji Exports",
    description: "Explore the growing agricultural trade between India and Bangladesh with insights into peanut exports, bilateral partnership benefits, and strong trade relations between these neighboring countries.",
    images: ["https://balajiexports.com/images/blogs/bangladesh-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/bangladesh"
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

export default function BangladeshBlogPage() {
  return <BangladeshContent />;
} 