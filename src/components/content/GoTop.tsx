import { Top } from 'assets';
import { useEffect, useState } from 'react';

export default function GoTop() {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };

  return (
    <button
      type="button"
      aria-label="scroll to top"
      className={`fixed bottom-0 right-10 grid h-12 w-12 place-items-center rounded-full bg-green text-secondary transition-all duration-300 ${
        visible ? '-translate-y-10' : 'translate-y-full'
      }`}
      onClick={handleClick}
    >
      <Top className="h-7 w-7" />
    </button>
  );
}
