"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const IconStar = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const IconChevronLeft = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const IconChevronRight = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function TestimonialSlider({ testimonials }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 640 ? 380 : 310;
      
      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft <= 10) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  // Auto-play timer combined with manual buttons
  useEffect(() => {
    const timer = setInterval(() => {
      scroll("right");
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative overflow-hidden">
      {/* Section Header with Left/Right Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-gold/20">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-bold">
              Royal Bride Stories &middot; 10+ Real Reviews
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#2a2420] tracking-tight">
            Words From Our <span className="italic font-serif text-gold-dark font-bold underline decoration-gold/30 underline-offset-8">Brides</span>
          </h2>
          <p className="text-[#3a3028] text-xs sm:text-sm font-semibold max-w-lg leading-relaxed">
            Real experiences from brides who trusted Ameena Couture for their special day.
          </p>
        </div>

        {/* Manual Left / Right Swipe Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-[#2a2420] text-white hover:bg-gold-gradient hover:text-white flex items-center justify-center transition-all shadow-md group border border-gold/40"
            aria-label="Scroll Left"
          >
            <IconChevronLeft className="w-5 h-5 text-white transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-[#2a2420] text-white hover:bg-gold-gradient hover:text-white flex items-center justify-center transition-all shadow-md group border border-gold/40"
            aria-label="Scroll Right"
          >
            <IconChevronRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll / Auto-Swipe Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
      >
        {testimonials.map((t, idx) => (
          <div
            key={`${t.author}-${idx}`}
            className="group relative w-[300px] sm:w-[360px] p-7 rounded-[2.2rem] bg-white border border-gold/30 shadow-lg hover:shadow-2xl gold-glow-hover shine-effect transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between flex-shrink-0"
          >
            {/* Top Rating & Quote Symbol */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <IconStar key={i} className="w-3.5 h-3.5 text-gold" />
                  ))}
                </div>
                <span className="font-serif text-3xl text-gold/30 font-bold">&ldquo;</span>
              </div>

              <p className="font-serif italic text-sm text-[#2a2420] font-bold leading-relaxed min-h-[72px]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author Info Footer */}
            <div className="pt-5 mt-5 border-t border-gold/15 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/40 shadow-md flex-shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.author}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="text-sm font-serif font-bold text-[#2a2420] truncate">
                  {t.author}
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-gold-dark font-bold truncate">
                  {t.location}
                </p>
                <p className="text-[9px] text-[#4a4038] font-semibold truncate">
                  {t.look}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
