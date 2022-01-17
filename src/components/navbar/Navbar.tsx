import { useEffect, useState } from 'react';

import { Menu, Close } from 'assets';
import useScroll from 'hooks/useScroll';

const styles = {
  header: 'font-mono text-sm text-foreground fixed w-full z-10 bg-primary transition-all',
  nav: 'm-5 mx-14 flex items-center',
  navbar:
    'flex flex-col w-64 h-screen absolute transition-transform duration-500 md:duration-50 top-0 bg-secondary  right-0 md:w-auto md:h-auto md:static md:flex-row gap-5 items-center justify-center h-20',
  logo: 'p-2 w-8 h-8 border-green border-2 mr-auto ring-purple ring-2 ring-offset-8 ring-offset-secondary rounded-t-2xl rounded-br-2xl font-sans flex items-center font-extrabold hover:ring-green hover:border-purple transition-colors duration-200',
  navitem:
    'p-5 hover:underline hover:cursor-pointer decoration-white decoration-2 underline-offset-4 transition-all duration-150 hover:text-green',
  button:
    'p-3 border-white border-[1.5px] rounded hover:bg-white transition-colors duration-200 hover:text-white',
  mobile: 'md:hidden',
  icon: 'text-green h-10 w-10 z-10 md:hidden',
};

const links = {
  linkedin: 'https://www.linkedin.com/in/michael-aliendro-484578216/',
  github: 'https://www.github.com/aliendro',
  email: 'mailto:contato@aliendro.com',
};

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const scrollVisible = useScroll();
  const isMenuOpen = menu
    ? `${styles.navbar} translate-x-0`
    : `${styles.navbar} translate-x-72 md:translate-x-0 `;
  const header = scrollVisible
    ? `${styles.header} visible bg-secondary`
    : `${styles.header} invisible`;

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menu]);

  return (
    <header className={header}>
      <nav className={styles.nav}>
        <div className={styles.logo} />
        <Menu className={`${styles.icon} ${menu ? 'hidden' : 'block'}`} onClick={openMenu} />
        <Close className={`${styles.icon} ${menu ? 'block' : 'hidden'}`} onClick={closeMenu} />
        <ul className={isMenuOpen}>
          <li className={styles.navitem}>About</li>
          <li className={styles.navitem}>Projects</li>
          <li className={styles.navitem}>Resume</li>
          <li className={`${styles.navitem} ${styles.mobile}`}>
            <a href={links.linkedin}> LinkedIn</a>
          </li>
          <li className={`${styles.navitem} ${styles.mobile}`}>
            <a href={links.github}>Github</a>
          </li>
          <li className={`${styles.navitem} ${styles.mobile}`}>
            <a href={links.email}>Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
