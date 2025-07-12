"use client";

import React from 'react';
import { Box } from '@mui/material';
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

type SectionWithImageProps = {
  title: string;
  titleHighlight: string;
  description: ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  isReversed?: boolean;
};

const SectionWithImage = ({
  title,
  titleHighlight,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: SectionWithImageProps) => {
  // Implementation of the component
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box className="blog-content">
        {children}
      </Box>
    </Box>
  );
} 