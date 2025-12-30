import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Elevate Assured',
  description: 'Get in touch with Elevate Assured for professional roofing services. Book your £99 assessment today. Serving Dorset and Hampshire.',
  openGraph: {
    title: 'Contact Us - Elevate Assured',
    description: 'Book your £99 assessment or request a quote for professional roofing services.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elevate Assured - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Elevate Assured',
    description: 'Book your £99 assessment or request a quote for professional roofing services.',
    images: ['/og-image.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



