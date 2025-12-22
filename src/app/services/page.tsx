'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const services = [
    {
      title: 'Roof Installation',
      subtitle: 'Durable, beautiful roofs built to stand the test of time.',
      description: 'Whether you\'re constructing a new property or replacing an ageing roof, we provide expert installation services designed around your home, your style, and your budget. Every roof we install is crafted with precision and care, using premium materials and proven techniques.',
      features: [
        'New roof design and installation for homes and developments',
        'Complete roof replacement and re-roofing',
        'Overlay solutions (adding a new layer where structurally safe)',
        'Roof structure reinforcement and support upgrades'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      badge: 'Most Popular',
      image: '/completedworks/IMG_6549.JPG'
    },
    {
      title: 'Roof Repairs',
      subtitle: 'Fast, effective fixes for leaks, damage, and wear.',
      description: 'Roof problems can escalate quickly if left untreated. Our expert repair team acts fast to diagnose the issue and carry out lasting repairs, protecting your home from further damage and avoiding costly future work.',
      features: [
        'Leak detection and repair',
        'Tile replacement',
        'Flashing repair and resealing',
        'Storm, wind, or impact damage restoration'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      badge: 'Emergency Available',
      image: '/completedworks/69A13C13-6DA3-4E33-B1B4-6C5C864A9AE3.JPG'
    },
    {
      title: 'Maintenance & Cleaning',
      subtitle: 'Extend your roof\'s life and keep your property safe.',
      description: 'Regular maintenance is the best way to avoid unexpected issues and costly repairs. Our professional cleaning and care services protect your roof\'s integrity and keep your property looking its best.',
      features: [
        'Scheduled roof inspections and condition reports',
        'Gutter, fascia, and soffit repair or replacement',
        'Gutter cleaning and blockage removal',
        'Moss, algae, and debris clearance'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      badge: 'Preventive Care',
      image: '/completedworks/abc739bb-2aa2-43a8-820f-b2ec7128b72a.JPG'
    },
    {
      title: 'Waterproofing & Weatherproofing',
      subtitle: 'Complete protection against the elements.',
      description: 'British weather can be tough on your roof, but with the right treatments and coatings, it doesn\'t have to be. We offer advanced waterproofing and weatherproofing solutions that improve durability, reduce leaks, and extend the lifespan of your roof.',
      features: [
        'Roof sealing and protective coatings',
        'Waterproof membranes and barrier installation',
        'Thermal insulation upgrades',
        'Chimney and skylight sealing to prevent water ingress'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      badge: 'Long-term Protection',
      image: '/completedworks/1D2AC7C1-6F35-42A0-A856-D48A44DD0C7A.JPG'
    },
    {
      title: 'Roof Additions',
      subtitle: 'Enhance your home\'s comfort, light, and energy efficiency.',
      description: 'Make the most of your roof with carefully planned additions and upgrades. From natural light solutions to renewable energy preparation, our installation services add value, comfort, and future-readiness to your property.',
      features: [
        'Skylight and roof window installation',
        'Chimney construction, repairs, and removals',
        'Roof ventilation systems',
        'Solar panel preparation and structural support'
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ),
      badge: 'Value Added',
      image: '/completedworks/1D1F9741-DD77-48A3-AE52-7D0D080777CD.JPG'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-brand-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Roof Hero.png"
            alt=""
            fill
            className="object-cover opacity-35"
            aria-hidden="true"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="h1 text-white mb-6 md:mb-8">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 md:mb-10"></div>
            <p className="lead text-gray-200 max-w-4xl mx-auto mb-6 md:mb-8 font-medium px-4">
              Expert Roofing Solutions for Dorset and Hampshire
            </p>
            <p className="body-text-lg text-gray-300 max-w-3xl mx-auto px-4">
              At Elevate Assured, we specialise in delivering reliable, high-quality roofing services that protect your property and add long-term value. Whether you're building from the ground up, repairing storm damage, or investing in preventative maintenance, our experienced team ensures every roof is built to last and finished to perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* First 3 cards */}
            {services.slice(0, 3).map((service, index) => (
              <motion.a
                key={service.title}
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group block h-full flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-brand-gold rounded-lg flex items-center justify-center mr-4 text-brand-black group-hover:bg-brand-gold-dark group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="h4 text-brand-black group-hover:text-brand-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="body-text-sm text-gray-600 mb-6">
                    {service.subtitle}
                  </p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="body-text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <p className="body-text-sm text-brand-black font-medium">
                        +{service.features.length - 2} more services
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-brand-gold body-text-sm font-medium group-hover:text-brand-black transition-colors duration-300">
                      Get quote for {service.title.replace('Roof ', '')} →
                    </div>
                    <div className="text-xs text-gray-500">
                      £99 assessment
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          {/* Bottom 2 cards - separate container */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-10">
            {services.slice(3, 5).map((service, index) => (
              <motion.a
                key={service.title}
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group block w-full md:w-[calc(50%-1rem)] lg:w-[400px] max-w-md h-full flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-brand-gold rounded-lg flex items-center justify-center mr-4 text-brand-black group-hover:bg-brand-gold-dark group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="h4 text-brand-black group-hover:text-brand-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="body-text-sm text-gray-600 mb-6">
                    {service.subtitle}
                  </p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="body-text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <p className="body-text-sm text-brand-black font-medium">
                        +{service.features.length - 2} more services
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-brand-gold body-text-sm font-medium group-hover:text-brand-black transition-colors duration-300">
                      Get quote for {service.title.replace('Roof ', '')} →
                    </div>
                    <div className="text-xs text-gray-500">
                      £99 assessment
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="h2 text-brand-black mb-8">
              Service Details
            </h2>
            <p className="body-text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our comprehensive range of roofing services and what makes us the trusted choice across Dorset.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-20"
              >
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <h3 className="h2 text-brand-black mb-6">
                        {service.title}
                      </h3>
                      <p className="lead text-gray-700 mb-6">
                        {service.subtitle}
                      </p>
                      <p className="body-text text-gray-600 mb-8">
                        {service.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-brand-black mb-6">
                          {service.title === 'Roof Installation' && 'Our installation services include:'}
                          {service.title === 'Roof Repairs' && 'We can help with:'}
                          {service.title === 'Maintenance & Cleaning' && 'Our maintenance solutions include:'}
                          {service.title === 'Waterproofing & Weatherproofing' && 'Our weatherproofing services include:'}
                          {service.title === 'Roof Additions' && 'We offer:'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative rounded-2xl overflow-hidden h-[500px]">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Completed work by Elevate Assured`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Ready to Protect Your Property?
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you're planning a major installation, dealing with an urgent leak, or simply want peace of mind about your roof's condition, Elevate Assured is here to help. Contact our friendly local team today to book an assessment or request a no-obligation quote, and take the first step towards a stronger, safer home.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-gold text-brand-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-gold-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Book an Assessment
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-black hover:text-white transition-colors duration-200"
                >
                  Request a Quote
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-brand-black mb-2">£99 Assessment</h4>
                <p className="text-sm text-gray-600">Expert evaluation and detailed quote</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-brand-black mb-2">Local Experts</h4>
                <p className="text-sm text-gray-600">Serving Dorset for decades</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-brand-black mb-2">Quick Response</h4>
                <p className="text-sm text-gray-600">Same day emergency service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;