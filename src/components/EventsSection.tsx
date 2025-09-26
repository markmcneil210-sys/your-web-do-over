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
          {/* Upcoming Events Section */}
          <div className="md:col-span-2 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Upcoming Events</h3>
            <div className="flex justify-center">
              <Card className="max-w-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-4">
                  <img 
                    src="/src/assets/hiring-for-holidays-flyer-2025.jpg" 
                    alt="Hiring for the Holidays Job Fair - November 13th, 2025 at World Harvest Outreach Church"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Featured Event with Image */}
          <Card className="md:col-span-2 border-primary bg-primary/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <img 
                  src="/src/assets/sunnyside-job-fair-2023.png" 
                  alt="Sunnyside Job Fair 2023 event photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-primary text-lg">July 13th, 2023</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <h3 className="font-semibold text-xl mb-2">Sunnyside Job Fair</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Thanks to Houston Magic 102, 97.9 the Boxx and Praise 92.1 their support made the Job Fair a success. 
                    We were blessed to serve over 300 Job Seekers.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2 text-primary">Radio Interview</p>
                    <audio 
                      controls 
                      className="w-full h-8"
                      preload="metadata"
                    >
                      <source src="/src/assets/career-fair-radio-interview.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 hover:shadow-lg ${
                event.date === "October 17th, 2024" ? "md:col-span-2" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg">
                  {event.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {event.description}
                </p>
                {event.date === "October 17th, 2024" && (
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2 text-primary">Event Video</p>
                    <iframe
                      src="https://drive.google.com/file/d/1TV1k3nMaBLsTQS3Jy5wrzndY0X5QHKTc/preview"
                      title="July 2024 Hiring Event had a record 1400 job seekers signup"
                      className="w-full h-64 rounded"
                      allow="autoplay"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EventsSection;