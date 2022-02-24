import { animehub, sthetica } from 'assets';
import ProjectItem from './ProjectItem';

export default function Projects() {
  const animeHub = {
    title: 'Animehub',
    img: animehub,
    description:
      'A personal side project made from scratch with React, Typescript, Redux Toolkit and PostCSS using Kitsu API to explore anime titles. It is designed to showcase my web development skills, especially React and CSS.',
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
      'An artwork ecommerce project made with React, Typescript, Redux Toolkit, TailwindCSS and CommerceJS. It also has Stripe integration, ensuring security best practices in payment processing.',
    stack: 'React, Typescript, Redux (Redux Toolkit), React Router, TailwindCSS, CommerceJS.',
    url: {
      application: 'https://sthetica.netlify.app',
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
