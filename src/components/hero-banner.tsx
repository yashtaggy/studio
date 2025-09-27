import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroData } from '@/app/data';
import { Github } from 'lucide-react';

export function HeroBanner() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <Image
          src={heroData.image.imageUrl}
          alt={heroData.image.description}
          fill
          quality={100}
          className="object-cover"
          priority
          data-ai-hint={heroData.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 max-w-4xl">
          {heroData.headline}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-8">
          {heroData.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6">
            <a href={heroData.resumeLink} download>
              Download Resume
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="bg-white/20 hover:bg-white/30 text-white font-bold text-lg px-8 py-6">
            <Link href={heroData.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
