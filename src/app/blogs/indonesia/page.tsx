import { Metadata } from 'next';
import IndonesiaContent from './IndonesiaContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('indonesia');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function IndonesiaBlogPage() {
  return <IndonesiaContent />;
}
