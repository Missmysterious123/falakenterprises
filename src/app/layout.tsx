import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsappButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Top Painters in Mumbai | Painting Services | Apna Painters',
  description: 'Looking for top painters in Mumbai? Apna Painters offers professional painting and interior colour services. We are experts in house and office painting, wood polishing, and waterproofing. Contact us for a free quote!',
  keywords: 'painters in Mumbai, top painters in Mumbai, interior colour Mumbai, house painting Mumbai, office painting Mumbai, waterproofing services Mumbai, wood polish Mumbai, Apna Painters, painting contractors Mumbai',

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
