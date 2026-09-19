import React, { useState } from 'react';
import { business } from '../config/business';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowUpRight, Utensils, ExternalLink, Info } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Starters' | 'Mains'>('All');

  const filteredDishes =
    activeCategory === 'All'
      ? business.verifiedDishes
      : business.verifiedDishes.filter((dish) => dish.category === activeCategory);

  return (
    <div id="page-menu" className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
          Kitchen & Seasonal Plates
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-tight">
          The Menu at Richer
        </h1>
        <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed font-light">
          An evolving selection of creative local dishes prepared fresh daily. Our cooking celebrates balanced flavors, clean textures, and seasonal market arrivals in Paris.
        </p>

        {/* Pricing & Service Info */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-4 text-xs text-[#1C1B19]">
          <span className="px-3 py-1 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs">
            Average Price: <strong className="font-mono">{business.priceRangeFormatted}</strong>
          </span>
          <span className="px-3 py-1 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs">
            Services: <strong>{business.services.join(' · ')}</strong>
          </span>
        </div>
      </div>

      {/* Official Menu Source Notice */}
      <div className="mb-12 p-4 sm:p-5 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#6E2634] shrink-0 mt-0.5" />
          <div className="space-y-0.5 text-xs sm:text-sm text-[#5C5852]">
            <p className="font-medium text-[#1C1B19]">
              Verified Dishes & Daily Market Rotation
            </p>
            <p>
              In accordance with Parisian bistro tradition, menu offerings change regularly. Full current daily cards are published via our official partner group.
            </p>
          </div>
        </div>

        <a
          id="menu-source-official-link"
          href={business.menuSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1B19] hover:bg-[#33312E] text-white text-xs uppercase tracking-wider rounded-xs shrink-0 transition-colors"
        >
          <span>Official Menu Source</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs gap-1 text-xs sm:text-sm font-medium">
          {(['All', 'Starters', 'Mains'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xs transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#6E2634] text-white'
                  : 'text-[#6B665F] hover:text-[#1C1B19]'
              }`}
            >
              {cat === 'All' ? 'All Verified Dishes' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Dishes List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="p-6 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-2 hover:border-[#6E2634]/50 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-[#EAE6DE]/70 pb-2">
                  <h3 className="font-serif text-xl text-[#1C1B19] font-normal">
                    {dish.name}
                  </h3>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-[#6E2634] bg-[#F4F1EA] px-2 py-0.5 rounded-xs">
                    {dish.category}
                  </span>
                </div>
                <p className="text-sm text-[#5C5852] leading-relaxed pt-1 font-light">
                  {dish.description}
                </p>
                <p className="text-[11px] text-[#A5A096] italic">
                  {dish.source}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-2">
            <h4 className="font-serif text-lg text-[#1C1B19]">Desserts & Digestifs</h4>
            <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
              Seasonal fruit tarts, delicate ganaches, and artisan cheeses are presented verbally each evening along with our curated digestive and dessert wine list.
            </p>
          </div>
        </div>

        {/* Right Column: Culinary Presentation & Reservation Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xs overflow-hidden border border-[#DCD7CD] bg-white shadow-xs">
            <img
              id="menu-culinary-dish-img"
              src={business.images.dish}
              alt="Culinary plate featuring delicate pasta and stuffed zucchini at Richer Paris 9"
              className="w-full h-[280px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-5 bg-[#FBF9F5] space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#6E2634]">
                Culinary Focus
              </span>
              <h3 className="font-serif text-xl text-[#1C1B19]">
                Simplicity, texture & seasonal precision
              </h3>
              <p className="text-xs text-[#6B665F] leading-relaxed">
                Plates designed to be shared or enjoyed individually, paired with natural wines from independent estates.
              </p>
            </div>
          </div>

          {/* Direct Reserve Card */}
          <div className="p-6 bg-[#1C1B19] text-white rounded-xs space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-mono">
              Planning Your Visit
            </span>
            <h3 className="font-serif text-2xl text-white">
              Reserve Your Table
            </h3>
            <p className="text-xs text-[#D3CEB8] leading-relaxed">
              We recommend reserving ahead via our verified reservation channel on TheFork or Google.
            </p>
            <a
              id="menu-page-reserve-cta"
              href={business.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#6E2634] hover:bg-[#8B3042] text-white text-xs uppercase tracking-widest font-medium rounded-xs transition-colors"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
