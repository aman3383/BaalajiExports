import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import tile1 from '@/assets/images/productImg/tiles/crums .webp';
import tile2 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_h60bmfh60bmfh60b.webp';
//import tile3 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_j7ottj7ottj7ottj.jpeg';
import tile4 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_xhsx9qxhsx9qxhsx.webp';
import tile5 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_3sjrc23sjrc23sjr (1).webp';

//const tiles = [tile1, tile2, tile3, tile4, tile5].reverse();
const tiles = [tile1, tile2, tile4, tile5].reverse();

// Define links for each tile (in reverse order to match the display)
const tileLinks = [
  "/nut-journey#in-shell-peanuts", // tile5 (4th position, but 1st in display)
  "/nut-journey#peanut-kernel", // tile4 (3rd position, but 2nd in display) 
  "/nut-journey#peanut-blanched", // tile2 (2nd position, but 3rd in display)
  "/nut-journey#peanut-flour", // tile1 (1st position, but 4th in display)
];

// Define titles for each tile (in display order)
const tileTitles = [
  "With Shell", // tile5 (1st in display)
  "Kernel", // tile4 (2nd in display) 
  "Blanched", // tile2 (3rd in display)
  "Flour", // tile1 (4th in display)
];

const ProductIntroTiles = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 2, 
      justifyContent: 'center', 
      alignItems: 'center', 
      mt: 2,
      mb: 2,
      flexWrap: 'wrap'
    }}>
      {tiles.map((img, idx) => (
        <Link 
          key={idx}
          href={tileLinks[idx]}
          style={{ textDecoration: 'none' }}
        >
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Box 
              sx={{ 
                width: { xs: 60, sm: 70, md: 80 }, 
                height: { xs: 60, sm: 70, md: 80 }, 
                borderRadius: 1, 
                overflow: 'hidden', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
                bgcolor: '#fff',
                transition: 'transform 0.2s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                }
              }}
            >
              <Image 
                src={img} 
                alt={`tile-${tiles.length-idx}`} 
                width={80} 
                height={80} 
                style={{ 
                  objectFit: 'cover', 
                  width: '100%', 
                  height: '100%' 
                }} 
              />
            </Box>
            <Typography 
              variant="caption" 
              sx={{ 
                fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                color: '#264D36',
                textAlign: 'center',
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: '#6D8C3F'
                }
              }}
            >
              {tileTitles[idx]}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ProductIntroTiles; 