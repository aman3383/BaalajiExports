import { Metadata } from 'next';
import TurkeyContent from './TurkeyContent';

export const metadata: Metadata = {
  title: "India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports",
  description: "Understanding the growing peanut import market in Turkey and the flourishing agricultural trade partnership between India and Turkey with insights into market opportunities and trade potential.",
  keywords: "India Turkey peanut trade, Turkish peanut market, Turkey groundnut imports, Turkish food industry, peanut exports Turkey, Indian groundnuts Turkey, Turkish market opportunities, Turkey agricultural trade, Turkish import regulations, Middle East peanut trade, Turkish food processing, Turkey market potential, Turkish snack industry, Eurasian trade corridor",
  openGraph: {
    title: "India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports",
    description: "Understanding the growing peanut import market in Turkey and the flourishing agricultural trade partnership between India and Turkey with insights into market opportunities and trade potential.",
    url: "https://balajiexports.com/blogs/turkey",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/turkey-peanut-trade.jpg",
        width: 1200,
        height: 630,
        alt: "India-Turkey Peanut Trade Partnership - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports",
    description: "Understanding the growing peanut import market in Turkey and the flourishing agricultural trade partnership between India and Turkey with insights into market opportunities and trade potential.",
    images: ["https://balajiexports.com/images/blogs/turkey-peanut-trade.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/turkey"
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

export default function TurkeyBlogPage() {
  return <TurkeyContent />;
} 