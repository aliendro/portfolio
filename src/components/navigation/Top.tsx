import { ArrowUp } from 'assets';
import { useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default function Top() {
  smoothscroll.polyfill();
  
  const [visible, setVisible] = useState(false);

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
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };
  return (
    <aside>
      <button
        type="button"
        aria-label="scroll to top"
        className={`fixed bottom-0 right-10 grid h-12 w-12 place-items-center rounded-full bg-green text-secondary transition-all duration-300 ${
          visible ? '-translate-y-10' : 'translate-y-full'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-7 w-7" />
      </button>
    </aside>
  );
}
