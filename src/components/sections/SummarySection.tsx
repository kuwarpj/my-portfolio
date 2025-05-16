import { SectionWrapper } from '@/components/common/SectionWrapper';
import { portfolioData } from '@/config/site';
import Image from 'next/image';

export function SummarySection() {
  const { title, content } = portfolioData.summary;
  const { name } = portfolioData.hero; // For alt text

  return (
    <SectionWrapper id="summary" title={title} className="bg-gradient-to-b font-[400] from-secondary  to-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
       
        <div
          className="relative group animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="aspect-square max-w-sm mx-auto md:max-w-md shadow-2xl rounded-xl overflow-hidden">
            <Image
              src="/projects/summary1.png" 
              alt={`A glimpse of ${name}'s workspace or persona`}
              width={500}
              height={500}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              data-ai-hint="professional workspace"
            />
          </div>
          
          <div 
            className="hidden md:block absolute -bottom-5 -right-5 w-20 h-20 bg-accent/15 rounded-full -z-10 transform transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          ></div>
          <div 
            className="hidden md:block absolute -top-5 -left-5 w-24 h-24 bg-primary/10 rounded-xl -z-10 transform rotate-12 transition-transform duration-300 group-hover:rotate-6"
            aria-hidden="true"
          ></div>
        </div>

        <div
          className="space-y-6 text-center md:text-left animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-foreground/90 leading-relaxed" 
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
