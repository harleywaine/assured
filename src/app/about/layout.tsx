import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Elevate Assured',
  description: 'Learn about Elevate Assured, a professional roofing company based in Christchurch. Over 10 years of experience delivering high-standard roofing solutions across Dorset and Hampshire.',
  openGraph: {
    title: 'About Us - Elevate Assured',
    description: 'Trusted local roofers dedicated to quality, safety, and service.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elevate Assured - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Elevate Assured',
    description: 'Trusted local roofers dedicated to quality, safety, and service.',
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



