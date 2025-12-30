import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Services - Elevate Assured',
  description: 'Comprehensive roofing services including installation, repairs, maintenance, and weatherproofing. Expert solutions for every roofing need across Dorset and Hampshire.',
  openGraph: {
    title: 'Roofing Services - Elevate Assured',
    description: 'Expert roofing solutions including installation, repairs, and maintenance.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elevate Assured - Roofing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services - Elevate Assured',
    description: 'Expert roofing solutions including installation, repairs, and maintenance.',
    images: ['/og-image.png'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



