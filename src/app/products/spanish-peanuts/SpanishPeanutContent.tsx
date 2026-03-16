'use client';

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Fade from '@mui/material/Fade';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning';

// Import product image
import javaSpanishProductImage from '@/assets/images/productImg/JavaSpanishProduct.webp';

import peanutButterIcon from "@/assets/images/PeanutButter.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
import bakingIcon from "@/assets/images/baking.png";
import CertificationsCarousel from '@/components/CertificationsCarousel';
import KeyFeaturesCarousel from '@/components/KeyFeaturesCarousel';
import ProductIntroTiles from '@/components/ProductIntroTiles';
import ProductCarousel from '@/components/ProductCarousel';

// Product Specifications Component
const ProductSpecifications: React.FC = () => {
    const theme = useTheme();
    const specSections = {
      qualities: {
        title: "Product Qualities",
        icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
        items: [
          { name: "Type", value: "Spanish Peanuts" },
          { name: "Size", value: "60/70, 70/80, 80/90, 90/100, 100/120, 140/160 counts (kernels per ounce)" },
          { name: "Color", value: "Uniform reddish-brown" },
          { name: "Taste", value: "Sweet, nutty, and fresh" },
          { name: "Oil Content", value: "48% to 52%" }
        ]
      },
      
      quality: {
        title: "Quality Parameters",
        icon: <BarChartIcon sx={{ fontSize: 28 }} />,
        items: [
          { name: "Moisture Content", value: "Max 7%" },
          { name: "Admixture", value: "Max 1%" },
          { name: "Foreign Material", value: "Max 0.5%" },
          { name: "Damaged Kernels", value: "Max 1.5%" },
          { name: "Split Kernels", value: "Max 5%" },
          { name: "Aflatoxin", value: "Below permissible limits (as per EU/US norms)" }
        ]
      },

      packaging: {
        title: "Packaging & Storage",
        icon: <LocalShippingIcon sx={{ fontSize: 28 }} />,
        items: [
          { name: "Packaging", value: "25kg, 50kg, PP bags, jute bags, vacuum packs, or customizable" },
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
            Our Java/Spanish peanuts meet the highest quality standards for international markets
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
      </Box>
    );
  };
  
  
  
  
  
  const SpanishPeanutPage: React.FC = () => {
    const theme = useTheme();
    return (
      <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
        {/* Introduction Section */}
        <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 3, md: 5 } }}>
          <Grid container spacing={{ xs: 4, md: 4 }} alignItems="center" justifyContent="space-between">
            {/* Left side for image */}
            <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
              <Box 
                sx={{ 
                  position: 'relative',
                  width: '100%',
                  height: { xs: '300px', md: '500px' }, 
                  mb: 4,
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
                  src={javaSpanishProductImage}
                  alt="Java/Spanish Premium Peanuts"
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
            {/* Right side for text */}
            <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
              <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }, position: 'relative', pb: 2, '&:after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, borderRadius: '2px' } }}>Premium Export Quality Java/Spanish Peanuts – Bold Flavor & High Oil Content</Typography>
              <Typography variant="body1" sx={{ my: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>Java peanuts, also known as Spanish peanuts, are a globally cherished variety with deep historical roots. Originally from South America, they were spread worldwide by Spanish explorers and later cultivated in Java, Indonesia—earning the name "Java peanut." Known for their distinct round shape, these peanuts are favored in Southeast Asian markets for their premium quality and high sugar content, ideal for making naturally sweet and creamy peanut butter.</Typography>
              <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>Rich in methylpyrazine, they deliver a strong, nutty flavor when roasted. Java peanuts come in several sub-varieties, including Baisha, TJ 37, JL (Java Long), K6, Tag, Western 44, and G7, each suited for various uses like snacks, spreads, and even bird feed. Their crop cycle ranges from 90 to 130 days, depending on the type.</Typography>
              <Box sx={{ mb: 3, maxWidth: '500px' }}>
                <CertificationsCarousel height="60px" showDots={false} />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>Valued for their versatility, even broken kernels are repurposed, making them a sustainable, zero-waste choice for food industries worldwide. Carefully sourced and processed under strict quality standards, our Java/Spanish Peanuts maintain their freshness, taste, and appearance, making them ideal for domestic and export markets.</Typography>
        </Container>
        {/* Product Specifications Section */}
        <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
          <ProductSpecifications />
        </Container>
        {/* Applications Section */}
        <Box component="section" aria-label="Product Applications" sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, color: theme.palette.customColors.darkGold, mt: { xs: 8, md: 12 }, py: { xs: 6, md: 8 }, borderRadius: { md: '100px 0 100px 0' }, position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10.5%), radial-gradient(circle, #ffffff 10%, transparent 10.5%)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }} />
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" align="center" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, mb: { xs: 3, md: 4 }, position: 'relative', display: 'inline-block', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, width: '100%', color: theme.palette.customColors.darkGold, '&:after': { content: '""', position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', backgroundColor: theme.palette.customColors.darkGold, borderRadius: '2px' } }}>Applications</Typography>
            <Typography variant="body1" sx={{ mt: 5, mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', lineHeight: 1.8 }}>Java/Spanish peanuts are highly versatile with exceptional nutritional properties and consistent quality, making them suitable for various industrial and commercial applications. Our premium peanuts are specifically cultivated to meet the demanding requirements of the following industries:</Typography>
            <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4, px: 3 }}>
              {[
                { title: "Peanut Butter", icon: <Image src={peanutButterIcon} alt="Peanut Butter" width={28} height={28} />, desc: "Preferred variety due to high oil content" },
                { title: "Snacks", icon: "🍿", desc: "Roasted, salted, flavored peanuts." },
                { title: "Cooking Oil Extraction", icon: <Image src={groundnutOilIcon} alt="Groundnut Oil" width={28} height={28} />, desc: "Produces premium-quality peanut oil." },
                { title: "Confectionary", icon: "🍫", desc: "Used in candies, chocolate bars, and coated products." },
                { title: "Bakery Products", icon: <Image src={bakingIcon} alt="Baking Products" width={28} height={28} />, desc: "Incorporated in cookies, cakes, and granola bars." }
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'grid', gridTemplateColumns: '40px 1fr', mb: 4, alignItems: 'start', gap: 2 }}>
                  <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {typeof item.icon === 'string' ? (
                      <Typography variant="h5" component="span" sx={{ fontSize: '1.8rem', lineHeight: 1, color: theme.palette.customColors.darkGold }}>{item.icon}</Typography>
                    ) : (
                      item.icon
                    )}
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 1, color: theme.palette.customColors.darkGold, lineHeight: 1.2 }}>{item.title}</Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.9rem', md: '1rem' }, color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.05rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', fontStyle: 'italic', p: 2, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }}>Our Java/spanish peanuts' consistent quality ensures reliable performance across all these applications, making them a preferred choice for businesses requiring premium ingredients.</Typography>
          </Container>
        </Box>
        {/* Key Features Section */}
        <Container component="section" aria-label="Key Features" maxWidth="lg" sx={{ mt: { xs: 1, md: 2 }, mb: { xs: 5, md: 7 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
            <Typography variant="h2" component="h2" fontFamily="Lato, sans-serif" fontWeight={800} color={theme.palette.primary.main} sx={{ mb: 0, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, display: 'inline' }}>Key{' '}</Typography>
            <Typography variant="h2" component="span" fontFamily="Lato, sans-serif" fontWeight={800} sx={{ color: theme.palette.secondary.main, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, display: 'inline' }}>Features</Typography>
            <Box sx={{ width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, mx: 'auto', mt: 2, mb: 4, borderRadius: '2px' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: { xs: 4, md: '4%' } }}>
            {/* Features Section - Left side */}
            <Box sx={{ width: { xs: '100%', md: '48%' } }}>
              <Paper elevation={3} sx={{ borderRadius: 3, background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark || '#1a3526'} 100%)`, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' } }}>
                {[
                  { title: "High Yield", description: "Offers exceptional yield for farmers and excellent oil extraction ratio for processors, maximizing production efficiency and profitability." },
                  { title: "Consistent Size", description: "Uniform kernel size ensures even roasting, consistent flavor development, and reliable processing performance in commercial applications." },
                  { title: "Industry Preferred", description: "The top choice for food processors worldwide due to its dependable quality, taste profile, and excellent handling characteristics." }
                ].map((feature, index, array) => (
                  <Box key={index} sx={{ p: 3, borderBottom: index !== array.length - 1 ? `1px solid rgba(255,255,255,0.1)` : 'none' }}>
                    <Typography variant="h6" component="h3" fontFamily="Lato, sans-serif" fontWeight="bold" sx={{ color: theme.palette.customColors.darkGold, mb: 1.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{feature.title}</Typography>
                    <Typography variant="body2" fontFamily="Inter, sans-serif" sx={{ color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{feature.description}</Typography>
                  </Box>
                ))}
              </Paper>
            </Box>
            {/* Image Carousel - Right side */}
            <Box sx={{ width: { xs: '100%', md: '48%' }, height: { xs: '300px', md: '400px' } }}>
              <KeyFeaturesCarousel />
            </Box>
          </Box>
        </Container>
        {/* Additional Information Section */}
        <Container component="section" aria-label="Why Choose Our Products" maxWidth="lg" sx={{ my: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
              <Typography variant="h3" component="h2" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, mb: 4, textAlign: { xs: 'left', md: 'center' }, fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' } }}>Why Choose Our Java/Spanish Peanuts?</Typography>
              <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Food industries requiring consistent size and flavor for premium products and international applications choose our Java/spanish peanuts for reliable quality.</Typography>
              <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>As leading wholesale peanuts suppliers in India, we offer competitive groundnut prices per ton for large-scale buyers looking to buy groundnuts in bulk. We specialize in supplying to peanut importers worldwide, groundnut companies in Andhra Pradesh, and peanut exporters from India to UAE, Europe, and beyond.</Typography>
              <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Our focus is always on delivering best quality groundnuts from India with strict attention to hygienic packaging and lab-tested groundnuts that are safe, healthy, and fresh. Whether you need edible peanuts for food industries or bulk groundnuts for snack manufacturing, Balaji Exports is your most reliable partner in the peanut export business.</Typography>
              <Typography variant="body1" component="p" sx={{ fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Partner with Balaji Exports, the top peanut export company in India, and source the highest quality Java/spanish peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.</Typography>
              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button variant="contained" component={Link} href="/contact" size="large" aria-label="Request a quotation for Java/Spanish Peanuts" sx={{ bgcolor: theme.palette.primary.main, fontFamily: 'Inter, sans-serif', px: { xs: 4, md: 5 }, py: { xs: 1, md: 1.5 }, fontSize: { xs: 15, md: 16 }, fontWeight: 600, boxShadow: '0 4px 14px rgba(0,0,0,0.2)', borderRadius: '6px', transition: 'all 0.3s ease', '&:hover': { bgcolor: theme.palette.secondary.main, transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' } }}>Request Quotation</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Product Carousel */}
        <ProductCarousel currentProductPath="/products/spanish-peanuts" />

        {/* Breadcrumbs */}
        <Container sx={{ mb: 4, mt: 8 }}>
          <nav aria-label="breadcrumb">
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
              <span style={{ color: theme.palette.primary.main }}>Java/Spanish Peanuts</span>
            </Typography>
          </nav>
        </Container>
      </Box>
    );
  };
  
  export default SpanishPeanutPage;