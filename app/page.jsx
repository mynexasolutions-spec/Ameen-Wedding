"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "../components/TestimonialSlider";

const heroSlides = [
  {
    img: "/work/work-03.jpg",
    title: "Crimson Zardozi Heritage Lehenga",
    tag: "Flagship Couture",
    edition: "Edition 2026",
  },
  {
    img: "/work/work-16.jpg",
    title: "Imperial Velvet Bridal Ensemble",
    tag: "Royal Atelier",
    edition: "Bespoke Cut",
  },
  {
    img: "/work/work-10.jpg",
    title: "Deep Maroon Zardozi Silk Lehenga",
    tag: "Heritage Weave",
    edition: "Hand Crafted",
  },
  {
    img: "/work/work-08.jpg",
    title: "Pastel Mint Organza Bridal Outfit",
    tag: "Romantic Luxury",
    edition: "New Arrival",
  },
  {
    img: "/work/work-04.jpg",
    title: "Imperial Gold Embroidered Anarkali",
    tag: "Silver Threads",
    edition: "Royal Touch",
  },
];

const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const categories = [
  {
    title: "Royal Crimson Bridal",
    tag: "Bold, regal, unforgettable",
    img: "/work/work-16.jpg",
  },
  {
    title: "Maroon & Velvet Heritage",
    tag: "Deep hues, rich zardozi work",
    img: "/work/work-10.jpg",
  },
  {
    title: "Pastel Mint Organza",
    tag: "Soft tones, delicate detailing",
    img: "/work/work-08.jpg",
  },
  {
    title: "Blush Silk Silhouette",
    tag: "Graceful, romantic, timeless",
    img: "/work/work-05.jpg",
  },
];

const craft = [
  { img: "/work/work-20.jpg", label: "Hand Embroidery", tag: "Silver Threads" },
  { img: "/work/work-04.jpg", label: "Zardozi Weave", tag: "Imperial Craft" },
  { img: "/work/work-12.jpg", label: "Sequin Detail", tag: "Luxe Shimmer" },
  { img: "/work/work-19.jpg", label: "Fine Finishes", tag: "Atelier Touch" },
];

const process = [
  {
    n: "01",
    label: "Private Atelier Consult",
    desc: "Share your vision, body silhouette & royal fabric preferences with our master designers.",
  },
  {
    n: "02",
    label: "Heritage Sketching",
    desc: "We handpick pure silks & sketch bespoke hand-embroidered patterns tailored to your story.",
  },
  {
    n: "03",
    label: "Artisanal Handcrafting",
    desc: "Hundreds of hours of hand Zardozi, silver thread work, and delicate jewel embroidery.",
  },
  {
    n: "04",
    label: "The Royal Fitting",
    desc: "Precision tailored to fit you flawlessly, ready for your most unforgettable day.",
  },
];

