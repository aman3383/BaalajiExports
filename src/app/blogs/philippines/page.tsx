import { Metadata } from 'next';
import PhilippinesContent from './PhilippinesContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('philippines');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function PhilippinesBlogPage() {
  return <PhilippinesContent />;
}
