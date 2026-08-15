import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata = {
  title: "Ameena Wedding Couture",
  description:
    "Lehngas, Gowns, Suits & Sarees — exquisitely handcrafted for brides & women who value artistry and tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-cream text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
