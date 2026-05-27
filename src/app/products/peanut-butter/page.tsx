import { Metadata } from 'next';
import { Suspense } from 'react';
import PeanutButterContent from './PeanutButterContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('peanut-butter');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function PeanutButterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PeanutButterContent />
    </Suspense>
  );
} 