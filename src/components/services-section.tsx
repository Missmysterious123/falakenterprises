import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PaintRoller,
  Home,
  Paintbrush2,
  Layers,
  Droplets,
  Hammer,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Interior Painting',
    description: 'Refresh your indoor spaces with our professional interior painting services.',
    icon: <PaintRoller className="h-8 w-8 text-accent" />,
    imageId: 'interior-painting',
  },
  {
    title: 'Exterior Painting',
    description: 'Boost curb appeal and protect your property with our durable exterior paints.',
    icon: <Home className="h-8 w-8 text-accent" />,
    imageId: 'exterior-painting',
  },
  {
    title: 'Wood Polish Painting',
    description: 'Enhance and protect your wooden furniture and fixtures with a premium polish.',
    icon: <Paintbrush2 className="h-8 w-8 text-accent" />,
    imageId: 'wood-polish',
  },
  {
    title: 'Texture Painting',
    description: 'Add depth and character to your walls with our artistic texture painting.',
    icon: <Layers className="h-8 w-8 text-accent" />,
    imageId: 'texture-painting',
  },
  {
    title: 'Waterproofing Services',
    description: 'Protect your home from water damage with our expert waterproofing solutions.',
    icon: <Droplets className="h-8 w-8 text-accent" />,
    imageId: 'waterproofing',
  },
  {
    title: 'POP Installations',
    description: 'Create stunning ceilings and wall designs with our custom POP work.',
    icon: <Hammer className="h-8 w-8 text-accent" />,
    imageId: 'pop-installation',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-primary">
            Our Expertise
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Comprehensive Painting & Interior Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            From a single room to an entire property, we offer a wide range of services to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find(p => p.id === service.imageId);
            return (
              <Card
                key={service.title}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 w-full">
                  {image && (
                     <Image
                        src={image.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                  )}
                </div>
                <CardHeader className="flex flex-row items-start gap-4">
                  {service.icon}
                  <div className="grid gap-1">
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
