import { BaseSyntheticEvent } from 'react';

import { Menu, Close, Linkedin, Github, Email } from 'assets';
import useScroll from 'hooks/useScroll';
import { useNavbar } from 'context/NavbarContext';

const styles = {
  header:
    'bg-secondary font-mono text-sm text-foreground fixed w-full z-10 bg-primary transition-all duration-500',
  nav: 'm-5 mx-14 flex items-center',
  navbar:
    'flex flex-col w-64 h-screen fixed transition-transform duration-500 md:duration-50 top-0 bg-secondary right-0 md:w-auto md:h-auto md:static md:flex-row gap-5 items-center justify-center h-20',
  logo: 'p-2 w-8 h-8 border-green border-2 mr-auto ring-purple ring-2 ring-offset-8 ring-offset-secondary rounded-t-2xl rounded-br-2xl font-sans flex items-center font-extrabold hover:ring-green hover:border-purple transition-colors duration-200',
  navitem:
    'p-5 hover:underline hover:cursor-pointer decoration-white decoration-2 underline-offset-4  hover:text-green',
  button:
    'p-3 border-white border-[1.5px] rounded hover:bg-white transition-colors duration-200 hover:text-white',
  icon: 'text-green h-10 w-10 z-10 md:hidden',
};

const links = {
  linkedin: 'https://www.linkedin.com/in/michael-aliendro-484578216/',
  github: 'https://www.github.com/aliendro',
  email: 'mailto:contato@aliendro.com',
};

export default function Navbar() {
  const { state: isOpen, style, open } = useNavbar();
  const headerVisible = useScroll();
  const headerClass = headerVisible ? `${styles.header} top-0` : `${styles.header} -top-40`;

  const handleClick = (event: BaseSyntheticEvent, id: string) => {
    event.preventDefault();
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>
        <div className={styles.logo} />
        <Menu className={`${styles.icon} ${isOpen ? 'hidden' : 'block'}`} onClick={open} />
        <Close className={`${styles.icon} ${isOpen ? 'block' : 'hidden'}`} />
        <ul className={style}>
          <li className={styles.navitem}>
            <a href="#stack" onClick={(e) => handleClick(e, 'stack')}>
              Tech stack
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>
              Projects
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="#resume">Resume</a>
          </li>
          <ul className="fixed bottom-0 flex md:hidden">
            <li className={styles.navitem}>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </li>
            <li className={styles.navitem}>
              <a href={links.github} target="_blank" rel="noreferrer">
                <Github />
              </a>
            </li>
            <li className={styles.navitem}>
              <a href={links.email} target="_blank" rel="noreferrer">
                <Email />
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
