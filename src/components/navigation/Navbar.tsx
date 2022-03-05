import { Menu, Close, resume } from 'assets';
import useMobileMenu from 'hooks/useMobileMenu';
import { useRef } from 'react';
import Icon from './Icon';

type NavbarProps = {
  visible: boolean;
};

export default function Navbar({ visible }: NavbarProps) {
  const menuRef = useRef<HTMLUListElement>(null);
  const [active, open, close] = useMobileMenu(menuRef);

  return (
    <header
      className={`fixed top-0 z-10 w-full bg-secondary font-mono text-sm text-foreground transition-all duration-500 ${
        visible ? 'transform-none ' : '-translate-y-full'
      }`}
    >
      <nav className="m-5 mx-14 flex items-center">
        <div className="mr-auto flex h-8 w-8 items-center rounded-t-2xl rounded-br-2xl border-2 border-green p-2 font-sans font-extrabold ring-2 ring-purple ring-offset-8 ring-offset-secondary transition-colors duration-200 hover:border-purple hover:ring-green" />
        <Menu
          className={`z-10 h-10 w-10 text-green md:hidden ${active ? 'hidden' : 'block'}`}
          onClick={open}
        />
        <Close
          onClick={close}
          className={`z-10 h-10 w-10 text-green md:hidden ${active ? 'block' : 'hidden'}`}
        />
        <ul
          aria-label="primary navigation"
          onBlur={close}
          className={`fixed top-0 right-0 flex h-screen w-64 flex-col items-center justify-center gap-5 bg-secondary transition-all duration-300 md:static md:h-auto md:w-auto md:flex-row ${
            active ? 'transform-none' : 'translate-x-72 md:transform-none'
          }`}
        >
          <li className="nav-item">
            <a href="#stack">Tech stack</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
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
