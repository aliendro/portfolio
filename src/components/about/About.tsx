const styles = {
  section: 'grid md:grid-cols-[1fr_2fr_1fr] grid-flow-row gap-5 text-foreground',
  heading: 'text-2xl md:col-start-2 font-bold tracking-wide pl-4 text-yellow',
  text: 'md:col-start-2 text-justify p-4 text-lg',
};

const About = () => (
  <section className={styles.section}>
    <h1 className={styles.heading}>About me</h1>
    <h2 className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi eaque? Neque ipsam vitae
      dicta alias provident architecto debitis quisquam quasi illum! Voluptatum vitae eveniet
      consequatur? Nam dolores voluptatum, eum nulla consequuntur obcaecati quae reiciendis
      repellendus illo ex amet dolorem numquam earum asperiores perspiciatis consectetur hic
      exercitationem, beatae commodi molestias perferendis quod maiores veniam eligendi! Dolores
      vitae nihil obcaecati expedita ut sit. Illo itaque ex dolores accusamus maiores a commodi sint
      esse, voluptas natus dicta aliquam voluptatum molestiae dolorem odit saepe suscipit repellat!
      Earum culpa deserunt possimus illo cumque iste, ea mollitia repellat at perspiciatis, quia
      soluta sed non fugit?
    </h2>
  </section>
);

export default About;
