"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const IconWhatsApp = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.22h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2zm5.835 14.168c-.247.694-1.228 1.328-1.996 1.493-.526.112-1.21.202-3.518-.752-2.955-1.22-4.856-4.226-5.004-4.423-.147-.197-1.202-1.6-1.202-3.053 0-1.452.76-2.167 1.03-2.457.27-.29.592-.363.789-.363.197 0 .395.002.568.01.185.008.435-.07.68.518.247.593.84 2.052.914 2.2.074.148.123.321.025.518-.099.197-.148.32-.296.494-.148.173-.31.387-.443.52-.148.148-.303.309-.13.606.173.297.77 1.272 1.65 2.056 1.132 1.008 2.087 1.32 2.383 1.468.296.148.469.123.642-.074.173-.197.74-0.864.938-1.16.197-.296.395-.247.666-.148.271.099 1.727.815 2.023.963.296.148.493.222.567.346.074.123.074.716-.173 1.41z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile drawer is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const renderMobileDrawer = () => {
    if (!open) return null;

    return (
      <div
        className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-md animate-fade-in-up flex justify-end"
        onClick={() => setOpen(false)}
      >
        <div
          className="w-[85%] max-w-sm h-full bg-[#faf6ef] border-l border-gold/30 p-6 flex flex-col justify-between text-[#2a2420] shadow-2xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gold/20">
              <div className="relative h-12 w-44">
                <Image
                  src="/logo.png?v=2"
                  alt="Ameena Logo"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white border border-gold/30 flex items-center justify-center text-[#2a2420] hover:bg-gold-gradient hover:text-white transition-colors shadow-sm"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-3 pt-2">
              <Link
                href="/"
                className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 uppercase text-xs tracking-[0.2em] font-bold ${
                  pathname === "/"
                    ? "bg-gold-gradient text-white border-gold shadow-md shadow-gold/20"
                    : "bg-white text-[#2a2420] border-gold/20 hover:border-gold/50 shadow-sm"
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>Home</span>
              </Link>

              <Link
                href="/work"
                className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 uppercase text-xs tracking-[0.2em] font-bold ${
                  pathname === "/work"
                    ? "bg-gold-gradient text-white border-gold shadow-md shadow-gold/20"
                    : "bg-white text-[#2a2420] border-gold/20 hover:border-gold/50 shadow-sm"
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>Our Work</span>
              </Link>
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="space-y-4 pt-6 border-t border-gold/20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-[10px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Bespoke Concierge Active</span>
            </div>

            <a
              href="https://wa.me/919999999999?text=Hi%20Ameena%20Couture,%20I%20want%20to%20book%20a%20private%20bridal%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-[0.18em] shadow-lg text-center border border-emerald-400/40"
              onClick={() => setOpen(false)}
            >
              <IconWhatsApp className="w-4 h-4 text-white flex-shrink-0" />
              <span className="whitespace-nowrap">Book Consult on WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/wedding_couture_by_ameena?igsh=MW1vOXR5d3RiaXY2eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-[11px] font-bold uppercase tracking-wider text-center shadow-md"
            >
              <span>@wedding_couture_by_ameena</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf6ef]/90 backdrop-blur-xl border-b border-gold/25 shadow-sm transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
        {/* Brand Logo - Enlarged Size */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-12 w-40 sm:h-16 sm:w-56 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png?v=2"
              alt="Ameena Wedding Couture Logo"
              fill
              className="object-contain object-left"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] font-bold text-[#2a2420]">
          <Link
            href="/"
            className={`transition-colors duration-300 relative py-1.5 flex items-center gap-1.5 ${
              pathname === "/" ? "text-gold-dark font-extrabold" : "hover:text-gold-dark text-[#2a2420]/80"
            }`}
          >
            {pathname === "/" && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />}
            <span>Home</span>
          </Link>

          <Link
            href="/work"
            className={`transition-colors duration-300 relative py-1.5 flex items-center gap-1.5 ${
              pathname === "/work" ? "text-gold-dark font-extrabold" : "hover:text-gold-dark text-[#2a2420]/80"
            }`}
          >
            {pathname === "/work" && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />}
            <span>Our Work</span>
          </Link>
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%20Ameena%20Couture,%20I%20want%20to%20book%20a%20private%20bridal%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gold-gradient text-white text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-gold/30 hover:scale-105 transition-all duration-300 ring-2 ring-white/40"
          >
            <IconWhatsApp className="w-4 h-4 text-white" />
            <span>Book Consult</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-[#2a2420] hover:text-gold-dark transition-colors p-2 rounded-xl border border-gold/30 bg-white/90 shadow-sm flex items-center justify-center"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M3 8h18M3 16h18"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Render Mobile Drawer via Portal for 100% clean overlay */}
      {mounted && createPortal(renderMobileDrawer(), document.body)}
    </header>
  );
}
