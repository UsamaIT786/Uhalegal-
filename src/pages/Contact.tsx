import ContactForm from '../components/ContactForm';
import { ChevronRight, MapPin, Mail, Phone, Calendar, ShieldAlert } from 'lucide-react';
import contactHeroBg from '../assets/images/contact_hero_bg_1782477311980.jpg';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div id="contact-page" className="flex-grow">
      {/* Page Hero & Breadcrumbs */}
      <section className="relative h-64 flex flex-col justify-center overflow-hidden rounded-none border-b border-gold/10">
        {/* Background Image at full opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroBg}
            alt="Uhalegal Office Reception"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-navy/75 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Contact Us
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 font-sans text-xs font-semibold uppercase tracking-widest text-gray-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
            <span className="text-gold">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            
            {/* Left Column - Contact Info: bg-navy/5 p-8 wrapper block */}
            <div className="lg:col-span-5 bg-navy/5 p-8 md:p-10 border border-navy/10 rounded-none space-y-8 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-2">
                    Inquiries
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
                    Get in Touch
                  </h2>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed mt-2">
                    Our specialist consultants are ready to audit your immigration goals. Choose a communication channel below or submit an inquiry form.
                  </p>
                </div>

                {/* Info List */}
                <div className="space-y-6 pt-4">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 bg-navy text-gold rounded-none flex items-center justify-center flex-shrink-0 border border-gold/20 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        London Office
                      </h4>
                      <p className="font-sans text-sm text-gray-500 leading-relaxed">
                        100 Pall Mall, St. James's,<br />
                        London SW1Y 5NQ, United Kingdom
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 bg-navy text-gold rounded-none flex items-center justify-center flex-shrink-0 border border-gold/20 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Email Address
                      </h4>
                      <a
                        href="mailto:info@uhalegal.co.uk"
                        className="font-sans text-sm text-gray-500 hover:text-gold transition-colors duration-200"
                      >
                        info@uhalegal.co.uk
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 bg-navy text-gold rounded-none flex items-center justify-center flex-shrink-0 border border-gold/20 shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Call Our Advisors
                      </h4>
                      <a
                        href="tel:+442079460192"
                        className="font-sans text-sm text-gray-500 hover:text-gold transition-colors duration-200 block"
                      >
                        +44 (0) 20 7946 0192
                      </a>
                      <span className="font-sans text-[10px] text-gray-400 block mt-0.5">
                        Mon - Fri, 9:00 AM - 5:30 PM GMT
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice & Social Links (Text Only) */}
              <div className="pt-8 border-t border-navy/10 space-y-6">
                <div className="flex items-start space-x-3 text-xs text-gray-400 bg-navy/5 p-4 border border-navy/5">
                  <ShieldAlert className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Regulatory Notice:</strong> Uhalegal is a firm of registered practitioners regulated under SRA guidance. Professional liability insurance details are inspectable upon request.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Professional Networks
                  </h4>
                  <div className="flex space-x-4 font-sans text-xs text-gold-muted font-semibold tracking-wider">
                    <span className="hover:text-navy cursor-pointer transition-colors duration-200">LINKEDIN</span>
                    <span className="text-navy/10">|</span>
                    <span className="hover:text-navy cursor-pointer transition-colors duration-200">X (TWITTER)</span>
                    <span className="text-navy/10">|</span>
                    <span className="hover:text-navy cursor-pointer transition-colors duration-200">LEGAL500</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - ContactForm Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* Map placeholder: bg-navy/10 h-64 flex items-center justify-center — "London, United Kingdom" */}
      <section id="map-section" className="relative w-full h-80 bg-navy/10 border-t border-b border-navy/10 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
        {/* Subtle decorative grid background for map vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,46,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-navy text-gold flex items-center justify-center mb-4 border border-gold/30 shadow-md">
            <MapPin className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-navy mb-1">
            London Office Location
          </h3>
          <p className="font-sans text-sm font-medium text-gold-muted mb-4 uppercase tracking-wider">
            London, United Kingdom
          </p>
          <p className="font-sans text-xs text-gray-500 max-w-sm leading-relaxed">
            Conveniently located in St. James's, SW1Y. Near Green Park and Piccadilly Circus underground stations. Private client parking available by arrangement.
          </p>
        </div>
      </section>
    </div>
  );
}
