const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                R
              </div>
              <div>
                <h3 className="font-bold">Rebuild Networking</h3>
                <p className="text-xs opacity-80">Athletes Economic Alliance</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering young people from diverse socio-economic backgrounds to become successful in high school and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#programs" className="opacity-80 hover:opacity-100 transition-opacity">Programs</a></li>
              <li><a href="#vision" className="opacity-80 hover:opacity-100 transition-opacity">Vision</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80">Job Fair Events</span></li>
              <li><span className="opacity-80">Free Tutoring</span></li>
              <li><span className="opacity-80">Internet Access</span></li>
              <li><span className="opacity-80">Mentorship</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="opacity-80">📞 832-391-8105</p>
              <p className="opacity-80">Houston, Texas</p>
              <p className="opacity-80">501(c)(3) Nonprofit</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Rebuild Networking & Athletes Economic Alliance of Texas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;