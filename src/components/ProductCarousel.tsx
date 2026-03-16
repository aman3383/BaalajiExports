'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardActionArea, 
  CardContent,
  useTheme,
  IconButton,
  Fade
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Import product images
import boldPeanutsImage from '@/assets/images/Home/product_h_img/bold .webp';
import spanishPeanutsImage from '@/assets/images/Home/product_h_img/spanish peanuts .webp';
import tjPeanutsImage from '@/assets/images/Home/product_h_img/tj peanuts .webp';
import longJavaPeanutsImage from '@/assets/images/Home/product_h_img/java .webp';
import virginiaPeanutsImage from '@/assets/images/Home/product_h_img/virginia .webp';
import peanutOilImage from '@/assets/images/Home/product_h_img/PeanutOil.webp';
import k6PeanutsImage from '@/assets/images/Home/product_h_img/k6Home.webp';
import peanutButterImage from '@/assets/images/Home/product_h_img/PeanutButterHome.webp';
import blanchedPeanutsImage from '@/assets/images/Home/product_h_img/BlanchedPeanutHome.webp';
import saltedPeanutsImage from '@/assets/images/Home/product_h_img/SaltedPeanutsHome.webp';
import redSkinHomeImage from '@/assets/images/Home/product_h_img/RedSkinHome.webp';
import g20HomeImage from '@/assets/images/Home/product_h_img/g20Home.webp';
import mathadiHomeImage from '@/assets/images/Home/product_h_img/MathadiHome.webp';
import icgv03043HomeImage from '@/assets/images/Home/product_h_img/icgv03043Home.webp';
import icgv15090HomeImage from '@/assets/images/Home/product_h_img/icgv15090Home.webp';
import icgv15083HomeImage from '@/assets/images/Home/product_h_img/icgv15083Home.webp';

const products = [
  {
    name: 'Bold/Runner Peanuts',
    path: '/products/bold-peanuts',
    description: 'Large, premium-quality peanuts with an exceptional flavor profile, perfect for snacking.',
    image: boldPeanutsImage
  },
  {
    name: 'Java/Spanish Peanuts',
    path: '/products/spanish-peanuts',
    description: 'Smaller peanuts with higher oil content, ideal for candies and snack products.',
    image: spanishPeanutsImage
  },
  {
    name: 'Peanut Oil',
    path: '/products/peanut-oil',
    description: 'Pure, cold-pressed peanut oil with rich flavor, ideal for cooking and frying.',
    image: peanutOilImage
  },
  {
    name: 'Peanut Butter',
    path: '/products/peanut-butter',
    description: 'Creamy, all-natural peanut butter made from freshly ground organic peanuts.',
    image: peanutButterImage
  },
  {
    name: 'Virginia Peanuts',
    path: '/products/virginia-peanuts',
    description: 'Large-kerneled peanuts, perfect for in-shell roasting and gourmet applications.',
    image: virginiaPeanutsImage
  },
  {
    name: 'Blanched Peanuts',
    path: '/products/blanched-peanuts',
    description: 'Skinless peanuts with clean taste, perfect for various culinary applications.',
    image: blanchedPeanutsImage
  },
  {
    name: 'Red Skin Peanuts',
    path: '/products/red-skin-peanuts',
    description: 'Distinctive peanuts with red skin intact, rich in antioxidants and full of flavor.',
    image: redSkinHomeImage
  },
  {
    name: 'ICGV-15083 / girnar-4 Peanuts',
    path: '/products/icgv-15083-peanuts',
    description: 'Improved varieties with enhanced disease resistance and higher yields.',
    image: icgv15083HomeImage
  },
  {
    name: 'ICGV-15090 / girnar-5 Peanuts',
    path: '/products/icgv15090-peanuts',
    description: 'Research-backed variety with improved nutritional profile and yield potential.',
    image: icgv15090HomeImage
  },
  {
    name: 'ICGV 03043 Peanuts',
    path: '/products/icgv-03043-peanuts',
    description: 'Modern peanut variety with enhanced resistance to environmental stressors.',
    image: icgv03043HomeImage
  },
  {
    name: 'G20 Peanuts',
    path: '/products/g20-peanuts',
    description: 'High-yield variety with excellent nutritional value and consistent size.',
    image: g20HomeImage
  },
  {
    name: 'K6 Peanuts',
    path: '/products/k6-peanuts',
    description: 'Popular variety known for drought resistance and exceptional quality.',
    image: k6PeanutsImage
  },
  {
    name: 'Salted Peanuts',
    path: '/products/salted-peanuts',
    description: 'Medium-sized uniform peanuts, ideal for peanut butter and confectionery products.',
    image: saltedPeanutsImage
  },
  {
    name: 'Organic Peanuts',
    path: '/products/organic-peanuts',
    description: 'Organically grown peanuts with distinctive shape and rich nutty flavor profile.',
    image: longJavaPeanutsImage
  },
  {
    name: 'Mathadi Peanuts',
    path: '/products/mathadi-peanuts',
    description: 'Traditional variety with distinctive taste and cultural significance.',
    image: mathadiHomeImage
  },
  {
    name: 'TJ Peanuts',
    path: '/products/tj-peanuts',
    description: 'Specially cultivated variety known for consistent quality and superior taste.',
    image: tjPeanutsImage
  }
];

