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

const ukBlog = {
  title: 'India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports',
  slug: 'uk',
  country: 'United Kingdom',
  content: `
<h1>UNITED KINGDOM</h1>
<h2>Growing Agriculture Trade Between India and the UK: Spotlight on Peanut Exports and the New Free Trade Agreement</h2>
<p>In recent years, the agriculture import export relationship between the UK and India has witnessed a remarkable transformation. With growing demand for quality agricultural produce and sustainable farming practices, the trade flow of essential commodities like Indian groundnuts, rice, spices, and vegetables has grown significantly. A major catalyst for this surge is the recently signed India UK Free Trade Agreement 2025, which is set to reshape the future of India UK agricultural trade.</p>
<h3>India-UK Agricultural Trade: A Rising Partnership</h3>
<p>India, with its diverse agro-climatic zones and large-scale farming, is a global powerhouse in agricultural exports. The United Kingdom, on the other hand, is a high-demand market known for its stringent quality standards and preference for natural, organic, and processed agri-products.</p>
<p>In 2024, the value of agriculture trade between India and the UK crossed $1.2 billion, reflecting an impressive 11% year-on-year growth. This includes exports of rice, fresh vegetables, tea, oilseeds, and especially Indian peanuts.</p>
<ul>
  <li>$1.2 billion in agricultural trade value (2024)</li>
  <li>11% year-on-year growth in trade volume</li>
  <li>18% increase in peanut exports specifically</li>
  <li>Expected 20-25% growth in 2025 due to the Free Trade Agreement</li>
</ul>
<h3>Peanuts: A Key Commodity in India-UK Trade</h3>
<p>Among all agri-products, peanut exports from India have emerged as one of the fastest-growing segments in the India UK agricultural trade. This trend is largely driven by the UK's rising consumption of protein-rich, plant-based snacks, natural oils, and health-oriented nut products.</p>
<ul>
  <li>India exported around 45,000 metric tons of peanuts to the UK in 2024, up from 38,000 metric tons in 2023.</li>
  <li>This marks an impressive 18% growth in India peanut trade.</li>
  <li>Analysts predict another 20–25% rise in 2025, thanks to increasing demand in the UK food industry trade and processed snack sectors.</li>
  <li>The shift toward healthier eating habits in the UK, including a preference for natural, allergen-free ingredients, is further pushing demand for Indian groundnuts export.</li>
</ul>
<h3>Types and Varieties of Indian Peanuts Exported to the UK</h3>
<p>India produces a wide range of peanut varieties suitable for different industries:</p>
<ul>
  <li><strong>Bold (Runner) Peanuts:</strong> Large kernels with high oil content. Ideal for peanut butter and snack manufacturing. Popular in UK food processing industry.</li>
  <li><strong>Java Peanuts:</strong> Small, sweet kernels. Highly suited for the confectionery industry and roasting. Used in premium snack mixes in the UK market.</li>
  <li><strong>TJ (Java Type) Peanuts:</strong> Medium-sized kernels. Commonly used in bird feed, roasted snacks, and salting. Growing popularity in health food segments.</li>
  <li><strong>Spanish and Red Natal Peanuts:</strong> High in oil content. Widely used for oil extraction. Also used in the UK cosmetics industry.</li>
</ul>
<p>These varieties are carefully cultivated, sorted, and processed to meet international standards, making Indian peanuts in UK markets highly sought after.</p>
<h3>India-UK Free Trade Agreement 2025: A Game-Changer</h3>
<p>The newly signed India UK Free Trade Agreement 2025 has been hailed as a transformative policy for both economies. From reducing tariffs to streamlining logistics, the agreement specifically enhances the flow of agriculture import export UK India.</p>
<ul>
  <li>Elimination of tariffs on key Indian exports including groundnuts, rice, and spices</li>
  <li>Faster customs clearances and documentation processes</li>
  <li>Mutual recognition of agri-certifications and safety standards</li>
  <li>Promotion of climate-smart agriculture and sustainable practices</li>
</ul>
<p>This FTA opens a new chapter in India UK FTA agriculture relations, offering immense benefits to both exporters and buyers.</p>
<h3>Benefits to the UK Agriculture and Food Industry</h3>
<p>While the FTA unlocks Indian market potential, it also offers strategic advantages to the UK:</p>
<ul>
  <li>Provides cost-effective raw materials such as peanuts and oilseeds</li>
  <li>Supports UK's growing plant-based food and healthy snack industries</li>
  <li>Strengthens food security by reducing dependency on fewer countries</li>
  <li>Encourages research partnerships in agri-tech and sustainable farming</li>
</ul>
<p>By integrating Indian agricultural inputs into its supply chain, the UK food industry trade can improve product diversity and cost efficiency.</p>
<h3>Conclusion</h3>
<p>The future of India UK agricultural trade looks brighter than ever, with peanut exports from India playing a crucial role in driving momentum. The India UK Free Trade Agreement 2025 will lower trade barriers, enhance product quality, and open new opportunities for exporters, importers, and food producers.</p>
<p>As demand rises and trade expands, Indian peanuts in UK market are set to become a staple ingredient in both households and industries. Now is the ideal time for businesses on both sides to seize this opportunity and build strong trade alliances.</p>
<p><strong>Looking to import premium-quality peanuts from India to United Kingdom?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports',
    description: 'Explore the India-UK peanut trade partnership under the Free Trade Agreement. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the UK market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India UK peanut trade, Indian peanut exports UK, groundnut trade partnership, peanut market UK, Indian peanut suppliers UK, peanut export opportunities, UK peanut market, Indian groundnut exports, peanut trade policies, UK peanut importers, Indian peanut exporters, peanut market analysis UK, groundnut trade partnership, peanut export business UK, Indian peanut suppliers, UK peanut market trends, peanut trade opportunities, Indian groundnut suppliers UK, peanut export market UK, peanut trade partnership India UK' },
      { type: 'property', property: 'og:title', content: 'India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the India-UK peanut trade partnership under the Free Trade Agreement. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the UK market.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/uk' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/uk-peanut-trade-og.jpg' },
      { type: 'property', property: 'og:type', content: 'article' },
      { type: 'name', name: 'twitter:title', content: 'India-UK Peanut Trade | Free Trade Agreement & Market Opportunities | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Explore the India-UK peanut trade partnership under the Free Trade Agreement. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the UK market.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/uk-peanut-trade-og.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/uk' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedUKBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing UK blog if present
    await Blog.deleteOne({ slug: 'uk' });
    console.log('Removed existing UK blog (if any)');

    // Insert new UK blog
    await Blog.create(ukBlog);
    console.log('Inserted UK blog successfully!');
  } catch (error) {
    console.error('Error seeding UK blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedUKBlog(); 