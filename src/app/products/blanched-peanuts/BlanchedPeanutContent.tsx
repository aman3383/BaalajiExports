'use client';

import React from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WarningIcon from '@mui/icons-material/Warning';

// Import product image
import redSkinProductImage from '@/assets/images/productImg/RedSkinProduct.webp';

import peanutButterIcon from "@/assets/images/PeanutButter.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
import CertificationsCarousel from '@/components/CertificationsCarousel';

import ProductIntroTiles from '@/components/ProductIntroTiles';
import ProductCarousel from '@/components/ProductCarousel';
import KeyFeaturesCarousel from '@/components/KeyFeaturesCarousel';

// Product Specifications Component
const ProductSpecifications: React.FC = () => {
  const theme = useTheme();
  const specSections = {
    qualities: {
      title: "Product Qualities",
      icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Size", value: "35/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100 counts (kernels per ounce)" },
        { name: "Color", value: "Light pink skin" },
        { name: "Taste", value: "Sweet, nutty, and fresh" },
        { name: "Oil Content", value: "48% to 52%" }
      ]
    },
    
    quality: {
      title: "Quality Parameters",
      icon: <BarChartIcon sx={{ fontSize: 20 }} />,
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
      icon: <LocalShippingIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Packaging", value: "25kg, 50kg, PP bags, jute bags, vacuum packs, or customizable" },
        { name: "Shelf Life", value: "12 months" },
        { name: "Storage", value: "Cool, dry place away from direct sunlight" }
      ]
    },
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
          Our red skin peanuts meet the highest quality standards for international markets
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
                <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', py: 1.2, borderBottom: idx !== section.items.length - 1 ? 1 : 0, borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 0 }}>
                    <Box sx={{ width: { xs: '100%', sm: '40%' }, fontWeight: 700, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 1, color: theme.palette.customColors.darkGold, fontSize: '1.2rem' }}>{item.name === "Packaging" ? "📦" : "🥜"}</Typography>
                      {item.name}:
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '60%' }, fontWeight: 500, mt: { xs: 0.5, sm: 0 }, pl: { xs: 5, sm: 0 }, color: theme.palette.secondary.main }}>{item.value}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};



