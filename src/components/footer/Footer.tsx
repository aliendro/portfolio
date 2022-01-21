const styles = {
  footer:
    'flex flex-col gap-2 items-center justify-center font-mono text-sm  text-foreground transition-colors duration-300 h-20 cursor-default mt-40',
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>
        Made with <span className="text-2xl text-purple">&hearts;</span> by Michael Aliendro
      </h1>
    </footer>
  );
}
