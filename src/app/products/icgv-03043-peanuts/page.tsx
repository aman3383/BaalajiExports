import { Metadata } from 'next';
import { Suspense } from 'react';
import ICGV03043PeanutContent from './ICGV03043PeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('icgv-03043-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function ICGV03043PeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ICGV03043PeanutContent />
    </Suspense>
  );
} 