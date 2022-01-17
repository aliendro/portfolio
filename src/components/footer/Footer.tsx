const Footer = () => {
  const styles = {
    footer:
      'flex flex-col gap-2 items-center justify-center font-mono text-sm  text-foreground transition-colors duration-300 h-20 cursor-default mt-40',
    copywright: 'text-[10px]',
    license: 'hover:text-yellow hover:cursor-pointer',
  };

  return (
    <footer className={styles.footer}>
      <h1>Built by Michael Aliendro</h1>
      <h2 className={styles.copywright}>
        Dracula theme made by Zeno Rocha under{' '}
        <a className={styles.license} href="https://zenorocha.mit-license.org/">
          MIT license.
        </a>
      </h2>
    </footer>
  );
};

export default Footer;
