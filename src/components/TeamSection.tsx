import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Mark McNeil",
    title: "President",
    bio: `Mark McNeil is a former professional athlete, sports management professional, and community leader dedicated to empowering the next generation of leaders. His athletic career began at the University of Houston, where he competed in both football and track and field and earned recognition as an All-American track and field performer.

Following college, Mark pursued a professional football career, beginning in the United States Football League with the San Antonio Gunslingers, and later continuing in the National Football League with the Miami Dolphins.

After his playing career, Mark turned his passion for sports into a career in professional sports management, where he worked closely with young professional athletes to help guide their careers and navigate the challenges of professional sports. Through this experience, he developed a deep commitment to mentorship, leadership development, and helping others reach their full potential.

Today, Mark serves as President of Athletes Economic Alliance of Texas, a nonprofit organization focused on preparing and equipping the next generation of leaders through mentorship, workforce development, and community engagement.

Driven by his passion to give back, Mark is actively leading the Sunnyside Opportunity Zone Workforce Hub Initiative in Houston. This initiative is designed to address high unemployment in the community by connecting residents with employment opportunities, workforce training, and economic development resources.

Mark remains committed to using his experience in sports, leadership, and mentorship to help create opportunities that prepare the next generation for success and strengthen communities across Texas.`,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Team
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet the leaders driving our mission forward.
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden border-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold mb-4">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                  <span className="text-primary font-medium">{member.title}</span>
                </div>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {member.bio.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
