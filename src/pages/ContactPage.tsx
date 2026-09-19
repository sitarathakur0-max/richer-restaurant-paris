import React from 'react';
import { business } from '../config/business';
import { MapPin, Phone, Clock, ArrowUpRight, Compass, UtensilsCrossed, ShieldAlert } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div id="page-contact" className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
          Find & Connect
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-tight">
          Contact & Location
        </h1>
        <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed font-light">
          Richer is situated at 2 Rue Richer in Paris 9. We welcome guests for lunch, dinner, and wine selections throughout the evening.
        </p>
      </div>

      {/* Primary Contact Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Essential Coordinates */}
        <div className="lg:col-span-6 space-y-6">
          {/* Address Card */}
          <div className="p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4">
            <div className="flex items-center gap-3 text-[#6E2634]">
              <MapPin className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Address</span>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#1C1B19]">{business.streetAddress}</p>
              <p className="text-[#5C5852] text-sm">{business.postalCode} {business.city}, {business.country}</p>
              <p className="text-xs text-[#A5A096] mt-1">{business.arrondissement}</p>
              <p className="text-xs font-mono text-[#7A756D] mt-1">Plus Code: {business.plusCode}</p>
            </div>
            <div className="pt-2">
              <a
                id="contact-directions-link"
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#6E2634] hover:text-[#4E1822] font-semibold transition-colors"
              >
                <span>Open in Google Maps for Navigation</span>
                <Compass className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Telephone Card */}
          <div className="p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4">
            <div className="flex items-center gap-3 text-[#6E2634]">
              <Phone className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Direct Telephone</span>
            </div>
            <div>
              <a
                id="contact-phone-dial-link"
                href={business.phoneHref}
                className="font-mono text-2xl sm:text-3xl text-[#1C1B19] hover:text-[#6E2634] transition-colors"
              >
                {business.phone}
              </a>
              <p className="text-xs text-[#6B665F] mt-1">
                Click to call directly from your device for inquiries or immediate reservations.
              </p>
            </div>
          </div>

          {/* Hours & Service Card */}
          <div className="p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4">
            <div className="flex items-center gap-3 text-[#6E2634]">
              <Clock className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Hours & Availability</span>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl text-[#1C1B19]">{business.status}</p>
              <p className="text-xs text-[#6B665F]">
                Open for evening dining and wine service.
              </p>
            </div>
            <div className="pt-3 border-t border-[#EAE6DE] flex items-center gap-2 text-xs text-[#5C5852]">
              <UtensilsCrossed className="w-4 h-4 text-[#6E2634]" />
              <span>Available Services: <strong>{business.services.join(' · ')}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Reservation & Transit Details */}
        <div className="lg:col-span-6 space-y-6">
          {/* Reservation Card */}
          <div className="p-8 sm:p-10 bg-[#1C1B19] text-white rounded-xs space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#A88653] font-mono">
              Table Bookings
            </span>
            <h2 className="font-serif text-3xl text-white">
              Reserve Your Table Online
            </h2>
            <p className="text-sm text-[#D3CEB8] leading-relaxed font-light">
              We encourage reserving in advance to ensure table availability in our intimate Paris 9 dining room.
            </p>

            <div className="pt-2 space-y-3">
              <a
                id="contact-page-reserve-btn"
                href={business.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#6E2634] hover:bg-[#8B3042] text-white text-xs uppercase tracking-widest font-medium rounded-xs transition-colors"
              >
                <span>Reserve a Table via TheFork</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-[#A5A096] text-center">
                Instant confirmation powered by our official reservation partner.
              </p>
            </div>
          </div>

          {/* Transit & Arrival Guide */}
          <div className="p-8 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs space-y-4">
            <h3 className="font-serif text-xl text-[#1C1B19]">
              How to Reach 2 Rue Richer
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5C5852]">
              <div>
                <strong className="text-[#1C1B19]">Metro Stations:</strong>
                <p>Cadet (Line 7) — 3 min walk</p>
                <p>Grands Boulevards (Lines 8 & 9) — 5 min walk</p>
                <p>Le Peletier (Line 7) — 5 min walk</p>
              </div>

              <div>
                <strong className="text-[#1C1B19]">Nearby Landmarks:</strong>
                <p>Folies Bergère, Musée Grévin, Passage des Panoramas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
