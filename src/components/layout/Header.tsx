import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HospitalIcon } from 'lucide-react';

const navLinks = [
  { href: '#ai-systems', label: 'AI Systems' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <HospitalIcon className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Newtons AI Hospital</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <HospitalIcon className="h-7 w-7 text-primary" />
                <span className="text-lg font-bold text-primary">Newtons AI Hospital</span>
              </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
