import React from 'react';
import { PageId } from '../types';
import { business } from '../config/business';
import { MapPin, Phone, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#1C1B19] text-[#EAE6DE] pt-16 pb-12 border-t border-[#33312E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#33312E]">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-3xl tracking-wider text-white">RICHER</span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-sans mt-0.5">
                Restaurant Paris 9
              </p>
            </div>
            <p className="text-sm text-[#A5A096] leading-relaxed max-w-sm">
              An understated restaurant with exposed-stone walls offering creative local dishes and a large wine list in the 9th arrondissement of Paris.
            </p>
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 text-xs text-[#EAE6DE] bg-[#292724] px-3 py-1.5 rounded-xs border border-[#3D3A35]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A88653]" />
                <span>Verified Business Information · 2 Rue Richer</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#A88653] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {(['home', 'menu', 'about', 'wine', 'reviews', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    id={`footer-nav-${page}`}
                    onClick={() => handleNav(page)}
                    className="text-[#D3CEB8] hover:text-white transition-colors capitalize text-left cursor-pointer"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Col */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#A88653] font-semibold">
              Location & Contact
            </h3>
            <div className="space-y-2.5 text-sm text-[#D3CEB8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A88653] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">{business.address}</p>
                  <p className="text-xs text-[#A5A096]">Plus Code: {business.plusCode}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A88653] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={business.phoneHref}
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-[#6E2634]"
                >
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#A88653] shrink-0" />
                <span className="text-xs text-[#EAE6DE]">{business.status}</span>
              </div>
            </div>
          </div>

          {/* Services & Reservation CTA Col */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#A88653] font-semibold">
              Dine with Us
            </h3>
            <p className="text-xs text-[#A5A096] leading-relaxed">
              Services available: <span className="text-white font-medium">{business.services.join(' · ')}</span>. Average price range: {business.priceRangeFormatted}.
            </p>
            <div className="space-y-2.5">
              <a
                id="footer-reserve-btn"
                href={business.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#6E2634] hover:bg-[#8B3042] text-white text-xs tracking-widest uppercase font-medium rounded-xs transition-colors"
              >
                <span>Reserve a Table</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="footer-directions-btn"
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#292724] hover:bg-[#33312E] text-[#D3CEB8] hover:text-white text-xs tracking-wider rounded-xs border border-[#3D3A35] transition-colors"
              >
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with official reference info and copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A756D] gap-4">
          <p>© 2026 Richer Restaurant Paris 9. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Official reference: <a href={business.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#A5A096] hover:underline">{business.website}</a></span>
            <span>·</span>
            <span>Menu source: <a href={business.menuSourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#A5A096] hover:underline">groupe-compagnon.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
