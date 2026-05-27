import { Metadata } from 'next';
import { Suspense } from 'react';
import OrganicPeanutContent from './OrganicPeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('organic-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function OrganicPeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrganicPeanutContent />
    </Suspense>
  );
} 