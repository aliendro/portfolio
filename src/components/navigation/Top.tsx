import { ArrowUp } from 'assets';

type TopProps = {
  visible: boolean;
} & Partial<HTMLButtonElement>;

export default function Top({ visible }: TopProps) {
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
