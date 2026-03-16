// Script to seed the USA blog content and SEO metadata into MongoDB
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

const usaBlog = {
  country: 'United States of America',
  slug: 'usa',
  title: 'India–USA Agriculture Trade: A Flourishing Partnership with Rising Peanut Exports',
  content: `
    <h2>UNITED STATES OF AMERICA</h2>
    <h4>India–USA Agriculture Trade: A Flourishing Partnership with Rising Peanut Exports</h4>
    <p>The agricultural relationship between India and the United States has evolved into a strong economic partnership, driven by mutual trade interests, sustainability goals, and the global demand for diverse, high-quality agri-products. As both countries continue to strengthen their trade ties, Indian agricultural exports to the U.S. have shown remarkable growth — with peanut trade emerging as a key contributor to this success.</p>
    <p>In this blog, we explore the scope of agricultural trade between India and the USA, the rising demand for Indian peanuts, and how this partnership is shaping the global agri-food landscape.</p>
    <h5>Growing Agricultural Trade Between India and the USA</h5>
    <p>India ranks among the top exporters of agri-products such as rice, spices, tea, fruits, pulses, and oilseeds. The United States, being one of the largest importers of food products globally, represents a significant destination for Indian agriculture and food exports.</p>
    <div class="highlight-section">
      <h6>Key Trade Statistics:</h6>
      <ul>
        <li>In 2023, India's total agricultural exports to the United States crossed $3.2 billion</li>
        <li>This growth is driven by increasing demand for non-GMO, plant-based, and sustainably sourced food ingredients</li>
        <li>The U.S. market shows a growing appetite for Indian commodities known for their quality, traceability, and competitive pricing</li>
      </ul>
    </div>
    <h5>Indian Peanut Trade with the United States: A Rising Star</h5>
    <p>Among various commodities, peanuts (groundnuts) have gained strong traction in the U.S. market. With the growing focus on plant-based nutrition, clean eating, and protein-rich snacks, Indian peanuts are now finding their way into American households, restaurants, and food manufacturing units.</p>
    <div class="highlight-section">
      <h6>Export Data:</h6>
      <ul>
        <li>India exported approximately 65,000 metric tonnes of peanuts to the United States in FY 2022–23</li>
        <li>Total trade value exceeding $50 million</li>
        <li>This marks a significant year-over-year growth, supported by improved quality controls, international certifications, and India's ability to offer processed and value-added peanut products</li>
      </ul>
    </div>
    <h5>Varieties of Peanuts Exported from India to the U.S.</h5>
    <p>India is known for its wide variety of groundnuts, each serving different industry needs in the United States, including snack foods, peanut butter production, oil extraction, and bakery use.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
      <div style="width: 48%;">
        <div class="highlight-section">
          <h6>Bold Peanuts</h6>
          <ul>
            <li>Large in size, rich in oil content, and ideal for roasting</li>
            <li>Known for their crunch and earthy flavor</li>
            <li>Used extensively in snack and health food products</li>
          </ul>
        </div>
      </div>
      <div style="width: 48%;">
        <div class="highlight-section">
          <h6>Java Peanuts</h6>
          <ul>
            <li>Smaller and rounder than Bold peanuts</li>
            <li>Preferred for their sweetness</li>
            <li>Widely used in peanut butter production, confectionery, and packaged snacks</li>
          </ul>
        </div>
      </div>
      <div style="width: 48%;">
        <div class="highlight-section">
          <h6>Blanched Peanuts</h6>
          <ul>
            <li>Peanuts with the skin removed</li>
            <li>Offering a clean, smooth appearance</li>
            <li>Ideal for use in bakery items, sauces, protein bars, and peanut-based beverages in the U.S. health food segment</li>
          </ul>
        </div>
      </div>
      <div style="width: 48%;">
        <div class="highlight-section">
          <h6>Redskin Peanuts</h6>
          <ul>
            <li>Specialty variety known for its naturally red outer skin</li>
            <li>Favored in gourmet snacks and ethnic food recipes</li>
          </ul>
        </div>
      </div>
    </div>
    <p>India also exports cold-pressed peanut oil and peanut meal (cake) to the United States, catering to the growing demand for organic oils and animal feed ingredients.</p>
    <h5>Why U.S. Buyers Prefer Indian Peanuts</h5>
    <p>Indian peanuts are becoming increasingly popular among U.S. importers and food manufacturers due to several key advantages:</p>
    <div class="highlight-section">
      <ul>
        <li>Non-GMO certification and sustainable farming practices</li>
        <li>Competitive pricing with reliable year-round supply</li>
        <li>Strict quality standards and compliance with U.S. FDA regulations</li>
        <li>Customizable peanut forms: in-shell, shelled, raw, blanched, roasted, or oil-processed</li>
        <li>Strong traceability from farm to port</li>
      </ul>
    </div>
    <p>These factors have made India a preferred sourcing destination for American companies seeking high-quality peanuts for bulk purchase or private-label processing.</p>
    <h5>Trade Growth Outlook and Future Opportunities</h5>
    <p>The India–USA peanut trade is expected to grow at a CAGR of 10–12% over the next few years, driven by:</p>
    <div class="highlight-section">
      <ul>
        <li>Rising demand for plant-based protein sources</li>
        <li>Increased consumption of natural and healthy snack foods</li>
        <li>Growing popularity of Indian-origin food products in U.S. retail stores</li>
        <li>Expanding interest in organic and value-added peanut products</li>
      </ul>
    </div>
    <p>There is also immense scope for innovation in peanut-based exports such as peanut flour, peanut milk, protein powder, and energy bars, which are gaining traction in the American wellness and fitness industries.</p>
    <h5>Conclusion</h5>
    <p>The strategic agricultural trade partnership between India and the United States continues to thrive, with peanuts emerging as a vital export commodity. As Indian suppliers focus on quality, compliance, and customer-specific requirements, U.S. buyers are increasingly turning to India for their groundnut needs.</p>
    <p>Whether you're a wholesaler, distributor, or food manufacturer in the U.S., sourcing high-grade Indian peanuts offers you a reliable and scalable solution tailored to evolving market demands.</p>
  `,
  seo: {
    title: 'India-USA Peanut Trade Partnership | Market Insights & Export Opportunities | Balaji Exports',
    description: 'Explore the growing India-USA peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the US market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India USA peanut trade, Indian peanut exports USA, groundnut trade partnership, peanut market USA, Indian peanut suppliers USA, peanut export opportunities, USA peanut market, Indian groundnut exports, peanut trade policies, USA peanut importers, Indian peanut exporters, peanut market analysis USA, groundnut trade partnership, peanut export business USA, Indian peanut suppliers, USA peanut market trends, peanut trade opportunities, Indian groundnut suppliers USA, peanut export market USA, peanut trade partnership India USA' },
      { type: 'property', property: 'og:title', content: 'India-USA Peanut Trade Partnership | Market Insights & Export Opportunities | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the growing India-USA peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the US market.' },
      { type: 'property', property: 'og:type', content: 'website' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/usa' },
      { type: 'property', property: 'og:site_name', content: 'Balaji Exports' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/usa-peanut-trade-og.jpg' },
      { type: 'property', property: 'og:locale', content: 'en_US' },
      { type: 'name', name: 'twitter:card', content: 'summary_large_image' },
      { type: 'name', name: 'twitter:site', content: '@BalajiExports' },
      { type: 'name', name: 'twitter:title', content: 'India-USA Peanut Trade Partnership | Market Insights & Export Opportunities | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Explore the growing India-USA peanut trade partnership. Learn about market opportunities, trade policies, and export potential for Indian groundnuts in the US market.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/usa-peanut-trade-og.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/usa' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedUSABlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing USA blog if present
    await Blog.deleteOne({ slug: 'usa' });
    console.log('Removed existing USA blog (if any)');

    // Insert new USA blog
    await Blog.create(usaBlog);
    console.log('Inserted USA blog successfully!');
  } catch (error) {
    console.error('Error seeding USA blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedUSABlog(); 