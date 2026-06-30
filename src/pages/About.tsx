import CTABanner from '../components/CTABanner';
import { ChevronRight } from 'lucide-react';
import { TeamMember, ValueCardProps } from '../types';
import { motion } from 'motion/react';

import aboutHeroBg from '../assets/images/about_hero_bg_1782477291964.jpg';
import aboutIntroImg from '../assets/images/about_intro_img_1782477331142.jpg';

interface AboutProps {
  onNavigate: (page: string) => void;
  region: 'UK' | 'PK';
}

export default function About({ onNavigate, region }: AboutProps) {
  const values: ValueCardProps[] = [
    {
      number: '01',
      title: 'Integrity',
      description: 'As regulated professionals, ethical conduct is our cornerstone. We present realistic assessments of success, establish absolute fee clarity from day one, and maintain total client confidentiality.',
    },
    {
      number: '02',
      title: 'Expertise',
      description: region === 'PK'
        ? 'Immigration law undergoes constant revisions. Our specialists dedicate substantial focus to auditing latest policy changes, ensuring our filings leverage modern precedents and maximum technical accuracy.'
        : 'UK immigration law undergoes constant revisions. Our specialists dedicate substantial focus to auditing Home Office changes, ensuring our filings leverage modern precedents and maximum technical accuracy.',
    },
    {
      number: '03',
      title: 'Clarity',
      description: 'We cut through stressful, dense legal jargon to deliver clear pathways. Our communications, reports, and instructions are simple, pragmatic, and designed to minimize anxiety for our clients.',
    }
  ];

  const team: TeamMember[] = [
    {
      name: 'Sarah Halstead, Esq.',
      role: 'Founding Partner & Senior Solicitor',
      initials: 'SH',
    },
    {
      name: 'Fariq Al-Mansoor',
      role: 'Senior Corporate Immigration Specialist',
      initials: 'FA',
    },
    {
      name: 'Eleanor Vance',
      role: 'Lead Family Settlement & Appeals Consultant',
      initials: 'EV',
    }
  ];

  return (
    <div id="about-page" className="flex-grow">
      {/* Page Hero & Breadcrumbs */}
      <section className="relative h-64 flex flex-col justify-center overflow-hidden rounded-none border-b border-gold/10">
        {/* Background Image at full opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroBg}
            alt="Majestic Law Library"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-navy/75 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3"
          >
            About Us
          </motion.h1>
          
          {/* Breadcrumb Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center space-x-2 font-sans text-xs font-semibold uppercase tracking-widest text-gray-400"
          >
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
            <span className="text-gold">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Grid (Left = Image, Right = Text) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Beautiful Solicitor Desk Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-80 border border-gray-200 relative overflow-hidden rounded-none shadow-lg group"
            >
              <img
                src={aboutIntroImg}
                alt={region === 'PK' ? "Uhalegal Established in Pakistan" : "Uhalegal Established Manchester, UK"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-serif text-2xl font-bold text-white tracking-wide mb-1 block">
                  Uhalegal
                </span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gold block">
                  {region === 'PK' ? "Established in Pakistan" : "Established Manchester, UK"}
                </span>
              </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
                {region === 'PK' ? "Dedicated Immigration Advocates" : "Dedicated UK Immigration Advocates"}
              </h2>
              <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                {region === 'PK' 
                  ? "Founded with a mission to simplify the complex landscape of immigration law, Uhalegal represents a standard of modern, direct, and results-driven legal advocacy. We specialize solely in immigration, allowing our legal scholars to possess unmatched depth in corporate sponsorship, family resettlement, and citizenship criteria."
                  : "Founded with a mission to simplify the complex landscape of UK immigration law, Uhalegal represents a standard of modern, direct, and results-driven legal advocacy. We specialize solely in immigration, allowing our legal scholars to possess unmatched depth in corporate sponsorship, family resettlement, and citizenship criteria."}
              </p>
              <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                We act as strategic partners to corporate clients seeking global talent, and caring guides for individuals reuniting with families. Our regulated status guarantees total regulatory accountability and adherence to the highest standards of professional ethics in the legal industry.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section: 3 cards with gold numbers */}
      <section className="py-20 md:py-24 bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              How We Work
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              Our Core Principles
            </h2>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className="bg-white border border-gray-200 p-8 rounded-none transition-all duration-300 hover:shadow-xl relative group hover:border-gold"
              >
                {/* Gold Number */}
                <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-4 group-hover:translate-x-1 transition-transform duration-200">
                  {v.number}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy mb-3">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section: 3 cards with initials div */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-3">
              Experts
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy">
              Meet Our Specialist Team
            </h2>
            <div className="h-[2px] w-12 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className="border border-gray-200 p-8 rounded-none text-center flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300 bg-cream group hover:border-gold/30"
              >
                <div className="flex flex-col items-center">
                  {/* Circular initials div */}
                  <div className="bg-navy text-gold rounded-full w-20 h-20 flex items-center justify-center font-sans font-bold text-xl tracking-wide shadow-md border-2 border-gold/20 mb-6 select-none transition-transform duration-300 group-hover:scale-105">
                    {member.initials}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-gold-muted font-bold uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                </div>
                <p className="font-sans text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-200/60 w-full">
                  Specialist practitioner regulated under industry guidance. Dedicated to delivering bespoke case management.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Reusable CTABanner */}
      <CTABanner onNavigate={onNavigate} image={aboutIntroImg} imageAlt="About Uhalegal" region={region} />
    </div>
  );
}
