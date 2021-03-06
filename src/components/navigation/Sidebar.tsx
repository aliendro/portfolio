import Icon from './Icon';

export default function Sidebar() {
  return (
    <aside>
      <ul
        aria-label="secondary navigation"
        className="fixed top-1/3 ml-5 hidden flex-col gap-10 rounded bg-secondary p-2 pt-8 pb-8 text-foreground shadow-sm shadow-secondary transition-all duration-500 md:flex"
      >
        <Icon name="linkedin" />
        <Icon name="github" />
        <Icon name="email" />
      </ul>
    </aside>
  );
}
