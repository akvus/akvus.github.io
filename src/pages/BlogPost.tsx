
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { blogData } from '@/data/blog';
import { Button } from '@/components/ui/button';
import AnimatedImage from '@/components/AnimatedImage';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogData.find(post => post.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/blog')}
        className="mb-8 pl-0 flex items-center"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>
      
      <div className="max-w-3xl mx-auto">
        <AnimatedImage
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        
        <div className="flex items-center mb-6 gap-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
            <span className="text-sm text-muted-foreground">{post.publishDate}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.categories.map(category => (
              <span 
                key={category}
                className="inline-flex items-center text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full"
              >
                <Tag className="h-3 w-3 mr-1" />
                {category}
              </span>
            ))}
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
