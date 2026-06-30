import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedRegion, setSelectedRegion] = useState<'UK' | 'PK' | null>(null);
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const region = selectedRegion || 'UK';

  // Sync state with URL Path
  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
      const validPages = ['home', 'services', 'about', 'contact'];
      if (path && validPages.includes(path)) {
        setCurrentPage(path);
      } else if (path === '') {
        setCurrentPage('home');
      } else {
        // Fallback default
        setCurrentPage('home');
        window.history.replaceState(null, '', '/');
      }
    };

    // Initialize on first load
    handlePathChange();

    window.addEventListener('popstate', handlePathChange);
    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  // Set path route on navigation click
  const handleNavigate = (pageId: string) => {
    const path = pageId === 'home' ? '/' : `/${pageId}`;
    window.history.pushState(null, '', path);
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render correct subpage
  const renderPageContent = () => {
    switch (currentPage) {
      case 'services':
        return <Services onNavigate={handleNavigate} region={region} />;
      case 'about':
        return <About onNavigate={handleNavigate} region={region} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} region={region} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} region={region} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-gold selection:text-navy w-full">
      {/* Premium Preloader Overlay */}
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}

      {/* Region Selection Overlay Modal */}
      {selectedRegion === null && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-navy/98 backdrop-blur-xl animate-[fade-in_300ms_ease] p-4 flex flex-col items-center justify-start sm:justify-center">
          <div className="max-w-3xl w-full flex flex-col items-center justify-center my-auto py-8">
            {/* Logo */}
            <Logo light={true} sizeMultiplier={3.2} className="mb-8" showText={false} />
            
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white text-center mb-4 tracking-tight">
              Select Your Region
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed text-center mb-10 max-w-md">
              Welcome to Uhalegal. Please select your country to access customized legal resources and regional office support.
            </p>
            
            {/* Flag Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl px-4">
              
              {/* United Kingdom Selection Card */}
              <div
                onClick={() => setSelectedRegion('UK')}
                className="bg-navy-light/30 border border-gold/15 hover:border-gold/60 p-6 flex flex-col items-center justify-between transition-all duration-300 shadow-2xl hover:shadow-gold/5 cursor-pointer group hover:-translate-y-1 rounded-sm"
              >
                <div className="w-full flex flex-col items-center">
                  {/* Flag with Flagpole Container */}
                  <div className="flex items-start justify-center h-32 sm:h-36 mb-6 relative overflow-visible w-full select-none" style={{ perspective: "1000px" }}>
                    {/* Metallic Flagpole */}
                    <div className="relative w-[5px] h-32 sm:h-36 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 rounded-full shadow-inner flex-shrink-0 z-20">
                      {/* Ball Finial Cap */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-md border border-gold-light/40" />
                    </div>
                    
                    {/* Waving Flag Canvas */}
                    <div 
                      className="w-[180px] sm:w-[220px] h-[100px] sm:h-[120px] shadow-2xl border-t border-b border-r border-white/15 overflow-hidden relative select-none animate-[flagWave_5.5s_infinite_ease-in-out] origin-left z-10"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                        <rect width="60" height="30" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
                        <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" strokeWidth="2" />
                        <path d="M30,0 L30,30 M0,15 L60,15" stroke="#FFFFFF" strokeWidth="10" />
                        <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
                      </svg>
                      {/* Satin Sheen fabric wave */}
                      <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-35 bg-gradient-to-r from-black/20 via-transparent to-black/35 bg-[length:200%_100%] animate-[waveShadow_5.5s_infinite_linear]" />
                      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 bg-gradient-to-r from-transparent via-white/25 to-transparent bg-[length:200%_100%] animate-[waveShadow_5.5s_infinite_linear]" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300 text-center">
                    United Kingdom
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-gray-400 text-center leading-relaxed mt-2 max-w-[200px] group-hover:text-gray-300 transition-colors duration-300">
                    Access UK-specific legal counsel, sponsor compliance, and domestic visa services.
                  </p>
                </div>
                
                <span className="mt-8 px-4 py-2 border border-gold/30 group-hover:border-gold group-hover:bg-gold group-hover:text-navy text-gold font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300">
                  Select UK Version
                </span>
              </div>
              
              {/* Pakistan Selection Card */}
              <div
                onClick={() => setSelectedRegion('PK')}
                className="bg-navy-light/30 border border-gold/15 hover:border-gold/60 p-6 flex flex-col items-center justify-between transition-all duration-300 shadow-2xl hover:shadow-gold/5 cursor-pointer group hover:-translate-y-1 rounded-sm"
              >
                <div className="w-full flex flex-col items-center">
                  {/* Flag with Flagpole Container */}
                  <div className="flex items-start justify-center h-32 sm:h-36 mb-6 relative overflow-visible w-full select-none" style={{ perspective: "1000px" }}>
                    {/* Metallic Flagpole */}
                    <div className="relative w-[5px] h-32 sm:h-36 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 rounded-full shadow-inner flex-shrink-0 z-20">
                      {/* Ball Finial Cap */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-md border border-gold-light/40" />
                    </div>
                    
                    {/* Waving Flag Canvas */}
                    <div 
                      className="w-[180px] sm:w-[220px] h-[100px] sm:h-[120px] shadow-2xl border-t border-b border-r border-white/15 overflow-hidden relative select-none animate-[flagWave_6s_infinite_ease-in-out] origin-left z-10"
                      style={{ transformStyle: "preserve-3d", animationDelay: "-2s" }}
                    >
                      <svg viewBox="0 0 300 200" className="w-full h-full object-cover">
                        <rect width="300" height="200" fill="#01411C" />
                        <rect width="75" height="200" fill="#FFFFFF" />
                        <g transform="translate(187.5, 100)">
                          <path d="M 2.5,-37.5 A 41.5,41.5 0 1,0 41.5,22 A 33,33 0 1,1 2.5,-37.5" fill="#FFFFFF" />
                          <polygon points="0,-18 5,-4 19,-4 8,4 12,18 0,9 -12,18 -8,4 -19,-4 -5,-4" fill="#FFFFFF" transform="translate(14, -14) rotate(45)" />
                        </g>
                      </svg>
                      {/* Satin Sheen fabric wave */}
                      <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40 bg-gradient-to-r from-black/20 via-transparent to-black/35 bg-[length:200%_100%] animate-[waveShadow_6s_infinite_linear]" style={{ animationDelay: "-2s" }} />
                      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 bg-gradient-to-r from-transparent via-white/25 to-transparent bg-[length:200%_100%] animate-[waveShadow_6s_infinite_linear]" style={{ animationDelay: "-2s" }} />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300 text-center">
                    Pakistan
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-gray-400 text-center leading-relaxed mt-2 max-w-[200px] group-hover:text-gray-300 transition-colors duration-300">
                    Access PK-tailored immigration counsel, liaison services, and localized support.
                  </p>
                </div>
                
                <span className="mt-8 px-4 py-2 border border-gold/30 group-hover:border-gold group-hover:bg-gold group-hover:text-navy text-gold font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300">
                  Select PK Version
                </span>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* Sticky Top Bar */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onBackToOfficeSelection={() => setSelectedRegion(null)}
      />

      {/* Main Content Stage */}
      <main className="flex-grow flex flex-col w-full animate-fade-in">
        {renderPageContent()}
      </main>

      {/* Solid Bottom Footprint */}
      <Footer onNavigate={handleNavigate} region={region} />
    </div>
  );
}
