import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

// Transform database blog to card format
function transformBlogToCard(blog: any) {
  // Extract content preview (remove HTML tags)
  const extractContentPreview = (content: string, wordLimit: number = 25) => {
    const plainText = content.replace(/<[^>]*>/g, '');
    const words = plainText.split(' ');
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(' ') + '...'
      : plainText;
  };

  return {
    title: blog.slug + ' Market' || 'New Market Analysis',
    subtitle: 'India-' + blog.slug + ' Agricultural Trade',
    overline: 'Trade Insights',
    description: extractContentPreview(blog.content, 25) || (blog.seo?.description ?? ''),
    to: `/blogs/${blog.slug}`,
    readTime: blog.readTime || '5 min read',
    feature: blog.slug.charAt(0).toUpperCase() + blog.slug.slice(1) + ' Market',  };
}

export default function BlogsContent({ blogs }: { blogs: any[] }) {
  const allBlogCards = blogs.map(transformBlogToCard);

  return (
    <main>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          py: { xs: 4, md: 6 }
        }}
      >
        <Container maxWidth="xl">
          {/* Page Heading */}
          <Box 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 4, md: 6 }
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'primary.main',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: 100, sm: 150 },
                  height: 4,
                  backgroundColor: 'customColors.accentGreen',
                  borderRadius: 2
                }
              }}
            >
              Peanut Blogs
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: 'secondary.main',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px',
                mx: 'auto',
                mt: 4,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
              }}
            >
              Discover the latest insights, trends, and stories from the world of peanuts
            </Typography>
          </Box>

          {/* Blog Cards Section */}
          <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {allBlogCards.map((card, idx) => (
              <Link
                key={card.to}
                href={card.to}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    maxWidth: '100%',
                    backgroundColor: 'white',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      backgroundColor: 'customColors.accentGreen',
                      transition: 'all 0.3s ease'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: { xs: '30%', md: '15%' },
                      height: '100%',
                      background: 'linear-gradient(to right, transparent, background.default)',
                      pointerEvents: 'none',
                      opacity: 0.9,
                      zIndex: 1
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 30px rgba(109, 140, 63, 0.15)',
                      '&::before': {
                        width: '8px'
                      },
                      '& .feature-image': {
                        transform: 'scale(1.05)'
                      },
                      '& .read-more-btn': {
                        backgroundColor: 'customColors.accentGreen',
                        color: 'white',
                        paddingRight: '32px'
                      },
                      '&::after': {
                        opacity: 0.7
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: 'primary.main',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, primary.main 0%, transparent 60%)',
                        opacity: 0.9,
                        zIndex: 1
                      }
                    }}
                  >
                    <Box
                      className="feature-image"
                      sx={{
                        height: { xs: 220, md: 320 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2,
                        transition: 'transform 0.5s ease',
                        p: 4,
                        background: 'radial-gradient(circle at 30% 70%, rgba(109, 140, 63, 0.1) 0%, transparent 70%)'
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'customColors.lightGold',
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 700,
                          textAlign: 'center',
                          position: 'relative',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -10,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 60,
                            height: 3,
                            backgroundColor: 'customColors.lightGold',
                            opacity: 0.7,
                            borderRadius: 1
                          }
                        }}
                      >
                        {card.feature}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent 
                    sx={{ 
                      flex: 1,
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: 'white',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 40,
                        left: 0,
                        width: '30%',
                        height: '1px',
                        backgroundColor: 'customColors.accentGreen',
                        opacity: 0.3
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '20%',
                        height: '100%',
                        background: 'linear-gradient(to right, transparent, background.default)',
                        pointerEvents: 'none',
                        opacity: 0.5,
                        zIndex: 1
                      }
                    }}
                  >
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: 'customColors.accentGreen',
                          fontWeight: 600,
                          letterSpacing: '2px',
                          mb: 1,
                          display: 'block'
                        }}
                      >
                        {card.overline}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'primary.main',
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 700,
                          mb: 2,
                          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                        }}
                      >
                        {card.subtitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'secondary.main',
                          mb: 3,
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          lineHeight: 1.8,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500
                        }}
                      >
                        {card.readTime}
                      </Typography>
                      <Button
                        className="read-more-btn"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          textTransform: 'none',
                          borderRadius: '20px',
                          px: 3,
                          py: 1,
                          backgroundColor: 'transparent',
                          border: '1px solid',
                          borderColor: 'primary.main',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'customColors.accentGreen',
                            transition: 'left 0.3s ease',
                            zIndex: -1
                          },
                          '&:hover::before': {
                            left: 0
                          }
                        }}
                        endIcon={<ArrowForward />}
                      >
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
    </main>
  );
} 