-- Drop the existing insecure INSERT policy
DROP POLICY IF EXISTS "Allow public registrations" ON public.job_seeker_registrations;

-- Create a secure INSERT policy that prevents user_id spoofing
-- Anonymous users can only insert with user_id = NULL
-- Authenticated users can only insert with user_id = their own auth.uid()
CREATE POLICY "Allow public registrations" 
ON public.job_seeker_registrations
FOR INSERT 
WITH CHECK (
  -- Anonymous users must have user_id = NULL
  (auth.uid() IS NULL AND user_id IS NULL) OR 
  -- Authenticated users must have user_id = their own ID
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
);