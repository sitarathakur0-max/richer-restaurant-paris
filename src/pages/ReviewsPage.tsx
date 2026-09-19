import React from 'react';
import { business } from '../config/business';
import { Star, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div id="page-reviews" className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header with Official Rating Breakdown */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
          Verified Guest Feedback
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-tight">
          Guest Impressions & Ratings
        </h1>
        <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed font-light">
          Real dining accounts from verified Google Local Guides and patrons at 2 Rue Richer, reflecting both celebrated culinary moments and authentic feedback.
        </p>
      </div>

      {/* Aggregate Rating Banner */}
      <div className="max-w-2xl mx-auto mb-14 p-8 bg-[#F4F1EA] border border-[#EAE6DE] rounded-xs text-center space-y-4">
        <div className="flex justify-center items-center gap-3">
          <span className="font-mono text-5xl sm:text-6xl font-bold text-[#1C1B19]">
            {business.rating}
          </span>
          <div className="text-left space-y-1">
            <div className="flex text-[#A88653]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#A88653]" />
              ))}
            </div>
            <p className="text-xs text-[#6B665F]">Out of 5.0 points</p>
          </div>
        </div>

        <p className="text-sm text-[#1C1B19] font-medium">
          Based on {business.reviewCount.toLocaleString()} verified Google reviews
        </p>

        <div className="pt-2 flex flex-wrap justify-center items-center gap-3 text-xs text-[#6B665F]">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#A88653]" /> Verified Local Guide contributions
          </span>
          <span>·</span>
          <span>Dine-in · Takeout · Delivery</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="space-y-6 max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DE]">
          <h2 className="font-serif text-2xl text-[#1C1B19]">
            Selected Verified Testimonials
          </h2>
          <span className="text-xs text-[#6B665F]">Chronological submissions</span>
        </div>

        {business.verifiedReviews.map((review) => (
          <div
            key={review.id}
            className="p-6 sm:p-8 bg-[#FBF9F5] border border-[#EAE6DE] rounded-xs space-y-4 hover:border-[#DCD7CD] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE6DE]/70">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg font-semibold text-[#1C1B19]">{review.author}</h3>
                  <span className="text-[10px] px-2 py-0.5 bg-[#F4F1EA] text-[#6E2634] font-medium rounded-xs">
                    Verified Diner
                  </span>
                </div>
                <p className="text-xs text-[#6B665F]">{review.authorMeta}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex text-[#A88653]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-[#A88653]' : 'text-[#DCD7CD]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-[#7A756D]">{review.date}</span>
              </div>
            </div>

            <p className="text-base text-[#4A4641] leading-relaxed font-light italic">
              "{review.content}"
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {review.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 bg-[#F4F1EA] text-[#1C1B19] border border-[#EAE6DE] rounded-xs"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reservation CTA Box */}
      <div className="p-8 sm:p-12 bg-[#1C1B19] text-white rounded-xs text-center max-w-2xl mx-auto space-y-5">
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
          Experience Richer in Person
        </h3>
        <p className="text-sm text-[#D3CEB8] leading-relaxed">
          Join us at 2 Rue Richer for creative seasonal plates, an understated atmosphere, and our celebrated wine program.
        </p>
        <div className="pt-2">
          <a
            id="reviews-page-reserve-cta"
            href={business.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6E2634] hover:bg-[#8B3042] text-white text-xs uppercase tracking-widest font-medium rounded-xs transition-colors"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
