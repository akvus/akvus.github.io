
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg',
        isScrolled ? 'bg-white/10 border-b border-white/10 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Maciej Zawieja</span> Portfolio
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Apps', 'Videos', 'Blog', 'Contact'].map((item) => (
              <NavLink 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => cn(
                  'text-sm font-medium transition-colors hover:text-primary subtle-underline',
                  isActive ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-white/5 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-transform ease-in-out duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="pt-20 pb-4 px-4 space-y-1">
          {['Home', 'Apps', 'Videos', 'Blog', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) => cn(
                'block px-3 py-4 text-base font-medium rounded-md transition-colors',
                isActive ? 'text-primary' : 'text-foreground/80 hover:bg-white/5'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
