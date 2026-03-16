'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import GradientCard from '@/components/GradientCard';
import AmanImage from '@/assets/images/Aman.jpeg';
import ManishImage from '@/assets/images/Manish.jpeg';
import MahavirImage from '@/assets/images/Mahavir.jpeg';

const pioneers = [
  {
    image: AmanImage,
    name: 'AMAN SHARMA',
    role: 'CEO & Managing Head',
    bio: 'Aman Sharma is the CEO and Managing Head of Balaji Exports, where he leads the company with a strong focus on quality, reliability, and global business growth. He holds an MBA in Global Business from Glasgow Caledonian University, London, which has strengthened his international business perspective.\n\nUnder his leadership, Balaji Exports continues to expand its global presence while maintaining high standards in product quality and building long-term relationships with international clients.',
    imageRight: false,
    linkedinUrl: 'https://www.linkedin.com/in/aman-sharma-51673b301/',
  },
  {
    image: ManishImage,
    name: 'MANISH SHARMA',
    role: 'CFO – Chief Financial Officer',
    bio: 'Manish Sharma serves as the Chief Financial Officer (CFO) of Balaji Exports, overseeing the company\'s financial strategy, planning, and operational efficiency. He plays a key role in ensuring strong financial management while supporting the company\'s long-term growth and global expansion.\n\nWith a sharp focus on financial discipline and strategic planning, he is responsible for managing financial operations, risk assessment, and resource optimization within the organization. His expertise helps maintain financial stability while enabling Balaji Exports to pursue new opportunities in international markets.',
    imageRight: true,
    linkedinUrl: undefined,
  },
  {
    image: MahavirImage,
    name: 'Mahavir Sharma',
    role: 'Managing Director, Balaji Exports',
    bio: 'Mahavir Sharma, the Managing Director of Balaji Exports, is a visionary leader whose journey reflects determination and resilience. Beginning his career as a farmer, he developed a deep understanding of agriculture and the value of hard work. With strong vision and dedication, he transformed his experience into a successful entrepreneurial venture.\n\nThrough his leadership and relentless effort, he built Balaji Exports into the respected organization it is today. His commitment to quality, integrity, and growth has established the company\'s presence in global markets. His inspiring journey from the fields to leading an international export business stands as a testament to perseverance and vision.',
    imageRight: false,
    linkedinUrl: undefined,
  },
];

const imageVariantsLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const imageVariantsRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const textVariantsLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const textVariantsRight = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

function PioneerRow({
  image,
  name,
  role,
  bio,
  imageRight = false,
  linkedinUrl,
}: {
  image: typeof AmanImage;
  name: string;
  role: string;
  bio: string;
  imageRight?: boolean;
  linkedinUrl?: string;
}) {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const imageVariants = imageRight ? imageVariantsRight : imageVariantsLeft;
  const textVariants = imageRight ? textVariantsRight : textVariantsLeft;

  const imageBlock = (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={imageVariants}
      transition={transition}
      style={{
        flexShrink: 0,
        width: '100%',
        maxWidth: 320,
        aspectRatio: '1',
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 320px"
        style={{ objectFit: 'cover' }}
      />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={textVariants}
      transition={transition}
      style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 0 }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 800,
          color: theme.palette.primary.main,
          mb: 0.5,
          fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' },
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          color: theme.palette.secondary.main,
          mb: linkedinUrl ? 0.5 : 2,
          fontSize: { xs: '0.95rem', md: '1rem' },
        }}
      >
        {role}
      </Typography>
      {linkedinUrl && (
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            mb: 2,
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
              color: theme.palette.secondary.main,
              textDecoration: 'underline',
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: 22 }} />
          View LinkedIn profile
        </Link>
      )}
      <GradientCard
        description={
          <Typography
            component="div"
            sx={{
              fontFamily: 'Inter, sans-serif',
              color: theme.palette.customColors.lightGold,
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
            }}
          >
            {bio}
          </Typography>
        }
        gradient="greenDark"
        height={280}
        cardSx={{
          width: '100%',
          minWidth: 0,
          borderRadius: 2,
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          background: theme.customGradients.greenDark,
          height: { xs: 'auto', md: 280 },
          minHeight: { xs: 220, md: 280 },
        }}
        contentSx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          height: '100%',
          minWidth: 0,
          overflow: 'visible',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        buttonText={undefined}
      />
    </motion.div>
  );

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 3, md: 5 },
        mb: { xs: 6, md: 8 },
        '&:last-of-type': { mb: 0 },
      }}
    >
      <Box sx={{ order: { xs: 0, md: imageRight ? 1 : 0 }, width: '100%', maxWidth: 320, flexShrink: 0 }}>
        {imageBlock}
      </Box>
      <Box sx={{ order: { xs: 1, md: imageRight ? 0 : 1 }, flex: 1, minWidth: 0 }}>
        {textBlock}
      </Box>
    </Box>
  );
}

const MeetOurPioneers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 8, backgroundColor: '#F2E8C9' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            mb: 6,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.customColors.accentGreen} 90%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: theme.palette.primary.main,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              background: theme.palette.customColors.lightGold,
            },
          }}
        >
          Meet Our Pioneers
        </Typography>
        {pioneers.map((pioneer, index) => (
          <PioneerRow
            key={index}
            image={pioneer.image}
            name={pioneer.name}
            role={pioneer.role}
            bio={pioneer.bio}
            imageRight={pioneer.imageRight}
            linkedinUrl={pioneer.linkedinUrl}
          />
        ))}
      </Container>
    </Box>
  );
};

export default MeetOurPioneers;
