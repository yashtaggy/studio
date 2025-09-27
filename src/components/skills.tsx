import { skills } from '@/app/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm bg-secondary hover:bg-secondary/80">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
