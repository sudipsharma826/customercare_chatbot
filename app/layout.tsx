import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import LenisScroll from '@/components/layout/lenis';
import Provider from '@/components/layout/provider';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://samvad-customer-care.vercel.app'),
  title: {
    default: 'Samvad – Customer Care Chat',
    template: '%s | Samvad',
  },
  description:
    'Samvad is the customer care chat application to help businesses provide proper customer support with RAG application, schedule meetings in calendar, and more.',
  keywords: [
    'customer care',
    'customer support',
    'chat application',
    'RAG application',
    'meeting scheduling',
    'calendar integration',
    'Samvad',
    'AI customer support',
    'customer care chatbot',
  ],
  authors: [{ name: 'Samvad Team' }],
  creator: 'Samvad Team',
  applicationName: 'Samvad',
  appleWebApp: {
    title: 'Samvad',
    capable: true,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'Samvad – Customer Care Chat Application',
    description:
      'Samvad helps businesses provide customer support, schedule meetings, and manage customer care efficiently.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samvad – Customer Care Chat Application',
    description: 'Samvad: Customer care chat app for support, RAG, and meeting scheduling.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen`}>
        <LenisScroll />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
