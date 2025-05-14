import Link from 'next/link';
import { portfolioData } from '@/config/site';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-secondary py-12 text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold font-heading mb-6">Get in Touch</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground mb-10">
          <a href={`mailto:${portfolioData.contactEmail}`}>Say Hello</a>
        </Button>

        <div className="flex justify-center space-x-6 mb-8">
          {portfolioData.socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild className="text-secondary-foreground hover:text-accent hover:bg-accent/10 rounded-full w-12 h-12">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-6 w-6" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {portfolioData.hero.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js & Tailwind CSS. Designed with passion.
        </p>
      </div>
    </footer>
  );
}
