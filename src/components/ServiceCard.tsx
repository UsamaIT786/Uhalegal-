import { ArrowRight, Briefcase, ShieldCheck, Award, Users, Building, Scale } from 'lucide-react';
import { Service } from '../types';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: Service;
  onNavigate: (page: string) => void;
  key?: string;
  index?: number;
}

export default function ServiceCard({ service, onNavigate, index = 0 }: ServiceCardProps) {
  // Dynamically resolve lucide icons
  const renderIcon = (name: string) => {
    const iconProps = { className: "h-8 w-8 text-gold flex-shrink-0 mb-4 transition-transform duration-300 group-hover:scale-110" };
    switch (name) {
      case 'Briefcase':
        return <Briefcase {...iconProps} />;
      case 'ShieldCheck':
        return <ShieldCheck {...iconProps} />;
      case 'Award':
        return <Award {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Building':
        return <Building {...iconProps} />;
      case 'Scale':
      default:
        return <Scale {...iconProps} />;
    }
  };

  return (
    <motion.div
      id={`service-card-${service.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className="bg-white border border-gray-200 p-8 rounded-none flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-l-4 hover:border-l-gold group cursor-pointer"
      onClick={() => {
        onNavigate('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div>
        {renderIcon(service.iconName)}
        <h3 className="font-serif text-2xl font-semibold text-navy mb-3 group-hover:text-gold-muted transition-colors duration-200">
          {service.title}
        </h3>
        <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold transition-colors duration-200 cursor-pointer self-start group/btn"
      >
        <span className="relative">
          Learn More
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover/btn:w-full" />
        </span>
        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
      </button>
    </motion.div>
  );
}
