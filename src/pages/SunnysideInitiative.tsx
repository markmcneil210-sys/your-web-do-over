import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Users, Briefcase, Building2, BarChart3, Target, ArrowRight, CheckCircle2 } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Community Resource Mapping",
    triz: "Identify hidden resources in the system.",
    icon: MapPin,
    activities: [
      "Map unemployed or underemployed residents",
      "Identify local businesses, churches, and community organizations",
      "Document vacant properties and community assets",
      "Gather employer needs through surveys and listening sessions",
    ],
    programs: [
      "U.S. Economic Development Administration planning grants",
      "U.S. Department of Labor workforce research programs",
    ],
    outcome: "Turn Sunnyside's challenges into measurable community assets that can be leveraged for jobs and investment.",
  },
  {
    number: 2,
    title: "Direct Hiring & Skills Pipeline",
    triz: "Solve contradictions (employers need workers; workers need jobs).",
    icon: Users,
    activities: [
      "Monthly hiring events in Sunnyside (like your February 19th event)",
      "Pre-screened resident workforce matched to employer needs",
      "Skills training and certification programs tied directly to employers",
    ],
    programs: [
      "Workforce Innovation and Opportunity Act (WIOA) grants",
      "Department of Labor Apprenticeship programs",
    ],
    outcome: "Immediate employment opportunities and measurable job placement metrics.",
  },
  {
    number: 3,
    title: "Entrepreneurship & Local Business Development",
    triz: "Combine multiple benefits into one system.",
    icon: Briefcase,
    activities: [
      "Launch small business incubators in Sunnyside",
      "Provide mentorship from corporate partners and local leaders",
      "Offer micro-loans and capital access for resident-led businesses",
      "Include athlete-led community business initiatives",
    ],
    programs: [
      "Small Business Administration grants and microloan programs",
      "Opportunity Zone investment incentives for private investors",
    ],
    outcome: "Create local wealth, jobs, and long-term economic growth.",
  },
  {
    number: 4,
    title: "Corporate & Federal Partnership Engagement",
    triz: "Use existing system influencers for leverage.",
    icon: Building2,
    activities: [
      "Engage Houston-based employers (energy, logistics, healthcare)",
      "Invite corporate funding and mentoring programs",
      "Partner with federal agencies to leverage Opportunity Zone tax incentives",
    ],
    programs: [],
    outcome: "Generate ongoing investment and support for the community hub.",
  },
  {
    number: 5,
    title: "Data Tracking & Replication",
    triz: "Systematic problem solving for scaling.",
    icon: BarChart3,
    activities: [
      "Track jobs created, businesses launched, workforce certifications earned",
      "Measure economic impact in wages, employment rates, and investment",
      "Prepare a national replication model for other Opportunity Zones",
    ],
    programs: [
      "EDA National Technical Assistance Programs",
      "HUD and Labor workforce impact grants",
    ],
    outcome: "Position Sunnyside as a national model for community-driven economic growth.",
  },
];

const advantagesTable = [
  { problem: "Unemployment", solution: "Hiring pipeline & skills training", outcome: "Immediate jobs" },
  { problem: "Lack of investment", solution: "Opportunity Zone funding", outcome: "Local capital influx" },
  { problem: "Skills gap", solution: "Apprenticeships & certifications", outcome: "Skilled workforce" },
  { problem: "Limited business", solution: "Entrepreneurship & incubators", outcome: "Sustainable local businesses" },
  { problem: "Employer shortage", solution: "Corporate partnerships", outcome: "Long-term employment" },
];

const diagramSteps = [
  { label: "Community Assets", icon: MapPin, color: "bg-primary" },
  { label: "Workforce Pipeline", icon: Users, color: "bg-accent" },
  { label: "Employer Matching", icon: Briefcase, color: "bg-primary" },
  { label: "Investment & Funding", icon: Building2, color: "bg-accent" },
  { label: "Economic Growth", icon: BarChart3, color: "bg-primary" },
];

const SunnysideInitiative = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Slide */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Federal Opportunity Zone Workforce Hub</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sunnyside Employment Initiative
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-4">
              A TRIZ-Powered Workforce Development Model
            </p>
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-3 mt-4">
              <p className="text-sm font-medium">Lead Organization: <span className="font-bold">Athletes Economic Alliance of Texas</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Goal</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform Sunnyside into a <strong className="text-foreground">self-sustaining hub</strong> for workforce development, entrepreneurship, and investment, leveraging federal Opportunity Zone incentives and workforce programs.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">The Five-Phase Model</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <Card key={phase.number} className="border-primary/10 overflow-hidden">
                  <CardHeader className="bg-primary/5 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
                        {phase.number}
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-foreground">{phase.title}</CardTitle>
                        <p className="text-sm text-primary mt-1 italic">TRIZ Principle: {phase.triz}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-5">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" /> Activities
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {phase.programs.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Federal Programs</h4>
                        <ul className="space-y-1">
                          {phase.programs.map((p, i) => (
                            <li key={i} className="text-muted-foreground text-sm pl-4 border-l-2 border-primary/30">{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-primary">Outcome:</span> {phase.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">Key Advantages of This Model</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/10 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    <TableHead className="font-bold text-foreground">Community Problem</TableHead>
                    <TableHead className="font-bold text-foreground">TRIZ Solution / Hub Activity</TableHead>
                    <TableHead className="font-bold text-foreground">Outcome</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {advantagesTable.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-destructive">{row.problem}</TableCell>
                      <TableCell className="text-muted-foreground">{row.solution}</TableCell>
                      <TableCell className="font-medium text-primary">{row.outcome}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Sunnyside Opportunity Zone Hub Model
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Community-driven workforce development flowing from assets to economic growth.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
              {diagramSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center text-center w-36">
                      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-primary-foreground mb-3`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{step.label}</span>
                    </div>
                    {i < diagramSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary shrink-0 hidden md:block" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Funding sources below */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["Federal Grants", "Corporate Investment", "Philanthropic Funding", "Community-Led Entrepreneurship"].map((source) => (
                <div key={source} className="bg-primary/5 border border-primary/10 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">✅ Bottom Line</h2>
            <p className="text-lg leading-relaxed opacity-90">
              By combining TRIZ problem-solving principles with federal Opportunity Zone incentives, the Sunnyside initiative can become a <strong>self-sustaining workforce hub</strong>, attracting federal grants, corporate investment, philanthropic funding, and community-led entrepreneurship.
            </p>
            <div className="mt-8 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <p className="text-xl font-bold">
                This transforms Sunnyside from a problem-focused community to a <em>solution-driven economic hub</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SunnysideInitiative;
