import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: "Peanut Export Services | Professional Groundnut Export Solutions | Balaji Exports",
  description: "Discover comprehensive peanut export services by Balaji Exports. From quality control and processing to global shipping and documentation, we provide end-to-end groundnut export solutions for international buyers.",
  keywords: "peanut export services, groundnut export solutions, peanut processing services, groundnut quality control, peanut shipping services, export documentation services, peanut wholesale services, groundnut sourcing services, peanut packaging services, export logistics services, peanut inspection services, groundnut certification services, bulk peanut export, international peanut shipping, peanut export company services, groundnut supply chain management, peanut export consultation, agricultural export services India, food export services, commodity export services",
  openGraph: {
    title: "Peanut Export Services | Professional Groundnut Export Solutions | Balaji Exports",
    description: "Discover comprehensive peanut export services by Balaji Exports. From quality control and processing to global shipping and documentation, we provide end-to-end groundnut export solutions for international buyers.",
    url: "https://balajiexports.com/services",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/peanut-export-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Peanut Export Services by Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Peanut Export Services | Professional Groundnut Export Solutions | Balaji Exports",
    description: "Discover comprehensive peanut export services by Balaji Exports. From quality control and processing to global shipping and documentation, we provide end-to-end groundnut export solutions for international buyers.",
    images: ["https://balajiexports.com/images/peanut-export-services-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/services"
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

export default function ServicesPage() {
  return <ServicesContent />;
} 