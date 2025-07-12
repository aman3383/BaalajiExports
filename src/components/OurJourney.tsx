'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  useTheme
} from '@mui/material';
import Image from 'next/image';
import ourJourneyImage1 from '@/assets/images/Home/OurJourney1_optimized.webp';
import ourJourneyImage2 from '@/assets/images/Home/OurJourney__2.webp';
import GradientCard from './GradientCard';

const OurJourney = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [ourJourneyImage1, ourJourneyImage2];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      id="our-journey-section"
      sx={{
        pt: { xs: 10, sm: 12, md: 14 },
        pb: { xs: 5, sm: 6, md: 8 },
        backgroundColor: theme.palette.background.default,
        scrollMarginTop: { xs: '80px', sm: '100px' },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'stretch',
          justifyContent: 'center',
        }}>
          {/* Our Journey Card */}
          <Box sx={{
            width: { xs: '100%', md: '54%', lg: '52%' },
            minHeight: { xs: 160, sm: 180, md: 200, lg: 220 },
            display: 'flex',
            alignItems: 'center',
            order: { xs: 2, md: 1 },
            mb: { xs: 2, md: 0 },
          }}>
            <GradientCard
              title="Our Journey"
              description={
                'At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology and operate a state-of-the-art groundnut processing unit.'
              }
              gradient="greenDark"
              height={320}
              cardSx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                background: theme.customGradients.greenDark,
                minHeight: { xs: 260, sm: 320, md: 340 },
                p: { xs: 3, sm: 4, md: 5 },
              }}
              contentSx={{
                p: 0,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: { xs: '1.08rem', sm: '1.18rem', md: '1.22rem' },
                mt: { xs: 2, sm: 3 },
              }}
              buttonText={undefined}
            />
          </Box>
          {/* Image Carousel */}
          <Box
            sx={{
              width: { xs: '100%', md: '42%', lg: '44%' },
              minHeight: { xs: 240, sm: 300, md: 400, lg: 500 },
              height: { xs: 260, sm: 320, md: 400, lg: 500 },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              mx: { xs: 0, sm: 2, md: 0 },
              mt: { xs: 2, sm: 0, md: 0 },
              order: { xs: 1, md: 2 },
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <Image
              src={images[currentImage]}
              alt={`Our Journey - Balaji Exports farming heritage image ${currentImage + 1}`}
              fill
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform 0.3s ease',
              }}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 44vw"
              priority
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)',
              }}
            />
            {/* Carousel Arrows */}
            <Box sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', zIndex: 2 }}>
              <button 
                onClick={handlePrev} 
                style={{ 
                  background: 'rgba(255,255,255,0.85)', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40, 
                  cursor: 'pointer', 
                  fontSize: 24, 
                  fontWeight: 'bold', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)' 
                }}
                aria-label="Previous image"
              >&lt;</button>
            </Box>
            <Box sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', zIndex: 2 }}>
              <button 
                onClick={handleNext} 
                style={{ 
                  background: 'rgba(255,255,255,0.85)', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40, 
                  cursor: 'pointer', 
                  fontSize: 24, 
                  fontWeight: 'bold', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)' 
                }}
                aria-label="Next image"
              >&gt;</button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurJourney;