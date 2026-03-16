import { Metadata } from 'next';
import { Suspense } from 'react';
import HealthBenefitsContent from './HealthBenefitsContent';
import { getPageSEO } from '@/lib/utils/seo';

// Force dynamic generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('health-benefits');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default function HealthBenefitsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HealthBenefitsContent />
    </Suspense>
  );
} 