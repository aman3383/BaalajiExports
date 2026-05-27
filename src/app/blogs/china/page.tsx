import { Metadata } from 'next';
import ChinaContent from './ChinaContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('china');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function ChinaBlogPage() {
  return <ChinaContent />;
}
