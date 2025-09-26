const StatsSection = () => {
  const stats = [
    { number: "3,207", label: "JOB SEEKERS SERVED" },
    { number: "237", label: "EMPLOYERS PARTICIPATION" }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold">{stat.number}</div>
              <div className="text-lg font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;