import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Installation",
      description: "Durable, beautiful roofs built to stand the test of time.",
      features: ["New Roof Installation", "Roof Replacement", "Re-roofing / Overlay", "Premium Materials"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Repairs",
      description: "Fast, effective fixes for leaks, damage, and wear.",
      features: ["Leak Detection & Repair", "Tile Replacement", "Flashing Repair", "Storm Damage Repair"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Maintenance & Cleaning",
      description: "Extend your roof's life and keep your property safe.",
      features: ["Gutter, Fascia & Soffit Repair", "Gutter Cleaning", "Moss & Algae Removal", "Routine Inspections"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Waterproofing & Weatherproofing",
      description: "Complete protection against the elements.",
      features: ["Roof Coating", "Ice & Water Shield Installation", "Ventilation Improvements", "Advanced Weatherproofing"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Related Additions",
      description: "Enhance your home's comfort, light, and energy efficiency.",
      features: ["Skylight Installation & Repair", "Chimney Cap & Flashing Repair", "Gutter Installation & Replacement", "Solar Panel Mounting Preparation"],
      price: "Quote"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 text-brand-black mb-8">
              Your Roof Deserves Expert Care
            </h2>
            <p className="body-text-lg text-gray-600 max-w-4xl mx-auto">
              Your roof is your home's first line of defence, and it deserves expert care. At Elevate Assured, we deliver reliable, high-quality roofing solutions that protect your property and provide total peace of mind. With years of experience, exceptional craftsmanship, and a commitment to customer satisfaction, we're trusted by homeowners and developers across Dorset to get the job done right.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="h2 text-brand-black mb-4">
              Roofing Services
            </h2>
            <p className="body-text-lg text-gray-600 max-w-3xl mx-auto">
              Expert solutions for every roofing need, delivered with precision and care.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-8">
            {/* First 3 cards */}
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                index={index}
              />
            ))}
            
            {/* Bottom 2 cards - centered using flexbox approach */}
            <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-6 md:gap-10">
              {services.slice(3, 5).map((service, index) => (
                <div key={service.title} className="w-full md:max-w-md">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    price={service.price}
                    index={index + 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 text-brand-black mb-12">
              Why Choose Elevate Assured?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="h4 text-brand-black mb-4">Proven Expertise</h3>
              <p className="body-text-sm text-gray-600">Decades of experience working on homes and developments across Dorset.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="h4 text-brand-black mb-4">Quality Guaranteed</h3>
              <p className="body-text-sm text-gray-600">Premium materials, meticulous workmanship, and lasting results.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="h4 text-brand-black mb-4">Trust & Transparency</h3>
              <p className="body-text-sm text-gray-600">Honest quotes, clear communication, and no hidden costs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="h4 text-brand-black mb-4">Local & Reliable</h3>
              <p className="body-text-sm text-gray-600">Fast response times and dedicated service from a trusted local team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-white mb-8">
            Book Your Assessment Today
          </h2>
          <p className="body-text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            Protect your home with roofing you can rely on. Whether you need a new installation, fast repairs, or regular maintenance, our friendly local team is here to help. Book a £99 assessment today, and let's get your roof right, first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-gold text-brand-black px-6 py-3 md:px-10 md:py-4 rounded-lg text-base md:text-lg btn hover:bg-brand-gold-dark transition-colors duration-200 shadow-lg"
            >
              Book an Assessment
          </a>
          <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 md:px-10 md:py-4 rounded-lg text-base md:text-lg btn hover:bg-white hover:text-brand-black transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <Footer />
    </div>
  );
}
