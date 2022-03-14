import { Menu, Close, resume } from 'assets';
import useMobileMenu from 'hooks/useMobileMenu';

import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export default function Navbar() {
  smoothscroll.polyfill();
  const menuRef = useRef<HTMLButtonElement>(null);
  const [active] = useMobileMenu(menuRef);
  const [visible, setVisible] = useState(true);
  const [currentY, setCurrentY] = useState(0);

  const onScroll = () => {
    if (window.scrollY === 0) {
      setVisible(true);
    }
    if (window.scrollY > currentY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setCurrentY(window.scrollY);
  };

  const scrollInto = (element: string) => () => {
    document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return (
    <header
      className={`${
        visible ? 'transform-none' : '-translate-y-20'
      } fixed top-0 z-10 w-full bg-secondary font-mono text-sm text-foreground transition-all duration-500`}
    >
      <nav className="m-5 mx-14 flex items-center">
        <div className="mr-auto flex h-8 w-8 items-center rounded-t-2xl rounded-br-2xl border-2 border-green p-2 font-sans font-extrabold ring-2 ring-purple ring-offset-8 ring-offset-secondary transition-colors duration-200 hover:border-purple hover:ring-green" />
        <button ref={menuRef} type="button" className="z-10 h-10 w-10" id="menubutton">
          <Menu className={`h-10 w-10 text-green md:hidden ${active ? 'hidden' : 'block'}`} />
          <Close className={`h-10 w-10 text-green md:hidden ${active ? 'block' : 'hidden'}`} />
        </button>
        <ul
          aria-label="primary navigation"
          className={`fixed top-0 right-0 flex h-screen w-64 flex-col items-center justify-center gap-5 bg-secondary transition-all duration-300 md:static md:h-auto md:w-auto md:flex-row ${
            active ? 'transform-none' : 'translate-x-72 md:transform-none'
          }`}
        >
          <li className="nav-item">
            <button type="button" onClick={scrollInto('stack')}>
              Tech stack
            </button>
          </li>
          <li className="nav-item">
            <button type="button" onClick={scrollInto('projects')}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <ul className="fixed bottom-0 flex md:hidden">
            <Icon className="nav-item" name="linkedin" />
            <Icon className="nav-item" name="github" />
            <Icon className="nav-item" name="email" />
          </ul>
        </ul>
      </nav>
    </header>
  );
}
