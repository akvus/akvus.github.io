
import React, { useState } from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { appsData } from '@/data/apps';
import AnimatedImage from '@/components/AnimatedImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState(appsData[0].id);
  
  // Get all categories
  const categories = Array.from(
    new Set(appsData.map(app => app.category))
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading
        subheading="Mobile Applications"
        heading="App Portfolio"
        description="Explore my collection of mobile applications for iOS and Android platforms."
      />
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-8">
          <TabsTrigger value="all">All Apps</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appsData.map(app => (
            <div key={app.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <AnimatedImage
                src={app.screenshots[0]}
                alt={app.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Smartphone className="h-5 w-5 text-primary mr-2" />
                    <span className="text-xs font-medium uppercase text-primary">{app.category}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{app.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{app.description}</p>
                <div className="flex space-x-3">
                  {app.appStore && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={app.appStore} target="_blank" rel="noopener noreferrer">
                        App Store <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {app.googlePlay && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={app.googlePlay} target="_blank" rel="noopener noreferrer">
                        Google Play <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appsData
              .filter(app => app.category === category)
              .map(app => (
                <div key={app.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <AnimatedImage
                    src={app.screenshots[0]}
                    alt={app.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 text-primary mr-2" />
                        <span className="text-xs font-medium uppercase text-primary">{app.category}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{app.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{app.description}</p>
                    <div className="flex space-x-3">
                      {app.appStore && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href={app.appStore} target="_blank" rel="noopener noreferrer">
                            App Store <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {app.googlePlay && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href={app.googlePlay} target="_blank" rel="noopener noreferrer">
                            Google Play <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Apps;
