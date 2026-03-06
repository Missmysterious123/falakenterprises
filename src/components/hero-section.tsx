import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section id="home" className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="animate-fade-in-up space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Transforming Spaces, One Brushstroke at a Time
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/90 md:text-xl">
              Apna Painters delivers premium painting and interior solutions with unmatched quality and craftsmanship.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#services">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="w-full border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
