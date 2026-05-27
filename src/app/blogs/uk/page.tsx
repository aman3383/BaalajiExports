import { Metadata } from 'next';
import UKContent from './UKContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('uk');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function UKPage() {
  return <UKContent />;
}
