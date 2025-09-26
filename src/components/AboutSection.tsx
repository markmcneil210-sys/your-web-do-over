const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-primary text-lg font-semibold mb-2">About Us</h3>
            <h2 className="text-4xl font-bold mb-6">We Are On A Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Rebuild Networking in association with The Athletes Economic Alliance of Texas 
              a 501(c)(3) nonprofit organization that empowers young people from diverse 
              socio-economic backgrounds to become successful in high school and beyond. 
              We apply a hands-on approach in working with youth to emphasize education 
              and the importance it plays in students perspective career path.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">SOCIAL IMPACT</h3>
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">3,207</div>
                <div className="text-xs font-medium text-muted-foreground">JOB SEEKERS SERVED</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">237</div>
                <div className="text-xs font-medium text-muted-foreground">EMPLOYERS PARTICIPATION</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">824</div>
                <div className="text-xs font-medium text-muted-foreground">OPENING POTENTIALLY FILLED</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Social and economic factors, such as income, education, employment, 
              community safety, and social supports can significantly affect how well 
              and how long we live. For example, employment provides income that shapes 
              choices about housing, education, child care, food, medical care, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;