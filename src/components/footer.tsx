import { Paintbrush, Phone, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2C6.58 2 2.13 6.23 2.13 11.54c0 2.42.93 4.63 2.47 6.32L2 22l4.29-1.35c1.62.88 3.48 1.38 5.44 1.38 5.46 0 9.91-4.23 9.91-9.54C21.64 6.23 17.5 2 12.04 2zm5.47 13.47c-.23.65-1.34 1.27-1.85 1.32-.47.05-1.06.07-1.72-.11-.4-.12-.91-.3-1.57-.59-2.76-1.19-4.56-3.94-4.69-4.13-.14-.19-1.12-1.49-1.12-2.85 0-1.36.71-2.03.96-2.31.25-.28.54-.35.72-.35h.52c.17 0 .39-.06.61.47.23.56.78 1.94.85 2.08.07.14.11.3.02.48-.09.19-.14.3-.28.46-.14.16-.29.36-.41.49-.14.14-.29.3-.12.59.17.28.75 1.23 1.61 2 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.3.39-.24.66-.14.28.09 1.76.83 2.06.98.3.14.5.21.57.33.07.12.07.68-.16 1.33z"/>
    </svg>
);


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start md:col-span-2">
          <Link href="#home" className="flex items-center gap-2" prefetch={false}>
            <Paintbrush className="h-8 w-8" />
            <span className="font-headline text-2xl font-bold">
              Apna Painters
            </span>
          </Link>
          <p className="max-w-md text-center text-sm text-primary-foreground/80 md:text-left">
            Bringing color and life to your spaces with precision and passion. Your trusted partner for painting in Mumbai.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
          <nav className="space-y-2 text-center md:text-left">
            <Link href="#about" className="block transition-colors hover:text-accent">About</Link>
            <Link href="#services" className="block transition-colors hover:text-accent">Services</Link>
            <Link href="#gallery" className="block transition-colors hover:text-accent">Gallery</Link>
            <Link href="#contact" className="block transition-colors hover:text-accent">Contact</Link>          
          </nav>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-accent"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-accent"><Youtube className="h-5 w-5" /></Link>
              <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-accent"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-accent"><Linkedin className="h-5 w-5" /></Link>
          </div>
           <h3 className="font-headline text-lg font-semibold mt-4">Contact</h3>
           <a href="tel:+919970753101" className="flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-4 w-4" />
              <span>+91 99707 53101</span>
            </a>
            <a href="https://wa.me/919970753101" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
                <WhatsAppIcon />
                <span>WhatsApp</span>
            </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 bg-primary/50">
        <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Apna Painters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
