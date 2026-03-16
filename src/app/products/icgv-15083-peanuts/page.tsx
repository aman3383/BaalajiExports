import { Metadata } from 'next';
import { Suspense } from 'react';
import ICGV15083PeanutContent from './ICGV15083PeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

// Force static generation for better crawling
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('icgv-15083-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function ICGV15083PeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ICGV15083PeanutContent />
    </Suspense>
  );
} 