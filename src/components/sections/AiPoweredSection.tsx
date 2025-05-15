import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AiPoweredSection() {
  const benefits = [
    { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Faster diagnosis" },
    { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Evidence-based treatment" },
    { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Higher safety, lower error rates" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Built by Doctors, Powered by AI
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Newton’s AI Hospital, every patient gets the power of two experts:
              a real doctor and an AI assistant trained on 50,000+ real cases. Our commitment is to blend human expertise with artificial intelligence for unparalleled patient care.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {benefit.icon}
                  <span className="text-md font-medium text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105">
            <Image
              src="https://placehold.co/600x400.png"
              alt="AI and doctor working together"
              data-ai-hint="AI doctor collaboration"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
