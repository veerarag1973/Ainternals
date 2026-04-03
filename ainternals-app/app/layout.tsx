import type { Metadata } from 'next';
import { Nunito, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ainternals.com'),
  title: {
    default: 'ainternals.com — The utility layer. Backend of SpanForge.',
    template: '%s — ainternals.com',
  },
  description:
    '85 production utilities. Rust-native. Zero dependencies. Free. Every tool closes a specific gap between prototype and production.',
  openGraph: {
    type: 'website',
    siteName: 'ainternals.com',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

