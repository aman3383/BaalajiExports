import { Metadata } from 'next';
import BangladeshContent from './BangladeshContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('bangladesh');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function BangladeshBlogPage() {
  return <BangladeshContent />;
}
