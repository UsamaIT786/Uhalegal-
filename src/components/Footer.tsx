import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-navy text-white border-t-2 border-gold rounded-none mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Logo & Brand Tagline (4 cols on desktop) */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-start justify-start focus:outline-none cursor-pointer"
            >
              <Logo light={true} sizeMultiplier={1.0} className="!items-start" />
            </button>
            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm">
              Providing premium, precise legal counsel for UK immigration. We navigate the complexities of corporate, family, and citizenship visa laws to deliver seamless client success.
            </p>
            <div className="pt-2 text-xs text-gold font-sans font-medium uppercase tracking-wider">
              SRA Regulated · Certified Specialists
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols on desktop) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-gold border-b border-navy-light pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 font-sans text-sm text-gray-300">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols on desktop) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-gold border-b border-navy-light pb-2">
              Services
            </h3>
            <ul className="space-y-2 font-sans text-sm text-gray-300">
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Work & Corporate Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Indefinite Leave to Remain (ILR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  British Citizenship
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Spouse & Family Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold transition-colors duration-200 cursor-pointer text-left block"
                >
                  Sponsor Licence Applications
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols on desktop) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-gold border-b border-navy-light pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3 font-sans text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <span>100 Pall Mall, St. James's, London SW1Y 5NQ, UK</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="tel:+442079460192" className="hover:text-gold transition-colors duration-200">
                  +44 (0) 20 7946 0192
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="mailto:info@uhalegal.co.uk" className="hover:text-gold transition-colors duration-200">
                  info@uhalegal.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-400">
            &copy; {currentYear} Uhalegal. All rights reserved.
          </p>
          <div className="flex space-x-6 font-sans text-xs text-gray-400">
            <button
              onClick={() => handleLinkClick('about')}
              className="hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-navy-light">|</span>
            <button
              onClick={() => handleLinkClick('contact')}
              className="hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
