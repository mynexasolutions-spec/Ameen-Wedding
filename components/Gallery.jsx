"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

// Clean Professional High-Fashion SVG Icon Components
const IconSparkles = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-15l1.5 4.5L21 8l-4.5 1.5L15 14l-1.5-4.5L9 8l4.5-1.5L15 3z" />
  </svg>
);

const IconGrid = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const IconDiamond = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 3h12l4 6-10 12L2 9l4-6z" />
  </svg>
);

const IconFilm = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="2" y="4" width="20" height="16" rx="3" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M2 8h5M17 8h5M2 12h20M2 16h5M17 16h5" />
  </svg>
);

const IconPlayFilled = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconEye = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

const IconClose = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconWhatsApp = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.22h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2zm5.835 14.168c-.247.694-1.228 1.328-1.996 1.493-.526.112-1.21.202-3.518-.752-2.955-1.22-4.856-4.226-5.004-4.423-.147-.197-1.202-1.6-1.202-3.053 0-1.452.76-2.167 1.03-2.457.27-.29.592-.363.789-.363.197 0 .395.002.568.01.185.008.435-.07.68.518.247.593.84 2.052.914 2.2.074.148.123.321.025.518-.099.197-.148.32-.296.494-.148.173-.31.387-.443.52-.148.148-.303.309-.13.606.173.297.77 1.272 1.65 2.056 1.132 1.008 2.087 1.32 2.383 1.468.296.148.469.123.642-.074.173-.197.74-0.864.938-1.16.197-.296.395-.247.666-.148.271.099 1.727.815 2.023.963.296.148.493.222.567.346.074.123.074.716-.173 1.41z" />
  </svg>
);

// Helper function to dynamically generate premium metadata for portfolio items
const getItemMeta = (src, index, type) => {
  if (type === "video") {
    const titles = [
      "Royal Bridal Motion Film",
      "Artisanal Zardozi Embroidery",
      "The Atelier Craft Session",
      "Heritage Velvet & Gold Weave",
      "Drape & Silhouette Runway",
      "Handcrafted Sequin Couture"
    ];
    return {
      category: "Couture Film",
      title: titles[index % titles.length],
    };
  } else {
    const categories = ["Royal Crimson", "Maroon & Velvet", "Pastel Mint", "Blush Silk", "Heavy Zardozi", "Champagne Gold"];
    const titles = [
      "Royal Crimson Bridal Lehenga",
      "Embroidered Heritage Silk Gown",
      "Mint Organza Silhouette",
      "Rose Quartz Anarkali Set",
      "Champagne Gold Zardozi Panel",
      "Regal Velvet Embroidered Dupatta",
      "Bespoke Handcrafted Bridal Set"
    ];
    return {
      category: categories[index % categories.length],
      title: titles[index % titles.length],
    };
  }
};

