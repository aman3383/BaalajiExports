const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

// Schema definitions (simplified for seeding)
const metaTagSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String },
  property: { type: String },
  httpEquiv: { type: String },
  content: { type: String },
  charset: { type: String },
});

const linkTagSchema = new mongoose.Schema({
  rel: { type: String, required: true },
  href: { type: String, required: true },
  hreflang: { type: String },
});

const scriptTagSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
});

const seoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  metaTags: [metaTagSchema],
  linkTags: [linkTagSchema],
  scriptTags: [scriptTagSchema],
});

const pageSchema = new mongoose.Schema({
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  name: { 
    type: String, 
    required: true 
  },
  seo: seoSchema,
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

const blogSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  content: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String 
  },
  seo: seoSchema,
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Create models
const Page = mongoose.model('Page', pageSchema);
const Blog = mongoose.model('Blog', blogSchema);

// Sample SEO data
const pagesData = [
  {
    slug: 'about',
    name: 'About Us',
    seo: {
      title: "About Balaji Exports - Leading Peanut Exporters from India | Our Story",
      description: "Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.",
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'About Balaji Exports, Peanut Export Company India, Groundnut Exporters India, Indian Peanut Suppliers, Peanut Export Business'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'About Balaji Exports - Leading Peanut Exporters from India | Our Story'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/about'
        },
        {
          type: 'property',
          property: 'og:site_name',
          content: 'Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:image',
          content: 'https://balajiexports.com/images/about-balaji-exports-og.jpg'
        },
        {
          type: 'property',
          property: 'og:locale',
          content: 'en_US'
        },
        {
          type: 'property',
          property: 'og:type',
          content: 'website'
        },
        {
          type: 'name',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          type: 'name',
          name: 'twitter:title',
          content: 'About Balaji Exports - Leading Peanut Exporters from India | Our Story'
        },
        {
          type: 'name',
          name: 'twitter:description',
          content: 'Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.'
        },
        {
          type: 'name',
          name: 'twitter:image',
          content: 'https://balajiexports.com/images/about-balaji-exports-og.jpg'
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: 'https://balajiexports.com/about'
        }
      ]
    }
  },
  {
    slug: 'services',
    name: 'Services',
    seo: {
      title: "Peanut Export Services | Professional Groundnut Export Solutions | Balaji Exports",
      description: "Discover comprehensive peanut export services by Balaji Exports. From quality control and processing to global shipping and documentation, we provide end-to-end groundnut export solutions for international buyers.",
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'peanut export services, groundnut export solutions, peanut processing services, groundnut quality control, peanut shipping services'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'Peanut Export Services | Professional Groundnut Export Solutions | Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Discover comprehensive peanut export services by Balaji Exports. From quality control and processing to global shipping and documentation, we provide end-to-end groundnut export solutions for international buyers.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/services'
        },
        {
          type: 'property',
          property: 'og:site_name',
          content: 'Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:image',
          content: 'https://balajiexports.com/images/peanut-export-services-og.jpg'
        },
        {
          type: 'property',
          property: 'og:locale',
          content: 'en_US'
        },
        {
          type: 'property',
          property: 'og:type',
          content: 'website'
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: 'https://balajiexports.com/services'
        }
      ]
    }
  },
  {
    slug: 'contact',
    name: 'Contact',
    seo: {
      title: "Contact Balaji Exports - Premium Peanut Exporters | Get Quote",
      description: "Contact Balaji Exports for premium quality peanut exports. Get instant quotes, discuss requirements, and connect with our export specialists for bulk orders worldwide.",
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'contact Balaji Exports, peanut exporters contact, groundnut suppliers contact, peanut export quotes, bulk peanut orders'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'Contact Balaji Exports - Premium Peanut Exporters | Get Quote'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Contact Balaji Exports for premium quality peanut exports. Get instant quotes, discuss requirements, and connect with our export specialists for bulk orders worldwide.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/contact'
        },
        {
          type: 'property',
          property: 'og:site_name',
          content: 'Balaji Exports'
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: 'https://balajiexports.com/contact'
        }
      ]
    }
  },
  {
    slug: 'health-benefits',
    name: 'Health Benefits',
    seo: {
      title: "Health Benefits of Peanuts | Nutritional Value & Wellness Guide | Balaji Exports",
      description: "Discover the comprehensive health benefits of peanuts including heart health, weight management, blood sugar control, and nutritional value. Learn about peanut allergies, consumption guidelines, and wellness tips from leading peanut exporters.",
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'peanut health benefits, groundnut nutrition, peanut nutritional value, peanut health advantages, peanut heart health'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'Health Benefits of Peanuts | Nutritional Value & Wellness Guide | Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Discover the comprehensive health benefits of peanuts including heart health, weight management, blood sugar control, and nutritional value.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/health-benefits'
        },
        {
          type: 'property',
          property: 'og:type',
          content: 'article'
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: 'https://balajiexports.com/health-benefits'
        }
      ]
    }
  },
  {
    slug: 'nut-journey',
    name: 'Nut Journey',
    seo: {
      title: "Nut Journey - From Farm to Table | Peanut Processing Guide | Balaji Exports",
      description: "Explore the complete journey of peanuts from organic farming to processing. Learn about sustainable cultivation, modern processing techniques, and quality control measures in Indian peanut production by leading exporters.",
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'peanut journey, groundnut farming process, peanut processing steps, organic peanut cultivation, groundnut harvest process'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'Nut Journey - From Farm to Table | Peanut Processing Guide | Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Explore the complete journey of peanuts from organic farming to processing. Learn about sustainable cultivation, modern processing techniques, and quality control measures in Indian peanut production by leading exporters.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/nut-journey'
        },
        {
          type: 'property',
          property: 'og:type',
          content: 'article'
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: 'https://balajiexports.com/nut-journey'
        }
      ]
    }
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    seo: {
      title: "Peanut Market Insights & Global Trade Blogs | Balaji Exports",
      description: "Stay updated with the latest peanut market trends, industry news, and global trade insights from Balaji Exports. Expert analysis of international peanut markets, trade policies, and export opportunities across different countries.",
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'peanut market news, groundnut industry updates, peanut trade insights, global peanut markets, peanut export trends'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'Peanut Market Insights & Global Trade Blogs | Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Stay updated with the latest peanut market trends, industry news, and global trade insights from Balaji Exports.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/blogs'
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: 'https://balajiexports.com/blogs'
        }
      ]
    }
  }
];

