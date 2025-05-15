import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <div className="mb-4">
          <p className="font-semibold text-primary">Made with ❤️ by Dr. Shiva Kolli, MBBS | Founder of Newtons Ai</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#ai-systems" className="hover:text-primary transition-colors">AI Systems</Link>
          <Link href="#for-doctors" className="hover:text-primary transition-colors">For Doctors</Link>
          <Link href="#for-patients" className="hover:text-primary transition-colors">For Patients</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <p>&copy; {currentYear} Newtons AI Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}
