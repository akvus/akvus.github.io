
import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { blogData } from '@/data/blog';
import AnimatedImage from '@/components/AnimatedImage';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Blog = () => {
  // Get all categories
  const categories = Array.from(
    new Set(blogData.flatMap(post => post.categories))
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading
        subheading="Articles & Insights"
        heading="Blog Posts"
        description="Read my thoughts, tutorials, and insights on development, design, and technology."
      />
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-8">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map(post => (
            <div key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <AnimatedImage
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 text-primary mr-2" />
                    <span className="text-xs font-medium uppercase text-primary">{post.categories[0]}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">{post.publishDate}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData
              .filter(post => post.categories.includes(category))
              .map(post => (
                <div key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <AnimatedImage
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Tag className="h-5 w-5 text-primary mr-2" />
                        <span className="text-xs font-medium uppercase text-primary">{post.categories[0]}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{post.publishDate}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Blog;
