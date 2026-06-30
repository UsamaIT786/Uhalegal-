import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import homeHeroBg from '../assets/images/home_hero_bg_1782477244088.jpg';
import aboutHeroBg from '../assets/images/about_hero_bg_1782477291964.jpg';
import servicesHeroBg from '../assets/images/services_hero_bg_1782477267231.jpg';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
  region: 'UK' | 'PK';
}

export default function HeroSection({ onNavigate, region }: HeroSectionProps) {
  const slides = region === 'PK' ? [
    {
      id: 0,
      image: homeHeroBg,
      tag: "Immigration Firm for Pakistan",
      title: "UK Immigration from Pakistan. Expert Representation.",
      desc: "Direct UK legal advice and local document verification from our Lahore hub to ensure a refusal-free visa application.",
    },
    {
      id: 1,
      image: aboutHeroBg,
      tag: "UK Spouse, Family & Settlement Visas",
      title: "Spouse & Family Visas from Pakistan.",
      desc: "Reuniting families with complete document verification and financial audit support to satisfy strict Home Office spouse visa entry clearance requirements.",
    },
    {
      id: 2,
      image: servicesHeroBg,
      tag: "Sponsor Licences & Global Talent",
      title: "Work & Relocation Pathways to the UK.",
      desc: "Detailed guidance for high-value workers, tech leaders, and corporate sponsors under expert legal supervision.",
    }
  ] : [
    {
      id: 0,
      image: homeHeroBg,
      tag: "",
      title: "Expert Immigration Law. Simplified.",
      desc: "Providing precise pathways and elite representation for individual, family, and corporate visa matters across the United Kingdom.",
    },
    {
      id: 1,
      image: aboutHeroBg,
      tag: "United Kingdom Visa Settlement Specialist",
      title: "Spouse, Family & Settlement Visas.",
      desc: "Unifying loved ones with precise guidance and absolute compliance. Expert support for complex spouse visa routes and Indefinite Leave to Remain (ILR).",
    },
    {
      id: 2,
      image: servicesHeroBg,
      tag: "Premium Sponsor Licences & HR Compliance",
      title: "Global Corporate & Business Mobility.",
      desc: "Helping UK employers secure and manage compliant Sponsor Licences to recruit elite global talent and navigate corporate regulations seamlessly.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000); // 9 seconds slide duration
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen text-white flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 rounded-none"
    >
      {/* Static Background Image with subtle continuous scaling for a premium feel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={homeHeroBg}
          alt="Uhalegal Head Office"
          initial={{ scale: 1.03 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 20.0, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full object-cover"
        />
        {/* Transparent overlay for text legibility while keeping background clearly visible */}
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        
        {/* Animated tag with layout transition */}
        <div className="h-6 mb-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={`tag-${currentIndex}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gold font-sans text-xs md:text-sm font-bold tracking-widest uppercase block"
            >
              {slides[currentIndex].tag}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Big Serif Heading with smooth fade-in/out transition */}
        <div className="h-auto min-h-[90px] sm:min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-6 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight"
            >
              {slides[currentIndex].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Animated slide description */}
        <div className="h-[65px] sm:h-[55px] mb-8 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-sans text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl text-center px-4"
            >
              {slides[currentIndex].desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-sans text-xs font-bold uppercase tracking-widest rounded-none border border-gold hover:bg-white hover:text-navy hover:border-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold/20"
          >
            Book Free Consultation
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-sans text-xs font-bold uppercase tracking-widest rounded-none border border-white/40 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
          >
            Our Services
          </button>
        </div>

        {/* Slide Indicators / Dots */}
        <div className="flex items-center space-x-3 mb-10">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(slide.id)}
              className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                currentIndex === slide.id ? 'w-8 bg-gold' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${slide.id + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-8 w-full max-w-3xl">
          <div className="grid grid-cols-2 gap-2 sm:gap-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center space-x-1.5 sm:space-x-3 text-white/90">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-sm font-semibold tracking-wide">Confidential</span>
            </div>
            <div className="flex items-center justify-center space-x-1.5 sm:space-x-3 text-white/90">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-sm font-semibold tracking-wide">Fixed Fees</span>
            </div>
          </div>
        </div>

      </div>

      {/* Manual Slide Controls - Left / Right Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 border border-white/20 hover:border-gold hover:text-gold bg-navy/30 hover:bg-navy/80 text-white/70 hover:text-white flex items-center justify-center rounded-none transition-all duration-300 hidden md:flex cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 border border-white/20 hover:border-gold hover:text-gold bg-navy/30 hover:bg-navy/80 text-white/70 hover:text-white flex items-center justify-center rounded-none transition-all duration-300 hidden md:flex cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
