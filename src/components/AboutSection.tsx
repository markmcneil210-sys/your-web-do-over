const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase text-primary">About us</p>
            <h2 className="mt-3 text-5xl leading-tight md:text-6xl">We are on a mission.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Rebuild Networking in association with The Athletes Economic Alliance of Texas 
              a 501(c)(3) nonprofit organization that empowers young people from diverse 
              socio-economic backgrounds to become successful in high school and beyond. 
              We apply a hands-on approach in working with youth to emphasize education 
              and the importance it plays in students perspective career path.
            </p>
            <div className="mt-8 border-l-2 border-primary pl-6">
            <p className="leading-relaxed text-muted-foreground">
              Social and economic factors, such as income, education, employment, 
              community safety, and social supports can significantly affect how well 
              and how long we live. For example, employment provides income that shapes 
              choices about housing, education, child care, food, medical care, and more.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;