interface ProductCarouselProps {
  currentProductPath?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ currentProductPath }) => {
  const theme = useTheme();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter out current product from the list
  const filteredProducts = products.filter(product => product.path !== currentProductPath);

  // Auto-scroll functionality with seamless infinite loop (same as nut-journey)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && !isTransitioning && !isHovered) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % filteredProducts.length;
        setActiveIndex(nextIndex);
      }, 3000); // 3 seconds like nut-journey
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, activeIndex, filteredProducts.length, isTransitioning, isHovered]);

  // Handle smooth scroll to active card
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 300; // 280px width + 20px gap
      const targetPosition = activeIndex * cardWidth;
      
      setIsTransitioning(true);
      scrollContainerRef.current.scrollTo({
        left: targetPosition,
        behavior: 'smooth'
      });
      
      // Reset transitioning state after animation
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  // Manual navigation functions (same pattern as nut-journey)
  const goToPreviousStep = useCallback(() => {
    if (isTransitioning) return;
    setAutoPlay(false);
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(filteredProducts.length - 1); // Go to last item
    }
    setTimeout(() => setAutoPlay(true), 10000); // Resume after 10 seconds
  }, [activeIndex, filteredProducts.length, isTransitioning]);

  const goToNextStep = useCallback(() => {
    if (isTransitioning) return;
    setAutoPlay(false);
    if (activeIndex < filteredProducts.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0); // Go to first item
    }
    setTimeout(() => setAutoPlay(true), 10000); // Resume after 10 seconds
  }, [activeIndex, filteredProducts.length, isTransitioning]);

  // Keep legacy functions for backward compatibility
  const scrollLeft = () => goToPreviousStep();
  const scrollRight = () => goToNextStep();

  return (
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.customColors.accentGreen}22 0%, transparent 70%)`,
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h4"
            component="h2"
            fontFamily="Lato, sans-serif"
            fontWeight="700"
            sx={{ 
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.customColors.accentGreen} 90%)`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: theme.palette.primary.main, // Fallback
              position: 'relative',
              display: 'inline-block',
              fontSize: { xs: '1.75rem', md: '2.125rem' },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '80px', md: '120px' },
                height: '3px',
                background: theme.palette.customColors.accentGreen,
                borderRadius: '2px'
              }
            }}
          >
            Our Other Premium Products
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: theme.palette.primary.main,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Explore our complete range of high-quality peanut products
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box 
          sx={{ position: 'relative' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <IconButton
            onClick={scrollLeft}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.9)',
              color: theme.palette.primary.main,
              width: 48,
              height: 48,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>
          
          <IconButton
            onClick={scrollRight}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.9)',
              color: theme.palette.primary.main,
              width: 48,
              height: 48,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronRight size={24} />
          </IconButton>

          {/* Scrollable Product Container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              pb: 2,
              mx: 2,
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {[...filteredProducts, ...filteredProducts].map((product, index) => (
              <Box
                key={`${product.path}-${index}`}
                sx={{
                  minWidth: '280px',
                  maxWidth: '280px',
                  transition: 'transform 0.3s ease',
                }}
              >
                <Card 
                  sx={{ 
                    height: '320px',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: hoveredItem === index 
                      ? '0 8px 20px rgba(0,0,0,0.18)'
                      : '0 3px 10px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: hoveredItem === index ? 'translateY(-8px)' : 'translateY(0)',
                    bgcolor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <CardActionArea 
                    component={Link} 
                    href={product.path}
                    sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'stretch',
                      height: '100%'
                    }}
                  >
                    <Box 
                      sx={{ 
                        height: 160,
                        position: 'relative',
                        overflow: 'hidden',
                        background: !product.image ? theme.palette.customColors.accentGreen + '22' : (product.name === 'Peanut Oil' ? '#fff' : undefined),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ 
                            objectFit: product.name === 'Peanut Oil' ? 'contain' : 'cover',
                            objectPosition: product.name === 'K6 Peanuts' ? 'center 30%' : 'center center',
                            background: product.name === 'Peanut Oil' ? '#fff' : undefined,
                            transform: hoveredItem === index ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      ) : null}
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      pb: '12px !important',
                      px: 2,
                      pt: 2,
                    }}>
                      <Typography 
                        variant="h6" 
                        component="h3"
                        sx={{ 
                          color: theme.palette.customColors.darkGold,
                          fontWeight: 700,
                          fontSize: '1rem',
                          position: 'relative',
                          pb: 1,
                          mb: 1,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '30px',
                            height: '2px',
                            backgroundColor: theme.palette.customColors.accentGreen,
                            transition: 'width 0.3s ease',
                          },
                          '&:hover::after': {
                            width: '50px',
                          }
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: theme.palette.customColors.lightGold,
                          fontSize: '0.8rem',
                          lineHeight: 1.5,
                          flexGrow: 1,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end',
                        alignItems: 'center', 
                        mt: 'auto',
                        pt: 1
                      }}>
                        <Fade in={hoveredItem === index}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            color: theme.palette.customColors.lightGold
                          }}>
                            <Typography 
                              variant="caption" 
                              sx={{ fontStyle: 'italic', mr: 0.5 }}
                            >
                              View Details
                            </Typography>
                            <ChevronRight size={16} />
                          </Box>
                        </Fade>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCarousel; 