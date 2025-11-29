import { Paintbrush, Phone, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M6.5 17.5 5 22l4.7-1.5a9 9 0 1 0-3.2-3z"/>
      <path d="M8.5 9.5c0 3 3 6 5.5 6.5.6.1 1-.4 1.3-.8.2-.3.3-.6.6-.5.4.1 1.8.9 2.1 1.1.3.2.3.4.3.7a2.7 2.7 0 0 1-.1.6c-.2.6-1.2 1.3-2 1.4-1 .1-4-.3-6.7-3s-3-5.8-3-6.8c0-.8.8-1.7 1.4-1.9.2-.1.4-.1.6-.1.3 0 .5 0 .7.4.2.4.9 2.2.9 2.2.1.2.1.4 0 .6-.2.3-.2.3-.4.6-.1.2-.2.3-.1.5z"/>
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
              Falak Enterprises
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
            &copy; {new Date().getFullYear()} Falak Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
