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
    <section id="vision" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-primary text-lg font-semibold mb-2">Our Vision</h3>
          <h2 className="text-4xl font-bold mb-6">We Have Vision</h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-8">
            Rebuild Networking Vision for Youth Program
          </h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {visionPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;