const StatsSection = () => {
  const stats = [
    { number: "3,563", label: "JOB SEEKERS SERVED" },
    { number: "263", label: "EMPLOYERS PARTICIPATION" },
    { number: "908", label: "OPENING POTENTIALLY FILLED" }
  ];

  return (
    <section id="social-impact" className="bg-secondary py-16 text-secondary-foreground md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 divide-y divide-secondary-foreground/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="px-6 py-8 text-center first:pt-0 last:pb-0 md:py-0">
              <div className="font-display text-6xl text-primary md:text-7xl">{stat.number}</div>
              <div className="mt-3 text-xs font-semibold uppercase opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;