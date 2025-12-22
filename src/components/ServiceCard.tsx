'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price?: string;
  index: number;
}

const ServiceCard = ({ title, description, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 h-full flex flex-col"
    >
      {/* Title */}
      <h3 className="h3 text-brand-black mb-3">{title}</h3>

      {/* Description */}
      <p className="body-text text-gray-600 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-2.5 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-700">
            <svg
              className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="body-text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-brand-black text-white py-3.5 rounded-lg btn hover:bg-gray-800 transition-colors duration-200 mt-auto"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
