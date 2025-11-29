import { HeroSection } from '@/components/hero-section';
import { IntroductionSection } from '@/components/introduction-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { GallerySection } from '@/components/gallery-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
