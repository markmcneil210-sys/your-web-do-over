import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="programs" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-primary text-lg font-semibold mb-2">List Of Programs</h3>
          <h2 className="text-4xl font-bold mb-6">Upcoming Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We update all of our Programs here, so keep updated and check all 
            of our upcoming programs. Stay Tuned!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-primary font-medium">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;