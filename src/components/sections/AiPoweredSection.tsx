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
        <div className="flex justify-center">
          <div className="space-y-6 md:max-w-3xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Built by Doctors, Powered by AI
            </h2>
            <p className="text-lg text-foreground/80 leading-loose">
              At Newtons AI Hospital, every patient gets the power of two experts:
              a real doctor and an AI assistant trained on 50,000+ real cases. Our commitment is to blend human expertise with artificial intelligence for unparalleled patient care.
            </p>
            <ul className="space-y-3 inline-block text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {benefit.icon}
                  <span className="text-md font-medium text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
