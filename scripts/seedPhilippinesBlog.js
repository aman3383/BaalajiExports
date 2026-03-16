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

const philippinesBlog = {
  title: 'India-Philippines Peanut Trade | Southeast Asian Market Expansion & Export Opportunities | Balaji Exports',
  slug: 'philippines',
  country: 'Philippines',
  content: `
<h1>PHILIPPINES</h1>
<h2>Agriculture Trade Between India and the Philippines: A Growing Opportunity with a Focus on Peanut Exports</h2>
<p>India and the Philippines have witnessed significant growth in agriculture trade in recent years, driven by mutual interests in food security, raw material exchange, and economic cooperation. Among the various commodities traded, peanuts have emerged as a potential product of focus due to rising demand in the Philippines for both edible consumption and industrial processing.</p>
<h3>India-Philippines Agriculture Trade: An Overview</h3>
<p>The bilateral trade between India and the Philippines has expanded steadily, especially in the agro-sector. India, known for its diverse agro-climatic zones and agricultural expertise, exports a wide range of products such as:</p>
<ul>
  <li>Rice</li>
  <li>Spices</li>
  <li>Pulses</li>
  <li>Fruits & vegetables</li>
  <li>Groundnuts (peanuts)</li>
</ul>
<p>According to trade data:</p>
<ul>
  <li>India's agricultural exports to the Philippines crossed USD 350 million in 2023.</li>
  <li>Agri-imports from the Philippines to India totaled around USD 150 million, showing an increasing trade surplus in India's favor.</li>
  <li>The trade is projected to grow at a CAGR of 8-10% over the next five years, fueled by regional trade cooperation and agricultural demand in ASEAN.</li>
</ul>
<h3>The Rising Peanut Trade Between India and the Philippines</h3>
<h4>Why Peanuts?</h4>
<p>Peanuts, also known as groundnuts, are an essential part of the Philippine diet and food processing industry. The rising consumption of peanut butter, peanut oil, roasted snacks, confectionery products, and livestock feed has created a gap between local supply and demand.</p>
<p>India, being one of the largest producers and exporters of peanuts, is strategically positioned to fill this demand gap.</p>
<h4>Peanut Export from India to the Philippines: A Snapshot</h4>
<ul>
  <li>In 2023, India exported approximately 15,000 metric tons of raw peanuts to the Philippines, valued at over USD 18 million.</li>
  <li>The volume has grown by 20% year-on-year, driven by competitive pricing and consistent quality.</li>
  <li>Indian exporters offer peanuts, which are suitable for various uses in the Philippine market.</li>
</ul>
<h3>Varieties and Types of Peanuts Exported from India</h3>
<p>India grows several peanut varieties ideal for different industrial and edible applications. The main types exported to the Philippines include:</p>
<h4>1. Bold Peanuts</h4>
<ul>
  <li>Larger kernels with a reddish-brown skin</li>
  <li>Popular for oil extraction and direct edible use</li>
</ul>
<h4>2. Java Peanuts</h4>
<ul>
  <li>Rounder and smaller in size</li>
  <li>Used for confectionery, candies, and snacks</li>
</ul>
<h4>3. Redskin Peanuts</h4>
<ul>
  <li>Known for high oil content and strong flavor</li>
  <li>Preferred for traditional Filipino snacks and roasted mixes</li>
</ul>
<h3>Why Indian Peanuts Are in Demand in the Philippines</h3>
<ul>
  <li><strong>Competitive Pricing:</strong> India offers peanuts at affordable prices due to large-scale production.</li>
  <li><strong>Reliable Supply:</strong> Major peanut-producing states like Gujarat, Rajasthan, and Andhra Pradesh ensure year-round availability.</li>
  <li><strong>Quality Standards:</strong> Indian exporters follow APEDA and FSSAI guidelines, ensuring food safety and phytosanitary compliance.</li>
  <li><strong>Customized Packaging:</strong> Vacuum packaging, jute bags, and PP bags available in 25 kg / 50 kg sizes for bulk buyers.</li>
</ul>
<h3>Future Prospects: Strengthening the Agri Trade Ties</h3>
<p>With the Philippines aiming to diversify its food imports and India enhancing its agro-export capabilities, there's immense potential in:</p>
<ul>
  <li>Signing bilateral trade agreements focused on agricultural goods</li>
  <li>Participating in trade fairs and B2B matchmaking for peanut and agro product buyers</li>
  <li>Investing in warehousing and processing units in the Philippines for better supply chain efficiency</li>
</ul>
<h3>Final Thoughts</h3>
<p>The agriculture trade between India and the Philippines is poised for remarkable growth, with peanuts leading the charge as a high-potential commodity. With India's expertise in peanut cultivation and the Philippines' growing demand in food processing and retail sectors, the synergy is clear.</p>
<p>For Indian exporters, this is the right time to tap into the expanding Filipino peanut market by offering quality, variety, and competitive pricing. For Philippine buyers, sourcing from India ensures consistent supply and value.</p>
<p><strong>Interested in sourcing premium peanuts for the Philippines market?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-Philippines Peanut Trade | Southeast Asian Market Expansion & Export Opportunities | Balaji Exports',
    description: 'Explore the growing agricultural trade between India and the Philippines with insights into peanut varieties, export opportunities, and market trends in this expanding Southeast Asian market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India Philippines peanut trade, Philippine peanut market, Philippines groundnut imports, Filipino food industry, peanut exports Philippines, Indian groundnuts Philippines, Philippine market opportunities, Southeast Asia trade, Philippine agricultural trade, Philippines import regulations, Filipino snack industry, ASEAN peanut trade, Philippine food processing, Southeast Asian markets' },
      { type: 'property', property: 'og:title', content: 'India-Philippines Peanut Trade | Southeast Asian Market Expansion & Export Opportunities | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the growing agricultural trade between India and the Philippines with insights into peanut varieties, export opportunities, and market trends in this expanding Southeast Asian market.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/philippines' },
      { type: 'property', property: 'og:type', content: 'article' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/philippines' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedPhilippinesBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing Philippines blog if present
    await Blog.deleteOne({ slug: 'philippines' });
    console.log('Removed existing Philippines blog (if any)');

    // Insert new Philippines blog
    await Blog.create(philippinesBlog);
    console.log('Inserted Philippines blog successfully!');
  } catch (error) {
    console.error('Error seeding Philippines blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedPhilippinesBlog(); 