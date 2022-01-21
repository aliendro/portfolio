import { useEffect, useState } from 'react';

export default function useScroll() {
  const [visible, setVisible] = useState<boolean>(true);
  const [current, setCurrent] = useState<Number>(0);

  const handleScroll = () => {
    if (window.scrollY > current) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setCurrent(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [current]);

  return visible;
}
