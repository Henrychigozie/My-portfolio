import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../hero.image.png";

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Herosection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const fullText = "A Frontend Developer";
  const illustrationUrl = Image;

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Link on Scroll Logic (Intersection Observer)
  // UPDATE THIS IN YOUR HEROSECTION COMPONENT
  useEffect(() => {
    const observerOptions = {
      root: null,
      // This "margin" ensures the section is detected when it hits
      // the top 30% of the viewport, which feels much more natural.
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        // We only update if the section is entering the "active" zone
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Make sure these match the IDs on your sections exactly
    const sections = ["home", "about", "projects", "services", "contact"];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Typewriter Effect
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
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 ${
          // If mobile menu is open, we want the navbar to stay "above" everything
          // but without the background blur interfering with the menu overlay
          isMobileMenuOpen ? "z-[70] bg-transparent" : "z-[60]"
        } ${
          scrolled
            ? "bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Professional Logo Identity */}
          <a
            href="#home"
            className={`flex items-center gap-2 group ${isMobileMenuOpen ? "hidden" : ""}`}
          >
            <div className="bg-green-500 text-[#0f172a] w-8 h-8 flex items-center justify-center rounded font-black text-lg">
              A
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold tracking-tighter text-lg uppercase">
                Anaekwe
              </span>
              <span className="text-green-500 font-medium text-[10px] tracking-[0.2em] uppercase">
                Chigozie Henry
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[13px] font-medium uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative transition-colors duration-300 hover:text-green-400 ${
                    activeSection === link.href.slice(1)
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="px-5 py-2 border border-green-500/30 text-green-400 text-xs font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile Toggle Button - Moved to z-[71] to stay on top of menu if needed */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition relative z-[71]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* We use a simple conditional here so the icon changes even if menu is sliding */}
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Overlay: z-[65] to be under the navbar content but over the page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[65] md:hidden"
            />

            {/* Menu Panel: z-[66] */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 w-[85%] sm:w-[400px] h-full bg-[#0f172a] z-[66] flex flex-col shadow-2xl md:hidden border-l border-white/5"
            >
              {/* Adjusted Padding to not clash with the fixed Navbar icon */}
              <div className="flex items-center justify-between px-8 py-8 h-[92px]">
                <div className="font-bold tracking-tighter text-lg uppercase text-white/90">
                  H. <span className="text-green-500">CHIGOZIE</span>
                </div>
                {/* Internal close button is hidden on mobile because we use the toggle button in the navbar */}
              </div>

              {/* Main Navigation */}
              <nav className="flex flex-col gap-1 px-8 mt-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-6">
                  Menu
                </p>

                <div className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group py-4 flex items-center justify-between border-b border-white/[0.03]"
                    >
                      <span
                        className={`text-[15px] font-medium tracking-tight transition-all duration-300 ${
                          activeSection === link.href.slice(1)
                            ? "text-green-400 pl-2"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-green-500 transition-all duration-500 ${
                          activeSection === link.href.slice(1)
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                      />
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Footer Section (Availability and Socials) */}
              <div className="mt-auto p-8 bg-black/20">
                <div className="space-y-6">
                  <div>
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mb-2 font-semibold">
                      Status
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-white/70">
                        Available for hire
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mb-2 font-semibold">
                      Contact
                    </p>
                    <a
                      href="mailto:h85033898@gmail.com?subject=Project Inquiry"
                      className="text-md text-white/90 hover:text-green-400 transition-colors"
                    >
                      ChigozieHenry.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION (Unchanged styling/content as requested) */}
      <section
        id="home"
        className="relative h-full bg-[#0f172a] text-white overflow-hidden py-[50px]"
      >
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6 pt-24 md:pt-32">
          <div className="space-y-8 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-green-400 tracking-widest text-sm uppercase block"
            >
              Hello, I’m
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Anaekwe <br /> Chigozie Henry
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-300 font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="max-w-lg mx-auto md:mx-0 text-gray-400 leading-relaxed">
              I build clean, responsive, and scalable user interfaces with
              modern frontend technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <a
                href="https://wa.me/2347084544389?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch."
                target="blank"
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
          <div className="relative flex justify-center md:justify-end max-sm:hidden">
            <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-emerald-400/30 via-green-500/20 to-teal-400/30 backdrop-blur-xl shadow-xl shadow-emerald-500/20">
              <img
                src={illustrationUrl}
                alt="Developer Illustration"
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 rotate-22"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
