const Footer = () => {
  return (
    <footer className="bg-secondary py-16 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground">
                R
              </div>
              <div>
                <h3 className="font-display text-xl">Rebuild Networking</h3>
                <p className="text-[10px] font-semibold uppercase opacity-70">Athletes Economic Alliance</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering young people from diverse socio-economic backgrounds to become successful in high school and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#programs" className="opacity-80 hover:opacity-100 transition-opacity">Programs</a></li>
              <li><a href="#vision" className="opacity-80 hover:opacity-100 transition-opacity">Vision</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-primary">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80">Job Fair Events</span></li>
              <li><span className="opacity-80">Free Tutoring</span></li>
              <li><span className="opacity-80">Internet Access</span></li>
              <li><span className="opacity-80">Mentorship</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase text-primary">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="opacity-80"><a href="tel:8323918105" className="hover:text-primary">832-391-8105</a></p>
              <p className="opacity-80">Houston, Texas</p>
              <p className="opacity-80">501(c)(3) Nonprofit</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2026 Rebuild Networking & Athletes Economic Alliance of Texas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;