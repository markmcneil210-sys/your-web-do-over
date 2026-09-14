import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Job Fair Programs",
      description: "Regular job fairs connecting job seekers with employers across Houston and Texas.",
      features: ["300+ Job Seekers", "50+ Employers", "Multiple Industries"]
    },
    {
      title: "Free Tutoring Program", 
      description: "Educational support for youth to emphasize the importance of education in career development.",
      features: ["Academic Support", "Career Guidance", "Life Skills Development"]
    },
    {
      title: "Free Internet Program",
      description: "Over 100 families received free Internet for 2 years to support education and job searching.",
      features: ["2 Years Free", "Educational Access", "Job Search Support"]
    }
  ];

  return (
    <section id="programs" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Our programs</p>
            <h2 className="mt-3 text-5xl md:text-6xl">Support for every next step.</h2>
          </div>
          <p className="max-w-xl text-muted-foreground lg:justify-self-end">
            We update all of our Programs here, so keep updated and check all 
            of our upcoming programs. Stay Tuned!
          </p>
        </div>
        
        <div className="grid grid-cols-1 border-y md:grid-cols-3">
          {programs.map((program, index) => (
            <article key={program.title} className={`p-8 transition-colors hover:bg-muted/40 md:p-10 ${index < 2 ? "border-b md:border-b-0 md:border-r" : ""}`}>
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-8 text-3xl">{program.title}</h3>
                <p className="mb-6 mt-4 leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm font-medium">
                      <Check className="h-4 w-4 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
            </article>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#events">View upcoming events <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;