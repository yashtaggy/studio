import { certifications } from '@/app/data';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Certifications</h2>
      <Card className="bg-card border-border/50">
        <CardContent className="p-6">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center">
                <BadgeCheck className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg text-gray-300">{cert}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
