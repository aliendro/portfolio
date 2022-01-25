import { animehub } from 'assets';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h1 className="heading text-cyan">Projects</h1>
      <ProjectItem
        project={{
          title: 'Animehub',
          img: animehub,
          url: {
            application: 'https://ahub.netlify.app',
            repository: 'https://github.com/aliendro/animehub',
          },
        }}
      >
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero aut eius. Et
            culpa quaerat numquam, quo corporis expedita. Laborum aliquam nisi voluptatum impedit
            doloremque rerum iusto possimus eos nostrum. Aperiam animi cum quis nihil earum totam
            aliquam, porro ad vero numquam, temporibus repellat. Suscipit unde quasi repudiandae qui
            possimus!
          </p>
          <p className="pt-10 text-[18px] tracking-tight">
            Stack: React, Typescript, Redux (Redux Toolkit), React Router, CSS Modules and PostCSS.
          </p>
        </>
      </ProjectItem>
      <ProjectItem
        project={{
          title: 'Sthethica',
          img: animehub,
          url: {
            application: 'https://sthethica.netlify.app',
            repository: 'https://github.com/aliendro/sthethica',
          },
        }}
      >
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero aut eius. Et
            culpa quaerat numquam, quo corporis expedita. Laborum aliquam nisi voluptatum impedit
            doloremque rerum iusto possimus eos nostrum. Aperiam animi cum quis nihil earum totam
            aliquam, porro ad vero numquam, temporibus repellat. Suscipit unde quasi repudiandae qui
            possimus!
          </p>
          <p className="pt-10 text-[18px]">
            Stack: React, Typescript, Redux (Redux Toolkit), React Router, TailwindCSS, CommerceJS.
          </p>
        </>
      </ProjectItem>
    </section>
  );
}