// Sample product pages
const productPages = [
  'bold-peanuts',
  'blanched-peanuts',
  'spanish-peanuts',
  'virginia-peanuts',
  'red-skin-peanuts',
  'salted-peanuts',
  'organic-peanuts',
  'mathadi-peanuts',
  'g20-peanuts',
  'k6-peanuts',
  'tj-peanuts',
  'icgv-03043-peanuts',
  'icgv-15083-peanuts',
  'icgv15090-peanuts',
  'peanut-butter',
  'peanut-oil'
];

productPages.forEach(slug => {
  const productName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  pagesData.push({
    slug: `products/${slug}`,
    name: productName,
    seo: {
      title: `Premium ${productName} - High Quality Export | Balaji Exports`,
      description: `Discover our premium ${productName} - export quality, certified, and competitively priced. Contact Balaji Exports for bulk orders and wholesale pricing.`,
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: `${productName}, peanut exporters, groundnut suppliers, bulk ${slug}, wholesale ${slug}`
        },
        {
          type: 'property',
          property: 'og:title',
          content: `Premium ${productName} - High Quality Export | Balaji Exports`
        },
        {
          type: 'property',
          property: 'og:description',
          content: `Discover our premium ${productName} - export quality, certified, and competitively priced.`
        },
        {
          type: 'property',
          property: 'og:url',
          content: `https://balajiexports.com/products/${slug}`
        }
      ],
      linkTags: [
        {
          rel: 'canonical',
          href: `https://balajiexports.com/products/${slug}`
        }
      ]
    }
  });
});

// Sample blog data
const blogData = [
  {
    slug: 'bangladesh',
    title: 'Bangladesh Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Bangladesh...',
    seo: {
      title: 'Bangladesh Peanut Export Guide | Market Requirements | Balaji Exports',
      description: 'Complete guide for peanut exports to Bangladesh. Learn about market requirements, trade regulations, documentation, and export opportunities with Balaji Exports.',
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'Bangladesh peanut export, groundnut export Bangladesh, peanut suppliers Bangladesh, Bangladesh trade requirements'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'Bangladesh Peanut Export Guide | Market Requirements | Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Complete guide for peanut exports to Bangladesh. Learn about market requirements, trade regulations, documentation, and export opportunities.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/blogs/bangladesh'
        },
        {
          type: 'property',
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    slug: 'usa',
    title: 'USA Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to USA...',
    seo: {
      title: 'USA Peanut Export Guide | FDA Requirements | Balaji Exports',
      description: 'Complete guide for peanut exports to USA. Learn about FDA requirements, market standards, documentation, and export opportunities with Balaji Exports.',
      metaTags: [
        {
          type: 'name',
          name: 'keywords',
          content: 'USA peanut export, groundnut export USA, peanut suppliers USA, FDA requirements peanuts'
        },
        {
          type: 'property',
          property: 'og:title',
          content: 'USA Peanut Export Guide | FDA Requirements | Balaji Exports'
        },
        {
          type: 'property',
          property: 'og:description',
          content: 'Complete guide for peanut exports to USA. Learn about FDA requirements, market standards, documentation, and export opportunities.'
        },
        {
          type: 'property',
          property: 'og:url',
          content: 'https://balajiexports.com/blogs/usa'
        },
        {
          type: 'property',
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  }
];

async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Page.deleteMany({});
    await Blog.deleteMany({});
    console.log('Cleared existing data');

    // Insert pages
    await Page.insertMany(pagesData);
    console.log(`Inserted ${pagesData.length} pages`);

    // Insert blogs
    await Blog.insertMany(blogData);
    console.log(`Inserted ${blogData.length} blogs`);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

// Run the seeding script
if (require.main === module) {
  seedData();
}

module.exports = { seedData }; 