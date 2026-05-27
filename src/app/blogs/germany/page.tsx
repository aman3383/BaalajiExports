import { Metadata } from 'next';
import GermanyContent from './GermanyContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('germany');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function GermanyBlogPage() {
  return <GermanyContent />;
}
