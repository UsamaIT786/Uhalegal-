import CTABanner from '../components/CTABanner';
import { Service } from '../types';
import { ChevronRight } from 'lucide-react';

import servicesHeroBg from '../assets/images/services_hero_bg_1782477267231.jpg';
import serviceCorpVisas from '../assets/images/service_corp_visas_1782477355410.jpg';
import serviceFamilyVisas from '../assets/images/service_family_visas_1782477378736.jpg';
import serviceAppealsLaw from '../assets/images/service_appeals_law_1782477400256.jpg';
import serviceIlrResidence from '../assets/images/service_ilr_residence_1782478267420.jpg';
import serviceBritishCitizenship from '../assets/images/service_british_citizenship_1782478290596.jpg';
import serviceSponsorLicence from '../assets/images/service_sponsor_licence_1782478308203.jpg';
import { motion } from 'motion/react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services: Service[] = [
    {
      id: 'work-corporate',
      title: 'Work & Corporate Visas',
      description: 'The UK corporate immigration system can be notoriously challenging for employers and skilled workers alike. Our specialist corporate team works hand-in-hand with multi-national firms and solo founders, providing complete assistance on Skilled Worker visas, Global Talent pathways, Intra-Company transfers, and Innovator visas. We cover compliance checklists, fast-track processing options, and comprehensive advisory services.',
      iconName: 'Briefcase',
      subServices: [
        'Skilled Worker & Health & Care Visas',
        'Global Talent & Exceptional Promise Routes',
        'Scale-up & High Potential Individual Visas',
        'Innovator Founder & Expansion Worker routes'
      ]
    },
    {
      id: 'spouse-family',
      title: 'Spouse & Family Visas',
      description: 'Rejoining or settling with your family members in the UK requires satisfying complex and shifting financial, housing, and English language thresholds. We offer precise guidance on Spouse Visa applications, Unmarried Partner approvals, Fiancé entries, and Adult Dependent Relative matters. Our focus is ensuring your proof and documentation are compiled meticulously to satisfy entry criteria on the first attempt.',
      iconName: 'Users',
      subServices: [
        'Spouse & Civil Partner Entry Clearance',
        'Unmarried Partner & Cohabitation pathways',
        'Fiancé & Proposed Civil Partner entries',
        'Adult Dependent Relatives & Child Visas'
      ]
    },
    {
      id: 'ilr',
      title: 'Indefinite Leave to Remain (ILR)',
      description: 'Achieving permanent residency in the UK (Settlement) is a critical milestone on the path to full citizenship. We guide clients through the intricate process of submitting successful Indefinite Leave to Remain (ILR) applications. Whether you are applying under the 5-year corporate work path, the family/partner settlement track, or the 10-year long residence continuous service path, we audit your continuous presence requirements thoroughly.',
      iconName: 'ShieldCheck',
      subServices: [
        '5-Year Work Settlement (Skilled Worker/Global Talent)',
        '10-Year Long Residence Continuous Presence path',
        'Family & Partner settlement routes',
        'Absence threshold auditing & continuous stay waivers'
      ]
    },
    {
      id: 'citizenship',
      title: 'British Citizenship & Passports',
      description: 'The final step of your relocation journey is securing British Citizenship and naturalisation. We handle complete citizenship registrations for adults and children, reviewing good character requirements, residence absences, and proof of passing the Life in the UK and English language components. We coordinate with local councils and handle post-approval passport applications.',
      iconName: 'Award',
      subServices: [
        'Naturalisation as a British Citizen (Adults)',
        'Registration of Minor Children as British Citizens',
        'Dual Nationality & Crown Service advice',
        'First-time British Passport applications'
      ]
    },
    {
      id: 'sponsor-licence',
      title: 'Sponsor Licence Applications',
      description: 'To legally hire international staff, UK businesses must secure and maintain an active Sponsor Licence from the Home Office. We help brands of all sizes apply for, manage, and defend their sponsor licences. We provide mock audits to prepare your internal team for Home Office visits, train key personnel on the Sponsor Management System (SMS), and offer continuous compliance guidance.',
      iconName: 'Building',
      subServices: [
        'Initial Sponsor Licence applications & supporting evidence',
        'Sponsorship Management System (SMS) ongoing maintenance',
        'Key Personnel training & compliance mock-audits',
        'Licence suspension defence & civil penalty appeals'
      ]
    },
    {
      id: 'appeals-judicial',
      title: 'Immigration Appeals & Refusals',
      description: 'Receiving a Home Office refusal is stressful and time-sensitive. Our experienced litigation lawyers provide urgent assessments of refusal letters. We represent you during Administrative Reviews, Appeals at the First-tier and Upper-tier Tribunals, and handle Judicial Review pre-action protocols. We build robust evidence bundles to challenge negative decisions successfully.',
      iconName: 'Scale',
      subServices: [
        'Refusal analysis & fast-track assessment of merit',
        'Administrative Reviews (In-country & Out-of-country)',
        'First-tier Tribunal representation & evidence bundling',
        'Pre-action Protocols & Judicial Review representation'
      ]
    }
  ];

  const serviceImages: Record<string, string> = {
    'work-corporate': serviceCorpVisas,
    'spouse-family': serviceFamilyVisas,
    'ilr': serviceIlrResidence,
    'citizenship': serviceBritishCitizenship,
    'sponsor-licence': serviceSponsorLicence,
    'appeals-judicial': serviceAppealsLaw,
  };

  return (
    <div id="services-page" className="flex-grow">
      {/* Page Hero & Breadcrumbs */}
      <section className="relative h-64 flex flex-col justify-center overflow-hidden rounded-none border-b border-gold/10">
        {/* Background Image at full opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="Corporate Immigration Boardroom"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-navy/75 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent pointer-events-none" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Our Services
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
            <span className="text-gold">Services</span>
          </div>
        </div>
      </section>

      {/* Alternating Services Layout */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24 md:space-y-36">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  id={`service-detail-${service.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col gap-10 md:gap-16 items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Service Image (Full Opacity) */}
                  <div className="w-full md:w-1/2 h-80 relative overflow-hidden rounded-none border border-gray-200 shadow-md group">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="font-serif text-5xl font-semibold text-white/95 tracking-tight select-none opacity-90">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block">
                      Category 0{index + 1}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
                      {service.title}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sub-services list (gold dots) */}
                    <div className="pt-2">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">
                        Key Areas of Representation:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.subServices.map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-start space-x-2 text-sm text-gray-500">
                            {/* Gold Bullet Dot */}
                            <span className="h-2 w-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                            <span className="font-sans">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Link to Contact */}
                    <div className="pt-6 border-t border-gray-100">
                      <button
                        onClick={() => {
                          onNavigate('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-widest text-navy hover:text-gold transition-colors duration-200 cursor-pointer group/btn"
                      >
                        <span className="relative">
                          Enquire About This Service
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover/btn:w-full" />
                        </span>
                        <ChevronRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Reusable CTABanner */}
      <CTABanner onNavigate={onNavigate} image={servicesHeroBg} imageAlt="Immigration services" />
    </div>
  );
}
