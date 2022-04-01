import { BaseSyntheticEvent, RefObject, useEffect, useState } from 'react';

export default function useMobileMenu(ref: RefObject<HTMLButtonElement>) {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((prev) => !prev);

  const onClick = (event: MouseEvent | BaseSyntheticEvent) => {
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
