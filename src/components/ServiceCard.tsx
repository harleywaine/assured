'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  price?: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, features, price, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-brand-green-light rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 text-brand-green mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      {price && (
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-brand-blue">{price}</span>
          <span className="text-gray-500 ml-1">starting</span>
        </div>
      )}

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-brand-blue text-white py-3 rounded-lg font-medium hover:bg-brand-blue-dark transition-colors duration-200"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
