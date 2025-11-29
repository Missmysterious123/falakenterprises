import { Trophy, Users, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    icon: <Trophy className="h-10 w-10 text-accent" />,
    title: 'Proven Experience',
    description: 'Our extensive portfolio and years in the industry speak for our expertise and reliability.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Skilled Workforce',
    description: 'Our team consists of highly skilled and trained professionals dedicated to their craft.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent" />,
    title: 'Customer-Centric',
    description: 'We prioritize your satisfaction, working closely with you to ensure your vision is realized.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Our Advantage
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose Falak Enterprises?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            We are committed to excellence in every aspect of our work, from initial consultation to the final finishing touches.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 rounded-full bg-secondary p-4">
                {reason.icon}
              </div>
              <h3 className="mb-2 font-headline text-xl font-bold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
