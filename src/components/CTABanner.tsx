interface CTABannerProps {
  onNavigate: (page: string) => void;
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  region?: 'UK' | 'PK';
}

export default function CTABanner({ 
  onNavigate, 
  image, 
  imageAlt = "CTA background", 
  title, 
  description, 
  buttonText = "Book Your Free Consultation",
  region = 'UK'
}: CTABannerProps) {
  const handleAction = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultTitle = region === 'PK' 
    ? "Ready to Start Your Immigration Journey?" 
    : "Ready to Start Your UK Immigration Journey?";

  const defaultDesc = region === 'PK'
    ? "Contact our specialist immigration lawyers today. Let us simplify your application and secure your future."
    : "Contact our specialist immigration lawyers today. Let us simplify your application and secure your future in the UK.";

  const finalTitle = title !== undefined ? title : defaultTitle;
  const finalDesc = description !== undefined ? description : defaultDesc;

  return (
    <section
      id="cta-banner"
      className="bg-navy py-16 md:py-20 text-white relative overflow-hidden rounded-none border-t border-b border-gold/20 hero-diagonal"
    >
      {/* Background Image (if provided) */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light/40 to-navy pointer-events-none z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-gold mb-4">
          {finalTitle}
        </h2>
        <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          {finalDesc}
        </p>
        <button
          onClick={handleAction}
          className="px-8 py-4 bg-gold text-navy font-sans text-xs font-bold uppercase tracking-widest rounded-none border border-gold hover:bg-gold-light hover:border-gold-light transition-all duration-200 cursor-pointer shadow-lg inline-block"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
