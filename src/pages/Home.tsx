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
  region: 'UK' | 'PK';
}

export default function Home({ onNavigate, region }: HomeProps) {
  // 6 Immigration Categories tailored by region
  const services: Service[] = region === 'PK' ? [
    {
      id: 'visit-visas',
      title: 'Visit Visas',
      description: 'Comprehensive guidance for Pakistan citizens applying for UK Standard Visitor, Business Visitor, or Family Visitor visas with high success rates.',
      iconName: 'Compass',
      subServices: ['UK Visitor Visa from Pakistan', 'Business & Corporate Visitor', 'Family Visit & Sponsor Letters', 'Refusal Appraisals & Reapplications'],
    },
    {
      id: 'skilled-worker',
      title: 'Skilled Worker Visas',
      description: 'Complete support for professionals in Pakistan applying for Skilled Worker visas, Global Talent, and Health and Care visas to relocate to the UK.',
      iconName: 'Briefcase',
      subServices: ['Skilled Worker Visa (CoS)', 'Global Talent Route', 'Health and Care Worker Visa', 'Relocation & Visa Dossier Check'],
    },
    {
      id: 'spouse-family',
      title: 'Spouse and Family Visas',
      description: 'Helping spouses and family members in Pakistan successfully join their sponsors in the UK, satisfying all financial and language thresholds.',
      iconName: 'Users',
      subServices: ['Spouse Visa from Pakistan', 'Fiancé(e) Entry Clearance', 'Unmarried Partner Applications', 'English Test & Financial Audits'],
    },
    {
      id: 'ilr-citizenship',
      title: 'Indefinite Leave to Remain and Citizenship',
      description: 'Strategic planning and guidance for Pakistan expats in the UK seeking permanent residency (ILR) and British citizenship/naturalisation.',
      iconName: 'ShieldCheck',
      subServices: ['5-Year Work Settlement (ILR)', '10-Year Long Residence Pathway', 'British Citizenship Registration', 'First British Passport Support'],
    },
    {
      id: 'sponsor-license',
      title: 'Sponsor Licenses',
      description: 'Assisting Pakistan-owned and global businesses in securing compliant UK Sponsor Licenses to sponsor and hire international talent.',
      iconName: 'Building',
      subServices: ['Sponsor License Application', 'SMS Portal Compliance Support', 'Mock Audits & Key Personnel', 'Sponsorship Management training'],
    },
    {
      id: 'appeals-judicial',
      title: 'Appeals & Judicial Review',
      description: 'Representing applicants in Pakistan to challenge Home Office refusals, administrative reviews, and appeals before UK immigration tribunals.',
      iconName: 'Scale',
      subServices: ['Administrative Review (Out-of-Country)', 'First-tier Tribunal Appeals', 'Pre-Action Protocol Letters', 'Judicial Review Representation'],
    },
  ] : [
    {
      id: 'visit-visas',
      title: 'Visit Visas',
      description: 'Expert legal assistance for Standard Visitor, Business, and Family visits to the UK. We ensure high-fidelity documentation to avoid refusal.',
      iconName: 'Compass',
      subServices: ['Standard Visitor Visas', 'Business Visitor Visas', 'Family Visitor Visas', 'Permitted Paid Engagements'],
    },
    {
      id: 'skilled-worker',
      title: 'Skilled Worker Visas',
      description: 'Comprehensive support for UK employers and foreign workers on Skilled Worker visas, Global Talent pathways, and work visa routes.',
      iconName: 'Briefcase',
      subServices: ['Skilled Worker & Health & Care', 'Global Talent & Exceptional Promise', 'Scale-up & High Potential Individual', 'Innovator Founder Visa'],
    },
    {
      id: 'spouse-family',
      title: 'Spouse and Family Visas',
      description: 'Reuniting families with complete legal assistance for UK Spouse visas, fiancé(e)s, unmarried partners, and dependent children.',
      iconName: 'Users',
      subServices: ['Spouse & Partner Clearance', 'Fiancé Entry Clearance', 'Unmarried Partner Cohabitation', 'Adult Dependent Relative'],
    },
    {
      id: 'ilr-citizenship',
      title: 'Indefinite Leave to Remain and Citizenship',
      description: 'Securing your permanent residency (ILR) in the UK under 5-year work/family paths, 10-year residence, and naturalisation for British citizenship.',
      iconName: 'ShieldCheck',
      subServices: ['5-Year Work Settlement (ILR)', '10-Year Long Residence', 'British Citizenship Naturalisation', 'First British Passport Application'],
    },
    {
      id: 'sponsor-license',
      title: 'Sponsor Licenses',
      description: 'Helping UK businesses apply for, manage, and defend their Sponsor Licenses to recruit skilled international workers legally.',
      iconName: 'Building',
      subServices: ['Initial Sponsor License Application', 'Sponsor Management System (SMS)', 'Key Personnel Training', 'Compliance Audits & Defence'],
    },
    {
      id: 'appeals-judicial',
      title: 'Appeals & Judicial Review',
      description: 'Expert litigation services for challenging Home Office refusals, administrative reviews, tribunal appeals, and Judicial Review actions.',
      iconName: 'Scale',
      subServices: ['Administrative Review Actions', 'First-tier & Upper Tribunal Appeals', 'Pre-action Protocols', 'Judicial Review Litigation'],
    },
  ];

  // 3 Testimonials
  // TODO: Flag for client approval before publishing final names
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Zainab Ahmed',
      initials: 'ZA',
      visaType: 'Skilled Worker Visa',
      quote: 'Uhalegal turned what seemed like a chaotic visa application process into a transparent, step-by-step roadmap. Their expertise was invaluable in securing my senior engineering role in Manchester.',
    },
    {
      id: '2',
      name: 'M. Ali Khan',
      initials: 'MK',
      visaType: 'Sponsor Licence',
      quote: 'Our firm needed to sponsor senior staff urgently. The compliance counsel from Uhalegal was exceptional — our Sponsor Licence was approved in record time without a single requisition.',
    },
    {
      id: '3',
      name: 'Hamza Malik',
      initials: 'HM',
      visaType: 'Spouse Visa Settlement',
      quote: 'Exceptional, compassionate, and highly professional. They guided us through the complex financial documentation required for the Spouse Visa and stayed with us until ILR approval.',
    },
  ];

  return (
    <div id="home-page" className="flex-grow">
      {/* Hero */}
      <HeroSection onNavigate={onNavigate} region={region} />

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
                Regulated experts providing legally sound guidance fully compliant with latest Home Office revisions.
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

      {/* Dedicated Presence Section (dynamically scoped by region) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              Global Presence
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              Our Global Offices
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Operating our main legal practice in Manchester and a dedicated client support office in Lahore, providing comprehensive representation and administrative oversight.
            </p>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          {/* Premium Animated Flags Component */}
          <DualWavingFlags region={region} />

          {/* Detailed Operations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            {/* Card 1: Manchester Office */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-cream/40 border border-gray-200 p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group rounded-none"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-navy text-white flex items-center justify-center font-sans font-bold text-xs">
                    UK
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy">Manchester Office</h3>
                    <p className="font-sans text-[11px] text-gold uppercase tracking-wider font-bold">Cheetham Hill</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                  Cheetham Hill. Our main Manchester practice drives high-stakes appeals, complex spouse visa filings, and represents corporate clients directly before the Home Office and immigration tribunals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Direct Home Office submissions & priority routing support</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Representation before Tribunals</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Corporate Sponsor Licence compliance audits & mock checks</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-xs font-sans font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-1.5 text-gold" />
                <span>Manchester, United Kingdom</span>
              </div>
            </motion.div>

            {/* Card 2: Lahore Office */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-cream/40 border border-gray-200 p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group rounded-none"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-10 bg-emerald-800 text-white flex items-center justify-center font-sans font-bold text-xs">
                    PK
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy">Lahore Office</h3>
                    <p className="font-sans text-[11px] text-gold uppercase tracking-wider font-bold">Gulberg</p>
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
                    <span>Biometric booking coordination and in person consultation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-xs font-sans text-gray-600">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Secure end-to-end client communications and dossier preparation</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-xs font-sans font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-1.5 text-gold" />
                <span>Lahore, Pakistan</span>
              </div>
            </motion.div>
          </div>

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
      <CTABanner onNavigate={onNavigate} image={homeHeroBg} imageAlt={region === 'PK' ? "Immigration services" : "UK immigration"} region={region} />
    </div>
  );
}
