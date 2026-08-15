import Gallery from "../../components/Gallery";

export const metadata = {
  title: "Bespoke Portfolio — Ameena Wedding Couture",
};

const images = Array.from({ length: 23 }, (_, i) => ({
  type: "image",
  src: `/work/work-${String(i + 1).padStart(2, "0")}.jpg`,
}));

const videos = Array.from({ length: 17 }, (_, i) => ({
  type: "video",
  src: `/work/video-${String(i + 1).padStart(2, "0")}.mp4`,
}));

const items = [...videos, ...images];

export default function WorkPage() {
  return (
    <div className="bg-[#faf6ef] text-[#2a2420] min-h-screen relative overflow-hidden">
      {/* Dynamic Gold Aura Background Accents */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-gold/15 via-gold/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-[30%] right-[-100px] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-100px] w-[450px] h-[450px] bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-20 pb-20 sm:pb-28">
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gold/30 gold-shimmer-bg shadow-sm backdrop-blur-md max-w-full">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#c5a880] animate-ping flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-gold-dark truncate">
              Handcrafted Collection
            </span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2a2420] leading-[1.15] px-2">
            Our Bridal <span className="italic font-serif text-gold-dark font-bold block sm:inline">Collection</span>
          </h1>

          <p className="text-[#4a4038] text-xs sm:text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto px-2">
            Explore our handcrafted lehengas, gowns, and sarees. Every outfit is made with love by expert craftsmen using pure fabrics and fine hand embroidery.
          </p>

          {/* Stats Bar - Mobile Responsive */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 sm:pt-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl sm:rounded-full bg-white/70 border border-gold/20 shadow-sm backdrop-blur-sm max-w-full">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#2a2420] font-bold flex items-center gap-1.5">
              <span className="text-gold-dark text-sm sm:text-base">&#9733;</span> {images.length} Bridal Outfits
            </span>
            <span className="h-3 w-px bg-gold/30 hidden xs:inline-block" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#2a2420] font-bold flex items-center gap-1.5">
              <span className="text-gold-dark text-sm sm:text-base">&#9654;</span> {videos.length} Real Videos
            </span>
          </div>
        </div>

        <Gallery items={items} />
      </section>
    </div>
  );
}

