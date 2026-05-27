import { Metadata } from 'next';
import { Suspense } from 'react';
import K6PeanutContent from './K6PeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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