const realTestimonials = [
  {
    quote: "Ameena Couture crafted my dream bridal lehenga for my Jaipur palace wedding. The zardozi embroidery and custom crimson velvet draped like royalty!",
    author: "Ananya Sharma",
    location: "Jaipur Royal Wedding",
    look: "Custom Crimson Zardozi Lehenga",
    rating: 5,
    avatar: "/work/work-01.jpg"
  },
  {
    quote: "Every single fitting was so personal. The master craftsmen adapted every motif to tell our story. I received endless compliments on my reception gown!",
    author: "Rhea Kapoor",
    location: "Mumbai Destination Wedding",
    look: "Champagne Gold Silk Gown",
    rating: 5,
    avatar: "/work/work-02.jpg"
  },
  {
    quote: "The royal mint organza silhouette was lightweight yet looked so regal. They delivered my outfit right on schedule with zero stress!",
    author: "Meera Singhania",
    location: "Udaipur Lake Palace",
    look: "Pastel Mint Organza Set",
    rating: 5,
    avatar: "/work/work-08.jpg"
  },
  {
    quote: "From fabric selection to final hand stitching, Ameena Atelier redefined true luxury for me. My bridal lehenga is a family heirloom now.",
    author: "Priyanka Reddi",
    location: "Delhi Heritage Sangeet",
    look: "Maroon & Velvet Heritage Lehenga",
    rating: 5,
    avatar: "/work/work-10.jpg"
  },
  {
    quote: "The intricate thread work and custom fitting exceeded all my expectations. Felt like an absolute princess on my wedding day!",
    author: "Sanya Malhotra",
    location: "Jodhpur Palace Gala",
    look: "Royal Rose Quartz Anarkali",
    rating: 5,
    avatar: "/work/work-04.jpg"
  },
  {
    quote: "Sensational craftsmanship! The gold embroidery shimmered so beautifully under the wedding lights. Exceptional team & service.",
    author: "Devika Oberoi",
    location: "Goa Beachfront Reception",
    look: "Blush Silk Embroidered Gown",
    rating: 5,
    avatar: "/work/work-05.jpg"
  },
  {
    quote: "Ameena Couture made our family wedding outfits so cohesive and stunning. High fashion couture at its finest!",
    author: "Tarini Mehta",
    location: "Chandigarh Royal Mandap",
    look: "Heavy Zardozi Bridal Dupatta Set",
    rating: 5,
    avatar: "/work/work-07.jpg"
  },
  {
    quote: "Unmatched attention to detail. Every motif was hand-carved to perfection. Worth every single penny for your big day!",
    author: "Kritika Varma",
    location: "Bespoke Delhi Reception",
    look: "Champagne Gold Panel Lehenga",
    rating: 5,
    avatar: "/work/work-09.jpg"
  },
  {
    quote: "The silhouette was tailored so flawlessly that I danced all night without any discomfort. Highly recommend Ameena Atelier!",
    author: "Ishita Roy",
    location: "Kolkata Heritage Wedding",
    look: "Royal Crimson Silk Lehenga",
    rating: 5,
    avatar: "/work/work-12.jpg"
  },
  {
    quote: "Truly world-class haute couture. They brought my vision of an imperial royal wedding outfit into reality so effortlessly.",
    author: "Radhika Goenka",
    location: "Jaipur City Palace Wedding",
    look: "Custom Velvet & Zardozi Weave",
    rating: 5,
    avatar: "/work/work-14.jpg"
  }
];

const strip = [
  "work-02",
  "work-05",
  "work-07",
  "work-09",
  "work-12",
  "work-14",
  "work-15",
  "work-16",
].map((n) => `/work/${n}.jpg`);

