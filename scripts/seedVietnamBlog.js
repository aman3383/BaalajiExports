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

const vietnamBlog = {
  country: 'Vietnam',
  slug: 'vietnam',
  title: "Vietnam's Booming Peanut Market",
  content: `
    <h2>Vietnam's Booming Peanut Market</h2>
    <h4>A Prime Opportunity for Indian Exporters</h4>
    <p>Vietnam is rapidly emerging as a dynamic destination in the global peanut value chain. With changing domestic cultivation trends, rising health consciousness, and a robust food processing industry, Vietnam offers a lucrative market for premium quality peanuts. For Indian exporters, this presents a strategic window to strengthen supply partnerships and expand market share.</p>
    <h5>Declining Domestic Production, Rising Import Needs</h5>
    <p>While peanut consumption in Vietnam is projected to reach 600,000 metric tons by 2026, domestic production is expected to decline slightly to 441,050 metric tons. This widening supply-demand gap underscores Vietnam's increasing reliance on peanut imports.</p>
    <div class="highlight-section">
      <h6>Vietnam's Peanut Production vs Consumption (2021-2026)</h6>
      <ul>
        <li>Production → Gradual decline (~ -0.1% per year)</li>
        <li>Consumption → Steady growth (~ +0.6% per year)</li>
      </ul>
    </div>
    <h5>India: Vietnam's Leading Peanut Supplier</h5>
    <p>India has established itself as Vietnam's largest peanut supplier, accounting for 46% of total imports in 2022–2023. India exported 0.16 million metric tons to Vietnam during this period, with popular varieties like Bold 40/50 and TJ 50/60 gaining strong traction.</p>
    <h5>Vietnam's Peanut Butter Market on the Rise</h5>
    <p>Vietnam's peanut butter market reached USD 20.2 million in 2024 and is projected to grow to USD 30.5 million by 2033 (CAGR 3.5%). Rising demand for healthy, plant-based snacks is driving this growth.</p>
    <div>
      <h6>Key Trends:</h6>
      <ul>
        <li>Health-conscious snacking culture</li>
        <li>Vegetarian and protein-rich diets</li>
        <li>Versatile use in sandwiches, dips, and smoothies</li>
      </ul>
    </div>
    <h5>Strategic Opportunities for Indian Exporters</h5>
    <ul>
      <li><strong>Year-Round Supply Advantage:</strong> India's year-round availability attracts Vietnamese buyers seeking stability.</li>
      <li><strong>Competitive Pricing:</strong> Indian peanuts are more cost-effective compared to local varieties, boosting export potential.</li>
      <li><strong>Product Versatility:</strong> From raw peanuts to processed peanut butter and oil, Indian exporters can cater to diverse B2B and retail needs.</li>
    </ul>
    <h5>Vietnam's Peanut Market Segments</h5>
    <div>
      <strong>Distribution Channels:</strong>
      <ul>
        <li>Supermarkets and Hypermarkets</li>
        <li>Convenience Stores</li>
        <li>Online Retail</li>
      </ul>
      <strong>Regional Demand:</strong>
      <ul>
        <li>Northern Vietnam</li>
        <li>Central Vietnam</li>
        <li>Southern Vietnam</li>
      </ul>
    </div>
    <h5>Conclusion: A Market Primed for Growth</h5>
    <p>Vietnam's peanut market stands at a pivotal point. With declining local production and expanding demand across retail, food service, and processing sectors, the door is open for Indian exporters. By leveraging quality, cost advantages, and reliability, India can cement its leadership in Vietnam's evolving peanut industry.</p>
  `,
  seo: {
    title: 'Vietnam Peanut Market | Market Trends & Export Opportunities | Balaji Exports',
    description: 'Explore the dynamic peanut market in Vietnam with comprehensive insights into market trends, export opportunities, and key business prospects for expanding in the Vietnamese market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'Vietnam peanut market, Vietnamese groundnut trade, Vietnam agricultural market, Vietnamese food industry, peanut exports Vietnam, Vietnam market opportunities, Southeast Asia peanut trade, Vietnamese import regulations, Vietnam food processing, Asian peanut markets, Vietnam trade opportunities, Vietnamese peanut demand, Vietnam agricultural imports, Southeast Asian markets' },
      { type: 'property', property: 'og:title', content: 'Vietnam Peanut Market | Market Trends & Export Opportunities | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the dynamic peanut market in Vietnam with comprehensive insights into market trends, export opportunities, and key business prospects for expanding in the Vietnamese market.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/vietnam' },
      { type: 'property', property: 'og:type', content: 'article' },
      { type: 'property', property: 'og:site_name', content: 'Balaji Exports' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/blogs/vietnam-peanut-market.jpg' },
      { type: 'property', property: 'og:locale', content: 'en_US' },
      { type: 'name', name: 'twitter:card', content: 'summary_large_image' },
      { type: 'name', name: 'twitter:title', content: 'Vietnam Peanut Market | Market Trends & Export Opportunities | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Explore the dynamic peanut market in Vietnam with comprehensive insights into market trends, export opportunities, and key business prospects for expanding in the Vietnamese market.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/blogs/vietnam-peanut-market.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/vietnam' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedVietnamBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing Vietnam blog if present
    await Blog.deleteOne({ slug: 'vietnam' });
    console.log('Removed existing Vietnam blog (if any)');

    // Insert new Vietnam blog
    await Blog.create(vietnamBlog);
    console.log('Inserted Vietnam blog successfully!');
  } catch (error) {
    console.error('Error seeding Vietnam blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedVietnamBlog(); 