import { Handshake, Megaphone, Zap } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      title: "CONNECT",
      description: "Boost the visibility, awareness and connection of participants and resources in support of various interest and career goals.",
      icon: Handshake
    },
    {
      title: "EMPOWER", 
      description: "Equip participants with the resources, skills and alliance required to seize opportunity for financial success in a business capacity.",
      icon: Zap
    },
    {
      title: "ADVOCATE",
      description: "Advocate for participants opportunities that will help them become influencers within the community and their families.",
      icon: Megaphone
    }
  ];

  return (
    <section className="border-y bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase text-primary">How we serve</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Opportunity grows through connection.</h2>
        </div>
        <div className="grid grid-cols-1 border-y md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className={`p-8 md:p-10 ${index < 2 ? "border-b md:border-b-0 md:border-r" : ""}`}>
                <pillar.icon className="mb-8 h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mb-4 text-3xl">{pillar.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;