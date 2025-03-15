import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Smartphone, Calendar, Tag, Code } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedImage from '@/components/AnimatedImage';
import { appsData, AppData } from '@/data/apps';
import { Badge } from '@/components/ui/badge';

const AppDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [app, setApp] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the app with the matching id
    const foundApp = appsData.find(app => app.id === id);
    setApp(foundApp || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">App not found</h2>
          <p className="mt-4 text-muted-foreground">The app you are looking for does not exist.</p>
          <Button asChild className="mt-8">
            <Link to="/apps">Return to Apps</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link to="/apps" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Apps
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <AnimatedImage
              src={app.screenshots[0]}
              alt={app.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-xs font-medium uppercase text-primary">{app.category}</span>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {app.year}
                  </Badge>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
              <p className="text-muted-foreground mb-8">{app.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {app.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="flex items-center">
                    <Code className="h-3 w-3 mr-1" /> {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {app.appStoreUrl && (
                  <Button asChild variant="default" className="mb-2">
                    <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      App Store <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {app.playStoreUrl && (
                  <Button asChild variant="default" className="mb-2">
                    <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      Google Play <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {app.websiteUrl && (
                  <Button asChild variant="outline" className="mb-2">
                    <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {app.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading
          subheading="App Gallery"
          heading="Screenshots"
          description="Explore the app interface and features through these screenshots."
        />

        <Tabs defaultValue="gallery" className="w-full mt-8">
          <TabsList>
            <TabsTrigger value="gallery">Gallery View</TabsTrigger>
            <TabsTrigger value="carousel">Carousel View</TabsTrigger>
          </TabsList>
          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.screenshots.map((screenshot, index) => (
                <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden">
                  <AnimatedImage
                    src={screenshot}
                    alt={`${app.title} Screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="carousel" className="mt-6">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative overflow-hidden aspect-video">
                {app.screenshots.map((screenshot, index) => (
                  <AnimatedImage
                    key={index}
                    src={screenshot}
                    alt={`${app.title} Screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppDetails; 