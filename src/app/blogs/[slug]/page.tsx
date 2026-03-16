import { Metadata } from 'next';
import { Suspense } from 'react';
import { getBlogSEO, getBlogContent, getBlogScriptTags } from '@/lib/utils/seo';
import JsonLdScripts from '@/components/JsonLdScripts';
import { notFound } from 'next/navigation';
import DynamicBlogContent from '@/components/DynamicBlogContent';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  
  const seoData = await getBlogSEO(slug);
  if (seoData) {
    return seoData;
  }

  // Return fallback metadata for better crawling
  return {
    title: `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Balaji Exports Blog`,
    description: `Read our latest blog post about ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} and peanut industry insights.`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  const [blogData, scriptTags] = await Promise.all([
    getBlogContent(slug),
    getBlogScriptTags(slug),
  ]);

  if (!blogData) {
    notFound();
  }

  return (
    <>
      <JsonLdScripts scriptTags={scriptTags} />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicBlogContent slug={slug} blogData={blogData} />
      </Suspense>
    </>
  );
}

 