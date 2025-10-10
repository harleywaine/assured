import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Assured Roofing',
  description: 'Expert roofing tips, maintenance guides, and industry insights from Assured Roofing professionals.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Roofing Material for Your Home",
      excerpt: "Learn about different roofing materials and how to select the best option for your climate, budget, and aesthetic preferences.",
      date: "December 15, 2024",
      category: "Roofing Tips",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Winter Roof Maintenance: Essential Steps to Protect Your Home",
      excerpt: "Prepare your roof for winter weather with these essential maintenance tips to prevent costly damage and ensure year-round protection.",
      date: "December 10, 2024",
      category: "Maintenance",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Storm Damage Assessment: What to Look For After Severe Weather",
      excerpt: "After a storm, it's crucial to assess your roof for damage. Learn what signs to look for and when to call a professional.",
      date: "December 5, 2024",
      category: "Storm Damage",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "The Complete Guide to Roof Ventilation",
      excerpt: "Proper roof ventilation is essential for energy efficiency and preventing moisture damage. Discover how to optimize your roof's ventilation system.",
      date: "November 28, 2024",
      category: "Ventilation",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Understanding Roof Warranties: What's Covered and What's Not",
      excerpt: "Navigate the complexities of roof warranties with our comprehensive guide to understanding coverage, limitations, and how to protect your investment.",
      date: "November 20, 2024",
      category: "Warranties",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Energy-Efficient Roofing: Save Money While Protecting Your Home",
      excerpt: "Discover how energy-efficient roofing materials and techniques can reduce your energy bills while improving your home's comfort and value.",
      date: "November 15, 2024",
      category: "Energy Efficiency",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
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
      <section className="bg-gradient-to-br from-navy to-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roofing Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert tips, maintenance guides, and industry insights to help you protect your home 
            and make informed decisions about your roofing needs.
          </p>
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
                    ? "bg-green text-white"
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
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-500 text-sm">Blog Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-light text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-green transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-green font-medium hover:text-green-dark transition-colors"
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
            <button className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors duration-200">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest roofing tips, maintenance guides, and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent"
            />
            <button className="bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-dark transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
