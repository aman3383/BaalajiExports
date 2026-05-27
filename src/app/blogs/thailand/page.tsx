import { Metadata } from 'next';
import ThailandContent from './ThailandContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('thailand');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function ThailandBlogPage() {
  return <ThailandContent />;
}
