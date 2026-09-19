import React from 'react';
import { PageId } from '../types';
import { business } from '../config/business';
import { InfoStrip } from '../components/InfoStrip';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowUpRight, Star, MapPin, Compass, Utensils, Wine, Clock, Phone } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div id="page-home" className="space-y-0">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        aria-label="Welcome to Richer Restaurant Paris 9"
        className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F1EA] text-[#6E2634] text-xs uppercase tracking-[0.2em] font-medium border border-[#EAE6DE]">
                <span>Paris 9</span>
                <span>·</span>
                <span>2 Rue Richer</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-[1.08] tracking-tight">
                  Creative plates. <br />
                  <span className="italic text-[#6E2634]">Parisian character.</span>
                </h1>
                <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed max-w-xl font-light">
                  An understated restaurant with exposed-stone walls offering creative local dishes and a large wine list in the heart of Paris 9.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  id="hero-primary-reserve-btn"
                  href={business.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#6E2634] hover:bg-[#4E1822] text-white text-sm tracking-widest uppercase font-medium rounded-xs transition-all shadow-xs"
                >
                  <span>Reserve a Table</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  id="hero-secondary-menu-btn"
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F4F1EA] hover:bg-[#EAE6DE] text-[#1C1B19] text-sm tracking-wider uppercase font-medium rounded-xs border border-[#DCD7CD] transition-colors cursor-pointer"
                >
                  <span>Explore the Menu</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-[#EAE6DE] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block font-semibold text-sm text-[#1C1B19] font-mono">4.2 / 5</span>
                  <span className="text-[#6B665F]">1,402 reviews</span>
                </div>
                <div>
                  <span className="block font-semibold text-sm text-[#1C1B19] font-mono">€30–70</span>
                  <span className="text-[#6B665F]">Per person</span>
                </div>
                <div>
                  <span className="block font-semibold text-sm text-[#1C1B19] font-mono">Open</span>
                  <span className="text-[#6B665F]">Closes 12 AM</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual (Single Meaningful Editorial Photograph) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xs overflow-hidden shadow-md border border-[#EAE6DE] bg-[#EFECE6]">
                <img
                  id="hero-restaurant-image"
                  src={business.images.hero}
                  alt="Richer restaurant dining room in Paris 9 with warm rustic exposed stone walls and understated wooden bistro tables"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1B19]/80 via-[#1C1B19]/30 to-transparent p-5 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-[#D8C3A5]">
                    2 Rue Richer, 75009 Paris
                  </p>
                  <p className="text-sm font-serif italic text-white/95">
                    Exposed stone, ambient warmth, and a quiet neighborhood presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPACT INFORMATION STRIP */}
      <InfoStrip />

      {/* 3. RESTAURANT INTRODUCTION */}
      <section
        id="introduction-section"
        aria-label="About Richer"
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Neighborhood Table"
              title="A relaxed Parisian table with character."
            />
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#5C5852] text-base sm:text-lg leading-relaxed font-light">
            <p>
              Situated at 2 Rue Richer in Paris's 9th arrondissement, Richer is defined by its understated presence. The dining room pairs natural exposed-stone textures with clean lines, creating an intimate space where the focus stays squarely on the plate and the glass.
            </p>
            <p>
              Rather than relying on formal conventions, our kitchen prepares creative local dishes that evolve with market arrivals, supported by a large, carefully assembled wine list featuring distinctive orange and natural bottles.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-sans uppercase tracking-wider text-[#1C1B19]">
              <span className="px-3 py-1.5 bg-[#F4F1EA] border border-[#EAE6DE]">Exposed-Stone Walls</span>
              <span className="px-3 py-1.5 bg-[#F4F1EA] border border-[#EAE6DE]">Creative Local Dishes</span>
              <span className="px-3 py-1.5 bg-[#F4F1EA] border border-[#EAE6DE]">Curated Wine Selection</span>
              <span className="px-3 py-1.5 bg-[#F4F1EA] border border-[#EAE6DE]">Paris 9 Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOD SECTION (Restrained with 1 Food Visual) */}
      <section
        id="food-preview-section"
        aria-label="Food and kitchen highlights"
        className="py-16 sm:py-20 bg-[#F4F1EA] border-y border-[#EAE6DE]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Culinary Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-xs overflow-hidden border border-[#DCD7CD] bg-white shadow-xs">
                <img
                  id="food-feature-image"
                  src={business.images.dish}
                  alt="Delicately plated dish with stuffed zucchini and hazelnut garlic sauce served at Richer Restaurant"
                  className="w-full h-[340px] sm:h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FBF9F5] border-t border-[#EAE6DE]">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#6E2634]">
                    From the Kitchen
                  </p>
                  <p className="text-sm font-serif text-[#1C1B19] mt-0.5">
                    Fresh seasonal compositions & house-crafted pasta
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Highlights */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                eyebrow="Cuisine"
                title="A taste of Richer."
                description="Our kitchen emphasizes creative preparations of local ingredients, highlighting texture, herbaceous balance, and French culinary fundamentals."
              />

              <div className="space-y-4 pt-2">
                {business.verifiedDishes.slice(0, 3).map((dish) => (
                  <div
                    key={dish.id}
                    className="p-4 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-1 hover:border-[#6E2634]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg text-[#1C1B19] font-medium">{dish.name}</h3>
                      <span className="text-[11px] uppercase tracking-wider text-[#6E2634] font-medium">
                        {dish.category}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B665F] leading-relaxed">{dish.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  id="food-view-menu-btn"
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#6E2634] hover:bg-[#4E1822] text-white text-xs sm:text-sm tracking-wider uppercase font-medium rounded-xs transition-colors cursor-pointer"
                >
                  <Utensils className="w-4 h-4" />
                  <span>View Full Menu</span>
                </button>

                <span className="text-xs text-[#6B665F]">
                  Dishes change regularly based on market selections.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WINE SECTION (Restrained with 1 Wine Visual) */}
      <section
        id="wine-preview-section"
        aria-label="Wine selection"
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Wine Copy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="The Cellar"
              title="A wine list worth lingering over."
              description="A substantial, considered wine selection is at the core of the dining experience at Richer."
            />

            <div className="space-y-4 text-base text-[#5C5852] font-light leading-relaxed">
              <p>
                From lively natural whites and characterful orange macerations to expressive regional reds, the wine program is chosen to complement our creative dishes.
              </p>
              <p>
                Our team is always pleased to recommend bottles and glass pairings that elevate your meal, whether you are trying an orange wine for the first time or returning for a favorite French terroir.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs">
                <p className="font-serif text-lg text-[#1C1B19]">Natural & Orange</p>
                <p className="text-xs text-[#6B665F]">Vibrant, skin-contact wines</p>
              </div>
              <div className="p-3.5 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs">
                <p className="font-serif text-lg text-[#1C1B19]">French Terroirs</p>
                <p className="text-xs text-[#6B665F]">Independent winegrowers</p>
              </div>
              <div className="p-3.5 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs col-span-2 sm:col-span-1">
                <p className="font-serif text-lg text-[#1C1B19]">By the Glass</p>
                <p className="text-xs text-[#6B665F]">Rotated with kitchen plates</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="wine-explore-btn"
                onClick={() => onNavigate('wine')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1B19] hover:bg-[#33312E] text-white text-xs sm:text-sm tracking-wider uppercase font-medium rounded-xs transition-colors cursor-pointer"
              >
                <Wine className="w-4 h-4 text-[#A88653]" />
                <span>Explore Wine Program</span>
              </button>
            </div>
          </div>

          {/* Wine Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xs overflow-hidden border border-[#DCD7CD] bg-[#EFECE6] shadow-xs">
              <img
                id="wine-feature-image"
                src={business.images.wine}
                alt="Glass of natural orange wine on rustic wooden bistro table at Richer Restaurant"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FBF9F5] border-t border-[#EAE6DE]">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#A88653]">
                  Cellar Highlight
                </p>
                <p className="text-sm font-serif text-[#1C1B19] mt-0.5">
                  Orange and natural wines paired to seasonal seafood and local vegetables
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ATMOSPHERE SECTION (Text & Texture Led) */}
      <section
        id="atmosphere-section"
        aria-label="Restaurant atmosphere"
        className="py-16 sm:py-24 bg-[#EFECE6] border-y border-[#DCD7CD]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
            The Space
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
            Understated by design.
          </h2>
          <div className="w-12 h-px bg-[#6E2634] mx-auto opacity-60 my-4" />
          <p className="text-[#5C5852] text-base sm:text-lg leading-relaxed font-light">
            With raw exposed-stone masonry, gentle lighting, and an unpretentious neighborhood rhythm, Richer was created for genuine conversation and relaxed meals. Guests can sit in view of the kitchen bustle or settle into the cozy dining room for an unhurried dinner.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-[#1C1B19] uppercase tracking-widest font-medium">
            <span>• Raw Stone Walls</span>
            <span>• Intimate Dining Room</span>
            <span>• View Over The Kitchen</span>
            <span>• Paris 9 Spirit</span>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED REVIEWS & SOCIAL PROOF */}
      <section
        id="reviews-section"
        aria-label="Guest reviews"
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#EAE6DE]">
          <div>
            <SectionHeading
              eyebrow="Guest Feedback"
              title="Transparent dining reviews."
              description="Honest experiences shared by verified local guides and diners in Paris 9."
            />
          </div>

          <div className="bg-[#F4F1EA] px-5 py-4 border border-[#EAE6DE] rounded-xs shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex text-[#A88653]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A88653]" />
                ))}
              </div>
              <span className="font-mono text-xl font-bold text-[#1C1B19]">4.2</span>
              <span className="text-xs text-[#6B665F]">/ 5</span>
            </div>
            <p className="text-xs text-[#6B665F] mt-1">
              Based on {business.reviewCount.toLocaleString()} Google reviews
            </p>
          </div>
        </div>

        {/* Verified Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {business.verifiedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FBF9F5] p-6 border border-[#EAE6DE] rounded-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#A88653]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#A88653]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6B665F] font-mono">{review.date}</span>
                </div>

                <p className="text-sm text-[#4A4641] leading-relaxed font-light italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE6DE] space-y-1.5">
                <p className="text-xs font-semibold text-[#1C1B19]">{review.author}</p>
                <p className="text-[11px] text-[#7A756D]">{review.authorMeta}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {review.highlights.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 bg-[#F4F1EA] text-[#6E2634] rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            id="home-all-reviews-btn"
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F4F1EA] hover:bg-[#EAE6DE] text-[#1C1B19] text-xs uppercase tracking-wider font-medium rounded-xs border border-[#DCD7CD] transition-colors cursor-pointer"
          >
            <span>Read All Review Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 8. PARIS 9 LOCATION & HOURS */}
      <section
        id="location-section"
        aria-label="Location and access"
        className="py-16 sm:py-20 bg-[#F4F1EA] border-t border-[#EAE6DE]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Location Details Card */}
            <div className="lg:col-span-6 bg-[#FBF9F5] p-8 border border-[#EAE6DE] rounded-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
                  Location & Arrival
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B19] font-normal">
                  Find Richer in Paris 9
                </h2>
                <p className="text-[#6B665F] text-sm sm:text-base leading-relaxed font-light">
                  Located along Rue Richer between the Grands Boulevards and Cadet, Richer is easily reachable across central Paris.
                </p>

                <div className="space-y-3 pt-2 text-sm text-[#1C1B19]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#6E2634] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{business.address}</p>
                      <p className="text-xs text-[#6B665F]">{business.arrondissement}</p>
                      <p className="text-xs text-[#6B665F] font-mono mt-0.5">Plus Code: {business.plusCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#6E2634] shrink-0" />
                    <div>
                      <p className="font-medium">{business.status}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#6E2634] shrink-0" />
                    <div>
                      <a
                        id="location-phone-link"
                        href={business.phoneHref}
                        className="font-medium hover:text-[#6E2634] transition-colors underline underline-offset-4 decoration-[#6E2634]/50"
                      >
                        {business.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#EAE6DE]">
                <a
                  id="location-directions-btn"
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1B19] hover:bg-[#33312E] text-white text-xs tracking-wider uppercase font-medium rounded-xs transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-[#A88653]" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="location-call-btn"
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F4F1EA] hover:bg-[#EAE6DE] text-[#1C1B19] text-xs tracking-wider uppercase font-medium rounded-xs border border-[#DCD7CD] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6E2634]" />
                  <span>Call {business.phone}</span>
                </a>
              </div>
            </div>

            {/* Map Card Preview / Directions Visual */}
            <div className="lg:col-span-6 bg-[#EFECE6] border border-[#DCD7CD] rounded-xs p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-3 z-10">
                <span className="text-xs uppercase tracking-widest text-[#7A756D] font-mono">
                  Interactive Map & Coordinates
                </span>
                <h3 className="font-serif text-2xl text-[#1C1B19]">
                  Rue Richer · 75009 Paris
                </h3>
                <p className="text-sm text-[#5C5852] leading-relaxed">
                  Near Folies Bergère and Grands Boulevards. Metro stations: Cadet (Line 7) and Grands Boulevards (Lines 8, 9).
                </p>
              </div>

              <div className="my-6 p-4 bg-white/90 backdrop-blur-xs border border-[#DCD7CD] rounded-xs space-y-2 z-10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6B665F]">Coordinates</span>
                  <span className="font-mono text-[#1C1B19]">48.8744° N, 2.3458° E</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6B665F]">Arrondissement</span>
                  <span className="text-[#1C1B19]">9e (Faubourg-Montmartre)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6B665F]">Available Services</span>
                  <span className="text-[#1C1B19]">{business.services.join(' · ')}</span>
                </div>
              </div>

              <div className="z-10">
                <a
                  id="open-google-maps-card-btn"
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#6E2634] hover:bg-[#4E1822] text-white text-xs uppercase tracking-widest font-medium rounded-xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL RESERVATION CTA */}
      <section
        id="final-reservation-cta-section"
        aria-label="Table reservation call to action"
        className="py-20 sm:py-28 bg-[#1C1B19] text-white text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-sans font-semibold">
            Bookings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Your table in Paris 9 is waiting.
          </h2>
          <p className="text-[#D3CEB8] text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Reserve ahead for lunch or dinner. Experience creative local plates and a deep cellar of French and natural wines.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="final-cta-reserve-btn"
              href={business.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6E2634] hover:bg-[#8B3042] text-white text-sm tracking-widest uppercase font-medium rounded-xs shadow-md transition-all"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              id="final-cta-call-btn"
              href={business.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#292724] hover:bg-[#33312E] text-[#D3CEB8] hover:text-white text-sm tracking-wider uppercase font-medium rounded-xs border border-[#3D3A35] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#A88653]" />
              <span>{business.phone}</span>
            </a>
          </div>
          <p className="text-xs text-[#7A756D] pt-2">
            Average price: {business.priceRangeFormatted} · {business.status}
          </p>
        </div>
      </section>
    </div>
  );
};
