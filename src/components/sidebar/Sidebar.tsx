import { Linkedin, Github, Email } from 'assets';

const styles = {
  sidebar:
    'hidden md:flex flex-col gap-10 fixed top-1/3 bg-secondary p-2 pt-8 pb-8 rounded shadow-sm shadow-secondary text-foreground ml-5',
  icon: 'h-7 w-7 hover:text-purple transition-colors duration-200 hover:cursor-pointer',
};

const links = {
  linkedin: 'https://www.linkedin.com/in/michael-aliendro-484578216/',
  github: 'https://www.github.com/aliendro',
  email: 'mailto:contato@aliendro.com',
};

const Sidebar = () => (
  <ul className={styles.sidebar}>
    <li>
      <a href={links.linkedin}>
        <Linkedin className={styles.icon} />
      </a>
    </li>
    <li>
      <a href={links.github}>
        <Github className={styles.icon} />
      </a>
    </li>
    <li>
      <a href={links.email}>
        <Email className={styles.icon} />
      </a>
    </li>
  </ul>
);

export default Sidebar;
