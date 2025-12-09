import './globals.css';
import React from 'react';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import localFont from 'next/font/local';
import LenisProvider from '@/components/LenisProvider';
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-bricolage',
});

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mahaveermedi.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mahaveer Medi - Leading Pharmaceutical Distributor in Bangalore | Wholesale Medicine Supplier India',
  description: 'Mahaveer Medi-Sales (MMSPL) - Premier pharmaceutical distributor in Bengaluru with 20+ years experience. Serving 10,000+ chemists, hospitals & institutions across Karnataka. 98% fulfillment rate, 25,000+ SKUs.',
  keywords: ['pharmaceutical distributor Bangalore', 'wholesale medicine supplier India', 'pharma distributor Karnataka', 'medicine wholesale Bengaluru', 'pharmacy distributor India', 'bulk medicine supplier', 'pharmaceutical supply chain', 'medical distributor Bangalore'],
  authors: [{ name: 'Mahaveer Medi-Sales Pvt. Ltd.' }],
  creator: 'Mahaveer Medi-Sales Pvt. Ltd.',
  publisher: 'Mahaveer Medi-Sales Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/mahaveer-logo.avif',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Mahaveer Medi',
    title: 'Mahaveer Medi - Leading Pharmaceutical Distributor in Bangalore',
    description: 'Premier pharmaceutical distributor in Bengaluru with 20+ years experience. Serving 10,000+ chemists, hospitals & institutions. 98% fulfillment rate, 25,000+ SKUs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahaveer Medi - Leading Pharmaceutical Distributor in Bangalore',
    description: 'Premier pharmaceutical distributor with 20+ years experience. 98% fulfillment rate, 25,000+ SKUs.',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero poster image to improve LCP while avoiding heavy video preloads */}
        <link rel="preload" as="image" href="/aboutUs/side-image4.avif" type="image/avif" />
      </head>
      <body className={`${inter.variable} ${bricolageGrotesque.variable} ${satoshi.variable} font-sans`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mahaveermedi.com'}/#organization`,
              name: 'Mahaveer Medi-Sales Pvt. Ltd.',
              alternateName: 'MMSPL',
              description: 'Leading pharmaceutical distributor in Bengaluru with over 20 years of experience, serving 10,000+ customers daily.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mahaveermedi.com',
              logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mahaveermedi.com'}/mahaveer-logo.avif`,
                width: '600',
                height: '600',
              },
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mahaveermedi.com'}/mahaveer-logo.avif`,
              telephone: '+91-8046655000',
              email: 'info@mahaveermedi.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bengaluru',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.9716',
                longitude: '77.5946',
              },
              areaServed: [
                {
                  '@type': 'State',
                  name: 'Karnataka',
                },
                {
                  '@type': 'Country',
                  name: 'India',
                },
              ],
              priceRange: 'Wholesale',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  telephone: '+91-8046655000',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi', 'Kannada'],
                  contactOption: 'TollFree',
                },
              ],
              sameAs: [
                // Add social media links when available
              ],
              founder: {
                '@type': 'Person',
                name: 'Mahaveer Medi Founder',
              },
              foundingDate: '2004',
              numberOfEmployees: {
                '@type': 'QuantitativeValue',
                value: '600',
              },
              slogan: 'Delivering Wellness for a Healthier Tomorrow',
              serviceType: [
                'Pharmaceutical Distribution',
                'Wholesale Medicine Supply',
                'Healthcare Logistics',
                'Medical Supply Chain',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '2000',
              },
            }),
          }}
        />
        <LenisProvider>
          {children}
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  )
}
