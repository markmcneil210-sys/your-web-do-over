import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, Radio } from "lucide-react";

const RadioInterviewSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Radio className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Radio Interview</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Listen to our featured radio interview discussing the Career Fair at World Harvest Outreach Church
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-xl">
                <PlayCircle className="h-6 w-6 text-primary" />
                Career Fair - World Harvest Outreach Church
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <audio 
                  controls 
                  className="w-full"
                  preload="metadata"
                >
                  <source src="/src/assets/career-fair-radio-interview.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground">
                  This radio interview discusses the impact and success of our career fair events, 
                  highlighting the opportunities we create for job seekers and the community partnerships 
                  that make these events possible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RadioInterviewSection;