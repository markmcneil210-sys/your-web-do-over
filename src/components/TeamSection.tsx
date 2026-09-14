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
    <section id="team" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase text-primary">Leadership</p>
        <h2 className="mt-3 text-5xl md:text-6xl">Meet the people driving our mission.</h2>

        <div className="mt-12">
          {teamMembers.map((member) => (
            <article key={member.name} className="grid gap-10 border-y py-10 lg:grid-cols-[0.35fr_0.65fr] lg:py-14">
                <div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary font-display text-3xl text-secondary-foreground">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-5 text-3xl">{member.name}</h3>
                  <span className="mt-1 block text-xs font-bold uppercase text-primary">{member.title}</span>
                </div>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  {member.bio.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
