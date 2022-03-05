import { RefObject, useEffect, useState } from 'react';

export default function useMobileMenu(ref: RefObject<HTMLUListElement>) {
  const [active, setVisible] = useState(false);

  const open = () => setVisible(true);

  const close = () => setVisible(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      ref.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [active]);

  return [active, open, close] as const;
}
