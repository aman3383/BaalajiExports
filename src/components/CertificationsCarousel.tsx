'use client';

import React, { useState, useEffect } from 'react';
import { Box, useTheme, keyframes } from '@mui/material';
import Image from 'next/image';

// Import all certification logos
import sustainableLogo from '@/assets/images/Certifications/Sustainable.png';
import globalGapLogo from '@/assets/images/Certifications/globalGap.png';
import sedexLogo from '@/assets/images/Certifications/SEDEX.png';
import apedaLogo from '@/assets/images/Certifications/Apeda.png';
import faoLogo from '@/assets/images/Certifications/FAO.png';
import brcLogo from '@/assets/images/Certifications/BRC.png';
import halalLogo from '@/assets/images/Certifications/Halal.png';
import iso2015Logo from '@/assets/images/Certifications/ISO 2015.png';
import iso22000Logo from '@/assets/images/Certifications/ISO 22000.png';
import isoLogo from '@/assets/images/Certifications/ISO.png';
import haccpLogo from '@/assets/images/Certifications/HACCP.png';
import fssaiLogo from '@/assets/images/Certifications/fssai.png';

const certifications = [
  { src: fssaiLogo, alt: 'FSSAI Certification', name: 'FSSAI' },
  { src: haccpLogo, alt: 'HACCP Certification', name: 'HACCP' },
  { src: isoLogo, alt: 'ISO Certification', name: 'ISO' },
  { src: iso2015Logo, alt: 'ISO 2015 Certification', name: 'ISO 2015' },
  { src: iso22000Logo, alt: 'ISO 22000 Certification', name: 'ISO 22000' },
  { src: brcLogo, alt: 'BRC Certification', name: 'BRC' },
  { src: globalGapLogo, alt: 'GlobalGAP Certification', name: 'GlobalGAP' },
  { src: halalLogo, alt: 'Halal Certification', name: 'Halal' },
  { src: faoLogo, alt: 'FAO Certification', name: 'FAO' },
  { src: apedaLogo, alt: 'APEDA Certification', name: 'APEDA' },
  { src: sedexLogo, alt: 'SEDEX Certification', name: 'SEDEX' },
  { src: sustainableLogo, alt: 'Sustainable Certification', name: 'Sustainable' }
];

// CSS animation for continuous scroll
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-150%);
  }
`;

interface CertificationsCarouselProps {
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  height?: string | number;
}

const CertificationsCarousel: React.FC<CertificationsCarouselProps> = ({
  autoPlay = true,
  interval = 3000,
  showDots = false,
  height = '60px'
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Calculate animation duration based on number of items and interval
  // Each item should be visible for the specified interval
  const animationDuration = certifications.length * (interval / 1000);

  // Duplicate certifications for seamless loop
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        borderRadius: 2,
        bgcolor: 'transparent',
      }}

    >
      {/* Certification Logos */}
      <Box
        sx={{
          height: '120%',
          overflow: 'hidden',
          px: 3,
          transform: 'translateY(-10%)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '300%', // Four times width to show only 3-4 at a time
            animation: autoPlay ? `${scrollAnimation} ${animationDuration}s linear infinite` : 'none'
          }}
        >
          {duplicatedCertifications.map((cert, index) => (
            <Box
              key={`${cert.name}-${index}`}
              sx={{
                position: 'relative',
                height: '100%',
                width: `${300 / duplicatedCertifications.length}%`, // Much larger individual items
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                px: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  filter: 'brightness(1.1)'
                }
              }}
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}
                sizes="(max-width: 600px) 25vw, (max-width: 900px) 20vw, 15vw"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationsCarousel; 