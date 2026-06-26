import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';
import DualWavingFlags from '../components/DualWavingFlags';
import { Service, Testimonial } from '../types';
import { ShieldCheck, Scale, Zap, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import homeHeroBg from '../assets/images/home_hero_bg_1782477244088.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // 6 SRA Immigrations Categories
  const services: Service[] = [
    {
      id: 'work-corporate',
      title: 'Work & Corporate Visas',
      description: 'Specialist advice on Skilled Worker, Global Talent, Senior/Specialist Worker, and Innovator Founder visa routes to the UK.',
      iconName: 'Briefcase',
      subServices: ['Skilled Worker Visa', 'Global Talent Visa', 'Intra-Company Transfers', 'Innovator Founder'],
    },
    {
      id: 'spouse-family',
      title: 'Spouse & Family Visas',
      description: 'Unifying loved ones with comprehensive support for spouse, civil partner, fiancé, and dependent family visa applications.',
      iconName: 'Users',
      subServices: ['Spouse Visa', 'Fiancé Visa', 'Adult Dependent Relative', 'Unmarried Partner Visa'],
    },
    {
      id: 'ilr',
      title: 'Indefinite Leave to Remain',
      description: 'Securing permanent residency for those qualifying under the 5-year work, 10-year long residence, or family settlement paths.',
      iconName: 'ShieldCheck',
      subServices: ['5-Year Work Settlement', '10-Year Long Residence', 'Family Settlement ILR', 'BRP Refusal Appeals'],
    },
    {
      id: 'citizenship',
      title: 'British Citizenship',
      description: 'Guiding you through the final step of naturalisation or registration to acquire a British passport and full citizenship.',
      iconName: 'Award',
      subServices: ['Naturalisation by Residency', 'Registration as British Citizen', 'Dual Citizenship Queries', 'Passport Applications'],
    },
    {
      id: 'sponsor-licence',
      title: 'Sponsor Licences',
      description: 'Helping UK employers secure and manage SRA-compliant Sponsor Licences to hire skilled international talent legally.',
      iconName: 'Building',
      subServices: ['Licence Application Support', 'Sponsorship Management System', 'Key Personnel Training', 'Compliance Audit Mocking'],
    },
    {
      id: 'appeals-judicial',
      title: 'Appeals & Judicial Review',
      description: 'Robust legal representation and advocacy for challenging Home Office visa refusals, administrative reviews, and appeals.',
      iconName: 'Scale',
      subServices: ['Administrative Review', 'First-tier Tribunal Appeals', 'Upper Tribunal Advocacy', 'Judicial Review Pre-action'],
    },
  ];

  // 3 Testimonials
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Elena Rostova',
      initials: 'ER',
      visaType: 'Skilled Worker Visa',
      quote: 'Uhalegal turned what seemed like a chaotic visa application process into a transparent, step-by-step roadmap. Their expertise was invaluable in securing my senior engineering role in London.',
    },
    {
      id: '2',
      name: 'Marcus Sterling',
      initials: 'MS',
      visaType: 'Sponsor Licence',
      quote: 'Our firm needed to sponsor senior staff urgently. The compliance counsel from Uhalegal was exceptional — our Sponsor Licence was approved in record time without a single requisition.',
    },
    {
      id: '3',
      name: 'Amina & Liam Patel',
      initials: 'AP',
      visaType: 'Spouse Visa Settlement',
      quote: 'Exceptional, compassionate, and highly professional. They guided us through the complex financial documentation required for the Spouse Visa and stayed with us until ILR approval.',
    },
  ];

  return (
    <div id="home-page" className="flex-grow">
      {/* Hero */}
      <HeroSection onNavigate={onNavigate} />

      {/* Services Overview Section */}
      <section className="py-20 md:py-28 bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              What We Do
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              Comprehensive Immigration Solutions
            </h2>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                onNavigate={onNavigate}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              Why Global Clients Choose Uhalegal
            </h2>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Value 1: Regulated Experts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 flex flex-col items-center bg-cream/30 border border-transparent hover:border-gold/10 hover:bg-cream/60 transition-all duration-300"
            >
              <div className="h-16 w-16 bg-navy/5 text-navy rounded-none flex items-center justify-center mb-6 border border-navy/10 group hover:bg-navy hover:text-white transition-all duration-300">
                <ShieldCheck className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-3">
                Regulated Experts
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xs">
                SRA-regulated solicitors providing legally sound guidance fully compliant with latest Home Office revisions.
              </p>
            </motion.div>

            {/* Value 2: Transparent Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 flex flex-col items-center bg-cream/30 border border-transparent hover:border-gold/10 hover:bg-cream/60 transition-all duration-300"
            >
              <div className="h-16 w-16 bg-navy/5 text-navy rounded-none flex items-center justify-center mb-6 border border-navy/10 group hover:bg-navy hover:text-white transition-all duration-300">
                <Scale className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-3">
                Transparent Fees
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xs">
                Complete clarity from day one. Fixed professional fees with no hidden costs or surprising administration surcharges.
              </p>
            </motion.div>

            {/* Value 3: Fast Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 flex flex-col items-center bg-cream/30 border border-transparent hover:border-gold/10 hover:bg-cream/60 transition-all duration-300"
            >
              <div className="h-16 w-16 bg-navy/5 text-navy rounded-none flex items-center justify-center mb-6 border border-navy/10 group hover:bg-navy hover:text-white transition-all duration-300">
                <Zap className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-3">
                Fast Response
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xs">
                We respect your timeline. Prompt case review, status dashboards, and responsive communications guaranteed.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Dedicated Dual Presence Section (UK & Pakistan Corridor) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              Dual-Jurisdiction Excellence
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              UK & Pakistan Unified Legal Presence
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Operating a seamless corridor between London and Pakistan. We provide direct SRA-regulated legal advice with on-the-ground document experts on both ends.
            </p>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          {/* Premium Animated Flags Component */}
          <DualWavingFlags />

          {/* Detailed Dual Operations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 max-w-5xl mx-auto">
            
            {/* United Kingdom Presence Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-cream/40 border border-gray-200 p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-navy text-white flex items-center justify-center font-sans font-bold text-xs">
                    UK
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy">London Headquarters</h3>
                    <p className="font-sans text-[11px] text-gold uppercase tracking-wider font-bold">St. James's, SW1A</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                  Our main London practice drives high-stakes appeals, complex spouse visa filings, and represents corporate clients directly before the Home Office and immigration tribunals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Direct Home Office submissions & priority routing support</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>SRA-regulated solicitor representation before Tribunals</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Corporate Sponsor Licence compliance audits & mock checks</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-xs font-sans font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-1.5 text-gold" />
                <span>London SW1A, United Kingdom</span>
              </div>
            </motion.div>

            {/* Pakistan Presence Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-cream/40 border border-gray-200 p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-emerald-800 text-white flex items-center justify-center font-sans font-bold text-xs">
                    PK
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy">Pakistan Client Liaison</h3>
                    <p className="font-sans text-[11px] text-gold uppercase tracking-wider font-bold">Islamabad & Lahore Hubs</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                  Providing local, on-the-ground administrative and documentation support for applicants in Pakistan, ensuring absolute verification and perfect layout before UK dispatch.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Certified translation, notary, and local document verification</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Tuberculosis (TB) clinic and biometric booking coordination</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Secure end-to-end client communications and dossier preparation</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-xs font-sans font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-1.5 text-gold" />
                <span>Islamabad & Lahore, Pakistan</span>
              </div>
            </motion.div>

          </div>

          {/* Corridor description bottom bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-navy text-white p-8 md:p-10 border-l-4 border-l-gold relative overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy-light/30 pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h4 className="font-serif text-lg sm:text-xl font-medium text-white mb-2">Are you applying from Pakistan or relocating family?</h4>
              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connect with our dual offices. We eliminate cross-border friction, handle local document logistics, and route your visa file under official SRA supervision.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative z-10 w-full md:w-auto px-6 py-3 bg-gold hover:bg-white text-navy font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer flex-shrink-0 inline-flex items-center justify-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              Success Stories
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              What Our Clients Say
            </h2>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTABanner */}
      <CTABanner onNavigate={onNavigate} image={homeHeroBg} imageAlt="UK immigration" />
    </div>
  );
}
