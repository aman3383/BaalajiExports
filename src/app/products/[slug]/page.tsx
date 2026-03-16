import { Metadata } from 'next';
import { getPageSEO } from '@/lib/utils/seo';
import { notFound } from 'next/navigation';

// Force static generation for better crawling
export const dynamic = 'force-static';

// Import all the existing product content components
import BlanchedPeanutContent from '../blanched-peanuts/BlanchedPeanutContent';
import BoldPeanutContent from '../bold-peanuts/BoldPeanutContent';
import G20PeanutContent from '../g20-peanuts/G20PeanutContent';
import ICGV03043PeanutContent from '../icgv-03043-peanuts/ICGV03043PeanutContent';
import ICGV15083PeanutContent from '../icgv-15083-peanuts/ICGV15083PeanutContent';
import ICGV15090PeanutContent from '../icgv15090-peanuts/ICGV15090PeanutContent';
import K6PeanutContent from '../k6-peanuts/K6PeanutContent';
import OrganicPeanutContent from '../organic-peanuts/OrganicPeanutContent';
import MathadiPeanutContent from '../mathadi-peanuts/MathadiPeanutContent';
import PeanutButterContent from '../peanut-butter/PeanutButterContent';
import PeanutOilContent from '../peanut-oil/PeanutOilContent';
import RedSkinPeanutContent from '../red-skin-peanuts/RedSkinPeanutContent';
import SaltedPeanutContent from '../salted-peanuts/SaltedPeanutContent';
import SpanishPeanutContent from '../spanish-peanuts/SpanishPeanutContent';
import TJPeanutContent from '../tj-peanuts/TJPeanutContent';
import VirginiaPeanutContent from '../virginia-peanuts/VirginiaPeanutContent';

// Component mapping for existing product content
const productComponents: { [key: string]: React.ComponentType } = {
  'blanched-peanuts': BlanchedPeanutContent,
  'bold-peanuts': BoldPeanutContent,
  'g20-peanuts': G20PeanutContent,
  'icgv-03043-peanuts': ICGV03043PeanutContent,
  'icgv-15083-peanuts': ICGV15083PeanutContent,
  'icgv15090-peanuts': ICGV15090PeanutContent,
  'k6-peanuts': K6PeanutContent,
  'organic-peanuts': OrganicPeanutContent,
  'mathadi-peanuts': MathadiPeanutContent,
  'peanut-butter': PeanutButterContent,
  'peanut-oil': PeanutOilContent,
  'red-skin-peanuts': RedSkinPeanutContent,
  'salted-peanuts': SaltedPeanutContent,
  'spanish-peanuts': SpanishPeanutContent,
  'tj-peanuts': TJPeanutContent,
  'virginia-peanuts': VirginiaPeanutContent,
};

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = params;
  
  const seoData = await getPageSEO(slug);
  if (seoData) {
    return seoData;
  }

  // Return fallback metadata for better crawling
  return {
    title: `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Balaji Exports`,
    description: `Premium quality ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} for export. FSSAI, HACCP, ISO certified.`,
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
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  
  // Check if we have a content component for this slug
  const ProductComponent = productComponents[slug];
  
  if (ProductComponent) {
    return <ProductComponent />;
  }
  
  // If no content component exists, show 404
  notFound();
}

// Generate static params for existing product pages
export async function generateStaticParams() {
  return Object.keys(productComponents).map((slug) => ({
    slug,
  }));
} 