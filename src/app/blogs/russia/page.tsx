import { Metadata } from 'next';
import RussiaContent from './RussiaContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('russia');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function RussiaBlogPage() {
  return <RussiaContent />;
}
