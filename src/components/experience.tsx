import { experiences } from '@/app/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-card border-border/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-100">{exp.role}</CardTitle>
                    <CardDescription className="text-primary font-semibold text-base">{exp.company}</CardDescription>
                  </div>
                  <p className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</p>
              </div>
            </CardHeader>
            {exp.description && (
                <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
