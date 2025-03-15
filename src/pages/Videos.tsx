
import React, { useState } from 'react';
import { Calendar, Film } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { videosData } from '@/data/videos';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedImage from '@/components/AnimatedImage';

const Videos = () => {
  // Get all categories
  const categories = Array.from(
    new Set(videosData.flatMap(video => video.categories))
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading
        subheading="Video Content"
        heading="Video Portfolio"
        description="Watch my collection of tutorials, demos, and creative video content."
      />
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-8">
          <TabsTrigger value="all">All Videos</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map(video => (
            <div key={video.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <a 
                href={video.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block"
              >
                <AnimatedImage
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Film className="h-12 w-12 text-white" />
                </div>
              </a>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Film className="h-5 w-5 text-primary mr-2" />
                    <span className="text-xs font-medium uppercase text-primary">{video.categories[0]}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{video.description}</p>
              </div>
            </div>
          ))}
        </TabsContent>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData
              .filter(video => video.categories.includes(category))
              .map(video => (
                <div key={video.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <AnimatedImage
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Film className="h-12 w-12 text-white" />
                    </div>
                  </a>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Film className="h-5 w-5 text-primary mr-2" />
                        <span className="text-xs font-medium uppercase text-primary">{video.categories[0]}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{video.description}</p>
                  </div>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Videos;
