import { Metadata } from 'next';
import BlogsContent from './BlogsContent';

export const metadata: Metadata = {
  title: "Peanut Market Insights & Global Trade Blogs | Balaji Exports",
  description: "Stay updated with the latest peanut market trends, industry news, and global trade insights from Balaji Exports. Expert analysis of international peanut markets, trade policies, and export opportunities across different countries.",
  keywords: "peanut market insights, global peanut trade, peanut industry news, peanut export opportunities, peanut market trends, international peanut markets, peanut trade policies, peanut export analysis, peanut market research, peanut industry updates, peanut trade insights, peanut market opportunities, peanut export markets, peanut trade partnerships, peanut market analysis, peanut industry trends, peanut export opportunities, peanut market intelligence, peanut trade news, peanut market reports",
  openGraph: {
    title: "Peanut Market Insights & Global Trade Blogs | Balaji Exports",
    description: "Stay updated with the latest peanut market trends, industry news, and global trade insights from Balaji Exports. Expert analysis of international peanut markets, trade policies, and export opportunities across different countries.",
    type: "website",
    url: "https://balajiexports.com/blogs",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/blogs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Peanut Market Insights & Global Trade Blogs - Balaji Exports"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@BalajiExports",
    creator: "@BalajiExports",
    title: "Peanut Market Insights & Global Trade Blogs | Balaji Exports",
    description: "Stay updated with the latest peanut market trends, industry news, and global trade insights from Balaji Exports. Expert analysis of international peanut markets, trade policies, and export opportunities across different countries.",
    images: ["https://balajiexports.com/images/blogs-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/blogs"
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

export default function BlogsPage() {
  return <BlogsContent />;
} 