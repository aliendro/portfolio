export default function Hero() {
  return (
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
        I&apos;m a software engineer with more than 3 years of experience in building and
        implementing web applications. I am focused to deliver great user experience products,
        always having accessibility in mind.
      </h4>
      <div className="p-10 text-center md:col-start-2">
        <button type="button" className="button w-48 bg-green">
          Check out my resume
        </button>
      </div>
    </section>
  );
}
