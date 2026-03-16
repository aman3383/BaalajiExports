import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogsContent from './BlogsContent';
import { getPageSEO, getAllBlogs } from '@/lib/utils/seo';

// Make the page dynamic to fetch fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSEO('blogs');
  
  if (seoData) {
    return seoData;
  }

  // Return empty metadata if not found in database
  return {};
}

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogsContent blogs={blogs} />
    </Suspense>
  );
} 