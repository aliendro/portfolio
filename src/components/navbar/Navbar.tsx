import { BaseSyntheticEvent, useEffect, useState } from 'react';

import { Menu, Close, Linkedin, Github, Email } from 'assets';
import useScroll from 'hooks/useScroll';

const links = {
  linkedin: 'https://www.linkedin.com/in/michael-aliendro-484578216/',
  github: 'https://www.github.com/aliendro',
  email: 'mailto:contato@aliendro.com',
};

export default function Navbar() {
  const navItem =
    'p-5 hover:underline hover:cursor-pointer decoration-white decoration-2 underline-offset-4 hover:text-green';
  const [isOpen, setOpen] = useState<boolean>(false);
  const headerVisible = useScroll();

  const openMenu = () => {
    setTimeout(() => {
      setOpen(true);
    }, 75);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setOpen(false);
    }, 75);
  };

  const handleClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const id = (event.target.hash as string).slice(1);
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 z-10 w-full bg-secondary font-mono text-sm text-foreground transition-all duration-500 ${
        headerVisible ? 'transform-none ' : '-translate-y-full'
      }`}
    >
      <nav className="m-5 mx-14 flex items-center">
        <div className="mr-auto flex h-8 w-8 items-center rounded-t-2xl rounded-br-2xl border-2 border-green p-2 font-sans font-extrabold ring-2 ring-purple ring-offset-8 ring-offset-secondary transition-colors duration-200 hover:border-purple hover:ring-green" />

        <Menu
          className={`z-10 h-10 w-10 text-green md:hidden ${isOpen ? 'hidden' : 'block'}`}
          onClick={openMenu}
        />
        <Close
          onClick={closeMenu}
          className={`z-10 h-10 w-10 text-green md:hidden ${isOpen ? 'block' : 'hidden'}`}
        />

        <ul
          aria-label="primary navigation"
          onTouchStart={closeMenu}
          className={`fixed top-0 right-0 flex h-screen w-64 flex-col items-center justify-center gap-5 bg-secondary transition-all duration-300 md:static md:h-auto md:w-auto md:flex-row ${
            isOpen ? 'transform-none' : 'translate-x-72 md:transform-none'
          }`}
        >
          <li className={navItem}>
            <a href="#stack" onClick={handleClick}>
              Tech stack
            </a>
          </li>
          <li className={navItem}>
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li className={navItem}>
            <a href="#resume" onClick={handleClick}>
              Resume
            </a>
          </li>
          <ul className="fixed bottom-0 flex md:hidden">
            <li className={navItem}>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </li>
            <li className={navItem}>
              <a href={links.github} target="_blank" rel="noreferrer">
                <Github />
              </a>
            </li>
            <li className={navItem}>
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
