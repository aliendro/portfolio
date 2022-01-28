import { Linkedin, Github, Email } from 'assets';

const links = {
  linkedin: 'https://www.linkedin.com/in/michael-aliendro-484578216/',
  github: 'https://www.github.com/aliendro',
  email: 'mailto:contato@aliendro.com',
};

export default function Sidebar() {
  return (
    <ul className="fixed top-1/3 ml-5 hidden flex-col gap-10 rounded bg-secondary p-2 pt-8 pb-8 text-foreground shadow-sm shadow-secondary transition-all duration-500 md:flex">
      <li>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin">
          <Linkedin className="h-7 w-7 transition-colors duration-200 hover:cursor-pointer hover:text-purple" />
        </a>
      </li>
      <li>
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="github">
          <Github className="h-7 w-7 transition-colors duration-200 hover:cursor-pointer hover:text-purple" />
        </a>
      </li>
      <li>
        <a href={links.email} target="_blank" rel="noreferrer" aria-label="email">
          <Email className="h-7 w-7 transition-colors duration-200 hover:cursor-pointer hover:text-purple" />
        </a>
      </li>
    </ul>
  );
}
