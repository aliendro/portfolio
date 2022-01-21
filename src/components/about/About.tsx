import {
  Css,
  Git,
  Html,
  Javascript,
  Jest,
  Nextjs,
  React,
  Redux,
  Router,
  Tailwind,
  TestingLibrary,
  Typescript,
} from 'assets';

const styles = {
  section: 'grid md:grid-cols-[1fr_2fr_1fr] grid-flow-row gap-5 text-foreground',
  heading: 'text-3xl md:col-start-2 font-bold tracking-wide pl-4 text-yellow text-center p-10',
  text: 'md:col-start-2 text-justify p-4 text-lg',
  icon: 'w-14 h-14 text-green',
};

export default function About() {
  return (
    <section className={styles.section}>
      <h1 id="stack" className={styles.heading}>
        Tech stack
      </h1>
      <div className="md:col-start-2 grid grid-cols-2 md:grid-cols-3 place-items-center text-center gap-5 md:gap-10">
        <div>
          <Javascript className="w-20 h-20 m-5 text-yellow" />
          <span className="text-md font-bold tracking-wide">Javascript</span>
        </div>
        <div>
          <Html className="w-20 h-20 m-5 text-red" />
          <span className="text-md font-bold tracking-wide">HTML</span>
        </div>
        <div>
          <Css className="w-20 h-20 m-5 text-orange" />
          <span className="text-md font-bold tracking-wide">CSS</span>
        </div>
        <div>
          <React className="w-20 h-20 m-5 text-cyan" />
          <span className="text-md font-bold tracking-wide">React</span>
        </div>
        <div>
          <Redux className="w-20 h-20 m-5 text-purple" />
          <span className="text-md font-bold tracking-wide">Redux</span>
        </div>
        <div>
          <Tailwind className="w-20 h-20 m-5 text-cyan" />
          <span className="text-md font-bold tracking-wide">TailwindCSS</span>
        </div>

        <div>
          <TestingLibrary className="w-20 h-20 m-5 text-red" />
          <span className="text-md font-bold tracking-wide ">Testing Library</span>
        </div>
        <div>
          <Jest className="w-20 h-20 m-5 text-[#9A405B] " />
          <span className="text-md font-bold tracking-wide">Jest</span>
        </div>
        <div>
          <Git className="w-20 h-20 m-5 text-[#E94E31]" />
          <span className="text-md font-bold tracking-wide ">Git</span>
        </div>
        <div>
          <Typescript className="w-20 h-20 m-5 text-cyan" />
          <span className="text-md font-bold tracking-wide">Typescript</span>
        </div>
        <div>
          <Nextjs className="w-20 h-20 m-5 text-foreground" />
          <span className="text-md font-bold tracking-wide">NextJS</span>
        </div>
        <div>
          <Router className="w-20 h-20 m-5 text-red" />
          <span className="text-md font-bold tracking-wide">React Router</span>
        </div>
      </div>
    </section>
  );
}
