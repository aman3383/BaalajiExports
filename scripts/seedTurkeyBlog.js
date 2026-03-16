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

const turkeyBlog = {
  title: 'India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports',
  slug: 'turkey',
  country: 'Turkey',
  content: `
<h1>TURKEY</h1>
<h2>Understanding the Peanut Import Market in Turkey and the India-Turkey Agricultural Trade</h2>
<p>In recent years, Turkey has emerged as a key importer of agricultural commodities, with peanuts becoming a vital part of its oilseed and snack food market. The rising demand for high-quality groundnuts has positioned Turkey as a growing market for peanut exporters across the globe—particularly India, a leading peanut-producing country.</p>
<h3>The Growing Demand for Peanuts in Turkey</h3>
<p>Peanuts, known locally in Turkey as "yer fıstığı," are popular in various forms—salted snacks, peanut butter, confectionery, and oil extraction. Turkey's domestic peanut production, primarily in the southern provinces such as Osmaniye and Adana, is not sufficient to meet its rising consumption needs. This demand-supply gap has led to increased imports of peanuts, especially bold and Java varieties, which are preferred for both oil and snack purposes.</p>
<ul>
  <li>In 2024, Turkey imported over 30,000 metric tons of peanuts</li>
  <li>The import value of peanuts has crossed $40 million USD</li>
  <li>Consistent year-on-year growth shows Turkey as a lucrative destination for groundnut exporters</li>
</ul>
<h3>India's Role in the Global Peanut Market</h3>
<p>India stands among the top three peanut-producing nations globally, thanks to its vast arable land and favorable agro-climatic zones, especially in Gujarat, Andhra Pradesh, Tamil Nadu, and Rajasthan. Indian peanuts are renowned for their quality, oil content, and multiple varieties such as Bold, Java, TJ, and Redskin.</p>
<ul>
  <li>India exported more than 800,000 MT of peanuts globally in 2024–2025</li>
  <li>Export value exceeded $1 billion USD</li>
  <li>Strengthening presence in non-traditional markets including Turkey</li>
</ul>
<h3>India-Turkey Agricultural Trade: An Overview</h3>
<p>India and Turkey share a long-standing trade relationship, and agriculture forms a growing part of their bilateral trade. India's exports to Turkey mainly include:</p>
<ul>
  <li>Peanuts and other oilseeds</li>
  <li>Rice and cereals</li>
  <li>Spices</li>
  <li>Cotton</li>
  <li>Fresh and processed fruits</li>
</ul>
<p>Turkey, on the other hand, exports dried fruits, processed food, and olive oil to India. The total agricultural trade volume between India and Turkey exceeded $700 million USD in 2024, with potential to grow further with trade facilitation, reduced tariffs, and better logistics.</p>
<h3>Opportunities for Indian Peanut Exporters in Turkey</h3>
<ul>
  <li><strong>Year-round demand:</strong> Turkey has consistent demand due to both consumption and processing industries.</li>
  <li><strong>Preference for Indian varieties:</strong> Indian Bold and Java peanuts meet Turkish buyers' size and oil content requirements.</li>
  <li><strong>Growing health awareness:</strong> Peanuts are gaining popularity as a healthy protein-rich snack.</li>
  <li><strong>Favorable logistics:</strong> Proximity via the Mediterranean route allows faster and cost-effective shipment from Indian ports to Turkey.</li>
</ul>
<h3>Market Trends and Forecast</h3>
<p>The Turkish peanut market is expected to grow at a CAGR of 5–7% in the next five years, driven by increased snack food consumption and the growing food processing industry. There is also increasing interest in blanched peanuts, roasted kernels, and peanut oil, all of which present opportunities for value-added exports from India.</p>
<p>Meanwhile, India is actively promoting agricultural exports under its Agri-Export Policy, aiming to expand its footprint in strategic markets like Turkey. Exporters who ensure quality certifications, traceability, and timely shipments will have a competitive edge.</p>
<h3>Conclusion</h3>
<p>The peanut import market in Turkey is on a steady rise, and India, with its strong production capacity and product diversity, is well-placed to meet this growing demand. Strengthening trade ties, addressing regulatory requirements, and building trusted relationships with Turkish importers will pave the way for increased peanut exports and broader agricultural cooperation between the two nations.</p>
<p>As Turkey continues to look outward to meet its agricultural import needs, India stands as a strategic and reliable partner—not just in peanuts, but across the agri value chain.</p>
<p><strong>Looking to import premium-quality peanuts from India to Turkey?</strong> <a href="/#products">Explore Our Product Range</a></p>
`,
  seo: {
    title: 'India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports',
    description: 'Understanding the growing peanut import market in Turkey and the flourishing agricultural trade partnership between India and Turkey with insights into market opportunities and trade potential.',
    metaTags: [
      { type: 'name', name: 'keywords', content: 'India Turkey peanut trade, Turkish peanut market, Turkey groundnut imports, Turkish food industry, peanut exports Turkey, Indian groundnuts Turkey, Turkish market opportunities, Turkey agricultural trade, Turkish import regulations, Middle East peanut trade, Turkish food processing, Turkey market potential, Turkish snack industry, Eurasian trade corridor' },
      { type: 'property', property: 'og:title', content: 'India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports' },
      { type: 'property', property: 'og:description', content: 'Understanding the growing peanut import market in Turkey and the flourishing agricultural trade partnership between India and Turkey with insights into market opportunities and trade potential.' },
      { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/turkey' },
      { type: 'property', property: 'og:image', content: 'https://balajiexports.com/images/blogs/turkey-peanut-trade.jpg' },
      { type: 'property', property: 'og:type', content: 'article' },
      { type: 'name', name: 'twitter:title', content: 'India-Turkey Peanut Trade | Growing Import Market & Agricultural Partnership | Balaji Exports' },
      { type: 'name', name: 'twitter:description', content: 'Understanding the growing peanut import market in Turkey and the flourishing agricultural trade partnership between India and Turkey with insights into market opportunities and trade potential.' },
      { type: 'name', name: 'twitter:image', content: 'https://balajiexports.com/images/blogs/turkey-peanut-trade.jpg' }
    ],
    linkTags: [
      { rel: 'canonical', href: 'https://balajiexports.com/blogs/turkey' }
    ],
    scriptTags: []
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedTurkeyBlog() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Remove existing Turkey blog if present
    await Blog.deleteOne({ slug: 'turkey' });
    console.log('Removed existing Turkey blog (if any)');

    // Insert new Turkey blog
    await Blog.create(turkeyBlog);
    console.log('Inserted Turkey blog successfully!');
  } catch (error) {
    console.error('Error seeding Turkey blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedTurkeyBlog(); 