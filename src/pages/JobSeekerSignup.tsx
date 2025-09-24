import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Calendar } from "lucide-react";

const jobSeekerSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number too long"),
  resumeUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  linkedinProfile: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  yearsExperience: z.number().min(0, "Experience cannot be negative").max(50, "Invalid experience"),
  industry: z.string().trim().min(1, "Industry is required").max(100, "Industry name too long"),
  jobTitle: z.string().trim().min(1, "Job title is required").max(100, "Job title too long"),
  availability: z.string().min(1, "Availability is required"),
  eventPreferences: z.array(z.string()).min(1, "Select at least one event preference"),
});

type JobSeekerFormData = z.infer<typeof jobSeekerSchema>;

const JobSeekerSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventPreferences, setEventPreferences] = useState<string[]>([]);

  const form = useForm<JobSeekerFormData>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      resumeUrl: "",
      linkedinProfile: "",
      yearsExperience: 0,
      industry: "",
      jobTitle: "",
      availability: "",
      eventPreferences: [],
    },
  });

  const handleEventPreferenceChange = (eventType: string, checked: boolean) => {
    const updatedPreferences = checked 
      ? [...eventPreferences, eventType]
      : eventPreferences.filter(pref => pref !== eventType);
    
    setEventPreferences(updatedPreferences);
    form.setValue("eventPreferences", updatedPreferences);
  };

  const onSubmit = async (data: JobSeekerFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("job_seeker_registrations")
        .insert({
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          resume_url: data.resumeUrl || null,
          linkedin_profile: data.linkedinProfile || null,
          years_experience: data.yearsExperience,
          industry: data.industry,
          job_title: data.jobTitle,
          availability: data.availability,
          event_preferences: data.eventPreferences,
        });

      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already registered. Please use a different email.");
        } else {
          toast.error("Registration failed. Please try again.");
        }
        return;
      }

      toast.success("Registration successful! We'll contact you soon with event details.");
      form.reset();
      setEventPreferences([]);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Job Seeker Registration</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Join our upcoming job fairs and connect with top employers
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="yearsExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="5" 
                              {...field} 
                              onChange={e => field.onChange(parseInt(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Input placeholder="Technology" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current/Desired Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Software Engineer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="resumeUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://drive.google.com/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedinProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Availability</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your availability" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="immediately">Available Immediately</SelectItem>
                            <SelectItem value="2-weeks">2 Weeks Notice</SelectItem>
                            <SelectItem value="1-month">1 Month Notice</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventPreferences"
                    render={() => (
                      <FormItem>
                        <FormLabel>Event Preferences</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          {[
                            "Technology Job Fair",
                            "Healthcare Job Fair", 
                            "Finance Job Fair",
                            "Education Job Fair",
                            "Manufacturing Job Fair",
                            "Virtual Networking Events"
                          ].map((eventType) => (
                            <div key={eventType} className="flex items-center space-x-2">
                              <Checkbox
                                id={eventType}
                                checked={eventPreferences.includes(eventType)}
                                onCheckedChange={(checked) => 
                                  handleEventPreferenceChange(eventType, checked as boolean)
                                }
                              />
                              <Label htmlFor={eventType} className="text-sm font-normal">
                                {eventType}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register for Job Fairs"}
                  </Button>
                </form>
              </Form>

              <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  What's Next?
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• We'll review your registration within 24 hours</li>
                  <li>• You'll receive event details and schedules via email</li>
                  <li>• Prepare your resume and practice your elevator pitch</li>
                  <li>• Bring business cards or contact information to share</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerSignup;