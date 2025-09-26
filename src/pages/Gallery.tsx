import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ZoomIn } from "lucide-react";

// Import all available gallery images
import groupVolunteerHuddles from "@/assets/group-volunteer-huddles.jpg";
import volunteerPortraitHuddles from "@/assets/volunteer-portrait-huddles.jpg";
import sunnysideJobFair2023 from "@/assets/sunnyside-job-fair-2023.png";
import hiringEventFlyer2024 from "@/assets/hiring-event-flyer-2024.png";
import jobFairFlyer2023 from "@/assets/job-fair-flyer-2023.jpg";
import eventThumbnail from "@/assets/event-thumbnail.jpg";
import jobFairHero from "@/assets/job-fair-hero.jpg";
import hiringForHolidaysFlyer2025 from "@/assets/hiring-for-holidays-flyer-2025.jpg";
import sunnysideJobFairApril2024 from "@/assets/sunnyside-job-fair-april-2024.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const galleryImages = [
    {
      src: jobFairHero,
      alt: "Job fair hero image showcasing community impact",
      title: "Community Impact",
      category: "hero"
    },
    {
      src: groupVolunteerHuddles,
      alt: "Group of volunteers forming huddles at community event",
      title: "Volunteer Huddles",
      category: "volunteers"
    },
    {
      src: volunteerPortraitHuddles,
      alt: "Portrait of volunteer group forming huddles",
      title: "Volunteer Team",
      category: "volunteers"
    },
    {
      src: sunnysideJobFair2023,
      alt: "Sunnyside Job Fair 2023 event photo",
      title: "Sunnyside Job Fair 2023",
      category: "events"
    },
    {
      src: eventThumbnail,
      alt: "Event thumbnail highlighting community engagement",
      title: "Event Highlights",
      category: "events"
    },
    {
      src: hiringEventFlyer2024,
      alt: "Hiring Event Flyer 2024",
      title: "2024 Hiring Event",
      category: "flyers"
    },
    {
      src: jobFairFlyer2023,
      alt: "Job Fair Flyer 2023",
      title: "2023 Job Fair Flyer",
      category: "flyers"
    },
    {
      src: hiringForHolidaysFlyer2025,
      alt: "Hiring for the Holidays Job Fair 2025",
      title: "Holidays Hiring 2025",
      category: "flyers"
    },
    {
      src: sunnysideJobFairApril2024,
      alt: "Sunnyside Job Fair April 2024 networking event",
      title: "Sunnyside Job Fair April 2024",
      category: "events"
    }
  ];

  const categories = [
    { key: "all", label: "All Photos" },
    { key: "hero", label: "Hero Images" },
    { key: "events", label: "Events" },
    { key: "volunteers", label: "Volunteers" },
    { key: "flyers", label: "Flyers" }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of photos showcasing our community impact, events, and mission in action.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-0 relative">
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {categories.find(cat => cat.key === image.category)?.label}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                      <p className="text-muted-foreground">{image.alt}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;