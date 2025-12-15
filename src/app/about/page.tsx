'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      title: 'Quality Materials',
      description: 'We use only the finest materials and proven techniques to ensure your roof stands the test of time.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Safety First',
      description: 'Our team follows strict industry standards and best practices on every job, ensuring your property is protected.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Transparent Communication',
      description: 'We\'re fully insured, accredited, and committed to transparent communication from the first survey to the final inspection.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const serviceAreas = [
    { name: 'Bournemouth', description: 'Coastal properties and urban developments' },
    { name: 'Christchurch', description: 'Historic homes and modern builds' },
    { name: 'Poole', description: 'Harbour properties and residential areas' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Elevate Assured
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              Trusted Local Roofers Dedicated to Quality, Safety, and Service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Elevate Assured was founded with a simple mission: to deliver reliable, high-quality roofing solutions that homeowners and property developers can trust. As a proud family-run business based in Dorset, we've built our reputation on craftsmanship, honesty, and a genuine commitment to protecting the homes in our community.
                </p>
                <p>
                  What started as a small local service has grown into one of the most trusted roofing teams in Bournemouth, Christchurch, and Poole. Our experienced roofers bring decades of combined expertise to every project — from small residential repairs to large-scale developments — and we treat every property as if it were our own.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Family-Run Business</h3>
                  <p className="text-gray-200">
                    Proudly serving Dorset with decades of combined expertise and a personal touch that only comes from being part of the community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built on Quality and Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Built on Quality and Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Elevate Assured, we believe that a roof is more than just a structure — it's peace of mind. That's why we focus on delivering workmanship of the highest standard, using only quality materials and proven techniques to ensure your roof stands the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">
                Safety is at the Heart of Everything We Do
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our team follows strict industry standards and best practices on every job, ensuring your property is protected and the work is carried out responsibly and efficiently. We're fully insured, accredited, and committed to transparent communication from the first survey to the final inspection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Team That Cares Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Your Neighbours</h3>
                  <p className="text-gray-200">
                    We're more than just roofers — we're your neighbours. As a local, family-run business, we take pride in serving our Dorset community with professionalism and a personal touch.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                A Team That Cares
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We're more than just roofers — we're your neighbours. As a local, family-run business, we take pride in serving our Dorset community with professionalism and a personal touch.
                </p>
                <p>
                  Our reputation has been built on word of mouth, repeat customers, and long-term relationships, and we're proud to be the go-to roofing specialists for so many families and businesses in the region.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serving Bournemouth, Christchurch & Poole Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Serving Bournemouth, Christchurch & Poole
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From coast to countryside, we've worked on properties of every shape and size across Dorset. Whether you're replacing a roof on your family home, repairing storm damage, or planning a new build, our team has the experience and local knowledge to deliver results you can rely on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">
                  {area.name}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Get Your Free Quote Today
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Your home deserves the very best protection — and we're here to provide it. Contact Elevate Assured today to arrange a free, no-obligation quote and discover why so many Dorset homeowners trust us with their roofs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Free Survey
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors duration-200"
              >
                Request a Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;