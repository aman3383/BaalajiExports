const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

// Schema definitions
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

// Product pages data
const productPagesData = [
  {
    slug: 'products/bold-peanuts',
    name: 'Bold Peanuts',
    seo: {
      title: "Premium Bold Peanuts - High Quality Indian Groundnuts | Balaji Exports",
      description: "Discover premium quality Bold Peanuts from India. FSSAI, HACCP, and ISO certified groundnuts perfect for peanut butter, snacks, and oil extraction. Competitive bulk pricing.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Bold Peanuts, Indian Groundnuts, Peanut Exporters, Groundnut Suppliers, Peanut Butter, Snack Manufacturing, Oil Extraction, FSSAI Certified, HACCP Certified, ISO Certified, Bulk Peanuts, Wholesale Groundnuts' },
        { type: 'property', property: 'og:title', content: 'Premium Bold Peanuts - High Quality Indian Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:description', content: 'Discover premium quality Bold Peanuts from India. FSSAI, HACCP, and ISO certified groundnuts perfect for peanut butter, snacks, and oil extraction. Competitive bulk pricing.' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/bold-peanuts' },
        { type: 'property', property: 'og:site_name', content: 'Balaji Exports' },
        { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/bold-peanuts-og.jpg' },
        { type: 'property', property: 'og:type', content: 'website' },
        { type: 'name', name: 'twitter:card', content: 'summary_large_image' },
        { type: 'name', name: 'twitter:title', content: 'Premium Bold Peanuts - High Quality Indian Groundnuts | Balaji Exports' },
        { type: 'name', name: 'twitter:description', content: 'Discover premium quality Bold Peanuts from India. FSSAI, HACCP, and ISO certified groundnuts perfect for peanut butter, snacks, and oil extraction. Competitive bulk pricing.' },
        { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/bold-peanuts-og.jpg' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/bold-peanuts' }
      ]
    }
  },
  {
    slug: 'products/blanched-peanuts',
    name: 'Blanched Peanuts',
    seo: {
      title: "Premium Blanched Peanuts - Export Quality Skinless Groundnuts | Balaji Exports",
      description: "High-quality blanched peanuts from India. Perfectly skinless, export-grade groundnuts ideal for food processing, confectionery, and snack manufacturing. Bulk orders available.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Blanched Peanuts, Skinless Peanuts, Export Quality Groundnuts, Food Processing Peanuts, Confectionery Peanuts, Snack Manufacturing, Blanched Groundnuts India' },
        { type: 'property', property: 'og:title', content: 'Premium Blanched Peanuts - Export Quality Skinless Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:description', content: 'High-quality blanched peanuts from India. Perfectly skinless, export-grade groundnuts ideal for food processing, confectionery, and snack manufacturing.' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/blanched-peanuts' },
        { type: 'property', property: 'og:type', content: 'website' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/blanched-peanuts' }
      ]
    }
  },
  {
    slug: 'products/spanish-peanuts',
    name: 'Spanish Peanuts',
    seo: {
      title: "Premium Spanish Peanuts - High Quality Red Skin Groundnuts | Balaji Exports",
      description: "Authentic Spanish variety peanuts from India. Small, flavorful red-skin groundnuts perfect for snacks, oil extraction, and confectionery. Export quality assured.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Spanish Peanuts, Red Skin Peanuts, Small Peanuts, Spanish Groundnuts, Snack Peanuts, Oil Extraction Peanuts, Confectionery Peanuts' },
        { type: 'property', property: 'og:title', content: 'Premium Spanish Peanuts - High Quality Red Skin Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/spanish-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/spanish-peanuts' }
      ]
    }
  },
  {
    slug: 'products/virginia-peanuts',
    name: 'Virginia Peanuts',
    seo: {
      title: "Premium Virginia Peanuts - Large Size Gourmet Groundnuts | Balaji Exports",
      description: "Jumbo Virginia peanuts from India. Large, premium-grade groundnuts perfect for gourmet snacks, roasting, and high-end food applications. Export quality certified.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Virginia Peanuts, Large Peanuts, Jumbo Peanuts, Gourmet Peanuts, Premium Groundnuts, Roasted Peanuts, High-end Food Applications' },
        { type: 'property', property: 'og:title', content: 'Premium Virginia Peanuts - Large Size Gourmet Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/virginia-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/virginia-peanuts' }
      ]
    }
  },
  {
    slug: 'products/red-skin-peanuts',
    name: 'Red Skin Peanuts',
    seo: {
      title: "Premium Red Skin Peanuts - Natural Red Colored Groundnuts | Balaji Exports",
      description: "Authentic red skin peanuts from India. Natural red-colored groundnuts with distinctive flavor, perfect for roasting, snacks, and specialty food products.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Red Skin Peanuts, Natural Red Peanuts, Colored Groundnuts, Distinctive Flavor Peanuts, Roasting Peanuts, Specialty Food Peanuts' },
        { type: 'property', property: 'og:title', content: 'Premium Red Skin Peanuts - Natural Red Colored Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/red-skin-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/red-skin-peanuts' }
      ]
    }
  },
  {
    slug: 'products/salted-peanuts',
    name: 'Salted Peanuts',
    seo: {
      title: "Premium Salted Peanuts - Ready-to-Eat Roasted Groundnuts | Balaji Exports",
      description: "Delicious salted peanuts from India. Ready-to-eat roasted groundnuts with perfect salt seasoning. Ideal for snacking, retail, and food service applications.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Salted Peanuts, Ready-to-Eat Peanuts, Roasted Peanuts, Seasoned Peanuts, Snack Peanuts, Retail Peanuts, Food Service Peanuts' },
        { type: 'property', property: 'og:title', content: 'Premium Salted Peanuts - Ready-to-Eat Roasted Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/salted-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/salted-peanuts' }
      ]
    }
  },
  {
    slug: 'products/peanut-butter',
    name: 'Peanut Butter',
    seo: {
      title: "Premium Peanut Butter - Natural & Organic Varieties | Balaji Exports",
      description: "High-quality peanut butter from India. Available in creamy, crunchy, organic, and specialty varieties. No additives, pure peanut goodness for global markets.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Peanut Butter, Natural Peanut Butter, Organic Peanut Butter, Creamy Peanut Butter, Crunchy Peanut Butter, No Additives Peanut Butter' },
        { type: 'property', property: 'og:title', content: 'Premium Peanut Butter - Natural & Organic Varieties | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/peanut-butter' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/peanut-butter' }
      ]
    }
  },
  {
    slug: 'products/peanut-oil',
    name: 'Peanut Oil',
    seo: {
      title: "Premium Peanut Oil - Cold Pressed & Refined Groundnut Oil | Balaji Exports",
      description: "High-quality peanut oil from India. Available in cold-pressed, refined, and organic varieties. Perfect for cooking, frying, and industrial applications.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Peanut Oil, Groundnut Oil, Cold Pressed Peanut Oil, Refined Peanut Oil, Organic Peanut Oil, Cooking Oil, Frying Oil' },
        { type: 'property', property: 'og:title', content: 'Premium Peanut Oil - Cold Pressed & Refined Groundnut Oil | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/peanut-oil' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/peanut-oil' }
      ]
    }
  },
  {
    slug: 'products/organic-peanuts',
    name: 'Organic Peanuts',
    seo: {
      title: "Premium Organic Peanuts - Naturally Grown Variety | Balaji Exports",
      description: "Authentic Organic peanuts from India. Naturally grown without chemicals, excellent for roasting, snacks, and specialty food applications. Export quality assured.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Organic Peanuts, Natural Peanuts, Chemical Free Peanuts, Organic Groundnuts, Roasting Peanuts, Specialty Peanuts' },
        { type: 'property', property: 'og:title', content: 'Premium Organic Peanuts - Naturally Grown Variety | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/organic-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/organic-peanuts' }
      ]
    }
  },
  {
    slug: 'products/mathadi-peanuts',
    name: 'Mathadi Peanuts',
    seo: {
      title: "Premium Mathadi Peanuts - Regional Indian Variety | Balaji Exports",
      description: "Authentic Mathadi peanuts from India. Regional variety known for excellent taste and quality. Perfect for processing, roasting, and oil extraction.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Mathadi Peanuts, Regional Peanuts, Indian Variety Peanuts, Processing Peanuts, Quality Groundnuts' },
        { type: 'property', property: 'og:title', content: 'Premium Mathadi Peanuts - Regional Indian Variety | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/mathadi-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/mathadi-peanuts' }
      ]
    }
  },
  {
    slug: 'products/g20-peanuts',
    name: 'G20 Peanuts',
    seo: {
      title: "Premium G20 Peanuts - High Grade Export Variety | Balaji Exports",
      description: "Superior G20 peanuts from India. High-grade export variety with excellent uniformity and quality. Ideal for international markets and premium applications.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'G20 Peanuts, High Grade Peanuts, Export Variety Peanuts, Premium Groundnuts, International Quality' },
        { type: 'property', property: 'og:title', content: 'Premium G20 Peanuts - High Grade Export Variety | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/g20-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/g20-peanuts' }
      ]
    }
  },
  {
    slug: 'products/k6-peanuts',
    name: 'K6 Peanuts',
    seo: {
      title: "Premium K6 Peanuts - Superior Indian Groundnut Variety | Balaji Exports",
      description: "High-quality K6 peanuts from India. Superior variety known for excellent oil content and processing qualities. Perfect for industrial and food applications.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'K6 Peanuts, Superior Peanuts, Oil Content Peanuts, Processing Peanuts, Industrial Groundnuts' },
        { type: 'property', property: 'og:title', content: 'Premium K6 Peanuts - Superior Indian Groundnut Variety | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/k6-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/k6-peanuts' }
      ]
    }
  },
  {
    slug: 'products/tj-peanuts',
    name: 'TJ Peanuts',
    seo: {
      title: "Premium TJ Peanuts - Specialty Indian Groundnut Variety | Balaji Exports",
      description: "Authentic TJ peanuts from India. Specialty variety with unique characteristics, perfect for specific processing and export requirements.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'TJ Peanuts, Specialty Peanuts, Unique Variety Peanuts, Processing Groundnuts, Export Quality' },
        { type: 'property', property: 'og:title', content: 'Premium TJ Peanuts - Specialty Indian Groundnut Variety | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/tj-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/tj-peanuts' }
      ]
    }
  },
  {
    slug: 'products/icgv-03043-peanuts',
    name: 'ICGV-03043 Peanuts',
    seo: {
      title: "Premium ICGV-03043 Peanuts - Scientific Variety Groundnuts | Balaji Exports",
      description: "High-yield ICGV-03043 peanuts from India. Scientific variety developed for superior quality and disease resistance. Excellent for export markets.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'ICGV-03043 Peanuts, Scientific Variety Peanuts, High Yield Peanuts, Disease Resistant Groundnuts, Export Quality' },
        { type: 'property', property: 'og:title', content: 'Premium ICGV-03043 Peanuts - Scientific Variety Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/icgv-03043-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/icgv-03043-peanuts' }
      ]
    }
  },
  {
    slug: 'products/icgv-15083-peanuts',
    name: 'ICGV-15083 Peanuts',
    seo: {
      title: "Premium ICGV-15083 Peanuts - Advanced Variety Groundnuts | Balaji Exports",
      description: "Superior ICGV-15083 peanuts from India. Advanced variety with enhanced oil content and processing qualities. Perfect for premium export markets.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'ICGV-15083 Peanuts, Advanced Variety Peanuts, Enhanced Oil Content, Processing Quality, Premium Export' },
        { type: 'property', property: 'og:title', content: 'Premium ICGV-15083 Peanuts - Advanced Variety Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/icgv-15083-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/icgv-15083-peanuts' }
      ]
    }
  },
  {
    slug: 'products/icgv15090-peanuts',
    name: 'ICGV15090 Peanuts',
    seo: {
      title: "Premium ICGV15090 Peanuts - Research Grade Groundnuts | Balaji Exports",
      description: "High-quality ICGV15090 peanuts from India. Research-grade variety with excellent uniformity and yield. Ideal for commercial and export applications.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'ICGV15090 Peanuts, Research Grade Peanuts, Uniform Quality, High Yield Groundnuts, Commercial Export' },
        { type: 'property', property: 'og:title', content: 'Premium ICGV15090 Peanuts - Research Grade Groundnuts | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/products/icgv15090-peanuts' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/products/icgv15090-peanuts' }
      ]
    }
  }
];

