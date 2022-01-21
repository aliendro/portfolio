import { Linkedin, Github, Email } from 'assets';
import { useEffect, useState } from 'react';

const styles = {
  sidebar:
    'hidden md:flex flex-col gap-10 fixed bg-secondary p-2 pt-8 pb-8 rounded shadow-sm shadow-secondary text-foreground ml-5 transition-all duration-500',
  icon: 'h-7 w-7 hover:text-purple transition-colors duration-200 hover:cursor-pointer',
};

const links = {
  linkedin: 'https://www.linkedin.com/in/michael-aliendro-484578216/',
  github: 'https://www.github.com/aliendro',
  email: 'mailto:contato@aliendro.com',
};

export default function Sidebar() {
  const [sidebarClass, setSidebarClass] = useState<string>(`${styles.sidebar} -bottom-80`);

  useEffect(() => {
    setTimeout(() => {
      setSidebarClass(`${styles.sidebar} bottom-1/2`);
    }, 200);
  }, []);
  return (
    <ul className={sidebarClass}>
      <li>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          <Linkedin className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={links.github} target="_blank" rel="noreferrer">
          <Github className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={links.email} target="_blank" rel="noreferrer">
          <Email className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}
