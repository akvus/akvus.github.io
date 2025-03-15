import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Film, MessageSquare } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { appsData } from '@/data/apps';
import { videosData } from '@/data/videos';
import { blogData } from '@/data/blog';
import AnimatedImage from '@/components/AnimatedImage';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toast("Welcome to my portfolio!", {
      description: "Browse through my projects, videos, and blog posts.",
      position: "bottom-right",
    });
    
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY * 0.003, 0);
        const translateY = scrollY * 0.5;
        
        heroRef.current.style.opacity = `${opacity}`;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&auto=format&fit=crop')] bg-cover bg-center"
          style={{
            transform: 'scale(1.05)',
          }}
        ></div>
        
        <div 
          ref={heroRef} 
          className="container mx-auto px-4 z-20 transition-all duration-300"
        >
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-primary/30 backdrop-blur-sm rounded-full">
              Lead Software Engineering Expert
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Creating digital experiences that make a difference
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Specialized in mobile app development, back end development, engaging video content, and insightful articles
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/apps">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/80 rounded-full animate-[pulse_2s_infinite]"></div>
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section className="section-container">
        <SectionHeading
          subheading="Portfolio Highlights"
          heading="Featured Work"
          description="Explore a selection of my recent mobile applications, videos, and written content."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured App */}
          <div className="portfolio-card col-span-1 md:col-span-2 lg:col-span-1">
            <AnimatedImage
              src={appsData[0].screenshots[0]}
              alt={appsData[0].title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="h-5 w-5 text-primary mr-2" />
                <span className="text-xs font-medium uppercase text-primary">{appsData[0].category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{appsData[0].title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{appsData[0].description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/apps">View App Details</Link>
              </Button>
            </div>
          </div>
          
          {/* Featured Video */}
          <div className="portfolio-card h-full flex flex-col">
            <AnimatedImage
              src={videosData[0].thumbnailUrl}
              alt={videosData[0].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-4">
                <Film className="h-5 w-5 text-primary mr-2" />
                <span className="text-xs font-medium uppercase text-primary">{videosData[0].categories[0]}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{videosData[0].title}</h3>
              <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">{videosData[0].description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/videos">Watch Videos</Link>
              </Button>
            </div>
          </div>
          
          {/* Featured Blog Post */}
          <div className="portfolio-card h-full flex flex-col">
            <AnimatedImage
              src={blogData[0].coverImage}
              alt={blogData[0].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-primary mr-2" />
                <span className="text-xs font-medium uppercase text-primary">{blogData[0].categories[0]}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{blogData[0].title}</h3>
              <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">{blogData[0].excerpt}</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Read Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Interested in working together?</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/contact">
              <MessageSquare className="mr-2 h-4 w-4" /> Start a Conversation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
