import { Metadata } from 'next';
import { Suspense } from 'react';
import ServicesContent from './ServicesContent';
import { getPageSEO } from '@/lib/utils/seo';

// Force dynamic generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('services');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
} 