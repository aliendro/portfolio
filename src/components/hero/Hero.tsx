const styles = {
  section: 'grid md:grid-cols-[1fr_2fr_1fr] gap-3 text-foreground h-100 cursor-default',
  heading: 'pl-4 font-mono text-green md:col-start-2',
  bigHeading: 'pl-4 text-5xl md:text-6xl font-bold tracking-wider md:col-start-2',
  button: 'p-4 rounded-lg bg-green text-primary transition-all duration-200',
};

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>
        &gt; Hi, my name is <span className="animate-pulse duration-50">_</span>
      </h1>
      <h2 className={`${styles.bigHeading} text-slate-100`}>Michael Aliendro.</h2>
      <h3 className={`${styles.bigHeading} text-slate-200`}>
        I build <span className="text-purple">web applications.</span>
      </h3>
      <h4 className="text-justify p-4 text-lg md:col-start-2">
        I&apos;m a software engineer with over 3 years of experience in building and implementing
        web applications. My main focus is delivering accessible, user-friendly, human-centered
        products.
      </h4>
      <div className="pl-4 md:col-start-2 text-center">
        <button type="button" className={styles.button}>
          Check out my resume
        </button>
      </div>
    </section>
  );
}
