import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  key?: string;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      id={`testimonial-${testimonial.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white border border-gray-200 p-8 rounded-none relative flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
    >
      {/* Quote Icon Accent */}
      <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/10 pointer-events-none transition-transform duration-300 group-hover:scale-110 group-hover:text-gold/25" />

      {/* Quote Text */}
      <p className="font-serif italic text-base md:text-lg text-navy-light leading-relaxed mb-8 relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Client Meta Info Row */}
      <div className="flex items-center space-x-4">
        {/* Initials Avatar */}
        <div className="h-12 w-12 rounded-none bg-gold text-navy font-sans font-bold text-sm tracking-wide flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          {testimonial.initials}
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-navy leading-none mb-1">
            {testimonial.name}
          </h4>
          <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-wider text-gold-muted bg-cream px-2 py-1 border border-gold/10">
            {testimonial.visaType}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
