import About from 'components/about/About';
import Hero from 'components/hero/Hero';
import Projects from 'components/projects/Projects';
import GoTop from './GoTop';

export default function Content() {
  return (
    <section className="mt-32 flex w-full flex-col justify-center gap-12 md:mt-80 md:gap-40">
      <Hero />
      <About />
      <Projects />
      <GoTop />
    </section>
  );
}
