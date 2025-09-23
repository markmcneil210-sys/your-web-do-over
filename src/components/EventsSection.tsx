import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EventsSection = () => {
  const events = [
    {
      date: "October 17th, 2024",
      title: "Record-Breaking Sunnyside Event", 
      description: "We had over 1400 job seekers signed up. This was our biggest event ever in Sunnyside at World Harvest Outreach.",
      highlight: true
    },
    {
      date: "April 18th, 2024",
      title: "Houston High School Hiring Event",
      description: "Hiring event for high school students on the southside of Houston, Texas."
    },
    {
      date: "April 4th, 2024", 
      title: "San Antonio Hiring Event",
      description: "Hiring event in San Antonio"
    },
    {
      date: "March 14th, 2024",
      title: "Sunnyside Employment Initiative",
      description: "Focused employment initiative in the Sunnyside community."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Recent Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The AEA and its partners host successful hiring events that are well attended 
            and provide numerous job opportunities for seekers in attendance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 hover:shadow-lg ${
                event.highlight ? 'border-primary bg-primary/5' : ''
              }`}
            >
              <CardHeader>
                <CardTitle className={`text-lg ${event.highlight ? 'text-primary' : ''}`}>
                  {event.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;