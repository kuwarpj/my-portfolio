import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 scroll-mt-20', className)} 
      {...props}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', contentClassName)}>
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className={cn('text-3xl md:text-4xl font-bold font-heading text-primary mb-3', titleClassName)}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn('text-lg text-muted-foreground max-w-2xl mx-auto', subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
