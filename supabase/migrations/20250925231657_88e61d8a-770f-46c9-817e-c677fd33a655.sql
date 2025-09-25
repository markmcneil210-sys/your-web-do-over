-- Add user_id column to job_seeker_registrations table
ALTER TABLE public.job_seeker_registrations 
ADD COLUMN user_id UUID REFERENCES auth.users(id) NOT NULL DEFAULT auth.uid();

-- Create index for performance
CREATE INDEX idx_job_seeker_registrations_user_id ON public.job_seeker_registrations(user_id);

-- Drop the dangerous existing policies
DROP POLICY IF EXISTS "Anyone can register as job seeker" ON public.job_seeker_registrations;
DROP POLICY IF EXISTS "Job seekers can view their own registration" ON public.job_seeker_registrations;

-- Create secure RLS policies
-- Users can only view their own registrations
CREATE POLICY "Users can view their own registrations" 
ON public.job_seeker_registrations 
FOR SELECT 
USING (auth.uid() = user_id);

-- Users can insert their own registrations (user_id automatically set)
CREATE POLICY "Users can create their own registrations" 
ON public.job_seeker_registrations 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Users can update their own registrations
CREATE POLICY "Users can update their own registrations" 
ON public.job_seeker_registrations 
FOR UPDATE 
USING (auth.uid() = user_id) 
WITH CHECK (auth.uid() = user_id);

-- Users can delete their own registrations
CREATE POLICY "Users can delete their own registrations" 
ON public.job_seeker_registrations 
FOR DELETE 
USING (auth.uid() = user_id);