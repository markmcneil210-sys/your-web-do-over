import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [];

  const utilityAssistanceDescription = "Join us for a Utility Assistance Program event designed to help community members manage essential energy costs. Qualified applicants may receive up to $1,200 in utility assistance. Appointments are available at 8:00 AM or 10:00 AM. To check your application status, call (713) 590-2327.";

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
    <section id="events" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Our events</p>
            <h2 className="mt-3 text-5xl md:text-6xl">Where opportunity meets community.</h2>
          </div>
          <p className="max-w-xl font-medium text-blue-900 lg:justify-self-end">
            {utilityAssistanceDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <>
               <div className="md:col-span-2">
                 <h3 className="text-xs font-bold uppercase text-primary">Upcoming event</h3>
              </div>
              
              {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden border md:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="self-start overflow-hidden border-b bg-card lg:border-b-0 lg:border-r">
                    <img 
                      src={event.image} 
                      alt={`${event.title} flyer`}
                      className="block h-auto w-full"
                    />
                  </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <CardHeader className="p-0">
                        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground"><CalendarDays /></div>
                        <CardTitle className="text-4xl md:text-5xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-7 p-0">
                        <div className="space-y-4 text-muted-foreground">
                          <p className="flex items-center gap-3 font-semibold text-foreground"><CalendarDays className="h-5 w-5 text-primary" />{event.date}</p>
                          <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" />{event.time}</p>
                          <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{event.location}<br />{event.address}</span></p>
                          <p className="border-t pt-5 text-sm font-medium text-primary">{event.description}</p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </>
          )}

          {/* Recent Events Title */}
          <div className="mt-10 md:col-span-2">
            <h3 className="text-xs font-bold uppercase text-primary">Recent events</h3>
          </div>

          {/* Featured Event with Image */}
          <Card className="md:col-span-2 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <img 
                  src="/src/assets/sunnyside-job-fair-2023.png" 
                  alt="Sunnyside Job Fair 2023 event photo"
                   className="h-64 w-full object-cover"
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
                <div className="rounded-md bg-muted/50 p-4">
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
              className={`transition-all duration-300 hover:border-primary ${
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
                  <div className="rounded-md bg-muted/50 p-4">
                    <p className="text-sm font-medium mb-2 text-primary">Event Video</p>
                    <iframe
                      src="https://drive.google.com/file/d/1TV1k3nMaBLsTQS3Jy5wrzndY0X5QHKTc/preview"
                      title="July 2024 Hiring Event had a record 1400 job seekers signup"
                      className="h-64 w-full rounded-md"
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