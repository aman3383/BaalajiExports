// All DB connections are made via dbConnect, which uses the URI from the .env file.
import { Metadata } from 'next';
import dbConnect from '../db';
import Page, { IPage } from '../models/Page';
import { IBlog, BlogData } from '@/lib/models/Blog';
import Blog from '@/lib/models/Blog';

export async function getPageSEO(slug: string): Promise<Metadata | null> {
  try {
    console.log(`Attempting to fetch SEO data for page: ${slug}`);
    const connection = await dbConnect();
    
    // If no database connection, return null for build time
    if (!connection) {
      console.warn(`No database connection available for getPageSEO - ${slug}`);
      return null;
    }
    
    const page = await Page.findOne({ slug }).lean() as IPage | null;
    
    if (!page) {
      console.log(`No SEO data found in database for page: ${slug}`);
      return null;
    }

    console.log(`Successfully fetched SEO data for page: ${slug}`);
    const metadata: Metadata = {
      title: page.seo.title,
      description: page.seo.description,
    };

    // Convert meta tags
    if (page.seo.metaTags) {
      const keywords = page.seo.metaTags.find(tag => tag.name === 'keywords')?.content;
      if (keywords) {
        metadata.keywords = keywords;
      }

      // Handle OpenGraph
      const ogTags = page.seo.metaTags.filter(tag => tag.property?.startsWith('og:'));
      if (ogTags.length > 0) {
        // Get the OpenGraph type and validate it
        const ogType = ogTags.find(tag => tag.property === 'og:type')?.content;
        const validOgTypes = ['website', 'article', 'book', 'profile', 'music.song', 'music.album', 'music.playlist', 'music.radio_station', 'video.movie', 'video.episode', 'video.tv_show', 'video.other'] as const;
        const safeOgType = (ogType && validOgTypes.includes(ogType as any) ? ogType : 'website') as 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
        
        metadata.openGraph = {
          title: ogTags.find(tag => tag.property === 'og:title')?.content || page.seo.title,
          description: ogTags.find(tag => tag.property === 'og:description')?.content || page.seo.description,
          url: ogTags.find(tag => tag.property === 'og:url')?.content,
          siteName: ogTags.find(tag => tag.property === 'og:site_name')?.content,
          locale: ogTags.find(tag => tag.property === 'og:locale')?.content || 'en_US',
          type: safeOgType,
        };

        // Handle images
        const ogImage = ogTags.find(tag => tag.property === 'og:image')?.content;
        if (ogImage && metadata.openGraph) {
          metadata.openGraph.images = [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: page.seo.title
            }
          ];
        }
      }

      // Handle Twitter
      const twitterTags = page.seo.metaTags.filter(tag => tag.name?.startsWith('twitter:'));
      if (twitterTags.length > 0) {
        metadata.twitter = {
          card: (twitterTags.find(tag => tag.name === 'twitter:card')?.content as any) || 'summary_large_image',
          title: twitterTags.find(tag => tag.name === 'twitter:title')?.content || page.seo.title,
          description: twitterTags.find(tag => tag.name === 'twitter:description')?.content || page.seo.description,
        };

        const twitterImage = twitterTags.find(tag => tag.name === 'twitter:image')?.content;
        if (twitterImage) {
          metadata.twitter.images = [twitterImage];
        }
      }
    }

    // Handle canonical URLs
    if (page.seo.linkTags) {
      const canonical = page.seo.linkTags.find(tag => tag.rel === 'canonical')?.href;
      if (canonical) {
        metadata.alternates = {
          canonical
        };
      }
    }

    // Default robots if not specified
    metadata.robots = {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    };

    return metadata;
  } catch (error) {
    console.error(`Error fetching page SEO for ${slug}:`, error);
    return null;
  }
}

