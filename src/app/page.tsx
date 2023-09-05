import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Form />
      <Footer />
    </>
  );
}
