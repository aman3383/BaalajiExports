'use client';

import React from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from '@mui/icons-material/Check';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning';
import ProductIntroTiles from '@/components/ProductIntroTiles';
import ProductCarousel from '@/components/ProductCarousel';
import KeyFeaturesCarousel from '@/components/KeyFeaturesCarousel';
import CertificationsCarousel from '@/components/CertificationsCarousel';
import peanutButterIcon from "@/assets/images/PeanutButter.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
import boldPeanutsImg from "@/assets/images/productImg/boldPeanuts.webp";

const ProductSpecifications = () => {
  const theme = useTheme();
  const specSections = {
    qualities: {
      title: "Product Qualities",
      icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
      items: [
        { name: "Type", value: "Natural / Raw / Blanched / Roasted / Split"},
        { name: "Origin", value: "Rajasthan, Gujarat, Andhra Pradesh, India" },
        { name: "Varieties Available", value: "38/42, 40/50, 50/60, 60/70, 70/80, 80/90 counts (kernels per ounce)" },
        { name: "Oil Content", value: "48%–52%" }
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
        { name: "Packaging", value: "25kg, 50kg PP bags, jute bags,  vacuum packing or customizable"},
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
          Our bold peanuts meet the highest quality standards for international markets
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

const BoldPeanutContent = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 4 }} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
            <Box sx={{ 
              height: { xs: 300, sm: 400, md: 450 }, 
              borderRadius: 4, 
              overflow: 'hidden', 
              position: 'relative', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              '&:hover img': {
                transform: 'scale(1.1)',
              }
            }}>
              <Image
                src={boldPeanutsImg}
                alt="Bold Peanuts"
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out'
                }}
                priority
              />
            </Box>
            <ProductIntroTiles />
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
            <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }, position: 'relative', pb: 2, '&:after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, borderRadius: '2px' } }}>Bold Peanuts – India's Finest Groundnuts</Typography>
            <Typography variant="body1" sx={{ my: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}><span style={{ fontWeight: 700 }}> Bold Peanuts – Premium Quality Indian Groundnuts for Export </span> At Balaji Exports, we are proud to offer the finest quality Bold Peanuts, sourced directly from the rich agricultural regions of Rajasthan, Gujarat, and Tamil Nadu, India. </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>With over 65 years of farming excellence and two decades in the groundnut export business, we have mastered the art of delivering Indian groundnuts for international markets.</Typography>
            <Typography variant="body1" sx={{ mb: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>Our organic groundnuts India are grown under natural conditions, ensuring non-GMO, pesticide-free groundnuts that meet the highest FSSAI, HACCP, and ISO certified standards.</Typography>
            <Box sx={{ mb: 3, maxWidth: '500px' }}>
              <CertificationsCarousel height="60px" showDots={false} />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>Bold groundnuts are known worldwide for their large oval kernels, reddish-brown skin, high oil content, and strong nutty flavor, making them the preferred choice for peanut butter manufacturers, snack food producers, oil extraction industries, and health food companies. As trusted peanut exporters from India, we guarantee top-quality peanuts that meet the needs of buyers in the UAE, Europe, Africa, Russia, and the USA.</Typography>
      </Container>
      <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <ProductSpecifications />
      </Container>
      <Box component="section" aria-label="Product Applications" sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, color: theme.palette.customColors.darkGold, mt: { xs: 8, md: 12 }, py: { xs: 6, md: 8 }, borderRadius: { md: '100px 0 100px 0' }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10.5%), radial-gradient(circle, #ffffff 10%, transparent 10.5%)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }} />
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, mb: { xs: 3, md: 4 }, position: 'relative', display: 'inline-block', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, width: '100%', color: theme.palette.customColors.darkGold, '&:after': { content: '""', position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', backgroundColor: theme.palette.customColors.darkGold, borderRadius: '2px' } }}>Applications</Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', lineHeight: 1.8 }}>Bold peanuts are highly versatile with exceptional nutritional properties and consistent quality, making them suitable for various industrial and commercial applications. Our premium peanuts are specifically cultivated to meet the demanding requirements of the following industries:</Typography>
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
          <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.05rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', fontStyle: 'italic', p: 2, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }}>Our bold peanuts' consistent quality ensures reliable performance across all these applications, making them a preferred choice for businesses requiring premium ingredients.</Typography>
        </Container>
      </Box>

      {/* Key Features Section */}
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
                { title: "Large Size", description: "Bold peanuts have a distinctive jumbo size, making them visually appealing and ideal for coated confectionery products" },
                { title: "Nutty flavour", description: "They offer a deep, nutty flavor that enhances various culinary applications, including peanut butter and coated products. " },
                { title: "Long Shelf Life", description: "Bold peanuts with a high oleic ratio are heart-friendly and typically have a longer shelf life than normal peanuts. " },
                { title: "Quality Certifications", description: "FSSAI, HACCP, and ISO certified for international standards" }
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

      {/* Why Choose Our Bold Peanuts Section */}
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
              Why Choose Our Bold Peanuts?
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
              Food industries requiring premium quality peanuts with consistent size and flavor choose our Bold peanuts for their superior characteristics and reliable quality.
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
              As leading wholesale peanuts suppliers in India, we offer competitive groundnut prices per ton for large-scale buyers looking to buy groundnuts in bulk. We specialize in supplying to peanut importers worldwide, groundnut companies in Rajasthan, Gujarat, and Andhra Pradesh, and peanut exporters from India to UAE, Europe, and beyond.
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality Bold peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                variant="contained"
                component={Link}
                href="/contact"
                size="large"
                aria-label="Request a quotation for Bold Peanuts"
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

      {/* Product Carousel */}
      <ProductCarousel currentProductPath="/products/bold-peanuts" />

      <Container sx={{ mb: 4, mt: 8 }}>
        <nav aria-label="breadcrumb">
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
            <span style={{ color: theme.palette.primary.main }}>Bold Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

export default BoldPeanutContent; 