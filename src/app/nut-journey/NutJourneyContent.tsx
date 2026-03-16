"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Box, Typography, IconButton, Container, Button, Chip, ThemeProvider, Fade, CircularProgress } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import theme from '@/assets/styles/theme';
import type { StaticImageData } from "next/image";
import Image from 'next/image';


// Import images
import F_Step1 from "@/assets/images/Farming/F_Step1.webp";
import F_Step2 from "@/assets/images/Farming/F_Step2.webp";
import F_Step3 from "@/assets/images/Farming/F_Step3.webp";
import F_Step4 from "@/assets/images/Farming/F_Step4.webp";
import F_Step5 from "@/assets/images/Farming/F_Step5.webp";
import F_Step6 from "@/assets/images/Farming/F_Step6.webp";
import F_Step7 from "@/assets/images/Farming/F_Step7.webp";
import F_Step8 from "@/assets/images/Farming/F_Step8.webp";
import F_Step9 from "@/assets/images/Farming/F_Step9.webp";

import M_Step1 from "@/assets/images/Manufacturing/M_Step1.webp";
import M_Step2 from "@/assets/images/Manufacturing/M_Step2.webp";
import M_Step3 from "@/assets/images/Manufacturing/M_Step3.webp";
import M_Step4 from "@/assets/images/Manufacturing/M_Step4.webp";
import M_Step5 from "@/assets/images/Manufacturing/M_Step5.webp";
import M_Step6 from "@/assets/images/Manufacturing/M_Step6.webp";
import M_Step7 from "@/assets/images/Manufacturing/M_Step7.webp";
import M_Step8 from "@/assets/images/Manufacturing/M_Step8.webp";
import M_Step9 from "@/assets/images/Manufacturing/M_Step9.webp";

// Import additional type images
import withShell from "@/assets/images/Types/withShell.webp";
import kernel from "@/assets/images/Types/kernal.webp";
import blanched from "@/assets/images/Types/blanched.webp";
import roasted from "@/assets/images/Types/roasted.webp";
import flourImg from "@/assets/images/Types/flour.webp";

// Custom window width hook
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowWidth;
}

// SEO component with useEffect cleanup
const SEO = ({ title, description }: { title: string; description: string }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const originalTitle = document.title;
      document.title = title;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      let createdMetaDescription = false;
      
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        (metaDescription as HTMLMetaElement).name = 'description';
        document.head.appendChild(metaDescription);
        createdMetaDescription = true;
      }
      
      const originalContent = (metaDescription as HTMLMetaElement).content;
      (metaDescription as HTMLMetaElement).content = description;
      
      return () => {
        document.title = originalTitle;
        if (createdMetaDescription && metaDescription) {
          metaDescription.remove();
        } else if (metaDescription) {
          (metaDescription as HTMLMetaElement).content = originalContent;
        }
      };
    }
  }, [title, description]);
  
  return null;
};

// Add interfaces at the top after imports
interface Step {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  facts: string[];
  organic?: boolean;
}

interface ProcessViewerProps {
  steps: Step[];
  title: string;
  description: string;
  badge?: string; // Make badge optional
}

