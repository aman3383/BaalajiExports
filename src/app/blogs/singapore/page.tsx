import { Metadata } from 'next';
import SingaporeContent from './SingaporeContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('singapore');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function SingaporePage() {
  return <SingaporeContent />;
}
