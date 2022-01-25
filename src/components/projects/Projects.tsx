import { animehub } from 'assets';
import ProjectItem from './ProjectItem';

const styles = {
  section: 'p-4 md:p-0 grid md:grid-cols-[1fr_2fr_1fr] gap-3 text-foreground h-100 cursor-default',
  heading: 'text-3xl md:col-start-2 font-bold tracking-wide pl-4 text-cyan text-center p-10',
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h1 className={styles.heading}>Projects</h1>
      <ProjectItem
        title="Animehub"
        img={animehub}
        url={{
          application: 'https://ahub.netlify.app',
          repository: 'https://github.com/aliendro/animehub',
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
        title="Sthethica (ecommerce)"
        img={animehub}
        url={{
          application: 'https://sthethica.netlify.app',
          repository: 'https://github.com/aliendro/sthethica',
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
