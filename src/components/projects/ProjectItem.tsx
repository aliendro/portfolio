type ProjectItemProps = {
  project: {
    title: string;
    img: string;
    description: string;
    stack: string;
    url: {
      application: string;
      repository: string;
    };
  };
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:col-start-2">
      <h2 className="pl-4 text-justify text-xl font-bold tracking-wide md:col-start-2">
        {project.title}
      </h2>
      <div className="flex justify-center p-4 md:col-start-2">
        <img
          className=" rounded-lg ring-2 ring-secondary"
          width="600px"
          height="480px"
          src={project.img}
          alt="ahub screenshot"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-justify text-lg md:col-start-2">{project.description}</div>
      <div className="p-4 text-justify text-lg md:col-start-2">Stack: {project.stack}</div>
      <div className="flex items-center justify-around md:col-start-2 md:gap-10">
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
