import type { MetadataRoute } from 'next';
import dbConnect from '@/lib/db';
import Page from '@/lib/models/Page';
import Blog from '@/lib/models/Blog';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.baalajiexports.com';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes (always included)
  const staticRoutes: { path: string; priority: number; changeFrequency: 'yearly' | 'monthly' | 'weekly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: 'about', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'services', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'health-benefits', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'nut-journey', priority: 0.8, changeFrequency: 'monthly' },
  ];

  for (const route of staticRoutes) {
    entries.push({
      url: route.path ? `${BASE_URL}/${route.path}` : BASE_URL,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  try {
    const connection = await dbConnect();
    if (connection) {
      // Pages from SEO panel (avoid duplicating static routes)
      const pageSlugs = await Page.find({}).select('slug updatedAt').lean();
      const staticPaths = new Set(staticRoutes.map((r) => r.path || 'home'));
      for (const p of pageSlugs) {
        const row = p as unknown as { slug: string; updatedAt?: Date };
        const slug = row.slug;
        const path = slug === 'home' ? '' : slug;
        if (staticPaths.has(path)) continue;
        entries.push({
          url: path ? `${BASE_URL}/${path}` : BASE_URL,
          lastModified: row.updatedAt || new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        });
      }

      // Blog posts from SEO panel
      const blogs = await Blog.find({}).select('slug updatedAt').lean();
      for (const b of blogs) {
        const row = b as unknown as { slug: string; updatedAt?: Date };
        entries.push({
          url: `${BASE_URL}/blogs/${row.slug}`,
          lastModified: row.updatedAt || new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        });
      }
    }
  } catch (err) {
    console.error('Sitemap: error fetching DB', err);
  }

  return entries;
}
