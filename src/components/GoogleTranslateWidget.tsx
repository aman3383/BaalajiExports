"use client";

import React, { useState, useEffect } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem, 
  CircularProgress, 
  Typography, 
  Box,
  Tooltip,
  Fade,
  Paper,
  List,
  ListItem
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import TranslateIcon from '@mui/icons-material/Translate';
import Image from 'next/image';
import translateIcon from '@/assets/images/translate.png';

interface Language {
  code: string;
  name: string;
}

interface GoogleTranslateWidgetProps {
  isInNavbar?: boolean;
  onLanguageSelect?: () => void;
}

const GoogleTranslateWidget = ({ isInNavbar = false, onLanguageSelect }: GoogleTranslateWidgetProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [originalContent, setOriginalContent] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationProgress, setTranslationProgress] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  // Add effect to prevent body overflow when dropdown is open
  useEffect(() => {
    const preventOverflow = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    };
    
    preventOverflow();
    
    return () => {
      // Keep overflow hidden for safety
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    };
  }, []);

  // Complete list of all world languages supported by Google Translate
  const languages: Language[] = [
    { code: '', name: 'Select Language' },
    // Major World Languages
    { code: 'en', name: 'English' },
    { code: 'zh', name: 'Chinese (Simplified)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)' },
    { code: 'es', name: 'Spanish' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ar', name: 'Arabic' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'bn', name: 'Bengali' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'de', name: 'German' },
    { code: 'jv', name: 'Javanese' },
    { code: 'wu', name: 'Wu Chinese' },
    { code: 'ms', name: 'Malay' },
    { code: 'te', name: 'Telugu' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'ko', name: 'Korean' },
    { code: 'fr', name: 'French' },
    { code: 'mr', name: 'Marathi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'ur', name: 'Urdu' },
    { code: 'tr', name: 'Turkish' },
    { code: 'it', name: 'Italian' },
    { code: 'th', name: 'Thai' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'jin', name: 'Jin Chinese' },
    { code: 'pl', name: 'Polish' },
    { code: 'kn', name: 'Kannada' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'or', name: 'Odia' },
    { code: 'my', name: 'Myanmar (Burmese)' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'su', name: 'Sundanese' },
    { code: 'uz', name: 'Uzbek' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'ro', name: 'Romanian' },
    { code: 'nl', name: 'Dutch' },
    { code: 'sa', name: 'Sanskrit' },
    
    // European Languages
    { code: 'sv', name: 'Swedish' },
    { code: 'da', name: 'Danish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'fi', name: 'Finnish' },
    { code: 'cs', name: 'Czech' },
    { code: 'sk', name: 'Slovak' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'hr', name: 'Croatian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'et', name: 'Estonian' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'be', name: 'Belarusian' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'sq', name: 'Albanian' },
    { code: 'el', name: 'Greek' },
    { code: 'is', name: 'Icelandic' },
    { code: 'mt', name: 'Maltese' },
    { code: 'ga', name: 'Irish' },
    { code: 'cy', name: 'Welsh' },
    { code: 'eu', name: 'Basque' },
    { code: 'ca', name: 'Catalan' },
    { code: 'gl', name: 'Galician' },
    { code: 'lb', name: 'Luxembourgish' },
    { code: 'fy', name: 'Frisian' },
    { code: 'fo', name: 'Faroese' },
    { code: 'gd', name: 'Scottish Gaelic' },
    
    // Middle Eastern & Central Asian Languages
    { code: 'fa', name: 'Persian (Farsi)' },
    { code: 'he', name: 'Hebrew' },
    { code: 'ku', name: 'Kurdish' },
    { code: 'ps', name: 'Pashto' },
    { code: 'ckb', name: 'Kurdish (Sorani)' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'tg', name: 'Tajik' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'ug', name: 'Uyghur' },
    
    // South Asian Languages
    { code: 'ne', name: 'Nepali' },
    { code: 'si', name: 'Sinhala' },
    { code: 'dv', name: 'Dhivehi' },
    { code: 'as', name: 'Assamese' },
    { code: 'bho', name: 'Bhojpuri' },
    { code: 'doi', name: 'Dogri' },
    { code: 'gom', name: 'Konkani' },
    { code: 'mai', name: 'Maithili' },
    { code: 'mni-Mtei', name: 'Manipuri' },
    { code: 'sat', name: 'Santali' },
    
    // Southeast Asian Languages
    { code: 'id', name: 'Indonesian' },
    { code: 'tl', name: 'Filipino' },
    { code: 'km', name: 'Khmer' },
    { code: 'lo', name: 'Lao' },
    { code: 'ceb', name: 'Cebuano' },
    { code: 'haw', name: 'Hawaiian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'sm', name: 'Samoan' },
    { code: 'mi', name: 'Maori' },
    { code: 'fj', name: 'Fiji' },
    
    // East Asian Languages
    { code: 'hmn', name: 'Hmong' },
    { code: 'mizo', name: 'Mizo' },
    
    // African Languages
    { code: 'af', name: 'Afrikaans' },
    { code: 'sw', name: 'Swahili' },
    { code: 'am', name: 'Amharic' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'lg', name: 'Luganda' },
    { code: 'zu', name: 'Zulu' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'st', name: 'Sesotho' },
    { code: 'tn', name: 'Setswana' },
    { code: 'ss', name: 'Siswati' },
    { code: 've', name: 'Venda' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'ig', name: 'Igbo' },
    { code: 'ha', name: 'Hausa' },
    { code: 'om', name: 'Oromo' },
    { code: 'ti', name: 'Tigrinya' },
    { code: 'so', name: 'Somali' },
    { code: 'ny', name: 'Chichewa' },
    { code: 'sn', name: 'Shona' },
    { code: 'ak', name: 'Akan' },
    { code: 'tw', name: 'Twi' },
    { code: 'bm', name: 'Bambara' },
    { code: 'ee', name: 'Ewe' },
    { code: 'kri', name: 'Krio' },
    { code: 'ln', name: 'Lingala' },
    { code: 'kg', name: 'Kongo' },
    { code: 'wo', name: 'Wolof' },
    
    // Caucasian Languages
    { code: 'ka', name: 'Georgian' },
    { code: 'hy', name: 'Armenian' },
    
    // Native American Languages
    { code: 'qu', name: 'Quechua' },
    { code: 'gn', name: 'Guarani' },
    { code: 'ay', name: 'Aymara' },
    
    // Constructed/Artificial Languages
    { code: 'eo', name: 'Esperanto' },
    { code: 'la', name: 'Latin' },
    
    // Regional European Languages
    { code: 'co', name: 'Corsican' },
    { code: 'br', name: 'Breton' },
    { code: 'sc', name: 'Sardinian' },
    
    // Other Languages
    { code: 'yi', name: 'Yiddish' },
    { code: 'ht', name: 'Haitian Creole' },
    { code: 'ilo', name: 'Ilocano' },
    { code: 'hil', name: 'Hiligaynon' },
    { code: 'war', name: 'Waray' },
    { code: 'pam', name: 'Kapampangan' },
    { code: 'bcl', name: 'Bikol' },
    { code: 'nso', name: 'Northern Sotho' },
    { code: 'nr', name: 'Southern Ndebele' },
    { code: 'nd', name: 'Northern Ndebele' }
  ];

  // Save original content on first load
  useEffect(() => {
    const saveOriginalContent = () => {
      // Try to find blog content first, then fall back to main content area
      const contentElement = document.querySelector('.blog-content') || 
                           document.querySelector('main') || 
                           document.body;
      if (contentElement && !originalContent) {
        setOriginalContent(contentElement.innerHTML);
      }
    };

    saveOriginalContent();
    const timer = setTimeout(saveOriginalContent, 1000);
    return () => clearTimeout(timer);
  }, [originalContent]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = async (langCode: string) => {
    setSelectedLanguage(langCode);
    handleMenuClose();
    
    if (langCode === 'en' || langCode === '') {
      restoreOriginalContent();
    } else {
      await translateContent(langCode);
    }
    
    // Call the callback if provided
    if (onLanguageSelect) {
      onLanguageSelect();
    }
  };
  
  const restoreOriginalContent = () => {
    if (originalContent) {
      const contentElement = document.querySelector('.blog-content') || 
                           document.querySelector('main') || 
                           document.body;
      if (contentElement) {
        contentElement.innerHTML = originalContent;
      }
    }
  };
  
  const translateContent = async (targetLang: string) => {
    setIsTranslating(true);
    setTranslationProgress(0);

    try {
      const contentElement = document.querySelector('.blog-content') || 
                           document.querySelector('main') || 
                           document.body;
      if (!contentElement) return;

      const textNodes: Node[] = [];
      const walk = document.createTreeWalker(
        contentElement,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            if (parent.tagName === 'SCRIPT' || 
                parent.tagName === 'STYLE' || 
                parent.classList.contains('notranslate')) {
              return NodeFilter.FILTER_REJECT;
            }
            return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        }
      );

      let node;
      while (node = walk.nextNode()) {
        textNodes.push(node);
      }

      const totalNodes = textNodes.length;
      let translatedCount = 0;

      for (const node of textNodes) {
        if (node.textContent) {
          try {
            const translatedText = await translateText(node.textContent, targetLang);
            if (translatedText && translatedText !== node.textContent) {
              node.textContent = translatedText;
            }
          } catch (error) {
            console.error('Translation error:', error);
          }
        }
        translatedCount++;
        setTranslationProgress((translatedCount / totalNodes) * 100);
      }
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };
  
  const translateText = async (text: string, targetLang: string): Promise<string> => {
    if (!text || text.trim().length === 0) return text;
    
    try {
      const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(googleUrl);
      const data = await response.json();
      
      if (data && data[0] && data[0][0] && data[0][0][0]) {
        return data[0][0][0];
      }

      const lingvaLang = targetLang === 'zh' ? 'zh_cn' : targetLang;
      const lingvaUrl = `https://lingva.ml/api/v1/en/${lingvaLang}/${encodeURIComponent(text)}`;
      const lingvaResponse = await fetch(lingvaUrl);
      const lingvaData = await lingvaResponse.json();
      
      if (lingvaData && lingvaData.translation) {
        return lingvaData.translation;
      }

      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  // If component is used in navbar, render a simplified version
  if (isInNavbar) {
    return (
      <Box sx={{ 
        width: 280, 
        maxHeight: 400, 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <Box sx={{ 
          px: 2, 
          py: 1, 
          borderBottom: '1px solid rgba(0,0,0,0.1)', 
          mb: 1, 
          position: 'sticky', 
          top: 0, 
          bgcolor: 'white', 
          zIndex: 1 
        }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <TranslateIcon fontSize="small" />
            Select Language
          </Typography>
        </Box>

        {/* Language Options */}
        <Box sx={{ 
          overflowY: 'auto',
          flex: 1,
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0,0,0,0.05)',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '2px',
          },
        }}>
          <List sx={{ py: 0 }}>
            {/* Most common languages first */}
            <Box sx={{ mb: 1 }}>
              {languages.slice(0, 20).map((lang) => (
                <ListItem 
                  key={lang.code} 
                  onClick={() => handleLanguageChange(lang.code)}
                  selected={selectedLanguage === lang.code}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    my: 0.5,
                    minHeight: 40,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(76, 175, 80, 0.12)',
                      color: '#2E7D32',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(76, 175, 80, 0.18)',
                      }
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        flexGrow: 1,
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {lang.name}
                    </Typography>
                    {selectedLanguage === lang.code && (
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#4CAF50',
                          ml: 1
                        }}
                      />
                    )}
                  </Box>
                </ListItem>
              ))}
            </Box>
            
            {/* Divider for other languages */}
            <Box sx={{ 
              px: 2, 
              py: 1, 
              borderTop: '1px solid rgba(0,0,0,0.1)', 
              mb: 1,
              position: 'sticky',
              top: 0,
              bgcolor: 'white',
              zIndex: 1
            }}>
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontWeight: 500
                }}
              >
                All Other Languages
              </Typography>
            </Box>
            
            {/* All remaining languages */}
            {languages.slice(20).map((lang) => (
              <ListItem 
                key={lang.code} 
                onClick={() => handleLanguageChange(lang.code)}
                selected={selectedLanguage === lang.code}
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  my: 0.5,
                  minHeight: 36,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(33, 150, 243, 0.08)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(76, 175, 80, 0.12)',
                    color: '#2E7D32',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(76, 175, 80, 0.18)',
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.85rem'
                    }}
                  >
                    {lang.name}
                  </Typography>
                  {selectedLanguage === lang.code && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#4CAF50',
                        ml: 1
                      }}
                    />
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  }

  // Standard floating widget for mobile view
  return (
    <Box
      className="language-widget"
      sx={{
      position: 'fixed',
      top: '120px',
        right: '8px',
      zIndex: 1500,
        maxWidth: '60px',
        width: 'auto',
        // Prevent this component from causing overflow
        overflow: 'visible',
        // Ensure it doesn't extend beyond viewport
        transform: 'translateX(0)',

        '@media (max-width: 600px)': {
          right: '4px',
          top: '100px',
        }
      }}
    >
      {/* Language Icon Button */}
      <Tooltip title="Translate Page" arrow placement="left">
        <IconButton
          onClick={handleMenuOpen}
          disabled={isTranslating}
        sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            width: 48,
            height: 48,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              transform: 'scale(1.05)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }
          }}
        >
          {isTranslating ? (
            <CircularProgress size={24} color="primary" />
          ) : (
            <Image
              src={translateIcon}
              alt="Translate"
              width={24}
              height={24}
            />
          )}
        </IconButton>
      </Tooltip>

            {/* Language Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        disablePortal={false}
        PaperProps={{
          sx: {
            mt: 1,
            maxHeight: 320,
            width: 200,
            minWidth: 180,
            maxWidth: 'calc(100vw - 24px) !important',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            // Prevent overflow
            overflow: 'hidden',
            boxSizing: 'border-box',
            '& .MuiMenu-list': {
              padding: '6px',
              maxHeight: 300,
              overflowY: 'auto',
              overflowX: 'hidden',
              boxSizing: 'border-box',
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.05)',
                borderRadius: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '2px',
              },
            }
          }
        }}

      >
        {/* Header */}
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid rgba(0,0,0,0.1)', mb: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <TranslateIcon fontSize="small" />
            Select Language
          </Typography>
        </Box>

        {/* Language Options */}
          {languages.map((lang) => (
            <MenuItem 
              key={lang.code} 
            onClick={() => handleLanguageChange(lang.code)}
            selected={selectedLanguage === lang.code}
              sx={{
              borderRadius: 1,
              mx: 1,
              my: 0.5,
              minHeight: 40,
              fontSize: '0.9rem',
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.08)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(76, 175, 80, 0.12)',
                color: '#2E7D32',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(76, 175, 80, 0.18)',
                }
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography
                variant="body2"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'Inter, sans-serif'
              }}
            >
              {lang.name}
              </Typography>
              {selectedLanguage === lang.code && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#4CAF50',
                    ml: 1
                  }}
                />
              )}
            </Box>
            </MenuItem>
          ))}
      </Menu>

      {/* Translation Progress Indicator */}
      {isTranslating && (
        <Fade in={isTranslating}>
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              top: 60,
              right: 0,
              padding: '12px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
              gap: 1.5,
              minWidth: 180,
              border: '1px solid rgba(76, 175, 80, 0.3)'
            }}
          >
            <CircularProgress size={20} color="success" />
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: '#2E7D32',
                  fontSize: '0.85rem'
                }}
              >
                Translating...
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontSize: '0.75rem'
                }}
              >
                {Math.round(translationProgress)}% complete
          </Typography>
            </Box>
          </Paper>
        </Fade>
      )}
    </Box>
  );
};

export default GoogleTranslateWidget;