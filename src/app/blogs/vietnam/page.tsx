import { Metadata } from 'next';
import VietnamContent from './VietnamContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('vietnam');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function VietnamBlogPage() {
  return <VietnamContent />;
}
