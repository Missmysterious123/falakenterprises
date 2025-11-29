import { Paintbrush, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start">
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
          <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
          <div className="space-y-2 text-center md:text-left">
            <a href="tel:+919876543210" className="flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@falakenterprises.com" className="flex items-center gap-2 transition-colors hover:text-accent">
              <Mail className="h-4 w-4" />
              <span>info@falakenterprises.com</span>
            </a>
          </div>
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