const FARMING_STEPS = [
  { title: "1. Land Preparation", subtitle: "Setting the Foundation", description: "Peanuts need warm weather and begin growing when temperatures consistently stay above 25°C (77°F). We carefully till the land 2-3 times to loosen the soil and remove weeds, preparing well-drained, sandy loam soil for optimal growth.", imageUrl: F_Step1, imageAlt: "Land preparation for peanut farming", facts: ["Temperature requirement: Above 25°C (77°F)", "Soil preference: Well-drained sandy loam", "Tilling frequency: 2-3 times for optimal preparation"], organic: true },
  { title: "2. Organic Soil Enrichment", subtitle: "Natural Fertilization", description: "Instead of chemical fertilizers, we use compost, vermicompost, and well-rotted cow dung to enrich the soil naturally. This organic approach maintains soil health and produces nutrient-rich peanuts without synthetic chemicals.", imageUrl: F_Step2, imageAlt: "Organic soil enrichment process", facts: ["100% chemical-free fertilization", "Natural composting process", "Maintains long-term soil health"], organic: true },
  { title: "3. Seed Selection", subtitle: "Quality Genetics", description: "We choose high-quality, untreated seeds from healthy previous harvests. Balaji Exports ensures seeds are free from chemical treatment, using native or non-GMO varieties suited to the local climate.", imageUrl: F_Step3, imageAlt: "Peanut seed selection", facts: ["Native or non-GMO varieties", "Chemical-free seed selection", "Disease-resistant varieties"], organic: true },
  { title: "4. Sowing", subtitle: "Planting with Precision", description: "Seeds are planted in rows with proper spacing to allow optimal growth. We plant seeds 4-6 cm deep and about 15-20 cm apart. Bio-fertilizers like Rhizobium cultures are used to enhance natural nitrogen fixation.", imageUrl: F_Step4, imageAlt: "Peanut sowing process", facts: ["Planting depth: 4-6 cm", "Spacing: 15-20 cm apart", "Rhizobium inoculation for nitrogen fixation"], organic: true },
  { title: "5. Irrigation", subtitle: "Water Management", description: "Groundnuts need moderate water management. We irrigate based on rainfall patterns and soil moisture levels, carefully avoiding overwatering which can lead to fungal diseases.", imageUrl: F_Step5, imageAlt: "Peanut irrigation system", facts: ["Moisture-based irrigation schedule", "Prevents fungal diseases", "Water conservation practices"], organic: true },
  { title: "6. Organic Pest Management", subtitle: "Natural Protection", description: "We follow strict organic practices with no synthetic pesticides. Our natural pest control includes neem oil spray, cow urine solutions, and trap crops to distract pests while maintaining ecological balance.", imageUrl: F_Step6, imageAlt: "Organic pest management", facts: ["Neem oil-based treatments", "Trap crops for pest diversion", "Zero synthetic pesticides"], organic: true },
  { title: "7. Flowering and Pegging", subtitle: "Unique Growth Process", description: "Peanuts have a unique growth pattern - they flower above ground, but the pegs (stems from flowers) grow down into the soil where pods form. We ensure soil remains loose and soft for proper peg penetration.", imageUrl: F_Step7, imageAlt: "Peanut flowering and pegging", facts: ["Above-ground flowering", "Underground pod formation", "Critical soil loosening stage"], organic: true },
  { title: "8. Harvesting", subtitle: "Perfect Timing", description: "Harvesting occurs 90-120 days after sowing, depending on the variety. We check maturity by inspecting pods from sample plants. The entire plant is lifted and sun-dried in the field for several days.", imageUrl: F_Step8, imageAlt: "Peanut harvesting", facts: ["Harvest period: 90-120 days post-sowing", "Maturity testing on sample plants", "Field sun-drying process"], organic: true },
  { title: "9. Post-Harvest Processing", subtitle: "Preparation for Market", description: "Once dry, pods are separated from plants, cleaned, and sun-dried again. Storage is in jute sacks in dry, well-ventilated spaces. All processes follow organic certification standards and maintain food-grade hygiene for export quality.", imageUrl: F_Step9, imageAlt: "Post-harvest processing", facts: ["Organic certification compliance", "Food-grade hygiene standards", "Proper ventilation storage"], organic: true }
];

const PROCESSING_STEPS = [
  { title: "1. Reception and Preliminary Inspection", subtitle: "First Quality Check", description: "Peanuts arrive at our facility in large bags or in bulk. We conduct a visual inspection for damage, mold, and foreign materials. Moisture content is checked (ideal is below 10%) to prevent spoilage during storage.", imageUrl: M_Step1, imageAlt: "Peanut reception and inspection", facts: ["Optimal moisture content: Below 10%", "Initial visual inspection removes approximately 3-5% of incoming peanuts", "Temperature controlled environment at 20-22°C"] },
  { title: "2. Cleaning", subtitle: "Removing Impurities", description: "Peanuts pass through advanced cleaning machines that remove dirt, stones, leaves, and broken shells. Magnetic separators are used to remove metal particles mixed in during harvesting.", imageUrl: M_Step2, imageAlt: "Peanut cleaning process", facts: ["Multi-stage cleaning process", "Air classification removes 99% of dust and light particles", "Magnetic cleaning removes 100% of metal contaminants"] },
  { title: "3. Shelling", subtitle: "Extracting the Kernels", description: "Unshelled peanuts are sent through shelling machines that crack the shells without harming the kernels. Post-shelling, we separate whole kernels, split kernels, and broken pieces. Air classifiers are used to separate lighter shells from the heavier kernels.", imageUrl: M_Step3, imageAlt: "Peanut shelling process", facts: ["Capacity: 2 tons per hour", "Average yield: 70-75% kernels by weight", "Shell byproducts used for animal feed and mulch"] },
  { title: "4. Grading and Sorting", subtitle: "Classification by Quality", description: "Peanuts are graded based on size, color, and quality. Machine grading is followed by manual sorting to remove defective peanuts and discolored or damaged pieces. Grading ensures product consistency, essential for exporters.", imageUrl: M_Step4, imageAlt: "Peanut grading and sorting", facts: ["Electronic color sorters with 98% accuracy", "Four primary grades: Premium, Grade A, Standard, Industrial", "Size classification from 38/42 to 70/80 count per ounce"] },
  { title: "5. Blanching", subtitle: "Optional Skin Removal", description: "Required by some customers for skinless peanuts. Process involves light heating to loosen the peanut skins, which are then removed using rollers or air blowers. Post-blanching, another round of sorting ensures quality.", imageUrl: M_Step5, imageAlt: "Peanut blanching process", facts: ["Heat treatment: 280°F for 20 minutes", "Skin removal efficiency: 95-98%", "Popular for confectionery applications"] },
  { title: "6. Roasting", subtitle: "Enhancing Flavor", description: "For roasted peanut products, dry roasting ovens or oil roasters are used with precisely controlled temperature and timing. Roasting enhances flavor and aroma.", imageUrl: M_Step6, imageAlt: "Peanut roasting process", facts: ["Dry roasting: 320-330°F for 40-60 minutes", "Oil roasting: 300-310°F for 3-5 minutes", "Moisture reduction to 1.5% for extended shelf life"] },
  { title: "7. Quality Control and Testing", subtitle: "Safety Assurance", description: "We conduct multiple quality checks including aflatoxin testing (for mold toxins), moisture testing, and visual and taste inspections. Especially strict controls are followed for export markets like Europe and Japan.", imageUrl: M_Step7, imageAlt: "Peanut quality control", facts: ["HACCP certified processes", "Aflatoxin tolerance: <4 ppb (EU standards)", "Sample testing: 1 sample per 2 metric tons"] },
  { title: "8. Packaging", subtitle: "Preservation and Branding", description: "Packaging options include jute bags (for raw peanuts), vacuum-sealed bags (for blanched/roasted peanuts), and food-grade bulk containers (for wholesale buyers). Labels include batch numbers, grade, and origin details. Proper packaging preserves freshness and prevents contamination.", imageUrl: M_Step8, imageAlt: "Peanut packaging process", facts: ["Nitrogen flushing extends shelf life by 40%", "Packaging options: 25kg, 50kg, and bulk totes", "All packaging materials are food-grade certified"] },
  { title: "9. Storage and Dispatch", subtitle: "Ready for Market", description: "Finished products are stored in cool, dry warehouses. FIFO (First-In, First-Out) system ensures older stock is dispatched first. Shipments are organized based on customer and export requirements.", imageUrl: M_Step9, imageAlt: "Peanut storage and dispatch", facts: ["Climate controlled warehouse at 18-20°C", "Relative humidity maintained at 60-65%", "Average inventory turnover: 30 days"] }
];

