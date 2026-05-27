import { Metadata } from 'next';
import SouthAfricaContent from './SouthAfricaContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('south-africa');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function SouthAfricaBlogPage() {
  return <SouthAfricaContent />;
}
