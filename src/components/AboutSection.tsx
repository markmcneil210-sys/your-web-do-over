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
          <div className="space-y-4">
            <img 
              src="/src/assets/group-volunteer-huddles.jpg" 
              alt="Group of volunteers forming huddles at community event"
              className="rounded-lg shadow-lg w-full"
            />
            <img 
              src="/src/assets/volunteer-portrait-huddles.jpg" 
              alt="Portrait of volunteer group forming huddles"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;