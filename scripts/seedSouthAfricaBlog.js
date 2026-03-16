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

const southAfricaBlog = {
  title: 'India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports',
  slug: 'south-africa',
  country: 'South Africa',
  content: `
<h1>SOUTH AFRICA</h1>
<h2>Booming Agricultural Trade Between India and South Africa: A Closer Look at Peanut Exports</h2>
<p>India and South Africa have cultivated a strong and evolving trade relationship, especially in the area of agriculture and food commodities. As both countries look to diversify their trade portfolios and strengthen food security, agriculture trade between India and South Africa has taken center stage.</p>
<p>Among the many crops traded, peanuts (groundnuts) have become one of the most promising export items from India to South Africa. With rising demand for protein-rich, plant-based food sources, Indian peanuts are increasingly finding a place on South African shelves.</p>
<h3>Growing Bilateral Trade in Agriculture</h3>
<p>India has consistently ranked among the top exporters of agricultural and processed food products to African nations. South Africa, being one of the continent's most industrialized economies, serves as a vital trading partner for India in Southern Africa.</p>
<ul>
  <li>India's agricultural exports to South Africa crossed USD 1.2 billion in 2023, marking steady growth driven by rising demand for staples such as rice, spices, legumes, and oilseeds.</li>
  <li>Among these exports, groundnuts have seen notable growth, with a significant portion destined for food processing and snack industries in South Africa.</li>
</ul>
<h3>Indian Peanut Trade with South Africa: Trends and Growth</h3>
<p>India is one of the world's largest producers and exporters of raw and processed peanuts, making it a preferred supplier for countries like South Africa. Indian groundnuts are known for their rich oil content, uniform kernel size, and competitive pricing—qualities that suit both the retail and processing segments.</p>
<ul>
  <li>In FY 2022–23, India exported approximately 30,000 metric tonnes of peanuts to South Africa, valued at around USD 24 million.</li>
  <li>This marks a year-on-year increase of over 11%, with rising interest in bold peanuts, blanched peanuts, and peanut oil.</li>
</ul>
<h3>Popular Varieties of Peanuts Exported from India</h3>
<p>Indian exporters supply a wide range of peanut types tailored to the specific needs of the South African market. These include:</p>
<ul>
  <li><strong>Bold Peanuts:</strong> Large-sized peanuts with high oil content. Ideal for roasting and snack production. Their nutty flavor and firm texture make them a staple in many food formulations.</li>
  <li><strong>Java Peanuts:</strong> Smaller in size. Preferred for confectionery, peanut butter, and snack bars. Prized for their sweetness and consistency.</li>
  <li><strong>Blanched Peanuts:</strong> Peanuts with their skins removed. Favored by food processors for use in bakeries, sauces, and health foods. Their clean, white appearance meets international aesthetic standards.</li>
  <li><strong>Redskin Peanuts:</strong> Known for their reddish-brown skin. Used in traditional snacks and gourmet applications.</li>
</ul>
<p>India also exports cold-pressed peanut oil, which is gaining attention in South Africa's health-conscious food industry. The residual peanut meal is utilized in cattle feed and organic fertilizers, supporting the country's agricultural sustainability goals.</p>
<h3>Why South Africa Prefers Indian Peanuts</h3>
<ul>
  <li>Cost-effectiveness and high quality, backed by global certifications such as ISO, FSSAI, and HACCP.</li>
  <li>Availability of non-GMO and organic peanut options, in line with South Africa's growing demand for natural and clean-label foods.</li>
  <li>Strong logistical connectivity via Indian ports ensures timely delivery and bulk shipments.</li>
  <li>Flexibility in packaging formats and peanut grades suited for industrial and retail requirements.</li>
</ul>
<h3>Future Outlook: Strengthening Trade Ties and Market Potential</h3>
<ul>
  <li>The peanut export market from India to South Africa is expected to grow at 8–10% CAGR over the next five years.</li>
  <li>Rising consumer interest in plant-based proteins.</li>
  <li>Expanding food processing industries in South Africa.</li>
  <li>Demand for versatile and high-protein snack ingredients.</li>
</ul>
<p>Indian exporters are also exploring value-added peanut products such as roasted peanuts, peanut butter, and peanut flour to meet evolving tastes and nutritional preferences in South Africa.</p>
<h3>Conclusion</h3>
<p>India and South Africa's agricultural trade partnership continues to evolve with a shared focus on food security, economic development, and sustainable farming. Indian peanuts, in particular, are emerging as a star export product due to their quality, variety, and adaptability to diverse uses.</p>
<p>For South African importers, the Indian peanut market offers reliability, variety, and cost advantage—all essential factors in today's competitive food industry.</p>
<p><strong>Looking to import premium-quality peanuts from India to South Africa?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports',
    description: 'Explore the booming agricultural trade between India and South Africa with insights into growing peanut exports, Southern African market trends, and varieties most popular in the African market.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India South Africa peanut trade, South African peanut market, South Africa groundnut imports, African peanut trade, South African food industry, peanut exports South Africa, Indian groundnuts Africa, South African market opportunities, African agricultural trade, South Africa import regulations, Southern African markets, African food processing, SADC trade, South African peanut demand' },
      { type: 'property', property: 'og:title', content: 'India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Explore the booming agricultural trade between India and South Africa with insights into growing peanut exports, Southern African market trends, and varieties most popular in the African market.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/south-africa' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/blogs/south-africa-peanut-trade.jpg' },
      { type: 'property', property: 'og:type', content: 'article' },
      { type: 'name', name: 'twitter:title', content: 'India-South Africa Peanut Trade | African Market Expansion & Trade Partnership | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Explore the booming agricultural trade between India and South Africa with insights into growing peanut exports, Southern African market trends, and varieties most popular in the African market.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/blogs/south-africa-peanut-trade.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/south-africa' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedSouthAfricaBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing South Africa blog if present
    await Blog.deleteOne({ slug: 'south-africa' });
    console.log('Removed existing South Africa blog (if any)');

    // Insert new South Africa blog
    await Blog.create(southAfricaBlog);
    console.log('Inserted South Africa blog successfully!');
  } catch (error) {
    console.error('Error seeding South Africa blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedSouthAfricaBlog(); 