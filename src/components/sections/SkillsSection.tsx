// src/components/sections/SkillsSection.tsx
'use client';

import { SectionWrapper } from '@/components/common/SectionWrapper';
import { portfolioData } from '@/config/site';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" title="Technical Skills" subtitle="A snapshot of my technical expertise." className="bg-gradient-to-b from-background to-secondary">
      <Card className="animate-fadeInUp w-[90%] mx-auto shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-8">
          {skills.map((category, catIndex) => (
            <div
              key={category.name}
              className="animate-fadeInUp"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6 text-left">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-start gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "animate-fadeInUp bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-default"
                    )}
                    style={{ animationDelay: `${(catIndex * 0.15) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
