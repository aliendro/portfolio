import { useEffect, useState } from 'react';

export default function useScroll() {
  const [navbar, setNavbar] = useState<boolean>(true);
  const [arrowUp, setArrowUp] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setNavbar(true);
    }
    if (window.scrollY > current) {
      setNavbar(false);
    }
    if (window.scrollY > 100) {
      setArrowUp(true);
    } else {
      setNavbar(true);
      setArrowUp(false);
    }
    setCurrent(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return [navbar, arrowUp] as const;
}
