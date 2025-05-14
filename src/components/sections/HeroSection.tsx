
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/config/site';
import { MoveRight, Download } from 'lucide-react';

export function HeroSection() {
  const { name, title, subtitle, cta, avatarUrl } = portfolioData.hero;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:text-left animate-fadeInUp space-y-6">
            <span className="text-accent font-semibold text-lg tracking-wide">Hello, I'm</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl md:max-w-none">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform">
                <Link href={cta.href}>
                  {cta.label} <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform border-primary/50 hover:bg-primary/5 hover:border-primary">
                {/* Replace # with actual resume link */}
                <Link href="#"> 
                  Download CV <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex flex-row gap-3 justify-center md:justify-start">
              {portfolioData.socialLinks.map((socialLink) => (
                <Button
                  key={socialLink.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full text-foreground hover:text-accent hover:bg-accent/10 w-10 h-10 transition-colors duration-200"
                  aria-label={socialLink.name}
                >
                  <Link href={socialLink.url} target="_blank" rel="noopener noreferrer">
                    <socialLink.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          {avatarUrl && (
            <div className="relative animate-fadeIn order-first md:order-last w-[400px] h-[400px] mx-auto">
              {/* Rotating Squares */}
              {/* Big Pair */}
              <div 
                className="absolute bg-primary/20 rounded-lg animate-hero-spin-1 z-0"
                style={{ 
                  width: '170px', height: '170px', 
                  top: '2%', left: '2%',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute bg-accent/20 rounded-xl animate-hero-spin-2 z-0"
                style={{ 
                  width: '190px', height: '190px', 
                  bottom: '2%', right: '2%',
                  transformOrigin: 'center center'
                }}
              ></div>

              {/* Small Pair */}
              <div 
                className="absolute bg-primary/15 rounded-md animate-hero-spin-3 z-0" // Faster clockwise
                style={{ 
                  width: '80px', height: '80px', 
                  top: '25%', right: '15%',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute bg-accent/15 rounded-lg animate-hero-spin-2 z-0" // Counter-clockwise (can reuse or make new if speed variation is highly desired)
                style={{ 
                  width: '70px', height: '70px', 
                  bottom: '25%', left: '15%',
                  transformOrigin: 'center center',
                }}
              ></div>

              {/* Central Image */}
              <Image
                src={avatarUrl}
                alt={name}
                width={280} 
                height={280} 
                priority
                className="rounded-full mx-auto shadow-2xl relative z-10 aspect-square object-cover"
                data-ai-hint="professional portrait"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
