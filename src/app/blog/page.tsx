import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Elevate Assured',
  description: 'Expert roofing tips, maintenance guides, and industry insights from Elevate Assured professionals.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Roofing Material for Your Home",
      excerpt: "Learn about different roofing materials and how to select the best option for your climate, budget, and aesthetic preferences.",
      date: "15 December 2024",
      category: "Roofing Tips",
      readTime: "5 min read",
      image: "/completedworks/1D1F9741-DD77-48A3-AE52-7D0D080777CD.JPG"
    },
    {
      id: 2,
      title: "Winter Roof Maintenance: Essential Steps to Protect Your Home",
      excerpt: "Prepare your roof for winter weather with these essential maintenance tips to prevent costly damage and ensure year-round protection.",
      date: "10 December 2024",
      category: "Maintenance",
      readTime: "7 min read",
      image: "/completedworks/1D2AC7C1-6F35-42A0-A856-D48A44DD0C7A 2.JPG"
    },
    {
      id: 3,
      title: "Storm Damage Assessment: What to Look For After Severe Weather",
      excerpt: "After a storm, it's crucial to assess your roof for damage. Learn what signs to look for and when to call a professional.",
      date: "5 December 2024",
      category: "Storm Damage",
      readTime: "6 min read",
      image: "/completedworks/28036a99-b975-4ece-9611-a9d763d9e17d 2.JPG"
    },
    {
      id: 4,
      title: "The Complete Guide to Roof Ventilation",
      excerpt: "Proper roof ventilation is essential for energy efficiency and preventing moisture damage. Discover how to optimize your roof's ventilation system.",
      date: "28 November 2024",
      category: "Ventilation",
      readTime: "8 min read",
      image: "/completedworks/D63704C6-3C52-4574-86F9-07B7509533D5.JPG"
    },
    {
      id: 5,
      title: "Understanding Roof Warranties: What's Covered and What's Not",
      excerpt: "Navigate the complexities of roof warranties with our comprehensive guide to understanding coverage, limitations, and how to protect your investment.",
      date: "20 November 2024",
      category: "Warranties",
      readTime: "6 min read",
      image: "/completedworks/69A13C13-6DA3-4E33-B1B4-6C5C864A9AE3.JPG"
    },
    {
      id: 6,
      title: "Energy-Efficient Roofing: Save Money While Protecting Your Home",
      excerpt: "Discover how energy-efficient roofing materials and techniques can reduce your energy bills while improving your home's comfort and value.",
      date: "15 November 2024",
      category: "Energy Efficiency",
      readTime: "7 min read",
      image: "/completedworks/abc739bb-2aa2-43a8-820f-b2ec7128b72a.JPG"
    }
  ];

  const categories = [
    "All Posts",
    "Roofing Tips",
    "Maintenance",
    "Storm Damage",
    "Ventilation",
    "Warranties",
    "Energy Efficiency"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Roof Hero.png"
            alt=""
            className="w-full h-full object-cover opacity-35"
            aria-hidden="true"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1 text-white mb-8">
              Roofing Blog
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-10"></div>
            <p className="lead text-gray-200 max-w-4xl mx-auto font-medium">
              Expert tips, maintenance guides, and industry insights to help you protect your home 
              and make informed decisions about your roofing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  category === "All Posts"
                    ? "bg-brand-gold text-brand-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-brand-gold text-brand-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="h4 text-brand-black mb-3 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-brand-gold transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="body-text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-brand-gold font-medium hover:text-brand-gold-dark transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-brand-black text-white px-8 py-3 rounded-lg btn hover:bg-gray-800 transition-colors duration-200">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-brand-black mb-4">
            Stay Updated
          </h2>
          <p className="body-text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest roofing tips, maintenance guides, and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
            />
            <button className="bg-brand-gold text-brand-black px-6 py-3 rounded-lg btn hover:bg-brand-gold-dark transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
