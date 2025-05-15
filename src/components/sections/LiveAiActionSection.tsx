import { Card, CardContent } from '@/components/ui/card';

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
              <Card key={index} className="min-w-[250px] md:min-w-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full bg-secondary/50 flex items-center justify-center">
                    {/* Image removed, placeholder for content if needed */}
                    {/* <p className="text-muted-foreground text-sm">Visual here</p> */}
                  </div>
                  <div className="p-4 bg-background">
                    <p className="font-medium text-center text-primary group-hover:text-accent transition-colors duration-300">{item.caption}</p>
                  </div>
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
