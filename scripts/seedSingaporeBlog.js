const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

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

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, trim: true },
  content: { type: String, required: true },
  image: { type: String },
  country: { type: String },
  seo: seoSchema,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

const singaporeBlog = {
  title: 'India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports',
  slug: 'singapore',
  country: 'Singapore',
  content: `
<h1>SINGAPORE</h1>
<h2>Agriculture Trade Between India and Singapore: A Growing Partnership in Peanut Exports</h2>
<p>India and Singapore share a strong and evolving trade relationship, particularly in the agriculture sector. With India being one of the largest producers and exporters of agricultural commodities, and Singapore acting as a strategic trade hub in Southeast Asia, both nations are actively increasing collaboration in agri-trade. Among the most promising segments in this bilateral relationship is the peanut trade, which has seen consistent growth in recent years.</p>
<h3>Overview of Agriculture Trade Between India and Singapore</h3>
<p>Agricultural trade between India and Singapore is growing steadily, driven by mutual interests in food security, quality produce, and diversified supply chains. India exports a wide range of agricultural products to Singapore, including:</p>
<ul>
  <li>Spices</li>
  <li>Fruits and vegetables</li>
  <li>Rice</li>
  <li>Pulses</li>
  <li>Edible oils</li>
  <li>Groundnuts (peanuts)</li>
</ul>
<p>In 2023, India's agricultural exports to Singapore crossed USD 600 million, with groundnuts being among the top items due to their nutritional value, long shelf life, and diverse applications in food processing, snacks, and oil extraction.</p>
<h3>The Rising Demand for Indian Peanuts in Singapore</h3>
<h4>Why Peanuts?</h4>
<p>Peanuts, also known as groundnuts, are a significant export commodity for India. Rich in protein, healthy fats, and fiber, peanuts are used in:</p>
<ul>
  <li>Peanut butter</li>
  <li>Peanut oil</li>
  <li>Snack products</li>
  <li>Health bars</li>
  <li>Confectionery</li>
</ul>
<p>Singapore's food industry and re-export market make it a prime destination for high-quality Indian peanuts.</p>
<h3>Varieties and Types of Peanuts Exported from India</h3>
<p>India exports several varieties of peanuts that are in demand globally, especially in Southeast Asian markets like Singapore:</p>
<ul>
  <li><strong>Bold Peanuts:</strong> Large kernels, light reddish-brown, oil content 45-49%, used for snack foods and roasting.</li>
  <li><strong>Java Peanuts:</strong> Small to medium kernels, pinkish, oil content 40-45%, used for confectionery and peanut butter.</li>
  <li><strong>TJ Peanuts (Java Type):</strong> Tiny Java kernels, popular in Southeast Asian snack industry, used for roasted & salted snacks.</li>
  <li><strong>Red Skin Peanuts:</strong> Antioxidant-rich skin, used in health food products and natural peanut butter.</li>
</ul>
<h3>Peanut Export from India to Singapore: Trade Data and Growth</h3>
<p>The peanut trade between India and Singapore has shown consistent growth, with India being one of the top peanut suppliers to Singapore.</p>
<ul>
  <li>Total groundnut exports from India: Over 750,000 MT</li>
  <li>Peanut exports to Singapore: Approx. 12,000 MT in 2023</li>
  <li>Growth rate: Over 15% YoY growth in peanut shipments to Singapore</li>
  <li>Major ports of export: Mundra, Pipavav, Chennai</li>
  <li>Primary destinations: Food manufacturing companies, snack processors, re-exporters</li>
</ul>
<p>This growth is fueled by:</p>
<ul>
  <li>Increasing demand for healthy snacking</li>
  <li>Singapore's strong re-export ecosystem to countries like Malaysia, Indonesia, and Hong Kong</li>
  <li>India's competitive pricing and consistent quality</li>
</ul>
<h3>Opportunities for Indian Peanut Exporters</h3>
<p>With rising demand for plant-based protein and natural snacks in Singapore, Indian exporters have a strong opportunity to increase market share. Key strategies include:</p>
<ul>
  <li>Offering value-added peanut products like roasted peanuts, blanched peanuts, and peanut flour</li>
  <li>Custom packaging solutions for retail and bulk buyers</li>
  <li>Ensuring quality certifications such as FSSAI, APEDA, HACCP, and SGS inspection for credibility</li>
</ul>
<h3>Conclusion</h3>
<p>The agriculture trade between India and Singapore is a testament to growing economic cooperation. Peanuts, in particular, are a rising star in this relationship. With high-quality varieties like Bold and Java, India is well-positioned to meet Singapore's demand for nutritious, versatile, and affordable groundnuts.</p>
<p>For peanut exporters in India, Singapore represents not just a destination, but a gateway to Southeast Asia. With the right trade partnerships, certifications, and logistics, this corridor can drive long-term agricultural success.</p>
<p><strong>Looking to import premium-quality peanuts from India to Singapore?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports',
    description: 'Explore the India-Singapore peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Singapore market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India Singapore peanut trade, Indian peanut exports Singapore, groundnut trade partnership, peanut market Singapore, Indian peanut suppliers Singapore, peanut export opportunities, Singapore peanut market, Indian groundnut exports, peanut trade policies, Singapore peanut importers, Indian peanut exporters, peanut market analysis Singapore, groundnut trade partnership, peanut export business Singapore, Indian peanut suppliers, Singapore peanut market trends, peanut trade opportunities, Indian groundnut suppliers Singapore, peanut export market Singapore, peanut trade partnership India Singapore' },
      { type: 'property', property: 'og:title', content: 'India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the India-Singapore peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Singapore market.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/singapore' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/singapore-peanut-trade-og.jpg' },
      { type: 'property', property: 'og:type', content: 'article' },
      { type: 'name', name: 'twitter:title', content: 'India-Singapore Peanut Trade | Southeast Asian Gateway & Strategic Partnership | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Explore the India-Singapore peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the Singapore market.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/singapore-peanut-trade-og.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/singapore' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedSingaporeBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing Singapore blog if present
    await Blog.deleteOne({ slug: 'singapore' });
    console.log('Removed existing Singapore blog (if any)');

    // Insert new Singapore blog
    await Blog.create(singaporeBlog);
    console.log('Inserted Singapore blog successfully!');
  } catch (error) {
    console.error('Error seeding Singapore blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedSingaporeBlog(); 