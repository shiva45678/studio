
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Brain, Zap, ClipboardList, PillIcon, Hospital, UserCog, BedDouble, ArrowRight } from 'lucide-react';
import Link from "next/link";

const aiSystems = [
  { icon: Hospital, title: "AI HMS System", description: "Automated hospital operations.", link: "https://hms.newtons.in" },
  { icon: BedDouble, title: "AI-Integrated Wards", description: "Smart ward monitoring and alerts.", link: "https://group.newtons.in" },
  { icon: Stethoscope, title: "AI OPD Assistant", description: "Fast & accurate differential diagnosis.", link: "https://newtons.in" },
  { icon: Brain, title: "AI ICU Assistant", description: "Predicts complications, monitors vitals.", link: "https://newtons.in" },
  { icon: Zap, title: "Emergency AI", description: "Real-time emergency stabilization tools.", link: "https://newtons.in" },
  { icon: ClipboardList, title: "Treatment Planner", description: "Guideline-based, branch-logic therapy plans.", link: "https://newtons.in" },
  { icon: PillIcon, title: "Drug Safety AI", description: "Avoid drug interactions & toxic combos.", link: "https://newtons.in" },
  { icon: UserCog, title: "AI Agent for Doctors", description: "Your AI co-doctor, 24x7.", link: "https://newtons.in" },
];

export default function AiSystemsSection() {
  return (
    <section id="ai-systems" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore Our AI Systems
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover how our cutting-edge AI solutions are revolutionizing healthcare, one system at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSystems.map((system) => (
            <Card key={system.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-background">
              <CardHeader className="items-center text-center p-6">
                <div className="p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <system.icon className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{system.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
                <CardDescription className="text-sm text-foreground/70 mb-6 text-center flex-grow">
                  {system.description}
                </CardDescription>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-accent group-hover:text-accent group-hover:bg-accent group-hover:text-accent-foreground active:shadow-[0_0_15px_2px_hsl(var(--accent))] transition-all duration-300">
                  <Link 
                    href={system.link}
                    target={system.link.startsWith('http') ? "_blank" : undefined}
                    rel={system.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
