import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Services - Elevate Assured',
  description: 'Comprehensive roofing services including installation, repairs, maintenance, and weatherproofing. Expert solutions for every roofing need across Dorset and Hampshire.',
  openGraph: {
    title: 'Roofing Services - Elevate Assured',
    description: 'Expert roofing solutions including installation, repairs, and maintenance.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

