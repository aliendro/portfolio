import type { Project } from 'types/project';

type ProjectItemProps = {
  item: Project;
};

export default function ProjectItem({ item }: ProjectItemProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:col-start-2">
      <h3 className="pl-4 text-left text-xl font-bold tracking-wide md:col-start-2">
        {item.title}
      </h3>
      <div className="flex  w-full justify-center p-4 md:col-start-2">
        <img
          className=" aspect-video rounded-lg ring-2 ring-secondary"
          width="600px"
          height="480px"
          src={item.img}
          alt="application screenshot"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-justify text-lg md:col-start-2">{item.description}</div>
      <div className="p-4 text-justify text-lg md:col-start-2">Stack: {item.stack}</div>
      <div className="flex items-center justify-around md:col-start-2 md:gap-10">
        <a
          aria-label="live demo"
          className="button bg-green"
          href={item.appUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live demo
        </a>
        <a
          aria-label="code"
          className="button bg-purple"
          href={item.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  );
}
