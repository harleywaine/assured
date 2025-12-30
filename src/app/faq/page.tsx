import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions - Elevate Assured',
  description: 'Frequently asked questions about Elevate Assured roofing services. Get answers about our services, pricing, and process.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'How much does a roof assessment cost?',
      answer: 'Our roof assessment costs £99. This includes a thorough inspection of your roof, identification of any issues, and a detailed report with recommendations.',
    },
    {
      question: 'Do you offer emergency roofing services?',
      answer: 'Yes, we offer 24/7 emergency roofing services for urgent issues like leaks, storm damage, or structural problems. Contact us immediately if you have an emergency.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve homeowners and businesses across Dorset and Hampshire, including Bournemouth, Poole, Southampton, and surrounding areas.',
    },
    {
      question: 'How long does a roof installation take?',
      answer: 'The duration depends on the size and complexity of the project. A typical roof replacement takes 3-7 days, while smaller repairs can often be completed in a single day.',
    },
    {
      question: 'Do you provide warranties on your work?',
      answer: 'Yes, we provide warranties on all our work. The specific warranty terms depend on the type of work completed and materials used. We\'ll discuss warranty details with you before starting any project.',
    },
    {
      question: 'What types of roofing materials do you work with?',
      answer: 'We work with a wide range of roofing materials including tiled roofing (concrete tiles, clay tiles, slate) and flat roofing systems (torch-on felt, EPDM rubber membranes). We also work with metal roofing and other materials. We can help you choose the best material for your property and budget.',
    },
    {
      question: 'Do I need planning permission for roof work?',
      answer: 'Most roof repairs and replacements don\'t require planning permission, but some work (like roof extensions or significant alterations) may do. We can advise you on this during your assessment.',
    },
    {
      question: 'How do I book an assessment?',
      answer: 'You can book a £99 assessment by calling us on 07918 291605, emailing will@elevateassured.co.uk, or using our contact form. We\'ll arrange a convenient time to visit your property.',
    },
  ];

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
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 md:mb-10"></div>
          <p className="lead text-gray-200 max-w-3xl mx-auto">
            Common questions about our roofing services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="h4 text-brand-black mb-3">
                  {faq.question}
                </h3>
                <p className="body-text text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="h3 text-brand-black mb-4">
              Still have questions?
            </h2>
            <p className="body-text-lg text-gray-600 mb-6">
              Get in touch with our team - we're here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-brand-gold text-brand-black px-6 py-3 rounded-lg btn hover:bg-brand-gold-dark transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:07918291605"
                className="border-2 border-brand-black text-brand-black px-6 py-3 rounded-lg btn hover:bg-brand-black hover:text-white transition-colors duration-200"
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

