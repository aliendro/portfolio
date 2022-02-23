import {
  Css,
  Git,
  Html,
  Javascript,
  Jest,
  Nextjs,
  React,
  Redux,
  Node,
  Tailwind,
  TestingLibrary,
  Typescript,
} from 'assets';

export default function About() {
  const text = 'text-md font-bold tracking-wide';
  return (
    <>
      <section className="section">
        <h1 className="pl-4 font-mono text-green md:col-start-2">
          &gt; Hi, my name is <span className="duration-50 animate-pulse">_</span>
        </h1>
        <h2 className="text-slate-100 pl-4 text-5xl font-bold tracking-wider md:col-start-2 md:text-6xl">
          Michael Aliendro.
        </h2>
        <h3 className="text-slate-200 pl-4 text-5xl font-bold tracking-wider md:col-start-2 md:text-6xl">
          I build <span className="text-purple">web applications.</span>
        </h3>
        <h4 className="p-4 text-justify text-lg md:col-start-2">
          I&apos;m a front-end developer with more than 3 years of experience in building and web
          applications. I am focused to deliver responsive, scalable and accessible products with
          great user experience.
        </h4>
        <div className="p-10 text-center md:col-start-2">
          <button type="button" aria-label="resume" className="button w-48 bg-green">
            Check out my resume
          </button>
        </div>
      </section>
      <section className="section">
        <h1 id="stack" className="heading text-yellow">
          Tech stack
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-5 text-center md:col-start-2 md:grid-cols-3 md:gap-10">
          <div>
            <Javascript
              title="Javascript"
              aria-label="javascript icon"
              className="icon text-yellow"
            />
            <span className={text}>Javascript</span>
          </div>
          <div>
            <Html title="HTML5" aria-label="html icon" className="icon text-red" />
            <span className={text}>HTML</span>
          </div>
          <div>
            <Css title="CSS3" aria-label="css icon" className="icon text-orange" />
            <span className={text}>CSS</span>
          </div>
          <div>
            <React title="React" aria-label="react icon" className="icon text-cyan" />
            <span className={text}>React</span>
          </div>
          <div>
            <Redux title="Redux" aria-label="redux icon" className="icon text-purple" />
            <span className={text}>Redux</span>
          </div>
          <div>
            <Tailwind title="TailwindCSS" aria-label="tailwind icon" className="icon text-cyan" />
            <span className={text}>TailwindCSS</span>
          </div>

          <div>
            <TestingLibrary
              title="Testing Library"
              aria-label="testing library icon"
              className="icon text-red"
            />
            <span className={text}>Testing Library</span>
          </div>
          <div>
            <Jest title="Jest" aria-label="jest icon" className="icon text-[#9A405B] " />
            <span className={text}>Jest</span>
          </div>
          <div>
            <Git title="Git" aria-label="git icon" className="icon text-[#E94E31]" />
            <span className={text}>Git</span>
          </div>
          <div>
            <Typescript
              title="Typescript"
              aria-label="typescript icon"
              className="icon text-cyan"
            />
            <span className={text}>Typescript</span>
          </div>
          <div>
            <Nextjs title="NextJS" aria-label="nextjs icon" className="icon text-foreground" />
            <span className={text}>NextJS</span>
          </div>
          <div>
            <Node title="NodeJS" aria-label="nodejs icon" className="icon text-green" />
            <span className={text}>NodeJS</span>
          </div>
        </div>
      </section>
    </>
  );
}
