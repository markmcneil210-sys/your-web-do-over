import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  industry: string;
  job_title: string;
  years_experience: number;
  availability: string;
  event_preferences: string[];
  resume_url: string | null;
  linkedin_profile: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "Please log in to access this page.",
        });
        navigate('/auth');
        return;
      }

      // Check if user has admin role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roleData) {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You don't have permission to access this page.",
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
      fetchRegistrations();
    } catch (error) {
      console.error('Error checking admin access:', error);
      navigate('/');
    }
  };

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('job_seeker_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setRegistrations(data || []);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load registrations.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (registrations.length === 0) {
      toast({
        title: "No Data",
        description: "There are no registrations to export.",
      });
      return;
    }

    const headers = [
      'Full Name', 'Email', 'Phone', 'Industry', 'Job Title', 
      'Years Experience', 'Availability', 'Event Preferences', 
      'Resume URL', 'LinkedIn', 'Registration Date'
    ];

    const csvData = registrations.map(reg => [
      reg.full_name,
      reg.email,
      reg.phone,
      reg.industry,
      reg.job_title,
      reg.years_experience,
      reg.availability,
      reg.event_preferences.join('; '),
      reg.resume_url || '',
      reg.linkedin_profile || '',
      new Date(reg.created_at).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `job-fair-registrations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export Successful",
      description: "Registrations exported to CSV file.",
    });
  };

  if (!isAdmin || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
                <Users className="w-8 h-8" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">Manage job fair registrations</p>
            </div>
            <Button onClick={exportToCSV} className="gap-2">
              <Download className="w-4 h-4" />
              Export to CSV
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Fair Registrations</CardTitle>
            <CardDescription>
              Total registrations: {registrations.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrations.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg">No registrations yet</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Registrations will appear here once job seekers sign up
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Availability</TableHead>
                      <TableHead>Event Preferences</TableHead>
                      <TableHead>Links</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.full_name}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.phone}</TableCell>
                        <TableCell>{reg.industry}</TableCell>
                        <TableCell>{reg.job_title}</TableCell>
                        <TableCell>{reg.years_experience} years</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{reg.availability}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {reg.event_preferences.map((pref, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {pref}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {reg.resume_url && (
                              <a 
                                href={reg.resume_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                              >
                                Resume
                              </a>
                            )}
                            {reg.linkedin_profile && (
                              <a 
                                href={reg.linkedin_profile} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                              >
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(reg.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
