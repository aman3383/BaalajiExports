import { Metadata } from 'next';
import VietnamContent from './VietnamContent';

export const metadata: Metadata = {
  title: "Vietnam Peanut Market | Market Trends & Export Opportunities | Balaji Exports",
  description: "Explore the dynamic peanut market in Vietnam with comprehensive insights into market trends, export opportunities, and key business prospects for expanding in the Vietnamese market.",
  keywords: "Vietnam peanut market, Vietnamese groundnut trade, Vietnam agricultural market, Vietnamese food industry, peanut exports Vietnam, Vietnam market opportunities, Southeast Asia peanut trade, Vietnamese import regulations, Vietnam food processing, Asian peanut markets, Vietnam trade opportunities, Vietnamese peanut demand, Vietnam agricultural imports, Southeast Asian markets",
  openGraph: {
    title: "Vietnam Peanut Market | Market Trends & Export Opportunities | Balaji Exports",
    description: "Explore the dynamic peanut market in Vietnam with comprehensive insights into market trends, export opportunities, and key business prospects for expanding in the Vietnamese market.",
    url: "https://balajiexports.com/blogs/vietnam",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs/vietnam-peanut-market.jpg",
        width: 1200,
        height: 630,
        alt: "Vietnam Peanut Market Insights - Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vietnam Peanut Market | Market Trends & Export Opportunities | Balaji Exports",
    description: "Explore the dynamic peanut market in Vietnam with comprehensive insights into market trends, export opportunities, and key business prospects for expanding in the Vietnamese market.",
    images: ["https://balajiexports.com/images/blogs/vietnam-peanut-market.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs/vietnam"
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

export default function VietnamBlogPage() {
  return <VietnamContent />;
} 