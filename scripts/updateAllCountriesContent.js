const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

// Blog schema
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
  seo: seoSchema,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// Complete content for all countries
const allCountriesContent = {
  'germany': {
    title: 'Germany Market Analysis - India Peanut Exports',
    content: `<h1>GERMANY</h1>
<h2>Agriculture Trade Between India and Germany: A Growing Opportunity for Peanuts and More</h2>

<p>The agriculture trade between India and Germany has witnessed consistent growth over the past decade, driven by increasing demand for organic products, sustainable sourcing, and high-quality food ingredients. As Europe's largest economy, Germany imports significant agricultural commodities to fuel its food processing and manufacturing industries.</p>

<h3>India–Germany Agriculture Trade Overview</h3>

<h4>Key Highlights:</h4>
<ul>
<li>India and Germany enjoy a robust bilateral trade relationship. As of 2024, India exported agricultural commodities worth over $1.2 billion to Germany.</li>
<li>Germany's increasing shift toward plant-based diets and sustainable sourcing is pushing demand for quality agricultural produce from countries like India.</li>
<li>In return, Germany exports agricultural machinery, dairy technology, and food processing equipment to India.</li>
</ul>

<h3>Peanut Trade Between India and Germany</h3>

<p>Peanuts have become a significant export commodity from India to Germany, driven by the country's growing demand for healthy snacks, plant-based proteins, and sustainable food ingredients.</p>

<h4>Current Export Statistics:</h4>
<ul>
<li>India exported approximately 25,000 metric tons of peanuts to Germany in 2023.</li>
<li>This represents a 20% increase from the previous year, reflecting growing market acceptance.</li>
<li>The export value reached $35 million, making Germany one of the top European destinations for Indian peanuts.</li>
</ul>

<h3>Popular Indian Peanut Varieties in Germany</h3>

<h4>1. Bold Peanuts</h4>
<p>Bold peanuts are highly sought after in Germany for their large size and excellent taste. They are primarily used in the confectionery industry and premium peanut butter manufacturing.</p>

<h4>2. Java Peanuts</h4>
<p>Java peanuts, with their distinctive reddish skin and sweet flavor, are popular in Germany's organic food market.</p>

<h3>Market Opportunities</h3>
<ul>
<li><strong>Organic Market Growth:</strong> Germany has one of Europe's largest organic food markets.</li>
<li><strong>Plant-Based Foods:</strong> Rising popularity of plant-based diets has increased demand for peanut-based proteins.</li>
<li><strong>Premium Positioning:</strong> German consumers are willing to pay premium prices for high-quality, sustainably sourced peanuts.</li>
</ul>`,
    seo: {
      title: 'India-Germany Agricultural Trade | Peanut Exports',
      description: 'Discover the growing agricultural trade between India and Germany with a special focus on peanut exports, sustainable sourcing, and market opportunities in Europe\'s largest economy.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Germany peanut market 2024, Indian peanut exports Germany, groundnut import Germany' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/germany' }
      ],
      scriptTags: []
    }
  },
  'indonesia': {
    title: 'Indonesia Market Analysis - Peanut Trade Opportunities',
    content: `<h1>INDONESIA</h1>
<h2>Agriculture Trade Between India and Indonesia: Growing Partnership in Peanut Exports</h2>

<p>Indonesia, the world's largest archipelago nation with over 270 million people, represents a significant market opportunity for Indian agricultural exports. The agricultural trade between India and Indonesia has been steadily growing, driven by Indonesia's large population, economic development, and increasing demand for quality food products.</p>

<h3>India-Indonesia Agriculture Trade Overview</h3>

<p>India and Indonesia share strong trade relationships in the agricultural sector. Indonesia imports various agricultural commodities from India to meet domestic demand and support its growing food processing industry.</p>

<h4>Key Trade Statistics:</h4>
<ul>
<li>India's agricultural exports to Indonesia exceeded $800 million in 2023.</li>
<li>Major exports include rice, wheat, spices, cotton, and oilseeds including peanuts.</li>
<li>Indonesia's strategic location makes it a gateway to Southeast Asian markets.</li>
<li>The country's growing middle class is driving demand for premium food products.</li>
</ul>

<h3>Peanut Market in Indonesia</h3>

<p>Indonesia's peanut market has shown consistent growth, driven by the country's expanding snack food industry, confectionery sector, and traditional food preparations that use peanuts as key ingredients.</p>

<h4>Market Dynamics:</h4>
<ul>
<li>Indonesia imported approximately 12,000 metric tons of peanuts from India in 2023.</li>
<li>The import value reached $14 million, showing strong growth potential.</li>
<li>Local demand is driven by traditional Indonesian cuisine, snack production, and oil extraction.</li>
<li>Growing health consciousness is increasing demand for peanuts as healthy snacks.</li>
</ul>

<h3>Popular Peanut Varieties in Indonesia</h3>

<h4>1. Java Peanuts</h4>
<p>Java peanuts are particularly popular in Indonesia due to their sweet flavor and cultural familiarity. They are widely used in traditional Indonesian dishes and snacks.</p>

<h4>2. Bold Peanuts</h4>
<p>Bold peanuts are gaining popularity in Indonesia's modern retail and snack food markets due to their large size and premium positioning.</p>

<h4>3. Spanish Peanuts</h4>
<p>Spanish peanuts are primarily used for oil extraction and in traditional cooking applications.</p>

<h3>Market Opportunities</h3>

<ul>
<li><strong>Growing Food Industry:</strong> Indonesia's food processing industry is expanding rapidly, creating opportunities for raw material suppliers.</li>
<li><strong>Traditional Cuisine:</strong> Peanuts are integral to many Indonesian dishes, ensuring consistent demand.</li>
<li><strong>Snack Market:</strong> The growing snack food market presents opportunities for premium peanut varieties.</li>
<li><strong>Strategic Location:</strong> Indonesia serves as a hub for distribution to other Southeast Asian markets.</li>
</ul>

<h3>Trade Procedures and Requirements</h3>

<p>Exporting peanuts to Indonesia requires compliance with specific regulations:</p>

<ul>
<li>Indonesian food safety standards compliance</li>
<li>Halal certification (important for the Muslim-majority population)</li>
<li>Proper documentation including certificates of origin and quality</li>
<li>Adherence to packaging and labeling requirements</li>
</ul>

<h3>Future Prospects</h3>

<p>The future of India-Indonesia peanut trade looks promising with Indonesia's continued economic growth, expanding population, and increasing integration with global food supply chains creating sustained demand for quality agricultural imports.</p>`,
    seo: {
      title: 'India-Indonesia Agricultural Trade | Peanut Exports',
      description: 'Discover the growing agricultural trade between India and Indonesia with a special focus on peanut exports, market trends, and business opportunities.',
      metaTags: [
        { type: 'name', name: 'keywords', content: 'Indonesia peanut market 2024, Indian peanut exports Indonesia, groundnut import Indonesia' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/indonesia' }
      ],
      scriptTags: []
    }
  },
  'china': {
    title: 'China Market Analysis - India Peanut Exports',
    content: `<h1>CHINA</h1>
<h2>Agriculture Trade Between India and China: A Rising Opportunity for Peanut Exports</h2>
<p>In recent years, the agriculture trade between India and China has witnessed notable growth, driven by mutual economic interests and changing food consumption patterns. India, known for its rich agricultural base, has been exporting a wide range of agri-products to China, including peanuts, soybeans, spices, rice, and cotton. Among these, the peanut trade between India and China has seen remarkable development, both in terms of volume and value.</p>
<h3>India-China Agriculture Trade: An Overview</h3>
<p>India and China are two of the world's largest agricultural producers and consumers. While China has been a dominant importer of food and agri-commodities, India has emerged as a key exporter, offering competitive pricing, high-quality products, and a growing focus on international trade standards.</p>
<p>In FY 2023–24, the agriculture trade between India and China crossed $8 billion, with India exporting commodities like oilseeds, fresh fruits, vegetables, spices, and nuts. Among these, groundnuts (peanuts) have emerged as a high-potential category, driven by demand in the snack, oil, and confectionery industries in China.</p>
<h3>The Rise of Peanut Trade Between India and China</h3>
<p>Peanuts, also known as groundnuts, have become one of the major agricultural exports from India to China. India is the second-largest producer of peanuts globally and offers a wide variety suited for different purposes like edible consumption, oil extraction, and industrial use.</p>
<div class="highlight-section">
  <h4>Key Peanut Export Statistics:</h4>
  <ul>
    <li>In 2023, India exported over 200,000 metric tons of peanuts to China.</li>
    <li>This marked a 30% increase compared to the previous year.</li>
    <li>The total export value of peanuts to China crossed $150 million, reflecting growing demand.</li>
    <li>China's preference for high oil content and uniform kernel size has made Indian peanuts an ideal choice, especially from regions like Gujarat, Rajasthan, and Andhra Pradesh.</li>
  </ul>
</div>
<h3>Varieties and Types of Peanuts Exported from India</h3>
<p>India cultivates a wide range of peanut varieties suited for export markets:</p>
<ul>
  <li><strong>Bold Peanuts (Virginia Type):</strong> Large kernels, preferred for edible consumption, high oil content (48–50%).</li>
  <li><strong>Java Peanuts (Spanish Type):</strong> Small to medium size, high in protein and oil, popular for snack and confectionery use.</li>
  <li><strong>TJ Peanuts:</strong> Known for uniform size and light pink skin, high shelf life, ideal for roasting and snacking.</li>
  <li><strong>Redskin Peanuts:</strong> Deep red kernels, high antioxidant content, used in traditional Chinese medicine and snack mixes.</li>
</ul>
<h3>Growth Drivers of Peanut Trade Between India and China</h3>
<p>Several factors are contributing to the upward trend in India-China peanut exports:</p>
<ul>
  <li><strong>Growing Health Awareness:</strong> Chinese consumers are increasingly switching to plant-based proteins, making peanuts a preferred option.</li>
  <li><strong>Competitive Pricing:</strong> Indian peanuts offer better value due to lower cultivation and processing costs.</li>
  <li><strong>Trade Agreements & Tariff Benefits:</strong> India enjoys a favorable position in peanut exports due to low import duties imposed by China on agricultural products.</li>
  <li><strong>Improved Logistics:</strong> Development of containerized shipping and direct trade routes between Indian ports and Chinese provinces like Guangdong and Shandong.</li>
</ul>
<h3>Challenges and Opportunities</h3>
<p>Despite the growth, challenges remain such as:</p>
<ul>
  <li>Strict Quality Standards by Chinese customs authorities</li>
  <li>Aflatoxin Limits in edible peanuts</li>
  <li>Currency fluctuation affecting trade margins</li>
</ul>
<p>However, Indian exporters are improving quality control, investing in BRC and HACCP-certified processing units, and leveraging technology to meet export specifications.</p>
<h3>Conclusion</h3>
<p>The agricultural trade between India and China, especially in the peanut segment, is poised for sustained growth in the coming years. With strong bilateral relations, rising demand, and improving infrastructure, India has a significant opportunity to expand its groundnut exports to China.</p>
<p>Exporters, traders, and investors in both countries should closely monitor this evolving trade partnership, explore direct procurement models, and focus on value-added peanut products like roasted kernels, peanut oil, and flavored snacks for higher margins.</p>
<div class="highlight-section" style="margin-top:2em; padding:1.5em; background:#f5f5f5; border-radius:8px;">
  <h4>Interested in sourcing premium peanuts for the Chinese market?</h4>
  <a href="/#products" style="display:inline-block; background:#fff; color:#007b55; padding:12px 30px; font-size:1.1rem; font-weight:600; border-radius:50px; text-decoration:none; text-transform:none; margin-top:1em;">Explore Our Product Range</a>
</div>`,
    seo: {
      title: "India-China Peanut Trade | World's Largest Market Opportunities | Balaji Exports",
      description: "Explore the growing agricultural trade between India and China with insights into peanut exports, Chinese market demands, trade opportunities, and significant potential in the world's largest market for Indian groundnut varieties.",
      metaTags: [
        { type: 'name', name: 'keywords', content: 'India China peanut trade, Chinese peanut market, China groundnut imports, Chinese food industry, peanut exports China, Indian groundnuts China, Chinese market opportunities, China agricultural trade, Chinese snack industry, peanut varieties China, China import regulations, Chinese food processing, Asia peanut trade, China market potential' },
        { type: 'property', property: 'og:title', content: "India-China Peanut Trade | World's Largest Market Opportunities | Balaji Exports" },
        { type: 'property', property: 'og:description', content: "Explore the growing agricultural trade between India and China with insights into peanut exports, Chinese market demands, trade opportunities, and significant potential in the world's largest market for Indian groundnut varieties." },
        { type: 'property', property: 'og:url', content: 'https://balajiexports.com/blogs/china' },
        { type: 'property', property: 'og:type', content: 'article' }
      ],
      linkTags: [
        { rel: 'canonical', href: 'https://balajiexports.com/blogs/china' }
      ],
      scriptTags: []
    }
  }
};

async function updateSpecificCountries() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const [slug, data] of Object.entries(allCountriesContent)) {
      try {
        console.log(`\nProcessing ${slug}...`);
        
        const existingBlog = await Blog.findOne({ slug });
        
        if (existingBlog) {
          existingBlog.title = data.title;
          existingBlog.content = data.content;
          existingBlog.seo = data.seo;
          existingBlog.updatedAt = new Date();
          
          await existingBlog.save();
          console.log(`✅ Updated ${slug} blog content`);
        } else {
          const newBlog = new Blog({
            title: data.title,
            slug: slug,
            content: data.content,
            seo: data.seo,
            createdAt: new Date(),
            updatedAt: new Date()
          });
          
          await newBlog.save();
          console.log(`✅ Created ${slug} blog content`);
        }
        
      } catch (error) {
        console.error(`❌ Error processing ${slug}:`, error.message);
      }
    }
    
    console.log('\n🎉 Specific countries update completed!');
    
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateSpecificCountries(); 