import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Elevate Assured',
  description: 'Learn about Elevate Assured, a trusted family-run roofing business serving Dorset and Hampshire. Over 20 years of experience delivering quality roofing solutions.',
  openGraph: {
    title: 'About Us - Elevate Assured',
    description: 'Trusted local roofers dedicated to quality, safety, and service.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

