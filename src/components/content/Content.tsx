import About from 'components/about/About';
import Hero from 'components/hero/Hero';
import Projects from 'components/projects/Projects';

const Content = () => (
  <div className="flex flex-col gap-40 mt-40 justify-center w-full">
    <Hero />
    <About />
    <Projects />
  </div>
);

export default Content;
