import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from '../types';
import { business } from '../config/business';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'wine', label: 'Wine' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE6DE]/80 py-3.5'
          : 'bg-[#FBF9F5]/80 backdrop-blur-xs border-b border-[#EAE6DE]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Text */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#6E2634] rounded-sm p-0.5"
            aria-label="Richer Restaurant Paris 9 - Return to Home"
          >
            <span className="block font-serif text-2xl sm:text-3xl tracking-wide text-[#1C1B19] group-hover:text-[#6E2634] transition-colors">
              RICHER
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#6B665F] uppercase font-sans">
              Paris 9 · Rue Richer
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Primary navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-sm tracking-wide transition-all cursor-pointer rounded-sm ${
                    isActive
                      ? 'text-[#6E2634] font-semibold border-b-2 border-[#6E2634]'
                      : 'text-[#1C1B19]/80 hover:text-[#1C1B19] hover:bg-[#F4F1EA]/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-phone-cta"
              href={business.phoneHref}
              className="inline-flex items-center gap-1.5 text-xs text-[#6B665F] hover:text-[#1C1B19] px-2.5 py-1.5 transition-colors"
              title="Call Richer Restaurant Paris 9"
            >
              <Phone className="w-3.5 h-3.5 text-[#6E2634]" />
              <span className="font-mono tracking-tight">{business.phone}</span>
            </a>

            <a
              id="header-reserve-cta"
              href={business.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#6E2634] hover:bg-[#4E1822] text-white text-xs sm:text-sm tracking-wider uppercase rounded-xs shadow-xs hover:shadow-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-[#6E2634] focus:ring-offset-2"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              id="mobile-header-reserve-cta"
              href={business.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#6E2634] text-white text-xs uppercase tracking-wider rounded-xs"
            >
              Reserve
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1B19] hover:bg-[#F4F1EA] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#6E2634]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FBF9F5] border-b border-[#EAE6DE] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 text-base tracking-wide rounded-xs transition-colors ${
                    isActive
                      ? 'bg-[#F4F1EA] text-[#6E2634] font-medium border-l-2 border-[#6E2634]'
                      : 'text-[#1C1B19] hover:bg-[#F4F1EA]/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#EAE6DE] space-y-2">
            <div className="text-xs text-[#6B665F] px-3 py-1 flex items-center justify-between">
              <span>{business.status}</span>
              <span>{business.priceRangeFormatted}</span>
            </div>
            <a
              id="mobile-drawer-phone"
              href={business.phoneHref}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#1C1B19] hover:text-[#6E2634]"
            >
              <Phone className="w-4 h-4 text-[#6E2634]" />
              <span>{business.phone}</span>
            </a>
            <a
              id="mobile-drawer-reserve-btn"
              href={business.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#6E2634] text-white text-sm uppercase tracking-wider rounded-xs font-medium"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
