import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Sync state with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'services', 'about', 'contact'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        // Default route fallback
        setCurrentPage('home');
        window.history.replaceState(null, '', '#home');
      }
    };

    // Initialize on first load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Set hash route on navigation click
  const handleNavigate = (pageId: string) => {
    window.location.hash = pageId;
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render correct subpage
  const renderPageContent = () => {
    switch (currentPage) {
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-gold selection:text-navy w-full">
      {/* Sticky Top Bar */}
      <Navbar activePage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Stage */}
      <main className="flex-grow flex flex-col w-full animate-fade-in">
        {renderPageContent()}
      </main>

      {/* Solid Bottom Footprint */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