function RevealOnScroll({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeHero = heroSlides[currentSlide] || heroSlides[0];

  return (
    <div className="bg-[#faf6ef] text-[#2a2420] overflow-hidden">
      {/* Hero Section - High-Fashion Royal Atelier Redesign */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-1 sm:pt-6 pb-10 sm:pb-24 grid md:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
        {/* Dynamic Background Accents & Ambient Radial Glows */}
        <div className="absolute top-[-40px] sm:top-[-80px] left-[-60px] sm:left-[-120px] w-[260px] sm:w-[650px] h-[260px] sm:h-[650px] bg-gold/15 rounded-full blur-[90px] sm:blur-[170px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-[-30px] sm:bottom-[-50px] right-[-50px] sm:right-[-100px] w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] bg-gold/10 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none -z-10" />

        <div className="md:col-span-7 space-y-4 sm:space-y-8 z-10 animate-fade-in-up">
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gold/40 gold-shimmer-bg shadow-md backdrop-blur-md max-w-full">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-gold"></span>
            </span>
            <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold-dark truncate">
              Handmade Bridal Outfits &middot; Ameena Couture
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2a2420] leading-[1.15] sm:leading-[1.12]">
            Beautiful Bridal Wear, <br />
            <span className="italic font-serif text-gold-dark font-bold underline decoration-gold/30 underline-offset-8">Made By Hand For You</span>
          </h1>

          <p className="text-[#3a3028] text-sm sm:text-lg leading-relaxed max-w-xl font-semibold">
            Lehengas, Gowns, Suits &amp; Sarees — custom made by expert craftsmen to make your wedding day extra special.
          </p>

          {/* Stat Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md pt-1 sm:pt-2">
            {[
              { num: "2000+", label: "Happy Brides" },
              { num: "100%", label: "Hand Work" },
              { num: "15+", label: "Years Experience" },
            ].map((st) => (
              <div key={st.label} className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-gold/30 shadow-md backdrop-blur-sm text-center hover:border-gold transition-all duration-300 hover:scale-105">
                <span className="block font-serif text-base sm:text-2xl font-bold text-gold-dark">{st.num}</span>
                <span className="text-[8px] sm:text-[10px] uppercase font-bold text-[#3a3028] tracking-wider block">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 sm:pt-4 flex flex-row items-center gap-2.5 sm:gap-6">
            <Link
              href="/work"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 sm:px-9 py-3 sm:py-4 rounded-full bg-gold-gradient text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.2em] shadow-xl shadow-gold/30 hover:scale-105 transition-all group ring-2 ring-white/40 text-center whitespace-nowrap"
            >
              <span>Explore Our Work</span>
            </Link>
            <a
              href="https://wa.me/919390562826?text=Hi%20Ameena%20Couture,%20I%20want%20to%20book%20a%20private%20bridal%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-bold text-[#2a2420] hover:text-gold-dark transition-colors border-b-2 border-gold/50 pb-1 group self-center whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Display & 5-Slide Gallery */}
        <div className="md:col-span-5 relative mt-4 md:mt-0 animate-fade-in-up flex flex-row items-stretch gap-2.5 sm:gap-3.5 w-full h-[440px] sm:h-[620px]">
          {/* Main Visual Display Frame */}
          <div className="relative h-full flex-1 rounded-[1.8rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-gold/40 shadow-2xl gold-glow shine-effect group bg-[#090705]">
            {/* Cross-fading Hero Images */}
            {heroSlides.map((slide, idx) => (
              <Image
                key={slide.img}
                src={slide.img}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="(min-width: 768px) 40vw, 85vw"
                className={`object-cover object-top transition-all duration-1000 ease-in-out group-hover:scale-105 ${currentSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
              />
            ))}

            {/* Dark Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-95 p-4 sm:p-7 flex flex-col justify-end text-white z-10">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold-light font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{activeHero.tag}</span>
                </span>
                <span className="text-[8px] sm:text-[10px] font-mono bg-white/20 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-white font-bold border border-white/30">
                  {activeHero.edition}
                </span>
              </div>

              <h3 className="text-sm sm:text-2xl font-serif font-bold text-white leading-tight transition-all duration-500 drop-shadow-md">
                {activeHero.title}
              </h3>

              {/* Slide Progress Indicators */}
              <div className="flex items-center gap-1.5 sm:gap-2 pt-2.5 sm:pt-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-5 sm:w-9 bg-gold-gradient shadow-lg" : "w-2 bg-white/40 hover:bg-white"
                      }`}
                    aria-label={`Go to hero slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 5-Photo Thumbnail Column on the Right Side (Equal Height to Main Image) */}
          <div className="flex flex-col items-center justify-between gap-1.5 sm:gap-2.5 h-full flex-shrink-0">
            {heroSlides.map((slide, idx) => (
              <button
                key={`${slide.img}-${idx}`}
                onClick={() => setCurrentSlide(idx)}
                className={`relative w-12 sm:w-16 h-[18%] rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${currentSlide === idx
                  ? "border-gold scale-105 shadow-xl shadow-gold/30 ring-2 ring-white/50"
                  : "border-gold/30 opacity-60 hover:opacity-100 hover:scale-100"
                  }`}
              >
                <Image
                  src={slide.img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-0.5 right-0.5 text-[7px] sm:text-[8px] font-mono font-bold text-white bg-black/70 px-1 rounded">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Category Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 relative overflow-hidden">
        {/* Dynamic Glowing Accents */}
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/15 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none -z-10 animate-pulse" />

        {/* Section Title Header Block */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 border-b border-gold/30 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-gold/40 gold-shimmer-bg shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-bold">
                  Special Collections
                </span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-bold text-[#2a2420] tracking-tight">
                Bridal <span className="italic font-serif text-gold-dark font-bold underline decoration-gold/40 underline-offset-8">Outfits</span>
              </h2>
              <p className="text-[#3a3028] text-xs sm:text-base font-semibold leading-relaxed">
                Beautiful hand-embroidered lehengas, gowns, and sarees custom made for your wedding day.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-3xl font-serif font-bold text-gold-dark">04</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#2a2420] font-bold">Categories</span>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-gold-gradient text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-gold/30 hover:scale-105 transition-all group ring-2 ring-white/40 text-center whitespace-nowrap self-start sm:self-auto"
              >
                <span>View All Outfits</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4 Couture Cards - 2 per row on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 w-full">
          {categories.map((c, idx) => (
            <RevealOnScroll key={c.title} delay={idx * 150}>
              <Link
                href="/work"
                className="group relative w-full aspect-[3/4] sm:h-[520px] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] block border border-gold/40 bg-[#0d0a08] shadow-xl hover:shadow-2xl gold-glow-hover shine-effect transition-all duration-700 hover:-translate-y-2"
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090705]/95 via-black/30 to-transparent transition-opacity duration-700 group-hover:from-black/98" />

                <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-7 text-white flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold-light font-bold flex items-center gap-1 sm:gap-2 truncate">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="truncate">{c.tag}</span>
                  </span>

                  <h3 className="font-serif text-sm sm:text-2xl tracking-tight mt-1 sm:mt-1.5 text-white font-bold leading-tight drop-shadow-md">
                    {c.title}
                  </h3>

                  <div className="pt-2 sm:pt-3.5 flex items-center justify-between border-t border-white/20 mt-2 sm:mt-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.2em] text-gold-light">
                    <span className="group-hover:text-white transition-colors text-[9px] sm:text-xs">
                      View Outfits
                    </span>
                    <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-gold-gradient group-hover:text-white flex items-center justify-center transition-all border border-white/30 shadow-lg group-hover:scale-110">
                      <IconArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craft" className="bg-white/90 border-y border-gold/20 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-bold">
                  Fine Hand Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-bold text-[#2a2420] tracking-tight">
                Made With Love, <br />
                <span className="italic font-serif text-gold-dark font-bold underline decoration-gold/30 underline-offset-8">Built To Last</span>
              </h2>
              <p className="text-[#3a3028] text-xs sm:text-base font-semibold leading-relaxed max-w-xl mx-auto">
                Our tailors spend hundreds of hours on every dress to ensure every detail is perfect for you.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {craft.map((c, i) => (
              <RevealOnScroll key={c.label} delay={i * 120}>
                <div className="group flex flex-col text-center">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] border border-gold/35 bg-[#0d0a08] shadow-lg group-hover:shadow-2xl gold-glow-hover shine-effect transition-all duration-700 group-hover:-translate-y-2">
                    <Image
                      src={c.img}
                      alt={c.label}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-black/60 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-gold/40 text-[8px] sm:text-[9px] font-mono text-gold-light font-bold">
                      0{i + 1} &middot; {c.tag}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 space-y-0.5 sm:space-y-1">
                    <h4 className="text-sm sm:text-lg font-serif font-bold text-[#2a2420] group-hover:text-gold-dark transition-colors">
                      {c.label}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-dark font-bold">
                      Hand Work
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={300}>
            <div className="text-center mt-10 sm:mt-16">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-gold-gradient text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-gold/25 hover:scale-105 transition-all group ring-2 ring-white/40 text-center whitespace-nowrap"
              >
                <span>See All Outfits</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Us Section - Luxury Light Royal Cream Styling */}
      <section className="bg-[#f7f2e9] text-[#2a2420] border-y border-gold/30 py-20 sm:py-28 relative overflow-hidden">
        {/* Ambient Radial Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-gold/15 rounded-full blur-[170px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/40 gold-shimmer-bg shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-bold">
                  Why Ameena Couture
                </span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-bold text-[#2a2420] tracking-tight">
                Why Choose <span className="italic font-serif text-gold-dark font-bold underline decoration-gold/40 underline-offset-8">Ameena</span>
              </h2>
              <p className="text-[#3a3028] text-sm sm:text-lg font-semibold leading-relaxed max-w-lg mx-auto">
                4 simple reasons why brides love choosing Ameena Couture for their big day.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                n: "01",
                title: "100% Hand Embroidery",
                tag: "Handcrafted Work",
                desc: "Every design is handmade by expert embroiderers using fine gold and silver threads."
              },
              {
                n: "02",
                title: "Custom Fitted To You",
                tag: "Perfect Fitting",
                desc: "Made exactly to your body measurements with fitting trials so you look best."
              },
              {
                n: "03",
                title: "Pure Fine Fabrics",
                tag: "Best Silks & Velvet",
                desc: "We use only pure silks, organzas, and soft velvet for rich look and comfort."
              },
              {
                n: "04",
                title: "Guaranteed On-Time",
                tag: "Zero Stress",
                desc: "We deliver your outfit on time so you can enjoy your wedding without worry."
              }
            ].map((item, idx) => (
              <RevealOnScroll key={item.n} delay={idx * 130}>
                <div className="group relative p-7 sm:p-9 rounded-[2.2rem] bg-white border border-gold/40 shadow-xl hover:shadow-2xl gold-glow-hover shine-effect transition-all duration-700 hover:-translate-y-3 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5 sm:mb-7">
                      <span className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-dark">
                        {item.n}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark font-bold bg-gold/10 px-3.5 py-1 rounded-full border border-gold/25">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2a2420] tracking-tight group-hover:text-gold-dark transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4a4038] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gold/15 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-gold-dark font-bold">
                      Ameena Promise
                    </span>
                    <div className="w-9 h-9 rounded-full bg-gold/10 group-hover:bg-gold-gradient text-gold-dark group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <IconArrowRight className="w-4 h-4 text-gold-dark group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section - Light Cream Luxe Connected Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/40 gold-shimmer-bg shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-bold">
                Easy 4-Step Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-bold text-[#2a2420] tracking-tight">
              How We <span className="italic font-serif text-gold-dark font-bold underline decoration-gold/30 underline-offset-8">Work</span>
            </h2>
            <p className="text-[#3a3028] text-sm sm:text-lg font-semibold leading-relaxed max-w-lg mx-auto">
              4 simple steps from first design talk to your final outfit fitting.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {process.map((p, i) => (
            <RevealOnScroll key={p.n} delay={i * 140}>
              <div className="group relative p-7 sm:p-9 rounded-[2.2rem] bg-white border border-gold/35 shadow-xl hover:shadow-2xl gold-glow-hover shine-effect transition-all duration-700 hover:-translate-y-3 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-gradient text-white flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold shadow-lg shadow-gold/30 group-hover:scale-110 transition-transform">
                      {p.n}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark font-bold bg-gold/10 px-3.5 py-1 rounded-full border border-gold/25">
                      Step 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2a2420] tracking-tight group-hover:text-[#2a2420] transition-colors leading-snug">
                    {p.label}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4a4038] font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-gold-dark font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>Ameena Couture</span>
                  </span>
                  <IconArrowRight className="w-4 h-4 text-gold-dark transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Interactive Bride Testimonials Carousel */}
      <RevealOnScroll>
        <TestimonialSlider testimonials={realTestimonials} />
      </RevealOnScroll>

      {/* Closing CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 relative">
        <RevealOnScroll>
          <div className="relative h-[480px] sm:h-[580px] w-full rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden border border-gold/50 shadow-2xl gold-glow shine-effect">
            <Image
              src="/work/work-16.jpg"
              alt="Ameena Wedding Couture Crimson Lehenga"
              fill
              sizes="100vw"
              className="object-cover object-top transition-transform duration-[1600ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/80" />

            <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-5 py-10 space-y-5 text-white">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-light font-bold">
                  Book Your Design Session
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl text-white leading-[1.2] sm:leading-[1.18] font-bold tracking-tight">
                Let&apos;s Create Your <br />
                <span className="italic font-serif text-gold-light font-bold">
                  Dream Bridal Outfit
                </span>
              </h2>

              <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-lg font-semibold leading-relaxed">
                Book a private consultation with our team to design your custom wedding outfit.
              </p>

              <div className="pt-2">
                <Link
                  href="https://wa.me/919390562826?text=Hi%20Ameena%20Couture,%20I%20want%20to%20book%20a%20private%20bridal%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gold-gradient text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-gold/30 hover:scale-105 transition-all group border border-white/20 text-center"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Book Consultation</span>
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Instagram-style Infinite Marquee Strip */}
      <section className="pb-24 pt-12 overflow-hidden relative">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/90 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-bold">
              Real Work &amp; Bridal Moments
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#3a3028] font-bold">
            Live Handcrafting &middot; Hover To Pause
          </p>
        </div>

        {/* Infinite Horizontal Marquee Container */}
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-marquee gap-4 sm:gap-6 px-4">
            {/* Double the array for seamless infinite looping */}
            {[...strip, ...strip].map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="group relative w-[220px] sm:w-[280px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-gold/30 bg-[#0d0a08] shadow-lg hover:shadow-2xl gold-glow-hover shine-effect transition-all duration-500 hover:-translate-y-2 flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Ameena Atelier Showcase ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                {/* Glass Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light font-bold">
                    Ameena Couture Detail
                  </span>
                  <span className="text-xs font-serif font-bold text-white">
                    #AmeenaByHand
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

