'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[101] flex items-start md:items-center justify-center p-3 md:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl my-4 md:my-0 max-h-[calc(100vh-2rem)] md:max-h-[90vh] flex flex-col overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-4 md:p-6 overflow-y-auto flex-1 min-h-0">
                {/* Header */}
                <div className="text-center mb-5">
                  <h2 className="h3 text-brand-black mb-2">Get in Touch</h2>
                  <p className="body-text-sm text-gray-600">Choose your preferred way to contact us</p>
                </div>

                {/* Contact Methods - Phone & Email */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  {/* Phone */}
                  <a
                    href="tel:07918291605"
                    className="flex-1 group flex items-center gap-3 p-3.5 rounded-lg border-2 border-gray-200 hover:border-brand-gold hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0 text-brand-black group-hover:bg-brand-gold-dark group-hover:text-white transition-all duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-gray-500 mb-0.5">Phone</div>
                      <div className="text-base font-semibold text-brand-black group-hover:text-brand-gold transition-colors duration-200">07918 291605</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-gold transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:will@assuredecosystem.co.uk"
                    className="flex-1 group flex items-center gap-3 p-3.5 rounded-lg border-2 border-gray-200 hover:border-brand-gold hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0 text-brand-black group-hover:bg-brand-gold-dark group-hover:text-white transition-all duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-gray-500 mb-0.5">Email</div>
                      <div className="text-base font-semibold text-brand-black group-hover:text-brand-gold transition-colors duration-200 truncate">will@assuredecosystem.co.uk</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-gold transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Divider */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-gray-500">or use the contact form below</span>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <ContactForm onSuccess={onClose} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

