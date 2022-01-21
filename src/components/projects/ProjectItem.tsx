import Button from 'components/Button';
import { ReactNode } from 'react';

type ProjectItemProps = {
  title: string;
  children: ReactNode;
  img: string;
  url: {
    application: string;
    repository: string;
  };
};

const styles = {
  container: 'md:col-start-2 mb-10 flex flex-col gap-5',
  canvas: 'p-4 md:col-start-2',
  img: 'ring-2 ring-secondary rounded-lg',
  buttons: 'md:col-start-2 flex md:gap-10 items-center justify-around',
  title: 'text-xl font-bold tracking-wide pl-4 md:col-start-2 text-justify',
  text: 'md:col-start-2 text-justify p-4 text-lg',
};

export default function ProjectItem({ title, children, url, img }: ProjectItemProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.canvas}>
        <img className={styles.img} src={img} alt="ahub screenshot" loading="lazy" />
      </div>
      <p className={styles.text}>{children}</p>
      <div className={styles.buttons}>
        <Button url={url.application} color="bg-green" text="Live demo" />
        <Button url={url.repository} color="bg-purple" text="Code" />
      </div>
    </div>
  );
}
