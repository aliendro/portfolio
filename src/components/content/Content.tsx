import { lazy } from 'react';

const About = lazy(() => import('components/about/About'));
const Projects = lazy(() => import('components/projects/Projects'));
const GoTop = lazy(() => import('./GoTop'));

export default function Content() {
  return (
    <div className="mt-32 flex w-full flex-col justify-center gap-12 md:mt-80 md:gap-40">
      <About />
      <Projects />
      <GoTop />
    </div>
  );
}
