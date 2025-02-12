import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Italiana, Pacifico, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from '@/components/nav/Nav'

import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Pennie's Kitchen",
  description: "Discover a taste of home.",
  icons: {
    icon: [
      {
        url: '/images/lemonsicon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export const viewport = {
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italiana.variable} ${pacifico.variable} ${playfair.variable} antialiased`}
      >
        
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
