import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onBackToOfficeSelection?: () => void;
}

export default function Navbar({ activePage, onNavigate, onBackToOfficeSelection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 w-full rounded-none ${
        isScrolled
          ? 'bg-white shadow-md border-b border-gray-100 py-2'
          : 'bg-navy text-white py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center justify-center focus:outline-none cursor-pointer h-[54px] overflow-visible"
        >
          <Logo light={!isScrolled} sizeMultiplier={isScrolled ? 1.2 : 1.7} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`relative py-1 font-sans text-base font-bold tracking-medium transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? activePage === item.id
                    ? 'text-gold'
                    : 'text-navy hover:text-gold'
                  : activePage === item.id
                    ? 'text-gold'
                    : 'text-gray-300 hover:text-gold'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button & Office Selection */}
        <div className="hidden md:flex items-center space-x-4">
          {onBackToOfficeSelection && (
            <button
              onClick={onBackToOfficeSelection}
              className={`flex items-center gap-1.5 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider rounded-none border transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? 'text-navy border-navy/20 hover:border-navy hover:bg-navy/5'
                  : 'text-gray-300 border-white/20 hover:text-white hover:border-white hover:bg-white/5'
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Back to Office Selection</span>
            </button>
          )}
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-200 border cursor-pointer bg-gold text-navy border-gold hover:bg-gold-light hover:border-gold-light"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy text-white border-t border-navy-light shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left py-3 px-4 font-sans text-base font-medium border-l-2 transition-all duration-200 cursor-pointer ${
                  activePage === item.id
                    ? 'border-gold text-gold bg-navy-light/40 font-semibold'
                    : 'border-transparent text-gray-300 hover:text-white hover:bg-navy-light/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            {onBackToOfficeSelection && (
              <div className="px-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBackToOfficeSelection();
                  }}
                  className="w-full py-3 bg-navy-light/40 border border-gold/30 text-gold font-sans text-xs font-semibold uppercase tracking-wider text-center rounded-none flex items-center justify-center gap-2 cursor-pointer hover:bg-navy-light/60 transition-all duration-200"
                >
                  <Globe className="h-4 w-4" />
                  <span>Back to Office Selection</span>
                </button>
              </div>
            )}
            <div className="pt-2 px-4">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 bg-gold text-navy font-sans text-xs font-semibold uppercase tracking-wider text-center rounded-none block cursor-pointer hover:bg-gold-light transition-all duration-200"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