export async function getBlogSEO(slug: string): Promise<Metadata | null> {
  try {
    console.log(`Attempting to fetch SEO data for blog: ${slug}`);
    const connection = await dbConnect();
    
    // If no database connection, return null for build time
    if (!connection) {
      console.warn(`No database connection available for getBlogSEO - ${slug}`);
      return null;
    }
    
    const blog = await Blog.findOne({ slug }).lean() as unknown as BlogData | null;
    
    if (!blog) {
      console.log(`No SEO data found in database for blog: ${slug}`);
      return null;
    }

    console.log(`Successfully fetched SEO data for blog: ${slug}`);
    const metadata: Metadata = {
      title: blog.seo.title,
      description: blog.seo.description,
    };

    // Convert meta tags (similar to page SEO)
    if (blog.seo.metaTags) {
      const keywords = blog.seo.metaTags.find(tag => tag.name === 'keywords')?.content;
      if (keywords) {
        metadata.keywords = keywords;
      }

      // Handle OpenGraph
      const ogTags = blog.seo.metaTags.filter(tag => tag.property?.startsWith('og:'));
      if (ogTags.length > 0) {
        metadata.openGraph = {
          title: ogTags.find(tag => tag.property === 'og:title')?.content || blog.seo.title,
          description: ogTags.find(tag => tag.property === 'og:description')?.content || blog.seo.description,
          url: ogTags.find(tag => tag.property === 'og:url')?.content,
          siteName: ogTags.find(tag => tag.property === 'og:site_name')?.content,
          locale: ogTags.find(tag => tag.property === 'og:locale')?.content || 'en_US',
          type: 'article',
        };

        // Handle images
        const ogImage = ogTags.find(tag => tag.property === 'og:image')?.content || blog.image;
        if (ogImage && metadata.openGraph) {
          metadata.openGraph.images = [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: blog.seo.title
            }
          ];
        }
      }

      // Handle Twitter
      const twitterTags = blog.seo.metaTags.filter(tag => tag.name?.startsWith('twitter:'));
      if (twitterTags.length > 0) {
        metadata.twitter = {
          card: (twitterTags.find(tag => tag.name === 'twitter:card')?.content as any) || 'summary_large_image',
          title: twitterTags.find(tag => tag.name === 'twitter:title')?.content || blog.seo.title,
          description: twitterTags.find(tag => tag.name === 'twitter:description')?.content || blog.seo.description,
        };

        const twitterImage = twitterTags.find(tag => tag.name === 'twitter:image')?.content || blog.image;
        if (twitterImage) {
          metadata.twitter.images = [twitterImage];
        }
      }
    }

    // Handle canonical URLs
    if (blog.seo.linkTags) {
      const canonical = blog.seo.linkTags.find(tag => tag.rel === 'canonical')?.href;
      if (canonical) {
        metadata.alternates = {
          canonical
        };
      }
    }

    // Default robots
    metadata.robots = {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    };

    return metadata;
  } catch (error) {
    console.error(`Error fetching blog SEO for ${slug}:`, error);
    return null;
  }
}

// Get full blog content
export async function getBlogContent(slug: string): Promise<BlogData | null> {
  try {
    console.log(`Attempting to fetch blog content for: ${slug}`);
    const connection = await dbConnect();
    
    // If no database connection, return null for build time
    if (!connection) {
      console.warn(`No database connection available for getBlogContent - ${slug}`);
      return null;
    }
    
    const blog = await Blog.findOne({ slug }).lean() as BlogData | null;
    
    if (blog) {
      console.log(`Successfully fetched blog content for: ${slug}`);
    } else {
      console.log(`No blog content found for: ${slug}`);
    }
    
    return blog;
  } catch (error) {
    console.error(`Error fetching blog content for ${slug}:`, error);
    return null;
  }
}

// Get all blogs for listing
export async function getAllBlogs(): Promise<BlogData[]> {
  try {
    console.log('Attempting to fetch all blogs');
    const connection = await dbConnect();
    
    // If no database connection, return empty array for build time
    if (!connection) {
      console.warn('No database connection available for getAllBlogs');
      return [];
    }
    
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean() as unknown as BlogData[];
    console.log(`Successfully fetched ${blogs.length} blogs`);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Script tag shape for JSON-LD
export interface IScriptTag {
  type: string;
  content: string;
}

/** Get JSON-LD / script tags for a page (for structured data). */
export async function getPageScriptTags(slug: string): Promise<IScriptTag[]> {
  try {
    const connection = await dbConnect();
    if (!connection) return [];
    const page = await Page.findOne({ slug }).select('seo.scriptTags').lean() as { seo?: { scriptTags?: IScriptTag[] } } | null;
    return page?.seo?.scriptTags?.filter((t) => t.type === 'application/ld+json' && t.content) || [];
  } catch (err) {
    console.error(`Error fetching page script tags for ${slug}:`, err);
    return [];
  }
}

/** Get JSON-LD / script tags for a blog (for structured data). */
export async function getBlogScriptTags(slug: string): Promise<IScriptTag[]> {
  try {
    const connection = await dbConnect();
    if (!connection) return [];
    const blog = await Blog.findOne({ slug }).select('seo.scriptTags').lean() as { seo?: { scriptTags?: IScriptTag[] } } | null;
    return blog?.seo?.scriptTags?.filter((t) => t.type === 'application/ld+json' && t.content) || [];
  } catch (err) {
    console.error(`Error fetching blog script tags for ${slug}:`, err);
    return [];
  }
}

// Fallback metadata for pages not found in database
export function getFallbackMetadata(slug: string, title?: string, description?: string): Metadata {
  console.log(`Using fallback metadata for: ${slug}`);
  return {
    title: title || `${slug.charAt(0).toUpperCase() + slug.slice(1)} | Balaji Exports`,
    description: description || `Learn more about ${slug} at Balaji Exports - Premium Peanut Exporters from India`,
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
    }
  };
} 