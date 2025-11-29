import { Paintbrush, Phone, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

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
            Bringing color and life to your spaces with precision and passion.
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
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
