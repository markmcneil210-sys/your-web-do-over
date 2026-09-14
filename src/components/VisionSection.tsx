const VisionSection = () => {
  const visionPoints = [
    "Give youth multiple opportunities to acquire education, training, life skills development, to succeed in jobs, careers, self-sufficiency, and adulthood.",
    "Youth are taught to learn the value of education and how it's a pathway to successful career.",
    "Youth are provided with a safe and positive support system needed for success.",
    "Youth-serving organizations and partnerships are staffed by individuals who are well-trained, knowledgeable in the field, competent, compassionate, and culturally responsive.",
    "Youth are recognized by their community for their strengths and provided multiple opportunities for civic engagement, service, and leadership.",
    "Youth thrive throughout all phases of their development, including early and middle childhood, adolescence, and young adult.",
    "Youth and their families have safe, healthy, and stable places to live, learn, and work."
  ];

  return (
    <section id="vision" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase text-primary">Our vision</p>
          <h2 className="mt-3 text-5xl md:text-6xl">A future where every young person can thrive.</h2>
        </div>
        
        <div>
          <ul className="grid border-y md:grid-cols-2">
            {visionPoints.map((point, index) => (
              <li key={index} className={`flex items-start gap-5 border-b p-6 last:border-b-0 md:p-8 ${index % 2 === 0 ? "md:border-r" : ""} ${index >= visionPoints.length - 2 ? "md:border-b-0" : ""}`}>
                <span className="font-display text-3xl text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="leading-relaxed text-muted-foreground">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;