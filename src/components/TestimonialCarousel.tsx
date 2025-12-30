'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  reviewCount?: string;
  content: string;
  rating: number;
  date: string;
  isLocalGuide?: boolean;
  photos?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nick Alexander",
    reviewCount: "5 reviews",
    content: "I recently used Assured Eco Systems to install and upgrade my guttering. I was super impressed with the quality of workmanship. Will was very helpful and professional, responded very quickly and the price was very competitive.",
    rating: 5,
    date: "6 months ago",
  },
  {
    id: 2,
    name: "Pamela Lloyd",
    reviewCount: "2 reviews",
    content: "Hi Will, Many thanks for a superb job carried out by Greg. He worked extremely hard during late May and early June when it was very hot in our attic. Gallons of cold water were needed!",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 3,
    name: "Chloe Rust",
    reviewCount: "2 reviews",
    content: "Couldn't be more impressed with the service carried out. The finished product was neat, sturdy and perfectly aligned. I would highly recommend, great service and great results!",
    rating: 5,
    date: "11 months ago",
  },
  {
    id: 4,
    name: "Hannah Dixon",
    reviewCount: "73 reviews",
    content: "Fantastic communication, very honest with what needed doing, didn't over complicate the job, made suggestions but absolutely no pressure. Will definitely be recommending. Great, neat and tidy job",
    rating: 5,
    date: "a year ago",
    isLocalGuide: true,
    photos: "111 photos",
  },
  {
    id: 5,
    name: "Emily Coots",
    reviewCount: "1 review",
    content: "Amazing experience from start to finish. Job done exactly as discussed, would recommend and use again. Thank you",
    rating: 5,
    date: "6 months ago",
  },
  {
    id: 6,
    name: "Sue Macready",
    reviewCount: "1 review",
    content: "Wonderful Job by Dan who was always on time, went above and beyond, cleaned up after the job was completed. He was always helpful if I had any questions. I would highly recommend the Company.",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 7,
    name: "Michael Kalisperas",
    reviewCount: "9 reviews",
    content: "Very professional and very helpful. Knows his stuff and has the team to tackle any job needing doing. Highly recommended",
    rating: 5,
    date: "11 months ago",
    photos: "1 photo",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#fbbc04]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            {/* Google Logo */}
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <h2 className="h2 text-brand-black">
              Google Reviews
            </h2>
          </div>
          <p className="body-text text-gray-600 max-w-2xl mx-auto mb-6">
            See what our customers are saying about us on Google
          </p>
          <a
            href="https://share.google/XpwXl1I0YFVYFiNcK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#1a73e8] hover:text-[#1557b0] font-medium transition-colors duration-200"
          >
            View all reviews on Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12"
            >
              {/* Header with Google branding */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-brand-black text-lg tracking-tight">
                        {testimonials[currentIndex].name}
                      </div>
                      {testimonials[currentIndex].isLocalGuide && (
                        <span className="bg-[#1a73e8] text-white text-xs px-2 py-0.5 rounded-full font-medium tracking-wide">
                          Local Guide
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 body-text-sm text-gray-600 mt-1.5">
                      {testimonials[currentIndex].reviewCount && (
                        <span>{testimonials[currentIndex].reviewCount}</span>
                      )}
                      {testimonials[currentIndex].photos && (
                        <>
                          <span>·</span>
                          <span>{testimonials[currentIndex].photos}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/* Google Stars */}
                <div className="flex items-center gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Date */}
              <div className="body-text-sm text-gray-500 mb-6">
                {testimonials[currentIndex].date}
              </div>

              {/* Content */}
              <blockquote className="body-text text-gray-700">
                {testimonials[currentIndex].content}
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200 z-10"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200 z-10"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-[#1a73e8]' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
