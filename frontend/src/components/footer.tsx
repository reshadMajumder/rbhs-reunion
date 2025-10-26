import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from './logo';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10" />
              <span className="text-lg font-bold font-headline">
                RBMB Reunion
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} RBMBIAN Alumni Association. All Rights Reserved.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-headline text-lg">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:nmahmud2017@gmail.com" className="hover:text-primary transition-colors">nmahmud2017@gmail.com</a></li>
              <li><a href="tel:+880 1610-498000" className="hover:text-primary transition-colors">+880 1610-498000</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-headline text-lg">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
