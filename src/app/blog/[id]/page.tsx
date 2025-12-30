import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  '1': {
    title: "How to Choose the Right Roofing Material for Your Home",
    content: `
      <p>Choosing the right roofing material is one of the most important decisions you'll make as a homeowner. The material you select will impact your home's appearance, energy efficiency, durability, and maintenance requirements for decades to come.</p>
      
      <h2>Factors to Consider</h2>
      <p>Before selecting a roofing material, consider these key factors:</p>
      
      <h3>Climate and Weather Conditions</h3>
      <p>Your local climate plays a crucial role in determining the best roofing material. For example:</p>
      <ul>
        <li><strong>Concrete tiles</strong> work well in most climates and are particularly suited to British weather</li>
        <li><strong>Metal roofing</strong> is excellent for areas with heavy rainfall or high winds</li>
        <li><strong>Clay tiles</strong> are perfect for traditional properties and offer excellent durability</li>
        <li><strong>Slate</strong> is durable in most conditions but can be heavy for some structures</li>
        <li><strong>Flat roofing (torch-on felt, EPDM)</strong> is ideal for low-pitch roofs and extensions, offering excellent waterproofing and durability</li>
      </ul>
      
      <h3>Budget Considerations</h3>
      <p>Roofing materials vary significantly in cost. It's important to consider both initial investment and long-term value when making your decision.</p>
      
      <h3>Durability and Lifespan</h3>
      <p>Different materials offer varying lifespans:</p>
      <ul>
        <li>Concrete tiles: 30-50 years</li>
        <li>Metal roofing: 40-70 years</li>
        <li>Clay tiles: 50-100 years</li>
        <li>Slate: 75-200 years</li>
        <li>Natural slate: 100+ years</li>
        <li>Torch-on felt: 15-25 years</li>
        <li>EPDM rubber membrane: 30-50 years</li>
      </ul>
      
      <h2>Popular Roofing Materials</h2>
      
      <h3>Concrete Tiles</h3>
      <p>Concrete tiles are a popular choice for UK properties due to their affordability, durability, and wide range of styles. They offer excellent weather resistance and are well-suited to British climate conditions.</p>
      
      <h3>Metal Roofing</h3>
      <p>Metal roofing is gaining popularity due to its durability and energy efficiency. Common types include:</p>
      <ul>
        <li>Steel (galvanized or galvalume)</li>
        <li>Aluminum</li>
        <li>Copper</li>
        <li>Zinc</li>
      </ul>
      
      <h3>Clay and Concrete Tiles</h3>
      <p>These materials offer excellent durability and a distinctive appearance. They're particularly popular in Mediterranean and Spanish-style homes.</p>
      
      <h3>Flat Roofing Systems</h3>
      <p>Flat roofing is essential for low-pitch roofs, extensions, and commercial properties. The two main types we work with are:</p>
      <ul>
        <li><strong>Torch-on felt:</strong> A multi-layer system that's torch-applied for a strong, waterproof seal. Ideal for residential extensions and commercial buildings.</li>
        <li><strong>EPDM (Ethylene Propylene Diene Monomer):</strong> A single-ply rubber membrane that's highly durable and flexible. Excellent for both new installations and repairs, offering superior weather resistance and a long lifespan.</li>
      </ul>
      
      <h2>Making Your Decision</h2>
      <p>When choosing a roofing material, consider your long-term goals, budget constraints, and aesthetic preferences. It's also important to consult with a professional roofing contractor who can assess your specific situation and provide expert recommendations.</p>
      
      <p>Remember, while initial cost is important, consider the total cost of ownership including maintenance, repairs, and replacement over the material's lifespan.</p>
    `,
    date: "15 December 2024",
    category: "Roofing Tips",
    readTime: "5 min read",
    author: "Elevate Assured Team"
  },
  '2': {
    title: "Winter Roof Maintenance: Essential Steps to Protect Your Home",
    content: `
      <p>Winter weather can be harsh on your roof, making proper maintenance essential for protecting your home and avoiding costly repairs. Here's your comprehensive guide to winter roof maintenance.</p>
      
      <h2>Pre-Winter Inspection</h2>
      <p>Before winter arrives, conduct a thorough roof inspection to identify and address potential issues:</p>
      
      <h3>Check for Damaged Tiles</h3>
      <p>Look for:</p>
      <ul>
        <li>Cracked, slipped, or missing tiles</li>
        <li>Loose or damaged flashing around chimneys and vents</li>
        <li>Signs of water damage or staining</li>
      </ul>
      
      <h3>Clean Gutters and Downspouts</h3>
      <p>Clogged gutters can cause water to back up and damage your roof. Ensure gutters are clean and properly secured.</p>
      
      <h3>Inspect Attic Ventilation</h3>
      <p>Proper ventilation prevents ice dams and moisture buildup. Check that vents are clear and functioning properly.</p>
      
      <h2>Common Winter Roof Problems</h2>
      
      <h3>Ice and Frost</h3>
      <p>In freezing conditions, ice can form on roof surfaces and in gutters. This can cause water to back up under tiles, leading to leaks and damage.</p>
      
      <h3>Heavy Rainfall</h3>
      <p>Persistent heavy rain can test your roof's waterproofing. Ensure gutters and drainage systems are clear and functioning properly.</p>
      
      <h3>Thermal Shock</h3>
      <p>Rapid temperature changes can cause materials to expand and contract, potentially leading to cracks and damage.</p>
      
      <h2>Winter Maintenance Tips</h2>
      
      <h3>Safe Debris Removal</h3>
      <p>If you need to remove debris from your roof:</p>
      <ul>
        <li>Use appropriate tools from the ground when possible</li>
        <li>Never use sharp tools that could damage tiles</li>
        <li>Work carefully to avoid dislodging tiles</li>
        <li>Consider hiring professionals for steep or high roofs</li>
      </ul>
      
      <h3>Monitor for Leaks</h3>
      <p>Check your attic regularly for signs of leaks, especially after storms or during thaws.</p>
      
      <h3>Keep Vents Clear</h3>
      <p>Ensure roof vents remain clear of debris, leaves, and moss to maintain proper ventilation.</p>
      
      <h2>When to Call a Professional</h2>
      <p>Contact a roofing professional if you notice:</p>
      <ul>
        <li>Persistent leaks or water ingress</li>
        <li>Structural concerns or visible damage</li>
        <li>Multiple missing or damaged tiles</li>
        <li>Signs of rot or deterioration</li>
      </ul>
      
      <p>Regular maintenance and prompt attention to issues can help ensure your roof withstands winter weather and protects your home year-round.</p>
    `,
    date: "10 December 2024",
    category: "Maintenance",
    readTime: "7 min read",
    author: "Elevate Assured Team"
  }
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.id as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found - Elevate Assured Blog',
    };
  }

  return {
    title: `${post.title} - Elevate Assured Blog`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-green text-white px-6 py-3 rounded-lg hover:bg-green-dark transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="text-green hover:text-green-dark transition-colors">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="mb-6">
            <span className="bg-green-light text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/completedworks/28036a99-b975-4ece-9611-a9d763d9e17d 2.JPG"
                  alt="Storm Damage Assessment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="bg-green-light text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  Storm Damage
                </span>
                <h3 className="text-xl font-bold text-navy mb-3">
                  <Link href="/blog/3" className="hover:text-green transition-colors">
                    Storm Damage Assessment: What to Look For
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  After a storm, it's crucial to assess your roof for damage. Learn what signs to look for and when to call a professional.
                </p>
                <Link href="/blog/3" className="text-green font-medium hover:text-green-dark transition-colors">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/completedworks/D63704C6-3C52-4574-86F9-07B7509533D5.JPG"
                  alt="Roof Ventilation Guide"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="bg-green-light text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  Ventilation
                </span>
                <h3 className="text-xl font-bold text-navy mb-3">
                  <Link href="/blog/4" className="hover:text-green transition-colors">
                    The Complete Guide to Roof Ventilation
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Proper roof ventilation is essential for energy efficiency and preventing moisture damage.
                </p>
                <Link href="/blog/4" className="text-green font-medium hover:text-green-dark transition-colors">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/completedworks/69A13C13-6DA3-4E33-B1B4-6C5C864A9AE3.JPG"
                  alt="Understanding Roof Warranties"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="bg-green-light text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  Warranties
                </span>
                <h3 className="text-xl font-bold text-navy mb-3">
                  <Link href="/blog/5" className="hover:text-green transition-colors">
                    Understanding Roof Warranties
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Navigate the complexities of roof warranties with our comprehensive guide to understanding coverage and limitations.
                </p>
                <Link href="/blog/5" className="text-green font-medium hover:text-green-dark transition-colors">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
