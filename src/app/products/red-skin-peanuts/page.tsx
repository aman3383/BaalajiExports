import React from "react";
import { Metadata } from 'next';
import RedSkinPeanutContent from './RedSkinPeanutContent';

  const pageTitle = "Premium Red Skin Peanuts Exporter from India | Balaji Exports - Export Quality Groundnuts";
  const pageDescription = "Premium export-quality Red Skin Peanuts from India. Rich flavor, high oil content (48-52%), EU-grade safety standards. Ideal for snacks, peanut butter, oil extraction & animal feed. FSSAI, HACCP, ISO certified. Competitive wholesale prices.";
  const pageUrl = "https://www.balajiexports.com/products/red-skin-peanuts";
  const imageUrl = "https://www.balajiexports.com/images/red-skin-peanuts-og.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: "red skin peanuts, export quality peanuts, Indian groundnuts, peanut exporters, wholesale peanuts, organic groundnuts, bulk peanuts supplier, peanut exports India, groundnut exporters, peanut oil extraction, FSSAI certified peanuts, HACCP peanuts, premium peanuts, groundnut price per ton, peanut butter manufacturing, animal feed peanuts",
  authors: [{ name: "Balaji Exports" }],
  publisher: "Balaji Exports",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    title: pageTitle,
    description: "Premium export-quality Red Skin Peanuts from India. Rich flavor, high oil content, EU-grade safety. Ideal for snacks, peanut butter, oil extraction. FSSAI, HACCP, ISO certified.",
    url: pageUrl,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Premium Red Skin Peanuts - Export Quality from India",
      },
    ],
    siteName: "Balaji Exports",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: "Premium export-quality Red Skin Peanuts from India. Rich flavor, high oil content, EU-grade safety. FSSAI, HACCP, ISO certified.",
    images: [imageUrl],
    site: "@BalajiExports",
    creator: "@BalajiExports",
  },
  other: {
    'geo.region': 'IN',
    'geo.country': 'India',
    'geo.placename': 'India',
    'theme-color': '#2E7D32',
    'msapplication-TileColor': '#2E7D32',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

const RedSkinPeanutPage: React.FC = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Premium Export Quality Red Skin Peanuts",
            "description": "Export-quality Red Skin Peanuts with rich flavor, high oil content (48-52%), and EU-grade safety standards. Ideal for snacks, peanut butter, oil extraction, and animal feed. FSSAI, HACCP, and ISO certified.",
            "brand": {
              "@type": "Brand",
              "name": "Balaji Exports",
              "url": "https://balajiexports.com"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Balaji Exports",
              "url": "https://balajiexports.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              }
            },
            "category": "Agricultural Products",
            "additionalType": "https://schema.org/Food",
            "offers": {
              "@type": "Offer",
              "url": pageUrl,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Balaji Exports"
              },
              "itemCondition": "https://schema.org/NewCondition",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "currency": "USD"
                },
                "deliveryTime": {
                  "@type": "ShippingDeliveryTime",
                  "businessDays": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ]
                  }
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "nutritionInformation": {
              "@type": "NutritionInformation",
              "calories": "567 per 100g",
              "proteinContent": "25.8g per 100g",
              "fatContent": "49.2g per 100g",
              "carbohydrateContent": "16.1g per 100g"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Oil Content",
                "value": "48-52%"
              },
              {
                "@type": "PropertyValue",
                "name": "Moisture Content",
                "value": "Max 7%"
              },
              {
                "@type": "PropertyValue",
                "name": "Shelf Life",
                "value": "12 months"
              },
              {
                "@type": "PropertyValue",
                "name": "Certifications",
                "value": "FSSAI, HACCP, ISO"
              }
            ]
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
            "description": "Leading exporter of premium quality peanuts and agricultural products from India",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            }
          })
        }}
      />

      <RedSkinPeanutContent />
    </>
  );
};

export default RedSkinPeanutPage; 