import { Metadata } from 'next';
import TurkeyContent from './TurkeyContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('turkey');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function TurkeyBlogPage() {
  return <TurkeyContent />;
}
