'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M6.5 17.5 5 22l4.7-1.5a9 9 0 1 0-3.2-3z"/>
      <path d="M8.5 9.5c0 3 3 6 5.5 6.5.6.1 1-.4 1.3-.8.2-.3.3-.6.6-.5.4.1 1.8.9 2.1 1.1.3.2.3.4.3.7a2.7 2.7 0 0 1-.1.6c-.2.6-1.2 1.3-2 1.4-1 .1-4-.3-6.7-3s-3-5.8-3-6.8c0-.8.8-1.7 1.4-1.9.2-.1.4-.1.6-.1.3 0 .5 0 .7.4.2.4.9 2.2.9 2.2.1.2.1.4 0 .6-.2.3-.2.3-.4.6-.1.2-.2.3-.1.5z"/>
    </svg>

);


export function WhatsappButton() {
  return (
    <Link 
      href="https://wa.me/919970753101" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 animate-fade-in"
    >
        <WhatsAppIcon />
        <span className="sr-only">Chat on WhatsApp</span>
    </Link>
  );
}
