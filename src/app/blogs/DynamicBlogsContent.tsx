"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, useTheme } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { IBlog } from '@/lib/models/Blog';

interface DynamicBlogsContentProps {
  blogs: IBlog[];
}

export default function DynamicBlogsContent({ blogs }: DynamicBlogsContentProps) {
  const theme = useTheme();

  const extractContentPreview = (content: string, wordLimit: number = 30) => {
    // Remove HTML tags and get plain text
    const plainText = content.replace(/<[^>]*>/g, '');
    const words = plainText.split(' ');
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(' ') + '...'
      : plainText;
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box sx={{ 
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      pt: { xs: 4, md: 6 },
      pb: 8
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
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
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 3,
              lineHeight: 1.2
            }}
          >
            PEANUT MARKET INSIGHTS
          </Typography>
          <Typography 
            variant="h5"
            sx={{
              color: theme.palette.secondary.main,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Stay updated with the latest peanut market trends, industry news, and global trade insights from Balaji Exports
          </Typography>
        </Box>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <Grid container spacing={4}>
            {blogs.map((blog, index) => (
              <Grid item xs={12} md={6} lg={4} key={String(blog._id)}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    component={Link}
                    href={`/blogs/${blog.slug}`}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: theme.palette.background.paper
                    }}
                  >
                    {blog.image && (
                      <CardMedia
                        component="img"
                        height={200}
                        image={blog.image}
                        alt={blog.title}
                        sx={{
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h6" 
                        component="h3"
                        sx={{
                          color: theme.palette.primary.main,
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 700,
                          mb: 2,
                          lineHeight: 1.3,
                          height: '2.6em',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{
                          color: theme.palette.secondary.main,
                          mb: 3,
                          lineHeight: 1.6,
                          height: '4.8em',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {extractContentPreview(blog.content)}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mt: 'auto'
                      }}>
                        <Chip 
                          label="Market Insights"
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.customColors.accentGreen,
                            color: 'white',
                            fontWeight: 500
                          }}
                        />
                        <Typography 
                          variant="caption" 
                          sx={{
                            color: theme.palette.text.secondary,
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {formatDate(blog.createdAt)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ 
            textAlign: 'center',
            py: 8,
            px: 4
          }}>
            <Typography 
              variant="h4"
              sx={{
                color: theme.palette.secondary.main,
                fontFamily: 'Lato, sans-serif',
                mb: 2
              }}
            >
              No Blog Posts Found
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4
              }}
            >
              We're working on adding new content. Please check back soon!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
} 