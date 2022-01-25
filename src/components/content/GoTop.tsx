import { Top } from 'assets';
import { useEffect, useState } from 'react';

const styles = {
  button:
    'bg-green w-12 h-12 rounded-full grid place-items-center fixed bottom-10 right-10 text-secondary transition-all duration-300',
  icon: 'w-7 h-7',
};

export default function GoTop() {
  const [goTopVisible, setGoTopVisible] = useState<boolean>(false);

  const goTop = goTopVisible ? `${styles.button} bottom-10` : `${styles.button} -bottom-40`;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setGoTopVisible(true);
    } else {
      setGoTopVisible(false);
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
    <button type="button" className={goTop} onClick={handleClick}>
      <Top className={styles.icon} />
    </button>
  );
}
