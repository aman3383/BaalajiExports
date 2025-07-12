'use client';

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Fade, Zoom, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import GradientCard from "@/components/GradientCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning';

// Import images
import CertificationsCarousel from '@/components/CertificationsCarousel';

// Import product image
import g20ProductImage from '@/assets/images/productImg/g20Product.webp';

import peanutButterIcon from "@/assets/images/PeanutButter.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
import bakingIcon from "@/assets/images/baking.png";

// Import key feature images
import keyFeatureImg1 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_snawjosnawjosnaw.webp";
import keyFeatureImg2 from "@/assets/images/productImg/key_features/medicinal-mushroom-lingzhi-mushroom-plant-legume-1946203.webp";
import keyFeatureImg3 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_hvcuc7hvcuc7hvcu.webp";
import keyFeatureImg4 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_cpb11wcpb11wcpb1.webp";
import keyFeatureImg5 from "@/assets/images/productImg/key_features/top-view-peanuts-green-background.webp";


import ProductIntroTiles from '@/components/ProductIntroTiles';
import ProductCarousel from '@/components/ProductCarousel';

const KeyFeaturesCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const images = [
      { src: keyFeatureImg1, alt: "Key Feature Image 1" },
      { src: keyFeatureImg2, alt: "Key Feature Image 2" },
      { src: keyFeatureImg3, alt: "Key Feature Image 3" },
      { src: keyFeatureImg4, alt: "Key Feature Image 4" },
      { src: keyFeatureImg5, alt: "Key Feature Image 5" },
    ];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
        setImageLoaded(false);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
      setImageLoaded(false);
    };
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
      setImageLoaded(false);
    };
    return (
      <Box sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: 3, overflow: 'hidden', boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}>
        <IconButton onClick={handlePrevImage} sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }, boxShadow: 2 }}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={handleNextImage} sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }, boxShadow: 2 }}>
          <ChevronRight />
        </IconButton>
        <Fade in={true} timeout={500}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              style={{ objectFit: 'cover', opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentImageIndex === 0}
            />
          </Box>
        </Fade>
        <Box sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1, zIndex: 2 }}>
          {images.map((_, index) => (
            <Box key={index} onClick={() => setCurrentImageIndex(index)} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
          ))}
        </Box>
      </Box>
    );
  };
  
  const ProductSpecifications = () => {
    const theme = useTheme();
    const specSections = {
      qualities: {
        title: "Product Qualities",
        icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
        items: [
          { name: "Type", value: "Natural / Raw / Blanched / Roasted / Split"},
          { name: "Origin", value: "Gujarat, Rajasthan, Andhra Pradesh, India" },
          { name: "Varieties Available", value: "38/42, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100 counts (kernels per ounce)" },
          { name: "Oil Content", value: "46%–48%" }
        ]
      },
      quality: {
        title: "Quality Parameters",
        icon: <BarChartIcon sx={{ fontSize: 28 }} />,
        items: [
          { name: "Moisture", value: "7% max" },
          { name: "Admixture", value: "0.5% max" },
          { name: "Damaged Kernels", value: "1% max" },
          { name: "Aflatoxin", value: "Below 10 ppb" }
        ]
      },
      packaging: {
        title: "Packaging & Storage",
        icon: <LocalShippingIcon sx={{ fontSize: 28 }} />,
        items: [
          { name: "Packaging", value: "25kg, 50kg PP bags, jute bags, vacuum packing or customizable"},
          { name: "Shelf Life", value: "12 months" },
          { name: "Storage", value: "Cool, dry place away from direct sunlight" }
        ]
      }
    };
    return (
      <Box sx={{ width: '100%', maxWidth: '6xl', mx: 'auto', px: 4, py: { xs: 6, md: 4 }, mb: { xs: -2, md: -3 } }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', sm: '2.25rem' }, fontWeight: 'bold', mb: 3, fontFamily: 'Lato, sans-serif' }}>
            <Typography component="span" variant="inherit" sx={{ color: theme.palette.primary.main }}>Product</Typography>{" "}
            <Typography component="span" variant="inherit" sx={{ color: theme.palette.secondary.main }}>Specifications</Typography>
          </Typography>
          <Box sx={{ width: '5rem', height: '0.25rem', bgcolor: theme.palette.primary.main, mx: 'auto', mb: 2 }}></Box>
          <Typography variant="body1" sx={{ color: theme.palette.secondary.main, fontSize: '1rem', maxWidth: '2xl', mx: 'auto', fontFamily: 'Inter, sans-serif' }}>
            Our G20 peanuts meet the highest quality standards for international markets
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {Object.entries(specSections).map(([key, section]) => (
            <Paper key={key} elevation={2} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden', transition: 'all 300ms ease-in-out', bgcolor: theme.palette.customColors.lightGold, width: '100%' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 1.5, textAlign: 'left', color: theme.palette.secondary.main }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ height: 32, width: 32, bgcolor: theme.palette.primary.main, color: 'white' }}>{section.icon}</Avatar>
                  <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, fontFamily: 'Lato, sans-serif', color: theme.palette.primary.main }}>{section.title}</Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2, borderTop: 1, bgcolor: theme.palette.customColors.darkGold, borderColor: 'rgba(255,255,255,0.2)' }}>
                {section.items.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', flexWrap: 'wrap', py: 1.2, borderBottom: idx !== section.items.length - 1 ? 1 : 0, borderColor: 'rgba(255,255,255,0.2)' }}>
                    <Box sx={{ width: { xs: '100%', sm: '40%' }, fontWeight: 700, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 1, color: theme.palette.customColors.darkGold, fontSize: '1.2rem' }}>🥜</Typography>
                      {item.name}:
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '60%' }, fontWeight: 500, mt: { xs: 0.5, sm: 0 }, pl: { xs: 5, sm: 0 }, color: theme.palette.secondary.main }}>{item.value}</Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
        <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}></Box>
      </Box>
    );
  };
  
  const G20PeanutContent = () => {
    const theme = useTheme();
    return (
      <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
        <Head>
          {/* Basic Meta Tags */}
          <title>Premium Export Quality G20 Peanuts | Balaji Exports - Best Indian Groundnuts Supplier</title>
          <meta name="description" content="Premium G20 Peanuts from India's top groundnut exporters. FSSAI, HACCP & ISO certified. High oil content, uniform size. Bulk wholesale available. Export to UAE, Europe, USA, Africa." />
          <meta name="keywords" content="G20 peanuts, export quality peanuts, Indian groundnuts, peanut exporters India, wholesale peanuts supplier, organic groundnuts, bulk peanuts, groundnut exporters Gujarat, peanut butter manufacturing, groundnut oil extraction, FSSAI certified peanuts, HACCP peanuts, ISO certified groundnuts, peanut exporters to UAE, groundnut companies Andhra Pradesh, wholesale groundnut prices, buy groundnuts bulk, premium Indian peanuts, edible peanuts export, groundnut exporters Rajasthan" />
          <meta name="author" content="Balaji Exports" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="distribution" content="global" />
          <meta name="rating" content="general" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://balajiexports.com/products/g20-peanuts" />
          
          {/* Open Graph Tags */}
          <meta property="og:title" content="Premium Export Quality G20 Peanuts | Balaji Exports - Best Indian Groundnuts" />
          <meta property="og:description" content="High-quality G20 Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction. Global shipping available." />
          <meta property="og:type" content="product" />
          <meta property="og:url" content="https://balajiexports.com/products/g20-peanuts" />
          <meta property="og:image" content="https://balajiexports.com/images/products/g20-peanuts-featured.jpg" />
          <meta property="og:image:alt" content="Premium G20 Peanuts - Export Quality Indian Groundnuts" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Balaji Exports" />
          <meta property="og:locale" content="en_US" />
          <meta property="product:brand" content="Balaji Exports" />
          <meta property="product:availability" content="in stock" />
          <meta property="product:condition" content="new" />
          <meta property="product:price:currency" content="USD" />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@BalajiExports" />
          <meta name="twitter:creator" content="@BalajiExports" />
          <meta name="twitter:title" content="Premium Export Quality G20 Peanuts | Balaji Exports" />
          <meta name="twitter:description" content="High-quality G20 Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & oil extraction." />
          <meta name="twitter:image" content="https://balajiexports.com/images/products/g20-peanuts-featured.jpg" />
          <meta name="twitter:image:alt" content="Premium G20 Peanuts - Export Quality Indian Groundnuts" />
          
          {/* Additional Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#2E7D32" />
          <meta name="msapplication-TileColor" content="#2E7D32" />
          
          {/* Geo Tags */}
          <meta name="geo.region" content="IN-GJ" />
          <meta name="geo.placename" content="Gujarat, India" />
          <meta name="geo.position" content="23.0225;72.5714" />
          <meta name="ICBM" content="23.0225, 72.5714" />
          
          {/* Product Specific Meta Tags */}
          <meta name="product-type" content="Agricultural Products" />
          <meta name="product-category" content="Groundnuts & Peanuts" />
          <meta name="origin-country" content="India" />
          <meta name="export-markets" content="UAE, Europe, USA, Africa, Russia" />
          <meta name="certifications" content="FSSAI, HACCP, ISO" />
          <meta name="minimum-order" content="1 Ton" />
          <meta name="packaging" content="25kg, 50kg PP bags, Jute bags, Vacuum packing" />
          <meta name="shelf-life" content="12 months" />
          
          {/* Structured Data - JSON-LD */}
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Premium Export Quality G20 Peanuts",
                "description": "High-quality G20 Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks, oil extraction and confectionery applications.",
                "brand": {
                  "@type": "Brand",
                  "name": "Balaji Exports",
                  "url": "https://balajiexports.com"
                },
                "manufacturer": {
                  "@type": "Organization",
                  "name": "Balaji Exports",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN",
                    "addressRegion": "Gujarat"
                  }
                },
                
                "offers": {
                  "@type": "Offer",
                  "url": "https://balajiexports.com/products/g20-peanuts",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition",
                  "seller": {
                    "@type": "Organization",
                    "name": "Balaji Exports"
                  }
                },
                "category": "Agricultural Products",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Origin",
                    "value": "Gujarat, Rajasthan, Andhra Pradesh, India"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Oil Content",
                    "value": "46-48%"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Moisture",
                    "value": "7% max"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Varieties",
                    "value": "38/42, 40/50, 50/60, 60/70 counts"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Certifications",
                    "value": "FSSAI, HACCP, ISO"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Packaging",
                    "value": "25kg, 50kg PP bags, jute bags, vacuum packing"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Shelf Life",
                    "value": "12 months"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "247"
                }
              })
            }} 
          />
          
          {/* Organization Schema */}
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Balaji Exports",
                "url": "https://balajiexports.com",
                "logo": "https://balajiexports.com/images/logo.png",
                "description": "Leading exporter of premium quality groundnuts and agricultural products from India with over 20 years of experience in international trade.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN",
                  "addressRegion": "Gujarat"
                },
              })
            }} 
          />
          
          {/* Breadcrumb Schema */}
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://balajiexports.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://balajiexports.com/products"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "G20 Peanuts",
                    "item": "https://balajiexports.com/products/g20-peanuts"
                  }
                ]
              })
            }} 
          />
          
          {/* FAQ Schema */}
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What are G20 peanuts used for?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "G20 peanuts are versatile and used for peanut butter production, snack manufacturing, oil extraction, confectionery applications, animal feed industry, and retail health foods."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What certifications do your G20 peanuts have?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our G20 peanuts are FSSAI certified, HACCP certified, and ISO certified, ensuring the highest quality and safety standards for export."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the oil content of G20 peanuts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "G20 peanuts have an oil content of 46-48%, making them ideal for oil extraction and various industrial applications."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What packaging options are available?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer packaging in 25kg and 50kg PP bags, jute bags, vacuum packing, or customizable packaging options to meet your specific requirements."
                    }
                  }
                ]
              })
            }} 
          />
          
          {/* Alternate Language Tags (if applicable) */}
          <link rel="alternate" hrefLang="en" href="https://balajiexports.com/products/g20-peanuts" />
          <link rel="alternate" hrefLang="x-default" href="https://balajiexports.com/products/g20-peanuts" />
          
          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Favicon and App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        
        <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 4, md: 4 }} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
              <Box 
                sx={{ 
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, sm: 400, md: 450 }, 
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    '& img': {
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Image
                  src={g20ProductImage}
                  alt="Premium G20 Peanuts"
                  fill
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                  priority
                />
              </Box>
              <ProductIntroTiles />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
              <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }, position: 'relative', pb: 2, '&:after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, borderRadius: '2px' } }}>G20 Peanuts – India's Finest Groundnuts</Typography>
              <Typography variant="body1" sx={{ my: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}><span style={{ fontWeight: 700 }}> G20 Peanuts – Premium Quality Indian Groundnuts for Export </span> At Balaji Exports, we are proud to offer the finest quality G20 Peanuts, sourced directly from the rich agricultural regions of Gujarat, Rajasthan, and Andhra Pradesh, India. </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>With over 65 years of farming excellence and two decades in the groundnut export business, we have mastered the art of delivering Indian groundnuts for international markets.</Typography>
              <Typography variant="body1" sx={{ mb: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>Our organic groundnuts India are grown under natural conditions, ensuring non-GMO, pesticide-free groundnuts that meet the highest FSSAI, HACCP, and ISO certified standards.</Typography>
              <Box sx={{ mb: 3, maxWidth: '500px' }}>
                <CertificationsCarousel height="60px" showDots={false} />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>G20 groundnuts are known worldwide for their large oval kernels, reddish-brown skin, high oil content, and strong nutty flavor, making them the preferred choice for peanut butter manufacturers, snack food producers, oil extraction industries, and health food companies. As trusted peanut exporters from India, we guarantee top-quality peanuts that meet the needs of buyers in the UAE, Europe, Africa, Russia, and the USA.</Typography>
        </Container>
        <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
          <ProductSpecifications />
        </Container>
        
        <Box component="section" aria-label="Product Applications" sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, color: theme.palette.customColors.darkGold, mt: { xs: 4, md: 6 }, py: { xs: 6, md: 8 }, borderRadius: { md: '100px 0 100px 0' }, position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10.5%), radial-gradient(circle, #ffffff 10%, transparent 10.5%)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }} />
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" align="center" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, mb: { xs: 3, md: 4 }, position: 'relative', display: 'inline-block', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, width: '100%', color: theme.palette.customColors.darkGold, '&:after': { content: '""', position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', backgroundColor: theme.palette.customColors.darkGold, borderRadius: '2px' } }}>Applications</Typography>
            <Typography variant="body1" sx={{ mt: 5, mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', lineHeight: 1.8 }}>G20 peanuts are highly versatile with exceptional nutritional properties and consistent quality, making them suitable for various industrial and commercial applications. Our premium peanuts are specifically cultivated to meet the demanding requirements of the following industries:</Typography>
            <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4, px: 3 }}>
              {[
                { title: "Peanut Butter Production", icon: <Image src={peanutButterIcon} alt="Peanut Butter" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "Perfect for creamy, rich peanut butter with consistent texture and flavor due to their uniform size and reliable roasting characteristics." },
                { title: "Snack Manufacturing", icon: <span role="img" aria-label="popcorn" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🍿</span>, desc: "Ideal for salted, roasted, and coated snacks, providing the perfect balance of crunch, taste and visual appeal for premium snack lines." },
                { title: "Oil Extraction", icon: <Image src={groundnutOilIcon} alt="Groundnut Oil" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "High oil content (45-50%) makes them excellent for cold-pressed and refined cooking oil, yielding a light-colored oil with a mild, pleasant flavor." },
                { title: "Confectionery Applications", icon: <span role="img" aria-label="chocolate" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🍫</span>, desc: "Perfect addition to peanut brittle, chocolate bars, and other confections, delivering consistent flavor, texture and visual appeal." },
                { title: "Animal Feed Industry", icon: <span role="img" aria-label="cow" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🐄</span>, desc: "Nutritious ingredient for high-protein animal feed, with peanut cake meal supporting healthy growth and development in livestock." },
                { title: "Retail Health Foods", icon: <span role="img" aria-label="seedling" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🌱</span>, desc: "Ideal for premium health food packaging, offering nutritional benefits and long shelf life for branded consumer products." }
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', mb: 3.5, alignItems: 'flex-start' }}>
                  <Box sx={{ minWidth: '42px', width: '42px', height: '42px', mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {typeof item.icon === 'string' ? (
                      <Typography variant="h5" component="span" sx={{ fontSize: '1.8rem', lineHeight: 1, color: theme.palette.customColors.darkGold }}>{item.icon}</Typography>
                    ) : (
                      item.icon
                    )}
                  </Box>
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Typography variant="h6" component="h3" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 0.5, color: theme.palette.customColors.darkGold }}>{item.title}</Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.9rem', md: '1rem' }, color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.05rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', fontStyle: 'italic', p: 2, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }}>Our G20 peanuts' consistent quality ensures reliable performance across all these applications, making them a preferred choice for businesses requiring premium ingredients.</Typography>
          </Container>
        </Box>
  
        {/* Key Features Section (Reference Design) */}
        <Container component="section" aria-label="Key Features" maxWidth="lg" sx={{ mt: { xs: 1, md: 2 }, mb: { xs: 5, md: 7 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
            <Typography 
              variant="h2" 
              component="h2" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.primary.main}
              sx={{ 
                mb: 0,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                display: 'inline'
              }}
            >
              Key{' '}
            </Typography>
            <Typography 
              variant="h2" 
              component="span" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              sx={{ 
                color: theme.palette.secondary.main,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                display: 'inline'
              }}
            >
              Features
            </Typography>
            <Box 
              sx={{ 
                width: '80px', 
                height: '4px', 
                backgroundColor: theme.palette.primary.main, 
                mx: 'auto', 
                mt: 2, 
                mb: 4,
                borderRadius: '2px'
              }} 
            />
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: '4%' }
          }}>
            {/* Features Section - Left side */}
            <Box sx={{ width: { xs: '100%', md: '48%' } }}>
              <Paper 
                elevation={3}
                sx={{ 
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark || '#1a3526'} 100%)`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'
                  }
                }}
              >
                {[
                  { title: "High Yield", description: "High oil content for greater yield" },
                  { title: "Consistent Size", description: "Uniform size for efficient processing" },
                  { title: "Versatile Applications", description: "Suitable for multiple end uses: oil, snacks, and exports" },
                  { title: "Disease Resistance", description: "Robust resistance to diseases and pests" },
                  { title: "Quality & Storage", description: "Consistent quality and easy storage" }
                ].map((feature, index, array) => (
                  <Box 
                    key={index}
                    sx={{
                      p: 3,
                      borderBottom: index !== array.length - 1 ? `1px solid rgba(255,255,255,0.1)` : 'none',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      fontFamily="Lato, sans-serif"
                      fontWeight="bold"
                      sx={{ 
                        color: theme.palette.customColors.darkGold, 
                        mb: 1.5,
                        fontSize: { xs: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      fontFamily="Inter, sans-serif"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Box>
            {/* Image Carousel - Right side */}
            <Box sx={{ 
              width: { xs: '100%', md: '48%' },
              height: { xs: '300px', md: '400px' }
            }}>
              <KeyFeaturesCarousel />
            </Box>
          </Box>
        </Container>
  
        {/* Why Choose Our G20 Peanuts Section (Reference Design) */}
        <Container component="section" aria-label="Why Choose Our Products" maxWidth="lg" sx={{ my: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
              <Typography 
                variant="h3"
                component="h2"
                sx={{ 
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 4,
                  textAlign: { xs: 'left', md: 'center' },
                  fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' }
                }}
              >
                Why Choose Our G-20 Peanuts?
              </Typography>
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                Food industries requiring consistent size and flavor for premium products and international applications choose our G-20 peanuts for reliable quality.
              </Typography>
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                As leading wholesale peanuts suppliers in India, we offer competitive groundnut prices per ton for large-scale buyers looking to buy groundnuts in bulk. We specialize in supplying to peanut importers worldwide, groundnut companies in Andhra Pradesh, and peanut exporters from India to UAE, Europe, and beyond.
              </Typography>
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                Our focus is always on delivering best quality groundnuts from India with strict attention to hygienic packaging and lab-tested groundnuts that are safe, healthy, and fresh. Whether you need edible peanuts for food industries or bulk groundnuts for snack manufacturing, Balaji Exports is your most reliable partner in the peanut export business.
              </Typography>
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                Partner with Balaji Exports, the top peanut export company in India, and source the highest quality G-20 peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
              </Typography>
              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button 
                  variant="contained"
                  component={Link}
                  href="/contact"
                  size="large"
                  aria-label="Request a quotation for G20 Peanuts"
                  sx={{ 
                    bgcolor: theme.palette.primary.main,
                    fontFamily: 'Inter, sans-serif',
                    px: { xs: 4, md: 5 }, 
                    py: { xs: 1, md: 1.5 }, 
                    fontSize: { xs: 15, md: 16 },
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.main,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    }
                  }}
                >
                  Request Quotation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Product Carousel Section */}
        <Container component="section" aria-label="Other Products" maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
          <ProductCarousel currentProductPath="/products/g20-peanuts" />
        </Container>
  
        {/* Breadcrumbs at the bottom */}
        <Container sx={{ mb: 4, mt: 8 }}>
          <nav aria-label="breadcrumb">
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
              <span style={{ color: theme.palette.primary.main }}>G20 Peanuts</span>
            </Typography>
          </nav>
        </Container>
      </Box>
    );
  };
  
  export default G20PeanutContent; 