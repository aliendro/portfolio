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

export default function About() {
  const text = 'text-md font-bold tracking-wide';
  return (
    <section className="section">
      <h1 id="stack" className="heading text-yellow">
        Tech stack
      </h1>
      <div className="grid grid-cols-2 place-items-center gap-5 text-center md:col-start-2 md:grid-cols-3 md:gap-10">
        <div>
          <Javascript aria-label="javascript icon" className="icon text-yellow" />
          <span className={text}>Javascript</span>
        </div>
        <div>
          <Html aria-label="html icon" className="icon text-red" />
          <span className={text}>HTML</span>
        </div>
        <div>
          <Css aria-label="css icon" className="icon text-orange" />
          <span className={text}>CSS</span>
        </div>
        <div>
          <React aria-label="react icon" className="icon text-cyan" />
          <span className={text}>React</span>
        </div>
        <div>
          <Redux aria-label="redux icon" className="icon text-purple" />
          <span className={text}>Redux</span>
        </div>
        <div>
          <Tailwind aria-label="tailwind icon" className="icon text-cyan" />
          <span className={text}>TailwindCSS</span>
        </div>

        <div>
          <TestingLibrary aria-label="testing library icon" className="icon text-red" />
          <span className={text}>Testing Library</span>
        </div>
        <div>
          <Jest aria-label="jest icon" className="icon text-[#9A405B] " />
          <span className={text}>Jest</span>
        </div>
        <div>
          <Git aria-label="git icon" className="icon text-[#E94E31]" />
          <span className={text}>Git</span>
        </div>
        <div>
          <Typescript aria-label="typescript icon" className="icon text-cyan" />
          <span className={text}>Typescript</span>
        </div>
        <div>
          <Nextjs aria-label="nextjs icon" className="icon text-foreground" />
          <span className={text}>NextJS</span>
        </div>
        <div>
          <Router aria-label="react-router icon" className="icon text-red" />
          <span className={text}>React Router</span>
        </div>
      </div>
    </section>
  );
}