function GalleryItemCard({ item, index, onClick }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0.1;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-[2rem] bg-white border border-[#e2d5c3] shadow-sm hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 hover:border-gold/70 gold-glow-hover mb-6 shine-effect"
    >
      {/* Visual Content Container */}
      <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4]">
        {item.type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              muted
              playsInline
              loop
              preload="metadata"
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 0.1;
              }}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            {/* Live Motion Film Badge */}
            <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-gold/40 flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <IconPlayFilled className="w-3 h-3 text-gold-light" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">Film</span>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-500 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center text-gold-dark transform group-hover:scale-110 transition-transform duration-500 border border-gold/30">
                <IconPlayFilled className="w-6 h-6 ml-0.5" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Image
              src={item.src}
              alt={`Ameena Couture creation ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            {/* Couture Look Badge */}
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-gold/40 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform -translate-y-1 group-hover:translate-y-0">
              <IconEye className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2a2420]">View</span>
            </div>
          </>
        )}

        {/* Clean Subtle Glow Overlay on Hover (No Text/Captions) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default function Gallery({ items }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  useEffect(() => {
    function onKey(e) {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filteredItems]);

  const renderModal = () => {
    if (active === null || !filteredItems[active]) return null;

    const currentItem = filteredItems[active];

    return (
      <div
        className="fixed inset-0 w-screen h-screen z-[999999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in-up"
        onClick={() => setActive(null)}
      >
        {/* Minimalist Controls Bar - Only Counter & Close (No Captions/Titles) */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-[1000000] pt-2 px-2 sm:px-4">
          <span className="text-xs sm:text-sm tracking-widest font-mono text-gold-light font-bold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
            {active + 1} / {filteredItems.length}
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hi%20Ameena%20Couture,%20I%20am%20interested%20in%20this%20bridal%20outfit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-gold/20 hover:scale-105 transition-all border border-white/20"
            >
              <IconWhatsApp className="w-4 h-4 text-white" />
              <span>Inquire Design</span>
            </a>
            
            {/* Close button */}
            <button
              className="text-white hover:text-gold w-11 h-11 rounded-full border border-white/30 hover:border-gold flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-lg"
              onClick={() => setActive(null)}
              aria-label="Close modal"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Nav Button */}
        <button
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-black/60 sm:bg-white/10 hover:bg-gold-gradient text-white flex items-center justify-center transition-all shadow-2xl backdrop-blur-md border border-white/20 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            setActive((i) => (i - 1 + filteredItems.length) % filteredItems.length);
          }}
          aria-label="Previous"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>

        {/* Clean Center Media Display - pure focus on media */}
        <div
          className="relative z-10 w-full h-[80vh] sm:h-[82vh] mx-auto my-auto flex items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.type === "video" ? (
            <video
              src={currentItem.src}
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-[78vh] sm:max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={currentItem.src}
                alt="Ameena Couture Creation"
                fill
                sizes="100vw"
                priority
                className="object-contain rounded-2xl drop-shadow-2xl"
              />
            </div>
          )}
        </div>

        {/* Next Nav Button */}
        <button
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-black/60 sm:bg-white/10 hover:bg-gold-gradient text-white flex items-center justify-center transition-all shadow-2xl backdrop-blur-md border border-white/20 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            setActive((i) => (i + 1) % filteredItems.length);
          }}
          aria-label="Next"
        >
          <IconChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-12">
      {/* Floating Luxury Filter Pills - 100% Crisp Visible Text */}
      <div className="sticky top-16 sm:top-20 z-40 flex justify-center pb-2 sm:pb-5 px-1 sm:px-2 w-full">
        <div className="flex items-center justify-between gap-1 sm:gap-3 p-1 sm:p-1.5 rounded-full bg-white/95 border border-gold/30 shadow-xl backdrop-blur-2xl w-full max-w-2xl ring-1 ring-gold/10">
          {/* All Creations Tab */}
          <button
            onClick={() => {
              setFilter("all");
              setActive(null);
            }}
            className={`flex-1 min-w-0 px-2 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-tight sm:tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group ${
              filter === "all"
                ? "bg-gold-gradient text-white shadow-md shadow-gold/30"
                : "text-[#2a2420] hover:text-gold-dark hover:bg-gold/10"
            }`}
          >
            <IconGrid className={`w-3.5 h-3.5 flex-shrink-0 ${filter === "all" ? "text-white" : "text-gold-dark"}`} />
            <span className="whitespace-nowrap font-bold">All</span>
            <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0 ${
              filter === "all" ? "bg-white/25 text-white" : "bg-gold/15 text-gold-dark font-bold"
            }`}>
              {items.length}
            </span>
          </button>

          {/* Bridal Outfits Tab */}
          <button
            onClick={() => {
              setFilter("image");
              setActive(null);
            }}
            className={`flex-1 min-w-0 px-2 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-tight sm:tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group ${
              filter === "image"
                ? "bg-gold-gradient text-white shadow-md shadow-gold/30"
                : "text-[#2a2420] hover:text-gold-dark hover:bg-gold/10"
            }`}
          >
            <IconDiamond className={`w-3.5 h-3.5 flex-shrink-0 ${filter === "image" ? "text-white" : "text-gold-dark"}`} />
            <span className="whitespace-nowrap font-bold">Outfits</span>
            <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0 ${
              filter === "image" ? "bg-white/25 text-white" : "bg-gold/15 text-gold-dark font-bold"
            }`}>
              {items.filter(i => i.type === 'image').length}
            </span>
          </button>

          {/* Couture Films Tab */}
          <button
            onClick={() => {
              setFilter("video");
              setActive(null);
            }}
            className={`flex-1 min-w-0 px-2 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-tight sm:tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group ${
              filter === "video"
                ? "bg-gold-gradient text-white shadow-md shadow-gold/30"
                : "text-[#2a2420] hover:text-gold-dark hover:bg-gold/10"
            }`}
          >
            <IconFilm className={`w-3.5 h-3.5 flex-shrink-0 ${filter === "video" ? "text-white" : "text-gold-dark"}`} />
            <span className="whitespace-nowrap font-bold">Films</span>
            <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0 ${
              filter === "video" ? "bg-white/25 text-white" : "bg-gold/15 text-gold-dark font-bold"
            }`}>
              {items.filter(i => i.type === 'video').length}
            </span>
          </button>
        </div>
      </div>

      {/* Masonry Columns - Responsive Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
        {filteredItems.map((item, i) => (
          <GalleryItemCard
            key={item.src}
            item={item}
            index={i}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {mounted && createPortal(renderModal(), document.body)}
    </div>
  );
}

