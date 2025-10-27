import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Mahaveer Medi - India\'s Leading Medicine Supplier',
  description: 'With over 20 years of experience, we have built a reputation for being the leading wholesale medicine supplier in India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
