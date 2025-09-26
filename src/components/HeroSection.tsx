import { Button } from "@/components/ui/button";
import heroImage from "@/assets/job-fair-hero.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          We Got Your <span className="text-primary">Back</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Elevate Mentorship Program by Rebuild Networking
        </h2>
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
        >
          DONATE NOW
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;