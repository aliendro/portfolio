import { BaseSyntheticEvent, RefObject, useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default function useMobileMenu(ref: RefObject<HTMLButtonElement>) {
  const [active, setActive] = useState(false);
  smoothscroll.polyfill();

  const toggle = () => setActive((prev) => !prev);

  const onClick = (event: MouseEvent | BaseSyntheticEvent) => {
    console.log(event.target.id);
    if (ref.current && ref.current.contains(event.target)) {
      toggle();
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [active]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [active]);

  return [active, toggle] as const;
}
