
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { portfolioData } from '@/config/site';
import { Card } from "@/components/ui/card"; 
import { Briefcase, CalendarDays } from 'lucide-react';

export function WorkExperienceSection() {
  const { workExperience } = portfolioData;

  if (!workExperience || workExperience.length === 0) {
    return null; 
  }

  return (
    <SectionWrapper id="experience" title="Work Experience" subtitle="My professional journey and contributions." className="bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl mx-auto space-y-8">
        {workExperience.map((item, index) => {
          const LogoComponent = item.logo && typeof item.logo !== 'string' ? item.logo : null;
          return (
            <Card 
              key={item.id} 
              className="p-6 rounded-lg shadow-lg border-transparent hover:shadow-xl transition-shadow duration-300 animate-fadeInUp bg-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-x-6 gap-y-4"> 
                {LogoComponent && (
                  <div className="flex-shrink-0 flex items-center justify-center sm:justify-start">
                    <LogoComponent className="w-12 h-12 text-accent" />
                  </div>
                )}
                {typeof item.logo === 'string' && (
                   <div className="flex-shrink-0 flex items-center justify-center sm:justify-start">
                    <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 rounded-full object-contain" />
                  </div>
                )}

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{item.company}</h3>
                      <p className="text-md text-muted-foreground">{item.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 whitespace-nowrap">
                      <CalendarDays className="w-4 h-4 flex-shrink-0" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  {item.description && item.description.length > 0 && (
                    <ul className="mt-4 space-y-2 text-foreground">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <Briefcase className="w-4 h-4 mr-3 mt-1 text-accent flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
