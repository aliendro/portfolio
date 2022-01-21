import { Top } from 'assets';
import { useEffect, useState } from 'react';

const styles = {
  button:
    'bg-secondary w-10 h-10 rounded-full grid place-items-center fixed bottom-10 right-10 text-green transition-all duration-300',
  icon: 'w-6 h-6',
};

const GoTop = () => {
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

  return (
    <button
      type="button"
      className={goTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Top className={styles.icon} />
    </button>
  );
};

export default GoTop;