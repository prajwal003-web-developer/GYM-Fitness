import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Trainers from '@/components/Trainers';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Trainers />
      <Gallery />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
