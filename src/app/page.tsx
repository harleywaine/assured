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
      title: "Roof Installation",
      description: "New builds, replacements, and upgrades — built to last. Whether you're building a new home or replacing an ageing roof, we provide expert installation services tailored to your property's needs. Our team uses premium materials and proven techniques to ensure strength, durability, and long-term weather protection.",
      features: ["New Roof Installation", "Roof Replacement", "Re-roofing / Overlay", "Premium Materials"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Roof Repairs",
      description: "Fast, effective solutions for leaks, damage, and structural issues. A damaged roof can quickly lead to costly problems inside your home. Our repair specialists act fast to identify the issue and provide lasting solutions — keeping your property watertight and protected from the elements.",
      features: ["Leak Detection & Repair", "Shingle Replacement", "Flashing Repair", "Storm Damage Repair", "Sagging Roof Repair"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Roof Maintenance & Cleaning",
      description: "Prevent problems before they start with regular care. Routine maintenance is the best way to extend the life of your roof and avoid costly repairs. We offer comprehensive cleaning and inspection services to keep your roofing system performing its best year after year.",
      features: ["Gutter, Fascia & Soffit Repair", "Gutter Cleaning", "Moss & Algae Removal", "Routine Inspections", "Sealing & Coating"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Roof Waterproofing & Weatherproofing",
      description: "Long-lasting protection against the British weather. Shield your home from rain, wind, and moisture with advanced weatherproofing solutions. Our treatments and upgrades are designed to prevent leaks, improve efficiency, and protect your roof for years to come.",
      features: ["Roof Coating", "Ice & Water Shield Installation", "Ventilation Improvements", "Advanced Weatherproofing"],
      price: "Quote"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Roof-Related Additions",
      description: "Upgrades that add value, comfort, and functionality. Enhance your home with roof-based features that improve light, ventilation, and energy readiness. Our team can install or repair essential roof additions with precision and care.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Your Roof Deserves Expert Care
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your roof is your home's first line of defence — and it deserves expert care. At Assured Roofing, we deliver reliable, high-quality roofing solutions that protect your property and provide total peace of mind. With years of experience, exceptional craftsmanship, and a commitment to customer satisfaction, we're trusted by homeowners and developers across Dorset to get the job done right.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional roofing solutions for every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Why Choose Assured Roofing?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Proven Expertise</h3>
              <p className="text-gray-600">Decades of experience working on homes and developments across Dorset.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium materials, meticulous workmanship, and lasting results.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">Honest quotes, clear communication, and no hidden costs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Local & Reliable</h3>
              <p className="text-gray-600">Fast response times and dedicated service from a trusted local team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your home with roofing you can rely on. Whether you need a new installation, fast repairs, or regular maintenance, our friendly local team is here to help. Request a free, no-obligation quote today — and let's get your roof right, first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green-dark transition-colors duration-200 shadow-lg"
            >
              Book a Free Survey
          </a>
          <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-200"
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
