import { Navbar } from '@/components/navbar';
import { HeroBanner } from '@/components/hero-banner';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Certifications } from '@/components/certifications';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroBanner />
        <div className="py-20 sm:py-28 space-y-24 sm:space-y-32">
          <Projects />
          <Skills />
          <Certifications />
          <Experience />
        </div>
      </main>
      <Footer />
    </div>
  );
}
