import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const actionItems = [
  { caption: "Intuitive OPD Dashboard" },
  { caption: "Advanced ICU Monitoring" },
  { caption: "Critical Emergency Alerts" },
  { caption: "Smart Drug Safety Checks" },
  { caption: "Seamless Doctor Interface" },
];

export default function LiveAiActionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Live AI in Action
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See glimpses of our AI systems transforming patient care and hospital workflows.
          </p>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary/50">
            {actionItems.map((item, index) => (
              <Card key={index} className="min-w-[250px] md:min-w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group bg-card">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                  <Activity className="h-14 w-14 text-primary group-hover:text-accent transition-colors duration-300 mb-4" />
                  <p className="font-semibold text-lg text-primary group-hover:text-accent transition-colors duration-300">{item.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css or a utility CSS file for scrollbar styling if Tailwind plugin not used
// .scrollbar-thin { scrollbar-width: thin; }
// .scrollbar-thumb-primary\/50::-webkit-scrollbar-thumb { background-color: hsl(var(--primary) / 0.5); }
// .scrollbar-track-secondary\/50::-webkit-scrollbar-track { background-color: hsl(var(--secondary) / 0.5); }
// For Firefox:
// .scrollbar-thumb-primary\/50 { scrollbar-color: hsl(var(--primary) / 0.5) hsl(var(--secondary) / 0.5); }
