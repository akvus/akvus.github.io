
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  subheading?: string;
  heading: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subheading,
  heading,
  description,
  className,
  align = 'center',
}) => {
  return (
    <div 
      className={cn(
        'max-w-3xl mx-auto mb-16',
        align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center',
        className
      )}
    >
      {subheading && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full animate-fade-in">
          {subheading}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 animate-fade-in text-balance">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground animate-fade-in text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
