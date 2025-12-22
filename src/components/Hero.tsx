'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-brand-black overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="h1 text-white mb-6 md:mb-8">
            <span className="block">Elevated Standards.</span>
            <span className="block text-brand-gold mt-2">Assured Results.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lead text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto px-4"
        >
          Professional roofing you can trust, from installations and repairs to maintenance and weatherproofing, proudly serving Dorset and Hampshire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="block bg-brand-gold text-brand-black px-6 py-3.5 md:px-10 md:py-4 rounded-lg text-base md:text-lg btn hover:bg-brand-gold-dark transition-colors duration-200 shadow-lg text-center"
            >
              Book an Assessment
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="block border-2 border-white text-white px-6 py-3.5 md:px-10 md:py-4 rounded-lg text-base md:text-lg btn hover:bg-white hover:text-brand-black transition-colors duration-200 text-center"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
