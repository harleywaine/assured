'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      title: 'Quality Materials',
      description: 'We use only the finest materials and proven techniques to ensure your roof stands the test of time.'
    },
    {
      title: 'Safety First',
      description: 'Our team follows strict industry standards and best practices on every job, ensuring your property is protected.'
    },
    {
      title: 'Transparent Communication',
      description: 'We\'re fully insured, accredited, and committed to transparent communication from the first survey to the final inspection.'
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
              About Us
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 md:mb-10"></div>
            <p className="lead text-gray-200 max-w-4xl mx-auto mb-6 md:mb-8 font-medium px-4">
              Trusted Local Roofers Dedicated to Quality, Safety, and Service
            </p>
            <p className="body-text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Elevate Assured is a professional roofing company based in Christchurch, built on over 10 years of industry experience. The business was founded on a strong reputation developed through work carried out for family and friends, and has since grown steadily through trust, reliability, and consistent quality.
            </p>
            <p className="body-text-lg text-gray-300 max-w-4xl mx-auto mb-4 md:mb-6 px-4">
              We specialise in delivering high-standard roofing solutions, with a focus on workmanship, durability, and attention to detail. Every project—whether a minor repair or a full roofing installation—is approached with the same commitment to professionalism and care.
            </p>
            <p className="body-text-lg text-gray-300 max-w-4xl mx-auto px-4">
              At Elevate Assured, we believe in honest communication, dependable service, and results that stand the test of time. Our continued growth is a direct reflection of customer satisfaction and recommendations, and we are proud to serve homeowners throughout Dorset & Hampshire with a roofing service they can rely on.
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Elevate Assured is a professional roofing company based in Christchurch, built on over 10 years of industry experience. The business was founded on a strong reputation developed through work carried out for family and friends, and has since grown steadily through trust, reliability, and consistent quality.
                </p>
                <p>
                  We specialise in delivering high-standard roofing solutions, with a focus on workmanship, durability, and attention to detail. Every project—whether a minor repair or a full roofing installation—is approached with the same commitment to professionalism and care.
                </p>
                <p>
                  At Elevate Assured, we believe in honest communication, dependable service, and results that stand the test of time. Our continued growth is a direct reflection of customer satisfaction and recommendations, and we are proud to serve homeowners throughout Dorset & Hampshire with a roofing service they can rely on.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-[500px]"
            >
              <Image
                src="/completedworks/a739bf61-bb8a-4055-9922-9ccbd716099a.JPG"
                alt="Elevate Assured completed roofing work"
                fill
                className="object-cover"
              />
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Built on Quality and Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Elevate Assured, we believe that a roof is more than just a structure, it's peace of mind. That's why we focus on delivering workmanship of the highest standard, using only quality materials and proven techniques to ensure your roof stands the test of time.
            </p>
          </motion.div>

          <div className="space-y-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-10 md:p-12 border-l-4 border-brand-gold"
              >
                <h3 className="h3 text-brand-black mb-4">
                  {value.title}
                </h3>
                <p className="body-text text-gray-600">
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
              <h3 className="text-2xl font-bold text-brand-black mb-6">
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
              className="relative rounded-2xl overflow-hidden h-[500px]"
            >
              <Image
                src="/completedworks/9E44679A-5121-4F5E-A701-324DDA8D9907.JPG"
                alt="Elevate Assured roofing team at work"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                A Team That Cares
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We're more than just roofers — we're your local experts. As a trusted local business, we take pride in serving our Dorset and Hampshire community with professionalism, expertise, and a commitment to quality that shows in every project we complete.
                </p>
                <p>
                  Our reputation has been built on delivering exceptional results, honest communication, and reliable service. We're proud to be the go-to roofing specialists for so many homeowners and businesses across the region who value quality workmanship and professional service.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Book Your Assessment Today
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Your home deserves the very best protection, and we're here to provide it. Contact Elevate Assured today to book a £99 assessment and discover why so many Dorset and Hampshire homeowners trust us with their roofs.
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;