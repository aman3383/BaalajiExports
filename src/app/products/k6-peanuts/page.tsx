import { Metadata } from 'next';
import { Suspense } from 'react';
import K6PeanutContent from './K6PeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

// Force static generation for better crawling
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('k6-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function K6PeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <K6PeanutContent />
    </Suspense>
  );
} 