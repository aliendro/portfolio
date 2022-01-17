import { useEffect, useState } from 'react';

const useScroll = () => {
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
};

export default useScroll;
