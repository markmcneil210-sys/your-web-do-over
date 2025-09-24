-- Create job seeker registrations table
CREATE TABLE public.job_seeker_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  resume_url TEXT,
  linkedin_profile TEXT,
  years_experience INTEGER,
  industry TEXT,
  job_title TEXT,
  availability TEXT NOT NULL,
  event_preferences TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.job_seeker_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (job seekers can register)
CREATE POLICY "Anyone can register as job seeker" 
ON public.job_seeker_registrations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Job seekers can view their own registration" 
ON public.job_seeker_registrations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_job_seeker_registrations_updated_at
BEFORE UPDATE ON public.job_seeker_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();