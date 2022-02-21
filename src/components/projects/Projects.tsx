import { animehub, sthetica } from 'assets';
import ProjectItem from './ProjectItem';

export default function Projects() {
  const animeHub = {
    title: 'Animehub',
    img: animehub,
    description:
      'This is a simple side project using Kitsu API to explore anime titles. It was created using Vite, React and Redux Toolkit.',
    stack: 'React, Typescript, Redux (Redux Toolkit), React Router, CSS Modules and PostCSS.',
    url: {
      application: 'https://ahub.netlify.app',
      repository: 'https://github.com/aliendro/animehub',
    },
  };
  const ecommerce = {
    title: 'Sthetica',
    img: sthetica,
    description:
      'This is a simple artwork ecommerce. It was created using Vite, React, Typescript, CommerceJS, Redux Toolkit and TailwindCSS. Artwork provided by sthethica',
    stack: 'React, Typescript, Redux (Redux Toolkit), React Router, TailwindCSS, CommerceJS.',
    url: {
      application: 'https://sthethica.netlify.app',
      repository: 'https://github.com/aliendro/sthetica',
    },
  };
  return (
    <section id="projects" className="section">
      <h1 className="heading text-cyan">Projects</h1>
      <ProjectItem project={animeHub} />
      <ProjectItem project={ecommerce} />
    </section>
  );
}