const RedSkinPeanutContent: React.FC = () => {
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
                src={redSkinProductImage}
                alt="Premium Red Skin Peanuts"
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
            <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }, position: 'relative', pb: 2, '&:after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, borderRadius: '2px' } }}>Premium Export Quality Red Skin Peanuts – Nutritious, Flavorful & Versatile</Typography>
            <Typography variant="body1" sx={{ my: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}><span style={{ fontWeight: 700 }}> Red Skin Peanuts are a premium variety of groundnuts, </span>These are widely appreciated for their distinctive reddish-brown skin, crunchy texture, and rich, nutty flavor. They are a powerhouse of nutrition, packed with protein, healthy fats, fiber, vitamins, and minerals, making them a popular choice for both direct consumption and industrial processing.</Typography>
            <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>These peanuts are commonly used in a variety of applications, from roasted snack foods to peanut butter production, confectionery items, and even oil extraction. Their high oil content and natural taste make them ideal for culinary use and value-added food products. Additionally, after oil extraction, the peanut meal serves as a protein-rich component for animal feed.</Typography>
            <Box sx={{ mb: 3, maxWidth: '500px', mx: 'auto' }}>
              <CertificationsCarousel height="60px" showDots={false} />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>Our Red Skin Peanuts are carefully sourced from selected farms to ensure the highest quality. They are processed under strict hygiene standards to retain their natural flavor, color, and nutritional value. With low moisture levels and minimal foreign matter, they offer extended shelf life and are safe for global export markets. Whether you are looking for premium peanuts for roasting, ingredient use, or oil extraction, our Red Skin Peanuts are the perfect choice to meet your needs with quality and consistency.</Typography>
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
          <Typography variant="body1" sx={{ mt: 5, mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', lineHeight: 1.8 }}>Red Skin peanuts are highly versatile with exceptional nutritional properties and consistent quality, making them suitable for various industrial and commercial applications. Our premium peanuts are specifically cultivated to meet the demanding requirements of the following industries:</Typography>
          <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4, px: 3 }}>
            {[
              { title: "Snacks", icon: "🥜", desc: "Roasted, salted, or boiled for healthy snacking." },
              { title: "Confectionery", icon: "🍫", desc: "Used in chocolates, sweets, and energy bars." },
              { title: "Peanut Butter", icon: <Image src={peanutButterIcon} alt="Peanut Butter" width={28} height={28} /> , desc: "Essential for rich, creamy peanut butter production." },
              { title: "Culinary Uses", icon: "🍲", desc: "Adds a crunchy, flavorful touch to dishes and salads." },
              { title: "Oil Extraction", icon: <Image src={groundnutOilIcon} alt="Groundnut Oil" width={28} height={28} /> , desc: "Yields high-quality peanut oil." },
              { title: "Animal Feed", icon: "🐄", desc: "Peanut meal after oil extraction serves as a protein-rich feed." }
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 3.5, alignItems: 'flex-start' }}>
                <Box sx={{ mr: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, flexShrink: 0 }}>
                  {typeof item.icon === 'string' ? (
                    <Typography variant="h5" component="span" sx={{ fontSize: '1.8rem', lineHeight: 1, color: theme.palette.customColors.darkGold }}>{item.icon}</Typography>
                  ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</Box>
                  )}
                </Box>
                <Box sx={{ pt: 0.5 }}>
                  <Typography variant="h6" component="h3" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 0.5, color: theme.palette.customColors.darkGold, lineHeight: 1.2 }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.9rem', md: '1rem' }, color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.05rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', fontStyle: 'italic', p: 2, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }}>Our red skin peanuts' consistent quality ensures reliable performance across all these applications, making them a preferred choice for businesses requiring premium ingredients.</Typography>
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
                { title: "Nutrient-Dense & High Oil Content", description: "Packed with protein, healthy fats, and 44–50% oil—ideal for nutrition and oil extraction." },
                { title: "Premium Quality & Hygiene", description: "Uniform reddish-brown skin, low moisture (≤7%), and aflatoxin-safe—processed under strict quality controls." },
                { title: "Versatile Applications", description: "Perfect for snacks, peanut butter, oil extraction, and animal feed." },
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
            <Typography variant="h3" component="h2" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, mb: 4, textAlign: { xs: 'left', md: 'center' }, fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' } }}>Why Choose Our Red Skin Peanuts?</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Whether you are looking to buy groundnuts in bulk, require peanut exporters from India to Europe, or source bulk peanuts for sale for the Middle East market, Balaji Exports is your most reliable partner.</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Our wholesale peanuts suppliers India offer competitive groundnut price per ton with flexible shipping options.</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Our premium peanuts exporters ensure that every shipment meets strict quality checks, hygienic processing, and safe packaging, delivering only the best to your destination</Typography>
            <Typography variant="body1" component="p" sx={{ fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Partner with Balaji Exports, the top peanut export company in India, and source the highest quality red skin peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.</Typography>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button variant="contained" component={Link} href="/contact" size="large" aria-label="Request a quotation for Red Skin Peanuts" sx={{ bgcolor: theme.palette.primary.main, fontFamily: 'Inter, sans-serif', px: { xs: 4, md: 5 }, py: { xs: 1, md: 1.5 }, fontSize: { xs: 15, md: 16 }, fontWeight: 600, boxShadow: '0 4px 14px rgba(0,0,0,0.2)', borderRadius: '6px', transition: 'all 0.3s ease', '&:hover': { bgcolor: theme.palette.secondary.main, transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' } }}>Request Quotation</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Product Carousel Section */}
      <Container component="section" aria-label="Other Products" maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <ProductCarousel currentProductPath="/products/red-skin-peanuts" />
      </Container>
      {/* Breadcrumbs */}
      <Container sx={{ mb: 4, mt: 8 }}>
        <nav aria-label="breadcrumb">
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
            <span style={{ color: theme.palette.primary.main }}>Red Skin Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

export default RedSkinPeanutContent; 