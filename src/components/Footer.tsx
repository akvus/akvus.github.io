
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative bg-background border-t border-white/10">
      <div 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Port</span>folio
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Crafting exceptional digital experiences with a focus on design, functionality, and performance.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold mb-3">Navigation</h3>
            {['Home', 'Apps', 'Videos', 'Blog', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <Github size={20} />, href: 'https://github.com/akvus' },
                { icon: <Twitter size={20} />, href: 'https://x.com/akvus' },
                { icon: <Linkedin size={20} />, href: 'https://linkedin.com/maczaw/' },
                { icon: <Mail size={20} />, href: 'mailto:zawieja.mobile@gmail.com' },
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {year} Maciej Zawieja Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
