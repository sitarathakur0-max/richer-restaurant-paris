import React from 'react';
import { business } from '../config/business';
import { ArrowUpRight, Wine as WineIcon, Sparkles, GlassWater, HeartHandshake } from 'lucide-react';

export const WinePage: React.FC = () => {
  return (
    <div id="page-wine" className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
          The Cellar & Selection
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-tight">
          A Wine List Worth Lingering Over
        </h1>
        <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed font-light">
          Richer is renowned among Paris 9 diners for its substantial and expressive wine program, spotlighting natural bottles, skin-contact orange wines, and independent vigneron terroirs.
        </p>
      </div>

      {/* Wine Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
        {/* Left Column: Wine Photograph */}
        <div className="lg:col-span-5">
          <div className="rounded-xs overflow-hidden border border-[#DCD7CD] bg-[#EFECE6] shadow-xs">
            <img
              id="wine-page-feature-img"
              src={business.images.wine}
              alt="Glass of orange wine on wood table at Richer Restaurant Paris 9"
              className="w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-[#FBF9F5] border-t border-[#EAE6DE]">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#A88653]">
                Guest Favorite
              </p>
              <p className="text-sm font-serif text-[#1C1B19]">
                Skin-contact orange wines celebrated in verified guest reviews
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Wine Focus */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B19] font-normal">
              A Living, Curated Selection
            </h2>
            <p className="text-[#5C5852] text-base leading-relaxed font-light">
              Rather than an unchanging, orthodox cellar, the wine list at Richer is dynamic and curious. We seek out producers who honor living soils and ancestral vinification techniques, yielding wines that are clean, expressive, and deeply food-friendly.
            </p>
            <p className="text-[#5C5852] text-base leading-relaxed font-light">
              As noted in guest reviews, our team takes pleasure in recommending unexpected pairings—from vibrant orange macerations that elevate tender seafood to earthy mineral whites and nuanced regional reds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#6E2634]">
                <Sparkles className="w-4 h-4" />
                <h3 className="font-serif text-lg font-medium text-[#1C1B19]">Orange & Skin-Contact</h3>
              </div>
              <p className="text-xs text-[#6B665F] leading-relaxed">
                Amber wines macerated with grape skins for aromatic complexity, tea-like tannins, and vibrant food versatility.
              </p>
            </div>

            <div className="p-4 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#6E2634]">
                <WineIcon className="w-4 h-4" />
                <h3 className="font-serif text-lg font-medium text-[#1C1B19]">Natural & Low-Intervention</h3>
              </div>
              <p className="text-xs text-[#6B665F] leading-relaxed">
                Fermented with indigenous yeasts and minimal sulfur, allowing each vintage and plot to speak with authentic clarity.
              </p>
            </div>

            <div className="p-4 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#6E2634]">
                <GlassWater className="w-4 h-4" />
                <h3 className="font-serif text-lg font-medium text-[#1C1B19]">Wines by the Glass</h3>
              </div>
              <p className="text-xs text-[#6B665F] leading-relaxed">
                A thoughtfully rotating chalkboard of pours to taste alongside starters, fish dishes, or slow-braised meats.
              </p>
            </div>

            <div className="p-4 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#6E2634]">
                <HeartHandshake className="w-4 h-4" />
                <h3 className="font-serif text-lg font-medium text-[#1C1B19]">Attentive Guidance</h3>
              </div>
              <p className="text-xs text-[#6B665F] leading-relaxed">
                Our floor team listens to your taste preferences and recommends bottles suited to your meal and curiosity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Review Excerpts on Wine */}
      <div className="p-8 sm:p-10 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-6 mb-16">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#6E2634] font-mono">
            Verified Guest Impressions
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B19]">
            What Diners Say About the Wine
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-2">
            <p className="text-xs font-mono text-[#A88653]">Dave Flett · Local Guide</p>
            <p className="text-sm text-[#4A4641] italic">
              "Paired exceptionally well with their orange wine recommendation... A standout dining experience in Paris 9."
            </p>
          </div>

          <div className="p-5 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-2">
            <p className="text-xs font-mono text-[#A88653]">Nataša Stantić · Local Guide</p>
            <p className="text-sm text-[#4A4641] italic">
              "The staff was genuinely accommodating and their orange wine recommendation was spot on."
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Reservation CTA */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <h3 className="font-serif text-3xl text-[#1C1B19]">
          Discover the Cellar in Person
        </h3>
        <p className="text-sm text-[#6B665F] leading-relaxed">
          Open until 12 AM. Join us for a glass or a full bottle alongside dinner at 2 Rue Richer.
        </p>
        <div className="pt-2">
          <a
            id="wine-page-reserve-cta"
            href={business.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6E2634] hover:bg-[#4E1822] text-white text-xs uppercase tracking-widest font-medium rounded-xs transition-colors"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
