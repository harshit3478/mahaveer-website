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

export const metadata = {
  title: 'Mahaveer Medi - India\'s Leading Medicine Supplier',
  description: 'With over 20 years of experience, we have built a reputation for being the leading wholesale medicine supplier in India',
  icons: {
    icon: '/favicon.ico',
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
              '@type': 'Organization',
              name: 'Mahaveer Medi-Sales Pvt. Ltd.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mahaveermedi.com',
              logo: '/mahaveer-logo.avif',
              sameAs: [],
              contactPoint: [{
                '@type': 'ContactPoint',
                contactType: 'customer support',
                telephone: '+91-8046655000',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi'],
              }],
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
