'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
      <path d="M12.04 2C6.58 2 2.13 6.23 2.13 11.54c0 2.42.93 4.63 2.47 6.32L2 22l4.29-1.35c1.62.88 3.48 1.38 5.44 1.38 5.46 0 9.91-4.23 9.91-9.54C21.64 6.23 17.5 2 12.04 2zm5.47 13.47c-.23.65-1.34 1.27-1.85 1.32-.47.05-1.06.07-1.72-.11-.4-.12-.91-.3-1.57-.59-2.76-1.19-4.56-3.94-4.69-4.13-.14-.19-1.12-1.49-1.12-2.85 0-1.36.71-2.03.96-2.31.25-.28.54-.35.72-.35h.52c.17 0 .39-.06.61.47.23.56.78 1.94.85 2.08.07.14.11.3.02.48-.09.19-.14.3-.28.46-.14.16-.29.36-.41.49-.14.14-.29.3-.12.59.17.28.75 1.23 1.61 2 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.3.39-.24.66-.14.28.09 1.76.83 2.06.98.3.14.5.21.57.33.07.12.07.68-.16 1.33z"/>
    </svg>
);


export function WhatsappButton() {
  return (
    <Link 
      href="https://wa.me/919970753101" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110 animate-fade-in"
    >
        <WhatsAppIcon />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
        <span className="sr-only">Chat on WhatsApp</span>
    </Link>
  );
}
