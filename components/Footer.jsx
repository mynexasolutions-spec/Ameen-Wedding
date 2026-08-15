import Link from "next/link";
import Image from "next/image";

const IconWhatsApp = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.22h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2zm5.835 14.168c-.247.694-1.228 1.328-1.996 1.493-.526.112-1.21.202-3.518-.752-2.955-1.22-4.856-4.226-5.004-4.423-.147-.197-1.202-1.6-1.202-3.053 0-1.452.76-2.167 1.03-2.457.27-.29.592-.363.789-.363.197 0 .395.002.568.01.185.008.435-.07.68.518.247.593.84 2.052.914 2.2.074.148.123.321.025.518-.099.197-.148.32-.296.494-.148.173-.31.387-.443.52-.148.148-.303.309-.13.606.173.297.77 1.272 1.65 2.056 1.132 1.008 2.087 1.32 2.383 1.468.296.148.469.123.642-.074.173-.197.74-0.864.938-1.16.197-.296.395-.247.666-.148.271.099 1.727.815 2.023.963.296.148.493.222.567.346.074.123.074.716-.173 1.41z" />
  </svg>
);

const IconTelegram = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const IconInstagram = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.8} />
    <path strokeWidth={1.8} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0b0907] border-t border-gold/30 text-white/80 pt-20 pb-10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-16 w-56 sm:h-20 sm:w-72 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png?v=2"
                  alt="Ameena Wedding Couture Logo"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-white/70 font-normal">
              Celebrating handcrafted elegance, fine Zardozi embroidery, and imperial heritage in every stitch of our bespoke bridal lehengas.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919390562826?text=Hi%20Ameena%20Couture,%20I%20want%20to%20book%20a%20private%20bridal%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-lg group"
                aria-label="WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                <span>WhatsApp Atelier</span>
              </a>

              <a
                href="https://t.me/wedding_cuture_by_ameena"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-lg group"
                aria-label="Telegram"
              >
                <IconTelegram className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
                <span>Telegram</span>
              </a>

              <a
                href="https://www.instagram.com/wedding_couture_by_ameena?igsh=MW1vOXR5d3RiaXY2eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-amber-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-lg group"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" />
                <span>@wedding_couture_by_ameena</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-light font-bold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70 font-medium">
              <li>
                <Link href="/" className="hover:text-gold-light transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span>Atelier Home</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-gold-light transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span>Masterpieces &amp; Lookbook</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Bespoke Services */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-light font-bold">
              Private Concierge
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70 font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Private Bridal Consultations</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/90 font-mono text-xs">
                <span className="text-gold-light font-bold">EMAIL:</span>
                <span>hello@ameenacouture.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/90 font-mono text-xs">
                <span className="text-gold-light font-bold">PHONE:</span>
                <a href="tel:+919390562826" className="hover:text-gold-light transition-colors">+91 93905 62826</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-widest text-white/50 uppercase font-mono gap-4 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Ameena Wedding Couture. All Rights Reserved.</span>
          <span className="text-gold-light font-bold flex items-center gap-1.5">
            <span>Handcrafted With Precision</span>
            <span>&middot;</span>
            <span>Royal Atelier</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
