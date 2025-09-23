import { Card, CardContent } from "@/components/ui/card";

const PillarsSection = () => {
  const pillars = [
    {
      title: "CONNECT",
      description: "Boost the visibility, awareness and connection of participants and resources in support of various interest and career goals.",
      icon: "🤝"
    },
    {
      title: "EMPOWER", 
      description: "Equip participants with the resources, skills and alliance required to seize opportunity for financial success in a business capacity.",
      icon: "💪"
    },
    {
      title: "ADVOCATE",
      description: "Advocate for participants opportunities that will help them become influencers within the community and their families.",
      icon: "📢"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className={`text-center p-8 ${index === 2 ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
            >
              <CardContent className="p-0">
                <div className="text-6xl mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className={`leading-relaxed ${index === 2 ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;