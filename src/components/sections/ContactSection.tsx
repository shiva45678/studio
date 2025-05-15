import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, UserPlus, CalendarPlus } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  const contactDetails = [
    { icon: MapPin, text: "opposite to post office, Nandigama 521185", href: "https://maps.app.goo.gl/PZ236vTVNniU7Ppk6" },
    { icon: Phone, text: "+916363111328", href: "tel:+916363111328" },
    { icon: Mail, text: "shiva@newtons.in", href: "mailto:shiva@newtons.in" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Visit Us / Contact
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're here to help. Reach out to us for appointments, partnerships, or any inquiries.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="shadow-lg bg-secondary/30 md:w-2/3 lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                  <detail.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/80 group-hover:text-primary transition-colors duration-300">{detail.text}</span>
                </a>
              ))}
              <div className="pt-4">
                 <Link href="https://maps.app.goo.gl/PZ236vTVNniU7Ppk6" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View on Map
                    </Button>
                </Link>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                    <a href="tel:+916363111328">
                        <CalendarPlus className="mr-2 h-5 w-5" /> Book a Consultation
                    </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-transform hover:scale-105">
                    <a href="mailto:shiva@newtons.in">
                        <UserPlus className="mr-2 h-5 w-5" /> Partner with Us
                    </a>
                    </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
