import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { business } from './config/business';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { WinePage } from './pages/WinePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { ArrowUpRight, Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showMobileFloatingCta, setShowMobileFloatingCta] = useState(false);

  // Sync with browser URL hash for friendly shareable links and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'menu', 'about', 'wine', 'reviews', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for mobile floating reservation CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileFloatingCta(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'wine':
        return <WinePage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1B19] font-sans selection:bg-[#6E2634] selection:text-white">
      {/* Global Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#6E2634] text-white text-xs font-semibold rounded-xs"
      >
        Skip to main content
      </a>

      {/* Global Header / Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Floating Quick Action Bar */}
      {showMobileFloatingCta && (
        <aside
          id="mobile-floating-actions"
          aria-label="Quick mobile booking actions"
          className="md:hidden fixed bottom-4 inset-x-4 z-40 flex items-center gap-2 p-2 bg-[#1C1B19]/95 backdrop-blur-md rounded-xs border border-[#33312E] shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          <a
            id="floating-call-btn"
            href={business.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#292724] text-white text-xs font-medium rounded-xs border border-[#3D3A35] active:bg-[#33312E]"
            aria-label={`Call Richer Restaurant at ${business.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#A88653]" />
            <span className="truncate">Call</span>
          </a>

          <a
            id="floating-reserve-btn"
            href={business.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#6E2634] active:bg-[#8B3042] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </aside>
      )}
    </div>
  );
}
