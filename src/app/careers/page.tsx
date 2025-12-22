import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers - Elevate Assured',
  description: 'Join the Elevate Assured team. We\'re always looking for skilled, reliable roofing professionals to join our growing team in Dorset and Hampshire.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-brand-black overflow-hidden">
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
        <div className="absolute inset-0 bg-brand-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="h1 text-white mb-6 md:mb-8">
            Join Our Team
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 md:mb-10"></div>
          <p className="lead text-gray-200 max-w-3xl mx-auto">
            We're always looking for skilled, reliable professionals to join our growing team
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="h2 text-brand-black mb-6">Why Work With Us?</h2>
            <p className="body-text-lg text-gray-600 mb-6">
              At Elevate Assured, we believe in treating our team right. We offer competitive rates, 
              regular work, and a supportive environment where your skills and experience are valued.
            </p>

            <h3 className="h3 text-brand-black mb-4 mt-8">What We're Looking For</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="body-text text-gray-700">Experienced roofing professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="body-text text-gray-700">Reliable and punctual</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="body-text text-gray-700">Commitment to quality workmanship</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="body-text text-gray-700">Full UK driving licence</span>
              </li>
            </ul>

            <h3 className="h3 text-brand-black mb-4 mt-8">Get In Touch</h3>
            <p className="body-text-lg text-gray-600 mb-6">
              If you're interested in joining our team, please get in touch. We'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-brand-gold text-brand-black px-6 py-3 rounded-lg btn hover:bg-brand-gold-dark transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
              <a
                href="tel:07918291605"
                className="border-2 border-brand-black text-brand-black px-6 py-3 rounded-lg btn hover:bg-brand-black hover:text-white transition-colors duration-200 text-center"
              >
                Call: 07918 291605
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

