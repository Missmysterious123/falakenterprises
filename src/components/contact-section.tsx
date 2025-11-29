'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Get in Touch
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Contact Us for a Free Quote
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Have a project in mind? We'd love to hear from you. Fill out the form below or contact us directly.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="animate-slide-in-left">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 99707 53101" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="space-y-8 animate-slide-in-right">
             <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold">Our Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-105">
                  <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">134/12 Krishna Master Chawl, Nariman Lane, near Ram Mandir, Mumbai 400070</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-105">
                  <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 99707 53101</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold">Follow Us</h3>
                <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-accent"><Instagram className="h-6 w-6" /></Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-accent"><Youtube className="h-6 w-6" /></Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-accent"><Facebook className="h-6 w-6" /></Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-accent"><Linkedin className="h-6 w-6" /></Link>
                </div>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <div className="h-full w-full bg-secondary flex items-center justify-center">
                    <p className="text-muted-foreground">Google Map Placeholder</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
