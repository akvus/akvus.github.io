import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { blogData } from '@/data/blog';
import { Button } from '@/components/ui/button';
import AnimatedImage from '@/components/AnimatedImage';
import ReactMarkdown from 'react-markdown';

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
            <span className="text-sm text-muted-foreground">{post.publishedAt}</span>
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
        
        <article className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert prose-headings:font-bold max-w-full break-words">
          <div className="break-words">
            <ReactMarkdown
              components={{
                a: (props) => (
                  <a {...props} className="break-words" style={{ wordBreak: 'break-word' }} />
                ),
                code: (props) => (
                  <code {...props} className="break-words" style={{ wordBreak: 'break-word' }} />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
