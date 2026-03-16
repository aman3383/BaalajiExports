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

const thailandBlog = {
  title: 'India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports',
  slug: 'thailand',
  country: 'Thailand',
  content: `
<h1>THAILAND</h1>
<h2>Agriculture Trade Between India and Thailand: A Growing Partnership with a Focus on Peanut Exports</h2>
<p>The agriculture trade between India and Thailand has seen consistent growth in recent years, driven by mutual interests in boosting bilateral trade, food security, and agri-based economic development. Among various agricultural commodities, peanut exports from India to Thailand have emerged as a high-potential trade segment due to rising demand in Thailand's food and processing industries.</p>
<p>In this blog, we explore the scope, statistics, and key highlights of the India-Thailand agricultural trade, with a special focus on peanut varieties, types, trade volume, and the growth of peanut exports.</p>
<h3>India-Thailand Agriculture Trade Overview</h3>
<p>India and Thailand share a long-standing trade relationship rooted in shared cultural ties and strategic economic cooperation. According to the Ministry of Commerce and Industry, Government of India, bilateral trade between the two countries was valued at over $17 billion in FY 2023, with agriculture playing a vital role.</p>
<ul>
  <li>Peanuts (Groundnuts)</li>
  <li>Maize</li>
  <li>Rice</li>
  <li>Fresh fruits (mangoes, bananas, grapes)</li>
  <li>Spices (turmeric, cumin, chili)</li>
  <li>Pulses and lentils</li>
</ul>
<h3>Peanut Trade Between India and Thailand</h3>
<h4>Rising Demand for Indian Peanuts</h4>
<p>Thailand's growing food processing, snacking, and oil industries have led to increased demand for high-quality Indian peanuts. India is one of the largest producers and exporters of groundnuts globally and has become a preferred supplier for Thailand due to its competitive pricing and consistent quality.</p>
<h4>Quantity and Trade Growth</h4>
<p>In FY 2023-24, India exported approximately 75,000 metric tonnes of peanuts to Thailand, valued at over $85 million, marking a 15% increase from the previous fiscal year. The positive trade trend is expected to continue, driven by Thailand's need for raw peanuts for:</p>
<ul>
  <li>Peanut butter production</li>
  <li>Roasted snacks</li>
  <li>Edible peanut oil</li>
  <li>Peanut-based confectionery</li>
</ul>
<h3>Types and Varieties of Indian Peanuts Exported to Thailand</h3>
<p>India exports various types of peanuts to Thailand, catering to different industrial and culinary uses. These include:</p>
<ul>
  <li><strong>Bold Peanuts (Runner Type):</strong> Large kernels with reddish-brown skin. Preferred for roasting and snack industries. Oil content: ~48–50%.</li>
  <li><strong>Java Peanuts (Spanish Type):</strong> Smaller size, pinkish kernels. High oil content. Used in confectionery and peanut butter.</li>
  <li><strong>Red Skin Peanuts:</strong> Popular for peanut bars and salted snack applications. High in protein and antioxidants.</li>
  <li><strong>Blanched Peanuts:</strong> Skin removed for easy use in processing industries. Clean, white kernels used in premium snack products.</li>
</ul>
<h3>Opportunities and Future Growth Potential</h3>
<h4>Why Thailand Prefers Indian Peanuts</h4>
<ul>
  <li>Competitive Prices</li>
  <li>Reliable Quality</li>
  <li>Wide Variety Options</li>
  <li>Availability in Bulk Quantities</li>
  <li>Export-Ready Processing Facilities in India</li>
</ul>
<p>With Thailand increasing investments in its food processing sector, the demand for Indian groundnuts is set to grow further. India, being the second-largest peanut producer globally, has the capacity to meet this rising demand through improved agricultural practices, storage, and logistics.</p>
<h4>Government Support</h4>
<p>Both governments have shown commitment to enhancing agri-trade. India's APEDA (Agricultural and Processed Food Products Export Development Authority) actively supports exporters in meeting Thailand's quality and phytosanitary standards.</p>
<h3>Conclusion</h3>
<p>The agricultural trade between India and Thailand presents a dynamic and expanding landscape, especially in the peanut export sector. With multiple varieties like Bold, Java, and Blanched peanuts, and increasing bilateral trade volumes, India is well-positioned to be Thailand's key agri-trade partner.</p>
<p><strong>Looking to import premium-quality peanuts from India to Thailand?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports',
    description: 'Explore the growing agricultural partnership between India and Thailand with insights into peanut varieties, trade statistics, and export opportunities in Thailand\'s expanding food processing sector.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India Thailand peanut trade, Thai peanut market, Thailand groundnut imports, Thai food industry, peanut exports Thailand, Indian groundnuts Thailand, Thai market opportunities, Thailand agricultural trade, Thai food processing, ASEAN trade, Thailand import regulations, Thai snack industry, Southeast Asia peanut trade, Thailand food manufacturing' },
      { type: 'property', property: 'og:title', content: 'India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the growing agricultural partnership between India and Thailand with insights into peanut varieties, trade statistics, and export opportunities in Thailand\'s expanding food processing sector.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/thailand' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/blogs/thailand-peanut-trade.jpg' },
      { type: 'property', property: 'og:type', content: 'article' },
      { type: 'name', name: 'twitter:title', content: 'India-Thailand Peanut Trade | Agricultural Partnership & Food Processing Opportunities | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Explore the growing agricultural partnership between India and Thailand with insights into peanut varieties, trade statistics, and export opportunities in Thailand\'s expanding food processing sector.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/blogs/thailand-peanut-trade.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/thailand' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedThailandBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing Thailand blog if present
    await Blog.deleteOne({ slug: 'thailand' });
    console.log('Removed existing Thailand blog (if any)');

    // Insert new Thailand blog
    await Blog.create(thailandBlog);
    console.log('Inserted Thailand blog successfully!');
  } catch (error) {
    console.error('Error seeding Thailand blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedThailandBlog(); 