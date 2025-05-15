import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[calc(80vh-4rem)] min-h-[500px] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/80">
      {/* Background image removed, using a gradient background instead */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-6 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          <span className="block">Newton’s AI Hospital</span>
        </h1>
        <div className="space-y-1"> {/* Wrapper to control spacing between these two lines */}
          <p className="text-lg md:text-2xl font-medium text-gray-200 drop-shadow-md">
            Dr. Shiva, MBBS (Founder of Newton's AI & Newton’s AI Hospital)
          </p>
          <p className="text-base md:text-xl font-medium text-gray-300 drop-shadow-md">
            Powered by Newton’s AI
          </p>
        </div>
        <p className="text-xl md:text-3xl font-semibold text-teal-300 drop-shadow-md">
          Where doctors are enhanced, not replaced.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105 shadow-lg">
            <Link href="#contact">Book Appointment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105 shadow-lg bg-transparent hover:text-accent-foreground">
            <Link href="#ai-systems">Explore AI Systems</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
