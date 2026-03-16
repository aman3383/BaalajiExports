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

const russiaBlog = {
  title: 'India-Russia Peanut Trade | Strategic Market Partnership & Export Opportunities | Balaji Exports',
  slug: 'russia',
  country: 'Russia',
  content: `
<h1>RUSSIA</h1>
<h2>India-Russia Agriculture Trade: A Growing Opportunity with a Focus on Peanuts</h2>
<p>The agriculture trade between India and Russia has seen consistent growth over the past few years, driven by both countries' strategic efforts to strengthen bilateral relations. While energy and defense have traditionally dominated India-Russia trade, agriculture and food products are emerging as high-potential sectors. Among these, peanuts have become a significant commodity, with India being one of the world's largest producers and exporters.</p>
<p>This blog explores the trends, trade volumes, and prospects of agricultural trade—particularly the peanut trade between India and Russia—while highlighting varieties of peanuts, market demand, and the potential for future expansion.</p>
<h3>India-Russia Agriculture Trade: An Overview</h3>
<p>India and Russia have shared a strong diplomatic and economic relationship for decades. In recent years, agriculture has become a central pillar of this partnership. According to the Ministry of Commerce and Industry of India, bilateral trade between India and Russia touched $65 billion in 2023, with agriculture forming a steadily growing segment.</p>
<ul>
  <li>Peanuts</li>
  <li>Tea and Coffee</li>
  <li>Spices</li>
  <li>Rice</li>
  <li>Fruits and Vegetables</li>
</ul>
<p>Meanwhile, India imports sunflower oil, fertilizers, and wheat from Russia, creating a complementary trade balance.</p>
<h3>Peanut Trade Between India and Russia: Rising Demand</h3>
<p>India is the second-largest producer of peanuts globally, and Russia is emerging as a promising market due to increasing demand for plant-based proteins, edible oil, and snack-grade peanuts.</p>
<h4>Growth in Peanut Exports</h4>
<p>As per APEDA (Agricultural and Processed Food Products Export Development Authority), India exported over 650,000 metric tons of peanuts globally in 2023. Russia's share in Indian peanut exports has steadily risen, reaching over 35,000 metric tons in 2023—up by nearly 28% from the previous year.</p>
<h4>Why Russia is Buying More Indian Peanuts:</h4>
<ul>
  <li>Competitive pricing</li>
  <li>High oil content and quality</li>
  <li>Strong shelf life for processed peanuts</li>
  <li>Russia's growing peanut butter and confectionery industry</li>
  <li>Reduced imports from other nations due to geopolitical issues</li>
</ul>
<h3>Types and Varieties of Peanuts Exported from India</h3>
<p>India offers a wide range of peanut varieties catering to different needs—be it for edible consumption, oil extraction, or snack processing.</p>
<h4>Popular Peanut Varieties:</h4>
<h5>Bold (Runner) Peanuts</h5>
<ul>
  <li>Large kernels</li>
  <li>High oil content</li>
  <li>Ideal for peanut butter and roasting</li>
  <li>Size: 40/50, 50/60, 60/70 counts per ounce</li>
</ul>
<h5>Java Peanuts</h5>
<ul>
  <li>Smaller kernels</li>
  <li>Sweeter taste</li>
  <li>Popular in confectionery and snacks</li>
</ul>
<h5>TJ (Java Type) Peanuts</h5>
<ul>
  <li>Hybrid variant of Java</li>
  <li>Spherical shape</li>
  <li>High protein value</li>
</ul>
<h5>Red Skin Peanuts (Spanish Type)</h5>
<ul>
  <li>High oil content</li>
  <li>Used in oil crushing and roasting</li>
</ul>
<p>These varieties are mostly sourced from Gujarat, Andhra Pradesh, Tamil Nadu, and Rajasthan, with Gujarat alone contributing over 40% of India's peanut production.</p>
<h3>Export Standards and Certifications</h3>
<p>To ensure smooth trade, Indian peanut exporters comply with international standards, including:</p>
<ul>
  <li>AFI (American Food Industries) Grade Standards</li>
  <li>EU Pesticide Residue Limits</li>
  <li>BRC, HACCP, and ISO certifications</li>
</ul>
<h3>Future Outlook: Strengthening India-Russia Peanut Trade</h3>
<p>India and Russia are actively working on trade corridor improvements like INSTC (International North-South Transport Corridor) which will reduce shipping time and costs. This makes Indian agricultural products—especially bulk commodities like peanuts—more attractive in the Russian market.</p>
<p>Moreover, there's rising demand for organic and value-added peanut products such as:</p>
<ul>
  <li>Peanut Butter</li>
  <li>Roasted & Salted Peanuts</li>
  <li>Blanched Peanuts</li>
  <li>Peanut Oil</li>
</ul>
<p><strong>Interested in sourcing premium peanuts for the Russian market?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-Russia Peanut Trade | Strategic Market Partnership & Export Opportunities | Balaji Exports',
    description: 'Explore the growing agricultural trade between India and Russia with insights into peanut exports, strategic market opportunities, and the significant potential in this important Russian market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India Russia peanut trade, Russian peanut market, Russia groundnut imports, Russian food industry, peanut exports Russia, Indian groundnuts Russia, Russian market opportunities, Russia agricultural trade, Russian import regulations, Russian food processing, Eurasian peanut trade, Russia market potential, Russian snack industry, strategic trade partnership' },
      { type: 'property', property: 'og:title', content: 'India-Russia Peanut Trade | Strategic Market Partnership & Export Opportunities | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the growing agricultural trade between India and Russia with insights into peanut exports, strategic market opportunities, and the significant potential in this important Russian market.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/russia' },
      { type: 'property', property: 'og:type', content: 'article' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/russia' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedRussiaBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing Russia blog if present
    await Blog.deleteOne({ slug: 'russia' });
    console.log('Removed existing Russia blog (if any)');

    // Insert new Russia blog
    await Blog.create(russiaBlog);
    console.log('Inserted Russia blog successfully!');
  } catch (error) {
    console.error('Error seeding Russia blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedRussiaBlog(); 