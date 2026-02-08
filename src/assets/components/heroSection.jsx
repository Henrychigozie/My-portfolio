import React, { useState, useEffect } from "react";
import Image from "../hero.image.png";


const MenuIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ================= DATA ================= */

const navLinks = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

/* ================= COMPONENT ================= */

const Herosection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "A Frontend Developer";
  const illustrationUrl = Image;

  /* Sticky navbar effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Typing effect */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-full bg-[#0f172a] text-white overflow-hidden py-[50px]"
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10"
              : ""
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="font-bold tracking-widest text-lg">DREAM</div>

          <div className="hidden md:flex gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-green-400 transition ${
                  link.active ? "text-green-400" : "text-gray-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0f172a] z-40 flex flex-col items-center justify-center gap-10 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl hover:text-green-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* ================= HERO ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6 pt-24 md:pt-32">
        <div className="space-y-8 animate-fadeIn text-center md:text-left">
          <p className="text-green-400 tracking-widest text-sm uppercase">
            Hello, I’m
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Anaekwe <br /> Chigozie Henry
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-300 font-medium">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="max-w-lg mx-auto md:mx-0 text-gray-400 leading-relaxed">
            I build clean, responsive, and scalable user interfaces with modern
            frontend technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
            <a
              href="https://wa.me/2347084544389?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch." target="blank"
              className="px-7 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition"
            >
              Hire Me
            </a>

         <a
  href="https://github.com/Henrychigozie"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-3 border border-white/30 rounded-md hover:border-purple-500 hover:text-purple-500 transition"
>
  Check my GitHub
</a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center md:justify-end max-sm:hidden">
          <div
            className="
            w-[260px] h-[260px]
            sm:w-[300px] sm:h-[300px]
            md:w-[420px] md:h-[420px]

            rounded-full
            overflow-hidden
            flex items-center justify-center

            bg-gradient-to-br from-emerald-400/30 via-green-500/20 to-teal-400/30
            backdrop-blur-xl
            shadow-xl shadow-emerald-500/20
          "
          >
            <img
              src={illustrationUrl}
              alt="Developer Illustration"
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 rotate-22"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
