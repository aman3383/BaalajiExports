import { Metadata } from 'next';
import HealthBenefitsContent from './HealthBenefitsContent';

export const metadata: Metadata = {
  title: "Health Benefits of Peanuts | Nutritional Value & Wellness Guide | Balaji Exports",
  description: "Discover the comprehensive health benefits of peanuts including heart health, weight management, blood sugar control, and nutritional value. Learn about peanut allergies, consumption guidelines, and wellness tips from leading peanut exporters.",
  keywords: "peanut health benefits, groundnut nutrition, peanut nutritional value, peanut health advantages, peanut heart health, peanut weight management, peanut blood sugar control, peanut allergies, peanut consumption, peanut dietary benefits, peanut protein content, peanut healthy fats, peanut fiber content, peanut vitamins minerals, peanut antioxidants, peanut health risks, peanut allergy symptoms, peanut consumption guidelines, peanut storage recommendations, peanut organic benefits, natural peanuts health, roasted peanuts nutrition, raw peanuts benefits, groundnut health benefits India, Indian peanuts nutrition",
  openGraph: {
    title: "Health Benefits of Peanuts | Nutritional Value & Wellness Guide | Balaji Exports",
    description: "Discover the comprehensive health benefits of peanuts including heart health, weight management, blood sugar control, and nutritional value. Learn about peanut allergies, consumption guidelines, and wellness tips from leading peanut exporters.",
    url: "https://balajiexports.com/health-benefits",
    siteName: "Balaji Exports",
    images: [
      {
        url: "https://balajiexports.com/images/peanut-health-benefits-og.jpg",
        width: 1200,
        height: 630,
        alt: "Health Benefits of Peanuts - Nutritional Guide by Balaji Exports"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Benefits of Peanuts | Nutritional Value & Wellness Guide | Balaji Exports",
    description: "Discover the comprehensive health benefits of peanuts including heart health, weight management, blood sugar control, and nutritional value. Learn about peanut allergies, consumption guidelines, and wellness tips from leading peanut exporters.",
    images: ["https://balajiexports.com/images/peanut-health-benefits-og.jpg"]
  },
  alternates: {
    canonical: "https://balajiexports.com/health-benefits"
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

export default function HealthBenefitsPage() {
  return <HealthBenefitsContent />;
} 