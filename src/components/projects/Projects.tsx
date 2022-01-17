const styles = {
  section: 'grid md:grid-cols-[1fr_2fr_1fr] gap-3 text-foreground h-100 cursor-default',
  heading: 'text-2xl font-bold tracking-wide pl-4 text-cyan md:col-start-2 text-justify',
  title: 'text-xl font-bold tracking-wide pl-4 md:col-start-2 text-justify',
  text: 'md:col-start-2 text-justify p-4 text-lg',
};

const Projects = () => {
  const meme = 'Projects';

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{meme}</h1>
      <h2 className={styles.title}>Project 1</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, exercitationem
        est facilis, nobis perspiciatis nihil ipsa quos eveniet laboriosam impedit voluptatem
        sapiente officiis molestiae possimus quae vel rerum aperiam quibusdam, asperiores corporis
        aut. Incidunt, earum facilis reprehenderit dolor quia officia itaque voluptatem suscipit
        quibusdam voluptas nesciunt ipsa quasi animi?
      </p>
      <h2 className={styles.title}>Project 2</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic, dolor itaque voluptas
        illo saepe quis asperiores sapiente eius similique maiores nisi vitae corrupti et quasi!
        Exercitationem obcaecati cumque et, quas fuga nisi quod facilis provident modi, est corrupti
        culpa nostrum optio cum, error ratione ab explicabo? Accusantium, ipsam laborum!
      </p>
    </section>
  );
};

export default Projects;