// Blog pages data for countries
const blogPagesData = [
  {
    slug: 'bangladesh',
    title: 'Bangladesh Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Bangladesh including market requirements, trade regulations, and opportunities.',
    seo: {
      title: 'Bangladesh Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Bangladesh. Learn about market requirements, trade regulations, documentation, import duties, and export opportunities with Balaji Exports.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Bangladesh peanut export, groundnut export Bangladesh, peanut suppliers Bangladesh, Bangladesh trade requirements, peanut import Bangladesh' },
        { type: 'property', property: 'og:title', content: 'Bangladesh Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:description', content: 'Complete guide for peanut exports to Bangladesh. Learn about market requirements, trade regulations, documentation, import duties, and export opportunities.' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/bangladesh' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/bangladesh' }
      ]
    }
  },
  {
    slug: 'china',
    title: 'China Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to China including market requirements, trade regulations, and opportunities.',
    seo: {
      title: 'China Peanut Export Guide | Market Access & Trade Requirements | Balaji Exports',
      description: 'Expert guide for peanut exports to China. Understand market access requirements, quality standards, documentation, and trade opportunities in the Chinese market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'China peanut export, groundnut export China, peanut suppliers China, China trade requirements, peanut import China, Chinese market peanuts' },
        { type: 'property', property: 'og:title', content: 'China Peanut Export Guide | Market Access & Trade Requirements | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/china' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/china' }
      ]
    }
  },
  {
    slug: 'usa',
    title: 'USA Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to USA including FDA requirements, market standards, and opportunities.',
    seo: {
      title: 'USA Peanut Export Guide | FDA Requirements & Market Standards | Balaji Exports',
      description: 'Complete guide for peanut exports to USA. Learn about FDA requirements, food safety standards, documentation, and market opportunities in America.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'USA peanut export, groundnut export USA, peanut suppliers USA, FDA requirements peanuts, American market peanuts, US food safety standards' },
        { type: 'property', property: 'og:title', content: 'USA Peanut Export Guide | FDA Requirements & Market Standards | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/usa' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/usa' }
      ]
    }
  },
  {
    slug: 'germany',
    title: 'Germany Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Germany including EU regulations, market requirements, and opportunities.',
    seo: {
      title: 'Germany Peanut Export Guide | EU Regulations & Market Access | Balaji Exports',
      description: 'Expert guide for peanut exports to Germany. Understand EU regulations, quality standards, certification requirements, and market opportunities in German market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Germany peanut export, groundnut export Germany, EU peanut regulations, German market peanuts, European food standards' },
        { type: 'property', property: 'og:title', content: 'Germany Peanut Export Guide | EU Regulations & Market Access | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/germany' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/germany' }
      ]
    }
  },
  {
    slug: 'uk',
    title: 'UK Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to United Kingdom including post-Brexit regulations and market opportunities.',
    seo: {
      title: 'UK Peanut Export Guide | Post-Brexit Trade & Market Access | Balaji Exports',
      description: 'Complete guide for peanut exports to UK. Learn about post-Brexit trade regulations, quality standards, and market opportunities in United Kingdom.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'UK peanut export, United Kingdom peanut export, post-Brexit trade, British market peanuts, UK food standards' },
        { type: 'property', property: 'og:title', content: 'UK Peanut Export Guide | Post-Brexit Trade & Market Access | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/uk' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/uk' }
      ]
    }
  },
  {
    slug: 'indonesia',
    title: 'Indonesia Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Indonesia including market requirements and trade opportunities.',
    seo: {
      title: 'Indonesia Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Indonesia. Learn about market requirements, trade regulations, halal certification, and export opportunities.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Indonesia peanut export, groundnut export Indonesia, halal peanuts, Indonesian market requirements' },
        { type: 'property', property: 'og:title', content: 'Indonesia Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/indonesia' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/indonesia' }
      ]
    }
  },
  {
    slug: 'netherlands',
    title: 'Netherlands Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Netherlands including EU regulations and market opportunities.',
    seo: {
      title: 'Netherlands Peanut Export Guide | EU Regulations & Market Access | Balaji Exports',
      description: 'Complete guide for peanut exports to Netherlands. Learn about EU regulations, quality standards, and market opportunities in Dutch market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Netherlands peanut export, Dutch market peanuts, EU regulations, European food standards' },
        { type: 'property', property: 'og:title', content: 'Netherlands Peanut Export Guide | EU Regulations & Market Access | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/netherlands' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/netherlands' }
      ]
    }
  },
  {
    slug: 'philippines',
    title: 'Philippines Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Philippines including market requirements and trade opportunities.',
    seo: {
      title: 'Philippines Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Philippines. Learn about market requirements, trade regulations, and export opportunities in Filipino market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Philippines peanut export, Filipino market peanuts, Philippines trade requirements, groundnut export Philippines' },
        { type: 'property', property: 'og:title', content: 'Philippines Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/philippines' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/philippines' }
      ]
    }
  },
  {
    slug: 'russia',
    title: 'Russia Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Russia including market requirements and trade opportunities.',
    seo: {
      title: 'Russia Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Russia. Learn about market requirements, trade regulations, and export opportunities in Russian market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Russia peanut export, Russian market peanuts, Russia trade requirements, groundnut export Russia' },
        { type: 'property', property: 'og:title', content: 'Russia Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/russia' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/russia' }
      ]
    }
  },
  {
    slug: 'singapore',
    title: 'Singapore Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Singapore including market requirements and trade opportunities.',
    seo: {
      title: 'Singapore Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Singapore. Learn about market requirements, trade regulations, and export opportunities in Singaporean market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Singapore peanut export, Singaporean market peanuts, Singapore trade requirements, groundnut export Singapore' },
        { type: 'property', property: 'og:title', content: 'Singapore Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/singapore' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/singapore' }
      ]
    }
  },
  {
    slug: 'south-africa',
    title: 'South Africa Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to South Africa including market requirements and trade opportunities.',
    seo: {
      title: 'South Africa Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to South Africa. Learn about market requirements, trade regulations, and export opportunities in South African market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'South Africa peanut export, South African market peanuts, South Africa trade requirements, groundnut export South Africa' },
        { type: 'property', property: 'og:title', content: 'South Africa Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/south-africa' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/south-africa' }
      ]
    }
  },
  {
    slug: 'thailand',
    title: 'Thailand Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Thailand including market requirements and trade opportunities.',
    seo: {
      title: 'Thailand Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Thailand. Learn about market requirements, trade regulations, and export opportunities in Thai market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Thailand peanut export, Thai market peanuts, Thailand trade requirements, groundnut export Thailand' },
        { type: 'property', property: 'og:title', content: 'Thailand Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/thailand' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/thailand' }
      ]
    }
  },
  {
    slug: 'turkey',
    title: 'Turkey Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Turkey including market requirements and trade opportunities.',
    seo: {
      title: 'Turkey Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Turkey. Learn about market requirements, trade regulations, and export opportunities in Turkish market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Turkey peanut export, Turkish market peanuts, Turkey trade requirements, groundnut export Turkey' },
        { type: 'property', property: 'og:title', content: 'Turkey Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/turkey' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/turkey' }
      ]
    }
  },
  {
    slug: 'vietnam',
    title: 'Vietnam Peanut Export Market Guide',
    content: 'Comprehensive guide for exporting peanuts to Vietnam including market requirements and trade opportunities.',
    seo: {
      title: 'Vietnam Peanut Export Guide | Market Requirements & Trade | Balaji Exports',
      description: 'Complete guide for peanut exports to Vietnam. Learn about market requirements, trade regulations, and export opportunities in Vietnamese market.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Vietnam peanut export, Vietnamese market peanuts, Vietnam trade requirements, groundnut export Vietnam' },
        { type: 'property', property: 'og:title', content: 'Vietnam Peanut Export Guide | Market Requirements & Trade | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/vietnam' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/vietnam' }
      ]
    }
  }
];

