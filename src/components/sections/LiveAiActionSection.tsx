import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const actionItems = [
  { src: "https://placehold.co/400x300.png", alt: "OPD Dashboard UI", hint: "OPD dashboard UI", caption: "Intuitive OPD Dashboard" },
  { src: "https://placehold.co/400x300.png", alt: "ICU Monitoring System", hint: "ICU monitoring system", caption: "Advanced ICU Monitoring" },
  { src: "https://placehold.co/400x300.png", alt: "Emergency Alert Dashboard", hint: "emergency alert dashboard", caption: "Critical Emergency Alerts" },
  { src: "https://placehold.co/400x300.png", alt: "Drug Interaction Alerts", hint: "drug interaction alert", caption: "Smart Drug Safety Checks" },
  { src: "https://placehold.co/400x300.png", alt: "Doctor using Newton's AI", hint: "doctor AI interface", caption: "Seamless Doctor Interface" },
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
              <Card key={index} className="min-w-[300px] md:min-w-[350px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      data-ai-hint={item.hint}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-background">
                    <p className="font-medium text-center text-primary group-hover:text-accent transition-colors duration-300">{item.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
           {/* Optional: Add custom scroll arrows if needed, or rely on native scrollbar */}
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
