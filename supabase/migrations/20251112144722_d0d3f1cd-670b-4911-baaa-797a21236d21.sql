-- Make user_id nullable to allow anonymous registrations
ALTER TABLE public.job_seeker_registrations 
ALTER COLUMN user_id DROP NOT NULL;

-- Update the INSERT policy to allow anonymous registrations
DROP POLICY IF EXISTS "Users can create their own registrations" ON public.job_seeker_registrations;

CREATE POLICY "Allow public registrations" 
ON public.job_seeker_registrations 
FOR INSERT 
WITH CHECK (
  -- Allow if user_id is NULL (anonymous) OR if authenticated and user_id matches
  user_id IS NULL OR auth.uid() = user_id
);

-- Update SELECT policy to allow users to view their own or anonymous registrations
DROP POLICY IF EXISTS "Users can view their own registrations" ON public.job_seeker_registrations;

CREATE POLICY "Users can view their own registrations" 
ON public.job_seeker_registrations 
FOR SELECT 
USING (
  -- Admins can view all
  has_role(auth.uid(), 'admin'::app_role) OR
  -- Users can view their own authenticated registrations
  (auth.uid() = user_id AND user_id IS NOT NULL)
);