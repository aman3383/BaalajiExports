import { Metadata } from 'next';
import NetherlandsContent from './NetherlandsContent';
import { getBlogSEO } from '@/lib/utils/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getBlogSEO('netherlands');
  if (seoData) {
    return seoData;
  }
  return {};
}

export default function NetherlandsPage() {
  return <NetherlandsContent />;
}
