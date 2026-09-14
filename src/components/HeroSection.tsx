import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/job-fair-hero.jpg";
import { ArrowRight, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-muted/40 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid min-h-[620px] overflow-hidden rounded-lg border bg-card shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="mb-6 text-xs font-bold uppercase text-primary">Elevate Mentorship Program</p>
            <h1 className="max-w-xl text-5xl leading-[0.96] sm:text-6xl lg:text-7xl">
              We’ve got your <em className="text-primary">back.</em>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Building pathways to education, employment, and economic opportunity for Houston’s young people and families.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/signup">Sign up for the job fair <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href="#about">Explore our mission</a></Button>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t pt-6 text-sm text-muted-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"><Users className="h-5 w-5" /></span>
              <span><strong className="text-foreground">3,563</strong> job seekers served across our community</span>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-full">
            <img src={heroImage} alt="Community members connecting at a Rebuild Networking job fair" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-foreground/15" />
            <div className="absolute bottom-6 left-6 right-6 max-w-md rounded-md border border-background/30 bg-background/90 p-5 backdrop-blur sm:bottom-10 sm:left-10">
              <p className="font-display text-2xl leading-tight text-foreground">Connecting people to opportunity—one relationship at a time.</p>
              <p className="mt-2 text-xs font-bold uppercase text-primary">Rebuild Networking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;