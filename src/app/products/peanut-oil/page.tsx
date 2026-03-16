import { Metadata } from 'next';
import { Suspense } from 'react';
import PeanutOilContent from './PeanutOilContent';
import { getPageSEO } from '@/lib/utils/seo';

// Force static generation for better crawling
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('peanut-oil');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function PeanutOilPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PeanutOilContent />
    </Suspense>
  );
} 