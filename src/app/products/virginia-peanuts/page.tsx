import { Metadata } from 'next';
import { Suspense } from 'react';
import VirginiaPeanutContent from './VirginiaPeanutContent';
import { getPageSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('virginia-peanuts');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function VirginiaPeanutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VirginiaPeanutContent />
    </Suspense>
  );
} 