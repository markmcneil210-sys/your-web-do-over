import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Mark McNeil",
    title: "President",
    bio: `Mark McNeil is the President of Athletes Economic Alliance of Texas, a nonprofit organization dedicated to preparing and equipping the next generation of leaders through mentorship, workforce development, and community engagement.

Mark's athletic career began at the University of Houston, where he competed in both football and track and field and earned recognition as an All-American track and field performer. Following his collegiate career, he pursued professional football, beginning with the San Antonio Gunslingers of the United States Football League, and later signing with the Los Angeles Rams and the Miami Dolphins in the National Football League.

After his playing career, Mark transitioned into professional sports management, dedicating his efforts to guiding and supporting the careers of young professional athletes. Through this work, he gained valuable experience mentoring athletes as they navigated both their professional and personal development.

Inspired by that experience, Mark expanded his focus beyond sports to help develop future community leaders. As President of Athletes Economic Alliance of Texas, he is committed to applying the same principles of discipline, preparation, and mentorship that shape successful athletes to help young people succeed in life and in their careers.

Mark is particularly passionate about the Houston, Texas Sunnyside Opportunity Zone Workforce Hub initiative in Houston, which aims to address high unemployment in the community by connecting residents with career opportunities, workforce training, and economic development resources.

With a lifelong passion for service and community impact, Mark is dedicated to helping create pathways for the next generation to achieve economic mobility, leadership, and long-term success.`,
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
