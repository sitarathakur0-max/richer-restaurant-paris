import React from 'react';
import { business } from '../config/business';
import { MapPin, Star, UtensilsCrossed, Clock } from 'lucide-react';

export const InfoStrip: React.FC = () => {
  return (
    <section
      id="business-info-strip"
      aria-label="Restaurant information summary"
      className="bg-[#F4F1EA] border-y border-[#EAE6DE] py-4 text-[#1C1B19]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs sm:text-sm">
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#6E2634] shrink-0" />
            <span className="font-medium">{business.address}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex text-[#A88653]">
              <Star className="w-3.5 h-3.5 fill-[#A88653]" />
            </div>
            <span className="font-semibold">{business.rating} / 5</span>
            <span className="text-[#6B665F]">({business.reviewCount.toLocaleString()} verified reviews)</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#6E2634] font-semibold">{business.priceRange}</span>
            <span className="text-[#6B665F]">per person</span>
          </div>

          {/* Status & Hours */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#6E2634]" />
            <span className="text-[#1C1B19] font-medium">{business.status}</span>
          </div>

          {/* Services */}
          <div className="flex items-center gap-2 text-[#6B665F]">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#6E2634]" />
            <span>{business.services.join(' · ')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
