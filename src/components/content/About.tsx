import { resume } from 'assets';

export default function About() {
  return (
    <section className="section mx-auto mt-10 gap-4 md:mt-48">
      <h1 className="pl-4 font-mono text-green md:col-start-2">
        &gt; Hi, my name is <span className="duration-50 animate-pulse">_</span>
      </h1>
      <span className="text-slate-100 pl-4 text-5xl font-bold md:col-start-2 md:text-6xl">
        Michael Aliendro.
      </span>
      <h2 className="text-slate-200 pl-4 text-5xl font-bold md:col-start-2 md:text-6xl">
        I build <span className="text-purple">web applications.</span>
      </h2>
      <h3 className="p-4 text-justify text-lg md:col-start-2">
        I&apos;m a front-end developer with more than 3 years of experience in building web
        applications. I am focused to deliver responsive, scalable and accessible products with
        great user experience.
      </h3>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        aria-label="resume"
        className="button w-48 place-self-center bg-green text-center md:col-start-2"
      >
        Check out my resume
      </a>
    </section>
  );
}
