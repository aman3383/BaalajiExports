import { Metadata } from 'next';
import { Suspense } from 'react';
import BlanchedPeanutContent from './BlanchedPeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('blanched-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function BlanchedPeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlanchedPeanutContent />
    </Suspense>
  );
} 