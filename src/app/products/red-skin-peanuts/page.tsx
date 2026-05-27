import { Metadata } from 'next';
import { Suspense } from 'react';
import RedSkinPeanutContent from './RedSkinPeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('red-skin-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function RedSkinPeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedSkinPeanutContent />
    </Suspense>
  );
} 