// Main pages data
const mainPagesData = [
  {
    slug: 'home',
    name: 'Home',
    seo: {
      title: "Balaji Exports - Premium Peanut Exporters from India | Leading Groundnut Suppliers",
      description: "Leading exporters of premium quality peanuts and groundnuts from India. FSSAI, HACCP, ISO certified. Bulk wholesale peanut suppliers for global markets with competitive pricing and reliable delivery.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'peanut exporters India, groundnut suppliers, bulk peanuts, wholesale groundnuts, Indian peanuts export, FSSAI certified peanuts, HACCP peanuts, ISO certified groundnuts, premium peanut varieties, groundnut export company' },
        { type: 'property', property: 'og:title', content: 'Balaji Exports - Premium Peanut Exporters from India | Leading Groundnut Suppliers' },
        { type: 'property', property: 'og:description', content: 'Leading exporters of premium quality peanuts and groundnuts from India. FSSAI, HACCP, ISO certified. Bulk wholesale peanut suppliers for global markets with competitive pricing and reliable delivery.' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com' },
        { type: 'property', property: 'og:site_name', content: 'Balaji Exports' },
        { type: 'property', property: 'og:type', content: 'website' },
        { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/logo.png' },
        { type: 'name', name: 'twitter:card', content: 'summary_large_image' },
        { type: 'name', name: 'twitter:title', content: 'Balaji Exports - Premium Peanut Exporters from India' },
        { type: 'name', name: 'twitter:description', content: 'Leading exporters of premium quality peanuts and groundnuts from India. FSSAI, HACCP, ISO certified.' },
        { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/logo.png' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com' }
      ]
    }
  },
  {
    slug: 'about',
    name: 'About Us',
    seo: {
      title: "About Balaji Exports - Leading Peanut Exporters from India | Our Story",
      description: "Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'About Balaji Exports, Peanut Export Company India, Groundnut Exporters India, Indian Peanut Suppliers, Peanut Export Business' },
        { type: 'property', property: 'og:title', content: 'About Balaji Exports - Leading Peanut Exporters from India | Our Story' },
        { type: 'property', property: 'og:description', content: 'Learn about Balaji Exports, a premier peanut export company from India. Discover our journey, commitment to quality, specialty products, and trusted partnerships with global buyers since our establishment.' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/about' },
        { type: 'property', property: 'og:site_name', content: 'Balaji Exports' },
        { type: 'property', property: 'og:type', content: 'website' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/about' }
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
        { type: 'name', name: 'keywords', content: 'peanut export services, groundnut export solutions, peanut processing services, groundnut quality control, peanut shipping services' },
        { type: 'property', property: 'og:title', content: 'Peanut Export Services | Professional Groundnut Export Solutions | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/services' },
        { type: 'property', property: 'og:type', content: 'website' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/services' }
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
        { type: 'name', name: 'keywords', content: 'peanut health benefits, groundnut nutrition, peanut nutritional value, peanut health advantages, peanut heart health' },
        { type: 'property', property: 'og:title', content: 'Health Benefits of Peanuts | Nutritional Value & Wellness Guide | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/health-benefits' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/health-benefits' }
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
        { type: 'name', name: 'keywords', content: 'peanut journey, groundnut farming process, peanut processing steps, organic peanut cultivation, groundnut harvest process' },
        { type: 'property', property: 'og:title', content: 'Nut Journey - From Farm to Table | Peanut Processing Guide | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/nut-journey' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/nut-journey' }
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
        { type: 'name', name: 'keywords', content: 'peanut market news, groundnut industry updates, peanut trade insights, global peanut markets, peanut export trends' },
        { type: 'property', property: 'og:title', content: 'Peanut Market Insights & Global Trade Blogs | Balaji Exports' },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs' }
      ]
    }
  }
];

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully');

    // Clear existing data
    console.log('🧹 Clearing existing data...');
    await Page.deleteMany({});
    await Blog.deleteMany({});
    console.log('✅ Cleared existing pages and blogs');

    // Insert main pages
    console.log('📄 Inserting main pages...');
    await Page.insertMany(mainPagesData);
    console.log(`✅ Inserted ${mainPagesData.length} main pages`);

    // Insert product pages
    console.log('🥜 Inserting product pages...');
    await Page.insertMany(productPagesData);
    console.log(`✅ Inserted ${productPagesData.length} product pages`);

    // Insert blog pages
    console.log('📝 Inserting blog pages...');
    await Blog.insertMany(blogPagesData);
    console.log(`✅ Inserted ${blogPagesData.length} blog pages`);

    console.log('\n🎉 Database seeded successfully!');
    console.log(`\nTotal records created:`);
    console.log(`- Main pages: ${mainPagesData.length}`);
    console.log(`- Product pages: ${productPagesData.length}`);
    console.log(`- Blog pages: ${blogPagesData.length}`);
    console.log(`- Total: ${mainPagesData.length + productPagesData.length + blogPagesData.length}`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('📡 Disconnected from MongoDB');
  }
}

// Run the seeding script
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase }; 