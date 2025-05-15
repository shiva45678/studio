import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Futuristic hospital with AI brain and doctor silhouette"
        data-ai-hint="futuristic hospital AI brain Indian doctor"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          <span className="block">Newton’s AI Hospital</span>
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-200 drop-shadow-md">
          Founded by Dr. Shiva, MBBS (Founder of Newton's AI) | Powered by Newton’s AI
        </p>
        <p className="text-xl md:text-3xl font-semibold text-teal-300 drop-shadow-md">
          Where doctors are enhanced, not replaced.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105 shadow-lg">
            <Link href="#contact">Book Appointment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 transition-transform hover:scale-105 shadow-lg bg-transparent hover:text-accent-foreground">
            <Link href="#ai-systems">Explore AI Systems</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
