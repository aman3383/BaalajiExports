import { Metadata } from 'next';
import ThailandContent from './ThailandContent';

export const metadata: Metadata = {
  title: "India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports",
  description: "Explore the growing agricultural partnership between India and Thailand with insights into peanut varieties, trade statistics, and export opportunities in Thailand's expanding food processing sector.",
  keywords: "India Thailand peanut trade, Thai peanut market, Thailand groundnut imports, Thai food industry, peanut exports Thailand, Indian groundnuts Thailand, Thai market opportunities, Thailand agricultural trade, Thai food processing, ASEAN trade, Thailand import regulations, Thai snack industry, Southeast Asia peanut trade, Thailand food manufacturing",
  openGraph: {
    title: "India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports",
    description: "Explore the growing agricultural partnership between India and Thailand with insights into peanut varieties, trade statistics, and export opportunities in Thailand's expanding food processing sector.",
    url: "https://balajiexports.com/blogs/thailand",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/thailand-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Thailand Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports",
    description: "Explore the growing agricultural partnership between India and Thailand with insights into peanut varieties, trade statistics, and export opportunities in Thailand's expanding food processing sector.",
    images: ["https://balajiexports.com/images/blogs/thailand-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/thailand"
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

export default function ThailandBlogPage() {
  return <ThailandContent />;
} 