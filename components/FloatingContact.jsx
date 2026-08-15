import Link from "next/link";

const PHONE_DISPLAY = "+91 00000 00000";
const PHONE_TEL = "+910000000000";
const PHONE_WA = "910000000000";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Call */}
      <Link
        href={`tel:${PHONE_TEL}`}
        aria-label={`Call ${PHONE_DISPLAY}`}
        className="group relative flex items-center"
      >
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#2a2420] px-3 py-1.5 text-xs font-semibold text-cream opacity-0 translate-x-2 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Call Now
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-lg shadow-gold/30 ring-1 ring-white/40 transition-all duration-300 group-hover:bg-gold-dark group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-gold/40">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1H7.6c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
          </svg>
        </span>
      </Link>

      {/* WhatsApp */}
      <Link
        href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
          "Hi Ameena Wedding Couture! I'd love to know more about your collections."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center"
      >
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#2a2420] px-3 py-1.5 text-xs font-semibold text-cream opacity-0 translate-x-2 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 ring-1 ring-white/40 transition-all duration-300 group-hover:bg-[#1fb956] group-hover:scale-110 group-hover:shadow-xl">
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
            <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4.1 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7C28.7 8.7 23 3 16 3Zm0 23.1c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4a10.3 10.3 0 0 1-1.6-5.6C5.3 9.8 10.1 5 16 5s10.7 4.8 10.7 10.7S21.9 26.1 16 26.1Zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
