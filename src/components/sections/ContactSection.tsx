import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, UserPlus, CalendarPlus } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  const contactDetails = [
    { icon: MapPin, text: "Healthcare City, Innovation Drive, Tech Park, New Delhi, India 110001", href: "https://maps.google.com/?q=Healthcare+City,+Innovation+Drive,+Tech+Park,+New+Delhi,+India+110001" },
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, text: "contact@newtonai.hospital", href: "mailto:contact@newtonai.hospital" },
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="shadow-lg bg-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                  <detail.icon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/80 group-hover:text-primary transition-colors duration-300">{detail.text}</span>
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                  <Link href="#book-consultation">
                    <CalendarPlus className="mr-2 h-5 w-5" /> Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-transform hover:scale-105">
                  <Link href="#partner-with-us">
                    <UserPlus className="mr-2 h-5 w-5" /> Partner with Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl group">
             <Image
              src="https://placehold.co/600x400.png"
              alt="Hospital Location Map"
              data-ai-hint="map location"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <Link href="https://maps.google.com/?q=Healthcare+City,+Innovation+Drive,+Tech+Park,+New+Delhi,+India+110001" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-white/80 hover:bg-white text-primary backdrop-blur-sm shadow-md">
                  View on Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
