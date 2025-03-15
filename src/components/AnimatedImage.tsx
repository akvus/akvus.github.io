
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-video",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`image-${alt.replace(/\s+/g, '-').toLowerCase()}`);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [alt]);
  
  return (
    <div 
      id={`image-${alt.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        aspectRatio,
        "relative overflow-hidden rounded-lg",
        className
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          isInView ? "scale-100 opacity-100" : "scale-110 opacity-0",
          isLoaded ? "blur-0" : "blur-sm"
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default AnimatedImage;
