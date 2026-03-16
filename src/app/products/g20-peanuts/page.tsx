import { Metadata } from 'next';
import { Suspense } from 'react';
import G20PeanutContent from './G20PeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

// Force static generation for better crawling
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('g20-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function G20PeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <G20PeanutContent />
    </Suspense>
  );
} 