import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Users, Calendar, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Full name must be at least 2 characters").max(100, "Full name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number must be less than 20 characters"),
  resume_url: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  linkedin_profile: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  years_experience: z.number().min(0, "Years of experience cannot be negative").max(50, "Years of experience must be less than 50"),
  industry: z.string().trim().min(1, "Please select an industry").max(100, "Industry must be less than 100 characters"),
  job_title: z.string().trim().min(2, "Job title must be at least 2 characters").max(100, "Job title must be less than 100 characters"),
  availability: z.string().min(1, "Please select your availability"),
  event_preferences: z.array(z.string()).min(1, "Please select at least one event preference"),
});

type FormData = z.infer<typeof formSchema>;

const JobSeekerSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      resume_url: "",
      linkedin_profile: "",
      years_experience: 0,
      industry: "",
      job_title: "",
      availability: "",
      event_preferences: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Ensure all required fields are present and properly formatted
      const insertData = {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        resume_url: data.resume_url || null,
        linkedin_profile: data.linkedin_profile || null,
        years_experience: data.years_experience,
        industry: data.industry,
        job_title: data.job_title,
        availability: data.availability,
        event_preferences: data.event_preferences,
      };

      const { error } = await supabase
        .from("job_seeker_registrations")
        .insert([insertData]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email already registered",
            description: "This email is already registered for job fair notifications.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Registration successful!",
          description: "Thank you for registering. We'll notify you about upcoming job fairs.",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    "Technology", "Healthcare", "Finance", "Education", "Manufacturing", 
    "Retail", "Construction", "Transportation", "Government", "Non-profit", "Other"
  ];

  const availabilityOptions = [
    "Immediately", "Within 2 weeks", "Within 1 month", 
    "Within 3 months", "Currently employed, exploring options"
  ];

  const eventTypes = [
    "In-person job fairs", "Virtual career events", "Industry networking", 
    "Resume workshops", "Interview preparation", "Career coaching sessions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join Our Job Fair Network
              </CardTitle>
              <CardDescription className="text-lg">
                Register to receive notifications about upcoming job fairs and career events
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="full_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
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
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Professional Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="job_title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current/Desired Job Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Software Developer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="years_experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years of Experience *</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="0" 
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry}>
                                    {industry}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select availability" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {availabilityOptions.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="resume_url"
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
                        name="linkedin_profile"
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
                    </div>
                  </div>

                  {/* Event Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Event Preferences *
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="event_preferences"
                      render={() => (
                        <FormItem>
                          <FormLabel>What types of events are you interested in?</FormLabel>
                          <div className="grid md:grid-cols-2 gap-3">
                            {eventTypes.map((event) => (
                              <FormField
                                key={event}
                                control={form.control}
                                name="event_preferences"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(event)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, event])
                                            : field.onChange(
                                                field.value?.filter((value) => value !== event)
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal cursor-pointer">
                                      {event}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register for Job Fair Updates"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerSignup;