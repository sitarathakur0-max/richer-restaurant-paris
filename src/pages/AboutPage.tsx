import React from 'react';
import { business } from '../config/business';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowUpRight, MapPin, Sparkles, Wine, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div id="page-about" className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
          Atmosphere & Ethos
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-tight">
          Understated by Design
        </h1>
        <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed font-light">
          A contemporary Parisian table rooted in the 9th arrondissement, pairing raw stone architecture with creative cooking and natural wine culture.
        </p>
      </div>

      {/* Hero Interior Visual */}
      <div className="mb-16 rounded-xs overflow-hidden border border-[#EAE6DE] bg-[#EFECE6] shadow-xs">
        <img
          id="about-dining-interior-img"
          src={business.images.hero}
          alt="Exposed stone interior and understated dining room at Richer Restaurant Paris 9"
          className="w-full h-[360px] sm:h-[480px] object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="p-4 sm:p-5 bg-[#F4F1EA] flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-[#5C5852] gap-2">
          <span>Atmosphere: Exposed-stone walls, natural timber, low ambient illumination</span>
          <span className="font-mono text-[#6E2634]">2 Rue Richer · 75009 Paris</span>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4">
          <div className="w-10 h-10 rounded-xs bg-[#F4F1EA] flex items-center justify-center text-[#6E2634]">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#1C1B19]">Paris 9 Neighborhood</h3>
          <p className="text-sm text-[#5C5852] leading-relaxed font-light">
            Set in the vibrant Faubourg-Montmartre district, Richer captures the unhurried creative energy of the 9th arrondissement, offering a welcoming retreat from the bustling boulevards.
          </p>
        </div>

        <div className="p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4">
          <div className="w-10 h-10 rounded-xs bg-[#F4F1EA] flex items-center justify-center text-[#6E2634]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#1C1B19]">Creative Local Dishes</h3>
          <p className="text-sm text-[#5C5852] leading-relaxed font-light">
            The kitchen embraces an inventive, product-first philosophy. Dishes are crafted from fresh Parisian market arrivals, balancing delicate sauces with surprising textural combinations.
          </p>
        </div>

        <div className="p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4">
          <div className="w-10 h-10 rounded-xs bg-[#F4F1EA] flex items-center justify-center text-[#6E2634]">
            <Wine className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#1C1B19]">A Generous Cellar</h3>
          <p className="text-sm text-[#5C5852] leading-relaxed font-light">
            Wine is an integral facet of the identity at Richer. Guests discover an expansive cellar highlighting low-intervention, organic, and skin-contact orange wines from independent growers.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-3xl mx-auto space-y-6 text-[#5C5852] text-base sm:text-lg leading-relaxed font-light border-t border-[#EAE6DE] pt-12">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B19] font-normal">
          An Authentic Parisian Table
        </h2>
        <p>
          At Richer, luxury is expressed through restraint rather than ostentation. The dining room strips away excessive formality, putting diners in direct proximity to the energy of the kitchen and the tactile warmth of historic Paris stone.
        </p>
        <p>
          Whether joining us for an aperitif and small plates at the counter or an unhurried dinner with a bottle of orange wine, guests experience the true spirit of contemporary Parisian dining: genuine warmth, culinary precision, and a convivial atmosphere.
        </p>
      </div>

      {/* Reservation CTA Block */}
      <div className="mt-16 p-8 sm:p-12 bg-[#1C1B19] text-white rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-mono">
            Experience Richer
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Join Us in Paris 9
          </h3>
          <p className="text-sm text-[#D3CEB8] max-w-md">
            Open daily until 12 AM. Reservations recommended for dinner.
          </p>
        </div>

        <a
          id="about-reserve-cta-btn"
          href={business.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#6E2634] hover:bg-[#8B3042] text-white text-xs uppercase tracking-widest font-medium rounded-xs transition-colors shrink-0"
        >
          <span>Reserve a Table</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
