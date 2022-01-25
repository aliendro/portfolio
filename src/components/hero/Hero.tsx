import Button from 'components/Button';

const styles = {
  section: 'grid md:grid-cols-[1fr_2fr_1fr] gap-5 text-foreground h-100 cursor-default',
  heading: 'pl-4 font-mono text-green md:col-start-2',
  bigHeading: 'pl-4 text-5xl md:text-6xl font-bold tracking-wider md:col-start-2',
};

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>
        &gt; Hi, my name is <span className="duration-50 animate-pulse">_</span>
      </h1>
      <h2 className={`${styles.bigHeading} text-slate-100`}>Michael Aliendro.</h2>
      <h3 className={`${styles.bigHeading} text-slate-200`}>
        I build <span className="text-purple">web applications.</span>
      </h3>
      <h4 className="p-4 text-justify text-lg md:col-start-2">
        I&apos;m a software engineer with more than 3 years of experience in building and
        implementing web applications. I am focused to deliver great user experience products,
        always having accessibility in mind.
      </h4>
      <div className="p-10 text-center md:col-start-2">
        <Button color="bg-green" large text="Check out my resume" url="#" />
      </div>
    </section>
  );
}
