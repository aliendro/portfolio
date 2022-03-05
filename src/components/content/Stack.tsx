import {
  Css,
  Git,
  Html,
  Javascript,
  Jest,
  Nextjs,
  Nodejs,
  React,
  Redux,
  Tailwind,
  TestingLibrary,
  Typescript,
} from 'assets';

export default function Stack() {
  return (
    <section className="section" id="stack">
      <h1 className="heading text-yellow">Tech stack</h1>
      <div className="grid grid-cols-2 place-items-center gap-5 text-center md:col-start-2 md:grid-cols-3 md:gap-10">
        <div className="text after:content-['Javascript']">
          <Javascript aria-label="javascript icon" className="icon text-yellow" />
        </div>
        <div className="text after:content-['HTML5']">
          <Html aria-label="html icon" className="icon text-red" />
        </div>
        <div className="text after:content-['CSS3']">
          <Css aria-label="css icon" className="icon text-orange" />
        </div>
        <div className="text after:content-['React']">
          <React aria-label="react icon" className="icon text-cyan" />
        </div>
        <div className="text after:content-['Redux']">
          <Redux aria-label="redux icon" className="icon text-purple" />
        </div>
        <div className="text after:content-['TailwindCSS']">
          <Tailwind aria-label="tailwind icon" className="icon text-cyan" />
        </div>
        <div className="text after:content-['Testing_Library']">
          <TestingLibrary aria-label="testing library icon" className="icon text-red" />
        </div>
        <div className="text after:content-['Jest']">
          <Jest aria-label="jest icon" className="icon text-[#9A405B] " />
        </div>
        <div className="text after:content-['Git']">
          <Git aria-label="git icon" className="icon text-[#E94E31]" />
        </div>
        <div className="text after:content-['Typescript']">
          <Typescript aria-label="typescript icon" className="icon text-cyan" />
        </div>
        <div className="text after:content-['Nextjs']">
          <Nextjs aria-label="nextjs icon" className="icon text-foreground" />
        </div>
        <div className="text after:content-['Node']">
          <Nodejs aria-label="nodejs icon" className="icon text-green" />
        </div>
      </div>
    </section>
  );
}
