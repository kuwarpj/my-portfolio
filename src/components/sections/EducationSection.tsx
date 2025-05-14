import { SectionWrapper } from '@/components/common/SectionWrapper';
import { portfolioData } from '@/config/site';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, BookOpen, CalendarDays } from 'lucide-react';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <SectionWrapper id="education" title="Education" subtitle="My academic background and qualifications." className="bg-gradient-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {education.map((item, index) => (
            <AccordionItem key={item.id} value={item.id} className="bg-card p-6 rounded-lg shadow-lg border-transparent hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <AccordionTrigger className="text-left hover:no-underline group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                  <div className="flex items-center gap-3">
                     {item.logo && typeof item.logo !== 'string' ? <item.logo className="w-10 h-10 text-accent flex-shrink-0" /> : <GraduationCap className="w-10 h-10 text-accent flex-shrink-0" />}
                    <div>
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">{item.institution}</h3>
                      <p className="text-md text-muted-foreground">{item.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                    <CalendarDays className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </AccordionTrigger>
              {item.description && item.description.length > 0 && (
                <AccordionContent className="pt-4 text-foreground space-y-2">
                  {item.description.map((point, i) => (
                    <p key={i} className="flex items-start">
                      <BookOpen className="w-4 h-4 mr-2 mt-1 text-accent flex-shrink-0" />
                      {point}
                    </p>
                  ))}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
