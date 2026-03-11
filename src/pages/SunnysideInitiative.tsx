import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target } from "lucide-react";
import sunnysideDiagram from "@/assets/sunnyside-workforce-hub-diagram.png";

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

      {/* Workforce Hub Diagram */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={sunnysideDiagram}
              alt="Sunnyside Opportunity Zone Workforce Hub Model - showing community assets flowing through a workforce development pipeline to employer and investor partners, resulting in jobs, new businesses, local investment, and economic growth"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
