import About from 'components/about/About';
import Hero from 'components/hero/Hero';
import Projects from 'components/projects/Projects';
import GoTop from './GoTop';

const styles = {
  section: 'flex flex-col gap-12 md:gap-40 mt-32 md:mt-80 justify-center w-full',
};

export default function Content() {
  return (
    <section className={styles.section}>
      <Hero />
      <About />
      <Projects />
      <GoTop />
    </section>
  );
}
