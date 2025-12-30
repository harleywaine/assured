import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Elevate Assured - Professional Roofing Services in Dorset & Hampshire",
  description: "Strong roofs. Safe homes. Assured. Professional roofing services in Dorset and Hampshire. Expert installations, repairs, and maintenance you can trust.",
  icons: {
    icon: [
      { url: '/Logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/Logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/Logo.svg',
      },
    ],
  },
  openGraph: {
    title: "Elevate Assured - Professional Roofing Services",
    description: "Strong roofs. Safe homes. Assured. Professional roofing services in Dorset and Hampshire.",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elevate Assured Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elevate Assured - Professional Roofing Services",
    description: "Strong roofs. Safe homes. Assured. Professional roofing services in Dorset and Hampshire.",
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Elevate Assured',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
