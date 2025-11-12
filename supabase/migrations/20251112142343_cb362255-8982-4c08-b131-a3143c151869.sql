-- Drop the existing foreign key constraint
ALTER TABLE public.job_seeker_registrations 
DROP CONSTRAINT IF EXISTS job_seeker_registrations_user_id_fkey;

-- Add it back with ON DELETE CASCADE
ALTER TABLE public.job_seeker_registrations
ADD CONSTRAINT job_seeker_registrations_user_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;