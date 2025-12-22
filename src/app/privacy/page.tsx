import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Elevate Assured',
  description: 'Privacy policy for Elevate Assured. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 md:mb-10"></div>
          <p className="lead text-gray-200 max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="body-text-sm text-gray-500 mb-8">
              Last updated: December 2024
            </p>

            <h2 className="h2 text-brand-black mb-6">Introduction</h2>
            <p className="body-text-lg text-gray-600 mb-6">
              Elevate Assured ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>

            <h3 className="h3 text-brand-black mb-4 mt-8">Information We Collect</h3>
            <p className="body-text-lg text-gray-600 mb-4">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="body-text text-gray-700">• Name and contact information (email, phone number)</li>
              <li className="body-text text-gray-700">• Property address and project details</li>
              <li className="body-text text-gray-700">• Any other information you choose to provide</li>
            </ul>

            <h3 className="h3 text-brand-black mb-4 mt-8">How We Use Your Information</h3>
            <p className="body-text-lg text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="body-text text-gray-700">• Provide, maintain, and improve our services</li>
              <li className="body-text text-gray-700">• Respond to your inquiries and requests</li>
              <li className="body-text text-gray-700">• Send you updates about our services</li>
              <li className="body-text text-gray-700">• Comply with legal obligations</li>
            </ul>

            <h3 className="h3 text-brand-black mb-4 mt-8">Data Security</h3>
            <p className="body-text-lg text-gray-600 mb-6">
              We implement appropriate technical and organisational measures to protect your personal 
              information. However, no method of transmission over the internet is 100% secure, and 
              we cannot guarantee absolute security.
            </p>

            <h3 className="h3 text-brand-black mb-4 mt-8">Your Rights</h3>
            <p className="body-text-lg text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="body-text text-gray-700">• Access your personal information</li>
              <li className="body-text text-gray-700">• Request correction of inaccurate data</li>
              <li className="body-text text-gray-700">• Request deletion of your personal information</li>
              <li className="body-text text-gray-700">• Object to processing of your personal information</li>
            </ul>

            <h3 className="h3 text-brand-black mb-4 mt-8">Contact Us</h3>
            <p className="body-text-lg text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="body-text text-gray-700 mb-2">
                <strong>Email:</strong> will@assuredecosystem.co.uk
              </p>
              <p className="body-text text-gray-700">
                <strong>Phone:</strong> 07918 291605
              </p>
            </div>

            <h3 className="h3 text-brand-black mb-4 mt-8">Changes to This Policy</h3>
            <p className="body-text-lg text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

