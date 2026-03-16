"use client";

import React from 'react';
import { Box, Container, Typography, Paper, useTheme, CircularProgress } from '@mui/material';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

interface DynamicBlogContentProps {
  slug: string;
  blogData?: any;
}

// SEO component for meta tags
const SEO = ({ blogData }: { blogData: any }) => {
  React.useEffect(() => {
    if (blogData && typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.title = blogData.seo?.title || blogData.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', blogData.seo?.description || 'Blog content from Balaji Exports');
    }
  }, [blogData]);
  return null;
};

export default function DynamicBlogContent({ slug, blogData }: DynamicBlogContentProps) {
  const theme = useTheme();

  if (!blogData) {
    return (
      <Box sx={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        pt: { xs: 4, md: 6 },
        pb: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress sx={{ color: theme.palette.primary.main, mb: 2 }} />
          <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
            Loading blog content...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{blogData.seo?.title || blogData.title}</title>
        <meta name="description" content={blogData.seo?.description || 'Blog content from Balaji Exports'} />
        {blogData.seo?.metaTags?.map((tag: any, index: number) => {
          if (tag.name) {
            return <meta key={index} name={tag.name} content={tag.content} />;
          } else if (tag.property) {
            return <meta key={index} property={tag.property} content={tag.content} />;
          }
          return null;
        })}
        {blogData.seo?.linkTags?.map((link: any, index: number) => (
          <link key={index} rel={link.rel} href={link.href} />
        ))}
      </Head>
      <Box sx={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        pt: { xs: 4, md: 6 },
        pb: 8
      }}>
        <SEO blogData={blogData} />
        <Container maxWidth="md">
          {/* Blog Content */}
          <div className="blog-content">
            {/* Blog Header */}
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h2" 
                component="h1"
                sx={{
                  background: theme.customGradients.greenDark,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
               
              </Typography>
              {blogData.country && (
                <Typography 
                variant="h2" 
                component="h1"
                sx={{
                  background: theme.customGradients.greenDark,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                {blogData.country}
              </Typography>
              )}
               {blogData.title  &&(
                <Typography 
                  variant="h5" 
                  component="p"
                sx={{
                  color: theme.palette.primary.main,
                }}
                >
                  {blogData.title}
                </Typography>
               )}
              {blogData.continent && (
                <Typography 
                  variant="h6" 
                  component="p"
                  sx={{
                    color: theme.palette.customColors.accentGreen,
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    mb: 2,
                    textTransform: 'uppercase'
                  }}
                >
                  {blogData.continent.toUpperCase()} MARKET
                </Typography>
              )}
              {blogData.image && (
                <Box
                  component="img"
                  src={blogData.image}
                  alt={blogData.title}
                  sx={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 4
                  }}
                />
              )}
            </Box>

            {/* Dynamic Content */}
            <Box
              sx={{
                '& h1, & h2, & h3, & h4, & h5, & h6': {
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3,
                  mt: 4
                },
                '& p': {
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  fontFamily: 'Inter, sans-serif'
                },
                '& ul, & ol': {
                  color: theme.palette.secondary.main,
                  fontSize: '1.05rem',
                  pl: 4,
                  mb: 4
                },
                '& li': {
                  mb: 1
                },
                '& strong': {
                  fontWeight: 600
                },
                '& img': {
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  my: 2
                },
                '& blockquote': {
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  pl: 3,
                  py: 2,
                  my: 3,
                  backgroundColor: theme.palette.action.hover,
                  borderRadius: 1
                }
              }}
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />

            {/* Call to Action */}
            <Paper 
              elevation={0}
              sx={{ 
                p: 4,
                background: theme.customGradients.greenDark,
                borderRadius: 2,
                textAlign: 'center',
                mt: 6
              }}
            >
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.customColors.lightGold,
                  fontFamily: 'Lato, sans-serif',
                  mb: 3
                }}
              >
                Looking to import premium-quality peanuts from India to {(blogData.country || blogData.slug)}{blogData.continent ? ` in the ${blogData.continent} market` : ''}?
              </Typography>
              <Box
                component="a"
                href="/#products"
                sx={{
                  display: 'inline-block',
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.primary.main,
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textDecoration: 'none',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.customColors.lightGold,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Our Product Range
              </Box>
            </Paper>
          </div>
        </Container>
        <BreadcrumbsBlog country={blogData.country || blogData.title} />
      </Box>
    </>
  );
} 