// Add this utility function near the top of the file (after imports):
const getImageSrc = (img: string | StaticImageData | undefined) => typeof img === 'string' ? img : img?.src;

// ProcessViewer component
const ProcessViewer: React.FC<ProcessViewerProps> = ({ steps, title, description, badge }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;
  const currentStep = useMemo(() => steps[activeStep], [steps, activeStep]);

  // Auto-play functionality for farming and processing steps
  useEffect(() => {
    if ((title === "Peanut Farming Process" || title === "Peanut Processing System") && !isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  }, [title]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying && (title === "Peanut Farming Process" || title === "Peanut Processing System")) {
      interval = setInterval(() => {
        setActiveStep((prevStep) => {
          if (prevStep < steps.length - 1) {
            return prevStep + 1;
          } else {
            return 0;
          }
        });
      }, 3000); // Change step every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, title, steps.length]);

  const goToPreviousStep = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      setActiveStep(steps.length - 1);
    }
  }, [activeStep, steps.length]);

  const goToNextStep = useCallback(() => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(0);
    }
  }, [activeStep, steps.length]);

  const goToStep = useCallback((stepIndex: number) => {
    setActiveStep(stepIndex);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  const imageContainerStyle = {
    width: '100%',
    height: { xs: '300px', sm: '400px', md: '450px' },
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(38, 77, 54, 0.03)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    p: 0
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    opacity: 1,
    transform: 'scale(1)',
    '&:hover': { transform: 'scale(1.02)' }
  };

  const prevButtonStyle = {
    position: 'absolute',
    left: { xs: -16, sm: -24 },
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    bgcolor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
    boxShadow: 2,
    color: theme.palette.primary.main
  };

  const nextButtonStyle = {
    position: 'absolute',
    right: { xs: -16, sm: -24 },
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    bgcolor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
    boxShadow: 2,
    color: theme.palette.primary.main
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Fade in={true} timeout={500}>
          <div>
            <Typography variant="h3" sx={{ color: theme.palette.primary.main, fontSize: isMobile ? '1.5rem' : '2rem', mb: 1 }}>{title}</Typography>
            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, fontSize: isMobile ? '1rem' : '1.25rem', mb: 2 }}>{description}</Typography>
            {badge && <Chip label={badge} sx={{ bgcolor: theme.palette.customColors.accentGreen, color: 'white', fontWeight: 'bold' }} />}
          </div>
        </Fade>
      </Box>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Step {activeStep + 1} of {steps.length}</Typography>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <IconButton 
          onClick={goToPreviousStep} 
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          sx={prevButtonStyle} 
          aria-label="Previous step"
        >
          <ChevronLeft size={24} />
        </IconButton>
        <IconButton 
          onClick={goToNextStep} 
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          sx={nextButtonStyle} 
          aria-label="Next step"
        >
          <ChevronRight size={24} />
        </IconButton>
        <Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: '4%' }, alignItems: { xs: 'stretch', md: 'flex-start' } }}>
              <Box sx={{ width: { xs: '100%', md: '48%' }, position: 'relative' }}>
                <Box sx={{ 
                  ...imageContainerStyle, 
                  transition: 'opacity 0.3s ease-in-out', 
                  opacity: 1,
                  position: 'relative'
                }}>
                  <Box 
                    component="img" 
                    key={`step-${activeStep}`}
                    src={getImageSrc(currentStep.imageUrl)} 
                    alt={currentStep.imageAlt || "Process step image"} 
                    sx={{
                      ...imageStyle,
                      opacity: 1,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                    onError={(e) => {
                      // If image fails to load, show a placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = document.createElement('div');
                      placeholder.style.cssText = `
                        width: 100%;
                        height: 100%;
                        background-color: rgba(38, 77, 54, 0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #265a36;
                        font-size: 1.2rem;
                        border-radius: 12px;
                      `;
                      placeholder.textContent = 'Image not available';
                      target.parentNode?.appendChild(placeholder);
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ width: { xs: '100%', md: '48%' }, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, mb: 1, fontFamily: 'Lato, sans-serif', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>{currentStep.title}</Typography>
                <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 'bold' }}>{currentStep.subtitle}</Typography>
                <Typography variant="body1" sx={{ color: theme.palette.secondary.main, mb: 3, fontSize: { xs: '0.9rem', sm: '1rem' }, lineHeight: 1.6 }}>{currentStep.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold', mb: 1 }}>Key Facts:</Typography>
                  {currentStep.facts.map((fact, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.customColors.accentGreen, mr: 1, flexShrink: 0 }} />
                      <Typography variant="body2" color={theme.palette.primary.main} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>{fact}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, flexWrap: 'wrap', gap: 1 }}>
        {steps.map((_, index) => (
          <Box 
            key={index} 
            onClick={() => goToStep(index)} 
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
            sx={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%', 
              bgcolor: activeStep === index ? theme.palette.primary.main : theme.palette.customColors.lightGold, 
              mx: 0.5, 
              cursor: 'pointer',
              opacity: 1,
              transition: 'all 0.3s ease', 
              '&:hover': { 
                transform: 'scale(1.2)', 
                bgcolor: activeStep === index ? theme.palette.primary.main : theme.palette.customColors.accentGreen 
              } 
            }} 
            role="button" 
            aria-label={`Go to step ${index + 1}`} 
            tabIndex={0} 
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button 
          variant="outlined" 
          onClick={goToPreviousStep} 
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          sx={{ 
            color: theme.palette.primary.main, 
            borderColor: theme.palette.primary.main, 
            minWidth: 120, 
            '&:hover': { 
              borderColor: theme.palette.secondary.main, 
              backgroundColor: 'rgba(58, 107, 61, 0.04)' 
            } 
          }}
        >
          Previous
        </Button>
        <Button 
          variant="contained" 
          onClick={goToNextStep} 
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          sx={{ 
            bgcolor: theme.palette.customColors.accentGreen, 
            minWidth: 120, 
            '&:hover': { 
              bgcolor: theme.palette.secondary.main 
            } 
          }}
        >
          Next
        </Button>

      </Box>
    </Box>
  );
};

const PeanutJourneyPage = () => {
  const [loading, setLoading] = useState(true);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;
  
  useEffect(() => {
    const timer = setTimeout(() => { 
      setLoading(false); 
    }, 600);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handle hash-based scrolling after page loads
  useEffect(() => {
    if (!loading && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        // Wait a bit for animations to complete
        const scrollTimer = setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 1200); // Wait for fade animations to complete (1000ms + buffer)
        
        return () => {
          clearTimeout(scrollTimer);
        };
      }
    }
  }, [loading]);
  const farmingViewer = useMemo(() => (
    <ProcessViewer steps={FARMING_STEPS} title="Peanut Farming Process" description="Sustainable cultivation from soil to harvest" />
  ), []);
  const processingViewer = useMemo(() => (
    <ProcessViewer steps={PROCESSING_STEPS} title="Peanut Processing System" description="Quality transformation from raw kernels to market-ready products" />
  ), []);
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: theme.palette.background.default }}>
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pt: 6, pb: 8, '& .MuiTypography-root': { fontFamily: 'Lato, sans-serif' }, '& .journey-content': { '& .MuiTypography-body1, & .MuiTypography-body2': { fontFamily: 'Inter, sans-serif' } } }}>
        <Container maxWidth="lg" className="journey-content">
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h1" sx={{ color: theme.palette.primary.main, fontSize: isMobile ? '2rem' : '2.5rem', mb: 2, fontFamily: 'inherit' }}>The Complete Peanut Journey</Typography>
              <Typography variant="h2" sx={{ color: theme.palette.secondary.main, fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 500, maxWidth: '800px', mx: 'auto', mb: 4, fontFamily: 'inherit' }}>From farming to premium processing - ensuring quality at every step</Typography>
            </Box>
          </Fade>
          <Box id="farming-section">
            {farmingViewer}
            <Fade in={true} timeout={1000}>
              <Box sx={{ mt: 4, mb: 8, textAlign: 'center', p: 3, bgcolor: 'rgba(38, 77, 54, 0.08)', borderRadius: 2 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2 }}>Balaji Exports - Organic and Trusted</Typography>
                <Typography variant="body1" sx={{ color: theme.palette.primary.main, maxWidth: '800px', mx: 'auto' }}>
                  Balaji Exports has built a reputation over the years for growing peanuts organically, without the use of harmful chemicals. We use natural soil enrichers, eco-friendly pest control methods, and sustainable farming techniques. This not only protects consumer health but also nurtures the soil for future generations. Our groundnuts are chemical-free, rich in flavor and nutrition, and grown sustainably with respect for the environment.
                </Typography>
              </Box>
            </Fade>
          </Box>
          <Box sx={{ height: 2, bgcolor: theme.palette.primary.main, opacity: 0.3, width: '70%', mx: 'auto', my: 8 }} />
          <Box id="processing-section">
            {processingViewer}
            <Fade in={true} timeout={1000}>
              <Box sx={{ mt: 4, textAlign: 'center', p: 3, bgcolor: 'rgba(38, 77, 54, 0.08)', borderRadius: 2 }}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2 }}>Quality Assurance Throughout the Process</Typography>
                <Typography variant="body1" sx={{ color: theme.palette.primary.main, maxWidth: '800px', mx: 'auto' }}>
                  Our comprehensive 9-step process ensures that every peanut that leaves our facility meets the highest standards of quality and safety. From initial inspection to final packaging, we maintain strict controls to deliver premium products to our customers around the world.
                </Typography>
              </Box>
            </Fade>
          </Box>
          {/* In-Shell Peanuts Section */}
          <Box 
            id="in-shell-peanuts"
            sx={{
              scrollMarginTop: '100px', // Add space for fixed header
              mt: 8,
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: theme.palette.customColors.lightGold,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                zIndex: -1,
              }
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                color: theme.palette.primary.main,
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                  transform: 'scaleX(0.3)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              Understanding In-Shell Peanuts
            </Typography>
            
            {/* Text and Image Side-by-Side Layout */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: { xs: 3, md: 4 }, 
                mb: 6,
                alignItems: 'center',
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    position: 'relative',
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '4px',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.customColors.accentGreen}40)`,
                      borderRadius: '2px',
                    }
                  }}
                >
                  Peanuts with shell—also known as in-shell peanuts—are the raw form of peanuts harvested directly from the plant, with their natural outer shell intact. These shells are dry, textured pods that typically contain two kernels (the edible peanut seeds) inside.
                </Typography>
              </Box>

              {/* Image Section */}
              <Box 
                sx={{ 
                  flex: { xs: 1, md: 0.4 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '250px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <Image
                    src={withShell}
                    alt="In-shell peanuts showing natural pods with kernels inside"
                    width={250}
                    height={180}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4, 
              mb: 6,
              '& > *': {
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }
            }}>
              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"✨"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Key Characteristics
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li>Natural Protection: The shell protects peanuts from moisture and pests, extending shelf life.</li>
                  <li>Preferred for Roasting: Often used in whole-roast formats for snacking or street food markets.</li>
                  <li>Popular in Bulk Supply: Widely used in wholesale and industrial applications, especially in bird feed, oil extraction, and further processing.</li>
                </Box>
              </Box>

              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🔬"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Anatomy of a Peanut
                </Typography>

                <Box 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.5)',
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 0,
                      '& li': {
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        mb: 3,
                        lineHeight: 1.8,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateX(8px)',
                        }
                      }
                    }}
                  >
                    <li>
                      <Box sx={{ 
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                      }}>📦</Box>
                      <Box>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          color: theme.palette.primary.main,
                          fontSize: '1.1rem',
                          mb: 0.5
                        }}>Outer Shell</Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Fibrous, protective layer</Typography>
                      </Box>
                    </li>
                    <li>
                      <Box sx={{ 
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                      }}>🥜</Box>
                      <Box>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          color: theme.palette.primary.main,
                          fontSize: '1.1rem',
                          mb: 0.5
                        }}>Peanut Kernels</Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Usually 2 seeds</Typography>
                      </Box>
                    </li>
                    <li>
                      <Box sx={{ 
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                      }}>🌱</Box>
                      <Box>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          color: theme.palette.primary.main,
                          fontSize: '1.1rem',
                          mb: 0.5
                        }}>Embryo + Cotyledon</Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Nutrient-rich core of the seed</Typography>
                      </Box>
                    </li>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box 
              sx={{ 
                mt: 4,
                p: 4,
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.7)',
                border: `1px solid ${theme.palette.primary.main}15`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&::before': {
                    content: '"🌍"',
                    fontSize: '1.5rem',
                  }
                }}
              >
                In-Shell Peanuts in Trade
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: theme.palette.secondary.main,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '3px',
                    background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.customColors.accentGreen}40)`,
                    borderRadius: '2px',
                  }
                }}
              >
                In-shell peanuts are commonly traded internationally for both human consumption and industrial use. Indian in-shell peanuts, especially the Bold and Java varieties, are sought after for their size, oil content, and flavor profile.
              </Typography>
            </Box>
          </Box>

          {/* Peanut Kernel Section */}
          <Box 
            id="peanut-kernel"
            sx={{ 
              scrollMarginTop: '100px', // Add space for fixed header
              mt: 8,
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: theme.palette.customColors.lightGold,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '6px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                opacity: 0.8,
              }
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.primary.main,
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                  borderRadius: '2px',
                  transform: 'scaleX(0.3)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              What Is a Peanut Kernel?
            </Typography>

            {/* Text and Image Side-by-Side Layout */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: { xs: 3, md: 4 }, 
                mb: 6,
                alignItems: 'center',
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    position: 'relative',
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '4px',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.customColors.accentGreen}40)`,
                      borderRadius: '2px',
                    }
                  }}
                >
                  A peanut kernel is the edible seed found inside the shell of a peanut pod. After harvesting, when the outer shell is removed, what remains is the kernel—commonly recognized as the part used in culinary, snack, and industrial applications.
                </Typography>
              </Box>

              {/* Image Section */}
              <Box 
                sx={{ 
                  flex: { xs: 1, md: 0.4 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '250px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <Image
                    src={kernel}
                    alt="Peanut kernels showing the edible seeds without shells"
                    width={250}
                    height={180}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4, 
              mb: 6,
              '& > *': {
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }
            }}>
              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🔍"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Peanut Kernel Components
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li><strong>Skin (Testa):</strong> Thin outer coating, usually red or light brown.</li>
                  <li><strong>Cotyledons:</strong> The main fleshy part rich in protein and oil.</li>
                  <li><strong>Embryo:</strong> The growth point for new plants (tiny root/shoot inside the kernel).</li>
                </Box>
              </Box>

              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"📊"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  From Pod to Kernel
                </Typography>

                <Box 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.5)',
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 0,
                      '& li': {
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        mb: 3,
                        lineHeight: 1.8,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateX(8px)',
                        }
                      }
                    }}
                  >
                    <li>
                      <Box sx={{ 
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                      }}>🌰</Box>
                      <Box>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          color: theme.palette.primary.main,
                          fontSize: '1.1rem',
                          mb: 0.5
                        }}>Peanut Pod (In-shell)</Typography>
                      </Box>
                    </li>
                    <li>
                      <Box sx={{ 
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                      }}>🥜</Box>
                      <Box>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          color: theme.palette.primary.main,
                          fontSize: '1.1rem',
                          mb: 0.5
                        }}>Peanut Kernel (De-shelled, edible)</Typography>
                      </Box>
                    </li>
                    <li>
                      <Box sx={{ 
                        fontSize: '2rem',
                        color: theme.palette.primary.main,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                      }}>🔬</Box>
                      <Box>
                        <Typography sx={{ 
                          fontWeight: 600, 
                          color: theme.palette.primary.main,
                          fontSize: '1.1rem',
                          mb: 0.5
                        }}>Used for:</Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                          Snacking, oil extraction, peanut butter, flour, confectionery
                        </Typography>
                      </Box>
                    </li>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Blanched Peanuts Section */}
          <Box 
            id="peanut-blanched"
            sx={{ 
              scrollMarginTop: '100px', // Add space for fixed header
              mt: 8,
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: theme.palette.customColors.lightGold,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '6px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                opacity: 0.8,
              }
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.primary.main,
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                  borderRadius: '2px',
                  transform: 'scaleX(0.3)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              🥜 Blanched Peanuts: The Premium Choice for Global Food Processing
            </Typography>

            {/* Text and Image Side-by-Side Layout */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: { xs: 3, md: 4 }, 
                mb: 6,
                alignItems: 'center',
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    position: 'relative',
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '4px',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.customColors.accentGreen}40)`,
                      borderRadius: '2px',
                    }
                  }}
                >
                  Blanched peanuts are raw peanut kernels with the outer red skin (testa) removed, resulting in a smooth, ivory-white appearance. This makes them a preferred ingredient in international food processing industries where aesthetics, hygiene, and consistent taste matter.
                </Typography>
              </Box>

              {/* Image Section */}
              <Box 
                sx={{ 
                  flex: { xs: 1, md: 0.4 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '250px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <Image
                    src={blanched}
                    alt="Blanched peanuts showing smooth, ivory-white kernels with skin removed"
                    width={250}
                    height={180}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4, 
              mb: 6,
              '& > *': {
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }
            }}>
              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🔍"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  What Makes a Peanut "Blanched"?
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li>Shelled to remove the outer pod</li>
                  <li>Heated or water-treated to loosen the skin</li>
                  <li>Skin removed mechanically</li>
                  <li>Cleaned, graded, and inspected for export</li>
                </Box>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    mt: 3,
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}
                >
                  The result is a skinless, ready-to-use peanut kernel that fits seamlessly into industrial food lines.
                </Typography>
              </Box>

              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🌎"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Applications Across Global Industries
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"✅"',
                        position: 'absolute',
                        left: -25,
                      }
                    }
                  }}
                >
                  <li>Peanut butter production – smooth, skin-free input</li>
                  <li>Bakery and confectionery – cakes, cookies, sweets</li>
                  <li>Snack food industry – roasted/salted nuts, trail mixes</li>
                  <li>Health & protein bars – clean, high-protein filler</li>
                  <li>Asian and Middle Eastern cuisines – sauces, pastes</li>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              mb: 6,
              bgcolor: 'rgba(255,255,255,0.7)',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: `1px solid ${theme.palette.primary.main}15`,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              }
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&::before': {
                    content: '"📈"',
                    fontSize: '1.5rem',
                  }
                }}
              >
                Why Buyers Prefer Blanched Peanuts
              </Typography>

              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
                '& > div': {
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.5)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  }
                }
              }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>No red skin</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Neutral taste, no bitterness</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Visually clean</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Premium-grade look for retail packs</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Shelf-ready</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Eliminates in-house skinning</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Consistent sizes</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Ideal for automated food lines</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>High yield</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Less waste, more usable product</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              bgcolor: 'rgba(255,255,255,0.7)',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: `1px solid ${theme.palette.primary.main}15`,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              }
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&::before': {
                    content: '"🇮🇳"',
                    fontSize: '1.5rem',
                  }
                }}
              >
                India: A Trusted Source for Blanched Peanuts
              </Typography>

              <Box 
                component="ul" 
                sx={{ 
                  pl: 3,
                  '& li': {
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    mb: 2.5,
                    lineHeight: 1.8,
                    position: 'relative',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(8px)',
                    },
                    '&::before': {
                      content: '"•"',
                      color: theme.palette.primary.main,
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: -20,
                      fontSize: '1.2rem',
                    }
                  }
                }}
              >
                <li>Popular sizes: 38/42, 40/50, 50/60, 60/70</li>
                <li>High oil and protein content</li>
                <li>GMO-free, aflatoxin-safe batches</li>
                <li>Year-round availability for bulk orders</li>
                <li>Cost-effective vs U.S. and South American origins</li>
              </Box>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: theme.palette.secondary.main,
                  fontFamily: 'Inter, sans-serif',
                  mt: 3,
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                Our blanched peanuts are processed under BRC, HACCP, and ISO-certified facilities, ensuring top-grade hygiene and consistency for international buyers.
              </Typography>
            </Box>
          </Box>

          {/* Roasted then Blanched Peanuts Section */}
          <Box 
            id="peanut-roasted-then-blanched"
            sx={{ 
              scrollMarginTop: '100px', // Add space for fixed header
              mt: 8,
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: theme.palette.customColors.lightGold,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '6px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                opacity: 0.8,
              }
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.primary.main,
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                  borderRadius: '2px',
                  transform: 'scaleX(0.3)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              Roasted then Blanched Peanuts
            </Typography>

            {/* Text and Image Side-by-Side Layout */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: { xs: 3, md: 4 }, 
                mb: 6,
                alignItems: 'center',
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    position: 'relative',
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '4px',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.customColors.accentGreen}40)`,
                      borderRadius: '2px',
                    }
                  }}
                >
                  "Roasted then blanched" peanuts are peanuts that undergo two processing stages — first roasting, then blanching — to achieve a flavorful yet skinless, clean finish.
                </Typography>
              </Box>

              {/* Image Section */}
              <Box 
                sx={{ 
                  flex: { xs: 1, md: 0.4 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '250px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <Image
                    src={roasted}
                    alt="Roasted then blanched peanuts showing golden, skinless finish"
                    width={250}
                    height={180}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4, 
              mb: 6,
              '& > *': {
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }
            }}>
              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🔶"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Step 1: Roasting
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  Peanuts are dry roasted or oil roasted, depending on the desired flavor and texture. This process:
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li>Enhances the aroma and nutty flavor</li>
                  <li>Reduces moisture content, improving shelf life</li>
                  <li>Prepares the skin for easier removal</li>
                </Box>
              </Box>

              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🔶"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Step 2: Blanching (Post-Roast)
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  After roasting, the thin red skin becomes brittle and is mechanically removed through high-speed rollers or air-blasting machines.
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li>Results in a golden, skinless roasted peanut</li>
                  <li>Leaves behind a clean, smooth surface</li>
                  <li>Ideal for use in high-grade food processing</li>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              mb: 6,
              bgcolor: 'rgba(255,255,255,0.7)',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: `1px solid ${theme.palette.primary.main}15`,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              }
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&::before': {
                    content: '"✅"',
                    fontSize: '1.5rem',
                  }
                }}
              >
                Advantages of Roasted then Blanched Peanuts
              </Typography>

              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
                '& > div': {
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.5)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  }
                }
              }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Rich Flavor</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Roasting adds a deep, nutty taste</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Skin-Free Appearance</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Smooth, light-golden finish ideal for recipes</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Enhanced Shelf Stability</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>Low moisture content prevents spoilage</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Ready for Use in Premium Foods</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>No further cleaning or prep required</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4, 
              mb: 6,
              '& > *': {
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }
            }}>
              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🍫"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Ideal For
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li>Chocolate & candy bars</li>
                  <li>Premium peanut butter blends</li>
                  <li>Roasted peanut toppings in ice cream or granola</li>
                  <li>Nut-based energy snacks</li>
                </Box>
              </Box>

              <Box sx={{ 
                flex: 1,
                bgcolor: 'rgba(255,255,255,0.7)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: `1px solid ${theme.palette.primary.main}15`,
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&::before': {
                      content: '"🌍"',
                      fontSize: '1.5rem',
                    }
                  }}
                >
                  Export-Grade Quality
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  Indian exporters like MICBAC offer roasted then blanched peanuts using Bold 38/42 or TJ 50/60 grades, ensuring:
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 3,
                    '& li': {
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      mb: 2.5,
                      lineHeight: 1.8,
                      position: 'relative',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: -20,
                        fontSize: '1.2rem',
                      }
                    }
                  }}
                >
                  <li>Uniform roasting</li>
                  <li>Clean skin removal</li>
                  <li>Low aflatoxin, GMO-free</li>
                  <li>Vacuum-packed freshness</li>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Peanut Flour Section */}
          <Box 
            id="peanut-flour"
            sx={{ 
              scrollMarginTop: '100px', // Add space for fixed header
              mt: 8,
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: theme.palette.customColors.lightGold,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '6px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                opacity: 0.8,
              }
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.primary.main,
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.customColors.accentGreen})`,
                  borderRadius: '2px',
                  transform: 'scaleX(0.3)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              🌾 Peanut Flour: The Protein-Packed Alternative
            </Typography>

            {/* Text and Image Side-by-Side Layout */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: { xs: 3, md: 4 }, 
                mb: 6,
                alignItems: 'center',
              }}
            >
              {/* Text Section */}
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.secondary.main,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    position: 'relative',
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '4px',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}40, ${theme.palette.customColors.accentGreen}40)`,
                      borderRadius: '2px',
                    }
                  }}
                >
                  Peanut flour is a versatile and nutritious product made from roasted peanuts that have had most of their oil removed through a crushing and defatting process. This results in a fine, powdery flour that is significantly lower in fat and calories than whole peanuts or traditional peanut butter, while being remarkably high in protein.
                </Typography>
              </Box>

              {/* Image Section */}
              <Box 
                sx={{ 
                  flex: { xs: 1, md: 0.4 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '250px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <Image
                    src={flourImg}
                    alt="Peanut flour showing fine, powdery texture"
                    width={250}
                    height={180}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Characteristics Section */}
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                Key Characteristics
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: 4, 
                mb: 6,
                '& > *': {
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  }
                }
              }}>
                <Box sx={{ 
                  flex: 1,
                  bgcolor: 'rgba(255,255,255,0.7)',
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  border: `1px solid ${theme.palette.primary.main}15`,
                }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      '&::before': {
                        content: '"🔬"',
                        fontSize: '1.2rem',
                      }
                    }}
                  >
                    Composition
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.7,
                    }}
                  >
                    Primarily composed of ground peanuts after significant oil extraction. Defatting levels vary (3%, 12%, 28% fat content), allowing for different applications and nutritional profiles.
                  </Typography>
                </Box>

                <Box sx={{ 
                  flex: 1,
                  bgcolor: 'rgba(255,255,255,0.7)',
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  border: `1px solid ${theme.palette.primary.main}15`,
                }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      '&::before': {
                        content: '"💪"',
                        fontSize: '1.2rem',
                      }
                    }}
                  >
                    Nutritional Profile
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.secondary.main,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.7,
                    }}
                  >
                    Contains 40-52% protein by weight, excellent dietary fiber, naturally gluten-free. Rich in niacin, magnesium, phosphorus, copper, manganese, thiamin, folate, potassium, and zinc.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Uses and Applications */}
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                Culinary Applications
              </Typography>

              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
                mb: 4,
              }}>
                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.7)',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  }
                }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1, fontSize: '1.1rem' }}>🥖 Baking</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Partial or full substitute for traditional flours in gluten-free baking. Adds protein and nutty flavor to breads, cookies, cakes, and pancakes.
                  </Typography>
                </Box>

                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.7)',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  }
                }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1, fontSize: '1.1rem' }}>🥄 Thickener</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Excellent thickening agent for soups, stews, sauces, and gravies due to its fine consistency and natural binding properties.
                  </Typography>
                </Box>

                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.7)',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  }
                }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1, fontSize: '1.1rem' }}>💪 Protein Boost</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Easily incorporated into smoothies, shakes, and protein powders to significantly increase protein content without added fats.
                  </Typography>
                </Box>

                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.7)',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  }
                }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1, fontSize: '1.1rem' }}>🥜 Reduced-Fat PB</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    When mixed with water, creates a lower-fat version of peanut butter, ideal for those monitoring their caloric intake.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Health Benefits */}
            <Box sx={{ 
              bgcolor: 'rgba(255,255,255,0.7)',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: `1px solid ${theme.palette.primary.main}15`,
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&::before': {
                    content: '"❤️"',
                    fontSize: '1.5rem',
                  }
                }}
              >
                Health Benefits
              </Typography>

              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>High Protein Content</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Supports muscle growth and repair, contributes to satiety, and aids in weight management with its high protein density.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Heart Health</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Contains arginine, niacin, phytosterols, potassium, and magnesium - all contributing to cardiovascular wellness.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Gluten-Free Option</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Safe and nutritious alternative for individuals with celiac disease or gluten intolerance.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 1 }}>Micronutrient Rich</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main, lineHeight: 1.6 }}>
                    Provides essential vitamins and minerals crucial for overall bodily functions and optimal health.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PeanutJourneyPage;