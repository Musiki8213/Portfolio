import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'Musiki Sithomola — Fullstack Developer',
  description:
    'Premium portfolio of Musiki Sithomola — Fullstack Developer crafting modern digital products with precision and clarity.',
  keywords: ['Musiki Sithomola', 'Fullstack Developer', 'React', 'TypeScript', 'Portfolio'],
  openGraph: {
    title: 'Musiki Sithomola — Fullstack Developer',
    description: 'Designing digital products with visual precision.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen overflow-x-hidden font-sans antialiased"
        style={{ ['--font-clash' as string]: '"Satoshi", var(--font-geist-sans), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
