import { Award, Paintbrush, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Experience',
    description: 'Decades of combined experience ensuring flawless execution on every project.',
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-accent" />,
    title: 'Creativity',
    description: 'Innovative solutions and creative designs to bring your vision to life.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Quality',
    description: 'Commitment to using only the highest quality materials for a lasting finish.',
  },
];

export function IntroductionSection() {
  return (
    <section id="about" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Who We Are
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Your Trusted Partner in Painting & Interiors
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            At Apna Painters, we are dedicated to providing exceptional painting and interior design services. Our mission is to transform your residential or commercial spaces with our expertise, attention to detail, and passion for perfection. We believe in building lasting relationships with our clients through reliability and outstanding results.
          </p>
        </div>
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
