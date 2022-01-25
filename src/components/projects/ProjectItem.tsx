import { ReactNode } from 'react';

type ProjectItemProps = {
  project: {
    title: string;
    img: string;
    url: {
      application: string;
      repository: string;
    };
  };
  children: ReactNode;
};

const styles = {
  container: 'md:col-start-2 mb-10 flex flex-col gap-5',
  canvas: 'p-4 md:col-start-2',
  img: 'ring-2 ring-secondary rounded-lg',
  buttons: 'md:col-start-2 flex md:gap-10 items-center justify-around',
  title: 'text-xl font-bold tracking-wide pl-4 md:col-start-2 text-justify',
  text: 'md:col-start-2 text-justify p-4 text-lg',
};

export default function ProjectItem({ project, children }: ProjectItemProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{project.title}</h2>
      <div className={styles.canvas}>
        <img
          width="600px"
          height="480px"
          className={styles.img}
          src={project.img}
          alt="ahub screenshot"
          loading="lazy"
        />
      </div>
      <div className={styles.text}>{children}</div>
      <div className={styles.buttons}>
        <a href={project.url.application} target="_blank" rel="noreferrer">
          <button type="button" aria-label="demo" className="button bg-green">
            Live demo
          </button>
        </a>
        <a href={project.url.repository} target="_blank" rel="noreferrer">
          <button type="button" aria-label="code" className="button bg-purple">
            Code
          </button>
        </a>
      </div>
    </div>
  );
}
