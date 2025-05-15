import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareQuote, UserCheck } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    icon: MessageSquareQuote,
    quote: "I was treated faster and better than any hospital before. The AI assistant really helped my doctor pinpoint the issue quickly.",
    author: "A. Sharma",
    role: "Patient",
  },
  {
    icon: UserCheck,
    quote: "It feels like having a junior resident with 10 years of experience beside me. Newtons AI significantly reduces my workload and improves diagnostic accuracy.",
    author: "Dr. R. Gupta",
    role: "Resident Doctor",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Patients & Doctors Love Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear directly from those who have experienced the Newtons AI difference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <testimonial.icon className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl text-primary">{testimonial.role} Story</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <blockquote className="text-foreground/80 italic border-l-4 border-accent pl-4 py-2 mb-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-semibold text-right text-primary">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Link href="#contact">See More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
