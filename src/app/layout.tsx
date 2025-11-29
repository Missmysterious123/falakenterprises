import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsappButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Top Painters & Interior Colour Services in Mumbai | Falak Enterprises',
  description: 'Professional painting and interior services in Mumbai. Falak Enterprises offers expert interior and exterior painting, wood polishing, and waterproofing. Get a free quote today!',
  keywords: 'painters in Mumbai, interior colour in Mumbai, house painting Mumbai, office painting, waterproofing Mumbai, wood polish, Falak Enterprises',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
